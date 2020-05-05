(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/jwt.strategy.ts":
/*!**************************************!*\
  !*** ./apps/api/src/jwt.strategy.ts ***!
  \**************************************/
/*! exports provided: JwtStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtStrategy", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.service */ "./apps/api/src/modules/auth/auth.service.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let JwtStrategy = class JwtStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["PassportStrategy"])(passport_jwt__WEBPACK_IMPORTED_MODULE_1__["Strategy"]) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1__["ExtractJwt"].fromExtractors([(req) => {
                    let token = null;
                    if (req && req.signedCookies) {
                        token = req.signedCookies.montepoeliJwt;
                    }
                    return token;
                }]),
            secretOrKey: process.env.SERVER_SECRET,
        });
        this.authService = authService;
    }
    validate(payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(payload);
            if (!user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedException"]();
            }
            return user;
        });
    }
};
JwtStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] !== "undefined" && _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]) === "function" ? _a : Object])
], JwtStrategy);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app/app.module */ "./apps/api/src/modules/app/app.module.ts");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);






function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let key;
        let cert;
        try {
            key = fs__WEBPACK_IMPORTED_MODULE_5__["readFileSync"]('./secrets/localhost.key');
            cert = fs__WEBPACK_IMPORTED_MODULE_5__["readFileSync"]('./secrets/localhost.crt');
        }
        catch (_a) {
            // tslint:disable-next-line
            console.info('Cant read key or certificate');
            // tslint:disable-next-line
            console.info('This does not have to be an issue if you handle https another way or http is good enough for now');
        }
        const httpsOptions = {
            key,
            cert,
        };
        let app;
        if (httpsOptions.key && httpsOptions.cert) {
            app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_modules_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], { httpsOptions });
        }
        else {
            app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_modules_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
        }
        checkEnvironmentVariables();
        app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3__(process.env.COOKIE_SECRET));
        app.use(compression__WEBPACK_IMPORTED_MODULE_4__({ threshold: 500 }));
        app.setGlobalPrefix('api');
        let origin = true;
        if (process.env.ENV === 'prod') {
            origin = process.env.CORS_ORIGIN;
        }
        app.enableCors({
            credentials: true,
            origin,
        });
        yield app.listen(3000);
    });
}
const checkEnvironmentVariables = () => {
    const env = process.env.ENV.toString();
    const cookieSecret = process.env.COOKIE_SECRET.toString();
    if (isNullOrUndefined(env)) {
        throwEnvironmentVariableShouldBeDefinedException('ENV');
    }
    // TODO: make this logic better understandable
    if (!(env === 'prod' || env === 'dev')) {
        throw new Error('ENV environment variable should be either: prod or dev');
    }
    if (isNullOrUndefined(cookieSecret)) {
        throwEnvironmentVariableShouldBeDefinedException('COOKIE_SECRET');
    }
};
const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};
const throwEnvironmentVariableShouldBeDefinedException = (name) => {
    throw new Error('environment variable: ' + name + ' should be defined');
};
bootstrap();


/***/ }),

/***/ "./apps/api/src/models/create-dtos/create-game.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/models/create-dtos/create-game.dto.ts ***!
  \************************************************************/
/*! exports provided: CreateGameDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameDto", function() { return CreateGameDto; });
class CreateGameDto {
}


/***/ }),

/***/ "./apps/api/src/models/create-dtos/create-rule.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/models/create-dtos/create-rule.dto.ts ***!
  \************************************************************/
/*! exports provided: CreateRuleDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRuleDto", function() { return CreateRuleDto; });
class CreateRuleDto {
}


/***/ }),

/***/ "./apps/api/src/models/create-dtos/create-user.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/models/create-dtos/create-user.dto.ts ***!
  \************************************************************/
/*! exports provided: CreateUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserDto", function() { return CreateUserDto; });
class CreateUserDto {
}


/***/ }),

