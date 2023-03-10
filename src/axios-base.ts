import axios, { AxiosInstance, AxiosResponse, AxiosInterceptorOptions, InternalAxiosRequestConfig } from 'axios';
import API from './api';

export interface IAxiosBase {
  host: string;
}

export class AxiosBase extends API {
  private axiosInstance: AxiosInstance;

  constructor(config: IAxiosBase) {
    const axiosInstance = axios.create({
      timeout: 5000,
      withCredentials: true,
    });
    super(axiosInstance);

    this.axiosInstance = axiosInstance;
    this.initialize(config);
  }

  /**
   * @description 초기 설정
   * @param config 설정 정보
   */
  private initialize(config: IAxiosBase) {
    this.setBaseURL(config.host);
  }

  /**
   * @description access token 설정
   * @param token access token 값
   */
  setAccessToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  /**
   * @description 호스트 설정
   * @param host 주소
   */
  private setBaseURL(host: string) {
    this.axiosInstance.defaults.baseURL = host;
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
    this.axiosInstance.interceptors.request.use(onFulfilled, onRejected, options);
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
    this.axiosInstance.interceptors.response.use(onSuccess, onRejected, options);
  }
}
