import { Test, TestingModule } from '@nestjs/testing';
import { GameUtilService } from './game-util.service';
import { GameRepositoryService } from '../game-repository/game-repository.service';

describe('GameUtilService', () => {
  let service: GameUtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GameUtilService,
        {provide: GameRepositoryService, useValue: ''}
      ],
    }).compile();

    service = module.get<GameUtilService>(GameUtilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllIdsFromGames', () => {
    it('should return the a list of ids from the available games', async () => {
      spyOn(GameUtilService.prototype, 'getAllGames').and.returnValue(new Promise(resolve => {
        resolve([
          {id: '1'},
          {id: '2'},
          {id: '3'},
          {id: '4'},
          {id: '5'}
        ]);
      }));

      const result = await service.getAllIdsFromGames();

      const expectedResult = ['1', '2', '3', '4', '5'];

      expect(result).toEqual(expectedResult);
    });

    it('should return an empty list if there are no games available', async () => {
      spyOn(GameUtilService.prototype, 'getAllGames').and.returnValue(new Promise(resolve => {
        resolve([]);
      }));

      const result = await service.getAllIdsFromGames();

      const expectedResult = [];

      expect(result).toEqual(expectedResult);
    });

    it('should return undefined if null is the input', async () => {
      spyOn(GameUtilService.prototype, 'getAllGames').and.returnValue(null);

      const result = await service.getAllIdsFromGames();

      const expectedResult = undefined;

      expect(result).toEqual(expectedResult);

    });

    it('should return undefined if undefined is the input', async () => {
      spyOn(GameUtilService.prototype, 'getAllGames').and.returnValue(undefined);

      const result = await service.getAllIdsFromGames();

      const expectedResult = undefined;

      expect(result).toEqual(expectedResult);

    });
  });
});