/***/ "./apps/api/src/modules/app/app.controller.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/modules/app/app.controller.ts ***!
  \****************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/users.service */ "./apps/api/src/modules/users/users.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./apps/api/src/modules/auth/auth.service.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/create-dtos/create-user.dto */ "./apps/api/src/models/create-dtos/create-user.dto.ts");
var _a, _b, _c, _d, _e, _f, _g, _h;






let AppController = class AppController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
        this.secure = process.env.ENV.toString() === 'prod' ? true : false;
        // private sameSite: string = process.env.ENV.toString() === 'prod' ? 'Strict' : undefined;
        // private signed: boolean = process.env.ENV.toString() === 'prod' ? true : undefined;
        this.domain = process.env.ENV.toString() === 'prod' ? process.env.DOMAIN : undefined;
    }
    signIn(body, res, next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.authService.signIn(body).then(reponse => {
                const date = new Date();
                res.cookie('montepoeliJwt', reponse.jwt, {
                    expires: new Date(date.setFullYear(date.getFullYear() + 1)),
                    httpOnly: true,
                    signed: true,
                    domain: this.domain,
                    secure: this.secure,
                    sameSite: 'strict'
                });
                res.cookie('montepoeliAuthenticated', true, {
                    expires: new Date(date.setFullYear(date.getFullYear() + 1)),
                    signed: true,
                    domain: this.domain,
                    secure: false,
                    sameSite: 'strict'
                });
                res.send();
            });
        });
    }
    logout(res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            res.clearCookie('montepoeliJwt', { domain: this.domain });
            res.clearCookie('montepoeliAuthenticated', { domain: this.domain });
            res.send();
        });
    }
    // TODO: find a remove way to create users
    // @Post('/createUser')
    // @UseGuards(AuthGuard())
    createUser(createUserDto) {
        const username = createUserDto.username;
        const password = createUserDto.password;
        if (!username && !password) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('username and password should be defined');
        }
        return this.usersService.create(createUserDto);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/signIn'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Res"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Next"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_4__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_4__["Response"]) === "function" ? _a : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AppController.prototype, "signIn", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/logout'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Res"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_4__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_4__["Response"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AppController.prototype, "logout", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_5__["CreateUserDto"] !== "undefined" && _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_5__["CreateUserDto"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AppController.prototype, "createUser", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] !== "undefined" && _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]) === "function" ? _g : Object, typeof (_h = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]) === "function" ? _h : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/modules/app/app.module.ts":
/*!************************************************!*\
  !*** ./apps/api/src/modules/app/app.module.ts ***!
  \************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/modules/app/app.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/api/src/modules/auth/auth.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.module */ "./apps/api/src/modules/users/users.module.ts");
/* harmony import */ var _game_game_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/game.module */ "./apps/api/src/modules/game/game.module.ts");
/* harmony import */ var _rule_rule_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rule/rule.module */ "./apps/api/src/modules/rule/rule.module.ts");








const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const mongoDNS = process.env.MONGO_DNS_NAME;
const constructDatabaseUrl = () => {
    let url = 'mongodb://';
    if (username && password) {
        url += username + ':' + password + '@';
    }
    url += mongoDNS + '/admin';
    return url;
};
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forRoot(constructDatabaseUrl()),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"],
            _game_game_module__WEBPACK_IMPORTED_MODULE_6__["GameModule"],
            _rule_rule_module__WEBPACK_IMPORTED_MODULE_7__["RuleModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/modules/auth/auth.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/modules/auth/auth.module.ts ***!
  \**************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./apps/api/src/modules/auth/auth.service.ts");
/* harmony import */ var _jwt_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jwt.strategy */ "./apps/api/src/jwt.strategy.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users/users.service */ "./apps/api/src/modules/users/users.service.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../schemas/user.schema */ "./apps/api/src/schemas/user.schema.ts");
/* harmony import */ var _users_user_mapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users/user.mapper */ "./apps/api/src/modules/users/user.mapper.ts");
/* harmony import */ var _users_user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../users/user-repository/user-repository.service */ "./apps/api/src/modules/users/user-repository/user-repository.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./apps/api/src/modules/shared/shared.module.ts");












