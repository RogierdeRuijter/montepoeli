// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {DynamicEnvironment} from './dynamic-environment';
import { Authentication } from './interfaces/authentication.interface';
import { Backend } from './interfaces/backend.interface';
import { Frontend } from './interfaces/frontend.interface';

export class Environment extends DynamicEnvironment {

  public production: boolean;
  public authentication: Authentication;
  public frontend: Frontend;
  public backend: Backend;

  constructor() {
    super();

    this.production = false;
    // TODO: create interface for environments
    this.authentication = {
      TOKENNAME: 'montepoeliJwt',
      AUTHTOKENNAME: 'montepoeliAuthenticated' 
    };

    this.frontend = {
      TITLE: 'Angular Starter kit',
      POLLING_TIMEOUT: 1000,
      PAGE_SIZE: 20,
      BASIC_ROUTES: {
        LANDING: 'landing',
        LOGIN: 'login',
        HOME: 'home',
      },
    };

    this.backend = {
      API_PREFIX: 'api',
      ENTRY_POINTS: {
        SIGNIN: '/signIn',
        SIGNOUT: '/logout',
        USERS: '/users',
        GAME: '/game',
        BY_IDS: '/ids',
        RULE: '/rule',
        CREATE: '/create',
        UPDATE_LANGUAGE_PREFERENCE: '/language-preference',
        CURRENT: '/current'
      },
    };
  }
}
