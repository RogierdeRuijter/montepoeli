import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World 1!';
  }

  findOneByToken(token: string): Promise<any> {
    return new Promise(() => false);
  }

  findOneByEmail(payload): Promise<any> {
    return new Promise(() => false);
  }
}
