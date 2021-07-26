import { forwardRef, useEffect, useState } from 'react';
import Taro , {useRouter} from '@tarojs/taro';
import { View, Text, Button, Form, Input, Label } from '@tarojs/components';
import { AtForm, AtButton } from 'taro-ui';
import './registerInfo.less'
import { GetRegisterInfoDetail, ModifyRegisterInfo } from '@/services/MyService/MyService'

const RegisterInfo = (props:any,ref:any) => {
  const [ phoneNum, setPhoneNum ] = useState<any>();
  const [ userType, setUserType ] = useState<any>();
  const [ noRequireds ] = useState<any>(['email','mature']);
  const [ registerInfo, setRegisterInfo ] = useState<any>({});

  const router = useRouter();

  useEffect(()=>{
    setPhoneNum(router.params.phoneNum)
    setUserType(router.params.userType)
    GetRegisterInfoDetail({phoneNum:router.params.phoneNum}).then((res:any) => {
      const { code, data } = res;
      if(code == 0) {
        setRegisterInfo(data)
      }
    })
  },[])

  const doFinishOne = (args:any) => {
    const values = args.detail.value;
    let validated = true;
    for (let key in values) {
      if(!noRequireds.includes(key)){
        if(!values[key]){
          validated = false;
          break;
        }
      }
    }
    if(!validated){
      Taro.showToast({
        title: "表单必填项未填写完整",
        icon: 'none',
      })
      return;
    }
    const authInfo = Taro.getStorageSync("authInfo");
    const params = {
      ...values,
      wxUserType: userType,
      phoneNum: phoneNum,
      openid: authInfo.openid,
    }
    ModifyRegisterInfo(params).then((res:any) => {
      const { code } = res;
      if(code == 0) {
        authInfo.hasRegister = true;
        Taro.setStorageSync("authInfo",authInfo);
        Taro.reLaunch({url:"/pages/my/packMy/loginAuth/registerSuccess/registerSuccess"})
      }
    })
  }

  const doFinishTwo = (args:any) => {
    const values = args.detail.value;
    let validated = true;
    for (let key in values) {
      if(!noRequireds.includes(key)){
        if(!values[key]){
          validated = false;
          break;
        }
      }
    }
    if(!validated){
      Taro.showToast({
        title: "表单必填项未填写完整",
        icon: 'none',
      })
      return;
    }
    const authInfo = Taro.getStorageSync("authInfo");
    const params = {
      ...values,
      wxUserType: userType,
      phoneNum: phoneNum,
      openid: authInfo.openid,
    }
    ModifyRegisterInfo(params).then((res:any) => {
      const { code } = res;
      if(code == 0) {
        authInfo.hasRegister = true;
        Taro.setStorageSync("authInfo",authInfo);
        Taro.reLaunch({url:"/pages/my/packMy/loginAuth/registerSuccess/registerSuccess"})
      }
    })
  }
 
  return (
    <View className='registerInfo_page'>
      {userType == 1?<Form
        className="infoForm"
        onSubmit={doFinishOne}
      >
        <View className='form_item' style={{display:'none'}}>
          <Label className='label'>id</Label>
          <Input 
            name='id' 
            type='text' 
            placeholder='' 
            value={registerInfo.id}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>姓名</Label>
          <Input 
            name='name' 
            type='text' 
            placeholder='请输入姓名' 
            value={registerInfo.name}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>身高</Label>
          <Input 
            className='has_unit_input'
            name='height' 
            type='text' 
            placeholder='请输入身高' 
            value={registerInfo.height}
          />
          <Text className='unit'>cm</Text>
        </View>
        <View className='form_item'>
          <Label className='label required'>体重</Label>
          <Input 
            className='has_unit_input'
            name='weight' 
            type='text' 
            placeholder='请输入体重' 
            value={registerInfo.weight}
          />
          <Text className='unit'>kg</Text>
        </View>
        <View className='form_item'>
          <Label className='label'>邮箱</Label>
          <Input 
            name='email' 
            type='text' 
            placeholder='请输入邮箱' 
            value={registerInfo.email}
          />
        </View>
        <Button className='submit_btn' formType='submit'>完成</Button>
      </Form>
       :
       <Form
        className="infoForm"
        onSubmit={doFinishTwo}
      >
        <View className='form_item' style={{display:'none'}}>
          <Label className='label'>id</Label>
          <Input 
            name='id' 
            type='text' 
            placeholder='' 
            value={registerInfo.id}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>姓名</Label>
          <Input 
            name='name' 
            type='text' 
            placeholder='请输入姓名' 
            value={registerInfo.name}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>医院</Label>
          <Input 
            name='hospitalName' 
            type='text' 
            placeholder='请输入医院' 
            value={registerInfo.hospitalName}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>科室</Label>
          <Input 
            name='department' 
            type='text' 
            placeholder='请输入科室' 
            value={registerInfo.department}
          />
        </View>
        <View className='form_item'>
          <Label className='label required'>职务</Label>
          <Input 
            name='job' 
            type='text' 
            placeholder='请输入职务' 
            value={registerInfo.job}
          />
        </View>
        <View className='form_item'>
          <Label className='label'>特长</Label>
          <Input 
            name='mature' 
            type='text' 
            placeholder='请输入特长' 
            value={registerInfo.mature}
          />
        </View>
        <View className='form_item'>
          <Label className='label'>邮箱</Label>
          <Input 
            name='email' 
            type='text' 
            placeholder='请输入邮箱' 
            value={registerInfo.email}
          />
        </View>
        <Button className='submit_btn' formType='submit'>完成</Button>
      </Form>
      }
    </View>
  )
}


export default RegisterInfo;

