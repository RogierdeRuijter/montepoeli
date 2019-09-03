"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.GameSchema = new mongoose.Schema({
    black: String,
    white: String,
    winner: String,
    date: { type: Date, default: Date.now },
});
//# sourceMappingURL=game.schema.js.map