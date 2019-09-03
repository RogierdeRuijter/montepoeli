"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
});
//# sourceMappingURL=user.schema.js.map