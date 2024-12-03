import { Body, Controller, Get, Inject, Post, ValidationPipe } from '@nestjs/common';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { GetAllItemUseCases } from 'src/applications/use-cases/item.usecase';
import { CreateItemDto } from './dto/create-item.dto';
import { CreateItemUseCases } from 'src/applications/use-cases/createItem.usecase';

@Controller('items')
export class ItemController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_ITEMS_USE_CASE)
    private readonly getItemUsecaseProxy: UseCaseProxy<GetAllItemUseCases>,
    @Inject(UsecaseProxyModule.CREATE_ITEM_USE_CASE)
    private readonly createItemUsecaseProxy: UseCaseProxy<CreateItemUseCases>,
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

  @Post('/create')
  async createItem(@Body(new ValidationPipe()) createItemDto: CreateItemDto) {
    const { category, name, stock } = createItemDto;
    console.log('Category:', category);
    console.log('Name:', name);
    console.log('Stock:', stock);
    const result = await this.createItemUsecaseProxy.getInstance().execute({
      category: category,
      name: name,
      stock: stock,
    });
    return {
      status: 'Created',
      code: 201,
      message: 'Insert data success',
      data: result,
    };
  }
}