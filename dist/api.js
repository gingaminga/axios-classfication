"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class API {
    constructor(instance) {
        this.instance = instance;
    }
    delete(endpoint, params, headers) {
        return this.instance.delete(endpoint, {
            data: params,
            headers,
        });
    }
    get(endpoint, params, headers) {
        return this.instance.get(endpoint, {
            params,
            headers,
        });
    }
    patch(endpoint, params, headers) {
        return this.instance.patch(endpoint, params, {
            headers,
        });
    }
    post(endpoint, params, headers) {
        return this.instance.post(endpoint, params, {
            headers,
        });
    }
    put(endpoint, params, headers) {
        return this.instance.put(endpoint, params, {
            headers,
        });
    }
}
exports.default = API;
