function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mobile-content-mobile-content-component"], {
  /***/
  "./src/app/main/modules/main-content/modules/mobile-content/components/action-bar-footer/action-bar-footer.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/main/modules/main-content/modules/mobile-content/components/action-bar-footer/action-bar-footer.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: ActionBarFooterComponent */

  /***/
  function srcAppMainModulesMainContentModulesMobileContentComponentsActionBarFooterActionBarFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionBarFooterComponent", function () {
      return ActionBarFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../../shared/static-files/enums */
    "./src/app/shared/static-files/enums.ts");
    /* harmony import */


    var _shared_modules_grid_directives_grid_row_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/grid/directives/grid-row.directive */
    "./src/app/shared/modules/grid/directives/grid-row.directive.ts");
    /* harmony import */


    var _shared_modules_grid_directives_grid_column_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/grid/directives/grid-column.directive */
    "./src/app/shared/modules/grid/directives/grid-column.directive.ts");
    /* harmony import */


    var _shared_modules_button_components_button_icon_active_state_button_icon_active_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/button/components/button-icon-active-state/button-icon-active-state.component */
    "./src/app/shared/modules/button/components/button-icon-active-state/button-icon-active-state.component.ts");
    /* harmony import */


    var _shared_modules_transition_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/transition/directives/show-and-hide/show-and-hide.directive */
    "./src/app/shared/modules/transition/directives/show-and-hide/show-and-hide.directive.ts");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var _c1 = function _c1() {
      return [2];
    };

    var _c2 = function _c2() {
      return [3];
    };

    var ActionBarFooterComponent =
    /*#__PURE__*/
    function () {
      function ActionBarFooterComponent() {
        _classCallCheck(this, ActionBarFooterComponent);

        this.chessSetSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.plusSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Icons = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.IconSize = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconSize"];
        this.IconColor = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconColor"];
        this.GridSizes = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["GridSizes"];
        this.Alignments = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Alignments"];
      }

      _createClass(ActionBarFooterComponent, [{
        key: "chessSetClicked",
        value: function chessSetClicked() {
          this.chessSetSelected.emit();
        }
      }, {
        key: "plusClicked",
        value: function plusClicked() {
          this.plusSelected.emit();
        }
      }, {
        key: "scrollClicked",
        value: function scrollClicked() {
          this.scrollSelected.emit();
        }
      }]);

      return ActionBarFooterComponent;
    }();

    ActionBarFooterComponent.ɵfac = function ActionBarFooterComponent_Factory(t) {
      return new (t || ActionBarFooterComponent)();
    };

    ActionBarFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActionBarFooterComponent,
      selectors: [["app-action-bar-footer"]],
      inputs: {
        showPlusIcon: "showPlusIcon",
        selected: "selected",
        raised: "raised"
      },
      outputs: {
        chessSetSelected: "chessSetSelected",
        plusSelected: "plusSelected",
        scrollSelected: "scrollSelected"
      },
      decls: 8,
      vars: 29,
      consts: [[1, "action-bar-footer", "container"], [3, "appGridRow"], [3, "appGridColumn", "offsets", "alignmentCol"], ["id", "games-tab", 3, "icon", "iconSize", "squareButton", "active", "clickEvent"], [3, "appGridColumn", "alignmentCol"], ["id", "add-game-footer", 3, "appShowAndHide", "icon", "iconSize", "squareButton", "active", "clickEvent"], ["id", "rules-tab", 3, "icon", "iconSize", "squareButton", "active", "clickEvent"]],
      template: function ActionBarFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button-icon-active-state", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ActionBarFooterComponent_Template_app_button_icon_active_state_clickEvent_3_listener() {
            return ctx.chessSetClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-button-icon-active-state", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ActionBarFooterComponent_Template_app_button_icon_active_state_clickEvent_5_listener() {
            return ctx.plusClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button-icon-active-state", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ActionBarFooterComponent_Template_app_button_icon_active_state_clickEvent_7_listener() {
            return ctx.scrollClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("raised", ctx.raised);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridRow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.GridSizes.ALL));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1))("offsets", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2))("alignmentCol", ctx.Alignments.CENTER);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.CHESS_PIECES)("iconSize", ctx.IconSize.MEDIUM)("squareButton", true)("active", ctx.selected === ctx.Icons.CHESS_PIECES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1))("alignmentCol", ctx.Alignments.CENTER);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appShowAndHide", ctx.showPlusIcon)("icon", ctx.Icons.PLUS)("iconSize", ctx.IconSize.MEDIUM)("squareButton", true)("active", ctx.selected === ctx.Icons.PLUS);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1))("alignmentCol", ctx.Alignments.CENTER);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.SCROLL)("iconSize", ctx.IconSize.MEDIUM)("squareButton", true)("active", ctx.selected === ctx.Icons.SCROLL);
        }
      },
      directives: [_shared_modules_grid_directives_grid_row_directive__WEBPACK_IMPORTED_MODULE_2__["GridRowDirective"], _shared_modules_grid_directives_grid_column_directive__WEBPACK_IMPORTED_MODULE_3__["GridColumnDirective"], _shared_modules_button_components_button_icon_active_state_button_icon_active_state_component__WEBPACK_IMPORTED_MODULE_4__["ButtonIconActiveStateComponent"], _shared_modules_transition_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAndHideDirective"]],
      styles: [".action-bar-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.raised[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9tb2JpbGUtY29udGVudC9jb21wb25lbnRzL2FjdGlvbi1iYXItZm9vdGVyL2FjdGlvbi1iYXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbW9iaWxlLWNvbnRlbnQvY29tcG9uZW50cy9hY3Rpb24tYmFyLWZvb3Rlci9hY3Rpb24tYmFyLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUYiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbW9iaWxlLWNvbnRlbnQvY29tcG9uZW50cy9hY3Rpb24tYmFyLWZvb3Rlci9hY3Rpb24tYmFyLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tYmFyLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5yYWlzZWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbiIsIi5hY3Rpb24tYmFyLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucmFpc2VkIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-action-bar-footer',
          templateUrl: './action-bar-footer.component.html',
          styleUrls: ['./action-bar-footer.component.scss']
        }]
      }], null, {
        showPlusIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        raised: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chessSetSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        plusSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/modules/main-content/modules/mobile-content/components/simple-title-bar/simple-title-bar.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/main/modules/main-content/modules/mobile-content/components/simple-title-bar/simple-title-bar.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: SimpleTitleBarComponent */

  /***/
  function srcAppMainModulesMainContentModulesMobileContentComponentsSimpleTitleBarSimpleTitleBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleTitleBarComponent", function () {
      return SimpleTitleBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../../shared/static-files/enums */
    "./src/app/shared/static-files/enums.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _shared_modules_button_components_button_no_elevation_button_no_elevation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/button/components/button-no-elevation/button-no-elevation.component */
    "./src/app/shared/modules/button/components/button-no-elevation/button-no-elevation.component.ts");
    /* harmony import */


    var _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/icon/components/icon/icon.component */
    "./src/app/shared/modules/icon/components/icon/icon.component.ts");
    /* harmony import */


    var _shared_modules_user_action_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../shared/modules/user-action/components/user-actions/user-actions.component */
    "./src/app/shared/modules/user-action/components/user-actions/user-actions.component.ts");

    var SimpleTitleBarComponent =
    /*#__PURE__*/
    function () {
      function SimpleTitleBarComponent() {
        _classCallCheck(this, SimpleTitleBarComponent);

        this.iconClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Icons = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.IconSize = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconSize"];
      }

      _createClass(SimpleTitleBarComponent, [{
        key: "handleButtonClicked",
        value: function handleButtonClicked() {
          this.iconClicked.emit();
        }
      }]);

      return SimpleTitleBarComponent;
    }();

    SimpleTitleBarComponent.ɵfac = function SimpleTitleBarComponent_Factory(t) {
      return new (t || SimpleTitleBarComponent)();
    };

    SimpleTitleBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleTitleBarComponent,
      selectors: [["app-simple-title-bar"]],
      outputs: {
        iconClicked: "iconClicked"
      },
      decls: 9,
      vars: 4,
      consts: [[2, "height", "45px", 3, "noPaddingLeft", "clickEvent"], [2, "display", "flex", "align-items", "center"], [2, "height", "45px", "width", "30px"], [3, "icon", "iconSize"], [2, "margin-left", "10px"], [1, "spacer"]],
      template: function SimpleTitleBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button-no-elevation", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function SimpleTitleBarComponent_Template_app_button_no_elevation_clickEvent_1_listener() {
            return ctx.handleButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Montepoeli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-user-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInAnimation", undefined)("noPaddingLeft", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.MONTEPOELI)("iconSize", ctx.IconSize.SMALL);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _shared_modules_button_components_button_no_elevation_button_no_elevation_component__WEBPACK_IMPORTED_MODULE_4__["ButtonNoElevationComponent"], _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _shared_modules_user_action_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_6__["UserActionsComponent"]],
      styles: [".margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9tb2JpbGUtY29udGVudC9jb21wb25lbnRzL3NpbXBsZS10aXRsZS1iYXIvc2ltcGxlLXRpdGxlLWJhci5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvbWFpbi9tb2R1bGVzL21haW4tY29udGVudC9tb2R1bGVzL21vYmlsZS1jb250ZW50L2NvbXBvbmVudHMvc2ltcGxlLXRpdGxlLWJhci9zaW1wbGUtdGl0bGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9tb2JpbGUtY29udGVudC9jb21wb25lbnRzL3NpbXBsZS10aXRsZS1iYXIvc2ltcGxlLXRpdGxlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tcmlnaHQtMTAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH0iLCIubWFyZ2luLXJpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0
        }), {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), {
          optional: true
        })])])]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleTitleBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simple-title-bar',
          templateUrl: './simple-title-bar.component.html',
          styleUrls: ['./simple-title-bar.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }), {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), {
            optional: true
          })])])]
        }]
      }], null, {
        iconClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/modules/main-content/modules/mobile-content/mobile-content.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/main/modules/main-content/modules/mobile-content/mobile-content.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: MobileContentComponent, InternalMobileContentComponent */

  /***/
  function srcAppMainModulesMainContentModulesMobileContentMobileContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileContentComponent", function () {
      return MobileContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InternalMobileContentComponent", function () {
      return InternalMobileContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../shared/static-files/enums */
    "./src/app/shared/static-files/enums.ts");
    /* harmony import */


    var _shared_stores_remove_last_added_game_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/stores/remove-last-added-game.store */
    "./src/app/shared/stores/remove-last-added-game.store.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mobile_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mobile-content.module */
    "./src/app/main/modules/main-content/modules/mobile-content/mobile-content.module.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_modules_async_components_async_base_component_async_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/modules/async/components/async-base-component/async-base.component */
    "./src/app/shared/modules/async/components/async-base-component/async-base.component.ts");
    /* harmony import */


    var _shared_stores_new_game_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/stores/new-game.store */
    "./src/app/shared/stores/new-game.store.ts");
    /* harmony import */


    var _shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../shared/services/tab-change.global-event-emitter */
    "./src/app/shared/services/tab-change.global-event-emitter.ts");
    /* harmony import */


    var _shared_modules_home_modules_game_services_game_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../shared/modules/home/modules/game/services/game.service */
    "./src/app/shared/modules/home/modules/game/services/game.service.ts");
    /* harmony import */


    var _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/simple-title-bar/simple-title-bar.component */
    "./src/app/main/modules/main-content/modules/mobile-content/components/simple-title-bar/simple-title-bar.component.ts");
    /* harmony import */


    var _components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/action-bar-footer/action-bar-footer.component */
    "./src/app/main/modules/main-content/modules/mobile-content/components/action-bar-footer/action-bar-footer.component.ts");

    var _c0 = ["addDialog"];

    var MobileContentComponent =
    /*#__PURE__*/
    function (_shared_modules_async) {
      _inherits(MobileContentComponent, _shared_modules_async);

      var _super = _createSuper(MobileContentComponent);

      function MobileContentComponent(newGameStore, tabChangeGlobalEventEmitter, gameService, removeLastAddedGameStore, dialog, componentFactoryResolver, injector, changeDetectorRef, compiler) {
        var _this;

        _classCallCheck(this, MobileContentComponent);

        _this = _super.call(this);
        _this.newGameStore = newGameStore;
        _this.tabChangeGlobalEventEmitter = tabChangeGlobalEventEmitter;
        _this.gameService = gameService;
        _this.removeLastAddedGameStore = removeLastAddedGameStore;
        _this.dialog = dialog;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compiler = compiler;
        _this.selected = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Icons"].CHESS_PIECES;
        return _this;
      }

      _createClass(MobileContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (window.matchMedia('(display-mode: standalone)').matches && this.isIPhoneXVariant()) {
            this.raisedFooter = true;
          }

          this.tabChangeGlobalEventEmitter.get(this.destroy$).subscribe(function (tab) {
            if (tab === _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Tabs"].GAMES) {
              _this2.gameView = true;
              _this2.selected = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Icons"].CHESS_PIECES;
            }

            if (tab === _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Tabs"].RULES) {
              _this2.gameView = false;
              _this2.selected = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Icons"].SCROLL;
            }

            _this2.closeAddGameModalIfOpen();
          });
        } // TODO: move to service and test the method

      }, {
        key: "isIPhoneXVariant",
        value: function isIPhoneXVariant() {
          var aspect = window.screen.width / window.screen.height;
          return navigator.userAgent.match(/(iPhone)/) && aspect.toFixed(3) === '0.462';
        }
      }, {
        key: "closeAddGameModalIfOpen",
        value: function closeAddGameModalIfOpen() {
          this.dialog.closeAll();
        }
      }, {
        key: "plusEventHandler",
        value: function plusEventHandler() {
          this.selected = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Icons"].PLUS;
          this.createAddGameComponent();
        }
      }, {
        key: "createAddGameComponent",
        value: function createAddGameComponent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var _yield$Promise$all$th, DialogOverviewComponent, _yield$Promise$all$th2, AddGameModule, compFactory, factory, ref;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all(
                    /*! import() | shared-modules-add-game-components-dialog-overview-dialog-overview-component */
                    [__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~9f51e9ea"), __webpack_require__.e("default~shared-modules-add-game-add-game-module~shared-modules-add-game-components-dialog-overview-d~2141ce15")]).then(__webpack_require__.bind(null,
                    /*! ../../../../../shared/modules/add-game/components/dialog-overview/dialog-overview.component */
                    "./src/app/shared/modules/add-game/components/dialog-overview/dialog-overview.component.ts"));

                  case 2:
                    _yield$Promise$all$th = _context.sent;
                    DialogOverviewComponent = _yield$Promise$all$th.DialogOverviewComponent;
                    _context.next = 6;
                    return Promise.all(
                    /*! import() | shared-modules-add-game-add-game-module */
                    [__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~9f51e9ea"), __webpack_require__.e("default~shared-modules-add-game-add-game-module~shared-modules-add-game-components-dialog-overview-d~2141ce15"), __webpack_require__.e("common"), __webpack_require__.e("shared-modules-add-game-add-game-module")]).then(__webpack_require__.bind(null,
                    /*! ../../../../../shared/modules/add-game/add-game.module */
                    "./src/app/shared/modules/add-game/add-game.module.ts"));

                  case 6:
                    _yield$Promise$all$th2 = _context.sent;
                    AddGameModule = _yield$Promise$all$th2.AddGameModule;
                    compFactory = this.componentFactoryResolver.resolveComponentFactory(DialogOverviewComponent);
                    _context.next = 11;
                    return this.compiler.compileModuleAsync(AddGameModule);

                  case 11:
                    factory = _context.sent;
                    ref = factory.create(this.injector);
                    this.addDialogContainerRef = this.addDialogContainer.createComponent(compFactory, null, this.injector, [], ref);
                    this.changeDetectorRef.detectChanges();
                    this.addDialogContainerRef.instance.addEvent.subscribe(function (game) {
                      return _this3.addHandler(game);
                    });
                    this.addDialogContainerRef.instance.cancelEvent.subscribe(function () {
                      return _this3.cancelHandler();
                    });

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "gamesHandler",
        value: function gamesHandler() {
          this.changeToGamesView();
        }
      }, {
        key: "changeToGamesView",
        value: function changeToGamesView() {
          this.tabChangeGlobalEventEmitter.emit(_shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Tabs"].GAMES);
        }
      }, {
        key: "rulesHandler",
        value: function rulesHandler() {
          this.tabChangeGlobalEventEmitter.emit(_shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Tabs"].RULES);
        }
      }, {
        key: "iconClickedHandler",
        value: function iconClickedHandler() {
          this.changeToGamesView();
        }
      }, {
        key: "addHandler",
        value: function addHandler(game) {
          var _this4 = this;

          this.changeToGamesView();
          this.updateViewWithNewGame(game);
          this.gameService.save(game).subscribe(function () {}, function () {
            return _this4.removeAddedGameFromView(game);
          });
          this.unsubsribeFromRunningObservablesOfAddGame();
        }
      }, {
        key: "updateViewWithNewGame",
        value: function updateViewWithNewGame(game) {
          this.newGameStore.set(game);
        }
      }, {
        key: "removeAddedGameFromView",
        value: function removeAddedGameFromView(game) {
          this.removeLastAddedGameStore.set(game);
        }
      }, {
        key: "cancelHandler",
        value: function cancelHandler() {
          this.changeToGamesView();
          this.changeDetectorRef.detectChanges();
          this.unsubsribeFromRunningObservablesOfAddGame();
        }
      }, {
        key: "unsubsribeFromRunningObservablesOfAddGame",
        value: function unsubsribeFromRunningObservablesOfAddGame() {
          this.addDialogContainerRef.instance.addEvent.unsubscribe();
          this.addDialogContainerRef.instance.cancelEvent.unsubscribe();
        }
      }]);

      return MobileContentComponent;
    }(_shared_modules_async_components_async_base_component_async_base_component__WEBPACK_IMPORTED_MODULE_8__["AsyncBaseComponent"]);

    MobileContentComponent.ɵfac = function MobileContentComponent_Factory(t) {
      return new (t || MobileContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_stores_new_game_store__WEBPACK_IMPORTED_MODULE_9__["NewGameStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_10__["TabChangeGlobalEventEmitter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_modules_home_modules_game_services_game_service__WEBPACK_IMPORTED_MODULE_11__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_stores_remove_last_added_game_store__WEBPACK_IMPORTED_MODULE_3__["RemoveLastAddedGameStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]));
    };

    MobileContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MobileContentComponent,
      selectors: [["app-mobile-content"]],
      viewQuery: function MobileContentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addDialogContainer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 3,
      consts: [[3, "iconClicked"], [3, "showPlusIcon", "selected", "raised", "chessSetSelected", "scrollSelected", "plusSelected"], ["addDialog", ""]],
      template: function MobileContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-simple-title-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("iconClicked", function MobileContentComponent_Template_app_simple_title_bar_iconClicked_1_listener() {
            return ctx.iconClickedHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-action-bar-footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chessSetSelected", function MobileContentComponent_Template_app_action_bar_footer_chessSetSelected_3_listener() {
            return ctx.gamesHandler();
          })("scrollSelected", function MobileContentComponent_Template_app_action_bar_footer_scrollSelected_3_listener() {
            return ctx.rulesHandler();
          })("plusSelected", function MobileContentComponent_Template_app_action_bar_footer_plusSelected_3_listener() {
            return ctx.plusEventHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, null, 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPlusIcon", ctx.gameView)("selected", ctx.selected)("raised", ctx.raisedFooter);
        }
      },
      directives: [_components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_12__["SimpleTitleBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_13__["ActionBarFooterComponent"]],
      styles: [".blur[_ngcontent-%COMP%] {\n  filter: blur(3px);\n  -webkit-filter: blur(3px);\n  transition: 0.5s ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9tb2JpbGUtY29udGVudC9tb2JpbGUtY29udGVudC5jb21wb25lbnQuc2NzcyIsImFwcHMvY2xpZW50L3NyYy9hcHAvbWFpbi9tb2R1bGVzL21haW4tY29udGVudC9tb2R1bGVzL21vYmlsZS1jb250ZW50L21vYmlsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbW9iaWxlLWNvbnRlbnQvbW9iaWxlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ciB7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigzcHgpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xufVxuIiwiLmJsdXIge1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MobileContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-mobile-content',
          templateUrl: './mobile-content.component.html',
          styleUrls: ['./mobile-content.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _shared_stores_new_game_store__WEBPACK_IMPORTED_MODULE_9__["NewGameStore"]
        }, {
          type: _shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_10__["TabChangeGlobalEventEmitter"]
        }, {
          type: _shared_modules_home_modules_game_services_game_service__WEBPACK_IMPORTED_MODULE_11__["GameService"]
        }, {
          type: _shared_stores_remove_last_added_game_store__WEBPACK_IMPORTED_MODULE_3__["RemoveLastAddedGameStore"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]
        }];
      }, {
        addDialogContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['addDialog', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /* tslint:disable */


    var InternalMobileContentComponent = function InternalMobileContentComponent() {
      _classCallCheck(this, InternalMobileContentComponent);
    };

    InternalMobileContentComponent.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InternalMobileContentComponent
    });
    InternalMobileContentComponent.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InternalMobileContentComponent_Factory(t) {
        return new (t || InternalMobileContentComponent)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _mobile_content_module__WEBPACK_IMPORTED_MODULE_6__["MobileContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InternalMobileContentComponent, {
        declarations: [MobileContentComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _mobile_content_module__WEBPACK_IMPORTED_MODULE_6__["MobileContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InternalMobileContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MobileContentComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _mobile_content_module__WEBPACK_IMPORTED_MODULE_6__["MobileContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/modules/main-content/modules/mobile-content/mobile-content.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/main/modules/main-content/modules/mobile-content/mobile-content.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MobileContentModule */

  /***/
  function srcAppMainModulesMainContentModulesMobileContentMobileContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileContentModule", function () {
      return MobileContentModule;
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


    var _components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/action-bar-footer/action-bar-footer.component */
    "./src/app/main/modules/main-content/modules/mobile-content/components/action-bar-footer/action-bar-footer.component.ts");
    /* harmony import */


    var _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/simple-title-bar/simple-title-bar.component */
    "./src/app/main/modules/main-content/modules/mobile-content/components/simple-title-bar/simple-title-bar.component.ts");
    /* harmony import */


    var _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/modules/translate/custom-translate.module */
    "./src/app/shared/modules/translate/custom-translate.module.ts");
    /* harmony import */


    var _shared_modules_transition_transition_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/modules/transition/transition.module */
    "./src/app/shared/modules/transition/transition.module.ts");
    /* harmony import */


    var _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/modules/button/button.module */
    "./src/app/shared/modules/button/button.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/modules/icon/icon.module */
    "./src/app/shared/modules/icon/icon.module.ts");
    /* harmony import */


    var _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../shared/modules/grid/grid.module */
    "./src/app/shared/modules/grid/grid.module.ts");
    /* harmony import */


    var _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../shared/modules/user-action/user-action.module */
    "./src/app/shared/modules/user-action/user-action.module.ts");

    var MobileContentModule = function MobileContentModule() {
      _classCallCheck(this, MobileContentModule);
    };

    MobileContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MobileContentModule
    });
    MobileContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MobileContentModule_Factory(t) {
        return new (t || MobileContentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_4__["CustomTranslateModule"], _shared_modules_transition_transition_module__WEBPACK_IMPORTED_MODULE_5__["TransitionModule"], _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MobileContentModule, {
        declarations: [_components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarFooterComponent"], _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTitleBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_4__["CustomTranslateModule"], _shared_modules_transition_transition_module__WEBPACK_IMPORTED_MODULE_5__["TransitionModule"], _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"]],
        exports: [_components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarFooterComponent"], _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTitleBarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarFooterComponent"], _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTitleBarComponent"]],
          exports: [_components_action_bar_footer_action_bar_footer_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarFooterComponent"], _components_simple_title_bar_simple_title_bar_component__WEBPACK_IMPORTED_MODULE_3__["SimpleTitleBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"], _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_4__["CustomTranslateModule"], _shared_modules_transition_transition_module__WEBPACK_IMPORTED_MODULE_5__["TransitionModule"], _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/async/components/async-base-component/async-base.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/modules/async/components/async-base-component/async-base.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AsyncBaseComponent */

  /***/
  function srcAppSharedModulesAsyncComponentsAsyncBaseComponentAsyncBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncBaseComponent", function () {
      return AsyncBaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var AsyncBaseComponent =
    /*#__PURE__*/
    function () {
      function AsyncBaseComponent() {
        _classCallCheck(this, AsyncBaseComponent);

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AsyncBaseComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return AsyncBaseComponent;
    }();

    AsyncBaseComponent.ɵfac = function AsyncBaseComponent_Factory(t) {
      return new (t || AsyncBaseComponent)();
    };

    AsyncBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsyncBaseComponent,
      selectors: [["ng-component"]],
      decls: 0,
      vars: 0,
      template: function AsyncBaseComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/home/modules/game/services/game.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/modules/home/modules/game/services/game.service.ts ***!
    \***************************************************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppSharedModulesHomeModulesGameServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../shared/modules/http/services/custom-http/custom-http.service */
    "./src/app/shared/modules/http/services/custom-http/custom-http.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _static_files_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../static-files/enums */
    "./src/app/shared/static-files/enums.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService(httpService, translateService) {
        _classCallCheck(this, GameService);

        this.httpService = httpService;
        this.translateService = translateService;
        this.environment = new _environments_environment__WEBPACK_IMPORTED_MODULE_2__["Environment"]();
      }

      _createClass(GameService, [{
        key: "getAll",
        value: function getAll() {
          var _this5 = this;

          return this.httpService.get(this.environment.backend.ENTRY_POINTS.GAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (games) {
            return games.map(function (game) {
              return _this5.postProcessGame(game);
            });
          }));
        }
      }, {
        key: "save",
        value: function save(game) {
          return this.httpService.post(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
        }
      }, {
        key: "postProcessGame",
        value: function postProcessGame(game) {
          if (game.winner === null) {
            game.winner = this.translateService.instant('pages.home.games.labels.' + _static_files_enums__WEBPACK_IMPORTED_MODULE_4__["Winners"].DRAW);
          }

          return game;
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_modules_http_services_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/user/store/user-store.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/modules/user/store/user-store.service.ts ***!
    \*****************************************************************/

  /*! exports provided: UserStoreService */

  /***/
  function srcAppSharedModulesUserStoreUserStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStoreService", function () {
      return UserStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users/user.service */
    "./src/app/shared/services/users/user.service.ts");
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/util/util.service */
    "./src/app/shared/services/util/util.service.ts");
    /* harmony import */


    var _services_store_unfiltered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/store-unfiltered */
    "./src/app/shared/services/store-unfiltered.ts");

    var UserStoreService =
    /*#__PURE__*/
    function (_services_store_unfil) {
      _inherits(UserStoreService, _services_store_unfil);

      var _super2 = _createSuper(UserStoreService);

      function UserStoreService(userService, utilService) {
        var _this6;

        _classCallCheck(this, UserStoreService);

        _this6 = _super2.call(this);
        _this6.userService = userService;
        _this6.utilService = utilService;
        return _this6;
      }

      _createClass(UserStoreService, [{
        key: "get",
        value: function get(destory$) {
          var _this7 = this;

          return _get(_getPrototypeOf(UserStoreService.prototype), "get", this).call(this, destory$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
            if (_this7.utilService.isNullOrUndefined(user)) {
              _this7.userService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user1) {
                return _this7.set(user1);
              })).subscribe();
            }
          }));
        }
      }]);

      return UserStoreService;
    }(_services_store_unfiltered__WEBPACK_IMPORTED_MODULE_4__["StoreUnfiltered"]);

    UserStoreService.ɵfac = function UserStoreService_Factory(t) {
      return new (t || UserStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]));
    };

    UserStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserStoreService,
      factory: UserStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/store-unfiltered.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/store-unfiltered.ts ***!
    \*****************************************************/

  /*! exports provided: StoreUnfiltered */

  /***/
  function srcAppSharedServicesStoreUnfilteredTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreUnfiltered", function () {
      return StoreUnfiltered;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var StoreUnfiltered =
    /*#__PURE__*/
    function () {
      function StoreUnfiltered() {
        _classCallCheck(this, StoreUnfiltered);

        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      }

      _createClass(StoreUnfiltered, [{
        key: "get",
        value: function get(destory$) {
          return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destory$));
        }
      }, {
        key: "set",
        value: function set(value) {
          this.store.next(value);
        }
      }]);

      return StoreUnfiltered;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/store.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/services/store.ts ***!
    \******************************************/

  /*! exports provided: Store */

  /***/
  function srcAppSharedServicesStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Store", function () {
      return Store;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var Store =
    /*#__PURE__*/
    function () {
      function Store() {
        _classCallCheck(this, Store);

        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      }

      _createClass(Store, [{
        key: "get",
        value: function get(destory$) {
          return this.store.pipe( // first(),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (value) {
            if (value === null) {
              return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(value);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(destory$) // finalize(() => this.emptyStore())
          );
        }
      }, {
        key: "set",
        value: function set(value) {
          this.store.next(value);
        }
      }]);

      return Store;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/tab-change.global-event-emitter.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/tab-change.global-event-emitter.ts ***!
    \********************************************************************/

  /*! exports provided: TabChangeGlobalEventEmitter */

  /***/
  function srcAppSharedServicesTabChangeGlobalEventEmitterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabChangeGlobalEventEmitter", function () {
      return TabChangeGlobalEventEmitter;
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

    var TabChangeGlobalEventEmitter =
    /*#__PURE__*/
    function () {
      function TabChangeGlobalEventEmitter() {
        _classCallCheck(this, TabChangeGlobalEventEmitter);

        this.store$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(TabChangeGlobalEventEmitter, [{
        key: "emit",
        value: function emit(tab) {
          this.store$.next(tab);
        }
      }, {
        key: "get",
        value: function get(destroy$) {
          return this.store$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy$));
        }
      }, {
        key: "method",
        value: function method() {}
      }]);

      return TabChangeGlobalEventEmitter;
    }();

    TabChangeGlobalEventEmitter.ɵfac = function TabChangeGlobalEventEmitter_Factory(t) {
      return new (t || TabChangeGlobalEventEmitter)();
    };

    TabChangeGlobalEventEmitter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TabChangeGlobalEventEmitter,
      factory: TabChangeGlobalEventEmitter.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabChangeGlobalEventEmitter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/stores/new-game.store.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/stores/new-game.store.ts ***!
    \*************************************************/

  /*! exports provided: NewGameStore */

  /***/
  function srcAppSharedStoresNewGameStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGameStore", function () {
      return NewGameStore;
    });
    /* harmony import */


    var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../services/store */
    "./src/app/shared/services/store.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewGameStore =
    /*#__PURE__*/
    function (_services_store__WEBP) {
      _inherits(NewGameStore, _services_store__WEBP);

      var _super3 = _createSuper(NewGameStore);

      function NewGameStore() {
        _classCallCheck(this, NewGameStore);

        return _super3.apply(this, arguments);
      }

      return NewGameStore;
    }(_services_store__WEBPACK_IMPORTED_MODULE_0__["Store"]);

    NewGameStore.ɵfac = function NewGameStore_Factory(t) {
      return ɵNewGameStore_BaseFactory(t || NewGameStore);
    };

    NewGameStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NewGameStore,
      factory: NewGameStore.ɵfac,
      providedIn: 'root'
    });

    var ɵNewGameStore_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NewGameStore);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewGameStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/stores/remove-last-added-game.store.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/stores/remove-last-added-game.store.ts ***!
    \***************************************************************/

  /*! exports provided: RemoveLastAddedGameStore */

  /***/
  function srcAppSharedStoresRemoveLastAddedGameStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveLastAddedGameStore", function () {
      return RemoveLastAddedGameStore;
    });
    /* harmony import */


    var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../services/store */
    "./src/app/shared/services/store.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RemoveLastAddedGameStore =
    /*#__PURE__*/
    function (_services_store__WEBP2) {
      _inherits(RemoveLastAddedGameStore, _services_store__WEBP2);

      var _super4 = _createSuper(RemoveLastAddedGameStore);

      function RemoveLastAddedGameStore() {
        _classCallCheck(this, RemoveLastAddedGameStore);

        return _super4.apply(this, arguments);
      }

      return RemoveLastAddedGameStore;
    }(_services_store__WEBPACK_IMPORTED_MODULE_0__["Store"]);

    RemoveLastAddedGameStore.ɵfac = function RemoveLastAddedGameStore_Factory(t) {
      return ɵRemoveLastAddedGameStore_BaseFactory(t || RemoveLastAddedGameStore);
    };

    RemoveLastAddedGameStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RemoveLastAddedGameStore,
      factory: RemoveLastAddedGameStore.ɵfac,
      providedIn: 'root'
    });

    var ɵRemoveLastAddedGameStore_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RemoveLastAddedGameStore);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RemoveLastAddedGameStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-mobile-content-mobile-content-component-es5.js.map