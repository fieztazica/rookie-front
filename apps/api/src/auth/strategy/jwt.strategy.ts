import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as BaseStrategy } from 'passport-jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(BaseStrategy) {
  constructor() {
    super({
      secretOrKeyProvider: jwtConstants.secretOrKeyProvider,
      algorithms: ['RS256'],
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      audience: jwtConstants.audience,
      issuer: jwtConstants.issuer,
    });
  }

  validate(payload: unknown): unknown {
    // console.log(payload);
    return payload;
  }
}
