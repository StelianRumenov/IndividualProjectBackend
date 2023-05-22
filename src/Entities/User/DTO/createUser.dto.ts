export class CreateUserDto {
  //add vaalidation class
  email: string;
  password: string;
  refreshToken?: string;
}
