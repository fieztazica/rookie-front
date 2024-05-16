import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Client,
  Issuer,
  Strategy,
  TokenSet,
  UserinfoResponse,
} from 'openid-client';
import { AuthService } from '../auth.service';

// https://sdoxsee.github.io/blog/2020/02/05/cats-nest-nestjs-mongo-oidc.html
export const buildOpenIdClient = async () => {
  const TrustIssuer = await Issuer.discover(`${process.env.AUTH0_ISSUER_URL}`);
  const client = new TrustIssuer.Client({
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
  });
  return client;
};

@Injectable()
export class OidcStrategy extends PassportStrategy(Strategy, 'oidc') {
  client: Client;

  constructor(
    private readonly authService: AuthService,
    client: Client,
  ) {
    super({
      client: client,
      params: {
        redirect_uri: process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
        scope: process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE,
      },
      passReqToCallback: false,
      usePKCE: false,
    });

    this.client = client;
  }

  async validate(tokenset: TokenSet): Promise<any> {
    const userinfo: UserinfoResponse = await this.client.userinfo(tokenset);

    try {
      const id_token = tokenset.id_token;
      const access_token = tokenset.access_token;
      const refresh_token = tokenset.refresh_token;
      const user = {
        id_token,
        access_token,
        refresh_token,
        userinfo,
      };
      return user;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
