import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text, Button } from '@tarojs/components'

import './mngCode.less'

const MngCode = (props:any,ref:any) => {

  useEffect(()=>{
  },[])

  const doSave = () => {
    Taro.navigateBack()
  }
 
  return (
    <View className='mngCode_page'>
      <View className='main'>
        <Image
          className='code_pic'
          src={require('@/asserts/images/my/mng_code.png')}
        />
        <Button className='btn' size='mini' type='primary' onClick={doSave}>保存</Button>
      </View>
    </View>
  )
}


export default MngCode;

