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
        gameDtoFactory.create(games[0].id, black.name, white.name, factoryUtilService.getWinnerName(games[0], black, white)),
        gameDtoFactory.create(games[1].id, black.name, white.name, factoryUtilService.getWinnerName(games[1], black, white)),
        gameDtoFactory.create(games[2].id, black.name, white.name, factoryUtilService.getWinnerName(games[2], black, white)),
        gameDtoFactory.create(games[3].id, black.name, white.name, factoryUtilService.getWinnerName(games[3], black, white)),
        gameDtoFactory.create(games[4].id, black.name, white.name, factoryUtilService.getWinnerName(games[4], black, white)),
        gameDtoFactory.create(games[5].id, black.name, white.name, factoryUtilService.getWinnerName(games[5], black, white)),
      ];

      expect(result).toEqual(output);
    });
  });
});
