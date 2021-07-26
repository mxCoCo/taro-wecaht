import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components'
import { GetUserInfoDetail } from '@/services/MyService/MyService';
import { AtTextarea ,AtIcon, AtButton } from 'taro-ui';

import './accountSet.less'

const AccountSet = forwardRef((props:any,ref:any) => {

  const [userInfo, setUserInfo] = useState<any>({});

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
 
  return (
    <View className='accountSet_page'>
      <View className='main'>
        <View className='item'>
          <Text className='label'>更换密码</Text>
            <View className='right'>
              <Text className='val'></Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>手机号</Text>
            <View className='right'>
              <Text className='val'>{userInfo.mobilePhone}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>邮箱</Text>
            <View className='right'>
              <Text className='val'>{userInfo.email}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
      </View>
    </View>
  )
})


export default AccountSet;

