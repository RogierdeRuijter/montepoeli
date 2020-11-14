// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DynamicEnvironment } from './dynamic-environment';
import { Authentication } from './interfaces/authentication.interface';
import { Frontend } from './interfaces/frontend.interface';
import { Backend } from './interfaces/backend.interface';

export class Environment extends DynamicEnvironment {
  public production: boolean;
  public authentication: Authentication;
  public frontend: Frontend;
  public backend: Backend;

  constructor() {
    super();
    this.production = true;
    this.authentication = {
      tokenName: 'montepoeliJwt',
      authTokenName: 'montepoeliAuthenticated',
    };
    this.frontend = {
      title: 'Angular Starter kit',
      rollingTimeout: 1000,
      pageSize: 20,
      basicRoutes: {
        landing: 'landing',
        login: 'login',
        home: 'home',
      },
    };

    this.backend = {
      apiPrefix: 'api',
      entryPoints: {
        signIn: '/signIn',
        signOut: '/logout',
        users: '/users',
        BY_IDS: '/ids',
        game: '/game',
        rule: '/rule',
        create: '/create',
        updateLanguagePreference: '/language-preference',
        CURRENT: '/current',
      },
    };
  }
}
