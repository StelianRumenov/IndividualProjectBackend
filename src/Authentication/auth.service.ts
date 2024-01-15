import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Entities/User/DTO/createUser.dto';
import { UserService } from 'src/Entities/User/user.service';
import * as argon2 from 'argon2';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByUserName(username);

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async checkStuff(data: any) {
    console.log(data);
  }

  async login(user: any, response: Response, req: Request) {
    if (req.cookies.refresh_token) {
    }
    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user._id, tokens.refreshToken);

    response.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      maxAge: 360000,
      secure: true,
    });

    const data = this.verify(tokens.accessToken);
    console.log(data);

    return {
      accessToken: tokens.accessToken,
      isAuthenticated: true,
      data: await this.verify(tokens.accessToken),
      testData: 'testData',
    };
  }

  async register(userDetails: CreateUserDto) {
    //todo first
    //check if email exists in db
    // if not, hash password
    // create new user and save to db
  }

  // async logout() {} //todo

  async verify(token: string): Promise<any> {
    const decoded = this.jwtService.verify(token);

    const user = this.userService.getUserByUserName(decoded.username);

    if (!user) {
      throw new Error('unable to get user from decoded token');
    }

    return user;
  }

  hashData(data: string) {
    return argon2.hash(data);
  }
  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);

    await this.userService.updateUserRefreshToken(userId, hashedRefreshToken);
  }

  async refreshTokens(refreshToken: string, req: Request, res: Response) {
    const actualRefreshToken = req.cookies.refresh_token;
    const payload = this.jwtService.verify(actualRefreshToken, {
      secret: 'Secret',
    });
    const user = await this.userService.getUserById(payload.sub);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');

    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      actualRefreshToken,
    );
    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }
    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      maxAge: 360000,
      secure: true,
    });
    return tokens;
  }

  async getTokens(userId: string, username: string) {
    const userData = await this.userService.getUserById(userId);
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
          email: userData.email,
          password: userData.password,
        },
        {
          secret: 'Secret',
          expiresIn: '15s',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
          email: userData.email,
          password: userData.password,
        },
        {
          secret: 'Secret',
          expiresIn: '40s',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
