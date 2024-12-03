import { IsString, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsString()
  category: string;
  
  @IsString()
  name: string;
  
  @IsNumber()
  stock: number;
}
  