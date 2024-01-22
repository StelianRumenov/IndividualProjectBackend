import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const port = parseInt(process.env.PORT) || 3002;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: false,
    origin: '*',
  });

  // const config = app.get(ConfigService);
  app.use(cookieParser());

  await app.listen(port);
}
bootstrap();
