const netWorkErrMap = {
  400: '错误的请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误，未找到资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
};

const authErrMap = {
  10031: '登录失效,请重新登录',
  10032: '您太久没登录，请重新登录',
  10033: '账号未绑定角色，请联系管理员绑定角色',
  10034: '该用户未注册，请联系管理员注册用户',
  10035: 'code 无法后去对应第三方平台用户',
  // ...
};

/**
 * 处理网络错误
 * @param {number} errStatus 错误码
 * @returns {string} 错误信息
 */
export function handleNetWorkErr(errStatus) {
  if (!errStatus) {
    console.error('未知错误');
    return '未知错误';
  }
  if (netWorkErrMap[errStatus]) {
    console.error(netWorkErrMap[errStatus]);
    return netWorkErrMap[errStatus];
  }
  console.error(`其他连接错误 -${errStatus}`);
  return `其他连接错误 -${errStatus}`;
}

/**
 * 处理授权错误
 * @param {number} errNo 错误码
 * @returns {boolean} 是否有登录错误
 */
export function handleAuthErr(errNo) {
  if (errNo in authErrMap) {
    console.log(authErrMap[errNo], 'authErr');
    return false;
  }
  return true;
}

export function handleConfigureAuth(config) {
  config.headers['token'] = localStorage.getItem('token') || '';
}
