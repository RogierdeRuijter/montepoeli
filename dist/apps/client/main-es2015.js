(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/modules/auth/guards/auth-guard.service */ "./src/app/shared/modules/auth/guards/auth-guard.service.ts");
/* harmony import */ var _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/components/landing/landing.component */ "./src/app/main/components/landing/landing.component.ts");






// TODO: figure out how to use the environment here for the environment routes
const appRoutes = [
    {
        path: '',
        component: _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | main-modules-login-login-module */[__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~23e70d00"), __webpack_require__.e("common"), __webpack_require__.e("main-modules-login-login-module")]).then(__webpack_require__.bind(null, /*! ./main/modules/login/login.module */ "./src/app/main/modules/login/login.module.ts")).then(m => m.LoginModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | main-modules-main-content-main-content-module */[__webpack_require__.e("common"), __webpack_require__.e("main-modules-main-content-main-content-module")]).then(__webpack_require__.bind(null, /*! ./main/modules/main-content/main-content.module */ "./src/app/main/modules/main-content/main-content.module.ts")).then(m => m.MainContentModule),
        canActivate: [_shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/theme/theme.service */ "./src/app/shared/services/theme/theme.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor(overlayContainer, changeDetectorRef, themeService) {
        this.overlayContainer = overlayContainer;
        this.changeDetectorRef = changeDetectorRef;
        this.themeService = themeService;
        this.themeChangingHandler = (e) => {
            var _a;
            const newTheme = this.themeService.getThemeForColorScheme((_a = e) === null || _a === void 0 ? void 0 : _a.matches);
            this.removeActiveThemeFromApplication();
            this.addThemeToWholeApplication(newTheme);
            this.changeDetectorRef.detectChanges();
        };
        this.removeActiveThemeFromApplication = () => {
            const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
            const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item) => item.includes('-theme'));
            if (themeClassesToRemove.length > 0) {
                this.overlayContainer.getContainerElement().classList.remove(...themeClassesToRemove);
            }
        };
        this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    }
    ngOnInit() {
        const theme = this.themeService.getThemeBasedOnSystemPreference();
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
        this.addThemeToWholeApplication(theme);
        this.darkModeMediaQuery.addListener(this.themeChangingHandler);
    }
    addThemeToWholeApplication(theme) {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
    ngOnDestroy() {
        this.darkModeMediaQuery.removeListener(this.themeChangingHandler);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.componentCssClass);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: init_app, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/components/landing/landing.component */ "./src/app/main/components/landing/landing.component.ts");
/* harmony import */ var _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/modules/auth/auth.module */ "./src/app/shared/modules/auth/auth.module.ts");
/* harmony import */ var _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/modules/interceptor/interceptor.module */ "./src/app/shared/modules/interceptor/interceptor.module.ts");
/* harmony import */ var _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/global-error-handler/global-error-handler.service */ "./src/app/shared/services/global-error-handler/global-error-handler.service.ts");
/* harmony import */ var _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/app.init */ "./src/app/shared/services/app.init.ts");
/* harmony import */ var _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/modules/translate/custom-translate.module */ "./src/app/shared/modules/translate/custom-translate.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");


















function init_app(appLoadService) {
    return () => appLoadService.init();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateStore"],
        _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: init_app, deps: [_shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"]], multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"] }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true }),
            _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
            _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
        _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateStore"],
                    _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: init_app, deps: [_shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"]], multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"] }
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true }),
                    _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                    _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/components/landing/landing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/components/landing/landing.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/auth/services/auth/auth.service */ "./src/app/shared/modules/auth/services/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







class LandingComponent {
    constructor(router, activatedRoute, authService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]();
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.HOME], { relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.LOGIN], { relativeTo: this.activatedRoute });
        }
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function LandingComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: ``,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/auth/auth.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/auth/auth.module.ts ***!
  \****************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification/notification.module */ "./src/app/shared/modules/notification/notification.module.ts");




class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modules/auth/guards/auth-guard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/auth/guards/auth-guard.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/shared/modules/auth/services/auth/auth.service.ts");
/* harmony import */ var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification/services/notification/notification.service */ "./src/app/shared/modules/notification/services/notification/notification.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");












