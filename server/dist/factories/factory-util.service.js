"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
class FactoryUtilService {
    id() {
        return faker.random.uuid();
    }
    name() {
        return faker.name.firstName();
    }
    passwordHash() {
        return faker.random.alphaNumeric();
    }
    date() {
        return new Date();
    }
    randomWinner(blackId, whiteId) {
        const num = faker.random.number() % 3;
        if (num === 0) {
            return blackId;
        }
        if (num === 1) {
            return whiteId;
        }
        return undefined;
    }
    getWinnerColor(winnerId, blackId) {
        if (!winnerId) {
            return undefined;
        }
        if (winnerId === blackId) {
            return 'black';
        }
        else {
            return 'white';
        }
    }
}
exports.FactoryUtilService = FactoryUtilService;
//# sourceMappingURL=factory-util.service.js.map