import * as mongoose from 'mongoose';

export const USER_SCHEMA = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  preferedLanguage: String,
});
