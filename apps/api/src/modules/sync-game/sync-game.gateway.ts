import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway()
export class SyncGameGateway implements OnGatewayConnection {

  @WebSocketServer()
  private server;

  public async handleConnection(client: Socket, ...args: any[]) {
    // TODO: emit all the game ids to the frontend with the games socket
    //  Need to trigger the gameService here in some way.
    //  Maybe this gateway should just move to the game module
    console.log('in on gateway connection');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    // console.log('in hello message');
    return 'Hello world!';
  }

  public emitGames(gameIds: string[]): void {
    this.server.emit('games', gameIds);
  }
}
