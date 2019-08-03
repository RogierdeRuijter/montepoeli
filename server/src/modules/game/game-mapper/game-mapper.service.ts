import {Model} from 'mongoose';
import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UtilService} from '../../shared/services/util/util.service';
import {User} from '../../../models/interfaces/user.interface';
import {GameDto} from '../../../models/dtos/game.dto';
import {Game} from '../../../models/interfaces/game.interface';
import {Outcomes} from '../../../constants/enums';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';

@Injectable()
export class GameMapperService {

  public constructor(@InjectModel('User') private readonly userModel: Model<User>,
                     private readonly utilService: UtilService) {
  }

  public convertGames(games: Game[]): Promise<GameDto[]> {
    return new Promise((resolve) =>
      this.userModel.find().exec().then((users: User[]) => {
        resolve(this.swapUsersIdsWithNames(games, users));
      }),
    );
  }

  public swapUsersIdsWithNames(games: Game[], users: User[]): GameDto[] {
    return games.map((game: Game) => {
        const userBlack = users.find((user: User) => user.id === game.black);
        const userWhite = users.find((user: User) => user.id === game.white);

        return {
          black: userBlack ? userBlack.name : null,
          white: userWhite ? userWhite.name : null,
          winner: this.getWinnerColor(userBlack, userWhite, game),
        } as GameDto;
      },
    );
  }

  public convertCreateDto(createGameDto: CreateGameDto): Promise<Game> {
    return new Promise((resolve) =>
      this.userModel.find().exec().then((users: User[]) => {
        const blackUser: User = users.find((user: User) => user.name.toLowerCase() === createGameDto.black.toLowerCase());
        const whiteUser: User = users.find((user: User) => user.name.toLowerCase() === createGameDto.white.toLowerCase());

        if (this.utilService.isNullOrUndefined(blackUser) || this.utilService.isNullOrUndefined(whiteUser)) {
          throw new NotFoundException('user not found');
        }

        const winnerName: string = this.getWinnerName(createGameDto);

        let winnerUser: User;
        if (winnerName === blackUser.name) {
          winnerUser = blackUser;
        } else if (winnerName === whiteUser.name) {
          winnerUser = whiteUser;
        } else {
          winnerUser = null;
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

  private getWinnerColor(userBlack: User, userWhite: User, game: Game): string {
    if (game.winner === null) {
      return Outcomes.DRAW;
    }

    if (userWhite && userWhite.id === game.winner) {
      return Outcomes.WHITE;
    }

    if (userBlack && userBlack.id === game.winner) {
      return Outcomes.BLACK;
    }
  }

  private getWinnerName(createGameDto: CreateGameDto): string {
    return createGameDto[createGameDto.winner.toLowerCase()];
  }
}
