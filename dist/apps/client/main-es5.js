function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/modules/auth/guards/auth-guard.service */
    "./src/app/shared/modules/auth/guards/auth-guard.service.ts");
    /* harmony import */


    var _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main/components/landing/landing.component */
    "./src/app/main/components/landing/landing.component.ts"); // TODO: figure out how to use the environment here for the environment routes


    var appRoutes = [{
      path: '',
      component: _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | main-modules-login-login-module */
        [__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~23e70d00"), __webpack_require__.e("common"), __webpack_require__.e("main-modules-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./main/modules/login/login.module */
        "./src/app/main/modules/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | main-modules-main-content-main-content-module */
        [__webpack_require__.e("common"), __webpack_require__.e("main-modules-main-content-main-content-module")]).then(__webpack_require__.bind(null,
        /*! ./main/modules/main-content/main-content.module */
        "./src/app/main/modules/main-content/main-content.module.ts")).then(function (m) {
          return m.MainContentModule;
        });
      },
      canActivate: [_shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/theme/theme.service */
    "./src/app/shared/services/theme/theme.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(overlayContainer, changeDetectorRef, themeService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.overlayContainer = overlayContainer;
        this.changeDetectorRef = changeDetectorRef;
        this.themeService = themeService;

        this.themeChangingHandler = function (e) {
          var _a;

          var newTheme = _this.themeService.getThemeForColorScheme((_a = e) === null || _a === void 0 ? void 0 : _a.matches);

          _this.removeActiveThemeFromApplication();

          _this.addThemeToWholeApplication(newTheme);

          _this.changeDetectorRef.detectChanges();
        };

        this.removeActiveThemeFromApplication = function () {
          var overlayContainerClasses = _this.overlayContainer.getContainerElement().classList;

          var themeClassesToRemove = Array.from(overlayContainerClasses).filter(function (item) {
            return item.includes('-theme');
          });

          if (themeClassesToRemove.length > 0) {
            var _this$overlayContaine;

            (_this$overlayContaine = _this.overlayContainer.getContainerElement().classList).remove.apply(_this$overlayContaine, _toConsumableArray(themeClassesToRemove));
          }
        };

        this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var theme = this.themeService.getThemeBasedOnSystemPreference();
          this.overlayContainer.getContainerElement().classList.add(theme);
          this.componentCssClass = theme;
          this.addThemeToWholeApplication(theme);
          this.darkModeMediaQuery.addListener(this.themeChangingHandler);
        }
      }, {
        key: "addThemeToWholeApplication",
        value: function addThemeToWholeApplication(theme) {
          this.overlayContainer.getContainerElement().classList.add(theme);
          this.componentCssClass = theme;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.darkModeMediaQuery.removeListener(this.themeChangingHandler);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.componentCssClass);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: init_app, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "init_app", function () {
      return init_app;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "../../node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/service-worker */
    "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/components/landing/landing.component */
    "./src/app/main/components/landing/landing.component.ts");
    /* harmony import */


    var _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/modules/auth/auth.module */
    "./src/app/shared/modules/auth/auth.module.ts");
    /* harmony import */


    var _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/modules/interceptor/interceptor.module */
    "./src/app/shared/modules/interceptor/interceptor.module.ts");
    /* harmony import */


    var _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/services/global-error-handler/global-error-handler.service */
    "./src/app/shared/services/global-error-handler/global-error-handler.service.ts");
    /* harmony import */


    var _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/services/app.init */
    "./src/app/shared/services/app.init.ts");
    /* harmony import */


    var _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/modules/translate/custom-translate.module */
    "./src/app/shared/modules/translate/custom-translate.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function init_app(appLoadService) {
      return function () {
        return appLoadService.init();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateStore"], _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: init_app,
        deps: [_shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"]],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        useClass: _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"]
      }],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: true
      }), _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"], _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"], _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _main_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]],
          providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateStore"], _shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: init_app,
            deps: [_shared_services_app_init__WEBPACK_IMPORTED_MODULE_13__["AppInitService"]],
            multi: true
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _shared_services_global_error_handler_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"]
          }],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: true
          }), _shared_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"], _shared_modules_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/landing/landing.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main/components/landing/landing.component.ts ***!
    \**************************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppMainComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/modules/auth/services/auth/auth.service */
    "./src/app/shared/modules/auth/services/auth/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent(router, activatedRoute, authService) {
        _classCallCheck(this, LandingComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]();
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.isAuthenticated()) {
            this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.HOME], {
              relativeTo: this.activatedRoute
            });
          } else {
            this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.LOGIN], {
              relativeTo: this.activatedRoute
            });
          }
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["ng-component"]],
      decls: 0,
      vars: 0,
      template: function LandingComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_modules_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/auth/auth.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/modules/auth/auth.module.ts ***!
    \****************************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppSharedModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../notification/notification.module */
    "./src/app/shared/modules/notification/notification.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/auth/guards/auth-guard.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/auth/guards/auth-guard.service.ts ***!
    \******************************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedModulesAuthGuardsAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/shared/modules/auth/services/auth/auth.service.ts");
    /* harmony import */


    var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../notification/services/notification/notification.service */
    "./src/app/shared/modules/notification/services/notification/notification.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router, notificationService, translateService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.translateService = translateService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_6__["Environment"]();
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          if (this.authService.isAuthenticated()) {
            return true;
          }

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.translateService.get('warnings.not_authorized.title'), this.translateService.get('warnings.not_authorized.body')]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                message = _ref2[0],
                title = _ref2[1];

            _this2.notificationService.warning(message, title);
          });
          this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/auth/services/auth/auth.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/modules/auth/services/auth/auth.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedModulesAuthServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../http/services/custom-http/custom-http.service */
    "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "../../node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router, httpService, cookieService) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_4__["Environment"]();
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.doesTheUserHaveAValidToken();
        }
      }, {
        key: "doesTheUserHaveAValidToken",
        value: function doesTheUserHaveAValidToken() {
          return this.getToken().includes('true');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.cookieService.get(this.environment.authentication.AUTHTOKENNAME);
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this3 = this;

          return this.httpService.post(this.environment.backend.ENTRY_POINTS.SIGNIN, {
            username: user.username,
            password: user.pwd
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this3.router.navigate([_this3.environment.frontend.BASIC_ROUTES.HOME]);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.clearSession();
          this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
        }
      }, {
        key: "clearSession",
        value: function clearSession() {
          this.clearHttpCookies();
        }
      }, {
        key: "clearHttpCookies",
        value: function clearHttpCookies() {
          this.httpService.post(this.environment.backend.ENTRY_POINTS.SIGNOUT).subscribe();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
        }, {
          type: _http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/http/http.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/modules/http/http.module.ts ***!
    \****************************************************/

  /*! exports provided: HttpModule */

  /***/
  function srcAppSharedModulesHttpHttpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpModule", function () {
      return HttpModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpModule = function HttpModule() {
      _classCallCheck(this, HttpModule);
    };

    HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HttpModule
    });
    HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HttpModule_Factory(t) {
        return new (t || HttpModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/modules/http/services/custom-http/custom-http.service.ts ***!
    \*********************************************************************************/

  /*! exports provided: CustomHttpService */

  /***/
  function srcAppSharedModulesHttpServicesCustomHttpCustomHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpService", function () {
      return CustomHttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/environment/environment.service */
    "./src/app/shared/services/environment/environment.service.ts"); // TODO: move to shared services


    var CustomHttpService =
    /*#__PURE__*/
    function () {
      function CustomHttpService(httpClient, environmentService) {
        _classCallCheck(this, CustomHttpService);

        this.httpClient = httpClient;
        this.environmentService = environmentService;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }),
          withCredentials: true,
          observe: 'response'
        };
      }

      _createClass(CustomHttpService, [{
        key: "get",
        value: function get(url) {
          if (!this.environment) {
            this.initEnvironment();
          }

          return this.httpClient.get(this.baseUrl + url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (httpResponse) {
            return httpResponse.body;
          }));
        }
      }, {
        key: "post",
        value: function post(url, body) {
          if (!this.environment) {
            this.initEnvironment();
          }

          return this.httpClient.post(this.baseUrl + url, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (httpResponse) {
            return httpResponse.body;
          }));
        }
      }, {
        key: "initEnvironment",
        value: function initEnvironment() {
          this.environment = this.environmentService.get();
          this.baseUrl = this.environment.environment.backendUrl;
        }
      }]);

      return CustomHttpService;
    }();

    CustomHttpService.ɵfac = function CustomHttpService_Factory(t) {
      return new (t || CustomHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]));
    };

    CustomHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomHttpService,
      factory: CustomHttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/interceptor/interceptor.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/interceptor/interceptor.module.ts ***!
    \******************************************************************/

  /*! exports provided: InterceptorModule */

  /***/
  function srcAppSharedModulesInterceptorInterceptorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorModule", function () {
      return InterceptorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interceptors/http-error.interceptor */
    "./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts");
    /* harmony import */


    var _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./interceptors/invalid-token.interceptor */
    "./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var InterceptorModule = function InterceptorModule() {
      _classCallCheck(this, InterceptorModule);
    };

    InterceptorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InterceptorModule
    });
    InterceptorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InterceptorModule_Factory(t) {
        return new (t || InterceptorModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["InvalidTokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpErrorInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterceptorModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_invalid_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["InvalidTokenInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpErrorInterceptor"],
            multi: true
          }],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/modules/interceptor/interceptors/http-error.interceptor.ts ***!
    \***********************************************************************************/

  /*! exports provided: HttpErrorInterceptor */

  /***/
  function srcAppSharedModulesInterceptorInterceptorsHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../notification/services/notification/notification.service */
    "./src/app/shared/modules/notification/services/notification/notification.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // TODO: move to shared services


    var HttpErrorInterceptor =
    /*#__PURE__*/
    function () {
      function HttpErrorInterceptor(notificationService) {
        _classCallCheck(this, HttpErrorInterceptor);

        this.notificationService = notificationService;
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this4 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var message = error.error.message ? error.error.message : error.message;

            _this4.notificationService.warning(message);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();

    HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
      return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]));
    };

    HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: HttpErrorInterceptor,
      factory: HttpErrorInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/modules/interceptor/interceptors/invalid-token.interceptor.ts ***!
    \**************************************************************************************/

  /*! exports provided: InvalidTokenInterceptor */

  /***/
  function srcAppSharedModulesInterceptorInterceptorsInvalidTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvalidTokenInterceptor", function () {
      return InvalidTokenInterceptor;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/services/auth/auth.service */
    "./src/app/shared/modules/auth/services/auth/auth.service.ts");
    /* harmony import */


    var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../notification/services/notification/notification.service */
    "./src/app/shared/modules/notification/services/notification/notification.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var InvalidTokenInterceptor =
    /*#__PURE__*/
    function () {
      function InvalidTokenInterceptor(authService, notificationService, translateService) {
        _classCallCheck(this, InvalidTokenInterceptor);

        this.authService = authService;
        this.notificationService = notificationService;
        this.translateService = translateService;
      }

      _createClass(InvalidTokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this5 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            if (error.status === 401 && !request.url.includes('signIn')) {
              _this5.authService.logout();

              _this5.translateService.get('info.no-valid-session.body').subscribe(function (message) {
                return _this5.notificationService.info(message);
              });

              return;
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
          }));
        }
      }]);

      return InvalidTokenInterceptor;
    }();

    InvalidTokenInterceptor.ɵfac = function InvalidTokenInterceptor_Factory(t) {
      return new (t || InvalidTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    InvalidTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: InvalidTokenInterceptor,
      factory: InvalidTokenInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InvalidTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/notification/notification.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/modules/notification/notification.module.ts ***!
    \********************************************************************/

  /*! exports provided: NotificationModule */

  /***/
  function srcAppSharedModulesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
      return NotificationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var NotificationModule = function NotificationModule() {
      _classCallCheck(this, NotificationModule);
    };

    NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotificationModule
    });
    NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotificationModule_Factory(t) {
        return new (t || NotificationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/notification/services/notification/notification.service.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/modules/notification/services/notification/notification.service.ts ***!
    \*******************************************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppSharedModulesNotificationServicesNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "../../node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _notification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../notification.module */
    "./src/app/shared/modules/notification/notification.module.ts");

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService(toastrService) {
        _classCallCheck(this, NotificationService);

        this.toastrService = toastrService;
      }

      _createClass(NotificationService, [{
        key: "warning",
        value: function warning(message, title) {
          this.toastrService.warning(message, title);
        }
      }, {
        key: "info",
        value: function info(message, title) {
          this.toastrService.info(message, title);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: _notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: _notification_module__WEBPACK_IMPORTED_MODULE_2__["NotificationModule"]
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/translate/custom-translate.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modules/translate/custom-translate.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CustomTranslateModule, HttpLoaderFactory */

  /***/
  function srcAppSharedModulesTranslateCustomTranslateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTranslateModule", function () {
      return CustomTranslateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "../../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directives/translate.directive */
    "./src/app/shared/modules/translate/directives/translate.directive.ts");
    /* harmony import */


    var _http_http_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../http/http.module */
    "./src/app/shared/modules/http/http.module.ts");
    /* harmony import */


    var _services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/language-preference.service */
    "./src/app/shared/modules/translate/services/language-preference.service.ts");

    var CustomTranslateModule = function CustomTranslateModule(languagePreferenceService, translate) {
      _classCallCheck(this, CustomTranslateModule);

      translate.addLangs(['nl', 'en']);
      var preferedLanguage = languagePreferenceService.get();
      translate.setDefaultLang(preferedLanguage);
      translate.use(preferedLanguage);
    };

    CustomTranslateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomTranslateModule
    });
    CustomTranslateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomTranslateModule_Factory(t) {
        return new (t || CustomTranslateModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__["LanguagePreferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        },
        extend: true
      }), _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomTranslateModule, {
        declarations: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]],
        exports: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTranslateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]],
          exports: [_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            },
            extend: true
          }), _http_http_module__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]]
        }]
      }], function () {
        return [{
          type: _services_language_preference_service__WEBPACK_IMPORTED_MODULE_7__["LanguagePreferenceService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/shared/modules/translate/directives/translate.directive.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/modules/translate/directives/translate.directive.ts ***!
    \****************************************************************************/

  /*! exports provided: TranslateDirective */

  /***/
  function srcAppSharedModulesTranslateDirectivesTranslateDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateDirective", function () {
      return TranslateDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var TranslateDirective =
    /*#__PURE__*/
    function () {
      function TranslateDirective(translateService, elementRef, renderer) {
        _classCallCheck(this, TranslateDirective);

        this.translateService = translateService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.property = 'innerHTML';
      }

      _createClass(TranslateDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.translateService.get(this.key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(5)).subscribe(function (translation) {
            return _this6.setProperty(translation);
          });
          this.translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this6.translateService.get(_this6.key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(5));
          })).subscribe(function (translation) {
            return _this6.setProperty(translation);
          });
        }
      }, {
        key: "setProperty",
        value: function setProperty(translation) {
          this.renderer.setProperty(this.elementRef.nativeElement, this.property, translation);
        }
      }]);

      return TranslateDirective;
    }();

    TranslateDirective.ɵfac = function TranslateDirective_Factory(t) {
      return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    TranslateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TranslateDirective,
      selectors: [["", "appTranslate", ""]],
      inputs: {
        key: ["appTranslate", "key"],
        property: "property"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appTranslate]'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['appTranslate']
        }],
        property: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/translate/services/language-preference.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/modules/translate/services/language-preference.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: LanguagePreferenceService */

  /***/
  function srcAppSharedModulesTranslateServicesLanguagePreferenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePreferenceService", function () {
      return LanguagePreferenceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/util/util.service */
    "./src/app/shared/services/util/util.service.ts");
    /* harmony import */


    var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/users/user.service */
    "./src/app/shared/services/users/user.service.ts");

    var LanguagePreferenceService =
    /*#__PURE__*/
    function () {
      function LanguagePreferenceService(utilService, translateService, userService) {
        _classCallCheck(this, LanguagePreferenceService);

        this.utilService = utilService;
        this.translateService = translateService;
        this.userService = userService;
        this.defaultLanguage = 'en';
      }

      _createClass(LanguagePreferenceService, [{
        key: "get",
        value: function get() {
          var preferedLanguage = localStorage.getItem('preferedLanguage');

          if (this.utilService.isNullOrUndefined(preferedLanguage)) {
            preferedLanguage = this.defaultLanguage;
          }

          return preferedLanguage;
        }
      }, {
        key: "setWithUser",
        value: function setWithUser(user) {
          var translationFileCode = this.mapLanguageToTranslationFileCode(user.preferedLanguage);
          this.storagePrefereanceInBrowser(translationFileCode);
        }
      }, {
        key: "storagePrefereanceInBrowser",
        value: function storagePrefereanceInBrowser(preference) {
          if (this.utilService.isNullOrUndefined(preference)) {
            localStorage.setItem('preferedLanguage', this.defaultLanguage);
          } else {
            localStorage.setItem('preferedLanguage', preference);
          }
        }
      }, {
        key: "setWithLanguageCode",
        value: function setWithLanguageCode(user, languageCode) {
          if (languageCode === 'en') {
            this.translateService.use('en');
          } else if (languageCode === 'nl') {
            this.translateService.use('nl');
          }

          this.storagePrefereanceInBrowser(languageCode);
          this.userService.setUserLanguagePreference(user.name, this.mapTranslationCodeToEnglishLanguageName(languageCode)).subscribe();
        }
      }, {
        key: "mapLanguageToTranslationFileCode",
        value: function mapLanguageToTranslationFileCode(englishPerferedLanguage) {
          if (englishPerferedLanguage === 'dutch') {
            return 'nl';
          }

          if (englishPerferedLanguage === 'english') {
            return 'en';
          }
        }
      }, {
        key: "mapTranslationCodeToEnglishLanguageName",
        value: function mapTranslationCodeToEnglishLanguageName(languageCode) {
          if (languageCode === 'nl') {
            return 'dutch';
          }

          if (languageCode === 'en') {
            return 'english';
          }
        }
      }]);

      return LanguagePreferenceService;
    }();

    LanguagePreferenceService.ɵfac = function LanguagePreferenceService_Factory(t) {
      return new (t || LanguagePreferenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    LanguagePreferenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguagePreferenceService,
      factory: LanguagePreferenceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagePreferenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app.init.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/services/app.init.ts ***!
    \*********************************************/

  /*! exports provided: AppInitService */

  /***/
  function srcAppSharedServicesAppInitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitService", function () {
      return AppInitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var AppInitService =
    /*#__PURE__*/
    function () {
      function AppInitService() {
        _classCallCheck(this, AppInitService);
      }

      _createClass(AppInitService, [{
        key: "init",
        // This is the method you want to call at bootstrap
        // Important: It should return a Promise
        value: function init() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fetch('assets/app-config.json').then(function (response) {
            return response.json();
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (config) {
            window.config = config;
            return;
          })).toPromise();
        }
      }]);

      return AppInitService;
    }();

    AppInitService.ɵfac = function AppInitService_Factory(t) {
      return new (t || AppInitService)();
    };

    AppInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppInitService,
      factory: AppInitService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/environment/environment.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/environment/environment.service.ts ***!
    \********************************************************************/

  /*! exports provided: EnvironmentService */

  /***/
  function srcAppSharedServicesEnvironmentEnvironmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
      return EnvironmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var EnvironmentService =
    /*#__PURE__*/
    function () {
      function EnvironmentService() {
        _classCallCheck(this, EnvironmentService);
      }

      _createClass(EnvironmentService, [{
        key: "get",
        value: function get() {
          return new _environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"]();
        }
      }]);

      return EnvironmentService;
    }();

    EnvironmentService.ɵfac = function EnvironmentService_Factory(t) {
      return new (t || EnvironmentService)();
    };

    EnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EnvironmentService,
      factory: EnvironmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/global-error-handler/global-error-handler.service.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/services/global-error-handler/global-error-handler.service.ts ***!
    \**************************************************************************************/

  /*! exports provided: GlobalErrorHandlerService */

  /***/
  function srcAppSharedServicesGlobalErrorHandlerGlobalErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function () {
      return GlobalErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalErrorHandlerService =
    /*#__PURE__*/
    function () {
      function GlobalErrorHandlerService() {
        _classCallCheck(this, GlobalErrorHandlerService);
      }

      _createClass(GlobalErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          var chunkFailedMessage = /Loading chunk [\d]+ failed/;

          if (chunkFailedMessage.test(error.message)) {
            this.reloadWindow();
          } else {
            // tslint:disable-next-line
            console.error(error);
          }
        }
      }, {
        key: "reloadWindow",
        value: function reloadWindow() {
          window.location.reload(true);
        }
      }]);

      return GlobalErrorHandlerService;
    }();

    GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) {
      return new (t || GlobalErrorHandlerService)();
    };

    GlobalErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandlerService,
      factory: GlobalErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/theme/theme.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/theme/theme.service.ts ***!
    \********************************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppSharedServicesThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThemeService =
    /*#__PURE__*/
    function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);
      }

      _createClass(ThemeService, [{
        key: "getThemeBasedOnSystemPreference",
        value: function getThemeBasedOnSystemPreference() {
          var _a;

          if ((_a = window.matchMedia('(prefers-color-scheme: dark)')) === null || _a === void 0 ? void 0 : _a.matches) {
            return 'black-theme';
          } else {
            return 'light-theme';
          }
        }
      }, {
        key: "getThemeForColorScheme",
        value: function getThemeForColorScheme(darkMode) {
          if (darkMode) {
            return 'black-theme';
          } else {
            return 'light-theme';
          }
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/users/user.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/users/user.service.ts ***!
    \*******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUsersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../modules/http/services/custom-http/custom-http.service */
    "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(customHttpService) {
        _classCallCheck(this, UserService);

        this.customHttpService = customHttpService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_2__["Environment"]();
        this.base = this.environment.backend.ENTRY_POINTS.USERS;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.customHttpService.get(this.environment.backend.ENTRY_POINTS.USERS);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.customHttpService.get(this.base + this.environment.backend.ENTRY_POINTS.CURRENT);
        }
      }, {
        key: "setUserLanguagePreference",
        value: function setUserLanguagePreference(username, languagePreference) {
          var body = {
            username: username,
            languagePreference: languagePreference
          };
          return this.customHttpService.post(this.base + this.environment.backend.ENTRY_POINTS.UPDATE_LANGUAGE_PREFERENCE, body);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/util/util.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/util/util.service.ts ***!
    \******************************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppSharedServicesUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilService =
    /*#__PURE__*/
    function () {
      function UtilService() {
        _classCallCheck(this, UtilService);
      }

      _createClass(UtilService, [{
        key: "isNullOrUndefined",
        value: function isNullOrUndefined(value) {
          return value === null || value === undefined;
        }
      }]);

      return UtilService;
    }();

    UtilService.ɵfac = function UtilService_Factory(t) {
      return new (t || UtilService)();
    };

    UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilService,
      factory: UtilService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/dynamic-environment.ts":
  /*!*************************************************!*\
    !*** ./src/environments/dynamic-environment.ts ***!
    \*************************************************/

  /*! exports provided: DynamicEnvironment */

  /***/
  function srcEnvironmentsDynamicEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicEnvironment", function () {
      return DynamicEnvironment;
    });

    var DynamicEnvironment =
    /*#__PURE__*/
    function () {
      function DynamicEnvironment() {
        _classCallCheck(this, DynamicEnvironment);
      }

      _createClass(DynamicEnvironment, [{
        key: "environment",
        get: function get() {
          return window.config;
        }
      }]);

      return DynamicEnvironment;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: Environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Environment", function () {
      return Environment;
    });
    /* harmony import */


    var _dynamic_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dynamic-environment */
    "./src/environments/dynamic-environment.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var Environment =
    /*#__PURE__*/
    function (_dynamic_environment_) {
      _inherits(Environment, _dynamic_environment_);

      var _super = _createSuper(Environment);

      function Environment() {
        var _this7;

        _classCallCheck(this, Environment);

        _this7 = _super.call(this);
        _this7.production = false; // TODO: create interface for environments

        _this7.authentication = {
          TOKENNAME: 'montepoeliJwt',
          AUTHTOKENNAME: 'montepoeliAuthenticated'
        };
        _this7.frontend = {
          TITLE: 'Angular Starter kit',
          POLLING_TIMEOUT: 1000,
          PAGE_SIZE: 20,
          BASIC_ROUTES: {
            LANDING: 'landing',
            LOGIN: 'login',
            HOME: 'home'
          }
        };
        _this7.backend = {
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
          }
        };
        return _this7;
      }

      return Environment;
    }(_dynamic_environment__WEBPACK_IMPORTED_MODULE_0__["DynamicEnvironment"]);
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_1__["Environment"]();

    if (environment.production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      throw err;
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rogierderuijter/Projects/montepoeli/apps/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map