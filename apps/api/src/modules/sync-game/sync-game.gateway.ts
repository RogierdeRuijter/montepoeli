import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway()
export class SyncGameGateway implements OnGatewayConnection {

  @WebSocketServer()
  private server;

  public handleConnection(client: Socket, ...args: any[]) {
    // this.server.emit('users', this.users);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
