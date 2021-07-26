import { forwardRef, useEffect, useState, useRef } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Button, Text, Input } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { GetUserInfoDetail } from '@/services/MyService/MyService';
import {checkIdCard} from '@/utils/commonUtil';
import './realVerified.less'

const RealVerified = forwardRef((props:any,ref:any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const nameRef = useRef<any>();
  const idCardRef = useRef<any>();

  const router = useRouter();

  useEffect(()=>{
    const authInfo = Taro.getStorageSync("authInfo");
    const param = {
      id: router.params.id,
      openid: authInfo.openid,
    }
    GetUserInfoDetail(param).then((res:any)=>{
      if(res.code == 0) {
        setUserInfo(res.data)
      }
    })
  },[])

  const goDoctorVerifiedPage = () => {
    const name = nameRef.current.props.value;
    const idCard = idCardRef.current.props.value;
    const checkResult = checkIdCard(idCard);
    if(checkResult.status == 0){
      Taro.showToast({
        title: '身份证校验失败',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    Taro.navigateTo({url:"/pages/my/packMy/auth/doctorVerified/doctorVerified?name="+name+"&idCard="+idCard})
  }
 
  return (
    <View className='realVerified_page'>
      {/* <View className='title'>实名认证</View> */}
      <View className='main'>
        <View className='item'>
          <Text className='label'>国家地区</Text>
          <Text className='val'>中国</Text>
        </View>
        <View className='item'>
          <Text className='label'>姓名</Text>
          <Input className='val' ref={nameRef} value={userInfo.name}/>
        </View>
        <View className='item'>
          <Text className='label'>证件号码</Text>
          <Input className='val' maxlength={18} ref={idCardRef} value={userInfo.idCard}/>
        </View>
      </View>
      <AtButton className='next' type='primary' size='small' onClick={goDoctorVerifiedPage}>下一步</AtButton>
    </View>
  )
})


export default RealVerified;

