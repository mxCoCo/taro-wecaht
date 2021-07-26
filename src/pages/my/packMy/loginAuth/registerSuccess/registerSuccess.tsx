import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components'

import './registerSuccess.less'

const RegisterSuccess = (props:any,ref:any) => {

  useEffect(() => {
    
  },[]);

  const goPage = () => {
    Taro.switchTab({
      url:"/pages/my/my",
      success: () => {
        const page = Taro.getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      } 
    })
  }
 
  return (
    <View className='registerSuccess_page'>
      <View className='main'>
        <Button className='auth_btn' size='mini' type='default' onClick={goPage}>注册成功！</Button>
      </View>
    </View>
  )
}


export default RegisterSuccess;

