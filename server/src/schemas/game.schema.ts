import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  black: String,
  white: String,
  winner: String,
});
