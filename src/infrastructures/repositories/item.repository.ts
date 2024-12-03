import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemRepository } from 'src/domains/repositories/item.repository';
import { Item } from '../entities/item.entity';
import { ItemM } from 'src/domains/model/item';
import { CreateItemDto } from 'src/presentations/item/dto/create-item.dto';

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

  async createItem(createItemDto: CreateItemDto): Promise<ItemM> {
    const item = new Item();
    item.category = createItemDto.category;
    item.name = createItemDto.name;
    item.stock = createItemDto.stock;
    return this.itemRepository.save(item);
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