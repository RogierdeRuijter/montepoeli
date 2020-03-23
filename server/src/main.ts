import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/app/app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/server.key'),
    cert: fs.readFileSync('./secrets/server.crt'),
  };

  let app;
  if (httpsOptions.key && httpsOptions.cert) {
    app = await NestFactory.create(AppModule, { httpsOptions });
  } else {
    app = await NestFactory.create(AppModule);
  }

  checkEnvironmentVariables();

  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(compression({threshold: 500}));
  app.setGlobalPrefix('api');

  let origin: boolean | string = true;
  if (process.env.ENV === 'prod') {
    origin = process.env.CORS_ORIGIN;
  }

  app.enableCors({
    credentials: true, // TODO: check if the crendtials true is needed in production
    origin,
  });

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
