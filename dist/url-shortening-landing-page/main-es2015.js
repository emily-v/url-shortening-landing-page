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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _model_Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Url */ "./src/app/model/Url.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AppComponent_div_19_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_19_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.copyUrl(url_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_19_button_5_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_19_button_6_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.longUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.shortUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !url_r1.copied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", url_r1.copied);
} }
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'url-shortening-landing-page';
        this.urlToShorten = '';
        this.urls = [];
        // -- Service methods - may create service component
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
    }
    submitUrl() {
        if (!this.urlToShorten || this.urlToShorten.length < 1) {
            this.showError();
            return;
        }
        this.newShortUrl();
    }
    newShortUrl() {
        let request = {};
        request['url'] = this.urlToShorten;
        let url = new _model_Url__WEBPACK_IMPORTED_MODULE_2__["Url"](this.urlToShorten);
        this.postUrlRequest(request)
            .subscribe((resp) => {
            url.shortUrl = 'https://rel.ink/' + resp.hashid;
            this.urls.push(url);
        }, (err) => {
            console.log('err', err);
        }, () => {
            this.reset();
        });
    }
    copyUrl(url) {
        let short = url.shortUrl;
        navigator.clipboard.writeText(short);
        this.setCopied(url);
    }
    reset() {
        this.urlToShorten = '';
        this.clearCopied();
    }
    clearCopied() {
        this.urls.forEach(url => url.copied = false);
    }
    setCopied(copiedUrl) {
        this.urls.forEach(url => {
            if (url.shortUrl == copiedUrl.shortUrl) {
                url.copied = true;
            }
            else {
                url.copied = false;
            }
        });
    }
    showError() {
        document.querySelector('.url-input').classList.add('error-border');
        document.querySelector('.error-text').classList.remove('hide-error');
    }
    clearError() {
        document.querySelector('.url-input').classList.remove('error-border');
        document.querySelector('.error-text').classList.add('hide-error');
    }
    postUrlRequest(url) {
        return this.http.post('https://rel.ink/api/links/', JSON.stringify(url), this.httpOptions);
    }
    getUrlInfoRequest(hash) {
        return this.http.get('https://rel.ink/api/links/' + hash);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 99, vars: 2, consts: [[1, "hero-img-container"], ["src", "./assets/images/illustration-working.svg", "alt", "person-working", 1, "hero-img"], [1, "main-content"], [1, "hero-description"], [1, "title-dk"], [1, "text-content"], [1, "btn", "btn-pill"], [1, "shorten-section", "clearfix"], [1, "shorten-container"], ["type", "text", "placeholder", "Shorten a link here...", 1, "url-input", 3, "ngModel", "ngModelChange", "focus"], [1, "error-text", "hide-error"], ["type", "button", 1, "btn", "btn-square", 3, "click"], [1, "url-card-container"], ["class", "url-card", 4, "ngFor", "ngForOf"], [1, "stats", "clearfix"], [1, "stats-header"], [1, "stats-details"], [1, "col-12-sm", "col-4-lg", "stats-card"], [1, "icon-container"], ["src", "./assets/images/icon-brand-recognition.svg", "alt", "graph icon", 1, "stats-icon"], [1, "stats-content"], [1, "vertical-line"], ["src", "./assets/images/icon-detailed-records.svg", "alt", "records icon", 1, "stats-icon"], ["src", "./assets/images/icon-fully-customizable.svg", "alt", "art icon", 1, "stats-icon"], [1, "boost"], [1, "boost-text"], [1, "col-12-sm", "col-4-lg", "footer-logo"], ["src", "./assets/images/logo-wt.svg", "alt", "Shortly", 1, "logo-img"], [1, "col-12-sm", "col-2-lg", "footer-section"], [1, "footer-section-title"], [1, "footer-section-list"], [1, "footer-section-list-item"], [1, "col-12-sm", "col-2-lg"], [1, "social-icons"], ["src", "./assets/images/icon-facebook.svg", "alt", "facebook link", 1, "social-icon"], ["src", "./assets/images/icon-twitter.svg", "alt", "twitter link", 1, "social-icon"], ["src", "./assets/images/icon-pinterest.svg", "alt", "pinterest link", 1, "social-icon"], ["src", "./assets/images/icon-instagram.svg", "alt", "instagram link", 1, "social-icon"], [1, "url-card"], [1, "url-long"], [1, "url-short"], ["class", "btn btn-square btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-square btn-dk", 4, "ngIf"], [1, "btn", "btn-square", "btn-primary", 3, "click"], [1, "btn", "btn-square", "btn-dk"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More than just shorter links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Build your brand\u2019s recognition and get detailed insights on how your links are performing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_13_listener($event) { return ctx.urlToShorten = $event; })("focus", function AppComponent_Template_input_focus_13_listener() { return ctx.clearError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Please add a link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.submitUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shorten It!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_div_19_Template, 7, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Advanced Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Track how your links are performing across the web with our advanced statistics dashboard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Brand Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Detailed Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Fully Customizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Boost your links today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Link Shortening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Branded Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.urlToShorten);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.urls);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".col-1-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-2-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-3-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-4-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-5-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-6-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-7-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-8-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-9-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-10-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-11-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.col-12-sm[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column;\n}\n\n.hero-img-container[_ngcontent-%COMP%] {\n  width: 95%;\n  overflow: hidden;\n  padding: 0 0 0 5%;\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  width: 130%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-content[_ngcontent-%COMP%]   .title-dk[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #35323e;\n  margin: 18px auto;\n}\n\n.main-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  color: #9e9aa7;\n  line-height: 1.75em;\n}\n\n.main-content[_ngcontent-%COMP%]   .btn-pill[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 0.6em 1.5em;\n  border: none;\n  color: #fff;\n  background: #2acfcf;\n  font-size: inherit;\n  font-weight: inherit;\n  border-radius: 1.5em;\n  width: 50%;\n}\n\n.hero-description[_ngcontent-%COMP%] {\n  margin-bottom: 4em;\n}\n\n.hero-description[_ngcontent-%COMP%]   .title-dk[_ngcontent-%COMP%] {\n  font-size: 2em;\n  line-height: 1.25em;\n}\n\n.hero-description[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.shorten-section[_ngcontent-%COMP%] {\n  background: linear-gradient(#fff 4.5em, #eef0f6 4.5em);\n}\n\n.shorten-container[_ngcontent-%COMP%] {\n  background-image: url('bg-shorten-mobile.svg');\n  background-repeat: no-repeat;\n  background-position-x: right;\n  background-position-y: top;\n  background-color: #3b3054;\n  border-radius: 10px;\n  display: flex;\n  flex-flow: column wrap;\n  padding: 1.5em;\n  margin: 0 5%;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .btn-square[_ngcontent-%COMP%], .shorten-container[_ngcontent-%COMP%]   .url-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 5px;\n  font-size: 1em;\n  font-family: \"Poppins\", sans-serif;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .url-input[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.1em;\n  padding-left: 5%;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .btn-square[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-bottom: 0;\n  color: #fff;\n  background-color: #2acfcf;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .error-border[_ngcontent-%COMP%] {\n  border: 1px solid #f46262;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: #f46262;\n  font-style: italic;\n  font-weight: 300;\n  font-size: 0.8em;\n  text-align: left;\n}\n\n.shorten-container[_ngcontent-%COMP%]   .hide-error[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.url-card-container[_ngcontent-%COMP%] {\n  background-color: #eef0f6;\n  padding-top: 0.5em;\n}\n\n.url-card[_ngcontent-%COMP%] {\n  margin: 5% 5% 0;\n  padding-bottom: 1em;\n  border-radius: 10px;\n  background-color: #fff;\n  text-align: left;\n}\n\n.url-card[_ngcontent-%COMP%]   .url-long[_ngcontent-%COMP%] {\n  padding: 1em;\n  border-bottom: 1px solid #9e9aa7;\n  color: #35323e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.url-card[_ngcontent-%COMP%]   .url-short[_ngcontent-%COMP%] {\n  padding: 1em;\n  color: #2acfcf;\n}\n\n.url-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: block;\n  padding: 0.5em;\n  border: none;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 1em;\n  font-weight: 700;\n  color: #fff;\n}\n\n.url-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #2acfcf;\n}\n\n.url-card[_ngcontent-%COMP%]   .btn-dk[_ngcontent-%COMP%] {\n  background-color: #3b3054;\n}\n\n.stats[_ngcontent-%COMP%] {\n  padding-top: 4em;\n  padding-bottom: 4em;\n  border: 1px solid #eef0f6;\n  background: #eef0f6;\n}\n\n.stats-header[_ngcontent-%COMP%] {\n  margin-bottom: 3em;\n}\n\n.stats-header[_ngcontent-%COMP%]   .title-dk[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.stats-details[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  background: linear-gradient(#eef0f6 2.25em, #fff 2.25em);\n  border-radius: 5px;\n}\n\n.stats-details[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  background-color: #3b3054;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.stats-details[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  background-color: #3b3054;\n  border: none;\n}\n\n.stats-details[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .title-dk[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n\n.stats-details[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.stats-details[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 0.5em;\n  background: #2acfcf;\n  margin: 0 auto;\n}\n\n.boost[_ngcontent-%COMP%] {\n  background-image: url('bg-boost-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  background-color: #3b3054;\n  display: flex;\n  flex-flow: column wrap;\n  padding: 4em 0;\n  border-bottom: 1px solid #3b3054;\n}\n\n.boost[_ngcontent-%COMP%]   .boost-text[_ngcontent-%COMP%] {\n  font-size: 1.33em;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 1em;\n}\n\n.boost[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background: #232127;\n  text-align: center;\n  padding: 2.5em 0;\n  border-top: 1px solid #3b3054;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: 2em;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-section-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-section-list[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-section-list-item[_ngcontent-%COMP%] {\n  color: #bfbfbf;\n  line-height: 2em;\n}\n\nfooter[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media only screen and (min-width: 600px) {\n  .col-1-lg[_ngcontent-%COMP%] {\n    width: 8.3333333333%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-2-lg[_ngcontent-%COMP%] {\n    width: 16.6666666667%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-3-lg[_ngcontent-%COMP%] {\n    width: 25%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-4-lg[_ngcontent-%COMP%] {\n    width: 33.3333333333%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-5-lg[_ngcontent-%COMP%] {\n    width: 41.6666666667%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-6-lg[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-7-lg[_ngcontent-%COMP%] {\n    width: 58.3333333333%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-8-lg[_ngcontent-%COMP%] {\n    width: 66.6666666667%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-9-lg[_ngcontent-%COMP%] {\n    width: 75%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-10-lg[_ngcontent-%COMP%] {\n    width: 83.3333333333%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-11-lg[_ngcontent-%COMP%] {\n    width: 91.6666666667%;\n    float: left;\n    border: 1px solid blue;\n  }\n\n  .col-12-lg[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    border: 1px solid blue;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbWlseS9Eb2N1bWVudHMvQ29kZVByb2plY3RzL3VybC1zaG9ydGVuaW5nLWxhbmRpbmctcGFnZS1tYXN0ZXIvdXJsLXNob3J0ZW5pbmctbGFuZGluZy1wYWdlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvRW1pbHkvRG9jdW1lbnRzL0NvZGVQcm9qZWN0cy91cmwtc2hvcnRlbmluZy1sYW5kaW5nLXBhZ2UtbWFzdGVyL3VybC1zaG9ydGVuaW5nLWxhbmRpbmctcGFnZS9zcmMvc3R5bGluZ3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNMUjs7QURDSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRVI7O0FETkk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1NSOztBRGJJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNnQlI7O0FEcEJJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUN1QlI7O0FEM0JJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUM4QlI7O0FEbENJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNxQ1I7O0FEekNJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUM0Q1I7O0FEaERJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNtRFI7O0FEdkRJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUMwRFI7O0FEOURJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxh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QUdBLFdBQUE7SUFDQSxzQkFBQTtFQ3dIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxpbmdzL3ZhcmlhYmxlc1wiO1xuXG5cbi8vIC0tIERFRkFVTFQgLyBNT0JJTEUgU1RZTEVTIC0tIFxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XG4gICAgJHc6ICgkaSAvIDEyKSAqIDEwMCU7XG4gICAgLmNvbC0jeyRpfS1zbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlIC0gKCRndXR0ZXItaG9yaXpvbnRhbCAqIDIpOyBcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIH1cbn1cblxuLmhlcm8taW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCUgLSAkZ3V0dGVyLWhvcml6b250YWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDAgMCAkZ3V0dGVyLWhvcml6b250YWw7XG59XG5cbi5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDEzMCU7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAudGl0bGUtZGsge1xuICAgICAgICBmb250LXdlaWdodDogJGhlYXZ5O1xuICAgICAgICBjb2xvcjogJGhlYWRpbmctY29sb3ItZGs7XG4gICAgICAgIG1hcmdpbjogJGRlZmF1bHQtZm9udC1zaXplIGF1dG87XG4gICAgfVxuXG4gICAgLnRleHQtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1kaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgICB9XG5cbiAgICAuYnRuLXBpbGwge1xuICAgICAgICBAaW5jbHVkZSBidG4oMS41ZW0sIDUwJSk7XG4gICAgfVxuICAgIFxufVxuXG4uaGVyby1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNGVtO1xuXG4gICAgLnRpdGxlLWRrIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gICAgfVxuICAgIFxuICAgIC50ZXh0LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxufVxuXG4uc2hvcnRlbi1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGJnLXd0IDQuNWVtLCAkYmctbHQgNC41ZW0pO1xuICAgIC8vIF4gZ3JheSBiYWNrZ3JvdW5kIHN0YXJ0cyB+aGFsZndheSBkb3duIHNlY3Rpb25cbn1cbi5zaG9ydGVuLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy1zaG9ydGVuLW1vYmlsZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1kaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICBtYXJnaW46IDAgJGd1dHRlci1ob3Jpem9udGFsO1xuXG4gICAgJXNob3J0ZW4tZWxlbWVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdC1mb250LWZhbWlseTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLnVybC1pbnB1dCB7XG4gICAgICAgIEBleHRlbmQgJXNob3J0ZW4tZWxlbWVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjFlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAuYnRuLXNxdWFyZSB7XG4gICAgICAgIEBleHRlbmQgJXNob3J0ZW4tZWxlbWVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBjb2xvcjogJHRleHQtY29sb3ItbHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcHJpbWFyeTtcbiAgICB9XG5cbiAgICAuZXJyb3ItYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGVycm9yO1xuICAgIH1cblxuICAgIC5lcnJvci10ZXh0IHtcbiAgICAgICAgY29sb3I6ICRlcnJvcjtcbiAgICAgICAgZm9udC1zdHlsZTogJGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRsaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5oaWRlLWVycm9yIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi51cmwtY2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1sdDtcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcbn1cbi51cmwtY2FyZCB7XG4gICAgbWFyZ2luOiAkZ3V0dGVyLWhvcml6b250YWwgJGd1dHRlci1ob3Jpem9udGFsIDA7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13dDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgLnVybC1sb25nIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFjY2VudC1neTtcbiAgICAgICAgY29sb3I6ICRoZWFkaW5nLWNvbG9yLWRrO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gICAgLnVybC1zaG9ydCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtcHJpbWFyeTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkaGVhdnk7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1sdDtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXByaW1hcnk7XG4gICAgfVxuICAgIC5idG4tZGsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXNlY29uZGFyeTtcbiAgICB9XG59XG5cbi5zdGF0cyB7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiZy1sdDsgLy8gcHJldmVudHMgbWFyZ2luIGNvbGxhcHNpbmdcbiAgICBiYWNrZ3JvdW5kOiAkYmctbHQ7XG59XG5cbi5zdGF0cy1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICAudGl0bGUtZGsge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn1cblxuLnN0YXRzLWRldGFpbHMge1xuICAgIFxuICAgIC5zdGF0cy1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRiZy1sdCAyLjI1ZW0sICRiZy13dCAyLjI1ZW0pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctZGs7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMtaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctZGs7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLWRrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cy1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52ZXJ0aWNhbC1saW5lIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIHdpZHRoOiAuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYWNjZW50LXByaW1hcnk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbn1cblxuLmJvb3N0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLWJvb3N0LW1vYmlsZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctZGs7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIHBhZGRpbmc6IDRlbSAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYmctZGs7XG4gICAgLmJvb3N0LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEuMzNlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRoZWF2eTtcbiAgICAgICAgY29sb3I6ICRoZWFkaW5nLWNvbG9yLWx0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuZm9vdGVyIHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAkYmctZm9vdGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyLjVlbSAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmctZGs7XG4gICAgXG4gICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIH1cbiAgICAuZm9vdGVyLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICBjb2xvcjogJHRleHQtY29sb3ItbHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkaGVhdnk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4gICAgLmZvb3Rlci1zZWN0aW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICB9XG4gICAgLmZvb3Rlci1zZWN0aW9uLWxpc3QtaXRlbSB7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1neTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICB9XG4gICAgLnNvY2lhbC1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwIC41ZW07XG4gICAgfVxufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cblxuLy8gLS0gREVTS1RPUCBTVFlMRVMgLS1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcbiAgICAgICAgJHc6ICgkaSAvIDEyKSAqIDEwMCU7XG4gICAgICAgIC5jb2wtI3skaX0tbGcge1xuICAgICAgICAgICAgd2lkdGg6ICR3OyBcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi5jb2wtMS1zbSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLmNvbC0yLXNtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uY29sLTMtc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jb2wtNC1zbSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLmNvbC01LXNtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uY29sLTYtc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jb2wtNy1zbSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLmNvbC04LXNtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uY29sLTktc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jb2wtMTAtc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jb2wtMTEtc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jb2wtMTItc20ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5oZXJvLWltZy1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDAgMCA1JTtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IDEzMCU7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1jb250ZW50IC50aXRsZS1kayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzUzMjNlO1xuICBtYXJnaW46IDE4cHggYXV0bztcbn1cbi5tYWluLWNvbnRlbnQgLnRleHQtY29udGVudCB7XG4gIGNvbG9yOiAjOWU5YWE3O1xuICBsaW5lLWhlaWdodDogMS43NWVtO1xufVxuLm1haW4tY29udGVudCAuYnRuLXBpbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAuNmVtIDEuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMmFjZmNmO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmhlcm8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG4uaGVyby1kZXNjcmlwdGlvbiAudGl0bGUtZGsge1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbn1cbi5oZXJvLWRlc2NyaXB0aW9uIC50ZXh0LWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zaG9ydGVuLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiA0LjVlbSwgI2VlZjBmNiA0LjVlbSk7XG59XG5cbi5zaG9ydGVuLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvYmctc2hvcnRlbi1tb2JpbGUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzA1NDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgcGFkZGluZzogMS41ZW07XG4gIG1hcmdpbjogMCA1JTtcbn1cbi5zaG9ydGVuLWNvbnRhaW5lciAuYnRuLXNxdWFyZSwgLnNob3J0ZW4tY29udGFpbmVyIC51cmwtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuLnNob3J0ZW4tY29udGFpbmVyIC51cmwtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbi5zaG9ydGVuLWNvbnRhaW5lciAuYnRuLXNxdWFyZSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmY2Y7XG59XG4uc2hvcnRlbi1jb250YWluZXIgLmVycm9yLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNDYyNjI7XG59XG4uc2hvcnRlbi1jb250YWluZXIgLmVycm9yLXRleHQge1xuICBjb2xvcjogI2Y0NjI2MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNob3J0ZW4tY29udGFpbmVyIC5oaWRlLWVycm9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVybC1jYXJkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYwZjY7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLnVybC1jYXJkIHtcbiAgbWFyZ2luOiA1JSA1JSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnVybC1jYXJkIC51cmwtbG9uZyB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTlhYTc7XG4gIGNvbG9yOiAjMzUzMjNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi51cmwtY2FyZCAudXJsLXNob3J0IHtcbiAgcGFkZGluZzogMWVtO1xuICBjb2xvcjogIzJhY2ZjZjtcbn1cbi51cmwtY2FyZCAuYnRuIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnVybC1jYXJkIC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmY2Y7XG59XG4udXJsLWNhcmQgLmJ0bi1kayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjMwNTQ7XG59XG5cbi5zdGF0cyB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWYwZjY7XG4gIGJhY2tncm91bmQ6ICNlZWYwZjY7XG59XG5cbi5zdGF0cy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG4uc3RhdHMtaGVhZGVyIC50aXRsZS1kayB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5zdGF0cy1kZXRhaWxzIC5zdGF0cy1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlZWYwZjYgMi4yNWVtLCAjZmZmIDIuMjVlbSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zdGF0cy1kZXRhaWxzIC5zdGF0cy1jYXJkIC5pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzA1NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN0YXRzLWRldGFpbHMgLnN0YXRzLWNhcmQgLnN0YXRzLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzMDU0O1xuICBib3JkZXI6IG5vbmU7XG59XG4uc3RhdHMtZGV0YWlscyAuc3RhdHMtY2FyZCAudGl0bGUtZGsge1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cbi5zdGF0cy1kZXRhaWxzIC5zdGF0cy1jYXJkIC5zdGF0cy1jb250ZW50IHtcbiAgcGFkZGluZzogMWVtO1xufVxuLnN0YXRzLWRldGFpbHMgLnZlcnRpY2FsLWxpbmUge1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiAjMmFjZmNmO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJvb3N0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy1ib29zdC1tb2JpbGUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiMzA1NDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgcGFkZGluZzogNGVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2IzMDU0O1xufVxuLmJvb3N0IC5ib29zdC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjMzZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uYm9vc3QgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMyMzIxMjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMi41ZW0gMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYjMwNTQ7XG59XG5mb290ZXIgLmZvb3Rlci1sb2dvIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xufVxuZm9vdGVyIC5mb290ZXItc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5mb290ZXIgLmZvb3Rlci1zZWN0aW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbmZvb3RlciAuZm9vdGVyLXNlY3Rpb24tbGlzdC1pdGVtIHtcbiAgY29sb3I6ICNiZmJmYmY7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5mb290ZXIgLnNvY2lhbC1pY29uIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC0xLWxnIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9XG5cbiAgLmNvbC0yLWxnIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxuXG4gIC5jb2wtMy1sZyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9XG5cbiAgLmNvbC00LWxnIHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxuXG4gIC5jb2wtNS1sZyB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIH1cblxuICAuY29sLTYtbGcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxuXG4gIC5jb2wtNy1sZyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIH1cblxuICAuY29sLTgtbGcge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9XG5cbiAgLmNvbC05LWxnIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIH1cblxuICAuY29sLTEwLWxnIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxuXG4gIC5jb2wtMTEtbGcge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9XG5cbiAgLmNvbC0xMi1sZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgfVxufSIsIiRjeWFuOiBoc2woMTgwLCA2NiUsIDQ5JSk7XG4kZGFyay12aW9sZXQ6IGhzbCgyNTcsIDI3JSwgMjYlKTtcbiRyZWQ6IGhzbCgwLCA4NyUsIDY3JSk7XG4kZ3JheTogaHNsKDAsIDAlLCA3NSUpO1xuJGdyYXlpc2gtdmlvbGV0OiBoc2woMjU3LCA3JSwgNjMlKTtcbiRsaWdodC12aW9sZXQ6IFx0aHNsKDIyNSwgMzMlLCA5NSUpO1xuJHZlcnktZGFyay1ibHVlOiBoc2woMjU1LCAxMSUsIDIyJSk7XG4kdmVyeS1kYXJrLXZpb2xldDogaHNsKDI2MCwgOCUsIDE0JSk7XG4kd2hpdGU6ICNmZmY7XG5cbiRoZWFkaW5nLWNvbG9yLWRrOiAkdmVyeS1kYXJrLWJsdWU7XG4kaGVhZGluZy1jb2xvci1sdDogJHdoaXRlO1xuJHRleHQtY29sb3ItZGs6ICRncmF5aXNoLXZpb2xldDtcbiR0ZXh0LWNvbG9yLWx0OiAkd2hpdGU7XG4kdGV4dC1jb2xvci1neTogJGdyYXk7XG4kbmF2LXNlY29uZGFyeTogJGdyYXlpc2gtdmlvbGV0O1xuJGJnLWRrOiAkZGFyay12aW9sZXQ7XG4kYmctbHQ6ICRsaWdodC12aW9sZXQ7XG4kYmctd3Q6ICR3aGl0ZTtcbiRiZy1mb290ZXI6ICR2ZXJ5LWRhcmstdmlvbGV0O1xuJGFjY2VudC1wcmltYXJ5OiAkY3lhbjtcbiRhY2NlbnQtc2Vjb25kYXJ5OiAkZGFyay12aW9sZXQ7XG4kYWNjZW50LWd5OiAkZ3JheWlzaC12aW9sZXQ7XG4kZXJyb3I6ICRyZWQ7XG5cbiRkZWZhdWx0LWZvbnQtc2l6ZTogMThweDtcbiRkZWZhdWx0LWZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4kbGlnaHQ6IDMwMDtcbiRub3JtYWw6IDUwMDtcbiRoZWF2eTogNzAwO1xuJGl0YWxpYzogaXRhbGljO1xuXG4kZ3V0dGVyLWhvcml6b250YWw6IDUlO1xuJGd1dHRlci12ZXJ0aWNhbDogOCU7XG5cbkBtaXhpbiBidG4oJGJyLCAkdykge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IC42ZW0gMS41ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvci1sdDtcbiAgICBiYWNrZ3JvdW5kOiAkYWNjZW50LXByaW1hcnk7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRicjtcbiAgICB3aWR0aDogJHc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/Url.ts":
/*!******************************!*\
  !*** ./src/app/model/Url.ts ***!
  \******************************/
/*! exports provided: Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
class Url {
    constructor(longUrl) {
        this.longUrl = longUrl;
        this.copied = false;
    }
}


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NavComponent_nav_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor() {
        this.showNav = false;
    }
    ngOnInit() {
    }
    toggleNav() {
        this.showNav = !this.showNav;
        if (this.showNav) {
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 4, vars: 1, consts: [["src", "././assets/images/logo.svg", "alt", "Shortly", 1, "logo-img"], ["src", "././assets/images/hamburger.png", "alt", "expand menu", 1, "menu-icon", 3, "click"], ["class", "mobile-nav", 4, "ngIf"], [1, "mobile-nav"], [1, "nav-list"], [1, "nav-item"], [1, "login-options"], [1, "btn", "btn-pill"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_2_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavComponent_nav_3_Template, 13, 0, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["header[_ngcontent-%COMP%] {\n  padding: 8% 5%;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 10px auto 0;\n  padding: 2em 0;\n  border-radius: 10px;\n  text-align: center;\n  color: #fff;\n  background: #3b3054;\n  line-height: 2.75em;\n  position: fixed;\n  left: 5%;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #9e9aa7;\n  margin: 0 5%;\n  padding-bottom: 1em;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%]   .btn-pill[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 0.6em 1.5em;\n  border: none;\n  color: #fff;\n  background: #2acfcf;\n  font-size: inherit;\n  font-weight: inherit;\n  border-radius: 1.5em;\n  width: 90%;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbWlseS9Eb2N1bWVudHMvQ29kZVByb2plY3RzL3VybC1zaG9ydGVuaW5nLWxhbmRpbmctcGFnZS1tYXN0ZXIvdXJsLXNob3J0ZW5pbmctbGFuZGluZy1wYWdlL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9FbWlseS9Eb2N1bWVudHMvQ29kZVByb2plY3RzL3VybC1zaG9ydGVuaW5nLWxhbmRpbmctcGFnZS1tYXN0ZXIvdXJsLXNob3J0ZW5pbmctbGFuZGluZy1wYWdlL3NyYy9zdHlsaW5ncy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdFUkk7RUZTSixtQkVoQlU7RUZpQlYsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0RKOztBREdJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7QUNGUjs7QURJUTtFRUtKLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FoQ0k7RUFpQ0osbUJBekNHO0VBMENILGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkZacUI7RUVhckIsVUZiNEI7RUFDcEIsZUFBQTtBQ09aIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsaW5ncy92YXJpYWJsZXNcIjtcblxuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAkZ3V0dGVyLXZlcnRpY2FsICRndXR0ZXItaG9yaXpvbnRhbDtcbn1cblxuLm1lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubW9iaWxlLW5hdiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xuICAgIHBhZGRpbmc6IDJlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvci1sdDtcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGs7XG4gICAgbGluZS1oZWlnaHQ6IDIuNzVlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNSU7XG5cbiAgICAubmF2LWxpc3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5hdi1zZWNvbmRhcnk7XG4gICAgICAgIG1hcmdpbjogMCA1JTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICB9XG5cbiAgICAubG9naW4tb3B0aW9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAuYnRuLXBpbGwge1xuICAgICAgICAgICAgQGluY2x1ZGUgYnRuKDEuNWVtLCA5MCUpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgfVxufSIsImhlYWRlciB7XG4gIHBhZGRpbmc6IDglIDUlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubW9iaWxlLW5hdiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjM2IzMDU0O1xuICBsaW5lLWhlaWdodDogMi43NWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUlO1xufVxuLm1vYmlsZS1uYXYgLm5hdi1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTlhYTc7XG4gIG1hcmdpbjogMCA1JTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi5tb2JpbGUtbmF2IC5sb2dpbi1vcHRpb25zIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLm1vYmlsZS1uYXYgLmxvZ2luLW9wdGlvbnMgLmJ0bi1waWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwLjZlbSAxLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzJhY2ZjZjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn0iLCIkY3lhbjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuJGRhcmstdmlvbGV0OiBoc2woMjU3LCAyNyUsIDI2JSk7XG4kcmVkOiBoc2woMCwgODclLCA2NyUpO1xuJGdyYXk6IGhzbCgwLCAwJSwgNzUlKTtcbiRncmF5aXNoLXZpb2xldDogaHNsKDI1NywgNyUsIDYzJSk7XG4kbGlnaHQtdmlvbGV0OiBcdGhzbCgyMjUsIDMzJSwgOTUlKTtcbiR2ZXJ5LWRhcmstYmx1ZTogaHNsKDI1NSwgMTElLCAyMiUpO1xuJHZlcnktZGFyay12aW9sZXQ6IGhzbCgyNjAsIDglLCAxNCUpO1xuJHdoaXRlOiAjZmZmO1xuXG4kaGVhZGluZy1jb2xvci1kazogJHZlcnktZGFyay1ibHVlO1xuJGhlYWRpbmctY29sb3ItbHQ6ICR3aGl0ZTtcbiR0ZXh0LWNvbG9yLWRrOiAkZ3JheWlzaC12aW9sZXQ7XG4kdGV4dC1jb2xvci1sdDogJHdoaXRlO1xuJHRleHQtY29sb3ItZ3k6ICRncmF5O1xuJG5hdi1zZWNvbmRhcnk6ICRncmF5aXNoLXZpb2xldDtcbiRiZy1kazogJGRhcmstdmlvbGV0O1xuJGJnLWx0OiAkbGlnaHQtdmlvbGV0O1xuJGJnLXd0OiAkd2hpdGU7XG4kYmctZm9vdGVyOiAkdmVyeS1kYXJrLXZpb2xldDtcbiRhY2NlbnQtcHJpbWFyeTogJGN5YW47XG4kYWNjZW50LXNlY29uZGFyeTogJGRhcmstdmlvbGV0O1xuJGFjY2VudC1neTogJGdyYXlpc2gtdmlvbGV0O1xuJGVycm9yOiAkcmVkO1xuXG4kZGVmYXVsdC1mb250LXNpemU6IDE4cHg7XG4kZGVmYXVsdC1mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuJGxpZ2h0OiAzMDA7XG4kbm9ybWFsOiA1MDA7XG4kaGVhdnk6IDcwMDtcbiRpdGFsaWM6IGl0YWxpYztcblxuJGd1dHRlci1ob3Jpem9udGFsOiA1JTtcbiRndXR0ZXItdmVydGljYWw6IDglO1xuXG5AbWl4aW4gYnRuKCRiciwgJHcpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAuNmVtIDEuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJHRleHQtY29sb3ItbHQ7XG4gICAgYmFja2dyb3VuZDogJGFjY2VudC1wcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiAkYnI7XG4gICAgd2lkdGg6ICR3O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Emily/Documents/CodeProjects/url-shortening-landing-page-master/url-shortening-landing-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map