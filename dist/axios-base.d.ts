import { AxiosResponse, AxiosInterceptorOptions, CreateAxiosDefaults, InternalAxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import API from './api';
export interface IAxiosBaseConfig extends CreateAxiosDefaults {
}
export declare class AxiosBase extends API {
    constructor(config: IAxiosBaseConfig);
    setBearerToken(token: string): void;
    setCommonHeader(headers: RawAxiosRequestHeaders): void;
    setDeleteHeader(headers: RawAxiosRequestHeaders): void;
    setGetHeader(headers: RawAxiosRequestHeaders): void;
    setHeadHeader(headers: RawAxiosRequestHeaders): void;
    setPatchHeader(headers: RawAxiosRequestHeaders): void;
    setPostHeader(headers: RawAxiosRequestHeaders): void;
    setPutHeader(headers: RawAxiosRequestHeaders): void;
    setRequestInterceptor(onFulfilled?: ((value: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>) | null, onRejected?: ((error: unknown) => any) | null, options?: AxiosInterceptorOptions): void;
    setResponseInterceptor(onSuccess?: ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) | null, onRejected?: ((error: unknown) => any) | null, options?: AxiosInterceptorOptions): void;
}
