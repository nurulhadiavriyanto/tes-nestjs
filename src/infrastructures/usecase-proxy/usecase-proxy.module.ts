import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { UserRepositoryOrm } from '../repositories/user.repository';
import { UseCaseProxy } from './usecase-proxy';
import { RepositoriesModule } from '../repositories/repository.module';
import { GetAllUserUseCases } from 'src/applications/use-cases/user.usecase';
import { CreateUserUseCases } from 'src/applications/use-cases/createUser.usecase';
import { ItemRepositoryOrm } from '../repositories/item.repository';
import { GetAllItemUseCases } from 'src/applications/use-cases/item.usecase';
import { CreateItemUseCases } from 'src/applications/use-cases/createItem.usecase';

@Module({
    imports: [EnvironmentConfigModule, RepositoriesModule],
  })
  export class UsecaseProxyModule {
    static GET_ALL_USERS_USE_CASE = 'getAllUsersUsecaseProxy';
    static CREATE_USER_USE_CASE = 'createUserUsecaseProxy';
    static GET_ALL_ITEMS_USE_CASE = 'getAllItemsUsecaseProxy';
    static CREATE_ITEM_USE_CASE = 'createItemUsecaseProxy';
  
    static register(): DynamicModule {
      return {
        module: UsecaseProxyModule,
        providers: [
          {
            inject: [UserRepositoryOrm],
            provide: UsecaseProxyModule.GET_ALL_USERS_USE_CASE,
            useFactory: (userRepository: UserRepositoryOrm) =>
              new UseCaseProxy(new GetAllUserUseCases(userRepository)),
          },
          {
            inject: [UserRepositoryOrm],
            provide: UsecaseProxyModule.CREATE_USER_USE_CASE,
            useFactory: (userRepository: UserRepositoryOrm) =>
              new UseCaseProxy(new CreateUserUseCases(userRepository)),
          },
          {
            inject: [ItemRepositoryOrm],
            provide: UsecaseProxyModule.GET_ALL_ITEMS_USE_CASE,
            useFactory: (itemRepository: ItemRepositoryOrm) =>
              new UseCaseProxy(new GetAllItemUseCases(itemRepository)),
          },
          {
            inject: [ItemRepositoryOrm],
            provide: UsecaseProxyModule.CREATE_ITEM_USE_CASE,
            useFactory: (itemRepository: ItemRepositoryOrm) =>
              new UseCaseProxy(new CreateItemUseCases(itemRepository)),
          },
        ],
        exports: [
            UsecaseProxyModule.GET_ALL_USERS_USE_CASE,
            UsecaseProxyModule.CREATE_USER_USE_CASE,
            UsecaseProxyModule.GET_ALL_ITEMS_USE_CASE,
            UsecaseProxyModule.CREATE_ITEM_USE_CASE,
        ],
      };
    }
  }