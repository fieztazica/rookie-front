import { Injectable } from '@nestjs/common';
import { ConfigsService } from 'src/configs/configs.service';

@Injectable()
export class AdminConfigsService {
  constructor(private readonly configsService: ConfigsService) {}

  async getAbout() {
    const result = await this.configsService.getOrSet('about', '');
    return result;
  }

  async setAbout(content: string) {
    return await this.configsService.set('about', content);
  }
}
