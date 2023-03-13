import { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';
export default class API {
    protected instance: AxiosInstance;
    constructor(instance: AxiosInstance);
    delete<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>>;
    get<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>>;
    patch<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>>;
    post<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>>;
    put<Params, Data>(endpoint: string, params?: Params, headers?: AxiosRequestHeaders): Promise<AxiosResponse<Data>>;
}
