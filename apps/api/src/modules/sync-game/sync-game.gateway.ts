import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { GameService } from '../game/game.service/game.service';

@WebSocketGateway()
export class SyncGameGateway implements OnGatewayConnection {

  constructor(private gameService: GameService) {}

  @WebSocketServer()
  private server;

  public async handleConnection(client: Socket, ...args: any[]) {
    const gameIds: string[] = await this.gameService.getAllIdsFromGames();
    // TODO: emit all the game ids to the frontend
    // this.server.emit('gameIds', gameIds);
    // console.log('in on gateway connection');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    // console.log('in hello message');
    return 'Hello world!';
  }
}
