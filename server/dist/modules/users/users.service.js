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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_mapper_1 = require("./user.mapper");
const user_repository_service_1 = require("./user-repository/user-repository.service");
const util_service_1 = require("../shared/services/util/util.service");
let UsersService = class UsersService {
    constructor(userRepositoryService, userMapper, utilService) {
        this.userRepositoryService = userRepositoryService;
        this.userMapper = userMapper;
        this.utilService = utilService;
    }
    findByUsername(payload) {
        return this.userRepositoryService.findByUsername(payload.username);
    }
    verifyUser(payload) {
        return new Promise((resolve, reject) => this.userRepositoryService.findByUsername(payload.username).then((user) => {
            if (this.utilService.isNullOrUndefined(user)) {
                reject('user not found');
                return;
            }
            bcrypt.compare(payload.password, user.password, (err, res) => {
                if (res === true) {
                    resolve(user);
                }
                else if (res === false) {
                    reject('hash comparison failed');
                }
            });
        }));
    }
    create(createUserDto) {
        return new Promise((resolve) => bcrypt.hash(createUserDto.password, 10, (err, passwordHash) => {
            createUserDto.password = passwordHash;
            resolve(this.userRepositoryService.save(createUserDto));
        }));
    }
    getAllUsers() {
        return new Promise(resolve => {
            this.userRepositoryService.find().then((users) => resolve(this.userMapper.convertUsers(users)));
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_service_1.UserRepositoryService,
        user_mapper_1.UserMapper,
        util_service_1.UtilService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map