import React, { forwardRef,useEffect } from 'react';
import Taro from '@tarojs/taro';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import Footer from '../common/footer/footer'

import './search.less'
import { add, minus, asyncAdd } from '../../store/actions/counter'

const Search = forwardRef((props:any, ref: any) => {

  useEffect(() => {
  },[]);

    return (
      <View className='search_page'>
        search_page
        {/* <Footer></Footer> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);;

