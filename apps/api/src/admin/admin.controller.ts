import { Controller, Get, Render, Req } from '@nestjs/common';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';

@Controller('admin')
export class AdminController {
  @Get()
  @Render('home')
  home(@Req() req) {
    return {
      message: req?.user?.userinfo
        ? `Have a nice day, ${req?.user?.userinfo?.name}!`
        : 'Please login to access the admin dashboard.',
      userinfo: req?.user?.userinfo,
    };
  }
}
