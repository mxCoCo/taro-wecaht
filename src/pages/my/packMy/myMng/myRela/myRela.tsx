import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text, Button } from '@tarojs/components'
import { AtSearchBar, AtIcon } from 'taro-ui'

import './myRela.less'

const MyRela = (props:any,ref:any) => {
  const [ searchVal, setSearchVal ] = useState<any>('');

  useEffect(()=>{
  },[])

  const handleChange = (val:any) => {
    setSearchVal(val)
  }
  const handleActionClick = () => {
    console.log('开始搜索')
  }
 
  return (
    <View className='myRela_page'>
      <AtSearchBar
        className='searchBar'
        actionName='搜索'
        value={searchVal}
        onChange={handleChange}
        onActionClick={handleActionClick}
      />
      <View className='count_num'>
      共2个医生
      </View>
      <View className='list'>
        <View className='item'>
          <View className='left'>
            <Image
              className='pic'
              src={require('@/asserts/images/my/capture.png')}
            />
            <Text className='name'>Jenny</Text>
          </View>
          <AtIcon value='chevron-right' size='14' color='#808080'></AtIcon>
        </View>
        <View className='item'>
          <View className='left'>
            <Image
              className='pic'
              src={require('@/asserts/images/my/capture.png')}
            />
            <Text className='name'>Jenny</Text>
          </View>
          <AtIcon value='chevron-right' size='14' color='#808080'></AtIcon>
        </View>
      </View>
    </View>
  )
}


export default MyRela;

