import { ItemM } from 'src/domains/model/item';
import { ItemRepository } from 'src/domains/repositories/item.repository';
import { CreateItemDto } from 'src/presentations/item/dto/create-item.dto';

export class CreateItemUseCases {
  constructor(private itemRepository: ItemRepository) {}

  async execute(createItemDto: CreateItemDto): Promise<ItemM> {
    return this.itemRepository.createItem(createItemDto);
  }
}