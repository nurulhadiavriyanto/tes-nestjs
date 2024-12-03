import { ItemM } from '../model/item';

export interface ItemRepository {
    getAllItems(): Promise<ItemM[]>;
}