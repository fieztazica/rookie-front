import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<unknown> {
    const key = req.headers['X-API-KEY'] ?? req.query.api_key;
    if ((await this.authService.isKeyValid(key.toString())) === false) {
      throw new UnauthorizedException();
    }

    return {
      apiKey: key,
    };
  }
}
