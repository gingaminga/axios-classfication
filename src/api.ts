import { AxiosInstance, AxiosResponse, RawAxiosRequestHeaders } from 'axios';

/**
 * @description axios 모듈화 클래스
 */
export default class API {
  protected instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * @description DELETE 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  delete<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.delete<Params, AxiosResponse<Data>>(endpoint, {
      data: params,
      headers,
    });
  }

  /**
   * @description GET 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  get<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.get<Params, AxiosResponse<Data>>(endpoint, {
      params,
      headers,
    });
  }

  /**
   * @description PATCH 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  patch<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.patch<Params, Data>(endpoint, params, {
      headers,
    });
  }

  /**
   * @description POST 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  post<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.post<Params, Data>(endpoint, params, {
      headers,
    });
  }

  /**
   * @description PUT 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  put<Params, Data>(endpoint: string, params?: Params, headers?: RawAxiosRequestHeaders) {
    return this.instance.put<Params, Data>(endpoint, params, {
      headers,
    });
  }
}
