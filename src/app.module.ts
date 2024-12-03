import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructures/config/environment-config/environment-config.module';
import { UserModule } from './presentations/user/user.module';
import { UsecaseProxyModule } from './infrastructures/usecase-proxy/usecase-proxy.module';
import { UserController } from './presentations/user/user.controller';
import { ItemModule } from './presentations/item/item.module';
import { ItemController } from './presentations/item/item.controller';

@Module({
  imports: [UsecaseProxyModule.register(), UserModule, ItemModule, EnvironmentConfigModule],
  controllers: [UserController, ItemController],
})
export class AppModule {}
