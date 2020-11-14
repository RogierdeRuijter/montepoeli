export interface Backend {
  apiPrefix: string;
  entryPoints: {
    signIn: string;
    signOut: string;
    users: string;
    byIds: string;
    game: string;
    rule: string;
    create: string;
    updateLanguagePreference: string;
    current: string;
  };
}
