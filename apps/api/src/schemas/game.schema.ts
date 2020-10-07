import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema(
  {
    _id: String,
    black: String,
    white: String,
    winner: String,
    date: { type: Date, default: Date.now },
  },
  { _id: false },
);
