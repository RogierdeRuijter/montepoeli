export interface Backend {
  API_PREFIX: string;
  ENTRY_POINTS: {
    SIGNIN: string;
    SIGNOUT: string;
    USERS: string;
    BY_IDS: string;
    GAME: string;
    RULE: string;
    CREATE: string;
    UPDATE_LANGUAGE_PREFERENCE: string;
    CURRENT: string;
  };
}
