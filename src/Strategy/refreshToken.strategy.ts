import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  private receivedToken;
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: 'Secret',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['refresh_token'];

          // console.log(data);

          if (!data) {
            return null;
          }

          this.receivedToken = data;
          return data;
        },
      ]),
    });
  }

  validate(req: Request, payload: any) {
    // console.log('validirame ' + JSON.stringify(req));
    // console.log('mai stana ' + this.receivedToken);
    const refreshToken = this.receivedToken;
    // console.log('validate: ' + refreshToken);
    return { ...payload, refreshToken };
  }
}
