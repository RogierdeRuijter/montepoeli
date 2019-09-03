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
const sort_service_1 = require("../../shared/services/sort/sort.service");
const game_mapper_service_1 = require("../game-mapper/game-mapper.service");
const game_repository_service_1 = require("../game-repository/game-repository.service");
let GameService = class GameService {
    constructor(gameMapper, sortService, gameRepositoryService) {
        this.gameMapper = gameMapper;
        this.sortService = sortService;
        this.gameRepositoryService = gameRepositoryService;
    }
    getGames() {
        return __awaiter(this, void 0, void 0, function* () {
            const unSortedGames = yield this.gameRepositoryService.find();
            const games = this.sortService.sortByDateDescending(unSortedGames);
            return this.gameMapper.convertGames(games);
        });
    }
    create(createGameDto) {
        if (this.validDto(createGameDto)) {
            return this.gameMapper.convertCreateDto(createGameDto)
                .then((game) => this.gameRepositoryService.save(game));
        }
    }
    validDto(createGameDto) {
        if (!createGameDto.black || !createGameDto.white || !createGameDto.winner) {
            throw new common_1.BadRequestException('not all fields defined');
        }
        return true;
    }
};
GameService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [game_mapper_service_1.GameMapperService,
        sort_service_1.SortService,
        game_repository_service_1.GameRepositoryService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map