import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemRepository } from 'src/domains/repositories/item.repository';
import { Item } from '../entities/item.entity';
import { ItemM } from 'src/domains/model/item';

@Injectable()
export class ItemRepositoryOrm implements ItemRepository {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async getAllItems(): Promise<ItemM[]> {
    const items = await this.itemRepository.find();
    return items.map((item) => this.toUser(item));
  }

  private toUser(itemEntity: Item): ItemM {
    const item: ItemM = new ItemM();

    item.id = itemEntity.id;
    item.category = itemEntity.category;
    item.name = itemEntity.name;
    item.stock = itemEntity.stock;
    item.created_at = itemEntity.created_at;
    item.updated_at = itemEntity.updated_at;

    return item;
  }
}