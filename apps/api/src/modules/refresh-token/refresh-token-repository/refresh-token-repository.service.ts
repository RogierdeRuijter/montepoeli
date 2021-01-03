import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken } from '../refresh-token.model';
import { Model } from 'mongoose';
import { User } from 'apps/api/src/models/interfaces/user.interface';

@Injectable()
export class RefreshTokenRepositoryService {
  constructor(@InjectModel(RefreshToken.name) private readonly refreshTokenModel: Model<any>) {}

  public async createRefreshToken(user: User, timeToLive: number): Promise<RefreshToken> {
    const token = new RefreshToken();

    token.userId = user.id;
    token.isRevoked = false;

    const expiration = new Date();
    expiration.setTime(expiration.getTime() + timeToLive);

    token.expires = expiration;

    return this.createToken(token);
  }

  public createToken(token: RefreshToken): Promise<RefreshToken> {
    return new this.refreshTokenModel(token).save();
  }
}