let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_5__["PassportModule"].register({
                defaultStrategy: 'jwt',
                session: false
            }),
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["MongooseModule"].forFeature([{ name: 'User', schema: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_8__["UserSchema"] }]),
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtModule"].register({
                secret: process.env.SERVER_SECRET,
                signOptions: {
                    expiresIn: '365 days',
                },
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _jwt_strategy__WEBPACK_IMPORTED_MODULE_4__["JwtStrategy"],
            _users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _users_user_mapper__WEBPACK_IMPORTED_MODULE_9__["UserMapper"],
            _users_user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_10__["UserRepositoryService"]],
        exports: [_nestjs_passport__WEBPACK_IMPORTED_MODULE_5__["PassportModule"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtModule"]],
    })
], AuthModule);



/***/ }),

/***/ "./apps/api/src/modules/auth/auth.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/modules/auth/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ "./apps/api/src/modules/users/users.service.ts");
/* harmony import */ var _users_user_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/user.mapper */ "./apps/api/src/modules/users/user.mapper.ts");
var _a, _b, _c;





let AuthService = class AuthService {
    constructor(usersService, jwtService, userMapper) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.userMapper = userMapper;
    }
    signIn(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => this.usersService.verifyUser(body)
                .then((user) => {
                const jwtPayload = { username: user.username };
                resolve({ jwt: this.jwtService.sign(jwtPayload) });
            }).catch((err) => {
                reject(new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UnauthorizedException"]('Wrong username or password.'));
            }));
        });
    }
    validateUser(payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.usersService.findByUsername(payload);
        });
    }
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] !== "undefined" && _users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtService"]) === "function" ? _b : Object, typeof (_c = typeof _users_user_mapper__WEBPACK_IMPORTED_MODULE_4__["UserMapper"] !== "undefined" && _users_user_mapper__WEBPACK_IMPORTED_MODULE_4__["UserMapper"]) === "function" ? _c : Object])
], AuthService);



/***/ }),

/***/ "./apps/api/src/modules/game/game-mapper/game-mapper.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/modules/game/game-mapper/game-mapper.service.ts ***!
  \**********************************************************************/
/*! exports provided: GameMapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMapperService", function() { return GameMapperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/util/util.service */ "./apps/api/src/modules/shared/services/util/util.service.ts");
/* harmony import */ var _users_user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/user-repository/user-repository.service */ "./apps/api/src/modules/users/user-repository/user-repository.service.ts");
var _a, _b;




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
                id: game.id,
                black: userBlack ? userBlack.name : null,
                white: userWhite ? userWhite.name : null,
                winner: this.getWinnerUser(userBlack, userWhite, game),
            };
        });
    }
    getWinnerUser(userBlack, userWhite, game) {
        if (game.winner === null) {
            return null;
        }
        if (userWhite && userWhite.id === game.winner) {
            return userWhite.name;
        }
        if (userBlack && userBlack.id === game.winner) {
            return userBlack.name;
        }
    }
    convertCreateDto(createGameDto) {
        // TODO: write unit test
        return new Promise((resolve) => this.userRepositoryService.find().then((users) => {
            const blackUser = users.find((user) => user.name.toLowerCase() === createGameDto.black.toLowerCase());
            const whiteUser = users.find((user) => user.name.toLowerCase() === createGameDto.white.toLowerCase());
            if (this.utilService.isNullOrUndefined(blackUser) || this.utilService.isNullOrUndefined(whiteUser)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]('user not found');
            }
            const winner = createGameDto.winner.toLowerCase();
            let winnerUser;
            // TODO: create constant
            if (winner === 'draw') {
                winnerUser = null;
            }
            else {
                winnerUser = users.find((user) => user.name.toLowerCase() === winner);
            }
            // @ts-ignore
            resolve({
                black: blackUser.id,
                winner: winnerUser ? winnerUser.id : null,
                white: whiteUser.id,
            });
        }));
    }
};
GameMapperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _users_user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_3__["UserRepositoryService"] !== "undefined" && _users_user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_3__["UserRepositoryService"]) === "function" ? _a : Object, typeof (_b = typeof _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] !== "undefined" && _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]) === "function" ? _b : Object])
], GameMapperService);



