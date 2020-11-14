import * as mongoose from 'mongoose';

export const RULE_SCHEMA = new mongoose.Schema({
  description: String,
  date: Date,
});
