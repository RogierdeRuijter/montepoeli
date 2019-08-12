import {Test, TestingModule} from '@nestjs/testing';
import {GameMapperService} from './game-mapper.service';
import {GameFactory} from '../../../factories/game.factory';
import {Game} from '../../../models/interfaces/game.interface';
import {User} from '../../../models/interfaces/user.interface';
import {UserFactory} from '../../../factories/user.factory';
import {getModelToken} from '@nestjs/mongoose';
import {UtilService} from '../../shared/services/util/util.service';
import {GameDto} from '../../../models/dtos/game.dto';
import {GameDtoFactory} from '../../../factories/gameDto.factory';
import {FactoryUtilService} from '../../../factories/factory-util.service';
import {UserRepositoryService} from '../../users/user-repository/user-repository.service';

describe('GameMapperService', () => {
  let service: GameMapperService;

  const factory = () => {
    const find = '';
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {provide: getModelToken('User'), useFactory: factory},
        UtilService,
        GameMapperService,
        UserRepositoryService,
      ],
    }).compile();

    service = module.get<GameMapperService>(GameMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('swapUsersIdsWithNames', () => {
    it('should change the users ids to the names of the users and the winner to the color or undefined for a draw', () => {
      const gameFactory = new GameFactory();
      const userFactory = new UserFactory();
      const gameDtoFactory = new GameDtoFactory();
      const factoryUtilService: FactoryUtilService = new FactoryUtilService();

      const black: User = userFactory.create();
      const white: User = userFactory.create();

      const games: Game[] = gameFactory.createMany(6, black.id, white.id);

      const result = service.swapUsersIdsWithNames(games, [black, white]);

      const output: GameDto[] = [
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[0].winner, black.id)),
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[1].winner, black.id)),
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[2].winner, black.id)),
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[3].winner, black.id)),
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[4].winner, black.id)),
        gameDtoFactory.create(black.name, white.name, factoryUtilService.getWinnerColor(games[5].winner, black.id)),
      ];

      expect(result).toEqual(output);
    });
  });
});