/***/ }),

/***/ "./apps/api/src/modules/game/game-repository/game-repository.service.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/modules/game/game-repository/game-repository.service.ts ***!
  \******************************************************************************/
/*! exports provided: GameRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRepositoryService", function() { return GameRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let GameRepositoryService = class GameRepositoryService {
    constructor(gameModel) {
        this.gameModel = gameModel;
    }
    find() {
        return this.gameModel.find().exec();
    }
    save(game) {
        return new this.gameModel(game).save();
    }
};
GameRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('Game')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], GameRepositoryService);



/***/ }),

/***/ "./apps/api/src/modules/game/game.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/modules/game/game.controller.ts ***!
  \******************************************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameController", function() { return GameController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_service_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service/game.service */ "./apps/api/src/modules/game/game.service/game.service.ts");
/* harmony import */ var _models_create_dtos_create_game_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/create-dtos/create-game.dto */ "./apps/api/src/models/create-dtos/create-game.dto.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__);
var _a, _b, _c, _d;





let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    getAll() {
        return this.gameService.getGames();
    }
    create(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.gameService.create(body);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], GameController.prototype, "getAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/create'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _models_create_dtos_create_game_dto__WEBPACK_IMPORTED_MODULE_3__["CreateGameDto"] !== "undefined" && _models_create_dtos_create_game_dto__WEBPACK_IMPORTED_MODULE_3__["CreateGameDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], GameController.prototype, "create", null);
GameController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('/game'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _game_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] !== "undefined" && _game_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]) === "function" ? _d : Object])
], GameController);



/***/ }),

/***/ "./apps/api/src/modules/game/game.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/modules/game/game.module.ts ***!
  \**************************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_service_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service/game.service */ "./apps/api/src/modules/game/game.service/game.service.ts");
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.controller */ "./apps/api/src/modules/game/game.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/api/src/modules/auth/auth.module.ts");
/* harmony import */ var _schemas_game_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../schemas/game.schema */ "./apps/api/src/schemas/game.schema.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./apps/api/src/modules/shared/shared.module.ts");
/* harmony import */ var _game_mapper_game_mapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-mapper/game-mapper.service */ "./apps/api/src/modules/game/game-mapper/game-mapper.service.ts");
/* harmony import */ var _game_repository_game_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-repository/game-repository.service */ "./apps/api/src/modules/game/game-repository/game-repository.service.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../users/users.module */ "./apps/api/src/modules/users/users.module.ts");











let GameModule = class GameModule {
};
GameModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: 'Game', schema: _schemas_game_schema__WEBPACK_IMPORTED_MODULE_6__["GameSchema"] }]),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_10__["UsersModule"],
        ],
        providers: [_game_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _game_mapper_game_mapper_service__WEBPACK_IMPORTED_MODULE_8__["GameMapperService"], _game_repository_game_repository_service__WEBPACK_IMPORTED_MODULE_9__["GameRepositoryService"]],
        controllers: [_game_controller__WEBPACK_IMPORTED_MODULE_3__["GameController"]],
        exports: [],
    })
], GameModule);



/***/ }),

/***/ "./apps/api/src/modules/game/game.service/game.service.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/game/game.service/game.service.ts ***!
  \****************************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/sort/sort.service */ "./apps/api/src/modules/shared/services/sort/sort.service.ts");
/* harmony import */ var _game_mapper_game_mapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-mapper/game-mapper.service */ "./apps/api/src/modules/game/game-mapper/game-mapper.service.ts");
/* harmony import */ var _game_repository_game_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-repository/game-repository.service */ "./apps/api/src/modules/game/game-repository/game-repository.service.ts");
var _a, _b, _c;





