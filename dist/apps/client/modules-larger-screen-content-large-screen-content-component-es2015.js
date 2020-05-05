(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-larger-screen-content-large-screen-content-component"],{

/***/ "./src/app/main/modules/main-content/modules/larger-screen-content/components/footer/footer.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/modules/main-content/modules/larger-screen-content/components/footer/footer.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_static_files_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/static-files/contants */ "./src/app/shared/static-files/contants.ts");
/* harmony import */ var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _shared_modules_translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/modules/translate/directives/translate.directive */ "./src/app/shared/modules/translate/directives/translate.directive.ts");
/* harmony import */ var _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/modules/icon/components/icon/icon.component */ "./src/app/shared/modules/icon/components/icon/icon.component.ts");






class FooterComponent {
    constructor() {
        this.SPACER = _shared_static_files_contants__WEBPACK_IMPORTED_MODULE_1__["SPACER"];
        this.IconSize = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["IconSize"];
        this.Icons = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["Icons"];
        this.IconColor = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_2__["IconColor"];
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 5, consts: [[1, "footer"], [1, "d-flex", "align-items-center", "justify-content-center"], ["appTranslate", "app.footer.part1"], [3, "icon", "iconColor", "iconSize"], ["appTranslate", "app.footer.part2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.SPACER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.HEART)("iconColor", ctx.IconColor.ACCENT)("iconSize", ctx.IconSize.SMALL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.SPACER);
    } }, directives: [_shared_modules_translate_directives_translate_directive__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9sYXJnZXItc2NyZWVuLWNvbnRlbnQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbGFyZ2VyLXNjcmVlbi1jb250ZW50L2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbGFyZ2VyLXNjcmVlbi1jb250ZW50L2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/modules/main-content/modules/larger-screen-content/components/title-bar/title-bar.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/modules/main-content/modules/larger-screen-content/components/title-bar/title-bar.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TitleBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBarComponent", function() { return TitleBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _shared_exceptions_UnknownCaseException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/exceptions/UnknownCaseException */ "./src/app/shared/exceptions/UnknownCaseException.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _shared_modules_button_components_button_no_elevation_button_no_elevation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/modules/button/components/button-no-elevation/button-no-elevation.component */ "./src/app/shared/modules/button/components/button-no-elevation/button-no-elevation.component.ts");
/* harmony import */ var _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/modules/icon/components/icon/icon.component */ "./src/app/shared/modules/icon/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _shared_modules_user_action_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/modules/user-action/components/user-actions/user-actions.component */ "./src/app/shared/modules/user-action/components/user-actions/user-actions.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











function TitleBarComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "pages.home.games.tooltip"))("icon", ctx_r29.Icons.CHESS_PIECES)("iconSize", ctx_r29.IconSize.MEDIUM);
} }
function TitleBarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "pages.home.rules.tooltip"))("icon", ctx_r30.Icons.SCROLL)("iconSize", ctx_r30.IconSize.MEDIUM);
} }
class TitleBarComponent {
    constructor() {
        this.gamesSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rulesSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'primary';
        this.Icons = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Icons"];
        this.IconSize = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconSize"];
        this.IconColor = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["IconColor"];
        this.GridSizes = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["GridSizes"];
        this.Alignments = _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Alignments"];
    }
    handleChangeEvent(matTabChangeEvent) {
        switch (matTabChangeEvent.index) {
            case 0:
                this.emitGamesSelected();
                break;
            case 1:
                this.emitRulesSelected();
                break;
            default:
                throw new _shared_exceptions_UnknownCaseException__WEBPACK_IMPORTED_MODULE_2__["UnknownCaseException"](matTabChangeEvent.index.toString());
        }
    }
    emitGamesSelected() {
        this.gamesSelected.emit();
    }
    emitRulesSelected() {
        this.rulesSelected.emit();
    }
    handleButtonClicked() {
        this.iconClicked.emit();
    }
}
TitleBarComponent.ɵfac = function TitleBarComponent_Factory(t) { return new (t || TitleBarComponent)(); };
TitleBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleBarComponent, selectors: [["app-title-bar"]], outputs: { gamesSelected: "gamesSelected", rulesSelected: "rulesSelected", iconClicked: "iconClicked" }, decls: 15, vars: 3, consts: [[3, "color"], [2, "height", "56px", 3, "clickEvent"], [2, "display", "flex", "align-items", "center"], [1, "margin-right-10", 2, "height", "56px"], [3, "icon"], [1, "left-spacer"], ["animationDuration", "0ms", 3, "selectedTabChange"], ["mat-tab-label", ""], [1, "right-spacer"], [3, "settingsIconColor"], [3, "matTooltip", "icon", "iconSize"]], template: function TitleBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button-no-elevation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function TitleBarComponent_Template_app_button_no_elevation_clickEvent_1_listener() { return ctx.handleButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Montepoeli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function TitleBarComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.handleChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TitleBarComponent_ng_template_10_Template, 2, 5, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TitleBarComponent_ng_template_12_Template, 2, 5, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-user-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.Icons.MONTEPOELI);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settingsIconColor", ctx.IconColor.BLACK);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _shared_modules_button_components_button_no_elevation_button_no_elevation_component__WEBPACK_IMPORTED_MODULE_4__["ButtonNoElevationComponent"], _shared_modules_icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLabel"], _shared_modules_user_action_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_7__["UserActionsComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".left-spacer[_ngcontent-%COMP%] {\n  flex: 0.5 0.5 auto;\n}\n\n.right-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.margin-bottom-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  background-color: #3398dc !important;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9sYXJnZXItc2NyZWVuLWNvbnRlbnQvY29tcG9uZW50cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21vZHVsZXMvbGFyZ2VyLXNjcmVlbi1jb250ZW50L2NvbXBvbmVudHMvdGl0bGUtYmFyL3RpdGxlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvbWFpbi9tb2R1bGVzL21haW4tY29udGVudC9tb2R1bGVzL2xhcmdlci1zY3JlZW4tY29udGVudC9jb21wb25lbnRzL3RpdGxlLWJhci90aXRsZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1zcGFjZXIge1xuICBmbGV4OiAwLjUgMC41IGF1dG87XG59XG5cbi5yaWdodC1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLm1hcmdpbi1yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk4ZGMgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuIiwiLmxlZnQtc3BhY2VyIHtcbiAgZmxleDogMC41IDAuNSBhdXRvO1xufVxuXG4ucmlnaHQtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5tYXJnaW4tcmlnaHQtMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tYXJnaW4tYm90dG9tLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOThkYyAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-bar',
                templateUrl: './title-bar.component.html',
                styleUrls: ['./title-bar.component.scss'],
            }]
    }], null, { gamesSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rulesSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], iconClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/modules/main-content/modules/larger-screen-content/large-screen-content.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/modules/main-content/modules/larger-screen-content/large-screen-content.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LargeScreenContentComponent, InternalLargeScreenContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeScreenContentComponent", function() { return LargeScreenContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalLargeScreenContentModule", function() { return InternalLargeScreenContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/tab-change.global-event-emitter */ "./src/app/shared/services/tab-change.global-event-emitter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _larger_screen_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./larger-screen-content.module */ "./src/app/main/modules/main-content/modules/larger-screen-content/larger-screen-content.module.ts");
/* harmony import */ var _shared_modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/modules/home/home.module */ "./src/app/shared/modules/home/home.module.ts");
/* harmony import */ var _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/title-bar/title-bar.component */ "./src/app/main/modules/main-content/modules/larger-screen-content/components/title-bar/title-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/main/modules/main-content/modules/larger-screen-content/components/footer/footer.component.ts");












