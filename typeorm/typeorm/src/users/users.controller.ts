import { Body, ConflictException, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/constants';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    
    @Get('/:username')
    async getOne(@Res() res, @Param('username') username:string) {
        const data = await this.userService.findOne(username);
        return res.status(HttpStatus.OK).json(data);
    }

    @Get('/')
    async getAll(@Res() res) {
        const data = await this.userService.findAll();
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/')
    async create(@Res() res, @Body() createUserDto: CreateUserDto) {
        const newData = await this.userService.create(createUserDto);
        if (!newData) {
            throw new ConflictException('Todo with the same id already exists.')
        }
        return res.status(HttpStatus.OK).json({
            message: 'Todo has been submitted successfully!',
            data: newData,
        });
    }
}
