import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getMain() {
    const data = {
      message: 'currency-converter-api',
    };
    return data;
  }
}
