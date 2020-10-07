import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentService } from '../../../../../../shared/services/environment/environment.service';
import { TranslateTestingModule } from '../../../../../../testing/translate-testing.module';
import { Game } from '../../../../../interfaces/game.interface';
import { BadRequest } from 'src/errors/bad-request.error';
import { WebsocketService } from '../../../../../services/websocket/websocket.service';

describe('GameService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateTestingModule],
      providers: [EnvironmentService, WebsocketService],
    })
  );

  it('should be created', () => {
    const service: GameService = TestBed.inject(GameService);
    expect(service).toBeTruthy();
  });

  describe('postProcessGame', () => {
    it('should swap draw for a -', () => {
      const service: GameService = TestBed.inject(GameService);

      const input: Game = {
        id: '1',
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: null,
        date: new Date(),
      };
      const result = service.postProcessGame(input);

      const expectedResult: Game = {
        id: '1',
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Draw',
        date: input.date,
      };

      expect(result).toEqual(expectedResult);
    });

    it('should be an identify funtion if the winner field does not contain draw', () => {
      const service: GameService = TestBed.inject(GameService);

      const input: Game = {
        id: '1',
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Rogier',
        date: new Date(),
      };
      const result = service.postProcessGame(input);

      const expectedResult: Game = {
        id: '1',
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Rogier',
        date: input.date,
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('filterIdsThatExistInTheGames', () => {
    it('should return the ids that are not in the games', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = ['1', '2', '3'];

      const games: any[] = [{ id: '1' }, { id: '2' }];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = ['3'];

      expect(result).toEqual(expectedResult);
    });

    it('should filter out the games that are not present in the gameIds list even if the gameIds list does not hold the id that is present in the current game', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = ['3'];

      const games: any[] = [{ id: '1' }, { id: '2' }];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = ['3'];

      expect(result).toEqual(expectedResult);
    });

    it('should return an empty list if all ids are present in the games list', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = ['1', '2'];

      const games: any[] = [{ id: '1' }, { id: '2' }];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = [];

      expect(result).toEqual(expectedResult);
    });

    it('should return an empty list if the gameIds are empty', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = [];

      const games: any[] = [{ id: '1' }, { id: '2' }];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = [];

      expect(result).toEqual(expectedResult);
    });

    it('should return all gameIds if the games list is empty', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = ['1', '2', '3'];

      const games: any[] = [];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = ['1', '2', '3'];

      expect(result).toEqual(expectedResult);
    });

    it('should handle undefined for the gameIds', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = undefined;

      const games: any[] = [];

      const result = service.filterIdsThatExistInTheGames(gameIds, games);

      const expectedResult: string[] = undefined;

      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if the games are undefined for the games', () => {
      const service: GameService = TestBed.inject(GameService);

      const gameIds: string[] = ['1'];

      const games: any[] = undefined;

      expect(() =>
        service.filterIdsThatExistInTheGames(gameIds, games)
      ).toThrow(new BadRequest('games should not be undefined'));
    });
  });
});
