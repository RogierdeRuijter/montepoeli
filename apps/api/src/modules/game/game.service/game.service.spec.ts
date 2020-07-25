import {Test, TestingModule} from '@nestjs/testing';
import {Game} from '../../../models/interfaces/game.interface';
import {getModelToken} from '@nestjs/mongoose';
import {GameService} from './game.service';
import {GameMapperService} from '../game-mapper/game-mapper.service';
import {SortService} from '../../shared/services/sort/sort.service';
import {UtilService} from '../../shared/services/util/util.service';
import {GameRepositoryService} from '../game-repository/game-repository.service';
import {UserRepositoryService} from '../../users/user-repository/user-repository.service';
import { GameUtilService } from '../game-util/game-util.service';

describe('GameService', () => {
  let service: GameService;

  const factory = () => {
    const find = '';
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {provide: getModelToken('Game'), useFactory: factory},
        {provide: getModelToken('User'), useFactory: factory},
        SortService,
        UtilService,
        GameService,
        GameMapperService,
        GameRepositoryService,
        UserRepositoryService,
        GameUtilService
      ],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => expect(service).toBeDefined());

  describe('getGames', () => {
    it('', async () => {
      spyOn(GameRepositoryService.prototype, 'find').and.returnValue(new Promise((resolve) => {
        resolve(
          [{white: '1', black: '2', winner: '2'}] as Game[]);
      }));

      spyOn(UserRepositoryService.prototype, 'find').and.returnValue(new Promise(resolve => {
        resolve([
          {id: '1', name: 'Rogier'},
          {id: '2', name: 'Isabelle'},
        ]);
      }));

      const result = await service.getGames();

      const output = [{
        winner: 'Isabelle',
        black: 'Isabelle',
        white: 'Rogier',
      }] as Game[];

      expect(result).toEqual(output);
    });
  });
});
