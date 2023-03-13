"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosBase = void 0;
const axios_1 = __importDefault(require("axios"));
const api_1 = __importDefault(require("./api"));
class AxiosBase extends api_1.default {
    constructor(config) {
        const axiosConfig = __rest(config, []);
        const axiosInstance = axios_1.default.create(axiosConfig);
        super(axiosInstance);
    }
    setBearerToken(token) {
        this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    setCommonHeader(headers) {
        this.instance.defaults.headers.common = Object.assign(Object.assign({}, this.instance.defaults.headers.common), headers);
    }
    setDeleteHeader(headers) {
        this.instance.defaults.headers.delete = Object.assign(Object.assign({}, this.instance.defaults.headers.delete), headers);
    }
    setGetHeader(headers) {
        this.instance.defaults.headers.get = Object.assign(Object.assign({}, this.instance.defaults.headers.get), headers);
    }
    setHeadHeader(headers) {
        this.instance.defaults.headers.head = Object.assign(Object.assign({}, this.instance.defaults.headers.head), headers);
    }
    setPatchHeader(headers) {
        this.instance.defaults.headers.patch = Object.assign(Object.assign({}, this.instance.defaults.headers.patch), headers);
    }
    setPostHeader(headers) {
        this.instance.defaults.headers.post = Object.assign(Object.assign({}, this.instance.defaults.headers.post), headers);
    }
    setPutHeader(headers) {
        this.instance.defaults.headers.put = Object.assign(Object.assign({}, this.instance.defaults.headers.put), headers);
    }
    setRequestInterceptor(onFulfilled, onRejected, options) {
        this.instance.interceptors.request.use(onFulfilled, onRejected, options);
    }
    setResponseInterceptor(onSuccess, onRejected, options) {
        this.instance.interceptors.response.use(onSuccess, onRejected, options);
    }
}
exports.AxiosBase = AxiosBase;
