(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-modules-main-content-main-content-module"],{

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
/*!************************************************************************************************************!*\
  !*** /Users/rogierderuijter/Projects/montepoeli/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \************************************************************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");






/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/layout-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/media-matcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global registry for all dynamically-created, injected media queries.
 * @type {?}
 */
const mediaQueriesForWebkitCompatibility = new Set();
/**
 * Style tag that holds all of the dynamically-created media queries.
 * @type {?}
 */
let mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
class MediaMatcher {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
/** @nocollapse */
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
/** @nocollapse */ MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, null); })();
if (false) {}
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            (/** @type {?} */ (document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            ((/** @type {?} */ (mediaQueryStyleNode.sheet)))
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        () => { }),
        removeListener: (/**
         * @return {?}
         */
        () => { })
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/breakpoints-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The current state of a layout breakpoint.
 * @record
 */
function BreakpointState() { }
if (false) {}
/**
 * The current state of a layout breakpoint.
 * @record
 */
function InternalBreakpointState() { }
if (false) {}
/**
 * @record
 */
function Query() { }
if (false) {}
/**
 * Utility for checking the matching state of \@media queries.
 */
class BreakpointObserver {
    /**
     * @param {?} _mediaMatcher
     * @param {?} _zone
     */
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */
        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    isMatched(value) {
        /** @type {?} */
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        return queries.some((/**
         * @param {?} mediaQuery
         * @return {?}
         */
        mediaQuery => this._registerQuery(mediaQuery).mql.matches));
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    observe(value) {
        /** @type {?} */
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        /** @type {?} */
        const observables = queries.map((/**
         * @param {?} query
         * @return {?}
         */
        query => this._registerQuery(query).observable));
        /** @type {?} */
        let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} breakpointStates
         * @return {?}
         */
        (breakpointStates) => {
            /** @type {?} */
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach((/**
             * @param {?} state
             * @return {?}
             */
            (state) => {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            }));
            return response;
        })));
    }
    /**
     * Registers a specific query to be listened for.
     * @private
     * @param {?} query
     * @return {?}
     */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return (/** @type {?} */ (this._queries.get(query)));
        }
        /** @type {?} */
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        /** @type {?} */
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            /** @type {?} */
            const handler = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => this._zone.run((/**
             * @return {?}
             */
            () => observer.next(e))));
            mql.addListener(handler);
            return (/**
             * @return {?}
             */
            () => {
                mql.removeListener(handler);
            });
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} nextMql
         * @return {?}
         */
        (nextMql) => ({ query, matches: nextMql.matches }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        /** @type {?} */
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
/** @nocollapse */
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/** @nocollapse */ BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
if (false) {}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map((/**
     * @param {?} query
     * @return {?}
     */
    (query) => query.split(',')))
        .reduce((/**
     * @param {?} a1
     * @param {?} a2
     * @return {?}
     */
    (a1, a2) => a1.concat(a2)))
        .map((/**
     * @param {?} query
     * @return {?}
     */
    query => query.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/breakpoints.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./src/app/main/modules/main-content/main-content-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/modules/main-content/main-content-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MainContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentRoutingModule", function() { return MainContentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/auth/guards/auth-guard.service */ "./src/app/shared/modules/auth/guards/auth-guard.service.ts");
/* harmony import */ var _main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content.component */ "./src/app/main/modules/main-content/main-content.component.ts");






const mainContentRoutes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | shared-modules-home-home-module */[__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~23e70d00"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~shared-modules-home-home-module")]).then(__webpack_require__.bind(null, /*! ../../../shared/modules/home/home.module */ "./src/app/shared/modules/home/home.module.ts")).then(m => m.HomeModule),
        component: _main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"],
        canActivate: [_shared_modules_auth_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
];
class MainContentRoutingModule {
}
MainContentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainContentRoutingModule });
MainContentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainContentRoutingModule_Factory(t) { return new (t || MainContentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mainContentRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mainContentRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/modules/main-content/main-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/modules/main-content/main-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/static-files/enums */ "./src/app/shared/static-files/enums.ts");
/* harmony import */ var _shared_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/grid/grid.service */ "./src/app/shared/services/grid/grid.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["mobileContent"];
const _c1 = ["largeScreenContent"];
function MainContentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainContentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MainContentComponent {
    constructor(componentFactoryResolver, injector, gridService, compiler, changeDetectorRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.gridService = gridService;
        this.compiler = compiler;
        this.changeDetectorRef = changeDetectorRef;
        this.destory$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.gridService.gridChangeObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((activeGridSize) => activeGridSize !== _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].EXTRA_SMALL && this.activeView !== 'large-screen'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.activeView = 'large-screen'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.changeDetectorRef.detectChanges()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !this.largeScreenContentContainer || this.largeScreenContentContainer.length === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.createLargeScreenConent()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destory$)).subscribe();
        this.gridService.gridChangeObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((activeGridSize) => activeGridSize === _shared_static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].EXTRA_SMALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.activeView = 'mobile'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.changeDetectorRef.detectChanges()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !this.mobileContentContainer || this.mobileContentContainer.length === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.createMobileConent()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destory$)).subscribe();
    }
    createMobileConent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { MobileContentComponent, InternalMobileContentComponent } = yield Promise.all(/*! import() | modules-mobile-content-mobile-content-component */[__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~23e70d00"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~9f51e9ea"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~d5cf2ccb"), __webpack_require__.e("common"), __webpack_require__.e("modules-mobile-content-mobile-content-component")]).then(__webpack_require__.bind(null, /*! ./modules/mobile-content/mobile-content.component */ "./src/app/main/modules/main-content/modules/mobile-content/mobile-content.component.ts"));
            const factory = yield this.compiler.compileModuleAsync(InternalMobileContentComponent);
            const ref = factory.create(this.injector);
            const mobileContentFactory = this.componentFactoryResolver.resolveComponentFactory(MobileContentComponent);
            this.mobileContentContainer.createComponent(mobileContentFactory, null, this.injector, [], ref);
        });
    }
    createLargeScreenConent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { LargeScreenContentComponent, InternalLargeScreenContentModule } = yield Promise.all(/*! import() | modules-larger-screen-content-large-screen-content-component */[__webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~968e89d7"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~982dab07"), __webpack_require__.e("default~main-modules-login-login-module~modules-larger-screen-content-large-screen-content-component~23e70d00"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~9f51e9ea"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~shared-modules-home-home-module"), __webpack_require__.e("default~modules-larger-screen-content-large-screen-content-component~modules-mobile-content-mobile-c~d5cf2ccb"), __webpack_require__.e("modules-larger-screen-content-large-screen-content-component")]).then(__webpack_require__.bind(null, /*! ./modules/larger-screen-content/large-screen-content.component */ "./src/app/main/modules/main-content/modules/larger-screen-content/large-screen-content.component.ts"));
            const factory = yield this.compiler.compileModuleAsync(InternalLargeScreenContentModule);
            const ref = factory.create(this.injector);
            const largeScreenContentFactory = this.componentFactoryResolver.resolveComponentFactory(LargeScreenContentComponent);
            this.largeScreenContentContainer.createComponent(largeScreenContentFactory, null, this.injector, [], ref);
        });
    }
    ngOnDestroy() {
        var _a, _b;
        this.destory$.next();
        this.destory$.complete();
        (_a = this.mobileContentContainer) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = this.largeScreenContentContainer) === null || _b === void 0 ? void 0 : _b.clear();
    }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_4__["GridService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainContentComponent, selectors: [["app-main-content"]], viewQuery: function MainContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mobileContentContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.largeScreenContentContainer = _t.first);
    } }, decls: 4, vars: 2, consts: [["id", "page-container"], ["id", "content-wrap"], [4, "ngIf"], ["mobileContent", ""], ["largeScreenContent", ""]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainContentComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainContentComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeView === "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeView === "large-screen");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["#page-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n}\n\n#content-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 2.5rem;\n  \n}\n\n#footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2dpZXJkZXJ1aWp0ZXIvUHJvamVjdHMvbW9udGVwb2VsaS9hcHBzL2NsaWVudC9zcmMvYXBwL21haW4vbW9kdWxlcy9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiYXBwcy9jbGllbnQvc3JjL2FwcC9tYWluL21vZHVsZXMvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQTJCLGtCQUFBO0FDRTdCOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFBMkIsa0JBQUE7QUNHN0I7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvbWFpbi9tb2R1bGVzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jY29udGVudC13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgICAgLyogRm9vdGVyIGhlaWdodCAqL1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNXJlbTsgICAgICAgICAgICAvKiBGb290ZXIgaGVpZ2h0ICovXG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iLCIjcGFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jY29udGVudC13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgLyogRm9vdGVyIGhlaWdodCAqL1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgLyogRm9vdGVyIGhlaWdodCAqL1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-content',
                templateUrl: './main-content.component.html',
                styleUrls: ['main-content.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _shared_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_4__["GridService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { mobileContentContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mobileContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false }]
        }], largeScreenContentContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['largeScreenContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/main/modules/main-content/main-content.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/modules/main-content/main-content.module.ts ***!
  \******************************************************************/
/*! exports provided: MainContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentModule", function() { return MainContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content.component */ "./src/app/main/modules/main-content/main-content.component.ts");
/* harmony import */ var _main_content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content-routing.module */ "./src/app/main/modules/main-content/main-content-routing.module.ts");





