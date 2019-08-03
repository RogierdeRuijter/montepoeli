import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {GameService} from './game.service';
import {Game} from '../../models/interfaces/game.interface';
import {CreateGameDto} from '../../models/create-dtos/create-game.dto';
import {AuthGuard} from '@nestjs/passport';
import {GameDto} from '../../models/dtos/game.dto';

@Controller('/game')
export class GameController {
  constructor(private readonly gameService: GameService) {
  }

  @Get()
  @UseGuards(AuthGuard())
  public getAll(): Promise<GameDto[]> {
    return this.gameService.getGames();
  }

  @Post('/create')
  @UseGuards(AuthGuard())
  public async create(@Body() body: CreateGameDto): Promise<Game> {
    return this.gameService.create(body);
  }
}
