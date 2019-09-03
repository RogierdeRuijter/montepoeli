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
const util_service_1 = require("../../shared/services/util/util.service");
const enums_1 = require("../../../constants/enums");
const user_repository_service_1 = require("../../users/user-repository/user-repository.service");
let GameMapperService = class GameMapperService {
    constructor(userRepositoryService, utilService) {
        this.userRepositoryService = userRepositoryService;
        this.utilService = utilService;
    }
    convertGames(games) {
        return new Promise((resolve) => this.userRepositoryService.find().then((users) => {
            resolve(this.swapUsersIdsWithNames(games, users));
        }));
    }
    swapUsersIdsWithNames(games, users) {
        return games.map((game) => {
            const userBlack = users.find((user) => user.id === game.black);
            const userWhite = users.find((user) => user.id === game.white);
            return {
                black: userBlack ? userBlack.name : null,
                white: userWhite ? userWhite.name : null,
                winner: this.getWinnerColor(userBlack, userWhite, game),
            };
        });
    }
    convertCreateDto(createGameDto) {
        return new Promise((resolve) => this.userRepositoryService.find().then((users) => {
            const blackUser = users.find((user) => user.name.toLowerCase() === createGameDto.black.toLowerCase());
            const whiteUser = users.find((user) => user.name.toLowerCase() === createGameDto.white.toLowerCase());
            if (this.utilService.isNullOrUndefined(blackUser) || this.utilService.isNullOrUndefined(whiteUser)) {
                throw new common_1.NotFoundException('user not found');
            }
            const winnerName = this.getWinnerName(createGameDto);
            let winnerUser;
            if (winnerName === blackUser.name) {
                winnerUser = blackUser;
            }
            else if (winnerName === whiteUser.name) {
                winnerUser = whiteUser;
            }
            else {
                winnerUser = null;
            }
            resolve({
                black: blackUser.id,
                winner: winnerUser ? winnerUser.id : null,
                white: whiteUser.id,
            });
        }));
    }
    getWinnerColor(userBlack, userWhite, game) {
        if (game.winner === null) {
            return enums_1.Outcomes.DRAW;
        }
        if (userWhite && userWhite.id === game.winner) {
            return enums_1.Outcomes.WHITE;
        }
        if (userBlack && userBlack.id === game.winner) {
            return enums_1.Outcomes.BLACK;
        }
    }
    getWinnerName(createGameDto) {
        return createGameDto[createGameDto.winner.toLowerCase()];
    }
};
GameMapperService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_service_1.UserRepositoryService,
        util_service_1.UtilService])
], GameMapperService);
exports.GameMapperService = GameMapperService;
//# sourceMappingURL=game-mapper.service.js.map