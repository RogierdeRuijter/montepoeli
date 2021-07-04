import { Module } from '@nestjs/common';
import { RefreshToken, RefreshTokenSchema } from './refresh-token.model';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshTokenRepositoryService } from './refresh-token-repository/refresh-token-repository.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: RefreshToken.name, schema: RefreshTokenSchema }])],
  providers: [RefreshTokenRepositoryService],
})
export class RefreshTokenModule {}
