export const environment = {
  production: true,
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
      FULL: 'https://montepoeli.club/api',
    },
    WS: 'ws://localhost:5500',
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