let GameService = class GameService {
    constructor(gameMapper, sortService, gameRepositoryService) {
        this.gameMapper = gameMapper;
        this.sortService = sortService;
        this.gameRepositoryService = gameRepositoryService;
    }
    getGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('not all fields defined');
        }
        return true;
    }
};
GameService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _game_mapper_game_mapper_service__WEBPACK_IMPORTED_MODULE_3__["GameMapperService"] !== "undefined" && _game_mapper_game_mapper_service__WEBPACK_IMPORTED_MODULE_3__["GameMapperService"]) === "function" ? _a : Object, typeof (_b = typeof _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] !== "undefined" && _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"]) === "function" ? _b : Object, typeof (_c = typeof _game_repository_game_repository_service__WEBPACK_IMPORTED_MODULE_4__["GameRepositoryService"] !== "undefined" && _game_repository_game_repository_service__WEBPACK_IMPORTED_MODULE_4__["GameRepositoryService"]) === "function" ? _c : Object])
], GameService);



/***/ }),

/***/ "./apps/api/src/modules/rule/rule-mapper/rule-mapper.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/modules/rule/rule-mapper/rule-mapper.service.ts ***!
  \**********************************************************************/
/*! exports provided: RuleMapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleMapperService", function() { return RuleMapperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let RuleMapperService = class RuleMapperService {
    convert(rule) {
        return {
            description: rule.description
        };
    }
};
RuleMapperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RuleMapperService);



/***/ }),

/***/ "./apps/api/src/modules/rule/rule-repository/rule-repository.service.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/modules/rule/rule-repository/rule-repository.service.ts ***!
  \******************************************************************************/
/*! exports provided: RuleRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleRepositoryService", function() { return RuleRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let RuleRepositoryService = class RuleRepositoryService {
    constructor(ruleModel) {
        this.ruleModel = ruleModel;
    }
    find() {
        return this.ruleModel.find().exec();
    }
    save(rule) {
        return new this.ruleModel(rule).save();
    }
};
RuleRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('Rule')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], RuleRepositoryService);



/***/ }),

/***/ "./apps/api/src/modules/rule/rule-service/rule.service.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/rule/rule-service/rule.service.ts ***!
  \****************************************************************/
/*! exports provided: RuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleService", function() { return RuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rule_repository_rule_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rule-repository/rule-repository.service */ "./apps/api/src/modules/rule/rule-repository/rule-repository.service.ts");
/* harmony import */ var _rule_mapper_rule_mapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rule-mapper/rule-mapper.service */ "./apps/api/src/modules/rule/rule-mapper/rule-mapper.service.ts");
/* harmony import */ var _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/sort/sort.service */ "./apps/api/src/modules/shared/services/sort/sort.service.ts");
var _a, _b, _c;





let RuleService = class RuleService {
    constructor(ruleRepositoryService, ruleMapperService, sortService) {
        this.ruleRepositoryService = ruleRepositoryService;
        this.ruleMapperService = ruleMapperService;
        this.sortService = sortService;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const unSortedRules = yield this.ruleRepositoryService.find();
            const rules = this.sortService.sortByDateDescending(unSortedRules);
            return rules.map((rule) => this.ruleMapperService.convert(rule));
        });
    }
    create(createRuleDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRule = {
                description: createRuleDto.description,
                date: new Date(Date.now())
            };
            const rule = yield this.ruleRepositoryService.save(newRule);
            return this.ruleMapperService.convert(rule);
        });
    }
};
RuleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _rule_repository_rule_repository_service__WEBPACK_IMPORTED_MODULE_2__["RuleRepositoryService"] !== "undefined" && _rule_repository_rule_repository_service__WEBPACK_IMPORTED_MODULE_2__["RuleRepositoryService"]) === "function" ? _a : Object, typeof (_b = typeof _rule_mapper_rule_mapper_service__WEBPACK_IMPORTED_MODULE_3__["RuleMapperService"] !== "undefined" && _rule_mapper_rule_mapper_service__WEBPACK_IMPORTED_MODULE_3__["RuleMapperService"]) === "function" ? _b : Object, typeof (_c = typeof _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_4__["SortService"] !== "undefined" && _shared_services_sort_sort_service__WEBPACK_IMPORTED_MODULE_4__["SortService"]) === "function" ? _c : Object])
], RuleService);



