# axios classification

자주 사용하는 라이브러리인 `axios`를 class화한 모듈입니다. :)<br/>

## ⚡ Install

```bash
$ npm i axios-classification
```

## 🤹‍♂️ How to use

`axios-classification`를 import 하여 `AxiosBase`를 가져옵니다.<br/>
`AxiosBase`는 Class 객체이기에, 객체 생성을 하여 사용합니다.

### Import module

```typescript
import { AxiosBase } from 'axios-classification';
```

### Create object

```typescript
const config = {
  baseURL: 'http://example.co.kr',
};

const axiosBase = new AxiosBase(config);
```

> 💡 해당 config는 [Axios 설정](https://yamoo9.github.io/axios/guide/api.html#%EA%B5%AC%EC%84%B1-%EC%98%B5%EC%85%98)을 기반으로 합니다.

### Post / Get / Put / Patch / Delete

메소드들의 매개변수는 모두 동일합니다.<br/>
제네릭에서 첫번째 타입은 `파라미터 형식`, 두번째 타입은 `응답받을 형식` 입니다.

```typescript
interface IExampleParam {
  id: number;
  name: string;
}

interface IResponseData {
  status: boolean;
}

const params = {
  id: 1,
  name: 'test',
};

// Post
const { data } = axiosBase.post<IExampleParam, IResponseData>('/path/to', params);

// Get
const { data } = axiosBase.get<IExampleParam, IResponseData>('/path/to', params);

// Put
const { data } = axiosBase.put<IExampleParam, IResponseData>('/path/to', params);

// Patch
const { data } = axiosBase.patch<IExampleParam, IResponseData>('/path/to', params);

// Delete
const { data } = axiosBase.delete<IExampleParam, IResponseData>('/path/to', params);

console.log(data); // { status: true }
```

만약 넘기는 파라미터, 또는 응답이 없다면, `undefined` 타입으로 설정해주세요.

```typescript
interface IResponseData {
  status: boolean;
}

// Get
const { data } = axiosBase.get<undefined, IResponseData>('/path/to', params);
```

### Setting bearer auth token

만약 헤더에 token을 넣어야한다면 `setBearerToken`을 사용하세요.<br/>
헤더의 `Authorization`에 `Bearer ${token}}`을 자동으로 넣어줍니다. :)

```typescript
axiosBase.setBearerToken('123456789');

/*
{
  header : "Bearer 123456789"
}
*/
```

### Interceptor

요청하기 전, 또는 응답 전에 인터셉트를 해야한다면 `setRequestInterceptor`, `setResponseInterceptor`를 사용하세요.<br/>
parameter는 두 함수가 동일하게 (callback function, callback function, options) 입니다.

```typescript
// request interceptor
axiosBase.setRequestInterceptor(
  (config) => {
    // content
    return config;
  },
  (error) => {
    // content
    throw error;
  },
);

// response interceptor
axiosBase.setResponseInterceptor(
  (response) => {
    // content
    return response;
  },
  (error) => {
    // content
    throw error;
  },
);
```

## 👀 Example

[example](https://github.com/gingaminga/axios-classification/tree/main/example)를 참고하세요. :)

## 🎊 Thanks

AxiosBase class에서 제공해야한다고 생각하는 axios의 기능들은 `issue` 또는 `PR` 주세요. :)
