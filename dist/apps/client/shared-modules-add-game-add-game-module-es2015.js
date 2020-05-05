(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-modules-add-game-add-game-module"],{

/***/ "./src/app/shared/modules/add-game/add-game.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modules/add-game/add-game.module.ts ***!
  \************************************************************/
/*! exports provided: AddGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGameModule", function() { return AddGameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dialog-data/dialog-data.component */ "./src/app/shared/modules/add-game/components/dialog-data/dialog-data.component.ts");
/* harmony import */ var _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialog-overview/dialog-overview.component */ "./src/app/shared/modules/add-game/components/dialog-overview/dialog-overview.component.ts");
/* harmony import */ var _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate/custom-translate.module */ "./src/app/shared/modules/translate/custom-translate.module.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/button.module */ "./src/app/shared/modules/button/button.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_dialog_data_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dialog-data/game-result/game-result.component */ "./src/app/shared/modules/add-game/components/dialog-data/game-result/game-result.component.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/form.module */ "./src/app/shared/modules/form/form.module.ts");
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../grid/grid.module */ "./src/app/shared/modules/grid/grid.module.ts");
/* harmony import */ var _transition_transition_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../transition/transition.module */ "./src/app/shared/modules/transition/transition.module.ts");













class AddGameModule {
}
AddGameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddGameModule });
AddGameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddGameModule_Factory(t) { return new (t || AddGameModule)(); }, providers: [
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"],
            useValue: { hasBackdrop: false }
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_9__["FormModule"],
            _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
            _transition_transition_module__WEBPACK_IMPORTED_MODULE_11__["TransitionModule"]
        ],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddGameModule, { declarations: [_components_dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_3__["DialogDataComponent"],
        _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"],
        _components_dialog_data_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_8__["GameResultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _form_form_module__WEBPACK_IMPORTED_MODULE_9__["FormModule"],
        _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
        _transition_transition_module__WEBPACK_IMPORTED_MODULE_11__["TransitionModule"]], exports: [_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGameModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_3__["DialogDataComponent"],
                    _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"],
                    _components_dialog_data_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_8__["GameResultComponent"],
                ],
                providers: [
                    {
                        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"],
                        useValue: { hasBackdrop: false }
                    }
                ],
                entryComponents: [
                    _components_dialog_data_dialog_data_component__WEBPACK_IMPORTED_MODULE_3__["DialogDataComponent"],
                ],
                exports: [
                    _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _form_form_module__WEBPACK_IMPORTED_MODULE_9__["FormModule"],
                    _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                    _transition_transition_module__WEBPACK_IMPORTED_MODULE_11__["TransitionModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modules/form/form.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/form/form.module.ts ***!
  \****************************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/shared/modules/icon/icon.module.ts");
/* harmony import */ var _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/drop-down/drop-down.component */ "./src/app/shared/modules/form/components/drop-down/drop-down.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate/custom-translate.module */ "./src/app/shared/modules/translate/custom-translate.module.ts");
/* harmony import */ var _components_drop_down_option_name_option_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/drop-down/option-name/option-name.component */ "./src/app/shared/modules/form/components/drop-down/option-name/option-name.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");










class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__["IconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__["DropDownComponent"],
        _components_drop_down_option_name_option_name_component__WEBPACK_IMPORTED_MODULE_6__["OptionNameComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__["IconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]], exports: [_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__["DropDownComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__["IconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_5__["CustomTranslateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                ],
                declarations: [
                    _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__["DropDownComponent"],
                    _components_drop_down_option_name_option_name_component__WEBPACK_IMPORTED_MODULE_6__["OptionNameComponent"],
                ],
                exports: [
                    _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__["DropDownComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shared-modules-add-game-add-game-module-es2015.js.map