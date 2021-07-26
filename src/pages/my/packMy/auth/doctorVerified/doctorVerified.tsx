import { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import { BASE_URL } from '@/services/MiniService';
import { SaveUserCertificate } from '@/services/MyService/MyService';

import './doctorVerified.less'

const DoctorVerified = forwardRef((props:any,ref:any) => {
  const [userCertificate, setUserCertificate] = useState<any>({});
  const [ncpCertificateUrl,setNcpCertificateUrl] = useState<any>("");
  const [doctorCertificateUrl,setDoctorCertificateUrl] = useState<any>("");
  const [jobCertificateUrl,setJobCertificateUrl] = useState<any>("");
  
  const router = useRouter();
  useEffect(()=>{
    const authInfo = Taro.getStorageSync("authInfo");
    userCertificate.name = router.params.name;
    userCertificate.idCard = router.params.idCard;
    userCertificate.openid = authInfo.openid;
    setUserCertificate(userCertificate)
  },[])

  const doUpload = (type:any) => {
    const authInfo = Taro.getStorageSync("authInfo");
    Taro.chooseImage({
      count: 1, // 默认9
      sourceType: ['album','camera'],
      success: function (res) {
        const tempFilePath = res.tempFilePaths[0];
        Taro.uploadFile({
          url: BASE_URL+"/userCertificate/uploadPic", //仅为示例，非真实的接口地址
          filePath: tempFilePath,
          name: 'file',
          formData: {
            openid: authInfo.openid,
            type
          },
          success (res){
            const result = JSON.parse(res.data)
            if(result.code == 0) {
              if(type == 1) {
                setNcpCertificateUrl(tempFilePath)
              }else if(type == 2) {
                setDoctorCertificateUrl(tempFilePath)
              }else if(type == 3) {
                setJobCertificateUrl(tempFilePath)
              }
            }
          }
        })
      }
    })
  }

  const doFInish = () => {
    SaveUserCertificate(userCertificate).then((res:any)=>{
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
 
  return (
    <View className='doctorVerified_page'>
      {/* <View className='title'>医师认证</View> */}
      <View className='main'>
        <View className='item'>
          <Text className='label'>卫健委医师资格证截图</Text>
          <View className='right'>
            {/* <Text className='pic_view'>缩略图</Text> */}
            <Image
              className='pic_view'
              src={ncpCertificateUrl}
            />
            <AtButton className='btn_upload' type='primary' onClick={()=>doUpload(1)}>上传</AtButton>
          </View>
        </View>
        <View className='item'>
          <Text className='label'>医师资格证</Text>
          <View className='right'>
            {/* <Text className='pic_view'>缩略图</Text> */}
            <Image
              className='pic_view'
              src={doctorCertificateUrl}
            />
            <AtButton className='btn_upload' type='primary' onClick={()=>doUpload(2)}>上传</AtButton>
          </View>
        </View>
        <View className='item'>
          <Text className='label'>职称证书</Text>
          <View className='right'>
            {/* <Text className='pic_view'>缩略图</Text> */}
            <Image
              className='pic_view'
              src={jobCertificateUrl}
            />
            <AtButton className='btn_upload' type='primary' onClick={()=>doUpload(3)}>上传</AtButton>
          </View>
        </View>
        <View className='audit_desc'>人工审核需要1-3天工作日</View>
      </View>
      <AtButton className='btn_finish' type='primary' size='small' onClick={doFInish}>完成</AtButton>
    </View>
  )
})


export default DoctorVerified;

