import { ItemM } from 'src/domains/model/item';
import { ItemRepository } from 'src/domains/repositories/item.repository';

export class GetAllItemUseCases {
  constructor(private itemsRepository: ItemRepository) {}

  async execute(): Promise<ItemM[]> {
    return await this.itemsRepository.getAllItems();
  }
}