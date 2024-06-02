import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginGuard } from './guard/login.guard';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';
import { ApiKeyGuard } from './guard/apikey.guard';

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
