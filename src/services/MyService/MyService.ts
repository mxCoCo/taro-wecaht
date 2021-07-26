import { doGet, doPost} from '../MiniService';

/**
 * 获取注册信息详情
 * @param params 
 * @returns 
 */
export const GetRegisterInfoDetail = (params:object) => {
    const url = "/systemUserInfo/detail";
    return doGet(url,params);
}

/**
 * 更新注册信息
 * @param params 
 * @returns 
 */
export const ModifyRegisterInfo = (params:object) => {
    const url = "/systemUserInfo/modify";
    return doPost(url,params);
}

/**
 * 获取个人信息详情
 * @param params 
 * @returns 
 */
export const GetUserInfoDetail = (params:object) => {
    const url = "/systemUserInfo/userInfo";
    return doGet(url,params);
}

/**
 * 修改个性签名
 * @param params 
 * @returns 
 */
export const ModifySignature = (params:object) => {
    const url = "/systemUserInfo/modifySignature";
    return doPost(url,params);
}

/**
 * 设置ID接口
 * @param params 
 * @returns 
 */
 export const DoSetIdNo = (params:object) => {
    const url = "/systemUserInfo/setIdNo";
    return doGet(url,params);
}

/**
 * 设置昵称接口
 * @param params 
 * @returns 
 */
 export const DoSetNickName = (params:object) => {
    const url = "/systemUserInfo/setNickName";
    return doGet(url,params);
}

/**
 * 保存认证信息接口
 * @param params 
 * @returns 
 */
 export const SaveUserCertificate = (params:object) => {
    const url = "/userCertificate/save";
    return doPost(url,params);
}