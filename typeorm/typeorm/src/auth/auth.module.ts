import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '600s'}
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService, 
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  exports: [AuthModule]
})
export class AuthModule {}
