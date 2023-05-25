import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Entities/User/user.service';
import { LoginGuard } from 'src/Guards/login.guard';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { RefreshTokenGuard } from 'src/Guards/refresh-token.guard';
import { CustomLoginGuard } from 'src/Guards/customLoginGuard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService, // private config: ConfigService,
  ) {}

  @UseGuards(CustomLoginGuard)
  @Post('login')
  async login(
    @Request() req,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const result = await this.authService.login(req.user, response, req);
    return result;

    // return this.authService.login(req.user);
  }

  @Post('/logout')
  logout() {
    // return this.authService.logout();
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(
    @Request() req: any,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refreshToken = req.user['refresh_token'];

    return this.authService.refreshTokens(refreshToken, req, response);
  }
}
