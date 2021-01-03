import { Module } from '@nestjs/common';
import { RefreshToken, RefreshTokenSchema } from './refresh-token.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: RefreshToken.name, schema: RefreshTokenSchema }])],
})
export class RefreshTokenModule {}
