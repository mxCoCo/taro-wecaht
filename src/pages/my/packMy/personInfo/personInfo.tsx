import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui';
import { GetUserInfoDetail } from '@/services/MyService/MyService';
import { BASE_URL } from '@/services/MiniService';
import './personInfo.less'

const PersonInfo = forwardRef((props:any,ref:any) => {

  const [userInfo, setUserInfo] = useState<any>({});
  const [avatarUrl,setAvatarUrl] = useState<any>("");
   
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
        setAvatarUrl(res.data.avatarUrl)
      }
    })
  },[])

  const goMyAvator = () => {
    Taro.navigateTo({url:"/pages/my/packMy/personInfo/myAvatar/myAvatar?id="+router.params.id+"&avatarUrl="+userInfo.avatarUrl})
  }

  const goSetId = () => {
    Taro.navigateTo({url:"/pages/my/packMy/personInfo/setId/setId?id="+router.params.id+"&idNo="+userInfo.idNo})
  }

  const goSetNickName = () => {
    Taro.navigateTo({url:"/pages/my/packMy/personInfo/setNickName/setNickName?id="+router.params.id+"&nickName="+userInfo.nickName})
  }
 
  return (
    <View className='personInfo_page'>
      {/* <View className='top'>
        <Text className='title'>个人资料</Text>
      </View> */}
      <View className='main'>
        <View className='item' onClick={goMyAvator}>
          <Text className='label'>头像</Text>
          <View className='right'>
            <Image
              className='capture'
              src={avatarUrl?`${BASE_URL}/systemUserInfo/avatar?id=${userInfo.id}&time=${new Date().getTime()}`:require('@/asserts/images/my/capture.png')}
            />
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
        </View>
        <View className='item' onClick={goSetId}>
          <Text className='label'>ID</Text>
            <View className='right'>
              <Text className='val'>{userInfo.idNo}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item' onClick={goSetNickName}>
          <Text className='label'>昵称</Text>
            <View className='right'>
              <Text className='val'>{userInfo.nickName}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>性别</Text>
            <View className='right'>
              <Text className='val'>{userInfo.sex == 1?'男':'女'}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>生日</Text>
            <View className='right'>
              <Text className='val'>{userInfo.birth}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>实名认证</Text>
          {userInfo && userInfo.hasCertificate?<View className='right'>
                <Image
                  className='auth_pic'
                  src={require('@/asserts/images/my/big_auth.png')}
                />
                <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
              </View>
            :<View className='right'>
            <Image
              className='auth_pic'
              src={require('@/asserts/images/my/big_no_auth.png')}
            />
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>}
        </View>
        <View className='item'>
          <Text className='label'>用户类别</Text>
            <View className='right'>
              <Text className='val'>{userInfo.wxUserType == 1?'普通用户':'医生'}</Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
      </View>
    </View>
  )
})


export default PersonInfo;

