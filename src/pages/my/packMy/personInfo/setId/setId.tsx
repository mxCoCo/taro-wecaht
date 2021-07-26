import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import { AtButton,AtInput } from 'taro-ui';
import { DoSetIdNo } from '@/services/MyService/MyService';
import IconFont from '@/iconfont';
import './setId.less'

const SetId = forwardRef((props:any,ref:any) => {

  const [idNo,setIdNo] = useState<any>("");
  
  const router = useRouter();

  useEffect(()=>{
    setIdNo(router.params.idNo)
  },[])

  const doSave = () => {
    const param = {
      id: router.params.id,
      idNo: idNo?idNo:''
    }
    DoSetIdNo(param).then((res:any)=>{
      if(res.code == 0) {
        const pages = Taro.getCurrentPages();
        const page = pages[pages.length - 2];
        if (page == undefined || page == null) return;
        page.onLoad();
        Taro.navigateBack()
      }
    })
  }

  return (
    <View className='setId_page'>
      <View className='main'>
        <AtInput 
          className='myinput'
          name='idNo' 
          type='text' 
          placeholder='请输入ID' 
          value={idNo}
          onChange={(val)=>setIdNo(val)}
        />
        <View className='tip'>
          <IconFont name={'50'} size={30}/>
          <Text className='desc'>
            最多15个字符，字母开头，设置后不能修改
          </Text>
        </View>
        <AtButton className='btn_save' type='primary' onClick={doSave}>完成</AtButton>
      </View>
    </View>
  )
})


export default SetId;

