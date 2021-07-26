import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import { AtButton,AtInput } from 'taro-ui';
import { DoSetNickName } from '@/services/MyService/MyService';
import IconFont from '@/iconfont';
import './setNickName.less'

const SetNickName = forwardRef((props:any,ref:any) => {

  const [nickName,setNickName] = useState<any>("");
  
  const router = useRouter();

  useEffect(()=>{
    setNickName(router.params.nickName)
  },[])

  const doSave = () => {
    const param = {
      id: router.params.id,
      nickName: nickName?nickName:''
    }
    DoSetNickName(param).then((res:any)=>{
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
    <View className='setNickName_page'>
      <View className='main'>
        <AtInput 
          className='myinput'
          name='idNo' 
          type='text' 
          placeholder='请输入昵称' 
          value={nickName}
          onChange={(val)=>setNickName(val)}
        />
        <View className='tip'>
          <IconFont name={'50'} size={30}/>
          <Text className='desc'>
           最多14个英文字符或7个汉字，30天内只能修改一次
          </Text>
        </View>
        <AtButton className='btn_save' type='primary' onClick={doSave}>完成</AtButton>
      </View>
    </View>
  )
})


export default SetNickName;