/***/ }),

/***/ "./apps/api/src/modules/rule/rule.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/modules/rule/rule.controller.ts ***!
  \******************************************************/
/*! exports provided: RuleController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleController", function() { return RuleController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rule_service_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-service/rule.service */ "./apps/api/src/modules/rule/rule-service/rule.service.ts");
/* harmony import */ var _models_create_dtos_create_rule_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/create-dtos/create-rule.dto */ "./apps/api/src/models/create-dtos/create-rule.dto.ts");
var _a, _b, _c, _d;




let RuleController = class RuleController {
    constructor(ruleService) {
        this.ruleService = ruleService;
    }
    getAll() {
        return this.ruleService.getAll();
    }
    create(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.ruleService.create(body);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], RuleController.prototype, "getAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/create'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _models_create_dtos_create_rule_dto__WEBPACK_IMPORTED_MODULE_3__["CreateRuleDto"] !== "undefined" && _models_create_dtos_create_rule_dto__WEBPACK_IMPORTED_MODULE_3__["CreateRuleDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], RuleController.prototype, "create", null);
RuleController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('/rule'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _rule_service_rule_service__WEBPACK_IMPORTED_MODULE_2__["RuleService"] !== "undefined" && _rule_service_rule_service__WEBPACK_IMPORTED_MODULE_2__["RuleService"]) === "function" ? _d : Object])
], RuleController);



/***/ }),

/***/ "./apps/api/src/modules/rule/rule.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/modules/rule/rule.module.ts ***!
  \**************************************************/
/*! exports provided: RuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleModule", function() { return RuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rule_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule.controller */ "./apps/api/src/modules/rule/rule.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/api/src/modules/auth/auth.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./apps/api/src/modules/shared/shared.module.ts");
/* harmony import */ var _rule_service_rule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rule-service/rule.service */ "./apps/api/src/modules/rule/rule-service/rule.service.ts");
/* harmony import */ var _schemas_rule_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../schemas/rule.schema */ "./apps/api/src/schemas/rule.schema.ts");
/* harmony import */ var _rule_repository_rule_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rule-repository/rule-repository.service */ "./apps/api/src/modules/rule/rule-repository/rule-repository.service.ts");
/* harmony import */ var _rule_mapper_rule_mapper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rule-mapper/rule-mapper.service */ "./apps/api/src/modules/rule/rule-mapper/rule-mapper.service.ts");










let RuleModule = class RuleModule {
};
RuleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([{ name: 'Rule', schema: _schemas_rule_schema__WEBPACK_IMPORTED_MODULE_7__["RuleSchema"] }]),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        providers: [_rule_service_rule_service__WEBPACK_IMPORTED_MODULE_6__["RuleService"], _rule_repository_rule_repository_service__WEBPACK_IMPORTED_MODULE_8__["RuleRepositoryService"], _rule_mapper_rule_mapper_service__WEBPACK_IMPORTED_MODULE_9__["RuleMapperService"]],
        controllers: [_rule_controller__WEBPACK_IMPORTED_MODULE_2__["RuleController"]],
        exports: [],
    })
], RuleModule);



/***/ }),

/***/ "./apps/api/src/modules/shared/services/sort/sort.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/modules/shared/services/sort/sort.service.ts ***!
  \*******************************************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let SortService = class SortService {
    sortByDateDescending(objects) {
        return objects.sort((n1, n2) => n2.date.getTime() - n1.date.getTime());
    }
    sortByDateAscending(objects) {
        return objects.sort((n1, n2) => n1.date.getTime() - n2.date.getTime());
    }
};
SortService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SortService);



/***/ }),

