import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/app/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('secret')); // TODO: use env variable
  app.setGlobalPrefix('api');

  let origin: boolean | string = true;
  // TODO: this probably wont work right now
  if (process.env.ENV === 'prod') {
    origin = 'https://www.montepoeli.club'; // TODO: use env variable
  } else {
    app.enableCors({
      credentials: true,
      origin,
    });
  }

  await app.listen(3000);
}
bootstrap();
