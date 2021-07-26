import { forwardRef, useEffect } from 'react';
import Taro , {useRouter} from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components'

import './chooseUserType.less'

const ChooseUserType = forwardRef((props:any,ref:any) => {

  const router = useRouter();

  useEffect(()=>{
  },[])

  const doChooseUserType = (userType:number) => {
    Taro.navigateTo({url:"/pages/my/packMy/loginAuth/registerInfo/registerInfo?phoneNum="
    +router.params.phoneNum+"&userType="+userType})
  }

 
  return (
    <View className='chooseUserType_page'>
      <Text className='tip'>请选择用户</Text>
      <Button className='btn' size='mini' type='default' onClick={()=>doChooseUserType(1)}>普通用户</Button>
      <Button className='btn' size='mini' type='default' onClick={()=>doChooseUserType(2)}>医生</Button>
    </View>
  )
})


export default ChooseUserType;

