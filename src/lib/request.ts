import twa from '@twa-dev/sdk';
import axios, { AxiosResponse } from 'axios';

// 创建 axios 实例
export const request = axios.create({
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
    const initData = twa.initData;
    config.headers.Authorization = `tma ${initData}`;
    return config;
  },
  error => {
    // 对请求错误做点什么
    return Promise.reject(error);
  }
);

type Data = {
  code: number;
  message: string;
  data: any;
};

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<Data>) => {
    const data = response.data;
    if (data.code < 200 && data.code >= 400) {
      return Promise.reject(response.data);
    }

    // 2×× 范围内的状态码都会触发该函数
    // 对响应数据做点什么

    return data.data;
  },
  error => {
    return Promise.reject(error);
  }
);
