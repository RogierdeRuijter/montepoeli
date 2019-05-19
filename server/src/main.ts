import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');

  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(3000);
}
bootstrap();
