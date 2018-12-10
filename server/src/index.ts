import {MontepouliBackend} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as path from 'path';

export {MontepouliBackend};

export async function main(options: ApplicationConfig = {}) {
  const app = new MontepouliBackend(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;

  app.static('/', path.join(__dirname, '../client/dist'));

  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
