import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/createUser.dto';
import { UpdateUserDto } from './DTO/updateUserDto';
import { UserEntity } from './user.entity';

export type MyRequest = {
  email: string;
  password: string;
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(userDetails: CreateUserDto): Promise<any> {
    //Todo check if user exists
    const newUser = this.userRepository.create({
      ...userDetails,
      // createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  signUp(user: any) {
    //ToDo
  }
  async getUserByEmail(email: string): Promise<any> {
    const users = await this.getUsers();
    for (const user of users) {
      if (user.email === email) {
        return user;
      }
    }
  }

  async getUserByUserName(userName: string): Promise<any> {
    const users = await this.getUsers();
    for (const user of users) {
      if (user.username === userName) {
        await console.log('in verify' + JSON.stringify(user));
        return user;
      }
    }
  }

  async getUserById(userId: string): Promise<any> {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async updateUserRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<any> {
    const userToUpdate = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    // console.log(userToUpdate);

    userToUpdate.refreshToken = refreshToken;
    await this.userRepository.save(userToUpdate);
  }

  async becomeSeller(userId: string): Promise<any> {
    const temp = await this.userRepository.findOne({ where: { id: userId } });

    if (temp) {
      temp.role = 'Seller';
      return await this.userRepository.save(temp);
    }
  }
}
