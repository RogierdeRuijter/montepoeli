"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const auth_service_1 = require("../auth/auth.service");
const create_user_dto_1 = require("../../models/create-dtos/create-user.dto");
const passport_1 = require("@nestjs/passport");
let AppController = class AppController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    signIn(body, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.signIn(body).then(jwt => {
                res.cookie('jwt', jwt.jwt);
                res.send({ jwt: jwt.jwt });
            });
        });
    }
    createUser(createUserDto) {
        const username = createUserDto.username;
        const password = createUserDto.password;
        if (!username && !password) {
            throw new common_1.BadRequestException('username and password should be defined');
        }
        return this.usersService.create(createUserDto);
    }
};
__decorate([
    common_1.Post('/signIn'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Next()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "signIn", null);
__decorate([
    common_1.Post('/createUser'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map