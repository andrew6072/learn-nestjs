import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    // forFeature() method to define which repositories are registered in the current scope
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  controllers: [UsersController],
  exports: [TypeOrmModule]
})
export class UsersModule {}
