import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService, IUser, HelloService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.findUserById();
  // }

  @Get()
  getUsers(@Query('name') name: string): IUser[] {
    return this.appService.findUsersByName(name);
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): IUser {
    return this.appService.findUserById(id)
  }
}

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
