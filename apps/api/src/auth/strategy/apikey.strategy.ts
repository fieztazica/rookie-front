import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  key = 'api-key';
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<{
    id: string;
    name: string;
    apiKey: string;
    username: string;
    password: string;
    userinfo: any;
  }> {
    const key =
      req.headers['X-API-KEY'] ?? req.headers['x-api-key'] ?? req.query.api_key;
    if (!key) {
      throw new UnauthorizedException();
    }
    if ((await this.authService.isKeyValid(key.toString())) === false) {
      throw new UnauthorizedException();
    }

    return {
      id: '',
      name: '',
      apiKey: key.toString(),
      username: 'System',
      password: '',
      userinfo: {
        userRoles: ['System', 'Admin'],
      },
    };
  }
}
