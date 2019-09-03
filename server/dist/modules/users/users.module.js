"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../schemas/user.schema");
const user_mapper_1 = require("./user.mapper");
const users_controller_1 = require("./users.controller");
const auth_module_1 = require("../auth/auth.module");
const user_repository_service_1 = require("./user-repository/user-repository.service");
const shared_module_1 = require("../shared/shared.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }]),
            auth_module_1.AuthModule,
            shared_module_1.SharedModule,
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, user_mapper_1.UserMapper, user_repository_service_1.UserRepositoryService],
        exports: [users_service_1.UsersService, user_repository_service_1.UserRepositoryService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map