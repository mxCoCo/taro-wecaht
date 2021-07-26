import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { BASE_URL } from '@/services/MiniService';
import './myAvatar.less'

const MyAvatar = forwardRef((props:any,ref:any) => {

  const [avatarUrl,setAvatarUrl] = useState<any>("");
  const [tempFileUrl,setTempFileUrl] = useState<any>("");
  
  const router = useRouter();

  useEffect(()=>{
    setAvatarUrl(router.params.avatarUrl)
  },[])

  const doSave = () => {
    if(tempFileUrl){
      Taro.uploadFile({
        url: BASE_URL+"/systemUserInfo/uploadAvatar", //仅为示例，非真实的接口地址
        filePath: tempFileUrl,
        name: 'file',
        formData: {
          'id': router.params.id
        },
        success (res){
          const result = JSON.parse(res.data)
          if(result.code == 0) {
            const pages = Taro.getCurrentPages();
            const page = pages[pages.length - 2];
            const pageMy = pages[pages.length - 3];
            if (page == undefined || page == null) return;
            if (pageMy == undefined || pageMy == null) return;
            page.onLoad();
            pageMy.onLoad();
            Taro.navigateBack()
          }
        }
      })
    }else {
      Taro.showToast({
        title: '请上传头像',
        icon: 'none',
        duration: 2000
      })
    }
  }

  const handleCamera = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sourceType: ['camera'],
      success: function (res) {
        const tempFilePath = res.tempFilePaths[0];
        setAvatarUrl(tempFilePath);
        setTempFileUrl(tempFilePath);
      }
    })
  }

  const handleAlbum = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sourceType: ['album'],
      success: function (res) {
        const tempFilePath = res.tempFilePaths[0];
        setAvatarUrl(tempFilePath);
        setTempFileUrl(tempFilePath);
      }
    })
  }
 
  return (
    <View className='myAvatar_page'>
      <View className='top'>
        <Image
          className='capture'
          src={tempFileUrl?tempFileUrl:avatarUrl?`${BASE_URL}/systemUserInfo/avatar?id=${router.params.id}`:require('@/asserts/images/my/capture.png')}
        />
      </View>
      <View className='bottom'>
        <View className='main'>
          <Text className='item' onClick={handleCamera}>拍照</Text>
          <Text className='item' onClick={handleAlbum}>从手机相册选择</Text>
          <Text className='item' onClick={doSave}>保存</Text>
        </View>
        <View className='foot'>
          <Text className='cancel' onClick={()=> Taro.navigateBack()}>取消</Text>
        </View>
      </View>
    </View>
  )
})


export default MyAvatar;

