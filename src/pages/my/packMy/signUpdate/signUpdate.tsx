import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components'
import { AtTextarea , AtButton } from 'taro-ui';
import { GetUserInfoDetail,ModifySignature } from '@/services/MyService/MyService';
import './signUpdate.less'

const SignUpdate = forwardRef((props:any,ref:any) => {

  const [signValue,setSignValue] = useState<any>("");
  
  const router = useRouter();

  useEffect(()=>{
    const authInfo = Taro.getStorageSync("authInfo");
    const param = {
      id: router.params.id,
      openid: authInfo.openid,
    }
    GetUserInfoDetail(param).then((res:any)=>{
      if(res.code == 0) {
        setSignValue(res.data.signature)
      }
    })
  },[])

  const doSave = () => {
    const param = {
      id: router.params.id,
      signature: signValue?signValue:'',
    }
    ModifySignature(param).then((res:any)=>{
      if(res.code == 0) {
        Taro.switchTab({
          url:"/pages/my/my",
          success: () => {
            const page = Taro.getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          } 
        })
      }
    })
  }

  const handleChange = (val:any) => {
    setSignValue(val)
  }
 
  return (
    <View className='signUpdate_page'>
      <View className='main'>
        <AtTextarea
          value={signValue}
          onChange={handleChange}
          height={300}
          maxLength={200}
          placeholder='你的个性签名是...'
        />
      </View>
      <View className='foot'>
        <AtButton className='btn_save' type='primary' onClick={doSave}>保存</AtButton>
      </View>
    </View>
  )
})


export default SignUpdate;

