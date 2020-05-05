(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/modules/transition/directives/show-and-hide/show-and-hide.directive.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/modules/transition/directives/show-and-hide/show-and-hide.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: ShowAndHideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAndHideDirective", function() { return ShowAndHideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShowAndHideDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges() {
        if (this.show === true) {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'pointer-events');
            this.addShowCss();
        }
        else if (this.show === false) {
            this.addHideCss();
        }
    }
    addShowCss() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-moz-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-o-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'opacity .3s ease-in-out');
    }
    addHideCss() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'pointer-events', 'none');
        this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');
        this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-moz-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, '-o-transition', 'opacity .3s ease-in-out');
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'opacity .3s ease-in-out');
    }
}
ShowAndHideDirective.ɵfac = function ShowAndHideDirective_Factory(t) { return new (t || ShowAndHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ShowAndHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShowAndHideDirective, selectors: [["", "appShowAndHide", ""]], inputs: { show: ["appShowAndHide", "show"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowAndHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appShowAndHide]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appShowAndHide']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modules/transition/transition.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/modules/transition/transition.module.ts ***!
  \****************************************************************/
/*! exports provided: TransitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionModule", function() { return TransitionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/show-and-hide/show-and-hide.directive */ "./src/app/shared/modules/transition/directives/show-and-hide/show-and-hide.directive.ts");




class TransitionModule {
}
TransitionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransitionModule });
TransitionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransitionModule_Factory(t) { return new (t || TransitionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransitionModule, { declarations: [_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_2__["ShowAndHideDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_2__["ShowAndHideDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransitionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_2__["ShowAndHideDirective"]],
                exports: [_directives_show_and_hide_show_and_hide_directive__WEBPACK_IMPORTED_MODULE_2__["ShowAndHideDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/static-files/enums.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/static-files/enums.ts ***!
  \**********************************************/
/*! exports provided: ButtonType, ButtonFunction, Icons, IconSize, IconColor, Actions, Winners, Sides, GridSizes, ButtonRowType, Alignments, Directions, Positions, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFunction", function() { return ButtonFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSize", function() { return IconSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconColor", function() { return IconColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Winners", function() { return Winners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sides", function() { return Sides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSizes", function() { return GridSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRowType", function() { return ButtonRowType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alignments", function() { return Alignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directions", function() { return Directions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return Positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["PRIMARY"] = 1] = "PRIMARY";
    ButtonType[ButtonType["SECONDARY"] = 2] = "SECONDARY";
    ButtonType[ButtonType["NORMAL"] = 3] = "NORMAL";
})(ButtonType || (ButtonType = {}));
var ButtonFunction;
(function (ButtonFunction) {
    ButtonFunction[ButtonFunction["LOGIN"] = 1] = "LOGIN";
    ButtonFunction[ButtonFunction["CANCEL"] = 2] = "CANCEL";
    ButtonFunction[ButtonFunction["SAVE"] = 3] = "SAVE";
})(ButtonFunction || (ButtonFunction = {}));
var Icons;
(function (Icons) {
    Icons[Icons["CROSS"] = 1] = "CROSS";
    Icons[Icons["PLUS"] = 2] = "PLUS";
    Icons[Icons["DELETE"] = 3] = "DELETE";
    Icons[Icons["ROOK"] = 4] = "ROOK";
    Icons[Icons["COFFEE"] = 5] = "COFFEE";
    Icons[Icons["CHECK"] = 6] = "CHECK";
    Icons[Icons["GREEN_HEART"] = 7] = "GREEN_HEART";
    Icons[Icons["CHESS_PIECES"] = 8] = "CHESS_PIECES";
    Icons[Icons["SCROLL"] = 9] = "SCROLL";
    Icons[Icons["MONTEPOELI"] = 10] = "MONTEPOELI";
    Icons[Icons["USER"] = 11] = "USER";
    Icons[Icons["PLUS_WITH_BOX"] = 12] = "PLUS_WITH_BOX";
    Icons[Icons["HEART"] = 13] = "HEART";
})(Icons || (Icons = {}));
var IconSize;
(function (IconSize) {
    IconSize[IconSize["SMALL"] = 1] = "SMALL";
    IconSize[IconSize["SMALL_MEDIUM"] = 2] = "SMALL_MEDIUM";
    IconSize[IconSize["MEDIUM"] = 3] = "MEDIUM";
    IconSize[IconSize["LARGE"] = 4] = "LARGE";
})(IconSize || (IconSize = {}));
var IconColor;
(function (IconColor) {
    IconColor[IconColor["GRAY"] = 1] = "GRAY";
    IconColor[IconColor["BLACK"] = 2] = "BLACK";
    IconColor[IconColor["ACCENT"] = 3] = "ACCENT";
})(IconColor || (IconColor = {}));
var Actions;
(function (Actions) {
    Actions[Actions["ADD"] = 1] = "ADD";
    Actions[Actions["ACCEPT"] = 2] = "ACCEPT";
})(Actions || (Actions = {}));
var Winners;
(function (Winners) {
    Winners["WHITE"] = "white";
    Winners["BLACK"] = "black";
    Winners["DRAW"] = "draw";
})(Winners || (Winners = {}));
var Sides;
(function (Sides) {
    Sides["WHITE"] = "white";
    Sides["BLACK"] = "black";
})(Sides || (Sides = {}));
var GridSizes;
(function (GridSizes) {
    GridSizes[GridSizes["EXTRA_SMALL"] = 1] = "EXTRA_SMALL";
    GridSizes[GridSizes["SMALL"] = 2] = "SMALL";
    GridSizes[GridSizes["MEDIUM"] = 3] = "MEDIUM";
    GridSizes[GridSizes["LARGE"] = 4] = "LARGE";
    GridSizes[GridSizes["EXTRA_LARGE"] = 5] = "EXTRA_LARGE";
    GridSizes[GridSizes["ALL"] = 6] = "ALL";
})(GridSizes || (GridSizes = {}));
var ButtonRowType;
(function (ButtonRowType) {
    ButtonRowType[ButtonRowType["TWO"] = 1] = "TWO";
})(ButtonRowType || (ButtonRowType = {}));
var Alignments;
(function (Alignments) {
    Alignments[Alignments["RIGHT"] = 1] = "RIGHT";
    Alignments[Alignments["CENTER"] = 2] = "CENTER";
    Alignments[Alignments["VERTICAL"] = 3] = "VERTICAL";
    Alignments[Alignments["BASELINE"] = 4] = "BASELINE";
    Alignments[Alignments["END"] = 5] = "END";
})(Alignments || (Alignments = {}));
var Directions;
(function (Directions) {
    Directions[Directions["ROW"] = 1] = "ROW";
    Directions[Directions["COLUMN"] = 2] = "COLUMN";
})(Directions || (Directions = {}));
var Positions;
(function (Positions) {
    Positions[Positions["FIXED_MIDDLE"] = 0] = "FIXED_MIDDLE";
})(Positions || (Positions = {}));
var Tabs;
(function (Tabs) {
    Tabs[Tabs["GAMES"] = 0] = "GAMES";
    Tabs[Tabs["RULES"] = 1] = "RULES";
})(Tabs || (Tabs = {}));


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map