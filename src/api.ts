import { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';

/**
 * @description axios 모듈화 클래스
 */
export default class API {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * @description DELETE 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  delete<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>> {
    return this.instance.delete(endpoint, {
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
  get<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>> {
    return this.instance.get(endpoint, {
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
  patch<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>> {
    return this.instance.patch(endpoint, params, {
      headers,
    });
  }

  /**
   * @description POST 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  post<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>> {
    return this.instance.post(endpoint, params, {
      headers,
    });
  }

  /**
   * @description PUT 요청
   * @param endpoint path
   * @param params 파라미터
   * @param headers 헤더
   */
  put<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>> {
    return this.instance.put(endpoint, params, {
      headers,
    });
  }
}