class LargeScreenContentComponent {
    constructor(tabChangeGlobalEventEmitter) {
        this.tabChangeGlobalEventEmitter = tabChangeGlobalEventEmitter;
    }
    gamesHandler() {
        this.tabChangeGlobalEventEmitter.emit(_shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Tabs"].GAMES);
    }
    rulesHandler() {
        this.tabChangeGlobalEventEmitter.emit(_shared_static_files_enums__WEBPACK_IMPORTED_MODULE_1__["Tabs"].RULES);
    }
    iconClickedHandler() {
        this.gamesHandler();
    }
}
LargeScreenContentComponent.ɵfac = function LargeScreenContentComponent_Factory(t) { return new (t || LargeScreenContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_2__["TabChangeGlobalEventEmitter"])); };
LargeScreenContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LargeScreenContentComponent, selectors: [["app-large-screen-content"]], decls: 3, vars: 0, consts: [[3, "gamesSelected", "rulesSelected", "iconClicked"]], template: function LargeScreenContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-title-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gamesSelected", function LargeScreenContentComponent_Template_app_title_bar_gamesSelected_0_listener() { return ctx.gamesHandler(); })("rulesSelected", function LargeScreenContentComponent_Template_app_title_bar_rulesSelected_0_listener() { return ctx.rulesHandler(); })("iconClicked", function LargeScreenContentComponent_Template_app_title_bar_iconClicked_0_listener() { return ctx.iconClickedHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_7__["TitleBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbW9kdWxlcy9sYXJnZXItc2NyZWVuLWNvbnRlbnQvbGFyZ2Utc2NyZWVuLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargeScreenContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-large-screen-content',
                templateUrl: './large-screen-content.component.html',
                styleUrls: ['./large-screen-content.component.scss']
            }]
    }], function () { return [{ type: _shared_services_tab_change_global_event_emitter__WEBPACK_IMPORTED_MODULE_2__["TabChangeGlobalEventEmitter"] }]; }, null); })();
