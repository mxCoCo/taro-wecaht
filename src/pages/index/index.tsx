import { forwardRef,useEffect,useState } from 'react';
import { connect } from 'react-redux'
import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components'
import Footer from '../common/footer/footer'
import { AtTabBar, AtButton } from 'taro-ui';

import './index.less'

const Index = forwardRef((props:any,ref:any) => {

  useEffect(()=>{
  },[])
 
    return (
      <View className='index_page'>
       首页
       {/* <Footer tabBarIndex={0}></Footer> */}
      </View>
    )
})

const mapStateToProps = (state:any) => ({
})

const mapDispatchToProps = (dispatch:any) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);

