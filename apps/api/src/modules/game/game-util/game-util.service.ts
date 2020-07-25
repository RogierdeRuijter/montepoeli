import { Injectable } from '@nestjs/common';
import { Game } from 'apps/api/src/models/interfaces/game.interface';
import { GameRepositoryService } from '../game-repository/game-repository.service';

@Injectable()
export class GameUtilService {

    constructor(private gameRepositoryService: GameRepositoryService) {}

    public async getAllIdsFromGames(): Promise<string[]> {
        const games: Game[] = await this.getAllGames();

        return games?.map((game: Game) => game.id);
      }

      public getAllGames(): Promise<Game[]> {
        return this.gameRepositoryService.find();
      }
}
