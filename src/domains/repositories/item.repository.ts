import { CreateItemDto } from 'src/presentations/item/dto/create-item.dto';
import { ItemM } from '../model/item';

export interface ItemRepository {
    getAllItems(): Promise<ItemM[]>;
    createItem(createUserDto: CreateItemDto): Promise<ItemM>;
}