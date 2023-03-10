import axios, { AxiosResponse, AxiosInterceptorOptions, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';
import API from './api';

export interface IAxiosBaseConfig extends CreateAxiosDefaults {}

export class AxiosBase extends API {
  constructor(config: IAxiosBaseConfig) {
    const { ...axiosConfig } = config;
    const axiosInstance = axios.create(axiosConfig);

    super(axiosInstance);
  }

  /**
   * @description bearer token 설정
   * @param token token 값
   */
  setBearerToken(token: string) {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  /**
   * @description request interceptor 추가하기
   * @param onFulfilled 성공 시 콜백함수
   * @param onRejected 실패 시 콜백함수
   * @param options interceptor middleware 옵션
   */
  setRequestInterceptor(
    onFulfilled?:
      | ((value: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>)
      | null,
    onRejected?: ((error: unknown) => any) | null,
    options?: AxiosInterceptorOptions,
  ) {
    this.instance.interceptors.request.use(onFulfilled, onRejected, options);
  }

  /**
   * @description response interceptor 추가하기
   * @param onFulfilled 성공 시 콜백함수
   * @param onRejected 실패 시 콜백함수
   * @param options interceptor middleware 옵션
   */
  setResponseInterceptor(
    onSuccess?: ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) | null,
    onRejected?: ((error: unknown) => any) | null,
    options?: AxiosInterceptorOptions,
  ) {
    this.instance.interceptors.response.use(onSuccess, onRejected, options);
  }
}