/* tslint:disable */
class InternalLargeScreenContentModule {
}
InternalLargeScreenContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternalLargeScreenContentModule });
InternalLargeScreenContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternalLargeScreenContentModule_Factory(t) { return new (t || InternalLargeScreenContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _larger_screen_content_module__WEBPACK_IMPORTED_MODULE_5__["LargerScreenContentModule"],
            _shared_modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternalLargeScreenContentModule, { declarations: [LargeScreenContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _larger_screen_content_module__WEBPACK_IMPORTED_MODULE_5__["LargerScreenContentModule"],
        _shared_modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalLargeScreenContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    LargeScreenContentComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _larger_screen_content_module__WEBPACK_IMPORTED_MODULE_5__["LargerScreenContentModule"],
                    _shared_modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/modules/main-content/modules/larger-screen-content/larger-screen-content.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/modules/main-content/modules/larger-screen-content/larger-screen-content.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LargerScreenContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargerScreenContentModule", function() { return LargerScreenContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/modules/translate/custom-translate.module */ "./src/app/shared/modules/translate/custom-translate.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/modules/button/button.module */ "./src/app/shared/modules/button/button.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/title-bar/title-bar.component */ "./src/app/main/modules/main-content/modules/larger-screen-content/components/title-bar/title-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/main/modules/main-content/modules/larger-screen-content/components/footer/footer.component.ts");
/* harmony import */ var _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/modules/icon/icon.module */ "./src/app/shared/modules/icon/icon.module.ts");
/* harmony import */ var _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/modules/user-action/user-action.module */ "./src/app/shared/modules/user-action/user-action.module.ts");
/* harmony import */ var _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/modules/grid/grid.module */ "./src/app/shared/modules/grid/grid.module.ts");














class LargerScreenContentModule {
}
LargerScreenContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LargerScreenContentModule });
LargerScreenContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LargerScreenContentModule_Factory(t) { return new (t || LargerScreenContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_2__["CustomTranslateModule"],
            _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"],
            _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_12__["GridModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LargerScreenContentModule, { declarations: [_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_8__["TitleBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_2__["CustomTranslateModule"],
        _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"],
        _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_12__["GridModule"]], exports: [_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_8__["TitleBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargerScreenContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_8__["TitleBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
                ],
                exports: [
                    _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_8__["TitleBarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_modules_translate_custom_translate_module__WEBPACK_IMPORTED_MODULE_2__["CustomTranslateModule"],
                    _shared_modules_icon_icon_module__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _shared_modules_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    _shared_modules_user_action_user_action_module__WEBPACK_IMPORTED_MODULE_11__["UserActionModule"],
                    _shared_modules_grid_grid_module__WEBPACK_IMPORTED_MODULE_12__["GridModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/static-files/contants.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/static-files/contants.ts ***!
  \*************************************************/
/*! exports provided: SPACER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACER", function() { return SPACER; });
const SPACER = ' ';


/***/ })

}]);
//# sourceMappingURL=modules-larger-screen-content-large-screen-content-component-es2015.js.map