import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
  @UsePipes(new ValidationPipe())
  async addUser(@Body() user: UserDTO) {
    return user
  }
}
