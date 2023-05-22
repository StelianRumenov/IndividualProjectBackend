import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Entities/User/DTO/createUser.dto';
import { UserService } from 'src/Entities/User/user.service';
import * as argon2 from 'argon2';
import { UpdateUserDto } from 'src/Entities/User/DTO/updateUserDto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByUserName(username);
    console.log(user);

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    // const payload = {
    //   email: user.email,
    //   name: user.name,
    //   sub: user.id,
    //   role: user.role,
    // };
    console.log(user);

    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return tokens;

    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    //   payload,
    // };
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

  async refreshTokens(userId: string, refreshToken: string) {
    console.log('dano e tuka ' + userId);
    const user = await this.userService.getUserById(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) {
      console.log('vliza tuka');
      throw new ForbiddenException('Access Denied');
    }
    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async getTokens(userId: string, username: string) {
    console.log('id: ' + userId);
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
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
        },
        {
          secret: 'Secret',
          expiresIn: '40s',
        },
      ),
    ]);

    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    //   payload,
    // };

    return {
      accessToken,
      refreshToken,
    };
  }
}
