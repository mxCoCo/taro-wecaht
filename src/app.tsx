import { Component, useState } from 'react';
import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss';
import { Provider } from 'react-redux';
import store from './store';
import './app.less';
import {AppCheckUser} from '@/services/AppService/AppService';

class App extends Component {

  componentDidMount () {
    if(Taro.getEnv()==Taro.ENV_TYPE.WEAPP){
      Taro.login({
        success: function (res) {
          if (res.code) {
            const token = Taro.getStorageSync('token');
            AppCheckUser({code: res.code,token}).then((result:any)=>{
              const { code, data } = result;
              if(code == 0) {
                const authInfo = {
                  openid: data.openid,
                  sessionKey: data.sessionKey,
                  hasRegister: data.hasRegister,
                }
                Taro.setStorageSync("authInfo",authInfo);
                Taro.setStorageSync("token",data.hasLogin?token:'');
              }
            })
          } else {
            console.log('login error！' + res.errMsg)
          }
        }
      })
    }

  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  componentDidCatchError () {}

  render () {
    return <Provider store={store}>
          {this.props.children}
      </Provider>
  }
}

export default App
