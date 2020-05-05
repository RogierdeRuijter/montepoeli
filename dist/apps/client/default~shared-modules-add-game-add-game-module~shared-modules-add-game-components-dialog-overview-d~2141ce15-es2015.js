(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shared-modules-add-game-add-game-module~shared-modules-add-game-components-dialog-overview-d~2141ce15"],{

/***/ "./src/app/shared/modules/add-game/components/dialog-data/dialog-data.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/modules/add-game/components/dialog-data/dialog-data.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DialogDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataComponent", function() { return DialogDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _static_files_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _services_dialog_data_dialog_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialog-data/dialog-data.service */ "./src/app/shared/modules/add-game/services/dialog-data/dialog-data.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _async_components_async_base_component_async_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../async/components/async-base-component/async-base.component */ "./src/app/shared/modules/async/components/async-base-component/async-base.component.ts");
/* harmony import */ var _home_modules_game_stores_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../home/modules/game/stores/user.store */ "./src/app/shared/modules/home/modules/game/stores/user.store.ts");
/* harmony import */ var _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-result/game-result.component */ "./src/app/shared/modules/add-game/components/dialog-data/game-result/game-result.component.ts");













class DialogDataComponent extends _async_components_async_base_component_async_base_component__WEBPACK_IMPORTED_MODULE_5__["AsyncBaseComponent"] {
    constructor(dialogRef, data, userStore, dialogDataService, translateService) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.userStore = userStore;
        this.dialogDataService = dialogDataService;
        this.translateService = translateService;
        this.winners = [_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Winners"].WHITE, _static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Winners"].BLACK, _static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Winners"].DRAW];
        this.Sides = _static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Sides"];
        this.winnerOptions = [];
    }
    ngOnInit() {
        this.userStore
            .get(this.destroy$)
            .subscribe((users) => this.users = users);
    }
    cancelEventHandler() {
        this.dialogRef.close('cancelButton');
    }
    determineAvailableUsersForSelect(selectName) {
        return this.dialogDataService.determineAvailableUsersForSelect(this.users, this.data, selectName);
    }
    ifAllFieldsAreNotField() {
        return !this.dialogDataService.allFieldsAreDefined(this.data);
    }
    usersAreNotDefined() {
        return !this.dialogDataService.userAreDefined(this.data);
    }
    fieldUpdateHandler(game) {
        var _a, _b;
        this.winnerOptions = [];
        this.winnerOptions.push((_a = game) === null || _a === void 0 ? void 0 : _a.black);
        this.winnerOptions.push((_b = game) === null || _b === void 0 ? void 0 : _b.white);
        this.winnerOptions.push(this.translateService.instant('pages.home.games.labels.' + _static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Winners"].DRAW));
    }
}
DialogDataComponent.ɵfac = function DialogDataComponent_Factory(t) { return new (t || DialogDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_modules_game_stores_user_store__WEBPACK_IMPORTED_MODULE_6__["UsersStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_data_dialog_data_service__WEBPACK_IMPORTED_MODULE_3__["DialogDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
DialogDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDataComponent, selectors: [["app-dialog-data"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 7, consts: [[3, "data", "disabled", "winnerFieldHidden", "usersBlack", "usersWhite", "winnerOptions", "winners", "cancelEvent", "fieldUpdateEvent"]], template: function DialogDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ui-game-result", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelEvent", function DialogDataComponent_Template_ui_game_result_cancelEvent_0_listener() { return ctx.cancelEventHandler(); })("fieldUpdateEvent", function DialogDataComponent_Template_ui_game_result_fieldUpdateEvent_0_listener($event) { return ctx.fieldUpdateHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("disabled", ctx.ifAllFieldsAreNotField())("winnerFieldHidden", ctx.usersAreNotDefined())("usersBlack", ctx.determineAvailableUsersForSelect(ctx.Sides.BLACK))("usersWhite", ctx.determineAvailableUsersForSelect(ctx.Sides.WHITE))("winnerOptions", ctx.winnerOptions)("winners", ctx.winners);
    } }, directives: [_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_7__["GameResultComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-data',
                templateUrl: './dialog-data.component.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _home_modules_game_stores_user_store__WEBPACK_IMPORTED_MODULE_6__["UsersStore"] }, { type: _services_dialog_data_dialog_data_service__WEBPACK_IMPORTED_MODULE_3__["DialogDataService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/add-game/components/dialog-data/game-result/game-result.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/modules/add-game/components/dialog-data/game-result/game-result.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GameResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResultComponent", function() { return GameResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../translate/directives/translate.directive */ "./src/app/shared/modules/translate/directives/translate.directive.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _form_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../form/components/drop-down/drop-down.component */ "./src/app/shared/modules/form/components/drop-down/drop-down.component.ts");
/* harmony import */ var _grid_directives_grid_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../grid/directives/grid-row.directive */ "./src/app/shared/modules/grid/directives/grid-row.directive.ts");
/* harmony import */ var _button_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../button/components/button/button.component */ "./src/app/shared/modules/button/components/button/button.component.ts");
/* harmony import */ var _grid_directives_grid_column_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../grid/directives/grid-column.directive */ "./src/app/shared/modules/grid/directives/grid-column.directive.ts");













const _c0 = ["form"];
const _c1 = ["whiteSelect"];
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return [6]; };
class GameResultComponent {
    constructor() {
        this.fieldUpdateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ButtonType = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["ButtonType"];
        this.ButtonFunction = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["ButtonFunction"];
        this.GridSizes = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["GridSizes"];
        this.Icons = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.timer = rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"];
    }
    cancel() {
        this.cancelEvent.emit();
    }
    save() {
        this.saveEvent.emit();
    }
    fieldUpdated() {
        this.fieldUpdateEvent.emit(this.data);
    }
}
GameResultComponent.ɵfac = function GameResultComponent_Factory(t) { return new (t || GameResultComponent)(); };
GameResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameResultComponent, selectors: [["ui-game-result"]], viewQuery: function GameResultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.whiteSelect = _t.first);
    } }, inputs: { data: "data", winners: "winners", disabled: "disabled", usersWhite: "usersWhite", usersBlack: "usersBlack", winnerOptions: "winnerOptions", winnerFieldHidden: "winnerFieldHidden" }, outputs: { fieldUpdateEvent: "fieldUpdateEvent", cancelEvent: "cancelEvent", saveEvent: "saveEvent" }, decls: 13, vars: 20, consts: [["appTranslate", "pages.home.games.pop-up.title", "mat-dialog-title", ""], ["mat-dialog-content", ""], ["form", "ngForm"], ["id", "white-user", "labelKey", "pages.home.games.labels.white", "optionDisplayField", "name", 3, "value", "options", "valueChange"], ["id", "black-user", "labelKey", "pages.home.games.labels.black", "optionDisplayField", "name", 3, "value", "options", "valueChange"], ["id", "winner-user", "labelKey", "pages.home.games.labels.winner", 3, "disabled", "value", "options", "valueChange"], ["mat-dialog-actions", "", 3, "appGridRow"], [3, "appGridColumn", "buttonFunction", "buttonType", "clickEvent"], ["id", "save", 3, "appGridColumn", "buttonFunction", "buttonType", "dialogDataToSubmit", "disabled", "clickEvent"]], template: function GameResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-drop-down", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_5_listener($event) { return ctx.data.white = $event; })("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_5_listener() { return ctx.fieldUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_7_listener($event) { return ctx.data.black = $event; })("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_7_listener() { return ctx.fieldUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-drop-down", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_9_listener($event) { return ctx.data.winner = $event; })("valueChange", function GameResultComponent_Template_app_drop_down_valueChange_9_listener() { return ctx.fieldUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GameResultComponent_Template_app_button_clickEvent_11_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GameResultComponent_Template_app_button_clickEvent_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.white)("options", ctx.usersWhite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.black)("options", ctx.usersBlack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.winnerFieldHidden)("value", ctx.data.winner)("options", ctx.winnerOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridRow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.GridSizes.ALL));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("buttonFunction", ctx.ButtonFunction.CANCEL)("buttonType", ctx.ButtonType.SECONDARY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGridColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3))("buttonFunction", ctx.ButtonFunction.SAVE)("buttonType", ctx.ButtonType.PRIMARY)("dialogDataToSubmit", ctx.data)("disabled", ctx.disabled);
    } }, directives: [_translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _form_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_7__["DropDownComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _grid_directives_grid_row_directive__WEBPACK_IMPORTED_MODULE_8__["GridRowDirective"], _button_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _grid_directives_grid_column_directive__WEBPACK_IMPORTED_MODULE_10__["GridColumnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2FkZC1nYW1lL2NvbXBvbmVudHMvZGlhbG9nLWRhdGEvZ2FtZS1yZXN1bHQvZ2FtZS1yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-game-result',
                templateUrl: './game-result.component.html',
                styleUrls: ['./game-result.component.scss'],
            }]
    }], null, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form', { static: true }]
        }], whiteSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['whiteSelect', { static: true }]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], winners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersWhite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersBlack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], winnerOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], winnerFieldHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldUpdateEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], saveEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/add-game/components/dialog-overview/dialog-overview.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/modules/add-game/components/dialog-overview/dialog-overview.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewComponent", function() { return DialogOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog-data/dialog-data.component */ "./src/app/shared/modules/add-game/components/dialog-data/dialog-data.component.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _home_modules_game_factories_game_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../home/modules/game/factories/game.factory */ "./src/app/shared/modules/home/modules/game/factories/game.factory.ts");












