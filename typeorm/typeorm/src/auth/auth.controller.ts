import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './constants';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}
    
    @Public()
    @HttpCode(HttpStatus.OK) // This decorator sets the default HTTP status code for the response
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        
        return this.authService.register(registerDto);
    }

    @Get('profile')
    getProfile(@Req() req) {
        console.log(req.user);
        return req.user;
    } 
}
