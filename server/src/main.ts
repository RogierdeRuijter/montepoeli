import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');

  let origin: boolean | string = true;
  if (process.env.ENV === 'prod') {
    origin = 'https://www.montepoeli.club';
  }

  app.enableCors({
    credentials: true,
    origin,
  });

  await app.listen(3000);
}
bootstrap();
