import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/constants';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]> {
        const users = await this.usersRepository.find();
        return users;
    }

    async findOne(username: string): Promise<User> {
        const data = await this.usersRepository.findOne({ 
            where: { username }
        });
        return data;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create({
            username: createUserDto.username,
            password: createUserDto.password,
        });
        await this.usersRepository.save(newUser);
        return newUser;
    }
    
}
