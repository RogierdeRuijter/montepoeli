import { TestBed } from '@angular/core/testing';

import { DialogDataService } from './dialog-data.service';
import { Game } from '../../../../interfaces/game.interface';
import { GameFactory } from '../../../home/modules/game/factories/game.factory';

describe('DialogDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DialogDataService],
    })
  );

  it('should be created', () => {
    const service: DialogDataService = TestBed.inject(DialogDataService);
    expect(service).toBeTruthy();
  });

  describe('allFieldsAreDefined', () => {
    it('should return true when all fields are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: Game = {
        id: '1',
        black: 'Sjonny',
        white: 'Anita',
        winner: 'Anita',
        date: new Date(),
      };

      const output = service.allFieldsAreDefined(game);

      const expected = true;

      expect(output).toBe(expected);
    });

    it('should return false when not all game fields are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: Game = {
        id: '1',
        black: 'Sjonny',
        white: undefined,
        winner: undefined,
        date: new Date(),
      };

      const output = service.allFieldsAreDefined(game);

      const expected = false;

      expect(output).toBe(expected);
    });
  });

  describe('userAreDefined', () => {
    it('should return true when the black and white user are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: any = {
        black: 'Sjonny',
        white: 'Anita',
      };

      const output = service.userAreDefined(game);

      const expected = true;

      expect(output).toBe(expected);
    });

    it('should return false when only the black user is filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: any = {
        black: 'Sjonny',
      };

      const output = service.userAreDefined(game);

      const expected = false;

      expect(output).toBe(expected);
    });
  });

  describe('determineDisabledWinnerOptions', () => {
    it('should return true for all entries if the white and black players are not defined in the game', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create();
      const draw = 'Draw';

      const result = service.determineDisabledWinnerOptions(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = [true, true, true, true];

      expect(result).toEqual(expectedResult);
    });

    it('should return true for all entries if only the white user is defined', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create({ white: 'user' });
      const draw = 'Draw';

      const result = service.determineDisabledWinnerOptions(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = [true, true, true, true];

      expect(result).toEqual(expectedResult);
    });

    it('should return false for the locations of the names of the users that are defined in white and black and for the draw', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create({
        white: 'user',
        black: 'user1',
      });
      const draw = 'Draw';

      const result = service.determineDisabledWinnerOptions(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = [false, false, true, false];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('areAllWinnerOptionsDisabled', () => {
    it('should return true if the white and black players are not defined in the game', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create();
      const draw = 'Draw';

      const result = service.areAllWinnerOptionsDisabled(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = true;

      expect(result).toEqual(expectedResult);
    });
    it('should return true if the white is not defined in the game', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create({ white: 'user' });
      const draw = 'Draw';

      const result = service.areAllWinnerOptionsDisabled(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = true;

      expect(result).toEqual(expectedResult);
    });

    it('should return false if the white and black user are defined in the game', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create({
        white: 'user',
        black: 'user1',
      });
      const draw = 'Draw';

      const result = service.areAllWinnerOptionsDisabled(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = false;

      expect(result).toEqual(expectedResult);
    });

    it('should return false if the white, black, and winner user are defined in the game', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const winnerOptions = ['user', 'user1', 'user2', 'Draw'];
      const game: Game = new GameFactory().create({
        white: 'user',
        black: 'user1',
        winner: 'user',
      });
      const draw = 'Draw';

      const result = service.areAllWinnerOptionsDisabled(
        winnerOptions,
        game,
        draw
      );

      const expectedResult = false;

      expect(result).toEqual(expectedResult);
    });
  });
});