class AuthGuard {
    constructor(authService, router, notificationService, translateService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.translateService = translateService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_6__["Environment"]();
    }
    canActivate(next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.translateService.get('warnings.not_authorized.title'),
            this.translateService.get('warnings.not_authorized.body'),
        ]).subscribe(([message, title]) => {
            this.notificationService.warning(message, title);
        });
        this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/auth/services/auth/auth.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modules/auth/services/auth/auth.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/services/custom-http/custom-http.service */ "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");










class AuthService {
    constructor(router, httpService, cookieService) {
        this.router = router;
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_4__["Environment"]();
    }
    isAuthenticated() {
        return this.doesTheUserHaveAValidToken();
    }
    doesTheUserHaveAValidToken() {
        return this.getToken().includes('true');
    }
    getToken() {
        return this.cookieService.get(this.environment.authentication.AUTHTOKENNAME);
    }
    login(user) {
        return this.httpService.post(this.environment.backend.ENTRY_POINTS.SIGNIN, {
            username: user.username,
            password: user.pwd,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME])));
    }
    logout() {
        this.clearSession();
        this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
    }
    clearSession() {
        this.clearHttpCookies();
    }
    clearHttpCookies() {
        this.httpService.post(this.environment.backend.ENTRY_POINTS.SIGNOUT)
            .subscribe();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/http/http.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/http/http.module.ts ***!
  \****************************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpModule {
}
HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpModule });
HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpModule_Factory(t) { return new (t || HttpModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/modules/http/services/custom-http/custom-http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/environment/environment.service */ "./src/app/shared/services/environment/environment.service.ts");







// TODO: move to shared services
class CustomHttpService {
    constructor(httpClient, environmentService) {
        this.httpClient = httpClient;
        this.environmentService = environmentService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response',
        };
    }
    get(url) {
        if (!this.environment) {
            this.initEnvironment();
        }
        return this.httpClient.get(this.baseUrl + url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((httpResponse) => httpResponse.body));
    }
    post(url, body) {
        if (!this.environment) {
            this.initEnvironment();
        }
        return this.httpClient.post(this.baseUrl + url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((httpResponse) => httpResponse.body));
    }
    initEnvironment() {
        this.environment = this.environmentService.get();
        this.baseUrl = this.environment.environment.backendUrl;
    }
}
CustomHttpService.ɵfac = function CustomHttpService_Factory(t) { return new (t || CustomHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"])); };
CustomHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomHttpService, factory: CustomHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/interceptor/interceptor.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/interceptor/interceptor.module.ts ***!
  \******************************************************************/
/*! exports provided: InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts");
/* harmony import */ var _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/invalid-token.interceptor */ "./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class InterceptorModule {
}
InterceptorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterceptorModule });
InterceptorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterceptorModule_Factory(t) { return new (t || InterceptorModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["InvalidTokenInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterceptorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["InvalidTokenInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpErrorInterceptor"], multi: true }
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts ***!
  \***********************************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notification/services/notification/notification.service */ "./src/app/shared/modules/notification/services/notification/notification.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






// TODO: move to shared services
class HttpErrorInterceptor {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            const message = error.error.message ? error.error.message : error.message;
            this.notificationService.warning(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts ***!
  \**************************************************************************************/
/*! exports provided: InvalidTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidTokenInterceptor", function() { return InvalidTokenInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth/auth.service */ "./src/app/shared/modules/auth/services/auth/auth.service.ts");
/* harmony import */ var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notification/services/notification/notification.service */ "./src/app/shared/modules/notification/services/notification/notification.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










class InvalidTokenInterceptor {
    constructor(authService, notificationService, translateService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.translateService = translateService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            if (error.status === 401 && !request.url.includes('signIn')) {
                this.authService.logout();
                this.translateService.get('info.no-valid-session.body')
                    .subscribe((message) => this.notificationService.info(message));
                return;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
InvalidTokenInterceptor.ɵfac = function InvalidTokenInterceptor_Factory(t) { return new (t || InvalidTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
InvalidTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InvalidTokenInterceptor, factory: InvalidTokenInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InvalidTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/notification/notification.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/notification/notification.module.ts ***!
  \********************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modules/notification/services/notification/notification.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/modules/notification/services/notification/notification.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _notification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notification.module */ "./src/app/shared/modules/notification/notification.module.ts");





class NotificationService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    warning(message, title) {
        this.toastrService.warning(message, title);
    }
    info(message, title) {
        this.toastrService.info(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: _notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"],
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/translate/custom-translate.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/translate/custom-translate.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomTranslateModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTranslateModule", function() { return CustomTranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/translate.directive */ "./src/app/shared/modules/translate/directives/translate.directive.ts");
/* harmony import */ var _http_http_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/http.module */ "./src/app/shared/modules/http/http.module.ts");
/* harmony import */ var _services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/language-preference.service */ "./src/app/shared/modules/translate/services/language-preference.service.ts");











class CustomTranslateModule {
    constructor(languagePreferenceService, translate) {
        translate.addLangs(['nl', 'en']);
        const preferedLanguage = languagePreferenceService.get();
        translate.setDefaultLang(preferedLanguage);
        translate.use(preferedLanguage);
    }
}
CustomTranslateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomTranslateModule });
CustomTranslateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomTranslateModule_Factory(t) { return new (t || CustomTranslateModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__["LanguagePreferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                },
                extend: true
            }),
            _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
        ],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomTranslateModule, { declarations: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]], exports: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTranslateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"],
                ],
                exports: [
                    _directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                        },
                        extend: true
                    }),
                    _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
                ]
            }]
    }], function () { return [{ type: _services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__["LanguagePreferenceService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/shared/modules/translate/directives/translate.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/translate/directives/translate.directive.ts ***!
  \****************************************************************************/
/*! exports provided: TranslateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





class TranslateDirective {
    constructor(translateService, elementRef, renderer) {
        this.translateService = translateService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.property = 'innerHTML';
    }
    ngOnInit() {
        this.translateService.get(this.key)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(5)).subscribe((translation) => this.setProperty(translation));
        this.translateService.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.translateService.get(this.key)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(5)))).subscribe((translation) => this.setProperty(translation));
    }
    setProperty(translation) {
        this.renderer.setProperty(this.elementRef.nativeElement, this.property, translation);
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TranslateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "appTranslate", ""]], inputs: { key: ["appTranslate", "key"], property: "property" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTranslate]',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appTranslate']
        }], property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/translate/services/language-preference.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/translate/services/language-preference.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LanguagePreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePreferenceService", function() { return LanguagePreferenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users/user.service */ "./src/app/shared/services/users/user.service.ts");








class LanguagePreferenceService {
    constructor(utilService, translateService, userService) {
        this.utilService = utilService;
        this.translateService = translateService;
        this.userService = userService;
        this.defaultLanguage = 'en';
    }
    get() {
        let preferedLanguage = localStorage.getItem('preferedLanguage');
        if (this.utilService.isNullOrUndefined(preferedLanguage)) {
            preferedLanguage = this.defaultLanguage;
        }
        return preferedLanguage;
    }
    setWithUser(user) {
        const translationFileCode = this.mapLanguageToTranslationFileCode(user.preferedLanguage);
        this.storagePrefereanceInBrowser(translationFileCode);
    }
    storagePrefereanceInBrowser(preference) {
        if (this.utilService.isNullOrUndefined(preference)) {
            localStorage.setItem('preferedLanguage', this.defaultLanguage);
        }
        else {
            localStorage.setItem('preferedLanguage', preference);
        }
    }
    setWithLanguageCode(user, languageCode) {
        if (languageCode === 'en') {
            this.translateService.use('en');
        }
        else if (languageCode === 'nl') {
            this.translateService.use('nl');
        }
        this.storagePrefereanceInBrowser(languageCode);
        this.userService.setUserLanguagePreference(user.name, this.mapTranslationCodeToEnglishLanguageName(languageCode))
            .subscribe();
    }
    mapLanguageToTranslationFileCode(englishPerferedLanguage) {
        if (englishPerferedLanguage === 'dutch') {
            return 'nl';
        }
        if (englishPerferedLanguage === 'english') {
            return 'en';
        }
    }
    mapTranslationCodeToEnglishLanguageName(languageCode) {
        if (languageCode === 'nl') {
            return 'dutch';
        }
        if (languageCode === 'en') {
            return 'english';
        }
    }
}
LanguagePreferenceService.ɵfac = function LanguagePreferenceService_Factory(t) { return new (t || LanguagePreferenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
LanguagePreferenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguagePreferenceService, factory: LanguagePreferenceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagePreferenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/app.init.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/services/app.init.ts ***!
  \*********************************************/
/*! exports provided: AppInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitService", function() { return AppInitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




class AppInitService {
    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    init() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fetch('assets/app-config.json').then((response) => {
            return response.json();
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((config) => {
            window.config = config;
            return;
        })).toPromise();
    }
}
AppInitService.ɵfac = function AppInitService_Factory(t) { return new (t || AppInitService)(); };
AppInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInitService, factory: AppInitService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/environment/environment.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/environment/environment.service.ts ***!
  \********************************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



class EnvironmentService {
    constructor() {
    }
    get() {
        return new _environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"]();
    }
}
EnvironmentService.ɵfac = function EnvironmentService_Factory(t) { return new (t || EnvironmentService)(); };
EnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/global-error-handler/global-error-handler.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/global-error-handler/global-error-handler.service.ts ***!
  \**************************************************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GlobalErrorHandlerService {
    handleError(error) {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            this.reloadWindow();
        }
        else {
            // tslint:disable-next-line
            console.error(error);
        }
    }
    reloadWindow() {
        window.location.reload(true);
    }
}
GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) { return new (t || GlobalErrorHandlerService)(); };
GlobalErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandlerService, factory: GlobalErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/theme/theme.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/theme/theme.service.ts ***!
  \********************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ThemeService {
    getThemeBasedOnSystemPreference() {
        var _a;
        if ((_a = window.matchMedia('(prefers-color-scheme: dark)')) === null || _a === void 0 ? void 0 : _a.matches) {
            return 'black-theme';
        }
        else {
            return 'light-theme';
        }
    }
    getThemeForColorScheme(darkMode) {
        if (darkMode) {
            return 'black-theme';
        }
        else {
            return 'light-theme';
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/users/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/users/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/http/services/custom-http/custom-http.service */ "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





class UserService {
    constructor(customHttpService) {
        this.customHttpService = customHttpService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_2__["Environment"]();
        this.base = this.environment.backend.ENTRY_POINTS.USERS;
    }
    getAll() {
        return this.customHttpService.get(this.environment.backend.ENTRY_POINTS.USERS);
    }
    getCurrentUser() {
        return this.customHttpService.get(this.base + this.environment.backend.ENTRY_POINTS.CURRENT);
    }
    setUserLanguagePreference(username, languagePreference) {
        const body = {
            username,
            languagePreference
        };
        return this.customHttpService.post(this.base + this.environment.backend.ENTRY_POINTS.UPDATE_LANGUAGE_PREFERENCE, body);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/util/util.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/util/util.service.ts ***!
  \******************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilService {
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/dynamic-environment.ts":
/*!*************************************************!*\
  !*** ./src/environments/dynamic-environment.ts ***!
  \*************************************************/
/*! exports provided: DynamicEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicEnvironment", function() { return DynamicEnvironment; });
class DynamicEnvironment {
    get environment() {
        return window.config;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony import */ var _dynamic_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-environment */ "./src/environments/dynamic-environment.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

class Environment extends _dynamic_environment__WEBPACK_IMPORTED_MODULE_0__["DynamicEnvironment"] {
    constructor() {
        super();
        this.production = false;
        // TODO: create interface for environments
        this.authentication = {
            TOKENNAME: 'montepoeliJwt',
            AUTHTOKENNAME: 'montepoeliAuthenticated'
        };
        this.frontend = {
            TITLE: 'Angular Starter kit',
            POLLING_TIMEOUT: 1000,
            PAGE_SIZE: 20,
            BASIC_ROUTES: {
                LANDING: 'landing',
                LOGIN: 'login',
                HOME: 'home',
            },
        };
        this.backend = {
            ENTRY_POINTS: {
                SIGNIN: '/signIn',
                SIGNOUT: '/logout',
                DASHBOARD: '/statistics',
                STATUS: '/status',
                USERS: '/users',
                GAME: '/game',
                RULE: '/rule',
                CREATE: '/create',
                UPDATE_LANGUAGE_PREFERENCE: '/language-preference',
                CURRENT: '/current'
            },
        };
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




const environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"]();
if (environment.production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => {
    throw err;
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rogierderuijter/Projects/montepoeli/apps/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map