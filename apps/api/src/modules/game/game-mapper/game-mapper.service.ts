import {Injectable, NotFoundException} from '@nestjs/common';
import {UtilService} from '../../shared/services/util/util.service';
import {User} from '../../../models/interfaces/user.interface';
import {GameDto} from '../../../models/dtos/game.dto';
import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {UserRepositoryService} from '../../users/user-repository/user-repository.service';

@Injectable()
export class GameMapperService {

  public constructor(private readonly userRepositoryService: UserRepositoryService,
                     private readonly utilService: UtilService) {
  }

  public convertGames(games: Game[]): Promise<GameDto[]> {
    return new Promise((resolve) =>
      this.userRepositoryService.find().then((users: User[]) => {
        resolve(this.swapUsersIdsWithNames(games, users));
      }),
    );
  }

  public swapUsersIdsWithNames(games: Game[], users: User[]): GameDto[] {
    return games.map((game: Game) => {
        const userBlack = users.find((user: User) => user.id === game.black);
        const userWhite = users.find((user: User) => user.id === game.white);

        return {
          id: game.id,
          black: userBlack ? userBlack.name : null,
          white: userWhite ? userWhite.name : null,
          winner: this.getWinnerUser(userBlack, userWhite, game),
        } as GameDto;
      },
    );
  }

  private getWinnerUser(userBlack: User, userWhite: User, game: Game): string {
    if (game.winner === null) {
      return null;
    }

    if (userWhite && userWhite.id === game.winner) {
      return userWhite.name;
    }

    if (userBlack && userBlack.id === game.winner) {
      return userBlack.name;
    }
  }

  public convertCreateDto(createGameDto: CreateGameDto): Promise<Game> {
    // TODO: write unit test
    return new Promise((resolve) =>
      this.userRepositoryService.find().then((users: User[]) => {
        const blackUser: User = users.find((user: User) => user.name.toLowerCase() === createGameDto.black.toLowerCase());
        const whiteUser: User = users.find((user: User) => user.name.toLowerCase() === createGameDto.white.toLowerCase());

        if (this.utilService.isNullOrUndefined(blackUser) || this.utilService.isNullOrUndefined(whiteUser)) {
          throw new NotFoundException('user not found');
        }

        const winner = createGameDto.winner.toLowerCase();

        let winnerUser: User;
        // TODO: create constant
        if (winner === 'draw') {
          winnerUser = null;
        } else {
          winnerUser = users.find((user: User) => user.name.toLowerCase() === winner);
        }

        // @ts-ignore
        resolve({
          black: blackUser.id,
          winner: winnerUser ? winnerUser.id : null,
          white: whiteUser.id,
        });
      }),
    );
  }
}
