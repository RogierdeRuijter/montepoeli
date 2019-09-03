"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_util_service_1 = require("./factory-util.service");
class GameFactory {
    constructor() {
        this.factoryUtilService = new factory_util_service_1.FactoryUtilService();
    }
    create(blackId, whiteId) {
        const black = blackId ? blackId : this.factoryUtilService.id();
        const white = whiteId ? whiteId : this.factoryUtilService.id();
        return {
            black,
            white,
            winner: this.factoryUtilService.randomWinner(black, white),
            date: this.factoryUtilService.date(),
        };
    }
    createMany(amount, blackId, whiteId) {
        const list = [];
        for (let i = 0; i < amount; i++) {
            list.push(this.create(blackId, whiteId));
        }
        return list;
    }
}
exports.GameFactory = GameFactory;
//# sourceMappingURL=game.factory.js.map