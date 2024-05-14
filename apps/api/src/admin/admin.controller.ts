import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  @Render('login')
  loginPage() {
    return {
      message: 'Hello admin login',
      bool: true
    };
  }
}
