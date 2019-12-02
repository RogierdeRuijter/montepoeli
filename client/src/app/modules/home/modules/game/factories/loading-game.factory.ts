import {Factory} from '../../../../shared/interfaces/factory.interface';

export class LoadingGameFactory implements Factory<any> {
  public create(): any {
    return {};
  }

  public createMany(amount: number): any[] {
    const loadingGames: any[] = [];

    for (let i = 0; i < amount; i++) {
      loadingGames.push(this.create());
    }
    return loadingGames;
  }
}
