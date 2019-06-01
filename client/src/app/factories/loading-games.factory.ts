export class LoadingGamesFactory {
  public create(amount: number): any[] {
    const loadingGames: any[] = [];

    for (let i = 0; i < amount; i++) {
      loadingGames.push({});
    }

    return loadingGames;
  }
}
