import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  async getCurrencies() {
    const currencies = await this.currencyService.getCurrencies();
    console.log('currencies.length = ', currencies.length);

    const response = {
      message: 'getCurrencies',
      currencies: currencies,
    };
    return response;
  }

  @Get('/rates')
  async getCurrencyRates(
    @Query('base') base?: string,
    @Query('symbols') symbols?: string,
  ) {
    const baseStr = base ? base : 'USD';

    const data = await this.currencyService.getCurrencyRates(baseStr, symbols);
    console.log('data = ', data);

    const response = {
      message: 'getCurrencyRates',
      data: data,
    };
    return response;
  }

  @Get('/convert')
  async getCurrencyConvert(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('amount') amount: string,
  ) {
    const amountInt = amount ? parseInt(amount, 10) : 0;

    const data = await this.currencyService.getCurrencyConvert(
      from,
      to,
      amountInt,
    );
    console.log('data = ', data);

    const response = {
      message: 'getCurrencyConvert',
      data: data,
    };
    return response;
  }
}