/***/ "./apps/api/src/modules/shared/services/util/util.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/modules/shared/services/util/util.service.ts ***!
  \*******************************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let UtilService = class UtilService {
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
};
UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UtilService);



/***/ }),

/***/ "./apps/api/src/modules/shared/shared.module.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/modules/shared/shared.module.ts ***!
  \******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/sort/sort.service */ "./apps/api/src/modules/shared/services/sort/sort.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/util/util.service */ "./apps/api/src/modules/shared/services/util/util.service.ts");




let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [],
        providers: [
            _services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        ],
        controllers: [],
        exports: [
            _services_sort_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./apps/api/src/modules/users/user-repository/user-repository.service.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api/src/modules/users/user-repository/user-repository.service.ts ***!
  \*******************************************************************************/
/*! exports provided: UserRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRepositoryService", function() { return UserRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let UserRepositoryService = class UserRepositoryService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    find() {
        return this.userModel.find().exec();
    }
    findByUsername(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield this.userModel.find({ username }).exec();
            if (users.length > 1) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('more than 1 user with the same username');
            }
            return users[0];
        });
    }
    save(user) {
        return new this.userModel(user).save();
    }
    updateLanguagePreferance(username, languagePreferance) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.updateOne({ username }, {
                preferedLanguage: languagePreferance
            });
        });
    }
};
UserRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('User')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], UserRepositoryService);



/***/ }),

/***/ "./apps/api/src/modules/users/user.mapper.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/modules/users/user.mapper.ts ***!
  \***************************************************/
/*! exports provided: UserMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMapper", function() { return UserMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let UserMapper = class UserMapper {
    convertUsers(users) {
        return users.map((user) => this.convert(user));
    }
    convert(user) {
        return {
            name: user.name,
            preferedLanguage: user.preferedLanguage
        };
    }
};
UserMapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserMapper);



/***/ }),

/***/ "./apps/api/src/modules/users/users.controller.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/modules/users/users.controller.ts ***!
  \********************************************************/
/*! exports provided: UsersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersController", function() { return UsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./apps/api/src/modules/users/users.service.ts");
/* harmony import */ var _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/create-dtos/create-user.dto */ "./apps/api/src/models/create-dtos/create-user.dto.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
var _a, _b, _c, _d, _e, _f, _g;






let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
        this.domain = process.env.ENV.toString() === 'prod' ? process.env.DOMAIN : undefined;
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.usersService.getAllUsers();
        });
    }
    // @Post('/create')
    createUser(createUserDto) {
        const username = createUserDto.username;
        const password = createUserDto.password;
        if (!username && !password) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('username and password should be defined');
        }
        return this.usersService.create(createUserDto);
    }
    setLanguagePreference(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const username = body.username;
            const languagePreference = body.languagePreference;
            if (!username || !languagePreference) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('username or languagePreference is not defined');
            }
            if (languagePreference !== 'dutch' && languagePreference !== 'english') {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('language preference should be dutch or english');
            }
            return this.usersService.setLanguagePreference(username, languagePreference);
        });
    }
    getCurrentUser(req) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const jwt = (_b = (_a = req) === null || _a === void 0 ? void 0 : _a.signedCookies) === null || _b === void 0 ? void 0 : _b.montepoeliJwt;
            return this.usersService.getUserWithJwt(jwt);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UsersController.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_3__["CreateUserDto"] !== "undefined" && _models_create_dtos_create_user_dto__WEBPACK_IMPORTED_MODULE_3__["CreateUserDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "createUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/language-preference'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "setLanguagePreference", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/current'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof express__WEBPACK_IMPORTED_MODULE_5__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_5__["Request"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "getCurrentUser", null);
UsersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('/users'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]) === "function" ? _g : Object])
], UsersController);



/***/ }),

/***/ "./apps/api/src/modules/users/users.module.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/modules/users/users.module.ts ***!
  \****************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./apps/api/src/modules/users/users.service.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/user.schema */ "./apps/api/src/schemas/user.schema.ts");
