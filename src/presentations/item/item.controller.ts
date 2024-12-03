import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { GetAllItemUseCases } from 'src/applications/use-cases/item.usecase';

@Controller('items')
export class ItemController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_ITEMS_USE_CASE)
    private readonly getItemUsecaseProxy: UseCaseProxy<GetAllItemUseCases>,
  ) {}

  @Get('')
  async getAllItems() {
    const result = await this.getItemUsecaseProxy.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get data success',
      data: result,
    };
  }
}