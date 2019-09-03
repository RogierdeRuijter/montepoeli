"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_util_service_1 = require("./factory-util.service");
class UserFactory {
    constructor() {
        this.factoryUtilService = new factory_util_service_1.FactoryUtilService();
    }
    create(id) {
        return {
            id: id ? id : this.factoryUtilService.id(),
            name: this.factoryUtilService.name(),
            username: this.factoryUtilService.name(),
            password: this.factoryUtilService.passwordHash(),
        };
    }
    createMany(amount) {
        const list = [];
        for (let i = 0; i < amount; i++) {
            list.push(this.create());
        }
        return list;
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.factory.js.map