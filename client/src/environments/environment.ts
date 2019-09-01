// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {DynamicEnvironment} from './dynamic-environment';

class Environment extends DynamicEnvironment {

  public production: boolean;
  public authentication: any;
  public frontend: any;
  public backend: any;

  constructor() {
    super();

    this.production = false;

    this.authentication = {
      TOKENNAME: 'montepoeli-jwt',
    };

    this.frontend = {
      TITLE: 'Angular Starter kit',
      POLLING_TIMEOUT: 1000,
      PAGE_SIZE: 20,
      BASIC_ROUTES: {
        LOGIN_ROUTE: '/login',
        HOME: '/home',
      },
    };

    this.backend = {
      ENTRY_POINTS: {
        SIGNIN: '/signIn',
        SIGNOUT: '/logout',
        DASHBOARD: '/statistics',
        STATUS: '/status',
        USERS: '/users',
        CATS: '/cats',
        GAME: '/game',
        CREATE: '/create',
      },
    };
  }
}

export const environment = new Environment();
