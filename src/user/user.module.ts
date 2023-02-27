import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { UserProfile } from './entity/user-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserProfile])
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class UserModule {}