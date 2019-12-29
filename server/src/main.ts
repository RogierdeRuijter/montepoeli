import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/app/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  checkEnvironmentVariables();

  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.setGlobalPrefix('api');

  if (process.env.ENV === 'dev') {
    app.enableCors({
        credentials: true,
        origin: true,
      });
    }

  await app.listen(3000);
}

const checkEnvironmentVariables = () => {
  const env = process.env.ENV.toString();
  const cookieSecret = process.env.COOKIE_SECRET.toString();

  if (isNullOrUndefined(env)) {
    throwEnvironmentVariableShouldBeDefinedException('ENV');
  }

  // TODO: make this logic better understandable
  if (!(env === 'prod' || env === 'dev')) {
    throw new Error('ENV environment variable should be either: prod or dev');
  }

  if (isNullOrUndefined(cookieSecret)) {
    throwEnvironmentVariableShouldBeDefinedException('COOKIE_SECRET');
  }
};

const isNullOrUndefined = (value: any) => {
  return value === null || value === undefined;
};

const throwEnvironmentVariableShouldBeDefinedException = (name: string) => {
  throw new Error('environment variable: ' + name + ' should be defined');
};

bootstrap();
