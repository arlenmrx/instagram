import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Subscriptions } from './entity/subscriptions.entity';
import { UserProfile } from './entity/user-profile.entity';
import { Message } from 'src/message/entity/message.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserProfile, Subscriptions, Message])
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class UserModule {}