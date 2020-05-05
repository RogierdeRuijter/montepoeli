function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~d5cf2ccb"], {
  /***/
  "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js":
  /*!******************************************************************************************************************!*\
    !*** /Users/rogierderuijter/Projects/montepoeli/node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
    \******************************************************************************************************************/

  /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ToolbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
      return MatToolbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
      return MatToolbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
      return MatToolbarRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
      return throwToolbarMixedModesError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatToolbar.

    /**
     * \@docs-private
     */


    var _c0 = ["*", [["mat-toolbar-row"]]];
    var _c1 = ["*", "mat-toolbar-row"];

    var MatToolbarBase =
    /**
     * @param {?} _elementRef
     */
    function MatToolbarBase(_elementRef) {
      _classCallCheck(this, MatToolbarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

    var MatToolbarRow = function MatToolbarRow() {
      _classCallCheck(this, MatToolbarRow);
    };

    MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
      return new (t || MatToolbarRow)();
    };

    MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatToolbarRow,
      selectors: [["mat-toolbar-row"]],
      hostAttrs: [1, "mat-toolbar-row"],
      exportAs: ["matToolbarRow"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-toolbar-row',
          exportAs: 'matToolbarRow',
          host: {
            'class': 'mat-toolbar-row'
          }
        }]
      }], null, null);
    })();

    var MatToolbar =
    /*#__PURE__*/
    function (_MatToolbarMixinBase2) {
      _inherits(MatToolbar, _MatToolbarMixinBase2);

      var _super = _createSuper(MatToolbar);

      /**
       * @param {?} elementRef
       * @param {?} _platform
       * @param {?=} document
       */
      function MatToolbar(elementRef, _platform, document) {
        var _this;

        _classCallCheck(this, MatToolbar);

        _this = _super.call(this, elementRef);
        _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

        _this._document = document;
        return _this;
      }
      /**
       * @return {?}
       */


      _createClass(MatToolbar, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || !this._platform.isBrowser) {
            return;
          }

          this._checkToolbarMixedModes();

          this._toolbarRows.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this2._checkToolbarMixedModes();
          });
        }
        /**
         * Throws an exception when developers are attempting to combine the different toolbar row modes.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkToolbarMixedModes",
        value: function _checkToolbarMixedModes() {
          var _this3 = this;

          if (!this._toolbarRows.length) {
            return;
          } // Check if there are any other DOM nodes that can display content but aren't inside of
          // a <mat-toolbar-row> element.

          /** @type {?} */


          var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !(node.classList && node.classList.contains('mat-toolbar-row'));
          }).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
          }).some(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !!(node.textContent && node.textContent.trim());
          });

          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }]);

      return MatToolbar;
    }(_MatToolbarMixinBase);

    MatToolbar.ɵfac = function MatToolbar_Factory(t) {
      return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatToolbar,
      selectors: [["mat-toolbar"]],
      contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
        }
      },
      hostAttrs: [1, "mat-toolbar"],
      hostVars: 4,
      hostBindings: function MatToolbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matToolbar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatToolbar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        }
      },
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatToolbar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatToolbar.propDecorators = {
      _toolbarRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatToolbarRow, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-toolbar',
          exportAs: 'matToolbar',
          template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
          inputs: ['color'],
          host: {
            'class': 'mat-toolbar',
            '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
            '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Throws an exception when attempting to combine the different toolbar row modes.
     * \@docs-private
     * @return {?}
     */


    function throwToolbarMixedModesError() {
      throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatToolbarModule = function MatToolbarModule() {
      _classCallCheck(this, MatToolbarModule);
    };

    MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatToolbarModule
    });
    MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatToolbarModule_Factory(t) {
        return new (t || MatToolbarModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
        declarations: function declarations() {
          return [MatToolbar, MatToolbarRow];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatToolbar, MatToolbarRow]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=toolbar.js.map

    /***/

  },

  /***/
  "./src/app/shared/modules/user-action/components/user-actions/user-actions.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/modules/user-action/components/user-actions/user-actions.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UserActionsComponent */

  /***/
  function srcAppSharedModulesUserActionComponentsUserActionsUserActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserActionsComponent", function () {
      return UserActionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../static-files/enums */
    "./src/app/shared/static-files/enums.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/services/auth/auth.service */
    "./src/app/shared/modules/auth/services/auth/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _translate_services_language_preference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../translate/services/language-preference.service */
    "./src/app/shared/modules/translate/services/language-preference.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_store_user_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../user/store/user-store.service */
    "./src/app/shared/modules/user/store/user-store.service.ts");
    /* harmony import */


    var _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../notification/services/notification/notification.service */
    "./src/app/shared/modules/notification/services/notification/notification.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _button_components_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../button/components/button-icon/button-icon.component */
    "./src/app/shared/modules/button/components/button-icon/button-icon.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../translate/directives/translate.directive */
    "./src/app/shared/modules/translate/directives/translate.directive.ts");

    var _c0 = ["userSettingsDropDown"];

    function UserActionsComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }
    }

    function UserActionsComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }
    }

    var UserActionsComponent =
    /*#__PURE__*/
    function () {
      function UserActionsComponent(authService, translateService, languagePreferenceService, userStoreService, changeDetectorRef, notificationService) {
        _classCallCheck(this, UserActionsComponent);

        this.authService = authService;
        this.translateService = translateService;
        this.languagePreferenceService = languagePreferenceService;
        this.userStoreService = userStoreService;
        this.changeDetectorRef = changeDetectorRef;
        this.notificationService = notificationService;
        this.Icons = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.IconSize = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconSize"];
        this.destory$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(UserActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.setAlternativeLanguage();
          this.userStoreService.get(this.destory$).subscribe(function (user) {
            return _this4.user = user;
          });
          this.translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destory$)).subscribe(function (langObject) {
            var lang = langObject.lang;

            if (lang === 'en') {
              _this4.notificationService.info(_this4.translateService.instant('info.language-changed.english'));
            }

            if (lang === 'nl') {
              _this4.notificationService.info(_this4.translateService.instant('info.language-changed.dutch'));
            }

            _this4.setAlternativeLanguage(lang);
          });
        }
      }, {
        key: "setAlternativeLanguage",
        value: function setAlternativeLanguage(lang) {
          var currentLang = lang ? lang : this.translateService.currentLang;
          this.alternativeLanguage = this.translateService.getLangs().find(function (lang1) {
            return lang1 !== currentLang;
          });

          if (this.alternativeLanguage === 'en') {
            this.setIconLanguage = 'ie';
          }

          if (this.alternativeLanguage === 'nl') {
            this.setIconLanguage = 'nl';
          }

          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "userIconHandler",
        value: function userIconHandler() {
          this.userSettingsDropDown.open();
        }
      }, {
        key: "switchLanguageHandler",
        value: function switchLanguageHandler() {
          var _this5 = this;

          this.waitForDropDownToClose().subscribe(function () {
            return _this5.languagePreferenceService.setWithLanguageCode(_this5.user, _this5.alternativeLanguage);
          });
        }
      }, {
        key: "waitForDropDownToClose",
        value: function waitForDropDownToClose() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(300);
        }
      }, {
        key: "logoutHandler",
        value: function logoutHandler() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destory$.next();
          this.destory$.complete();
        }
      }]);

      return UserActionsComponent;
    }();

    UserActionsComponent.ɵfac = function UserActionsComponent_Factory(t) {
      return new (t || UserActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_services_language_preference_service__WEBPACK_IMPORTED_MODULE_5__["LanguagePreferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_store_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]));
    };

    UserActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserActionsComponent,
      selectors: [["app-user-actions"]],
      viewQuery: function UserActionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userSettingsDropDown = _t.first);
        }
      },
      inputs: {
        settingsIconColor: "settingsIconColor"
      },
      decls: 9,
      vars: 6,
      consts: [["id", "user-settings", 3, "icon", "iconSize", "clickEvent"], [1, "selector"], ["userSettingsDropDown", ""], [3, "id", "click"], [1, "d-flex", "justify-content-center"], ["style", "width: 35px;", "src", "../../../../../../assets/images/ie.svg", 4, "ngIf"], ["style", "width: 35px;", "src", "../../../../../../assets/images/nl.svg", 4, "ngIf"], ["id", "logout", 3, "click"], [3, "appTranslate"], ["src", "../../../../../../assets/images/ie.svg", 2, "width", "35px"], ["src", "../../../../../../assets/images/nl.svg", 2, "width", "35px"]],
      template: function UserActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button-icon", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function UserActionsComponent_Template_app_button_icon_clickEvent_0_listener() {
            return ctx.userIconHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserActionsComponent_Template_mat_option_click_3_listener() {
            return ctx.switchLanguageHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserActionsComponent_img_5_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserActionsComponent_img_6_Template, 1, 0, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserActionsComponent_Template_mat_option_click_7_listener() {
            return ctx.logoutHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.USER)("iconSize", ctx.IconSize.SMALL_MEDIUM);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.alternativeLanguage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setIconLanguage === "ie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setIconLanguage === "nl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTranslate", "user-actions.logout");
        }
      },
      directives: [_button_components_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_10__["ButtonIconComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"]],
      styles: [".selector[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 0;\n}\n\n.nl[_ngcontent-%COMP%] {\n  background: url('nl.svg');\n}\n\n.ie[_ngcontent-%COMP%] {\n  background: url('ie.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3VzZXItYWN0aW9uL2NvbXBvbmVudHMvdXNlci1hY3Rpb25zL3VzZXItYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvc2hhcmVkL21vZHVsZXMvdXNlci1hY3Rpb24vY29tcG9uZW50cy91c2VyLWFjdGlvbnMvdXNlci1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3VzZXItYWN0aW9uL2NvbXBvbmVudHMvdXNlci1hY3Rpb25zL3VzZXItYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RvciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG5cbi5ubCB7ICBcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25sLnN2ZycpO1xufVxuXG4uaWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWUuc3ZnJyk7XG59XG4iLCIuc2VsZWN0b3Ige1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xufVxuXG4ubmwge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25sLnN2Z1wiKTtcbn1cblxuLmllIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pZS5zdmdcIik7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-actions',
          templateUrl: './user-actions.component.html',
          styleUrls: ['./user-actions.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _translate_services_language_preference_service__WEBPACK_IMPORTED_MODULE_5__["LanguagePreferenceService"]
        }, {
          type: _user_store_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _notification_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }];
      }, {
        userSettingsDropDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['userSettingsDropDown']
        }],
        settingsIconColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/user-action/user-action.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/user-action/user-action.module.ts ***!
    \******************************************************************/

  /*! exports provided: UserActionModule */

  /***/
  function srcAppSharedModulesUserActionUserActionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserActionModule", function () {
      return UserActionModule;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../icon/icon.module */
    "./src/app/shared/modules/icon/icon.module.ts");
    /* harmony import */


    var _button_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../button/button.module */
    "./src/app/shared/modules/button/button.module.ts");
    /* harmony import */


    var _components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/user-actions/user-actions.component */
    "./src/app/shared/modules/user-action/components/user-actions/user-actions.component.ts");
    /* harmony import */


    var _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../translate/custom-translate.module */
    "./src/app/shared/modules/translate/custom-translate.module.ts");

    var UserActionModule = function UserActionModule() {
      _classCallCheck(this, UserActionModule);
    };

    UserActionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserActionModule
    });
    UserActionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserActionModule_Factory(t) {
        return new (t || UserActionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_7__["CustomTranslateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserActionModule, {
        declarations: [_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__["UserActionsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_7__["CustomTranslateModule"]],
        exports: [_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__["UserActionsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__["UserActionsComponent"]],
          exports: [_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__["UserActionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _icon_icon_module__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_7__["CustomTranslateModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~d5cf2ccb-es5.js.map