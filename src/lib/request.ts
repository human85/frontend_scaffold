import axios from 'axios';
import store from 'store';

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 30000,
  headers: {
    common: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = store.get('token');
    if (token) config.headers.Authorization = 'Bearer ' + token;
    return config;
  },
  error => {
    // 对请求错误做点什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    if (response.status < 200 && response.status >= 400) {
      return Promise.reject(response);
    }

    // 2×× 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 401 token 失效处理
    if (error.response.status === 401) {
      // 清除本地用户数据
    }
    return Promise.reject(error);
  }
);

export default request;
