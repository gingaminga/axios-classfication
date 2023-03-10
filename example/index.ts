import { AxiosBase } from 'axios-classification';
import url from './url';

interface IActivityData {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

// 아래는 bored open api를 사용한 샘플 로직입니다.
(async () => {
  try {
    const config = {
      baseURL: url.BORED.HOST,
    };

    const bored = new AxiosBase(config); // 객체 생성

    console.log('***** What activity to do? *****\n');

    const { data } = await bored.get<undefined, IActivityData>(url.BORED.PATH.ACTIVITY);

    console.log(`'${data.activity}' is would be nice :)`);
  } catch (error) {
    console.error(error);
  }
})();
