import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components'
import { AtButton,AtMessage } from 'taro-ui';
import { AppCheckUser, AppBindPhone, AppLogin } from '@/services/AppService/AppService';

import './loginAuth.less'

const LoginAuth = (props:any,ref:any) => {
  const [hasRegister, setHasRegister] = useState(false);

  useEffect(() => {
    const authInfo = Taro.getStorageSync("authInfo");
    if(authInfo) {
      setHasRegister(authInfo.hasRegister)
    }else {
      setHasRegister(false)
    }

  },[]);

  const getPhoneNumber = (phoneNumberResult) => {
    const detail = phoneNumberResult.detail;
    const {encryptedData,errMsg,iv} = detail;
    if(errMsg == 'getPhoneNumber:ok') {
      Taro.checkSession({
        async success(){
          const {openid,sessionKey} = Taro.getStorageSync("authInfo");
          // 授权手机号
          const params = {
            encryptedData: encryptedData,
            sessionKey: sessionKey,
            iv: iv,
          }
          const result:any = await AppBindPhone(params);
          const { code, data } = result;
          if(code == 0) {
            if(hasRegister){
              const params1 = {
                encryptedData: encryptedData,
                sessionKey: sessionKey,
                iv: iv,
                openid: openid,
              }
              const loginResult:any = await AppLogin(params1);
              if(loginResult.code == 0) {
                Taro.setStorageSync('sessionObj',loginResult.data)
                Taro.setStorageSync('token',loginResult.data.token)
                Taro.switchTab({
                  url:"/pages/my/my",
                  success: () => {
                    const page = Taro.getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                  } 
                })
              }
            }else {
              Taro.navigateTo({url:"/pages/my/packMy/loginAuth/chooseUserType/chooseUserType?phoneNum="+data})
            }
          }
        },
        fail(){
          Taro.login({
            async success(res) {
              if (res.code) {
                const result1:any = await AppCheckUser({code: res.code});
                const { code, data } = result1;
                if(code == 0) {
                  const authInfo = {
                    openid: data.openid,
                    sessionKey: data.sessionKey,
                    hasRegister: data.hasRegister,
                  }
                  Taro.setStorageSync("authInfo",authInfo);
                  // 授权手机号
                  const params = {
                    encryptedData: encryptedData,
                    sessionKey: data.sessionKey,
                    iv: iv,
                  }
                  const result2:any = await AppBindPhone(params);
                  if(result2.code == 0) {
                    if(hasRegister){
                      const params1 = {
                        encryptedData: encryptedData,
                        sessionKey: data.sessionKey,
                        iv: iv,
                        openid: data.openid,
                      }
                      const loginResult:any = await AppLogin(params1);
                      if(loginResult.code == 0) {
                        Taro.setStorageSync('sessionObj',loginResult.data)
                        Taro.setStorageSync('token',loginResult.data.token)
                        Taro.switchTab({
                          url:"/pages/my/my",
                          success: () => {
                            const page = Taro.getCurrentPages().pop();
                            if (page == undefined || page == null) return;
                            page.onLoad();
                          } 
                        })
                      }
                    }else {
                      Taro.navigateTo({url:"/pages/my/packMy/loginAuth/chooseUserType/chooseUserType?phoneNum="+data})
                    }
                  }
                }
              } else {
                console.log('login error！' + res.errMsg)
              }
            }
          })
        }
      })
    }
    
  }

 
  return (
    <View className='loginAuth_page'>
      <View className='main'>
        <Button className='auth_btn' openType="getPhoneNumber" size='mini' type='default' onGetPhoneNumber={getPhoneNumber}>{hasRegister?'微信快速登录':'微信快速注册'}</Button>
      </View>
    </View>
  )
}


export default LoginAuth;

