import { useGlobalIconFont } from './iconfont/helper';

export default {
  pages: [
    'pages/index/index',
    'pages/doctor/doctor',
    'pages/search/search',
    'pages/order/order',
    'pages/my/my',
  ],
  subpackages: [
    {
      "root": "pages/my/packMy/",
      "pages": [
        'loginAuth/loginAuth',
        'loginAuth/chooseUserType/chooseUserType',
        'loginAuth/registerInfo/registerInfo',
        'loginAuth/registerSuccess/registerSuccess',
        'auth/realVerified/realVerified',
        'auth/doctorVerified/doctorVerified',
        'signUpdate/signUpdate',
        'accountSet/accountSet',
        'personInfo/personInfo',
        'personInfo/myAvatar/myAvatar',
        'personInfo/setId/setId',
        'personInfo/setNickName/setNickName',
        'myMng/myMng',
        'myMng/mngCode/mngCode',
        'myMng/subscribeCode/subscribeCode',
        'myMng/myRela/myRela',
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8C8FA5',
    selectedColor: '#267685',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        // text: '主页',
        iconPath: './asserts/images/home.png',
        selectedIconPath: './asserts/images/home_active.png'
      },
      {
        pagePath: 'pages/doctor/doctor',
        // text: '医生',
        iconPath: './asserts/images/doctor.png',
        selectedIconPath: './asserts/images/doctor_active.png'
      },
      {
        pagePath: 'pages/search/search',
        // text: '搜索',
        iconPath: './asserts/images/search.png',
        selectedIconPath: './asserts/images/search_active.png'
      },
      {
        pagePath: 'pages/order/order',
        // text: '订单',
        iconPath: './asserts/images/order.png',
        selectedIconPath: './asserts/images/order_active.png'
      },
      {
        pagePath: 'pages/my/my',
        // text: '我的',
        iconPath: './asserts/images/my.png',
        selectedIconPath: './asserts/images/my_active.png'
      }]
  },
  usingComponents: Object.assign(useGlobalIconFont()),
}
