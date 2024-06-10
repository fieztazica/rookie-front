import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { AdminConfigsService } from './admin.configs.service';

@Controller('admin/configs')
export class AdminConfigsController {
  constructor(private readonly adminConfigsService: AdminConfigsService) {}

  @Post('about/edit')
  async postAboutPage(
    @Req() req: Request,
    @Res() res,
    @Body() body: { about: string },
  ) {
    await this.adminConfigsService.setAbout(body.about);
    res.redirect('/admin/configs/about/edit?successMessage=Saved');
  }

  @Get('about/edit')
  @RedirectAuth()
  @Render('about/edit')
  async editAboutPage(
    @Req() req: Request,
    @Query('successMessage') successMessage: string,
  ) {
    return {
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
      userinfo: req?.user?.userinfo,
      data: await this.adminConfigsService.getAbout(),
    };
  }
}