class MainContentModule {
}
MainContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainContentModule });
MainContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainContentModule_Factory(t) { return new (t || MainContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainContentRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainContentModule, { declarations: [_main_content_component__WEBPACK_IMPORTED_MODULE_2__["MainContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainContentRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_content_component__WEBPACK_IMPORTED_MODULE_2__["MainContentComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainContentRoutingModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/grid/grid.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/grid/grid.service.ts ***!
  \******************************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _static_files_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static-files/enums */ "./src/app/shared/static-files/enums.ts");






class GridService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.breakPoints = {
            xs: '(max-width: 575.99px)',
            sm: '(min-width: 576px) and (max-width: 767px)',
            md: '(min-width: 768px) and (max-width: 991px)',
            lg: '(min-width: 992px) and (max-width: 1439px)',
            xl: '(min-width: 1440px)'
        };
        this.breakPointPxValues = [
            this.breakPoints.xs,
            this.breakPoints.sm,
            this.breakPoints.md,
            this.breakPoints.lg,
            this.breakPoints.xl
        ];
    }
    // TODO: write a unit test for this
    gridChangeObservable() {
        return this.breakpointObserver
            .observe(this.breakPointPxValues)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((breakPointState) => {
            let activeGrid;
            Object.keys(this.breakPoints).forEach((grid) => {
                const breakPointPxValue = this.breakPoints[grid];
                const isBreakPoint = breakPointState.breakpoints[breakPointPxValue];
                if (isBreakPoint === true) {
                    activeGrid = grid;
                    return;
                }
            });
            return activeGrid;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((activeGrid) => {
            switch (activeGrid) {
                case 'xs':
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].EXTRA_SMALL;
                case 'sm':
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].SMALL;
                case 'md':
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].MEDIUM;
                case 'lg':
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].LARGE;
                case 'xl':
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].EXTRA_LARGE;
                default:
                    return _static_files_enums__WEBPACK_IMPORTED_MODULE_3__["GridSizes"].ALL;
            }
        }));
    }
}
GridService.ɵfac = function GridService_Factory(t) { return new (t || GridService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
GridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GridService, factory: GridService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-modules-main-content-main-content-module-es2015.js.map