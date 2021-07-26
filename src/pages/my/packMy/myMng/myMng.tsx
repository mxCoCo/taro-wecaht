import { forwardRef, useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui';

import './myMng.less'

const MyMng = forwardRef((props:any,ref:any) => {

  const [showRela,setShowRela] = useState<any>(false);

  useEffect(()=>{
  },[])

  const goMngCodePage = () => {
    Taro.navigateTo({url:"/pages/my/packMy/myMng/mngCode/mngCode"})
  }

  const goSubscribeCodePage = () => {
    Taro.navigateTo({url:"/pages/my/packMy/myMng/subscribeCode/subscribeCode"})
  }

  const goMyRelaPage = () => {
    Taro.navigateTo({url:"/pages/my/packMy/myMng/myRela/myRela"})
  }

  const showRelaPane = () => {
    setShowRela(!showRela);
  }
 
  return (
    <View className='myMng_page'>
      <View className='main'>
        <View className='item'>
          <Text className='label'>关联医生</Text>
            <View className='right' onClick={showRelaPane}>
              <Text className='val'>详情</Text>
              <AtIcon value={showRela?'chevron-down':'chevron-right'} size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='rela_wrapper' style={{display:showRela?'block':'none'}}>
          <View className='item' onClick={goMyRelaPage}>
            <Text className='label'>我关联的</Text>
              <View className='right'>
                <Text className='val'></Text>
                <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
              </View>
          </View>
          <View className='item'>
            <Text className='label'>关联我的</Text>
              <View className='right'>
                <Text className='val'></Text>
                <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
              </View>
          </View>
          <View className='item'>
            <Text className='label'>申请关联</Text>
              <View className='right'>
                <Text className='val'></Text>
                <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
              </View>
          </View>
        </View>
        <View className='item'>
          <Text className='label'>我的服务项目</Text>
            <View className='right'>
              <Text className='val'></Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>我的客户</Text>
            <View className='right'>
              <Text className='val'></Text>
              <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>管理码</Text>
            <View className='right' onClick={goMngCodePage}>
              <Image
                className='qrCode_pic'
                src={require('@/asserts/images/my/qrCode.png')}
              />
              <AtIcon value='alert-circle' size='16' color='#000000'></AtIcon>
            </View>
        </View>
        <View className='item'>
          <Text className='label'>预约码</Text>
            <View className='right' onClick={goSubscribeCodePage}>
              <Image
                className='qrCode_pic'
                src={require('@/asserts/images/my/qrCode.png')}
              />
              <AtIcon value='alert-circle' size='16' color='#000000'></AtIcon>
            </View>
        </View>
      </View>
    </View>
  )
})


export default MyMng;

