import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Entities/User/DTO/createUser.dto';
import { UserService } from 'src/Entities/User/user.service';
export declare class AuthService {
    private jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        payload: {
            email: any;
            name: any;
            sub: any;
            role: any;
        };
    }>;
    register(userDetails: CreateUserDto): Promise<void>;
    logout(): Promise<void>;
    verify(token: string): Promise<any>;
}
