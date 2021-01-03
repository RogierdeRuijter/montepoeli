import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type RefreshDocument = RefreshToken & Document;

@Schema()
export class RefreshToken {
  @Prop()
  userId: string;

  @Prop()
  isRevoked: boolean;

  @Prop()
  expires: Date;
}
// eslint-disable-line
export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
