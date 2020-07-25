import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { GameService } from '../game.service/game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection {

  constructor(private gameService: GameService) {}

  @WebSocketServer()
  private server;

  public async handleConnection(client: Socket, ...args: any[]) {
    // TODO: emit all the game ids to the frontend with the games socket
    //  Need to trigger the gameService here in some way.
    //  Maybe this gateway should just move to the game module
    const gameIds = this.gameService.getAllIdsFromGames();
    // this.server
    //   .to(client)
    //   .emit('games', gameIds);
    return gameIds;
  }

  public emitGames(gameIds: string[]): void {
    this.server.emit('games', gameIds);
  }
}

