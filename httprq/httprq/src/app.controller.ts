import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('user')
  // addUser(@Body() user: UserDTO) {
  //   return user
  // }
}
