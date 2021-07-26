import { doGet, doPost } from '../MiniService';

/**
 * 获取校验用户是否注册
 * @param params 
 * @returns 
 */
export const AppCheckUser = (params:object) => {
    const url = "/auth/checkUser";
    return doGet(url,params);
}

/**
 * 绑定手机号认证
 * @param params 
 * @returns 
 */
export const AppBindPhone = (params:object) => {
    const url = "/auth/bindPhone";
    return doPost(url,params);
}

/**
 * 绑定手机号登录
 * @param params 
 * @returns 
 */
export const AppLogin = (params:object) => {
    const url = "/auth/login";
    return doPost(url,params);
}

/**
 * 注销退出
 * @param params 
 * @returns 
 */
export const AppLogout = (params:object) => {
    const url = "/auth/logout";
    return doGet(url,params);
}

