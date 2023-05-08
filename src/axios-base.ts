import axios, { isAxiosError } from 'axios';
import type {
  AxiosError,
  AxiosInterceptorOptions,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import API from './api';

export interface IAxiosBaseConfig extends CreateAxiosDefaults {}
export type TAxiosError = AxiosError;
export type TAxiosResponse = AxiosResponse;

export class AxiosBase extends API {
  constructor(config: IAxiosBaseConfig) {
    const { ...axiosConfig } = config;
    const axiosInstance = axios.create(axiosConfig);

    super(axiosInstance);
  }

  /**
   * @description axios error인지 확인하기
   * @param error 에러 객체
   * @returns true : axios error / flase : not axios error
   */
  isAxiosError<T = any, D = any>(error: unknown) {
    return isAxiosError<T, D>(error);
  }

  /**
   * @description bearer token 설정
   * @param token token 값
   */
  setBearerToken(token: string) {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  /**
   * @description common header 설정
   * @param headers header 값
   */
  setCommonHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.common = {
      ...this.instance.defaults.headers.common,
      ...headers,
    };
  }

  /**
   * @description delete header 설정
   * @param headers header 값
   */
  setDeleteHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.delete = {
      ...this.instance.defaults.headers.delete,
      ...headers,
    };
  }

  /**
   * @description get header 설정
   * @param headers header 값
   */
  setGetHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.get = {
      ...this.instance.defaults.headers.get,
      ...headers,
    };
  }

  /**
   * @description head header 설정
   * @param headers header 값
   */
  setHeadHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.head = {
      ...this.instance.defaults.headers.head,
      ...headers,
    };
  }

  /**
   * @description patch header 설정
   * @param headers header 값
   */
  setPatchHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.patch = {
      ...this.instance.defaults.headers.patch,
      ...headers,
    };
  }

  /**
   * @description post header 설정
   * @param headers header 값
   */
  setPostHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.post = {
      ...this.instance.defaults.headers.post,
      ...headers,
    };
  }

  /**
   * @description put header 설정
   * @param headers header 값
   */
  setPutHeader(headers: RawAxiosRequestHeaders) {
    this.instance.defaults.headers.put = {
      ...this.instance.defaults.headers.put,
      ...headers,
    };
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
