import { Application } from '@loopback/core';

export class MontepoeliApplication extends Application {
  constructor() {
    super({
      rest: {
        port: 8080,
      },
    });

  }

  async stop() {
    // This is where you would do whatever is necessary before stopping your
    // app (graceful closing of connections, flushing buffers, etc)
    console.log('Montepoeli is shutting down...');
    // The superclass stop method will call stop on all servers that are
    // bound to the application.
    await super.stop();
  }

}