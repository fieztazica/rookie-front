import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';
import { AuthService } from './auth.service';
import { ApiKeyGuard } from './guard/apikey.guard';
import { LoginGuard } from './guard/login.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/user')
  user(@Request() req) {
    return req.user;
  }

  @UseGuards(LoginGuard)
  @Get('/callback')
  callback(@Res() res: Response) {
    res.redirect('/');
  }

  @UseGuards(LoginGuard)
  @Get('/login')
  login() {}

  @Get('/logout')
  async logout(@Request() req, @Res() res: Response) {
    req.logout(async (error: any) => {
      if (error) {
        console.log(error);
      }
    });
    res.redirect('/');
  }

  @UseGuards(ApiKeyGuard)
  @Post('/register')
  register(@Body() customer: CreateCustomerInput) {
    return this.authService.register(customer);
  }
}
