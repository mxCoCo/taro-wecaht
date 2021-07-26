import React, { forwardRef, useEffect, useState } from 'react';
import Taro, {useRouter} from '@tarojs/taro';
import { connect } from 'react-redux'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon, AtButton, AtBadge } from 'taro-ui';
import { BASE_URL } from '@/services/MiniService';
import IconFont from '@/iconfont';
import './my.less';
import { GetUserInfoDetail } from '@/services/MyService/MyService';
import { AppLogout } from '@/services/AppService/AppService';
import { add, minus, asyncAdd } from '../../store/actions/counter';


const My = forwardRef((props:any, ref: any) => {
  const [hasRegister, setHasRegister] = useState(false);
  const [ token ] = useState<String>(Taro.getStorageSync('token'));
  const [ sessionObj ] = useState<any>(Taro.getStorageSync('sessionObj'));
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const authInfo = Taro.getStorageSync("authInfo");
    if(authInfo) {
      setHasRegister(authInfo.hasRegister)
    }else {
      setHasRegister(false)
    }

    if(sessionObj && sessionObj.sysUerInfoId) {
      const param = {
        id: sessionObj.sysUerInfoId,
        openid: authInfo.openid,
      }
      GetUserInfoDetail(param).then((res:any)=>{
        if(res.code == 0) {
          setUserInfo(res.data)
        }
      })
    }
  },[]);

  const goSignUpdatePage = () => {
    Taro.navigateTo({url:'/pages/my/packMy/signUpdate/signUpdate?id='+sessionObj.sysUerInfoId})
  }
  
  const goRealVerifiedPage = () => {
    Taro.navigateTo({url:'/pages/my/packMy/auth/realVerified/realVerified?id='+sessionObj.sysUerInfoId})
  }

  const goAccountSetPage = () => {
    Taro.navigateTo({url:'/pages/my/packMy/accountSet/accountSet?id='+sessionObj.sysUerInfoId})
  }

  const goPersonInfoPage = () => {
    Taro.navigateTo({url:'/pages/my/packMy/personInfo/personInfo?id='+sessionObj.sysUerInfoId})
  }

  const goMyMngPage = () => {
    Taro.navigateTo({url:'/pages/my/packMy/myMng/myMng'})
  }

  const getLoginAuthPage = () => {
    Taro.navigateTo({url:"/pages/my/packMy/loginAuth/loginAuth"})
  }

  const doLogout = () => {
    const param = {
      token
    }
    AppLogout(param).then((res:any)=>{
      if(res.code == 0) {
        Taro.setStorageSync("token",'');
        const curPage = Taro.getCurrentPages().pop();
        if (curPage == undefined || curPage == null) return;
        curPage.onLoad();
      }
    })

  }

  return (
    <View className='my_page'>
      {token?<View className='main'>
        <View className='top_wrapper'>
          <View className='title'>
              {/* <Text className="name">用户设置</Text> */}
              <AtBadge value={0} maxValue={99} >
                  <AtIcon value='bell' size='16' color='#FFFFFF'></AtIcon>
              </AtBadge>
          </View>
          <View className='my_capture'>
            <Image
              className='capture'
              src={userInfo && userInfo.avatarUrl?`${BASE_URL}/systemUserInfo/avatar?id=${userInfo.id}&time=${new Date().getTime()}`:require('@/asserts/images/my/capture.png')}
            />
            {userInfo && userInfo.hasCertificate?<View className='auth_desc'>
              <Image
                className='pic'
                src={require('@/asserts/images/my/has_auth.png')}
              />
              <Text className='word' onClick={()=>{}}>已认证</Text>
            </View>:<View className='auth_desc'>
              <Image
                className='pic'
                src={require('@/asserts/images/my/no_auth.png')}
              />
              <Text className='word' onClick={goRealVerifiedPage}>未认证</Text>
            </View>}
          </View>
          <View className='my_name'>{userInfo.name}</View>
          <View className='my_sign'>
            <Text className='sign'>{userInfo.signature}</Text>
            <Image
                className='edit_pic'
                src={require('@/asserts/images/my/edit.svg')}
                onClick={goSignUpdatePage}
              />
          </View>
        </View>
        <View className='setting_wrap'>
          <View className='item' onClick={goAccountSetPage}>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/account_set.svg')}
                /> */}
                <IconFont name={'zhanghaoguanli'} size={40}/>
                <Text className='name'>账号设置</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          <View className='item' onClick={goPersonInfoPage}>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/one_info.svg')}
                /> */}
                <IconFont name={'gerenziliao'} size={38}/>
                <Text className='name'>个人资料</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          {userInfo && userInfo.hasCertificate?
          <View className='item' onClick={goMyMngPage}>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/my_mng.svg')}
                /> */}
                <IconFont name={'zu1776'} size={36}/>
                <Text className='name'>我的管理</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          :
          <View className='item'>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/my_mng.svg')}
                /> */}
                <IconFont name={'zu1776'} size={36}/>
                <Text className='name noAuth'>我的管理</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          }
          {userInfo && userInfo.hasCertificate?
          <View className='item'>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/my_money.svg')}
                /> */}
                <IconFont name={'qianbao'} size={36}/>
                <Text className='name'>我的钱包</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          :
          <View className='item'>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/my_money.svg')}
                /> */}
                <IconFont name={'qianbao'} size={36}/>
                <Text className='name noAuth'>我的钱包</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
          }
          <View className='item'>
            <View className='left'>
              {/* <Image
                  className='icon'
                  src={require('@/asserts/images/my/msg.svg')}
                /> */}
                <IconFont name={'xiaoxi3'} size={36}/>
                <Text className='name'>提醒</Text>
            </View>
            <AtIcon value='chevron-right' size='16' color='#000000'></AtIcon>
          </View>
        </View>
        <View className='info_wrap'>
          <View className='item'>
            条款与条件
          </View>
          <View className='item'>
            关于我们
          </View>
          <View className='item logout' onClick={doLogout}>
            注销
          </View>
        </View>
      </View>
      :
      <View className='login'>
        <View className='top_wrapper'>
          <View className='title'>
              <Text className="name">用户设置</Text>
          </View>
          <Button className="btn_login" size='mini' type='primary' onClick={getLoginAuthPage}>{hasRegister?'登录':'注册'}</Button>
        </View>
      </View>
      }
    </View>
  )
})

const mapStateToProps = (state:any) => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch:any) => ({
  add () {
    let count = Taro.getStorageSync("count")
    if(count){
      Taro.setStorageSync("count",count+1)
    }else {
      Taro.setStorageSync("count",1)
    }
    dispatch(add())
  },
  dec () {
    let count = Taro.getStorageSync("count")
    if(count){
      Taro.setStorageSync("count",count-1)
    }else {
      Taro.setStorageSync("count",0)
    }
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(My);;

