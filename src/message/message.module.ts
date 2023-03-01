import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Message])
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class MessageModule {}