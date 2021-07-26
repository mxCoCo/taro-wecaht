import Taro from "@tarojs/taro";

// export const BASE_URL = "https://www.licyo.net/postoperative";
export const BASE_URL = "http://192.168.20.3:8081/postoperative";


/*--------------------------------------接口请求定义---------------------------------------------*/
/**
 * Get请求
 * @param url 
 * @param params 
 * @param showToast 
 */
const requestGet = (url: string, params: object, showToast?: Boolean) => {
    if (showToast) {
        Taro.showLoading({
            title: '加载中',
        })
    }
    return new Promise<{}>((resolve, reject) => {
        Taro.request({
          url: BASE_URL + url,
          data: params,
          method: "GET",
          header: {
            'content-type': 'application/json',
            // 'Authorization': token.accessToken ? token.accessToken : '',
          }
        }).then((res) => {
          Taro.hideLoading();
          return resolve(res.data);
        }).catch(err => {
          Taro.showToast({
            title: "数据请求失败",
            icon: 'none',
          })
          return reject(err)
        })
    })
}

/**
 * Post请求
 * @param url 
 * @param params 
 * @param showToast 
 */
const requestPost = (url: string, params: object, showToast?: Boolean) => {
    if (showToast) {
        Taro.showLoading({
            title: '加载中',
        })
    }
    return new Promise<{}>((resolve, reject) => {
        Taro.request({
          url: BASE_URL + url,
          data: params,
          method: "POST",
          header: {
            'content-type': 'application/json',
            // 'Authorization': token.accessToken ? token.accessToken : '',
          }
        }).then((res) => {
          Taro.hideLoading();
          return resolve(res.data);
        }).catch(err => {
          Taro.showToast({
            title: "数据请求失败",
            icon: 'none',
          })
          return reject(err)
        })
    })
}


/*--------------------------------------接口请求配置使用---------------------------------------------*/
const doGet = async (url, params) => {
  return new Promise((resolve, reject) => {
      requestGet(url, params).then((res:any) => {
          if (res.code == '0') {
              resolve(res);
          } else {
            Taro.showToast({
              title: res.message,
              icon: 'none',
            })
              resolve(res);
          }
      }).catch(res => {
        Taro.showToast({
          title: res.message,
          icon: 'none',
        })
      });
  });
}
const doPost = async (url, params) => {
  return new Promise((resolve, reject) => {
      requestPost(url, params).then((res:any) => {
          if (res.code == '0') {
              resolve(res);
          } else {
            Taro.showToast({
              title: res.message,
              icon: 'none',
            })
              resolve(res);
          }
      }).catch(res => {
        Taro.showToast({
          title: res.message,
          icon: 'none',
        })
      });
  });
}

export {doGet,doPost}