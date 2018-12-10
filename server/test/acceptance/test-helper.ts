import {MontepouliBackend} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';

export async function setupApplication(): Promise<AppWithClient> {
  const app = new MontepouliBackend({
    rest: givenHttpServerConfig({host: '127.0.0.1'}),
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: MontepouliBackend;
  client: Client;
}
