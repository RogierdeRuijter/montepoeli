import * as mongoose from 'mongoose';

export const RuleSchema = new mongoose.Schema({
  description: String,
  date: Date,
});