/* harmony import */ var _user_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.mapper */ "./apps/api/src/modules/users/user.mapper.ts");
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.controller */ "./apps/api/src/modules/users/users.controller.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/api/src/modules/auth/auth.module.ts");
/* harmony import */ var _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-repository/user-repository.service */ "./apps/api/src/modules/users/user-repository/user-repository.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./apps/api/src/modules/shared/shared.module.ts");










let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([{ name: 'User', schema: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__["UserSchema"] }]),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_6__["UsersController"]],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _user_mapper__WEBPACK_IMPORTED_MODULE_5__["UserMapper"], _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_8__["UserRepositoryService"]],
        exports: [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_8__["UserRepositoryService"]],
    })
], UsersModule);



/***/ }),

/***/ "./apps/api/src/modules/users/users.service.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/modules/users/users.service.ts ***!
  \*****************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.mapper */ "./apps/api/src/modules/users/user.mapper.ts");
/* harmony import */ var _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-repository/user-repository.service */ "./apps/api/src/modules/users/user-repository/user-repository.service.ts");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/util/util.service */ "./apps/api/src/modules/shared/services/util/util.service.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__);
var _a, _b, _c, _d;







let UsersService = class UsersService {
    constructor(userRepositoryService, userMapper, utilService, jwtService) {
        this.userRepositoryService = userRepositoryService;
        this.userMapper = userMapper;
        this.utilService = utilService;
        this.jwtService = jwtService;
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
            bcrypt__WEBPACK_IMPORTED_MODULE_2__["compare"](payload.password, user.password, (err, res) => {
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
        return new Promise((resolve) => bcrypt__WEBPACK_IMPORTED_MODULE_2__["hash"](createUserDto.password, 10, (err, passwordHash) => {
            createUserDto.password = passwordHash;
            // @ts-ignore
            // FIXME: convert dto
            resolve(this.userRepositoryService.save(createUserDto));
        }));
    }
    getAllUsers() {
        return new Promise(resolve => {
            this.userRepositoryService.find().then((users) => resolve(this.userMapper.convertUsers(users)));
        });
    }
    // TODO: write unit test
    setLanguagePreference(username, languagePreferance) {
        return this.userRepositoryService.updateLanguagePreferance(username, languagePreferance);
    }
    getUserWithJwt(jwt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // @ts-ignore
            const username = this.jwtService.decode(jwt).username;
            const user = yield this.userRepositoryService.findByUsername(username);
            return this.userMapper.convert(user);
        });
    }
};
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_4__["UserRepositoryService"] !== "undefined" && _user_repository_user_repository_service__WEBPACK_IMPORTED_MODULE_4__["UserRepositoryService"]) === "function" ? _a : Object, typeof (_b = typeof _user_mapper__WEBPACK_IMPORTED_MODULE_3__["UserMapper"] !== "undefined" && _user_mapper__WEBPACK_IMPORTED_MODULE_3__["UserMapper"]) === "function" ? _b : Object, typeof (_c = typeof _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] !== "undefined" && _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]) === "function" ? _c : Object, typeof (_d = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtService"]) === "function" ? _d : Object])
], UsersService);



/***/ }),

/***/ "./apps/api/src/schemas/game.schema.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/schemas/game.schema.ts ***!
  \*********************************************/
/*! exports provided: GameSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSchema", function() { return GameSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const GameSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    black: String,
    white: String,
    winner: String,
    date: { type: Date, default: Date.now }
});


/***/ }),

/***/ "./apps/api/src/schemas/rule.schema.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/schemas/rule.schema.ts ***!
  \*********************************************/
/*! exports provided: RuleSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleSchema", function() { return RuleSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const RuleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    description: String,
    date: Date
});


/***/ }),

/***/ "./apps/api/src/schemas/user.schema.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/schemas/user.schema.ts ***!
  \*********************************************/
/*! exports provided: UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    username: String,
    password: String,
    name: String,
    preferedLanguage: String
});


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rogierderuijter/Projects/montepoeli/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map