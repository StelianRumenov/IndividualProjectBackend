import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Entities/User/user.service';
import { LoginGuard } from 'src/Guards/login.guard';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { RefreshTokenGuard } from 'src/Guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService, // private config: ConfigService,
  ) {}

  @UseGuards(LoginGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
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
  refreshTokens(@Request() req: any) {
    console.log('sub in controller: ' + console.log(JSON.stringify(req.user)));
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