class DialogOverviewComponent {
    constructor(dialog, utilService, router) {
        this.dialog = dialog;
        this.utilService = utilService;
        this.router = router;
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.game = new _home_modules_game_factories_game_factory__WEBPACK_IMPORTED_MODULE_7__["GameFactory"]().create();
    }
    ngOnInit() {
        this.openDialog();
    }
    openDialog() {
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(_dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_1__["DialogDataComponent"], {
            data: {
                white: this.game.white,
                winner: this.game.winner,
                black: this.game.black,
            },
            maxWidth: '250px'
        });
        // No need to unsubscribe since it is a one off observable
        dialogRef.afterClosed().subscribe((result) => {
            if (this.addEventIsReceived(result)) {
                this.addEvent.emit(result);
            }
            if (result === 'cancelButton') {
                this.cancelEvent.emit();
            }
            this.unsubscriber$.next();
        });
        this.closeDialogWhenTheUrlChanges();
    }
    closeDialogWhenTheUrlChanges() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscriber$))
            .subscribe(() => { var _a; return (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.closeAll(); });
    }
    addEventIsReceived(result) {
        var _a;
        return !this.utilService.isNullOrUndefined((_a = result) === null || _a === void 0 ? void 0 : _a.white);
    }
}
DialogOverviewComponent.ɵfac = function DialogOverviewComponent_Factory(t) { return new (t || DialogOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DialogOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewComponent, selectors: [["app-dialog-overview"]], outputs: { addEvent: "addEvent", cancelEvent: "cancelEvent" }, decls: 0, vars: 0, template: function DialogOverviewComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-overview',
                template: ``,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/add-game/services/dialog-data/dialog-data.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/modules/add-game/services/dialog-data/dialog-data.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataService", function() { return DialogDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/util/util.service */ "./src/app/shared/services/util/util.service.ts");




class DialogDataService {
    constructor(utilService) {
        this.utilService = utilService;
    }
    determineAvailableUsersForSelect(users, game, selectName) {
        const chosenUserName = [];
        if (!this.utilService.isNullOrUndefined(game.white) && selectName !== 'white') {
            chosenUserName.push(game.white);
        }
        if (!this.utilService.isNullOrUndefined(game.black) && selectName !== 'black') {
            chosenUserName.push(game.black);
        }
        return users.filter((user) => chosenUserName.includes(user.name) === false);
    }
    allFieldsAreDefined(game) {
        return !this.utilService.isNullOrUndefined(game.white)
            && !this.utilService.isNullOrUndefined(game.black)
            && !this.utilService.isNullOrUndefined(game.winner);
    }
    userAreDefined(game) {
        return !this.utilService.isNullOrUndefined(game.white)
            && !this.utilService.isNullOrUndefined(game.black);
    }
}
DialogDataService.ɵfac = function DialogDataService_Factory(t) { return new (t || DialogDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"])); };
DialogDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogDataService, factory: DialogDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/form/components/drop-down/drop-down.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/modules/form/components/drop-down/drop-down.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../translate/directives/translate.directive */ "./src/app/shared/modules/translate/directives/translate.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _option_name_option_name_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option-name/option-name.component */ "./src/app/shared/modules/form/components/drop-down/option-name/option-name.component.ts");











const _c0 = ["select"];
function DropDownComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-option-name", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("iconClickEvent", function DropDownComponent_mat_option_4_Template_app_option_name_iconClickEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.removeOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.getOptionName(option_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIcon", ctx_r20.getOptionName(option_r21) === ctx_r20.value && _r19.panelOpen)("value", ctx_r20.getOptionName(option_r21))("id", ctx_r20.getOptionName(option_r21));
} }
class DropDownComponent {
    constructor() {
        this.disabled = false;
        this.removeOptionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    writeValue(obj) {
        this.valueAccessor.writeValue(obj);
    }
    registerOnChange(fn) {
        this.valueAccessor.registerOnChange(fn);
    }
    registerOnTouched(fn) {
        this.valueAccessor.registerOnTouched(fn);
    }
    setDisabledState(isDisabled) {
        this.valueAccessor.setDisabledState(isDisabled);
    }
    removeOption() {
        this.select.ngControl.reset();
        this.valueChange.emit(null);
        this.select.close();
    }
    getOptionName(option) {
        return this.optionDisplayField ? option[this.optionDisplayField] : option;
    }
}
DropDownComponent.ɵfac = function DropDownComponent_Factory(t) { return new (t || DropDownComponent)(); };
DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropDownComponent, selectors: [["app-drop-down"]], viewQuery: function DropDownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.valueAccessor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, inputs: { id: "id", value: "value", options: "options", optionDisplayField: "optionDisplayField", labelKey: "labelKey", disabled: "disabled" }, outputs: { removeOptionEvent: "removeOptionEvent", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DropDownComponent),
                multi: true,
            },
        ])], decls: 5, vars: 5, consts: [[3, "appTranslate"], [3, "ngModel", "id", "disabled", "valueChange", "ngModelChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "showIcon", "value", "id", "iconClickEvent"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DropDownComponent_Template_mat_select_valueChange_2_listener($event) { return ctx.valueChange.emit($event); })("ngModelChange", function DropDownComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropDownComponent_mat_option_4_Template, 2, 4, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTranslate", ctx.labelKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("id", ctx.id)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _option_name_option_name_component__WEBPACK_IMPORTED_MODULE_7__["OptionNameComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50cy9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9mb3JtL2NvbXBvbmVudHMvZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50cy9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drop-down',
                templateUrl: './drop-down.component.html',
                styleUrls: ['./drop-down.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DropDownComponent),
                        multi: true,
                    },
                ]
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optionDisplayField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeOptionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], valueAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], { static: true }]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['select', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/form/components/drop-down/option-name/option-name.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/modules/form/components/drop-down/option-name/option-name.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OptionNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionNameComponent", function() { return OptionNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icon/components/icon/icon.component */ "./src/app/shared/modules/icon/components/icon/icon.component.ts");





function OptionNameComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionNameComponent_app_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionNameComponent_app_icon_2_Template_app_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r26.iconClick(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconSize", ctx_r25.IconSize.SMALL)("icon", ctx_r25.Icons.DELETE);
} }
class OptionNameComponent {
    constructor() {
        this.iconClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Icons = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.IconSize = _static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconSize"];
    }
    iconClick() {
        this.iconClickEvent.emit();
    }
}
OptionNameComponent.ɵfac = function OptionNameComponent_Factory(t) { return new (t || OptionNameComponent)(); };
OptionNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionNameComponent, selectors: [["app-option-name"]], inputs: { value: "value", showIcon: "showIcon" }, outputs: { iconClickEvent: "iconClickEvent" }, decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "float", 3, "iconSize", "icon", "click", 4, "ngIf"], [1, "float", 3, "iconSize", "icon", "click"]], template: function OptionNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OptionNameComponent_span_1_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OptionNameComponent_app_icon_2_Template, 1, 2, "app-icon", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value == null ? null : ctx.value.substring(0, 15));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.value == null ? null : ctx.value.length) > 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: [".float[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50cy9kcm9wLWRvd24vb3B0aW9uLW5hbWUvb3B0aW9uLW5hbWUuY29tcG9uZW50LnNjc3MiLCJhcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50cy9kcm9wLWRvd24vb3B0aW9uLW5hbWUvb3B0aW9uLW5hbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9mb3JtL2NvbXBvbmVudHMvZHJvcC1kb3duL29wdGlvbi1uYW1lL29wdGlvbi1uYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIiwiLmZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-option-name',
                templateUrl: './option-name.component.html',
                styleUrls: ['./option-name.component.scss'],
            }]
    }], null, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/home/modules/game/factories/game.factory.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/home/modules/game/factories/game.factory.ts ***!
  \****************************************************************************/
/*! exports provided: GameFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFactory", function() { return GameFactory; });
class GameFactory {
    create(game) {
        return {
            black: game ? game.black : null,
            winner: game ? game.winner : null,
            white: game ? game.white : null,
        };
    }
}


/***/ }),

/***/ "./src/app/shared/modules/home/modules/game/stores/user.store.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/home/modules/game/stores/user.store.ts ***!
  \***********************************************************************/
/*! exports provided: UsersStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersStore", function() { return UsersStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/services/store */ "./src/app/shared/services/store.ts");



class UsersStore extends _shared_services_store__WEBPACK_IMPORTED_MODULE_1__["Store"] {
}
UsersStore.ɵfac = function UsersStore_Factory(t) { return ɵUsersStore_BaseFactory(t || UsersStore); };
UsersStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersStore, factory: UsersStore.ɵfac, providedIn: 'root' });
const ɵUsersStore_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UsersStore);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~shared-modules-add-game-add-game-module~shared-modules-add-game-components-dialog-overview-d~2141ce15-es2015.js.map