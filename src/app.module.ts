import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './Authentication/auth.controller';
import { AuthModule } from './Authentication/auth.module';
import { AuthService } from './Authentication/auth.service';
import { UserController } from './Entities/User/user.controller';
import { UserModule } from './Entities/User/user.module';
import { UserService } from './Entities/User/user.service';
import { LocalStrategy } from './Strategy/local.strategy';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { configArray } from './Config/index';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { entities } from './Entities';
import { UserEntity } from './Entities/User/user.entity';
import { ProductEntity } from './Entities/Product/product.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from './Entities/Product/product.module';
import { ConfigModule } from '@nestjs/config';
import { Transaction } from './Entities/Transaction/transaction.entity';
import { rootCertificates } from 'tls';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    UserModule,
    ProductModule,
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'individual',
      entities: [UserEntity, ProductEntity, Transaction],
      //
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AuthService, LocalStrategy, AppService],
  exports: [],
})
export class AppModule {}
