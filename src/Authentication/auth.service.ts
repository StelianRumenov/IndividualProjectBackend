import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Entities/User/DTO/createUser.dto';
import { UserService } from 'src/Entities/User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      name: user.name,
      sub: user.id,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      payload,
    };
  }

  async register(userDetails: CreateUserDto) {
    //todo first
    //check if email exists in db
    // if not, hash password
    // create new user and save to db
  }

  async logout() {} //todo

  async verify(token: string): Promise<any> {
    const decoded = this.jwtService.verify(token);

    const user = this.userService.getUserByEmail(decoded.email);

    if (!user) {
      throw new Error('unable to get user from decoded token');
    }

    return user;
  }
}
