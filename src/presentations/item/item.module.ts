import { Module } from '@nestjs/common';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { ItemController } from './item.controller';

@Module({
  imports: [UsecaseProxyModule.register()],
  controllers: [ItemController],
})
export class ItemModule {}