import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { User } from '../entities/user.entity';
import { UserRepositoryOrm } from './user.repository';
import { Item } from '../entities/item.entity';
import { ItemRepositoryOrm } from './item.repository';

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([User, Item])],
    providers: [UserRepositoryOrm, ItemRepositoryOrm],
    exports: [UserRepositoryOrm, ItemRepositoryOrm],
  })
export class RepositoriesModule {}