import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService
    ) {}

    async signIn(signInDto: SignInDto): Promise<{ access_token: string}> {
      const username = signInDto.username;
      const pass = signInDto.password;

      const user = await this.usersService.findOne(username);
      if (!user || !(await bcrypt.compare(pass, user.password))) {
        throw new UnauthorizedException("Invalid username or password");
      }
      const payload = {
        sub: user.id,
        username: user.username
      };
      // generate JWT from a subset of the user object properties (user.id, user.username)
      return {access_token: await this.jwtService.signAsync(payload)};
    }

    async register(registerDto: RegisterDto): Promise<void> {
      const username = registerDto.username;
      const plainPassword = registerDto.password;
      const user = await this.usersService.findOne(username);
      if (user) {
        throw new ConflictException("This username is already taken");
      }

      const saltRounds = 10; // You can adjust the salt rounds for hashing
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

      // Create and save the new user (you would implement this method in UsersService)
      const newUser = {
        username,
        password: hashedPassword,
      };

      await this.usersService.create(newUser);
    }
}
