// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTHENTICATION: {
    TOKENNAME: 'montepoeli-jwt',
  },
  FRONTEND: {
    TITLE: 'Angular Starter kit',
    POLLING_TIMEOUT: 1000,
    PAGE_SIZE: 20,
    BASIC_ROUTES: {
      LOGIN_ROUTE: '/login',
      HOME: '/home',
    },
  },
  BACKEND: {
    URL: {
      FULL: 'http://server-e2e:3000/api',
    },
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
  },
};