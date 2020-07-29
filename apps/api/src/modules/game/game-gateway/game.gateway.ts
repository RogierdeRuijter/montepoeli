import { WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { GameUtilService } from '../game-util/game-util.service';
import * as SocketIo from 'socket.io';

@WebSocketGateway({origin: process.env.CORS_ORIGIN })
export class GameGateway implements OnGatewayConnection {

  constructor(private gameUtilService: GameUtilService) {}

  @WebSocketServer()
  private server: SocketIo.Server;

  public async handleConnection(@ConnectedSocket() socket: SocketIo.Socket) {
    const gameIds = await this.gameUtilService.getAllIdsFromGames();

    socket.emit('games', gameIds);
  }

  public emitGames(gameIds: string[]): void {
    this.server.emit('games', gameIds);
  }
}

