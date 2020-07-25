import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { GameUtilService } from '../game-util/game-util.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection {

  constructor(private gameUtilService: GameUtilService) {}

  @WebSocketServer()
  private server;

  public async handleConnection(client: Socket, ...args: any[]) {
    const gameIds = this.gameUtilService.getAllIdsFromGames();
    // this.server
    //   .to(client)
    //   .emit('games', gameIds);
    return gameIds;
  }

  public emitGames(gameIds: string[]): void {
    this.server.emit('games', gameIds);
  }
}

