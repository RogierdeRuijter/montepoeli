"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_util_service_1 = require("./factory-util.service");
class GameDtoFactory {
    constructor() {
        this.factoryUtilService = new factory_util_service_1.FactoryUtilService();
    }
    create(blackName, whiteName, winner) {
        const black = blackName ? blackName : this.factoryUtilService.name();
        const white = whiteName ? whiteName : this.factoryUtilService.name();
        return { black, white, winner };
    }
    createMany(amount, blackId, whiteId) {
        throw new Error('not defined');
    }
}
exports.GameDtoFactory = GameDtoFactory;
//# sourceMappingURL=gameDto.factory.js.map