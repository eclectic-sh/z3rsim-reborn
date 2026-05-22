webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/components/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__ = __webpack_require__("../../../../../src/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("../../../../../src/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_support_support_component__ = __webpack_require__("../../../../../src/components/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_changelog_changelog_component__ = __webpack_require__("../../../../../src/components/changelog/changelog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_main_menu_main_menu_component__["a" /* MainMenuComponent */] },
    { path: 'standard', component: __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */] },
    { path: 'open', component: __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */] },
    { path: 'inverted', component: __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */] },
    { path: 'qual', component: __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */] },
    { path: 'mystery', component: __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_5__components_support_support_component__["a" /* SupportComponent */] },
    { path: 'changelog', component: __WEBPACK_IMPORTED_MODULE_6__components_changelog_changelog_component__["a" /* ChangelogComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_popover__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_app_app_component__ = __webpack_require__("../../../../../src/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/components/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_game_game_component__ = __webpack_require__("../../../../../src/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__ = __webpack_require__("../../../../../src/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_support_support_component__ = __webpack_require__("../../../../../src/components/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_changelog_changelog_component__ = __webpack_require__("../../../../../src/components/changelog/changelog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tp_log_tp_log_component__ = __webpack_require__("../../../../../src/components/tp-log/tp-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tp_log_redirect_tp_log_redirect_component__ = __webpack_require__("../../../../../src/components/tp-log-redirect/tp-log-redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_item_tracker_item_tracker_component__ = __webpack_require__("../../../../../src/components/item-tracker/item-tracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tracker_node_tracker_node_component__ = __webpack_require__("../../../../../src/components/tracker-node/tracker-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_node_node_component__ = __webpack_require__("../../../../../src/components/node/node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dungeon_items_dungeon_items_component__ = __webpack_require__("../../../../../src/components/dungeon-items/dungeon-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dungeon_item_count_dungeon_item_count_component__ = __webpack_require__("../../../../../src/components/dungeon-item-count/dungeon-item-count.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_item_line_item_line_component__ = __webpack_require__("../../../../../src/components/item-line/item-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_item_log_item_log_component__ = __webpack_require__("../../../../../src/components/item-log/item-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_options_options_component__ = __webpack_require__("../../../../../src/components/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_game_menu_game_menu_component__ = __webpack_require__("../../../../../src/components/game-menu/game-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_end_stats_end_stats_component__ = __webpack_require__("../../../../../src/components/end-stats/end-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_item_log_filter_pipe__ = __webpack_require__("../../../../../src/pipes/item-log-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_game_service__ = __webpack_require__("../../../../../src/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_seed_service__ = __webpack_require__("../../../../../src/services/seed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_item_array_service__ = __webpack_require__("../../../../../src/services/item-array.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_window_ref_service__ = __webpack_require__("../../../../../src/services/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_support_support_component__["a" /* SupportComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_changelog_changelog_component__["a" /* ChangelogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_tp_log_tp_log_component__["a" /* TpLogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tp_log_redirect_tp_log_redirect_component__["a" /* TpLogRedirectComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_item_tracker_item_tracker_component__["a" /* ItemTrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_tracker_node_tracker_node_component__["a" /* TrackerNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_node_node_component__["a" /* NodeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_dungeon_items_dungeon_items_component__["a" /* DungeonItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_dungeon_item_count_dungeon_item_count_component__["a" /* DungeonItemCountComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_item_line_item_line_component__["a" /* ItemLineComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_item_log_item_log_component__["a" /* ItemLogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_options_options_component__["a" /* OptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_game_menu_game_menu_component__["a" /* GameMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_end_stats_end_stats_component__["a" /* EndStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_item_log_filter_pipe__["a" /* ItemLogFilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_popover__["a" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__services_item_names_service__["a" /* ItemNamesService */],
                __WEBPACK_IMPORTED_MODULE_32__services_game_service__["a" /* GameService */],
                __WEBPACK_IMPORTED_MODULE_33__services_seed_service__["a" /* SeedService */],
                __WEBPACK_IMPORTED_MODULE_34__services_item_array_service__["a" /* ItemArrayService */],
                __WEBPACK_IMPORTED_MODULE_36__services_window_ref_service__["a" /* WindowRef */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>About this Website</h3>\n<p>\n  This tool is a personal project I've been working on to facilitate routing practice.\n  Based on the Z3 Randomizer I developed this tool to simulate a playthrough of that very closely, while still making it fast and quick,\n  so I could play a seed in 10 minutes instead of 2 hours.\n</p>\n<p>\n  I have always been super interested in the routing aspect of randomizer. I had approached it through a stats\n  perspective before (checking the spreadsheets of published data, making my own stats from batches of spoiler\n  logs, etc), but I always thought that practicing through playing was horribly inefficient. It's hard to play\n  multiple seeds in a small time-frame and it's hard to pay attention to what's going on while you're playing\n  at the same time, it's too easy to take things that may be mistakes for granted.\n</p>\n<p>\n  Since the randomizer started publishing huge batches of spoiler logs, and having already developed a simulator\n  for another game, the thought of simulating rando came kinda naturally.\n</p>\n<p>\n  Z3RSim is mobile friendly so you can play during your commute to work or for a quick seed before sleeping.\n  Hopefully you guys have as much fun with Rando as I have. <i aria-hidden=\"true\" class=\"fa fa-heart\"></i>\n</p>\n<p>\n  The design was heavily inspired by the <a href=\"https://www.twitch.tv/crossproduct\">Crossproduct</a>'s Randomizer Tracker. The game logic is based on the VT v30 version of the Randomizer.\n</p>\n<p>\n  If you have any suggestions, questions, bug reports or just want to say hi,\n  feel free to join the <a href=\"https://discord.gg/nPJpFQB\" target=\"_blank\">Z3RSim Discord</a>\n  or catch me streaming at my <a href=\"https://www.twitch.tv/kyong92\" target=\"_blank\">Twitch page</a>.\n</p>\n"

/***/ }),

/***/ "../../../../../src/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/components/about/about.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".whole-app {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-direction:column;\n  flex-direction:column;\n  -ms-flex-pack:justify;\n  justify-content:space-between;\n  -ms-flex-align:center;\n  align-items:center;\n  min-height:100vh\n}\n\n.dark-theme {\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color)\n}\n\n.container {\n  margin-top:3%\n}\n\n.deobf-banner {\n  background-color:#fff3cd;\n  color:#664d03;\n  border:1px solid #ffecb5;\n  border-radius:4px;\n  padding:12px 16px;\n  margin-bottom:20px;\n  font-size:14px;\n  line-height:1.5\n}\n\n.dark-theme .deobf-banner {\n  background-color:#3d2f05;\n  color:#ffecb5;\n  border-color:#664d03\n}\n\n.top-container {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-pack:justify;\n  justify-content:space-between;\n  -ms-flex-wrap:nowrap;\n  flex-wrap:nowrap;\n  -ms-flex-align:center;\n  align-items:center\n}\n\n.top-container-title {\n  margin:10px\n}\n\n.title {\n  margin-bottom:0;\n  cursor:pointer\n}\n\n.dark-theme * .title {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color)\n}\n\n.version-text {\n  font-size:14px;\n  color:#555\n}\n\n.dark-theme * .version-text {\n  color:var(--dark-text-light-color);\n  color:var(--dark-text-light-color)\n}\n\n.in-between {\n  -ms-flex-positive:2;\n  flex-grow:2\n}\n\n.navbar {\n  margin-bottom:0;\n  border-radius:0\n}\n\nfooter {\n  background-color:#333;\n  color:#ccc;\n  text-align:center;\n  width:100%;\n  padding:1rem;\n  padding-top:2rem;\n  margin-top:10px;\n  z-index:5\n}\n\n.fa-twitter {\n  font-size:24px\n}\n\n.green-text {\n  color:#90ee90\n}\n\n.glitched-text {\n  color:#00bfff\n}\n\n.yellow-text {\n  color:#ff0\n}\n\n.white-text {\n  color:#fff\n}\n\n.blue-text {\n  color:#add8e6\n}\n\n@media (max-width:768px) {\n  .container {\n    padding:0;\n    margin-top:0\n  }\n  .top-container {\n    -ms-flex-direction:column;\n    flex-direction:column\n  }\n}\n\n@media (max-width:992px) {\n  .container {\n    width:100%\n  }\n}\n\n.dark-theme .modal-body, .dark-theme .modal-header {\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color);\n  color:var(--dark-text-color);\n  color:var(--dark-text-color)\n}\n\n.dark-theme .modal-header .close {\n  color:#fff;\n  opacity:1\n}\n\n.dark-theme * .btn-default {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color);\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color)\n}\n\n.dark-theme * .active, .dark-theme * .btn-default:active, .dark-theme * .btn-default:focus, .dark-theme * .btn-default:hover {\n  background-color:var(--dark-background-light-color);\n  background-color:var(--dark-background-light-color)\n}\n\n.dark-theme * .btn-default:active:hover {\n  background-color:var(--dark-background-med-color);\n  background-color:var(--dark-background-med-color)\n}\n\n.dark-theme * .btn.active {\n  box-shadow:inset 0 3px 5px rgba(0,0,0,.5)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-default\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" (click)=\"redirect('')\"><span class=\"not-selectable title stylized-font\">\n            Z3R Simulator : Reborn <span class=\"version-text\">v1</span>\n          </span> \n        </a>\n      </div>\n\n\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a type=\"button\" (click)=\"onToggleTheme()\">\n            <i class=\"{{buttonClass}}\"></i> {{colorMode}}</a></li>\n          <li><a (click)=\"openModal(howToTemplate)\">How To Play</a></li>\n          <li><a (click)=\"redirect('changelog')\">Changelog</a></li>\n          <li><a (click)=\"redirect('support')\">Support Us</a></li>\n          <li><a (click)=\"redirect('about')\">About</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n<div class=\"whole-app\" [class.dark-theme]=\"isDarkTheme\">\n  <div class=\"container\">\n    <!-- <div class=\"deobf-banner\" role=\"alert\">\n      <strong>Deobfuscation project notice.</strong>\n      This is a deobfuscated build of Z3R Simulator, published as a readable\n      starting point for people who want to fork, modify, or learn from the\n      original Angular 4 source. The logic matches the original bundle, but\n      the seed format it understands is the pre-2019 ALttPR API -\n      <strong>current seeds from alttpr.com will not load.</strong>\n      A future fork may bring the seed handling up to date.\n    </div> -->\n\n    <router-outlet></router-outlet>\n  </div>\n\n  <footer>\n    <p>\n      Join our <a href=\"https://discord.gg/nPJpFQB\" target=\"_blank\">Z3RSim Discord</a>\n    </p>\n    <p>\n      Community Maintained project - originally developed by Kyong92\n        <a href=\"https://www.twitch.tv/kyong92\" target=\"_blank\">\n          <img src=\"assets/twitch_glitch_icon.png\">\n        </a> -\n        <a href=\"https://twitter.com/kyong92\" target=\"_blank\">\n          <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n        </a>\n    </p>\n  </footer>\n</div>\n\n<ng-template #howToTemplate>\n  <div [class.dark-theme]=\"isDarkTheme\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">How to Play</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <h3>Z3R Simulator</h3>\n      <p>\n        Click on <span class=\"green-text outline-text\">Green</span> locations to open them.\n        The Item Tracker and Log are updated automatically.\n      </p>\n      <p>\n        Click on any location with a <span class=\"white-text outline-text\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n        to check what item it is before getting it.\n      </p>\n      <p>\n        Decide when to check the map or the medallions by using the <strong>buttons below the Map</strong>.\n        Listening to the dungeon music is also supported.\n        Those buttons are unlocked as you get the necessary items. They will also be used to Save and Quit and mirror between worlds.\n      </p>\n      <p>\n        Pay close attention to where you are in the map when travelling the Dark World,\n        you will need to use the right <img src=\"assets/node-icons/warp.png\">\n        <span class=\"blue-text outline-text\">Portals</span> to get to the right destinations.\n      </p>\n      <p>\n        You can search the Item Log to remember where you got something,\n        or filter out all those useless rupees.\n      </p>\n      <p>\n        You can play this just like you play a normal rando,\n        thinking where you would be and what you would do,\n        or just screw around and warp around the world getting everything.\n      </p>\n      <p>\n        On <strong>Advanced Overworld</strong> you won't have a easy map tracker saying what else is available.\n        You need to activate the flute in Kakariko and need to be on the correct locations to check maps.\n        It'll take longer, but it's even more faithful to the original experience.\n      </p>\n      <h3>Minor Glitches</h3>\n      <p>\n        If you activate <strong>Minor Glitches and Sequence Breaking</strong>,\n        the following options are unlocked:\n      </p>\n      <ul class=\"list-inline\">\n        <li>Dark Rooms</li>\n        <li>Fake Flippers</li>\n        <li>Water Walking</li>\n        <li>Super Bunny</li>\n        <li>Bomb Jumps</li>\n        <li>Hovering</li>\n      </ul>\n      <p>\n        Locations colored <span class=\"glitched-text outline-text\">Blue</span> are locations accessible through Minor Glitches\n      </p>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_window_ref_service__ = __webpack_require__("../../../../../src/services/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var appRef;
var AppComponent = (function () {
    function AppComponent(_windowRef, _modalService, _router) {
        this._windowRef = _windowRef;
        this._modalService = _modalService;
        this._router = _router;
        this.title = 'app';
        this.window = _windowRef.nativeWindow;
    }
    AppComponent.prototype.ngOnInit = function () {
        appRef = this;
        window.appRef = this;
        this.buttonClass = 'fa fa-moon-o';
        if (localStorage.getItem('isDarkTheme')) {
            this.isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
        }
        else {
            localStorage.setItem('isDarkTheme', 'false');
        }
        this.onToggleTheme(false);
        this.setColorModeText();
    };
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this._modalService.show(template);
    };
    AppComponent.prototype.onToggleTheme = function (toggle) {
        if (toggle === void 0) { toggle = true; }
        if (toggle) {
            this.isDarkTheme = !this.isDarkTheme;
        }
        if (this.isDarkTheme) {
            this.buttonClass = 'fa fa-moon-o';
            localStorage.setItem('isDarkTheme', 'true');
        }
        else {
            this.buttonClass = 'fa fa-sun-o';
            localStorage.setItem('isDarkTheme', 'false');
        }
        this.setColorModeText();
    };
    AppComponent.prototype.setColorModeText = function () {
        if (this.isDarkTheme) {
            this.colorMode = 'Dark Theme';
        }
        else {
            this.colorMode = 'Light Theme';
        }
    };
    AppComponent.prototype.redirect = function (route) {
        this._router.navigate(['/' + route]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/components/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/components/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_window_ref_service__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/components/changelog/changelog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/changelog/changelog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Changelog</h3>\n\n<accordion>\n  <accordion-group heading=\"v4 Changelog - v31 Tourney Prep\" isDisabled=\"true\" isOpen=\"true\">\n    <dl>\n      <dt>v31</dt>\n      <dd>v31 Logic has been implemented, including:</dd>\n      <dd>- Basic/Advanced Item Placement logic</dd>\n      <dd>- Item Acessibility</dd>\n      <dd>- Different Dungeon Item Shuffles</dd>\n      <dd>- Fast Ganon mode, where Agahnim 2 is not required</dd>\n      <dd>- Different conditions to enter Ganon's Tower or damage Ganon, with signs indicating what they are in the seed</dd>\n      <dd>- Assured Swords, where you start with a Fighter Sword</dd>\n      <dd>- Toggleable Hints</dd>\n      <dd>- and more, probably, there are too many new stuff</dd>\n      <dt>Tourney Qualifier Style Open Seeds</dt>\n      <dd>70,000 seeds were generated and are available to be played directly through our Open Seed menu</dd>\n      <dd>These seeds follow the same settings as the tourney qualifiers ending this week, the classic Open Mode 7/7 without anything super fancy</dd>\n      <dd>Since these seeds are pre-generated, with the same URL you can replay the same seed, or share with other people</dd>\n      <dd>As a reminder, these seeds are not compatible with the randomizer website, they're separate things</dd>\n      <dd>If you're interested in playing Open seeds, these are the recommended way of doing it</dd>\n      <dt>Mystery Seeds</dt>\n      <dd>With all these additions and ways of checking these settings in game, the mystery mode was created</dd>\n      <dd>Play seeds without knowing what their settings are, having to explore the game to discover what you need to do to beat the game</dd>\n      <dd>For more information, read the Mystery Seed generation tab</dd>\n      <dt>Minor Glitches Updates</dt>\n      <dd>First of all, all seeds are now played in the Minor Glitch allowed mode, as this mode was much more popular and with the new Advanced logic and some of the new possible glitches, this sounded like the best course of action right now</dd>\n      <dd>A multitude of minor glitches have been added, including:</dd>\n      <dd>- Mimic Clip, allowing the mimics in Right Side PoD and upstairs GT to be done without any equipment</dd>\n      <dd>- Hera Pot, allowing you to skip the Big Door in Tower of Hera using Hookshot</dd>\n      <dd>- Moldorm Bounce, allowing you to get past Moldorm 2 with a Sword</dd>\n      <dd>- Qirn Jump, allowing you to fake flippers in the river between West and East dark world from the left side</dd>\n      <dd>- Splash Delete Fake Flippers, allowing you to do fake flippers using certain items instead of requiring a screen transition</dd>\n      <dd>As always, it's recommended to judge by yourself if you should be using these during your playthroughs here, but having the knowledge that it's possible is a good thing</dd>\n    </dl>\n  </accordion-group>\n  <accordion-group heading=\"v3.3 Changelog - Enemizer and Triforce\" isOpen=\"true\">\n    <dl>\n      <dt>Enemizer</dt>\n      <dd>You can now apply Boss Shuffle Enemizer on top of any other setting. A quick explanation of Enemizer Modes:</dd>\n      <dd>- Disabled: Vanilla bosses</dd>\n      <dd>- Simple: The 10 Pendant and Crystal bosses + the 3 Ganon's Tower bosses are shuffled between themselves.</dd>\n      <dd>- Full: Similar to Simple, but 3 bosses chosen at random are duplicated</dd>\n      <dd>- Chaos: All bosses are chosen completely at random</dd>\n      <dd>Agahnim and Ganon is always vanilla</dd>\n      <dd>Enemies are also technically randomized, since that's what we usually play Enemizer for. Which means no Mimics.</dd>\n      <dd>- Right Side Palace of Darkness doesn't require the Bow. The boss still requires the Bow, because of the eye statue on the way.</dd>\n      <dd>- The way to the boss in Eastern Palace doesn't require the Bow</dd>\n      <dd>- The way to upstairs Ganon's Tower doesn't require the Bow (yes, you could have a bowless seed)</dd>\n      <dd>- You can go straight to the boss in Thieves Town without bombing the floor or going to the cell.</dd>\n      <dt>Triforce Hunt</dt>\n      <dd>Another option for the Goal. In Triforce Hunt we have 30 Triforce Pieces scattered around the world. When you collect your 20th piece, you instantly win.</dd>\n      <dd>Just like Pedestal Goal, in this one you cannot defeat Ganon.</dd>\n      <dd>You can get Triforce Piece hints</dd>\n      <dt>Added Dungeon Labels</dt>\n      <dd>With the introduction of Enemizer, labels indicating which dungeon is which were added.</dd>\n      <dt>Added Bug Net to the Tracker</dt>\n      <dd>With Swordless being a thing, the Bug Net can be a required item (Cape + Lamp + Bug Net + Non Hammer Weapon for Aga Tower), so it was added to the tracker</dd>\n      <dt>Shovel/Flute and Mushroom/Powder</dt>\n      <dd>The dual items were consolidated to save space for the Bug Net and Triforce Piece counter</dd>\n      <dt>Better End Stats</dt>\n      <dd>A few adjustments, mostly to the Item Info section</dd>\n      <dd>Medallions are shown when required to enter Misery Mire or Turtle Rock if that dungeon is required for the goal</dd>\n      <dd>Pendants are shown on Pedestal and All Dungeon goals</dd>\n      <dt>Fixes to Easy Mode</dt>\n      <dd>Swords and Lamps were going poof when playing more than one seed in a row, the issue is fixed now</dd>\n    </dl>\n  </accordion-group>\n  <accordion-group heading=\"v3.2 Changelog - All the Options\">\n    <dl>\n      <dt>New Interface</dt>\n      <dd>Some changes made to the presentation, with a new navigation bar and a few extra pages</dd>\n      <dt>New Options</dt>\n      <dd>With the change to generating the seeds directly, we can now finally support a plethora of different options\n        and customizations. Expert Swordless All Dungeons Keysanity or Standard Uncle Assured, whatever combination you\n        want to try is there, with even more options coming soon.\n      </dd>\n      <dt>Added Silver Arrows Hint</dt>\n      <dd>With the addition of Swordless and Ganon effectively requiring silver arrows in that mode, when you defeat\n        Agahnim 2 you'll receive the Silver Arrows Hint.\n      </dd>\n      <dt>New Pages</dt>\n      <dd>Added Changelog, where you can see each major version update so far</dd>\n      <dd>Added Support Us, where you can support the development of this website</dd>\n      <dd>Added About page, with some misc information on how this website came to be</dd>\n    </dl>\n  </accordion-group>\n\n  <accordion-group heading=\"v3.1 Changelog - Hints\">\n    <dl>\n      <dt>Hints</dt>\n      <dd>The new hint system added in v30 was finally added, simulating the original system as closely as possible</dd>\n      <dt>Checking past hints</dt>\n      <dd>Search the item log for \"hint\" to find them</dd>\n      <dt>Multiple Bug Fixes</dt>\n      <dd>Many many small bug fixes for inverted were applied</dd>\n    </dl>\n  </accordion-group>\n\n  <accordion-group heading=\"v3.0 Changelog - v30 and Inverted\">\n    <dl>\n      <dt>v30</dt>\n      <dd>The new version is out, and with that a\n        <a href=\"https://docs.google.com/document/d/1_DOyn5Rk7SFXw-hvCljD0ZZCWEzDmnT9LNPb-ypDFVs/edit\" target=\"_blank\">number of things</a>\n        have changed. You should go to the main randomizer discord to check them out. From now on, seeds on\n        Z3RSim are using v30 logic.</dd>\n      <dt>Seed Generation</dt>\n      <dd>After many struggles over multiple versions, we now use seeds generated straight from the website.\n        Which means any time a new change happens it will be updated immediately. No more desyncs like\n        happened before.</dd>\n      <dt>Inverted Mode</dt>\n      <dd>Probably one of the most anticipated features in a while, a whole new world state to play with,\n        Inverted, Normal Difficulty, Randomized Swords has been added to the simulator. Currently it's only\n        supported on the <strong>Simple Overworld</strong> and there's no plans to implement Inverted on\n        Advanced mode.</dd>\n      <dd>It's very possible that I missed something or the logic is wrong, so feel free to report with as\n        much detail as you can if you find an issue. But beware, this mode is very complicated to get your head\n        around at first and I would definitely recommend reading the\n        <a href=\"https://docs.google.com/document/d/1rzT6a9EWSQRdIvvWW7JmQJaNq3_Ao3Oi0IAubE2Ijso/edit\" target=\"_blank\">patch notes</a>\n        for it before tackling it.</dd>\n      <dt>216/216</dt>\n      <dd>Item location counts at the end stats are now equal to the normal game, so you can get that sweet\n        216/216, or do your best trying not to get it, but end up getting way too close anyways.</dd>\n      <dt>God Mode</dt>\n      <dd>If you're a fan of obscure glitches, or sequence breaks that aren't currently supported by the\n        simulator, there's a new secret toggle for a God Mode. While this mode is active you can access any\n        location, open any doors or chests without the items needed to complete it.</dd>\n      <dd>You can access this mode by clicking/touching the boots on the item tracker. This is not meant to\n        be how you usually use the sim, it's just a workaround if you want to do some crazy stuff.</dd>\n      <dt>New RNG</dt>\n      <dd>Another thing with v30 is seed numbers are not a thing anymore and with the simulator now using the\n        official source for seeds, we do not have a way to individually track seeds. There's <strong>no way to\n        re-generate the same seed on the simulator.</strong></dd>\n      <dd>For now, in favor of getting v30 out asap, you can use the simulator and play with new stuff right now.\n        I'll see if I can develop a solution for this problem in the future so you can share your seed.</dd>\n      <dt>Misc</dt>\n      <dd>Mushroom is no longer removed when getting the Witch item. This way if you want to tell yourself you\n        would have reset your console and done fake powder later, you can</dd>\n      <dd>Fixed Desert Ledge location name on Item Log</dd>\n      <dd>Added a hole to fall on Moldorm if you want to go back in the dungeon</dd>\n      <dd>Fixed a lot of mirror things on Advanced Overworld</dd>\n      <dd>Probably a few more minor things I forgot to note down over time</dd>\n    </dl>\n  </accordion-group>\n\n  <accordion-group heading=\"v2.0 Changelog - v29 and Overworld Maps\">\n    <dl>\n      <dt>v29</dt>\n      <dd>v29 is implemented! With support for both the good old Standard Mode and the new shiny Randomized\n        Weapon at Uncle for that hot tournament practice.</dd>\n      <dt>Advanced Overworld Maps</dt>\n      <dd>A much more faithful and longer experience, where you will need to navigate the overworld just like\n        in game. Routing becomes much more important, remembering locations being opened is relevant, and even\n        where do you mirror, chest sequencing, etc. Be prepared to spend a little more time to complete these.</dd>\n      <dt>Bug Fixes and Minor Improvements</dt>\n      <dd>Bombos in IP requiring sword, hookshotting the Bridge Chest in Misery Mire for keysanity routing and\n        probably a couple more things that I should have noted down to write here. There will probably be some\n        performance improvements soon, we'll see how the Advanced Maps play out.</dd>\n    </dl>\n  </accordion-group>\n\n  <accordion-group heading=\"v1.3 Changelog - Dark Mode and Rupee Count\">\n    <dl>\n      <dt>New Update</dt>\n      <dd>The website should notify if there's a new update. You may need to hard refresh the page for it to\n        work (shift+F5), but usually just refreshing should work.</dd>\n      <dt>Dark Mode</dt>\n      <dd>I love dark mode in websites/apps, but I'm not a great designer, so it's kinda ugly, but it works!\n        If you have suggestions to change the palette a little, feel free to do so, I'm no expert on this field.</dd>\n      <dt>Rupee Count</dt>\n      <dd>After so much demand I added a simple rupee counter below the item tracker. It serves no purpose\n        other than counting your rupees collected and will not restrict or enforce any locations, it's just for\n        reference.</dd>\n      <dt>Saving Options</dt>\n      <dd>Now anytime you change modes, your options are saved for next time, no more repeated clicking every\n        time you want to play the same setting again. This also applies to Dark Mode.</dd>\n      <dt>Bug Fixes</dt>\n      <dd>A couple bug fixes, most notable TR laser bridge now doable with Mirror Shield (that feeling when you\n        implement that feature but forget to actually use it in the code, sorry).</dd>\n    </dl>\n  </accordion-group>\n  <accordion-group heading=\"v1.2 Changelog - Item Visibility and Sequence Breaks\">\n    <dl>\n      <dt>Version Numbers</dt>\n      <dd>We have version numbers now. Now in the future if the version your browser is using is outdated, you'll\n        be notified of it so you can refresh your page.</dd>\n      <dt>Blue Squares</dt>\n      <dd>Blue squares now mark the locations where it's a sequence break to open. Reminder that if you get items\n        in these locations, the new places it opens will not necessarily be marked as blue!</dd>\n      <dt>Item Icons on visible items</dt>\n      <dd>Now it's much much easier to keep track of locations where you saw items that you couldn't get. This also\n        applies to dungeons where the item is on a torch or on the floor.</dd>\n      <dt>Image Loading</dt>\n      <dd>Slightly improved image loading</dd>\n    </dl>\n  </accordion-group>\n\n  <accordion-group heading=\"v1.1.2 Changelog - Small Glitches and Fixes\">\n    <dl>\n      <dt>Small Update</dt>\n      <dd>You can now Fake Powder (Mushroom not delivered + Cane of Somaria) in Minor Glitched Mode.</dd>\n      <dd>Fixed a door not showing as small key locked in Mire</dd>\n      <dd>Reading a Key on Pedestal/Tablets with Book now gives the Dungeon they're from, like the original randomizer</dd>\n      <dd>Better mobile UI for keysanity</dd>\n      <dd>Indication that you viewed items that can be seen but not grabbed yet</dd>\n      <dd>Using icons on the buttons for shorter buttons</dd>\n    </dl>\n  </accordion-group>\n  <accordion-group heading=\"v1.1 Changelog - Keysanity\">\n    <dl>\n      <dt>Keysanity</dt>\n      <dd>Keysanity was just added, just like the VT version. You need maps to know if dungeons are crystal/pendants, you\n        can also ask Sahasrahla and the Bomb Shop Guy for some dungeon information.</dd>\n    </dl>\n  </accordion-group>\n\n</accordion>\n"

/***/ }),

/***/ "../../../../../src/components/changelog/changelog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangelogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangelogComponent = (function () {
    function ChangelogComponent() {
    }
    ChangelogComponent.prototype.ngOnInit = function () { };
    ChangelogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-changelog',
            template: __webpack_require__("../../../../../src/components/changelog/changelog.component.html"),
            styles: [__webpack_require__("../../../../../src/components/changelog/changelog.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ChangelogComponent);
    return ChangelogComponent;
}());



/***/ }),

/***/ "../../../../../src/components/dungeon-item-count/dungeon-item-count.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  background-color: hsla(0, 0%, 59%, .5);\n  color: #fff;\n  margin: 0;\n  padding: 5px;\n  border-radius: 5px;\n  padding-right: 13px;\n  z-index: 1;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.icon {\n  height: 32px;\n  width: 32px;\n}\n\n.key-text {\n  margin-left: -5px;\n  float: right;\n  margin-top: 10px;\n}\n\n@media (max-width: 768px) {\n  p {\n    padding: 0;\n    border-radius: 3px;\n    padding-right: 5px;\n  }\n\n  .icon {\n    height: 12px;\n    width: 12px;\n  }\n\n  .key-text {\n    margin-left: 0;\n    margin-top: 6px;\n    font-size: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/dungeon-item-count/dungeon-item-count.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <img class=\"icon\" [src]=\"'assets/item-icons/bigKey' + (dungeonItems.hasBigKey ? '' : 'Empty') + '.png'\">\n  <img class=\"icon\" [src]=\"'assets/item-icons/map' + (dungeonItems.hasMap ? '' : 'Empty') + '.png'\">\n  <img class=\"icon\" [src]=\"'assets/item-icons/compass' + (dungeonItems.hasCompass ? '' : 'Empty') + '.png'\">\n  <img *ngIf=\"isChestCountShown\" class=\"icon\" [src]=\"'assets/dungeon-tracker-icons/chest' + getDungeonChestCountBg() + '.png'\">\n  <img class=\"icon\" src=\"assets/item-icons/smallKey.png\"><span class=\"key-text\">x{{ dungeonItems.smallKeys }}</span>\n</p>\n"

/***/ }),

/***/ "../../../../../src/components/dungeon-item-count/dungeon-item-count.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DungeonItemCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_prize_enum__ = __webpack_require__("../../../../../src/models/dungeon-prize.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DungeonItemCountComponent = (function () {
    function DungeonItemCountComponent() {
    }
    DungeonItemCountComponent.prototype.ngOnInit = function () {
        this.isChestCountShown =
            (this.dungeonItems.dungeonName !== 'Aga Tower' || this.config.dungeonItems === 'full') &&
                this.dungeonItems.dungeonName !== 'Ganons Tower' &&
                this.dungeonItems.dungeonName !== 'Hyrule Castle';
    };
    DungeonItemCountComponent.prototype.getDungeonChestCountBg = function () {
        var chestCount = this.dungeonItems.itemsLeft;
        if (this.dungeonItems.dungeonName === 'Aga Tower') {
            chestCount--;
            if (this.dungeonItems.isBossDefeated) {
                chestCount++;
            }
        }
        return chestCount;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_dungeon_prize_enum__["a" /* DungeonPrize */])
    ], DungeonItemCountComponent.prototype, "dungeonItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_config_model__["a" /* Config */])
    ], DungeonItemCountComponent.prototype, "config", void 0);
    DungeonItemCountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dungeon-items',
            template: __webpack_require__("../../../../../src/components/dungeon-item-count/dungeon-item-count.component.html"),
            styles: [__webpack_require__("../../../../../src/components/dungeon-item-count/dungeon-item-count.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DungeonItemCountComponent);
    return DungeonItemCountComponent;
}());



/***/ }),

/***/ "../../../../../src/components/dungeon-items/dungeon-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\n  position:relative;\n  width:100%;\n  padding-top:100%;\n  background-size:contain;\n  background-repeat:no-repeat;\n  background-position:50%;\n  background-color:#000\n}\n\n.aligned-right {\n  float:right\n}\n\napp-dungeon-items {\n  position:absolute;\n  top:0\n}\n\n.map-footer {\n  width:100%;\n  height:20px;\n  background-color:#000;\n  color:#fff;\n  text-align:center\n}\n\n.icon {\n  width:20px\n}\n\n@media (max-width:768px) {\n  .map-footer {\n    height:40px;\n    line-height:40px\n  }\n  .map-footer span {\n    display:inline-block;\n    vertical-align:middle;\n    line-height:normal\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/dungeon-items/dungeon-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\" [ngStyle]=\"{'background-image': getMapBg()}\" (click)=\"onMapClicked($event)\">\n  <div *ngIf=\"!currentDungeon\">\n    <app-node *ngFor=\"let location of gameService.overworldData[currentMap === 'light-world' ? 'lwLocations' : 'dwLocations']\"\n      nodeType=\"overworld\"\n      [nodeInfo]=\"location.mapNode\"\n      [items]=\"items\"\n      [config]=\"config\"\n      (click)=\"onNodeClick(location.mapNode)\"\n      (mouseover)=\"changeTooltip(location.mapNode)\"\n      (mouseleave)=\"clearTooltip()\">\n    </app-node>\n    <div *ngFor=\"let dungeon of gameService.dungeonsData\">\n      <app-node *ngIf=\"(gameService.lwDuns.indexOf(dungeon.name) > -1 && currentMap === 'light-world') || (gameService.lwDuns.indexOf(dungeon.name) === -1 && currentMap === 'dark-world')\"\n        nodeType=\"dungeon\"\n        [nodeInfo]=\"dungeon.mapNode\"\n        [dungeonItems]=\"items.getDungeonItems(dungeon.name)\"\n        [config]=\"config\"\n        (click)=\"onDungeonClick(dungeon.mapNode)\"\n        (mouseover)=\"changeTooltip(dungeon.mapNode)\"\n        (mouseleave)=\"clearTooltip()\">\n      </app-node>\n    </div>\n  </div>\n  <div *ngIf=\"currentDungeon\">\n    <div *ngFor=\"let node of currentDungeonMap.nodes\">\n      <app-node *ngIf=\"(node.accessibleSectionArray.indexOf(-1) > -1 || node.accessibleSectionArray.indexOf(items.currentRegionInMap) > -1) && (node.status !== 10 || items.mirror)\"\n        nodeType=\"inside-dungeon\"\n        [nodeInfo]=\"node.mapNode\"\n        [dungeonItems]=\"currentDungeonItems\"\n        [items]=\"items\"\n        [config]=\"config\"\n        (click)=\"onDungeonNodeClick(node.mapNode)\"\n        (mouseover)=\"changeTooltip(node.mapNode)\"\n        (mouseleave)=\"clearTooltip()\">\n      </app-node>\n    </div>\n    <app-node *ngIf=\"mirrorNode && mirrorMap === currentDungeonMap.id && (mirrorNode.accessibleSectionArray.indexOf(-1) > -1 || mirrorNode.accessibleSectionArray.indexOf(items.currentRegionInMap) > -1)\"\n      nodeType=\"inside-dungeon\"\n      [nodeInfo]=\"mirrorNode.mapNode\"\n      [dungeonItems]=\"currentDungeonItems\"\n      [items]=\"items\"\n      [config]=\"config\"\n      (click)=\"onDungeonNodeClick(mirrorNode.mapNode)\"\n      (mouseover)=\"changeTooltip(mirrorNode.mapNode)\"\n      (mouseleave)=\"clearTooltip()\">\n    </app-node>\n  </div>\n\n  <div *ngIf=\"currentDungeonItems\">\n    <app-dungeon-items\n      [dungeonItems]=\"currentDungeonItems\"\n      [config]=\"config\">\n    </app-dungeon-items>\n  </div>\n</div>\n<div class=\"map-footer\">\n  <span>{{tooltip}}</span>\n</div>\n<div class=\"menu-buttons\">\n  <button *ngIf=\"items.gameState === 4\" class=\"btn btn-danger\" (click)=\"onSaveAndQuit()\">\n    Save &amp; Quit\n  </button>\n  <button *ngIf=\"canWarp()\" class=\"btn btn-primary\" (click)=\"onWarpClicked()\">\n    {{warpButtonText}}\n  </button>\n  <button *ngIf=\"canFlute()\" class=\"btn btn-primary\" (click)=\"onFluteClicked()\">\n    <img class=\"icon\" src=\"assets/item-icons/flute.png\">\n  </button>\n  <button *ngIf=\"!items.lwMapOpen && canViewMap('light-world')\" class=\"btn btn-info\" (click)=\"onCheckMap('lw')\">\n    Check <img class=\"icon\" src=\"assets/item-icons/map.png\">\n  </button>\n  <button *ngIf=\"!items.dwMapOpen && canViewMap('dark-world')\" class=\"btn btn-info\" (click)=\"onCheckMap('dw')\">\n    Check <img class=\"icon\" src=\"assets/item-icons/map.png\">\n  </button>\n  <button *ngIf=\"canViewMap('green-pendant')\" class=\"btn btn-info\" (click)=\"onCheckMap('gp')\">\n    Check <img class=\"icon\" src=\"assets/item-icons/pendantCourage.png\">\n  </button>\n  <button *ngIf=\"canViewMap('red-crystals')\" class=\"btn btn-info\" (click)=\"onCheckMap('rc')\">\n    Check <img class=\"icon\" src=\"assets/item-icons/redCrystal.png\">\n  </button>\n  <button *ngIf=\"!items.mmMedallionChecked && canViewMMMedallion() && !currentDungeon\" class=\"btn btn-warning\" (click)=\"checkMedallion('mm')\">\n    Check <img class=\"icon\" src=\"assets/dungeon-tracker-icons/boss82.png\"><img class=\"icon\" src=\"assets/dungeon-tracker-icons/medallion0.png\">\n  </button>\n  <button *ngIf=\"!items.trMedallionChecked && canViewTRMedallion() && !currentDungeon\" class=\"btn btn-warning\" (click)=\"checkMedallion('tr')\">\n    Check <img class=\"icon\" src=\"assets/dungeon-tracker-icons/boss92.png\"><img class=\"icon\" src=\"assets/dungeon-tracker-icons/medallion0.png\">\n  </button>\n\n  <button class=\"btn btn-danger aligned-right\" (click)=\"openModal(reportTemplate)\">\n    Report Seed\n  </button>\n</div>\n\n<ng-template #reportTemplate>\n  <div>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Report this Seed</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>\n        If you think this seed is uncompletable or has any issue, please go to our\n        <a href=\"https://discord.gg/nPJpFQB\" target=\"_blank\">Discord server</a> and report directly to Kyong with\n        the code below:\n      </p>\n      <button class=\"btn btn-info\" (click)=\"copyClipboard()\">Copy to Clipboard</button>\n      <p>{{clipboardMessage}}</p>\n    </div>\n  </div>\n</ng-template>\n\n<div *ngIf=\"isDev\">\n  <br>\n  <br>\n  <button (click)=\"getAll()\">get All</button>\n  <button (click)=\"getBootsDw()\">get Some</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/dungeon-items/dungeon-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DungeonItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_game_service__ = __webpack_require__("../../../../../src/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__ = __webpack_require__("../../../../../src/models/dungeon-prize.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DungeonItemsComponent = (function () {
    function DungeonItemsComponent(gameService, _modalService, itemNameService) {
        this.gameService = gameService;
        this._modalService = _modalService;
        this.itemNameService = itemNameService;
        this.addedItem = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.viewItem = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.cantItem = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.hintCheck = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.finishedDungeon = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.onGameFinished = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.isDev = false;
        this.hasUsedMirror = false;
        this.currentRegion = 'ow';
        this.preloadedImages = [];
        this.nonDuns = ['lw', 'dw'];
    }
    DungeonItemsComponent.prototype.ngOnInit = function () {
        this.isDev = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* isDevMode */])();
        if (this.config.isFullMap) {
            var mapResult = this.gameService.getMap(this.currentMap);
            this.currentDungeonMap = mapResult[0];
            this.currentDungeon = mapResult[1];
            this.currentDungeonMap.preloadImages(this.currentDungeon.name);
            this.changeMap(this.currentDungeonMap.id);
            this.currentDungeonItems = this.items.getDungeonItems(this.currentDungeon.name);
        }
        if (this.config.mode === 'inverted') {
            this.originalWorld = 'dark-world';
            this.otherWorld = 'light-world';
        }
        else {
            this.originalWorld = 'light-world';
            this.otherWorld = 'dark-world';
        }
        this.clearTooltip();
        this.clipboardMessage = '';
        this.preloadMapsAndIcons();
    };
    DungeonItemsComponent.prototype.ngOnChanges = function () {
        if (this.currentMap === 'light-world' || this.currentMap === 'dark-world') {
            if (this.currentDungeonMap) {
                this.currentDungeonMap.cleanPreload();
            }
            this.currentDungeon = null;
            this.currentDungeonMap = null;
            this.currentDungeonItems = null;
        }
    };
    DungeonItemsComponent.prototype.onNodeClick = function (node) {
        if (this.config.noLogic) {
            if (this.items.spFlooded) {
                this.unfloodSwamp();
            }
            if (node.prize[0] === 'warp') {
                this.currentRegion = node.id;
                this.changeMap(this.otherWorld);
            }
            else if (node.prize[0] === 'tr-ledge') {
                this.changeDungeon('tr-inverted-ledge');
            }
            else if (node.prize[0] === 'gt-requirement') {
                this.hintCheck.emit(['sign', "Ganon's Tower Entry", this.getSignpostText('tower')]);
            }
            else if (node.prize[0] === 'ganon-requirement') {
                this.hintCheck.emit(['sign', 'Ganon Vulnerability', this.getSignpostText('ganon')]);
            }
            else if (node.prize[0].charAt(0) === '=') {
                this.hintCheck.emit([node.tooltip, this.currentMap, this.config.hints[+node.prize[0].substr(1)]]);
            }
            else if (node.status === 'opened' ||
                node.originalNode.isOpened ||
                (node.originalNode.canView && !node.isFaded)) {
                if (node.status !== 'opened' && node.originalNode.canView) {
                    this.viewItem.emit([node, this.currentMap, this.currentRegion]);
                    node.isFaded = true;
                }
            }
            else {
                this.addPrizes(node, this.currentMap);
                if (node.originalNode) {
                    node.originalNode.isOpened = true;
                }
                node.status = 'opened';
                if (node.tooltip === 'Ganon' || node.prize[0] === '270') {
                    this.onGameFinished.emit('');
                }
            }
            return;
        }
        if (!(node.status.indexOf('unreachable') > -1)) {
            if (this.items.spFlooded) {
                this.unfloodSwamp();
            }
            if ((node.status.indexOf('now-getable') > -1 || node.status.indexOf('now-g-getable') > -1) &&
                !node.isFaded) {
                this.viewItem.emit([node, this.currentMap, this.currentRegion]);
                if (node.status.indexOf('now-getable') > -1) {
                    node.status = 'getable';
                }
                else {
                    node.status = 'g-getable';
                }
                this.gameService.updateData(this.items, this.currentMap, this.currentRegion);
            }
            else if (node.status.indexOf('getable') > -1) {
                if (!node.originalNode.isOpened && node.status.indexOf('unreachable') === -1) {
                    if (node.prize[0] === 'gt-requirement') {
                        this.hintCheck.emit(['sign', "Ganon's Tower Entry", this.getSignpostText('tower')]);
                    }
                    else if (node.prize[0] === 'ganon-requirement') {
                        this.hintCheck.emit(['sign', 'Ganon Vulnerability', this.getSignpostText('ganon')]);
                    }
                    else if (node.prize[0].charAt(0) === '=') {
                        this.hintCheck.emit([
                            node.tooltip,
                            this.currentMap,
                            this.config.hints[+node.prize[0].substr(1)],
                        ]);
                    }
                    else {
                        this.addPrizes(node, this.currentMap);
                        if (node.originalNode) {
                            node.originalNode.isOpened = true;
                        }
                        node.status = 'opened';
                        if (node.tooltip === 'Ganon' || node.prize[0] === '270') {
                            this.onGameFinished.emit('');
                        }
                    }
                }
            }
            else if (node.status.indexOf('viewable') > -1) {
                this.viewItem.emit([node, this.currentMap, this.currentRegion]);
            }
            else if (node.status === 'warp') {
                this.currentRegion = node.id;
                this.changeMap(this.otherWorld);
            }
            else if (node.status === 'tr-ledge') {
                this.changeDungeon('tr-inverted-ledge');
            }
        }
    };
    DungeonItemsComponent.prototype.addPrizes = function (node, region) {
        this.addedItem.emit([node, region, this.currentRegion]);
    };
    DungeonItemsComponent.prototype.onDungeonClick = function (node) {
        if (this.config.noLogic ||
            (node.status.indexOf('getable') > -1 && node.status.indexOf('unavailable') === -1)) {
            if (node.id === 'tr-entry') {
                this.changeDungeon('tr-entry');
                node.originalNode.startingMap.id = 'tr-entry';
            }
            else {
                this.changeDungeon(node.originalNode.startingMap.id);
            }
        }
    };
    DungeonItemsComponent.prototype.changeDungeon = function (mapId) {
        if (this.currentDungeonMap) {
            this.currentDungeonMap.cleanPreload();
        }
        if (this.currentDungeonMap &&
            this.nonDuns.indexOf(this.currentDungeonMap.id.split('-')[0]) > -1 &&
            this.nonDuns.indexOf(mapId.split('-')[0]) === -1) {
            this.dungeonFinishMap = this.currentDungeonMap.id;
            this.dungeonFinishRegion = this.items.currentRegionInMap;
            this.dungeonMirrorMap = mapId;
        }
        if (mapId === 'dw-desert') {
            this.checkMedallion('mm');
        }
        if (mapId === 'dw-trportal') {
            this.checkMedallion('tr');
        }
        this.resetDungeons();
        if (mapId !== 'sp-entry') {
            this.unfloodSwamp();
        }
        var mapResult = this.gameService.getMap(mapId);
        this.currentDungeonMap = mapResult[0];
        this.currentDungeon = mapResult[1];
        if (mapId === 'tr-entry') {
            this.currentDungeon.startingMap = this.currentDungeonMap;
        }
        this.currentDungeonMap.preloadImages(this.currentDungeon.name);
        this.changeMap(this.currentDungeonMap.id);
        this.items.visitDungeon(this.currentDungeon.name);
        this.checkMapsLeft();
        this.currentDungeonItems = this.items.getDungeonItems(this.currentDungeon.name);
        if (this.currentDungeon.name === 'Turtle Rock') {
            this.items.trMedallionChecked = true;
        }
        if (this.currentDungeon.name === 'Misery Mire') {
            this.items.mmMedallionChecked = true;
        }
    };
    DungeonItemsComponent.prototype.changeMapInDungeon = function (targetMapId) {
        var _this = this;
        if (this.currentDungeonMap) {
            this.currentDungeonMap.cleanPreload();
        }
        if (targetMapId === 'exit') {
            this.leaveDungeon();
        }
        else {
            var targetMap;
            this.currentDungeon.dungeonMaps.forEach(function (dungeonMap) {
                if (dungeonMap.id === targetMapId) {
                    targetMap = dungeonMap;
                }
            });
            if (targetMap) {
                this.currentDungeonMap = targetMap;
                this.currentDungeonMap.preloadImages(this.currentDungeon.name);
                this.changeMap(targetMap.id);
                if (this.config.isEnemizer) {
                    this.currentDungeonMap.nodes.forEach(function (mapNode) {
                        if (mapNode.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOSS) {
                            if (!_this.config.checkedBosses[_this.currentDungeonItems.dungeonId]) {
                                _this.config.checkedBosses[_this.currentDungeonItems.dungeonId] = true;
                            }
                        }
                    });
                }
            }
        }
    };
    DungeonItemsComponent.prototype.onDungeonNodeClick = function (node) {
        var _this = this;
        if (this.config.noLogic ||
            node.originalNode.canOpen(this.items, this.config) ||
            (this.config.canGlitch &&
                node.originalNode.canGlitch &&
                node.originalNode.canGlitch(this.items, this.config))) {
            switch (+node.status) {
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR_PUSH_BLOCK:
                    this.addPrizes(node, this.currentDungeon.name);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR.toString();
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SQ_OPTION:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].HOLE:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR:
                    if (this.currentDungeonMap.id === 'tr-inverted-ledge') {
                        if (node.id === 'tr-bc') {
                            this.currentDungeon.startingMap = this.gameService.getMap('tr-bc')[0];
                        }
                        else if (node.id === 'tr-laser-bridge') {
                            this.currentDungeon.startingMap = this.gameService.getMap('tr-laser-bridge')[0];
                        }
                    }
                    if (node.prize[0] === 'hc-darkchest' && this.items.gameState === 2) {
                        this.items.gameState = 3;
                    }
                    else if (node.prize[0] === 'hc-sanctuary' && this.items.gameState === 3) {
                        this.items.gameState = 4;
                    }
                    if (this.items.spFlooded && node.prize[0].substr(0, 2) === 'dw') {
                        this.unfloodSwamp();
                    }
                    if (node.prize[0] === 'Ganon' || node.prize[0] === 'Triforce') {
                        this.addPrizes(node, this.currentDungeon.name);
                        this.onGameFinished.emit('');
                    }
                    else if (node.prize[0] !== 'exit' &&
                        node.prize[0].split('-')[0] !== this.currentDungeonMap.id.split('-')[0]) {
                        this.changeDungeon(node.prize[0]);
                        this.items.currentRegionInMap = node.originalNode.destinationSection;
                    }
                    else {
                        this.changeMapInDungeon(node.prize[0]);
                        this.items.currentRegionInMap = node.originalNode.destinationSection;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED:
                    if (this.config.noLogic || this.currentDungeonItems.smallKeys > 0) {
                        this.currentDungeonItems.smallKeys--;
                        if (this.currentDungeonItems.smallKeys < 0) {
                            this.currentDungeonItems.smallKeys = 0;
                        }
                        node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR.toString();
                        this.currentDungeon.dungeonMaps.forEach(function (dungeonMap) {
                            if (dungeonMap.id === node.prize[0]) {
                                dungeonMap.nodes.forEach(function (mapNode) {
                                    if (mapNode.content === _this.currentDungeonMap.id) {
                                        mapNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR.toString();
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.cantItem.emit([node, this.currentDungeon.name, false]);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED:
                    if (this.config.noLogic || this.currentDungeonItems.hasBigKey) {
                        this.changeMapInDungeon(node.prize[0]);
                        this.items.currentRegionInMap = node.originalNode.destinationSection;
                    }
                    else {
                        this.cantItem.emit([node, this.currentDungeon.name, false]);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST:
                    if (this.config.noLogic || this.currentDungeonItems.hasBigKey) {
                        this.addPrizes(node, this.currentDungeon.name);
                        this.items.stats.bigChests++;
                        node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_BIG_CHEST.toString();
                    }
                    else {
                        this.cantItem.emit([node, this.currentDungeon.name, false]);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_GETABLE_CLOSED_CHEST:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST:
                    if (node.tooltip === 'Old Man') {
                        this.items.oldManRescued = true;
                    }
                    else if (node.tooltip === 'Blacksmiths Item') {
                        this.items.blacksmithsRescued = true;
                    }
                    else if (node.tooltip === 'Spectacle Rock Item') {
                        this.currentDungeon.dungeonMaps.forEach(function (dungeonMap) {
                            dungeonMap.nodes.forEach(function (mapNode) {
                                if (mapNode.name === 'Spectacle Rock Item') {
                                    mapNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_CHEST;
                                }
                            });
                        });
                    }
                    else if (node.tooltip === "Link's Uncle" && this.items.gameState === 0) {
                        this.items.gameState = 1;
                    }
                    else if (node.tooltip === "Zelda's Chest" && this.items.gameState === 1) {
                        this.items.gameState = 2;
                    }
                    if (node.originalNode.accessibleSectionArray[0] === -1 &&
                        +node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST) {
                        this.items.currentRegionInMap = 0;
                    }
                    if (this.config.isFullMap && this.currentDungeonMap.isIndoors) {
                        this.addPrizes(node, this.currentDungeonMap.name);
                    }
                    else {
                        this.addPrizes(node, this.currentDungeon.name);
                    }
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_CHEST.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOSS:
                    if (this.currentDungeon.name === 'Ganons Tower' && node.tooltip !== 'Agahnim 2') {
                        switch (node.tooltip) {
                            case 'Ice Armos':
                                this.items.iceArmosDefeated = true;
                                break;
                            case 'Lanmolas 2':
                                this.items.lanmo2Defeated = true;
                                break;
                            case 'Moldorm 2':
                                this.items.moldorms2Defeated = true;
                        }
                    }
                    else {
                        if (this.currentDungeon.name === 'Aga Tower' ||
                            this.currentDungeon.name === 'Ganons Tower') {
                            this.currentRegion = 'ow';
                            if (this.currentDungeon.name === 'Aga Tower') {
                                this.items.agahnim = 1;
                            }
                        }
                        this.addPrizes(node, this.currentDungeon.name);
                        this.defeatDungeon(this.currentDungeon.name === 'Aga Tower');
                    }
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].DEFEATED_BOSS.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY:
                    this.items.add('smallKey-' + __WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__["a" /* Dungeon */].allDungeonNames.indexOf(this.currentDungeon.name), this.currentDungeon.name, true);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY:
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH_FLIPPED:
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH:
                    this.addPrizes(node, this.currentDungeon.name);
                    var newSwitchStatus;
                    newSwitchStatus = +node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH ? __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH_FLIPPED : __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH;
                    node.originalNode.status = newSwitchStatus.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH:
                    this.addPrizes(node, this.currentDungeon.name);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH_FLIPPED.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUE:
                    this.addPrizes(node, this.currentDungeon.name);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUED.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR:
                    this.addPrizes(node, this.currentDungeon.name);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR_DONE.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].PORTAL:
                    var portalParts = this.currentDungeonMap.id.split('-');
                    if (portalParts[1] === 'trportal' &&
                        !this.items.isTROpened &&
                        !!this.items[this.config.trMedallion] &&
                        (!!this.items.sword || this.config.weapons === 'swordless')) {
                        this.items.isTROpened = true;
                    }
                    portalParts[0] = 'dw';
                    this.items.currentRegionInMap = node.originalNode.destinationSection;
                    this.changeDungeon(portalParts.join('-'));
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].MIRROR:
                    var mirrorParts = this.currentDungeonMap.id.split('-');
                    if (mirrorParts[0] === 'dw') {
                        mirrorParts[0] = 'lw';
                        this.items.currentRegionInMap = node.originalNode.destinationSection;
                        setTimeout(function () {
                            _this.mirrorNode = new __WEBPACK_IMPORTED_MODULE_8__models_dungeon_node_model__["a" /* DungeonNode */](node.originalNode.name, node.originalNode.x, node.originalNode.y, node.originalNode.status, node.originalNode.canOpen, node.originalNode.content, node.originalNode.errorMessage, node.originalNode.mirrorAccessibleSectionArray, node.originalNode.mirrorDestinationSection, node.originalNode.canGlitch, node.originalNode.accessibleSectionArray, node.originalNode.destinationSection);
                            _this.mirrorNode.mapNode = {
                                x: node.originalNode.mapNode.x,
                                y: node.originalNode.mapNode.y,
                                tooltip: node.originalNode.mapNode.tooltip,
                                id: node.originalNode.mapNode.id,
                                status: node.originalNode.mapNode.status,
                                prize: node.originalNode.mapNode.prize,
                                originalNode: _this.mirrorNode,
                                isFaded: node.originalNode.mapNode.isFaded,
                            };
                        }, 1);
                    }
                    else {
                        mirrorParts[0] = 'dw';
                        this.items.currentRegionInMap = node.originalNode.destinationSection;
                        setTimeout(function () {
                            _this.mirrorNode = new __WEBPACK_IMPORTED_MODULE_8__models_dungeon_node_model__["a" /* DungeonNode */](node.originalNode.name, node.originalNode.x, node.originalNode.y, node.originalNode.status, node.originalNode.canOpen, node.originalNode.content, node.originalNode.errorMessage, [node.originalNode.mirrorAccessibleSectionArray], node.originalNode.mirrorDestinationSection, node.originalNode.canGlitch, node.originalNode.accessibleSectionArray, node.originalNode.destinationSection);
                            _this.mirrorNode.mapNode = {
                                x: node.originalNode.mapNode.x,
                                y: node.originalNode.mapNode.y,
                                tooltip: node.originalNode.mapNode.tooltip,
                                id: node.originalNode.mapNode.id,
                                status: node.originalNode.mapNode.status,
                                prize: node.originalNode.mapNode.prize,
                                originalNode: _this.mirrorNode,
                                isFaded: node.originalNode.mapNode.isFaded,
                            };
                        }, 1);
                    }
                    this.mirrorNode = null;
                    this.mirrorRegion = node.originalNode.destinationSection;
                    this.mirrorMap = mirrorParts.join('-');
                    this.changeDungeon(this.mirrorMap);
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].FROG:
                    this.items.hasBlacksmiths = true;
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].PURPLE_CHEST:
                    this.items.hasPurpleChest = true;
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BIG_BOMB:
                    this.items.hasBigBomb = true;
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM:
                    if (this.items.book) {
                        this.addPrizes(node, this.currentDungeon.name);
                        node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    }
                    else {
                        this.cantItem.emit([node, this.currentDungeon.name, true]);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL:
                    this.addPrizes(node, this.currentDungeon.name);
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    if (this.config.goal === 'pedestal') {
                        this.onGameFinished.emit('');
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].DUCK:
                    this.items.isFluteActivated = true;
                    node.originalNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].EMPTY.toString();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].HINT:
                    this.hintCheck.emit([
                        node.tooltip,
                        this.currentDungeon.name,
                        this.config.hints[+node.prize[0]],
                    ]);
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SIGNPOST:
                    if (this.currentDungeonMap.name === 'Ganons Tower Entrance') {
                        this.hintCheck.emit(['sign', "Ganon's Tower Entry", this.getSignpostText('tower')]);
                    }
                    else {
                        this.hintCheck.emit(['sign', 'Ganon Vulnerability', this.getSignpostText('ganon')]);
                    }
            }
        }
        else if (node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST.toString() ||
            ((node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM.toString() ||
                node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL.toString()) &&
                this.items.book)) {
            if (this.config.isFullMap && this.currentDungeonMap.isIndoors) {
                this.viewItem.emit([node, this.currentDungeonMap.name, this.currentRegion]);
            }
            else {
                this.viewItem.emit([node, this.currentDungeon.name, this.currentRegion]);
            }
        }
        else {
            this.cantItem.emit([node, this.currentDungeon.name, true]);
        }
    };
    DungeonItemsComponent.prototype.leaveDungeon = function (isAgaTower) {
        if (isAgaTower === void 0) { isAgaTower = false; }
        if (this.currentDungeonMap) {
            this.currentDungeonMap.cleanPreload();
        }
        if (this.config.isFullMap) {
            if (isAgaTower || this.currentDungeon.name === 'Ganons Tower') {
                this.changeDungeon('dw-hyrule-castle');
            }
            else if (this.currentDungeon.name === 'Turtle Rock') {
                this.currentDungeon.startingMap.id = 'tr-entry';
                this.changeDungeon('dw-trportal');
            }
            else {
                this.changeDungeon(this.dungeonFinishMap);
                this.items.currentRegionInMap = this.dungeonFinishRegion;
            }
            this.dungeonFinishMap = '';
            this.dungeonFinishRegion = 0;
        }
        else {
            if (this.currentDungeon.name === 'Aga Tower' && isAgaTower) {
                this.changeMap(this.otherWorld);
            }
            else if (this.gameService.lwDuns.indexOf(this.currentDungeon.name) > -1 ||
                this.currentDungeonMap.id === 'tr-inverted-ledge') {
                this.changeMap('light-world');
            }
            else {
                this.changeMap('dark-world');
            }
            this.unfloodSwamp();
        }
        this.resetDungeons();
        if (this.currentDungeonMap) {
            this.currentDungeonMap.cleanPreload();
        }
        if (!this.config.isFullMap) {
            this.currentDungeon = null;
            this.currentDungeonMap = null;
            this.currentDungeonItems = null;
        }
    };
    DungeonItemsComponent.prototype.unfloodSwamp = function () {
        var _this = this;
        this.gameService.dungeonsData[5].dungeonMaps.forEach(function (dungeonMap) {
            dungeonMap.nodes.forEach(function (mapNode) {
                if (mapNode.status == __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH_FLIPPED) {
                    mapNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH;
                    _this.items.remove('flood', 'Swamp Palace');
                }
            });
        });
    };
    DungeonItemsComponent.prototype.resetDungeons = function () {
        var _this = this;
        this.items.crystalSwitch = false;
        this.gameService.dungeonsData[8].dungeonMaps.forEach(function (dungeonMap) {
            if (dungeonMap.id === 'ip-push-block') {
                dungeonMap.nodes.forEach(function (mapNode) {
                    if (mapNode.content == 'ip-switch-room') {
                        mapNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR_PUSH_BLOCK;
                        _this.items.ipBlockPushed = false;
                    }
                });
            }
        });
    };
    DungeonItemsComponent.prototype.resetCrystalSwitch = function () {
        var switchDungeons = ['Swamp Palace', 'Misery Mire', 'Ice Palace'];
        this.gameService.dungeonsData.forEach(function (dungeon) {
            if (switchDungeons.indexOf(dungeon.name) > -1) {
                dungeon.dungeonMaps.forEach(function (dungeonMap) {
                    dungeonMap.nodes.forEach(function (mapNode) {
                        if (mapNode.status == __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH_FLIPPED) {
                            mapNode.status = __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SWITCH;
                        }
                    });
                });
            }
        });
    };
    DungeonItemsComponent.prototype.changeTooltip = function (node) {
        if (node.prize[0] === 'warp') {
            this.tooltip = 'Dark World Portal';
        }
        else {
            this.tooltip = node.tooltip;
        }
        if (node.prize[0] === 'exit' && this.currentDungeonMap.id === 'tr-inverted-ledge') {
            this.tooltip = 'Jump down the Ledge';
        }
        else if (this.currentDungeon && node.prize[0] === 'exit') {
            this.tooltip = 'Leave the Dungeon';
        }
        else if (!this.currentDungeon ||
            !node.originalNode.canOpen ||
            !node.originalNode.errorMessage ||
            node.originalNode.canOpen(this.items, this.config) ||
            (node.originalNode.canGlitch && node.originalNode.canGlitch(this.items, this.config))) {
            if (!this.currentDungeon &&
                node.status.indexOf('getable') > -1 &&
                (node.status.indexOf('unreachable') > -1 || node.status.indexOf('unavailable') > -1)) {
                this.tooltip += '. Unreachable from here';
            }
        }
        else {
            this.tooltip += '. ' + node.originalNode.errorMessage;
        }
    };
    DungeonItemsComponent.prototype.clearTooltip = function () {
        if (this.currentMap === 'light-world') {
            this.tooltip = 'Light World';
        }
        else if (this.currentMap === 'dark-world') {
            this.tooltip = 'Dark World';
        }
        else {
            this.tooltip = this.currentDungeonMap.name;
        }
    };
    DungeonItemsComponent.prototype.defeatDungeon = function (isAgaTower) {
        if (this.currentDungeon.name === 'Ganons Tower') {
            this.hintCheck.emit(['Ganon', this.currentMap, this.config.silversHint]);
        }
        else if (this.currentDungeon.name === 'Turtle Rock') {
            this.items.isTROpened = true;
        }
        this.finishedDungeon.emit([this.currentDungeon.dungeonPrize, this.currentDungeon.name]);
        this.currentDungeonItems.isBossDefeated = true;
        this.currentDungeonItems.checkThisMap();
        this.checkMapsLeft();
        this.leaveDungeon(isAgaTower);
    };
    DungeonItemsComponent.prototype.onSaveAndQuit = function () {
        if (this.config.isFullMap) {
            if (this.mirrorNode) {
                this.mirrorNode = null;
                this.mirrorMap = '';
            }
            var isDarkWorldDungeon = this.gameService.dwDuns.indexOf(this.currentDungeon.name) > -1;
            if (this.items.agahnim &&
                this.items.mirror &&
                (this.currentMap.split('-')[0] === 'dw' || isDarkWorldDungeon)) {
                this.changeDungeon('dw-hyrule-castle');
            }
            else {
                this.changeDungeon('lw-sq');
            }
        }
        else {
            this.currentRegion = 'ow';
            this.hasUsedMirror = false;
            if (this.currentDungeon) {
                var isLightWorldDungeon = this.gameService.lwDuns.indexOf(this.currentDungeon.name) > -1;
                this.leaveDungeon();
                if (this.config.mode !== 'inverted') {
                    if (!isLightWorldDungeon && this.items.agahnim && this.items.mirror) {
                        this.changeMap('dark-world');
                    }
                    else {
                        this.changeMap('light-world');
                    }
                }
                else if (isLightWorldDungeon && this.items.agahnim && this.items.mirror) {
                    this.changeMap('light-world');
                }
                else {
                    this.changeMap('dark-world');
                }
            }
            else if (this.config.mode !== 'inverted') {
                if (this.currentMap === 'dark-world' && this.items.agahnim && this.items.mirror) {
                    this.changeMap('dark-world');
                }
                else {
                    this.changeMap('light-world');
                }
            }
            else if (this.currentMap === 'light-world' && this.items.agahnim && this.items.mirror) {
                this.changeMap('light-world');
            }
            else {
                this.changeMap('dark-world');
            }
        }
    };
    DungeonItemsComponent.prototype.onWarpClicked = function () {
        this.resetCrystalSwitch();
        this.items.crystalSwitch = false;
        if (this.config.isFullMap) {
            if (this.items.mirror) {
                this.changeDungeon(this.dungeonMirrorMap);
            }
            else if (this.items.gameState === 2) {
                this.changeDungeon('hc-zelda');
            }
            else if (this.items.gameState === 3) {
                this.changeDungeon('hc-darkchest');
            }
            else {
                this.changeDungeon(this.dungeonMirrorMap);
            }
            return;
        }
        if ((this.config.mode !== 'inverted' && this.canWarpToDW()) ||
            (this.config.mode === 'inverted' && this.canWarpToLW())) {
            this.changeMap(this.otherWorld);
        }
        else if (this.currentMap === this.otherWorld) {
            if (this.items.mirror) {
                this.hasUsedMirror = true;
            }
            this.changeMap(this.originalWorld);
        }
        else if (this.currentDungeon) {
            if (this.currentDungeonMap) {
                this.currentDungeonMap.cleanPreload();
            }
            this.currentDungeonMap = this.currentDungeon.startingMap;
            this.currentDungeonMap.preloadImages(this.currentDungeon.name);
            this.changeMap(this.currentDungeonMap.id);
            this.resetCrystalSwitch();
        }
    };
    DungeonItemsComponent.prototype.canWarp = function () {
        if (this.config.isFullMap) {
            return (this.currentDungeonMap.id !== 'hc-sanctuary' &&
                (this.items.mirror
                    ? (this.warpButtonText = 'Mirror')
                    : (this.warpButtonText = 'Death Warp'),
                    this.nonDuns.indexOf(this.currentDungeonMap.id.split('-')[0]) === -1));
        }
        var hasMirror = this.items.mirror;
        if (this.config.mode !== 'inverted' &&
            this.currentMap === 'light-world' &&
            hasMirror &&
            this.hasUsedMirror) {
            this.warpButtonText = 'Go Back to DW';
        }
        if (this.config.mode === 'inverted' &&
            this.currentMap === 'dark-world' &&
            hasMirror &&
            this.hasUsedMirror) {
            this.warpButtonText = 'Go Back to LW';
        }
        if (this.currentDungeon !== null) {
            this.warpButtonText = hasMirror ? 'Mirror' : 'Death Warp';
        }
        if (this.config.mode !== 'inverted' && this.currentMap === 'dark-world') {
            this.warpButtonText = hasMirror ? 'Mirror to LW' : 'S&Q to LW';
        }
        if (this.config.mode === 'inverted' && this.currentMap === 'light-world') {
            this.warpButtonText = hasMirror ? 'Mirror to DW' : 'S&Q to DW';
        }
        return (this.currentDungeon !== null ||
            (this.currentMap === 'dark-world' &&
                hasMirror &&
                (this.hasUsedMirror || this.config.mode !== 'inverted')) ||
            (this.currentMap === 'light-world' &&
                hasMirror &&
                (this.hasUsedMirror || this.config.mode === 'inverted')));
    };
    DungeonItemsComponent.prototype.canWarpToDW = function () {
        return (this.currentMap === 'light-world' &&
            (this.items.agahnim ||
                (this.items.hammer && this.items.glove && this.items.moonPearl) ||
                (this.items.glove === 2 && this.items.moonPearl) ||
                (this.items.flute && this.items.glove === 2) ||
                this.items.canDarkEastDeathMountain(this.config.canGlitch)));
    };
    DungeonItemsComponent.prototype.canWarpToLW = function () {
        return (this.currentMap === 'dark-world' &&
            (this.items.agahnim ||
                (this.items.hammer && this.items.glove && this.items.moonPearl) ||
                (this.items.glove === 2 && this.items.moonPearl) ||
                this.items.flute ||
                (this.items.glove && (this.config.canGlitch || this.items.lamp))));
    };
    DungeonItemsComponent.prototype.canFlute = function () {
        return (!!this.config.isFullMap &&
            !!this.items.flute &&
            ((this.config.mode === 'inverted' && this.currentDungeonMap.id.split('-')[0] === 'dw') ||
                (this.config.mode !== 'inverted' && this.currentDungeonMap.id.split('-')[0] === 'lw')) &&
            !this.currentDungeonMap.isIndoors &&
            !!this.items.isFluteActivated);
    };
    DungeonItemsComponent.prototype.onFluteClicked = function () {
        this.changeDungeon('lw-flute-map');
    };
    DungeonItemsComponent.prototype.getAvailableDungeonMapIndexes = function () {
        var startIndex;
        var endIndex;
        var availableIndexes = [];
        if (this.currentMap === 'light-world' || this.currentMap.substr(0, 2) === 'lw') {
            startIndex = 1;
            endIndex = 3;
        }
        else {
            startIndex = 5;
            endIndex = 11;
        }
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.items.dungeonItemsArray[i].mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].UNKNOWN &&
                this.items.dungeonItemsArray[i].hasMap) {
                availableIndexes.push(i);
            }
        }
        return availableIndexes;
    };
    DungeonItemsComponent.prototype.onCheckMap = function (checkType) {
        var _this = this;
        if (checkType === 'gp') {
            this.gameService.dungeonsData.forEach(function (dungeon, index) {
                if (_this.itemNameService.getItemById(dungeon.dungeonPrize).shortName === 'pendantCourage') {
                    _this.items.dungeonItemsArray[index + 1].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].GREEN_PENDANT;
                }
            });
        }
        else if (checkType === 'rc') {
            this.gameService.dungeonsData.forEach(function (dungeon, index) {
                var prizeName = _this.itemNameService.getItemById(dungeon.dungeonPrize).shortName;
                if (prizeName === 'crystal5' || prizeName === 'crystal6') {
                    _this.items.dungeonItemsArray[index + 1].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].RED_CRYSTAL;
                }
            });
        }
        else if (this.config.dungeonItems === 'standard') {
            if (checkType === 'lw') {
                this.items.lwMapOpen = true;
                this.gameService.dungeonsData.forEach(function (dungeon, index) {
                    if (index < 3) {
                        _this.items.dungeonItemsArray[index + 1].checkThisMap();
                    }
                });
            }
            else if (this.canViewMap('dark-world')) {
                this.items.dwMapOpen = true;
                this.gameService.dungeonsData.forEach(function (dungeon, index) {
                    if (index >= 4 && index <= 10) {
                        _this.items.dungeonItemsArray[index + 1].checkThisMap();
                    }
                });
            }
        }
        else {
            var availableIndexes = this.getAvailableDungeonMapIndexes();
            availableIndexes.forEach(function (dungeonIndex) {
                _this.items.dungeonItemsArray[dungeonIndex].checkThisMap();
            });
        }
        this.checkMapsLeft();
    };
    DungeonItemsComponent.prototype.checkMapsLeft = function () {
        var crystalCount = 0;
        var pendantCount = 0;
        var someCrystalCount = 0;
        var somePendantCount = 0;
        var greenPendantFound = 0;
        var redCrystalCount = 0;
        var unknownCount = 0;
        for (var i = 1; i <= 11; i++) {
            if (i !== 4) {
                switch (this.items.dungeonItemsArray[i].mapPrizeStatus) {
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].UNKNOWN:
                        unknownCount++;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].RED_CRYSTAL:
                        redCrystalCount++;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].CRYSTAL:
                        crystalCount++;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_CRYSTAL:
                        someCrystalCount++;
                        break;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].GREEN_PENDANT:
                        greenPendantFound = 1;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].PENDANT:
                        pendantCount++;
                    case __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_PENDANT:
                        somePendantCount++;
                }
            }
        }
        var allPendantsFound = somePendantCount === 3;
        var allCrystalsFound = someCrystalCount === 7;
        var canDeduceCrystals = redCrystalCount === 2 || crystalCount >= 6 || (crystalCount === 5 && redCrystalCount === 0);
        var canDeducePendants = greenPendantFound === 1 || pendantCount >= 2;
        for (var i = 1; i <= 11; i++) {
            if (i !== 4) {
                if (this.items.dungeonItemsArray[i].mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].UNKNOWN) {
                    if (allPendantsFound) {
                        this.items.dungeonItemsArray[i].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_CRYSTAL;
                    }
                    else if (allCrystalsFound) {
                        this.items.dungeonItemsArray[i].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_PENDANT;
                    }
                }
                if (canDeduceCrystals && this.items.dungeonItemsArray[i].mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_CRYSTAL) {
                    this.items.dungeonItemsArray[i].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].CRYSTAL;
                }
                else if (canDeducePendants &&
                    this.items.dungeonItemsArray[i].mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_PENDANT) {
                    this.items.dungeonItemsArray[i].mapPrizeStatus = __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].PENDANT;
                }
            }
        }
    };
    DungeonItemsComponent.prototype.canViewMap = function (worldOrType) {
        if (this.config.isFullMap) {
            if (worldOrType === 'light-world') {
                return (this.currentDungeonMap.id.split('-')[0] === 'lw' &&
                    !this.currentDungeonMap.isIndoors &&
                    (this.getAvailableDungeonMapIndexes().length > 0 ||
                        this.config.dungeonItems === 'standard'));
            }
            if (worldOrType === 'dark-world') {
                return (this.currentDungeonMap.id.split('-')[0] === 'dw' &&
                    !this.currentDungeonMap.isIndoors &&
                    (this.getAvailableDungeonMapIndexes().length > 0 ||
                        this.config.dungeonItems === 'standard'));
            }
            if (worldOrType === 'green-pendant') {
                var hasGreenPendant = false;
                this.items.dungeonItemsArray.forEach(function (dungeonItem) {
                    if (dungeonItem.mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].GREEN_PENDANT) {
                        hasGreenPendant = true;
                    }
                });
                return this.currentDungeonMap.id === 'lw-saha' && !hasGreenPendant;
            }
            var redCrystalCount = 0;
            this.items.dungeonItemsArray.forEach(function (dungeonItem) {
                if (dungeonItem.mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].RED_CRYSTAL) {
                    redCrystalCount++;
                }
            });
            return this.currentDungeonMap.id === 'dw-bomb-shop' && redCrystalCount < 2;
        }
        if (this.config.dungeonItems === 'standard') {
            return this.currentMap === worldOrType;
        }
        if (this.currentMap === worldOrType) {
            return this.getAvailableDungeonMapIndexes().length > 0;
        }
        if (worldOrType === 'green-pendant') {
            var hasGreenPendant = false;
            this.items.dungeonItemsArray.forEach(function (dungeonItem) {
                if (dungeonItem.mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].GREEN_PENDANT) {
                    hasGreenPendant = true;
                }
            });
            return (!hasGreenPendant &&
                this.currentMap === 'light-world' &&
                (this.config.mode !== 'inverted' || this.items.canInvertedLW()));
        }
        if (worldOrType === 'red-crystals') {
            var redCrystalCount = 0;
            this.items.dungeonItemsArray.forEach(function (dungeonItem) {
                if (dungeonItem.mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_9__models_dungeon_prize_enum__["a" /* DungeonPrize */].RED_CRYSTAL) {
                    redCrystalCount++;
                }
            });
            return (redCrystalCount < 2 &&
                this.items.canSouthDarkWorld(this.config.canGlitch) &&
                this.currentRegion === 'ow' &&
                ((this.config.mode !== 'inverted' && this.currentMap === 'dark-world') ||
                    (this.config.mode === 'inverted' &&
                        this.currentMap === 'light-world' &&
                        this.items.canInvertedLW())));
        }
        return false;
    };
    DungeonItemsComponent.prototype.checkMedallion = function (medallionType) {
        if (medallionType === 'tr' && (this.canViewTRMedallion() || this.config.isFullMap)) {
            this.items.trMedallionChecked = true;
        }
        if (medallionType === 'mm' && (this.canViewMMMedallion() || this.config.isFullMap)) {
            this.items.mmMedallionChecked = true;
        }
        this.gameService.updateData(this.items, this.currentMap, this.currentRegion);
    };
    DungeonItemsComponent.prototype.canViewTRMedallion = function () {
        return (!this.config.isFullMap &&
            (this.config.mode === 'inverted'
                ? this.items.canInvertedEastDarkDeathMountain(this.config.canGlitch) &&
                    this.currentMap === 'dark-world'
                : this.items.canDarkEastDeathMountain(this.config.canGlitch) &&
                    this.currentMap === 'dark-world' &&
                    (this.currentRegion === 'dm' || this.currentRegion === 'all')));
    };
    DungeonItemsComponent.prototype.canViewMMMedallion = function () {
        return (!this.config.isFullMap &&
            (this.config.mode === 'inverted'
                ? this.items.canMire(this.config) && this.currentMap === 'dark-world'
                : this.items.canMire(this.config) &&
                    this.currentMap === 'dark-world' &&
                    (this.currentRegion === 'mire' || this.currentRegion === 'all')));
    };
    DungeonItemsComponent.prototype.changeMap = function (mapId) {
        if (mapId === 'dw-desert') {
            this.checkMedallion('mm');
        }
        else if (mapId === 'dw-trportal') {
            this.checkMedallion('tr');
        }
        this.currentMap = mapId;
        this.gameService.updateData(this.items, this.currentMap, this.currentRegion);
        this.clearTooltip();
    };
    DungeonItemsComponent.prototype.getMapBg = function () {
        if (this.currentMap === 'light-world') {
            return 'url(assets/light-world.png)';
        }
        else if (this.currentMap === 'dark-world') {
            return 'url(assets/dark-world.png)';
        }
        else if (this.currentMap === 'ip-switch-room' && this.items.ipBlockPushed) {
            return 'url("assets/maps/Ice Palace/ip-switch-room-block.png")';
        }
        else if (__WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__["a" /* Dungeon */].pegMaps.indexOf(this.currentMap) === -1) {
            return 'url("assets/maps/' + this.currentDungeon.name + '/' + this.currentMap + '.png")';
        }
        else if (__WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__["a" /* Dungeon */].floodMaps.indexOf(this.currentMap) > -1 && this.items.spFlooded) {
            return ('url("assets/maps/' +
                this.currentDungeon.name +
                '/' +
                this.currentMap +
                '-flooded' +
                (this.items.crystalSwitch ? '-flipped' : '') +
                '.png")');
        }
        else {
            return ('url("assets/maps/' +
                this.currentDungeon.name +
                '/' +
                this.currentMap +
                (this.items.crystalSwitch ? '-flipped' : '') +
                '.png")');
        }
    };
    DungeonItemsComponent.prototype.onMapClicked = function (event) {
        if (this.isDev) {
            console.log((event.offsetX / 555) * 100, (event.offsetY / 555) * 100);
        }
    };
    DungeonItemsComponent.prototype.getSignpostText = function (signType) {
        if (signType === 'tower') {
            return 'You need ' + this.config.towerCrystals + ' crystals to enter';
        }
        switch (this.config.goal) {
            case 'ganon':
                return 'You need ' + this.config.ganonCrystals + ' crystals and have defeated Agahnim 2';
            case 'fast_ganon':
                return 'You only need ' + this.config.ganonCrystals + ' crystals to beat Ganon';
            case 'pedestal':
                return 'You need to get to the pedestal';
            case 'dungeons':
                return "You need to defeat all of Ganon's bosses";
        }
    };
    DungeonItemsComponent.prototype.openModal = function (template) {
        this.modalRef = this._modalService.show(template);
    };
    DungeonItemsComponent.prototype.copyClipboard = function () {
        var _this = this;
        var nav = window.navigator;
        nav.clipboard.writeText(this.config.data).then(function () {
            _this.clipboardMessage = 'Copied!';
        }, function () {
            _this.clipboardMessage = 'Failed to copy';
        });
    };
    DungeonItemsComponent.prototype.closeModal = function () {
        this.modalRef.hide();
        this.clipboardMessage = '';
    };
    DungeonItemsComponent.prototype.preloadMapsAndIcons = function () {
        var _this = this;
        var iconUrls = [
            'assets/node-icons/big_door.png',
            'assets/node-icons/closed_big_chest.png',
            'assets/node-icons/closed_chest.png',
            'assets/node-icons/key_door.png',
            'assets/node-icons/open_chest.png',
            'assets/node-icons/open_big_chest.png',
            'assets/node-icons/small_key.png',
            'assets/node-icons/warp.png',
            'assets/item-icons/compass.png',
            'assets/item-icons/compassEmpty.png',
            'assets/item-icons/bigKey.png',
            'assets/item-icons/bigKeyEmpty.png',
            'assets/item-icons/map.png',
            'assets/item-icons/mapEmpty.png',
            'assets/node-icons/open_door.png',
        ];
        if (!this.config.isFullMap) {
            iconUrls.push('assets/light-world.png');
            iconUrls.push('assets/dark-world.png');
        }
        this.preloadedImages = [];
        iconUrls.forEach(function (url, index) {
            _this.preloadedImages[index] = new Image();
            _this.preloadedImages[index].src = url;
        });
    };
    DungeonItemsComponent.prototype.getAll = function () {
        var _this = this;
        [
            'sword',
            'sword',
            'glove',
            'glove',
            'bow',
            'moonPearl',
            'hookshot',
            'fireRod',
            'iceRod',
            'bombos',
            'ether',
            'quake',
            'lamp',
            'hammer',
            'flute',
            'somaria',
            'book',
            'cape',
            'mirror',
            'mushroom',
            'boots',
            'flippers',
            'crystal1',
            'crystal2',
            'crystal3',
            'crystal4',
            'crystal5',
            'crystal6',
            'crystal7',
            'pendantCourage',
            'pendantPower',
            'pendantWisdom',
            'agahnim2',
            'smallKey-2',
            'smallKey-3',
            'smallKey-4',
            'smallKey-4',
            'smallKey-5',
            'smallKey-5',
            'smallKey-5',
            'smallKey-5',
            'smallKey-5',
            'smallKey-5',
            'smallKey-6',
            'smallKey-7',
            'smallKey-7',
            'smallKey-7',
            'smallKey-8',
            'smallKey-9',
            'smallKey-9',
            'smallKey-10',
            'smallKey-10',
            'smallKey-10',
            'smallKey-11',
            'smallKey-11',
            'smallKey-11',
            'smallKey-11',
            'smallKey-12',
            'smallKey-12',
            'smallKey-12',
            'smallKey-12',
            'bigKey-1',
            'bigKey-2',
            'bigKey-3',
            'bigKey-5',
            'bigKey-6',
            'bigKey-7',
            'bigKey-8',
            'bigKey-9',
            'bigKey-10',
            'bigKey-11',
            'bigKey-12',
        ].forEach(function (itemName) {
            _this.items.add(itemName, 'light-world');
        });
        this.items.isFluteActivated = true;
        this.items.gameState = 4;
        this.gameService.updateData(this.items, this.currentMap, this.currentRegion);
    };
    DungeonItemsComponent.prototype.getBootsDw = function () {
        this.items.add('glove', 'light-world');
        this.items.add('glove', 'light-world');
        this.items.add('flute', 'light-world');
        this.items.isFluteActivated = true;
        this.items.add('book', 'light-world');
        this.items.add('hookshot', 'light-world');
        this.items.add('mirror', 'light-world');
        this.items.add('moonPearl', 'light-world');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_items_model__["a" /* Items */])
    ], DungeonItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DungeonItemsComponent.prototype, "currentMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__models_config_model__["a" /* Config */])
    ], DungeonItemsComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "addedItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "viewItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "cantItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "hintCheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "finishedDungeon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DungeonItemsComponent.prototype, "onGameFinished", void 0);
    DungeonItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/components/dungeon-items/dungeon-items.component.html"),
            styles: [__webpack_require__("../../../../../src/components/dungeon-items/dungeon-items.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_item_names_service__["a" /* ItemNamesService */]])
    ], DungeonItemsComponent);
    return DungeonItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/components/end-stats/end-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stat-line {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.icon {\n  width: 32px;\n  height: 32px;\n  background-color: #d3d3d3;\n  border-radius: 5px;\n}\n\n:host-context(.dark-theme) h2 {\n  color: var(--dark-text-color);\n  color: var(--dark-text-color);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/end-stats/end-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>GG, you saved the world, etc.</h2>\n\n<accordion>\n  <accordion-group heading=\"Quest Performance\" [isOpen]=\"true\">\n    <div *ngFor=\"let table of getQuestPerformanceTables()\">\n      <h3>{{ table[0] }}</h3>\n      <table class=\"table table-striped\">\n        <tbody>\n          <tr *ngFor=\"let row of table[1]\">\n            <td class=\"col-xs-6\">{{ row[0] }}</td>\n            <td class=\"col-xs-6\">{{ row[1] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </accordion-group>\n  <accordion-group heading=\"Dungeon Info\">\n    <div *ngFor=\"let table of getDungeonInfoTables()\">\n      <h3>{{ table[0] }}</h3>\n      <table class=\"table table-striped\">\n        <tbody>\n          <tr *ngFor=\"let row of table[1]\">\n            <td class=\"col-xs-6\">{{ row[0] }}</td>\n            <td class=\"col-xs-6\">{{ row[1] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </accordion-group>\n  <accordion-group heading=\"Item Info\">\n    <div *ngFor=\"let table of getItemInfoTables()\">\n      <h3>{{ table[0] }}</h3>\n      <table class=\"table table-striped\">\n        <tbody>\n          <tr *ngFor=\"let row of table[1]\">\n            <td class=\"col-xs-1\">\n              <img class=\"icon\" [src]=\"'assets/item-icons/' + row[0] + '.png'\">\n            </td>\n            <td class=\"col-xs-5\">{{ row[1] }}</td>\n            <td class=\"col-xs-6\">{{ row[2] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </accordion-group>\n  <accordion-group heading=\"Seed Info\">\n    <div *ngFor=\"let table of getSeedDataTables()\">\n      <table class=\"table table-striped\">\n        <tbody>\n          <tr *ngFor=\"let row of table[1]\">\n            <td class=\"col-xs-6\">{{ row[0] }}</td>\n            <td class=\"col-xs-6\">{{ row[1] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </accordion-group>\n</accordion>\n"

/***/ }),

/***/ "../../../../../src/components/end-stats/end-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EndStatsComponent = (function () {
    function EndStatsComponent(_gameService, _itemNamesService) {
        this._gameService = _gameService;
        this._itemNamesService = _itemNamesService;
        this.totals = {
            easy: { containers: 11, pieces: 24, swords: 4, mails: 3, shields: 3, aItems: 7 },
            normal: { containers: 11, pieces: 24, swords: 4, mails: 3, shields: 3, aItems: 6 },
            hard: { containers: 6, pieces: 20, swords: 3, mails: 2, shields: 2, aItems: 5 },
            expert: { containers: 1, pieces: 20, swords: 2, mails: 1, shields: 1, aItems: 5 },
            insane: { containers: 0, pieces: 0, swords: 2, mails: 1, shields: 0, aItems: 5 },
        };
    }
    EndStatsComponent.prototype.ngOnInit = function () { };
    EndStatsComponent.prototype.getQuestPerformanceTables = function () {
        var tables = [];
        tables.push(['Item Locations Checked', this.generateItemLocationsCheckedTable()]);
        tables.push(['Item Completion', this.generateItemCompletionTable()]);
        return tables;
    };
    EndStatsComponent.prototype.generateItemLocationsCheckedTable = function () {
        var rows = [];
        rows.push(['Overworld', this.items.stats.overworldCount + '/100']);
        rows.push(['Dungeons', this.items.stats.dungeonCount + '/116']);
        rows.push(['Total', this.items.stats.totalCount + '/216']);
        return rows;
    };
    EndStatsComponent.prototype.generateItemCompletionTable = function () {
        var rows = [];
        rows.push(['Y Items', this.getYItemCount() + '/27']);
        rows.push(['Swords', this.items.sword + '/' + this.totals.normal.swords]);
        rows.push(['Shields', this.items.shield + '/' + this.totals.normal.shields]);
        rows.push(['Mails', this.items.tunic + '/' + this.totals.normal.mails]);
        rows.push(['Heart Pieces', this.items.stats.heartPieces + '/' + this.totals.normal.pieces]);
        rows.push(['Heart Containers', this.items.stats.heartContainers + '/' + +this.totals.normal.containers]);
        rows.push(['Other Items', this.getOtherItemCount() + '/' + this.totals.normal.aItems]);
        return rows;
    };
    EndStatsComponent.prototype.generateDungeonCompletionTable = function () {
        var rows = [];
        rows.push(['Maps', this.items.stats.maps + '/12']);
        rows.push(['Compasses', this.items.stats.compasses + '/11']);
        rows.push(['Small Keys', this.items.stats.sks + (this.config.isFullMap ? '/47' : '/44')]);
        rows.push(['Big Keys', this.items.stats.bks + '/11']);
        rows.push(['Big Chests', this.items.stats.bigChests + '/11']);
        rows.push(['Pendants', this.getPendantCount() + '/3']);
        rows.push(['Crystals', this.getCrystalCount() + '/7']);
        rows.push(['Bosses', this.items.stats.bosses + '/13']);
        return rows;
    };
    EndStatsComponent.prototype.generateSeedDataTable = function () {
        var rows = [];
        rows.push(['Item Placement', this.config.advancedItems ? 'Advanced' : 'Basic']);
        var dungeonItemShuffle;
        switch (this.config.dungeonItems) {
            case 'standard':
                dungeonItemShuffle = 'Standard';
                break;
            case 'mc':
                dungeonItemShuffle = 'Maps/Compasses';
                break;
            case 'mcs':
                dungeonItemShuffle = 'Maps/Compasses/Small Keys';
                break;
            case 'full':
                dungeonItemShuffle = 'Keysanity';
        }
        rows.push(['Dungeon Item Shuffle', dungeonItemShuffle]);
        var accessibilityLabel;
        switch (this.config.accessibility) {
            case 'items':
                accessibilityLabel = '100% Inventory';
                break;
            case 'locations':
                accessibilityLabel = '100% Locations';
                break;
            case 'none':
                accessibilityLabel = 'Beatable';
        }
        rows.push(['Accessibility', accessibilityLabel]);
        var goalLabel;
        switch (this.config.goal) {
            case 'ganon':
                goalLabel = 'Defeat Ganon';
                break;
            case 'fast_ganon':
                goalLabel = 'Fast Ganon';
                break;
            case 'dungeons':
                goalLabel = 'All Dungeons';
                break;
            case 'pedestal':
                goalLabel = 'Master Sword Pedestal';
                break;
            case 'triforce':
                goalLabel = 'Triforce Hunt';
        }
        rows.push(['Goal', goalLabel]);
        rows.push(['Open Tower', this.config.towerCrystals]);
        rows.push(['Ganon Vulnerable', this.config.ganonCrystals]);
        var worldStateLabel;
        switch (this.config.mode) {
            case 'standard':
                worldStateLabel = 'Standard';
                break;
            case 'open':
                worldStateLabel = 'Open';
                break;
            case 'inverted':
                worldStateLabel = 'Inverted';
        }
        rows.push(['World State', worldStateLabel]);
        rows.push(['Enemizer', this.config.isEnemizer ? 'On' : 'Off']);
        rows.push(['Hints', this.config.hintsEnabled ? 'On' : 'Off']);
        var weaponsLabel;
        switch (this.config.weapons) {
            case 'randomized':
                weaponsLabel = 'Randomized';
                break;
            case 'assured':
                weaponsLabel = 'Assured';
                break;
            case 'vanilla':
                weaponsLabel = 'Vanilla';
                break;
            case 'swordless':
                weaponsLabel = 'Swordless';
        }
        rows.push(['Swords', weaponsLabel]);
        return rows;
    };
    EndStatsComponent.prototype.getDungeonInfoTables = function () {
        var tables = [];
        tables.push(['General Dungeon Data', this.generateDungeonCompletionTable()]);
        tables.push(['Dungeon Completion', this.generateDungeonDataTable()]);
        tables.push(['Boss Kill Stats', this.generateBossSwordsTable()]);
        return tables;
    };
    EndStatsComponent.prototype.getItemInfoTables = function () {
        var tables = [];
        tables.push(['Locations Pre Items', this.generateItemProgressTable()]);
        return tables;
    };
    EndStatsComponent.prototype.getSeedDataTables = function () {
        var tables = [];
        tables.push(['Seed Information', this.generateSeedDataTable()]);
        return tables;
    };
    EndStatsComponent.prototype.generateDungeonDataTable = function () {
        var _this = this;
        var rows = [];
        var fullClears = 0;
        var bossKilledLeftItems = 0;
        var cleanedItems = 0;
        var abandonedDungeons = 0;
        var untouchedDungeons = 0;
        this.items.dungeonItemsArray.forEach(function (dungeonItem, index) {
            if (index !== 0 && index !== 4 && index !== 12) {
                if (dungeonItem.itemsLeft === 0 && dungeonItem.isBossDefeated) {
                    fullClears++;
                }
                else if (dungeonItem.isBossDefeated) {
                    bossKilledLeftItems++;
                }
                else if (dungeonItem.itemsLeft !== 0 || dungeonItem.isBossDefeated) {
                    if (dungeonItem.itemsLeft !== _this.items.startingItemCount[index] ||
                        dungeonItem.isBossDefeated ||
                        dungeonItem.hasCompass ||
                        dungeonItem.hasMap ||
                        dungeonItem.hasBigKey ||
                        dungeonItem.smallKeys !== 0) {
                        abandonedDungeons++;
                    }
                    else {
                        untouchedDungeons++;
                    }
                }
                else {
                    cleanedItems++;
                }
            }
        });
        rows.push(['Full Clears', fullClears]);
        rows.push(['Killed Boss, left Items', bossKilledLeftItems]);
        rows.push(['Cleaned Items', cleanedItems]);
        rows.push(['Abandoned Dungeons', abandonedDungeons]);
        rows.push(['Untouched Dungeons', untouchedDungeons]);
        return rows;
    };
    EndStatsComponent.prototype.generateBossSwordsTable = function () {
        var rows = [];
        rows.push(['Swordless Kills', this.items.stats.sword0B + '/' + this.items.stats.bosses]);
        rows.push(['Fighter Sword Kills', this.items.stats.sword1B + '/' + this.items.stats.bosses]);
        rows.push(['Master Sword Kills', this.items.stats.sword2B + '/' + this.items.stats.bosses]);
        rows.push(['Tempered Sword Kills', this.items.stats.sword3B + '/' + this.items.stats.bosses]);
        rows.push(['Gold Sword Kills', this.items.stats.sword4B + '/' + this.items.stats.bosses]);
        return rows;
    };
    EndStatsComponent.prototype.generateItemProgressTable = function () {
        var _this = this;
        var rows = [];
        var usedMedallions = [];
        rows.push(['boots', 'Boots', this.items.stats.preBoots]);
        rows.push(['mirror', 'Mirror', this.items.stats.preMirror]);
        rows.push(['flute', 'Flute', this.items.stats.preFlute]);
        rows.push(['glove2', 'Titan Mitts', this.items.stats.preMitts]);
        rows.push(['glove1', 'Power Gloves', this.items.stats.preGlove]);
        rows.push(['bow', 'Bow', this.items.stats.preBow]);
        rows.push(['bow2', 'Silver Arrows', this.items.stats.preSilvers]);
        rows.push(['hammer', 'Hammer', this.items.stats.preHammer]);
        rows.push(['sword2', 'Master Sword', this.items.stats.preMS]);
        rows.push(['fireRod', 'Fire Rod', this.items.stats.preFireRod]);
        rows.push(['iceRod', 'Ice Rod', this.items.stats.preIceRod]);
        rows.push(['flippers', 'Flippers', this.items.stats.preFlippers]);
        rows.push(['somaria', 'Cane of Somaria', this.items.stats.preSomaria]);
        rows.push(['hookshot', 'Hookshot', this.items.stats.preHook]);
        rows.push(['lamp', 'Lamp', this.items.stats.preLamp]);
        rows.push(['moonPearl', 'Moon Pearl', this.items.stats.prePearl]);
        rows.push(['agahnim', 'Dark World Access', this.items.stats.preDW]);
        if (this.config.goal === 'pedestal' || this.config.goal === 'dungeons') {
            var prizes = this._gameService.getDungeonPrizes();
            Object.keys(prizes).forEach(function (dungeonName) {
                if (prizes[dungeonName].indexOf('Pendant') > -1) {
                    var pendantItem = _this._itemNamesService.getItemByLongName(prizes[dungeonName]).shortName;
                    rows.push([pendantItem, dungeonName, _this.items.preEachPendant[pendantItem]]);
                    var medallionItem = undefined;
                    if (dungeonName !== 'Misery Mire' || usedMedallions.includes(_this.config.mmMedallion)) {
                        if (dungeonName === 'Turtle Rock' && !usedMedallions.includes(_this.config.trMedallion)) {
                            medallionItem = _this._itemNamesService.getItemByShortName(_this.config.trMedallion);
                        }
                    }
                    else {
                        medallionItem = _this._itemNamesService.getItemByShortName(_this.config.mmMedallion);
                    }
                    if (medallionItem) {
                        usedMedallions.push(medallionItem.shortName);
                        rows.push([medallionItem.shortName, medallionItem.longName, _this.items.preEachMedallion[medallionItem.shortName]]);
                    }
                }
            });
            rows.push(['triforce', 'Master Sword Pedestal', this.items.stats.totalCount]);
        }
        if (this.config.goal === 'ganon' || this.config.goal === 'dungeons') {
            var prizes = this._gameService.getDungeonPrizes();
            Object.keys(prizes).forEach(function (dungeonName) {
                if (prizes[dungeonName].indexOf('Crystal') > -1 &&
                    (rows.push(['crystal', dungeonName, _this.items.preEachDun[+prizes[dungeonName].charAt(8) - 1]]),
                        (dungeonName === 'Misery Mire' && !usedMedallions.includes(_this.config.mmMedallion)) ||
                            (dungeonName === 'Turtle Rock' && !usedMedallions.includes(_this.config.trMedallion)))) {
                    var medallionItem = _this._itemNamesService.getItemByShortName(_this.config.mmMedallion);
                    usedMedallions.push(medallionItem.shortName);
                    rows.push([medallionItem.shortName, medallionItem.longName, _this.items.preEachMedallion[medallionItem.shortName]]);
                }
            });
            rows.push(['bigKey', 'Ganons Tower Big Key', this.items.stats.totalItemsPreGTBK]);
            rows.push(['Ganon', 'Ganon', this.items.stats.preGanon]);
        }
        rows.sort(function (a, b) {
            if (a[2] === 0) {
                return 1;
            }
            else if (b[2] === 0) {
                return -1;
            }
            else {
                return a[2] - b[2];
            }
        });
        return rows.map(function (row) {
            if (row[2] === 0) {
                return [row[0], row[1], 'Not Found'];
            }
            else {
                return row;
            }
        });
    };
    EndStatsComponent.prototype.getYItemCount = function () {
        var _this = this;
        var count = 0;
        [
            'hookshot', 'bombs', 'shovel', 'mushroom', 'powder', 'fireRod', 'iceRod',
            'bombos', 'ether', 'quake', 'lamp', 'hammer', 'flute', 'net', 'book',
            'somaria', 'byrna', 'cape', 'mirror',
        ].forEach(function (itemName) {
            if (_this.items[itemName]) {
                count++;
            }
        });
        count += this.items.bottle;
        count += this.items.boomerang;
        if (this.items.hasBow()) {
            count++;
        }
        return count;
    };
    EndStatsComponent.prototype.getOtherItemCount = function () {
        var _this = this;
        var count = 0;
        ['moonPearl', 'flippers', 'boots'].forEach(function (itemName) {
            if (_this.items[itemName]) {
                count++;
            }
        });
        count += this.items.halfMagic;
        return (count += this.items.glove);
    };
    EndStatsComponent.prototype.getPendantCount = function () {
        var _this = this;
        var count = 0;
        ['pendantCourage', 'pendantPower', 'pendantWisdom'].forEach(function (pendantName) {
            if (_this.items[pendantName]) {
                count++;
            }
        });
        return count;
    };
    EndStatsComponent.prototype.getCrystalCount = function () {
        var _this = this;
        var count = 0;
        ['crystal1', 'crystal2', 'crystal3', 'crystal4', 'crystal5', 'crystal6', 'crystal7'].forEach(function (crystalName) {
            if (_this.items[crystalName]) {
                count++;
            }
        });
        return count;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_items_model__["a" /* Items */])
    ], EndStatsComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_config_model__["a" /* Config */])
    ], EndStatsComponent.prototype, "config", void 0);
    EndStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-end-stats',
            template: __webpack_require__("../../../../../src/components/end-stats/end-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/components/end-stats/end-stats.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_2__services_item_names_service__["a" /* ItemNamesService */]])
    ], EndStatsComponent);
    return EndStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/components/game-menu/game-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/game-menu/game-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n"

/***/ }),

/***/ "../../../../../src/components/game-menu/game-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameMenuComponent = (function () {
    function GameMenuComponent() {
        this.onClickedWarpButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GameMenuComponent.prototype.ngOnInit = function () { };
    GameMenuComponent.prototype.onWarp = function () {
        this.onClickedWarpButton.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_items_model__["a" /* Items */])
    ], GameMenuComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GameMenuComponent.prototype, "currentMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GameMenuComponent.prototype, "onClickedWarpButton", void 0);
    GameMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-menu',
            template: __webpack_require__("../../../../../src/components/game-menu/game-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/components/game-menu/game-menu.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], GameMenuComponent);
    return GameMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-obj {\n  padding-left:0;\n  padding-right:0\n}\n\n.title {\n  margin-top:0\n}\n\nh1 {\n  padding-left:15px\n}\n\n@media (max-width:768px) {\n  .container-fluid {\n    padding-left:2px;\n    padding-right:2px\n  }\n  h1 {\n    margin-top:2px\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\"><small class=\"hidden-xs\">{{ seedDescription }}</small></h1>\n<div *ngIf=\"gameState === 'loading'\" class=\"container\">\n  Loading...\n</div>\n<div *ngIf=\"gameState === 'playing'\" class=\"container-fluid\">\n\n  <app-item-tracker class=\"col-md-3 col-sm-4 col-xs-3 game-obj\"\n    [items]=\"items\"\n    [config]=\"config\"\n    [dungeonsData]=\"dungeonsData\">\n  </app-item-tracker>\n  <app-map class=\"col-md-6 col-sm-8 col-xs-9 game-obj\"\n    [items]=\"items\"\n    [(currentMap)]=\"currentMap\"\n    [config]=\"config\"\n    (addedItem)=\"onAddedItem($event, 'get')\"\n    (viewItem)=\"onAddedItem($event, 'view')\"\n    (cantItem)=\"onCantItem($event)\"\n    (hintCheck)=\"onHintChecked($event)\"\n    (finishedDungeon)=\"onDungeonFinished($event)\"\n    (onGameFinished)=\"onGameFinished()\">\n  </app-map>\n  <app-item-log class=\"col-md-3 col-xs-12 game-obj\"\n    [itemLogList]=\"itemLog\"\n    [items]=\"items\">\n  </app-item-log>\n  <app-options></app-options>\n  <app-game-menu class=\"col-sm-6 game-obj\"\n    [items]=\"items\"\n    [currentMap]=\"currentMap\">\n  </app-game-menu>\n\n</div>\n<div *ngIf=\"gameState === 'finished'\" class=\"container\">\n  <div>\n    <app-end-stats\n      [items]=\"items\"\n      [config]=\"config\">\n    </app-end-stats>\n  </div>\n  <div>\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onBackMainMenu()\">\n      Return to Main Menu</button>\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onContinuePlaying()\">\n      Continue Playing</button>\n  </div>\n</div>\n\n<button *ngIf=\"isDev\" (click)=\"onCreditWarp()\">Credits Warp</button>\n"

/***/ }),

/***/ "../../../../../src/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_service__ = __webpack_require__("../../../../../src/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_seed_service__ = __webpack_require__("../../../../../src/services/seed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GameComponent = (function () {
    function GameComponent(_route, _router, gameService, _seedService, _itemNamesService, _location) {
        this._route = _route;
        this._router = _router;
        this.gameService = gameService;
        this._seedService = _seedService;
        this._itemNamesService = _itemNamesService;
        this._location = _location;
        this.modeSelected = 'standard';
        this.isDev = false;
        this.seedDescription = '';
        this.seedNum = '';
        this.errorMessage = '';
        this.currentMap = 'light-world';
        this.lastWorld = 'light-world';
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDev = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* isDevMode */])();
        this.gameState = 'loading';
        this._seedService.ping();
        if (this._router.url.indexOf('open') > -1) {
            this.gameMode = 'open';
        }
        else if (this._router.url.indexOf('standard') > -1) {
            this.gameMode = 'standard';
        }
        else if (this._router.url.indexOf('inverted') > -1) {
            this.gameMode = 'inverted';
        }
        else if (this._router.url.indexOf('qual') > -1) {
            this.gameMode = 'quals';
        }
        else if (this._router.url.indexOf('mystery') > -1) {
            this.gameMode = 'mystery';
        }
        this.preloadIcons();
        this.sub = this._route.queryParams.subscribe(function (params) {
            var seedConfig = {};
            params.seeddata;
            seedConfig.item_placement = params.item_placement ? params.item_placement : 'advanced';
            seedConfig.dungeon_items = params.dItems ? params.dItems : 'standard';
            seedConfig.accessibility = params.accessibility ? params.accessibility : 'items';
            seedConfig.weapons = params.swords ? params.swords : 'randomized';
            seedConfig.goal = params.goal ? params.goal : 'ganon';
            seedConfig.entry_crystals_tower = params.tower ? params.tower : '7';
            seedConfig.entry_crystals_ganon = params.ganon ? params.ganon : '7';
            seedConfig.enemizer = params.enemizer ? params.enemizer : 'none';
            seedConfig.hints = params.hints ? params.hints : 'off';
            if (params.seed) {
                seedConfig.seed = params.seed;
                seedConfig.mode = 'open';
            }
            else {
                seedConfig.mode = _this.gameMode;
            }
            var isFullMap = false;
            if (params.fullMap) {
                isFullMap = true;
            }
            if (params.seeddata) {
                _this.gameInit(params.seeddata, true, isFullMap, [], '', [], params.seeddata.charAt(24), params.seeddata.charAt(25), '');
            }
            else if (_this._seedService.lastSeed &&
                Date.now() - _this._seedService.lastSeedTimestamp < 2000 &&
                _this._seedService.lastSeedParams) {
                _this.gameInit(_this._seedService.lastSeed.data, true, isFullMap, _this._seedService.lastSeed.hints, _this._seedService.lastSeed.silversHint, _this._seedService.lastSeed.bosses, _this._seedService.lastSeed.reqTower, _this._seedService.lastSeed.reqGanon, _this._seedService.lastSeed.seed);
            }
            else {
                _this._seedService
                    .getSeed(_this.gameMode, seedConfig, false, _this.gameMode === 'quals')
                    .subscribe(function (seedResponse) {
                    _this.gameInit(seedResponse.data, true, isFullMap, seedResponse.hints, seedResponse.silversHint, seedResponse.bosses, seedResponse.reqTower, seedResponse.reqGanon, seedResponse.seed);
                });
            }
        });
    };
    GameComponent.prototype.onCreditWarp = function () {
        this.gameState = 'finished';
    };
    GameComponent.prototype.ngOnChanges = function () {
        if (this.currentMap === 'light-world' || this.currentMap === 'dark-world') {
            this.lastWorld = this.currentMap;
        }
    };
    GameComponent.prototype.gameInit = function (seedData, isLogic, isFullMap, hints, silversHint, bosses, towerCrystals, ganonCrystals, seed) {
        var _this = this;
        if (seed === undefined) {
            seed = '';
        }
        if (seedData) {
            this.gameService.loadSeed(seedData, seed, isLogic, isFullMap, bosses, hints);
            this.items = new __WEBPACK_IMPORTED_MODULE_6__models_items_model__["a" /* Items */]();
            this.config = this.gameService.config;
            this.config.isFullMap = isFullMap;
            this.config.isMystery = this.gameMode === 'mystery';
            if (this.gameMode === 'quals') {
                this.config.ganonCrystals = 7;
                this.config.towerCrystals = 7;
            }
            this.config.silversHint = silversHint;
            var startingWorld = 'light-world';
            if (this.config.mode === 'inverted') {
                __WEBPACK_IMPORTED_MODULE_7__models_dungeon_model__["a" /* Dungeon */].lwDungeons = ['Eastern Palace', 'Desert Palace', 'Tower of Hera'];
                this.config.isFullMap = false;
            }
            if (this.config.isFullMap) {
                if (this.config.mode.indexOf('standard') > -1) {
                    this.currentMap = 'lw-linkshouse';
                }
                else if (this.config.mode === 'inverted') {
                    this.config.isFullMap = false;
                }
                else {
                    this.currentMap = 'lw-sq';
                }
            }
            if (!this.config.isFullMap) {
                startingWorld = this.config.mode === 'inverted' ? 'dark-world' : 'light-world';
                this.currentMap = startingWorld;
                this.lastWorld = startingWorld;
            }
            if (this.config.weapons === 'assured') {
                this.items.sword = 1;
            }
            this.config.towerCrystalsRequested = towerCrystals;
            this.config.ganonCrystalsRequested = ganonCrystals;
            this.items.setup(this.config.dungeonItems, this.config.isMystery, this.gameService.dungeonsData, this.config.isFullMap, this.config.bosses, this.config.mode === 'inverted');
            if (this.config.mode.indexOf('standard') === -1 || !this.config.isFullMap) {
                this.items.gameState = 4;
            }
            this.itemLog = [];
            this.dungeonsData = this.gameService.dungeonsData;
            this.gameState = 'playing';
            if (this.config.isFullMap) {
                this.gameService.updateData(this.items, startingWorld, startingWorld);
            }
            else {
                this.gameService.updateData(this.items, startingWorld, 'ow');
            }
            setTimeout(function () {
                _this.preloadMaps();
            }, 10000);
            if (this.config.isMystery) {
                this.seedDescription = 'Mystery Seed';
            }
            else {
                this.seedDescription = '(';
                switch (this.config.dungeonItems) {
                    case 'mc':
                        this.seedDescription += 'MC Shuffle ';
                        break;
                    case 'mcs':
                        this.seedDescription += 'MCS Shuffle ';
                        break;
                    case 'full':
                        this.seedDescription += 'Keysanity ';
                }
                switch (this.config.mode) {
                    case 'open':
                        this.seedDescription += 'Open ';
                        break;
                    case 'inverted':
                        this.seedDescription += 'Inverted ';
                        break;
                    default:
                        this.seedDescription += 'Standard ';
                }
                if (this.config.ganonCrystalsRequested !== '7' ||
                    this.config.towerCrystalsRequested !== '7') {
                    this.seedDescription +=
                        this.config.towerCrystalsRequested +
                            '/' +
                            this.config.ganonCrystalsRequested +
                            ' Crystals ';
                }
                switch (this.config.weapons) {
                    case 'vanilla':
                        this.seedDescription += 'Vanilla Swords ';
                        break;
                    case 'swordless':
                        this.seedDescription += 'Swordless ';
                }
                if (this.config.isEnemizer) {
                    this.seedDescription += 'Enemizer ';
                }
                switch (this.config.goal) {
                    case 'pedestal':
                        this.seedDescription += 'Pedestal ';
                        break;
                    case 'dungeons':
                        this.seedDescription += 'All Dungeons ';
                        break;
                    case 'triforce':
                        this.seedDescription += 'Triforce Hunt ';
                }
                this.seedDescription = this.seedDescription.slice(0, -1);
                this.seedDescription += ')';
            }
            if (this.config.vtSeedNumber) {
                this.seedDescription += ' Seed: ' + this.config.vtSeedNumber;
                this._route.queryParams.subscribe(function (params) {
                    if (!params.seed) {
                        var updatedParams = JSON.parse(JSON.stringify(params));
                        updatedParams.seed = _this.config.vtSeedNumber;
                        _this._router.navigate([_this._router.url.split('?')[0]], {
                            queryParams: updatedParams,
                        });
                    }
                });
            }
        }
        else {
            this._router.navigate(['/']);
        }
    };
    GameComponent.prototype.onAddedItem = function (eventData, eventType) {
        var _this = this;
        var node = eventData[0];
        var region = eventData[1];
        var currentRegion = eventData[2];
        node.prize.forEach(function (prizeId, prizeIndex) {
            if (eventType !== 'view') {
                var itemInfo = _this._itemNamesService.getItemById(prizeId);
                _this.items.add(itemInfo.shortName, region);
            }
            var convertedName = _this._itemNamesService.convertItemName(prizeId, eventType, _this.items);
            _this.itemLog.unshift({
                item: prizeId,
                shortName: convertedName[0],
                longName: convertedName[1],
                location: node.tooltip ? node.tooltip : node.id,
                region: region,
                type: eventType,
            });
        });
        if (this.items.triforcePieces >= 20) {
            this.onGameFinished();
        }
        this.gameService.updateData(this.items, region, currentRegion);
    };
    GameComponent.prototype.onCantItem = function (eventData) {
        var node = eventData[0];
        var region = eventData[1];
        var hasKey = eventData[2];
        var message = '';
        if (+node.status === __WEBPACK_IMPORTED_MODULE_8__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED || +node.status === __WEBPACK_IMPORTED_MODULE_8__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST) {
            if (!hasKey) {
                message = 'Missing Big Key';
            }
        }
        else if (+node.status === __WEBPACK_IMPORTED_MODULE_8__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED) {
            if (!hasKey) {
                message = 'Missing Small Key';
            }
        }
        if (!message) {
            var prefix;
            prefix = +node.status < 10 ? 'Tried to go to ' : 'Tried to open ';
            message = prefix + node.tooltip + '. ' + node.originalNode.errorMessage;
        }
        this.itemLog.unshift({
            item: node.prize[0],
            shortName: 'cant-item',
            longName: message,
            location: node.tooltip,
            region: region,
            type: 'cant',
        });
    };
    GameComponent.prototype.onHintChecked = function (eventData) {
        var hintType = eventData[0];
        var hintRegion = eventData[1];
        var hintText = eventData[2];
        if (hintType === 'sign') {
            this.itemLog.unshift({
                item: 'sign',
                shortName: 'sign',
                longName: hintText,
                location: 'Crystal Requirement',
                region: hintRegion,
                type: 'sign',
            });
        }
        else {
            this.itemLog.unshift({
                item: 'hint',
                shortName: 'hintTile',
                longName: hintText,
                location: hintType,
                region: hintRegion.indexOf('-') === -1 ? hintRegion : hintType,
                type: 'hint',
            });
        }
    };
    GameComponent.prototype.onDungeonFinished = function (eventData) {
        var dungeonPrize = eventData[0];
        var dungeonName = eventData[1];
        if (dungeonPrize.indexOf('Agahnim') === -1) {
            this.items.add(this._itemNamesService.getItemById(dungeonPrize).shortName, dungeonName);
            var convertedName = this._itemNamesService.convertItemName(dungeonPrize, 'get', this.items);
            this.itemLog.unshift({
                item: dungeonPrize,
                shortName: convertedName[0],
                longName: convertedName[1],
                location: dungeonName + "'s Boss",
                region: dungeonName,
                type: 'get',
            });
        }
    };
    GameComponent.prototype.onGameFinished = function () {
        this.gameState = 'finished';
    };
    GameComponent.prototype.preloadIcons = function () {
        var _this = this;
        var iconUrls = [
            'assets/dungeon-tracker-icons/chest0.png',
            'assets/dungeon-tracker-icons/chest1.png',
            'assets/dungeon-tracker-icons/chest2.png',
            'assets/dungeon-tracker-icons/chest3.png',
            'assets/dungeon-tracker-icons/chest4.png',
            'assets/dungeon-tracker-icons/chest5.png',
            'assets/dungeon-tracker-icons/chest6.png',
        ];
        this.preloadedImages = [];
        iconUrls.forEach(function (url, index) {
            _this.preloadedImages[index] = new Image();
            _this.preloadedImages[index].src = url;
        });
    };
    GameComponent.prototype.preloadMaps = function () {
        var _this = this;
        this.preloadedMaps = [];
        this.dungeonsData.forEach(function (dungeon, index) {
            _this.preloadedMaps[index] = new Image();
            _this.preloadedMaps[index].src = 'assets/maps/' + dungeon.name + '/' + dungeon.startingMap.id + '.png';
        });
    };
    GameComponent.prototype.onContinuePlaying = function () {
        this.gameState = 'playing';
    };
    GameComponent.prototype.onBackMainMenu = function () {
        this._router.navigate(['/']);
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/components/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/components/game/game.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_4__services_seed_service__["a" /* SeedService */],
            __WEBPACK_IMPORTED_MODULE_5__services_item_names_service__["a" /* ItemNamesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/components/item-line/item-line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/item-line/item-line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    {{ itemLogEntry.region }}\n  </div>\n  <div class=\"panel-body\">\n    <span class=\"line-icon-container\">\n      <img class=\"icon\" [src]=\"'assets/item-icons/' + shortName + '.png'\">\n      <span *ngIf=\"subText\" class=\"subText white-outline-text not-selectable\">{{ subText }}</span>\n    </span>\n    {{ textLine }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/item-line/item-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemLineComponent = (function () {
    function ItemLineComponent(_itemNamesService) {
        this._itemNamesService = _itemNamesService;
        this.bookLocations = ['Master Sword Pedestal', 'Ether Tablet', 'Bombos Tablet'];
    }
    ItemLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.itemLogEntry) {
            this.shortName = this.itemLogEntry.shortName;
            this.longName = this.itemLogEntry.longName;
            __WEBPACK_IMPORTED_MODULE_0__services_item_names_service__["a" /* ItemNamesService */].dungeonItemNames.forEach(function (dungeonItemName) {
                if (_this.shortName.indexOf(dungeonItemName) > -1) {
                    if (_this.itemLogEntry.type === 'view') {
                        if (_this.shortName.indexOf('bigKey') > -1 &&
                            _this.bookLocations.indexOf(_this.itemLogEntry.location) === -1) {
                            _this.longName = 'a Big Key';
                        }
                        else if (_this.shortName.indexOf('smallKey') > -1 &&
                            _this.bookLocations.indexOf(_this.itemLogEntry.location) === -1) {
                            _this.longName = 'a Small Key';
                        }
                        else if (_this.shortName.indexOf('map') > -1) {
                            _this.longName = 'a Map';
                        }
                        else if (_this.shortName.indexOf('compass') > -1) {
                            _this.longName = 'a Compass';
                        }
                        else {
                            _this.setSubText();
                        }
                    }
                    else {
                        _this.setSubText();
                    }
                    _this.shortName = dungeonItemName;
                }
            });
            if (this.itemLogEntry.type === 'cant' || this.itemLogEntry.type === 'hint') {
                this.textLine = this.itemLogEntry.longName;
                return;
            }
            switch (this.itemLogEntry.type) {
                case 'get':
                    this.actionType = 'Got';
                    break;
                case 'view':
                    this.actionType = 'Saw';
            }
            if (this.itemLogEntry.region === 'light-world') {
                this.itemLogEntry.region = 'Light World';
            }
            else if (this.itemLogEntry.region === 'dark-world') {
                this.itemLogEntry.region = 'Dark World';
            }
        }
        if (this.shortName.indexOf('agahnim') > -1 || this.shortName.indexOf('ganon') > -1) {
            this.textLine = 'Defeated ' + this.longName;
        }
        else if (this.shortName === 'switch') {
            this.textLine = 'Flipped Switch';
        }
        else if (this.shortName === 'flood') {
            this.textLine = 'Flooded Room';
        }
        else if (this.shortName === 'tt-bomb') {
            this.textLine = 'Destroyed the floor';
        }
        else if (this.shortName === 'blind') {
            this.textLine = 'Rescued Blind';
        }
        else if (this.shortName === 'ip-switch-room') {
            this.textLine = 'Pushed Block to the Switch';
        }
        else if (this.shortName === 'sign') {
            this.textLine = this.longName;
        }
        else {
            this.textLine = this.actionType + ' ' + this.longName + ' in ' + this.itemLogEntry.location;
        }
    };
    ItemLineComponent.prototype.setSubText = function () {
        var dungeonIndex = this.shortName.split('-')[1];
        var dungeonAbbrevs = ['HC', 'EP', 'DP', 'ToH', 'AT', 'PoD', 'SP', 'SW', 'TT', 'IP', 'MM', 'TR', 'GT'];
        this.subText = dungeonAbbrevs[dungeonIndex];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemLineComponent.prototype, "itemLogEntry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_items_model__["a" /* Items */])
    ], ItemLineComponent.prototype, "items", void 0);
    ItemLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-item-line',
            template: __webpack_require__("../../../../../src/components/item-line/item-line.component.html"),
            styles: [__webpack_require__("../../../../../src/components/item-line/item-line.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_item_names_service__["a" /* ItemNamesService */]])
    ], ItemLineComponent);
    return ItemLineComponent;
}());



/***/ }),

/***/ "../../../../../src/components/item-log/item-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\n  margin-top:8px;\n  margin-bottom:8px;\n  height:6px;\n  border:0;\n  box-shadow:inset 0 3px 3px -3px rgba(0,0,0,.5)\n}\n\n.item-log-body {\n  height:400px;\n  padding:10px;\n  overflow-y:scroll\n}\n\n.dark-theme .item-log-body, .dark-theme .item-log-body {\n  background-color:#141414\n}\n\n.panel-heading {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-wrap:nowrap;\n  flex-wrap:nowrap\n}\n\n.dark-theme .panel-heading, .dark-theme .panel-heading {\n  background-color:#191970\n}\n\n.dark-theme .panel-heading, .dark-theme .panel-heading, .dark-theme .panel-info, .dark-theme .panel-info {\n  border-color:#7b68ee\n}\n\n.form-control {\n  display:initial;\n  width:100%\n}\n\n.dark-theme .form-control, .dark-theme .form-control {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color);\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color)\n}\n\n.btn-default.active {\n  background-color:#363636;\n  color:#fff\n}\n\n.btn-default.active:focus {\n  background-color:#696969\n}\n\n.btn-default.active:hover {\n  background-color:#5e5e5e\n}\n\n@media (min-width:768px) {\n  .item-log-body {\n    height:400px\n  }\n}\n\n@media (min-width:992px) {\n  .item-log-body {\n    height:400px\n  }\n}\n\n@media (min-width:1200px) {\n  .item-log-body {\n    height:498px\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/item-log/item-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <button btnCheckbox\n            class=\"btn btn-default\"\n            name=\"showImportantButton\"\n            tooltip=\"Show Only Important Items\"\n            type=\"button\"\n            [(ngModel)]=\"filterArgs.onlyImportantShown\">\n      <i aria-hidden=\"true\" class=\"fa fa-filter\"></i>\n        <span class=\"visible-xs-inline visible-sm-inline\"> Filter Trash Items</span>\n    </button>\n    <input class=\"form-control\"\n           name=\"searchForm\"\n           placeholder=\"Search\"\n           type=\"text\"\n           [(ngModel)]=\"filterArgs.searchQuery\">\n    <button *ngIf=\"filterArgs.searchQuery !== ''\"\n            class=\"btn btn-default\"\n            (click)=\"onCleanText()\">\n      <i aria-hidden=\"true\" class=\"fa fa-times\"></i>\n    </button>\n  </div>\n  <div class=\"panel-body item-log-body\">\n    <app-item-line *ngFor=\"let entry of (itemLogList | itemLogFilter:filterArgs)\"\n                   [itemLogEntry]=\"entry\"\n                   [items]=\"items\"></app-item-line>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/item-log/item-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemLogComponent = (function () {
    function ItemLogComponent(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.filterArgs = {
            onlyImportantShown: false,
            searchQuery: '',
        };
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    ItemLogComponent.prototype.ngOnInit = function () { };
    ItemLogComponent.prototype.ngDoCheck = function () {
        this.iterableDiffer.diff(this.itemLogList);
    };
    ItemLogComponent.prototype.onToggleImportant = function () {
        this.filterArgs.onlyImportantShown = !this.filterArgs.onlyImportantShown;
    };
    ItemLogComponent.prototype.onCleanText = function () {
        this.filterArgs.searchQuery = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ItemLogComponent.prototype, "itemLogList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_items_model__["a" /* Items */])
    ], ItemLogComponent.prototype, "items", void 0);
    ItemLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-log',
            template: __webpack_require__("../../../../../src/components/item-log/item-log.component.html"),
            styles: [__webpack_require__("../../../../../src/components/item-log/item-log.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]])
    ], ItemLogComponent);
    return ItemLogComponent;
}());



/***/ }),

/***/ "../../../../../src/components/item-tracker/item-tracker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  background-color:#000\n}\n\n.container-fluid {\n  padding-left:0;\n  padding-right:0\n}\n\n.rupee-count {\n  color:#555;\n  padding-right:6px;\n  text-align:end;\n  float:right\n}\n\n.dark-theme .rupee-count, .dark-theme .rupee-count {\n  color:var(--dark-text-light-color);\n  color:var(--dark-text-light-color)\n}\n\n.col-xs-2 {\n  padding:0\n}\n\n.col-lg-5ths, .col-md-5ths, .col-sm-5ths, .col-xs-5ths {\n  position:relative;\n  min-height:1px;\n  padding-right:0;\n  padding-left:0\n}\n\n.col-xs-5ths {\n  width:20%;\n  float:left\n}\n\n@media (min-width:768px) {\n  .col-sm-5ths {\n    width:20%;\n    float:left\n  }\n}\n\n@media (min-width:992px) {\n  .col-md-5ths {\n    width:20%;\n    float:left\n  }\n}\n\n@media (min-width:1200px) {\n  .col-lg-5ths {\n    width:20%;\n    float:left\n  }\n}\n\n@media (max-width:768px) {\n  .rupee-count {\n    padding-right:3px;\n    font-size:12px\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/item-tracker/item-tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <app-tracker-node class=\"col-xs-5ths\"\n      *ngFor=\"let item of itemsToTrack\"\n      [isItem]=\"true\"\n      [itemName]=\"item\"\n      [value]=\"items[item]\"\n      [items]=\"items\"\n      [config]=\"config\"\n      (click)=\"onItemClicked(item)\">\n    </app-tracker-node>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div>\n    <app-tracker-node class=\"col-xs-2\"\n      *ngFor=\"let dungeon of getDungeons()\"\n      [ngClass]=\"(config.dungeonItems !== 'standard' && config.dungeonItems !== 'mc') || config.isMystery ? 'col-xs-2' : 'col-xs-5ths'\"\n      [isItem]=\"false\"\n      [dungeonData]=\"dungeon\"\n      [items]=\"items\"\n      [config]=\"config\">\n    </app-tracker-node>\n  </div>\n</div>\n<span class=\"rupee-count\">{{ items.stats.rupeeCount }} Rupees Collected</span>\n"

/***/ }),

/***/ "../../../../../src/components/item-tracker/item-tracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_game_service__ = __webpack_require__("../../../../../src/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemTrackerComponent = (function () {
    function ItemTrackerComponent(_gameService) {
        this._gameService = _gameService;
    }
    ItemTrackerComponent.prototype.ngOnInit = function () {
        this.itemsToTrack = [
            'tunic',
            'sword',
            'shield',
            'moonPearl',
            'health',
            'bow',
            'boomerang',
            'hookshot',
            'mushroom',
            'powder',
            'fireRod',
            'iceRod',
            'bombos',
            'ether',
            'quake',
            'lamp',
            'hammer',
            'fluteShovel',
            'net',
            'book',
            'bottle',
            'somaria',
            'byrna',
            'cape',
            'mirror',
            'boots',
            'glove',
            'flippers',
            'halfMagic',
            'agahnim',
        ];
        if (this.config.goal === 'triforce') {
            this.itemsToTrack[8] = 'powderMush';
            this.itemsToTrack[9] = 'triforcePieces';
        }
    };
    ItemTrackerComponent.prototype.getDungeons = function () {
        var excludedDungeons;
        excludedDungeons =
            this.config.isMystery ||
                (this.config.dungeonItems !== 'standard' && this.config.dungeonItems !== 'mc')
                ? ['Light World', 'Dark World', 'Hyrule Castle']
                : ['Aga Tower', 'Ganons Tower', 'Light World', 'Dark World', 'Hyrule Castle'];
        return this.dungeonsData.filter(function (dungeon) {
            return excludedDungeons.indexOf(dungeon.name) === -1;
        });
    };
    ItemTrackerComponent.prototype.onItemClicked = function (itemName) {
        if (itemName === 'boots') {
            this.config.noLogic = !this.config.noLogic;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* isDevMode */])()) {
            if (typeof this.items[itemName] == 'boolean') {
                if (this.items[itemName]) {
                    this.items[itemName] = false;
                }
                else {
                    this.items[itemName] = true;
                }
            }
            else if (++this.items[itemName] > 2) {
                this.items[itemName] = 0;
            }
            this._gameService.updateData(this.items, 'light-world');
            this._gameService.updateData(this.items, 'dark-world');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_items_model__["a" /* Items */])
    ], ItemTrackerComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_config_model__["a" /* Config */])
    ], ItemTrackerComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ItemTrackerComponent.prototype, "dungeonsData", void 0);
    ItemTrackerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-item-tracker',
            template: __webpack_require__("../../../../../src/components/item-tracker/item-tracker.component.html"),
            styles: [__webpack_require__("../../../../../src/components/item-tracker/item-tracker.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_game_service__["a" /* GameService */]])
    ], ItemTrackerComponent);
    return ItemTrackerComponent;
}());



/***/ }),

/***/ "../../../../../src/components/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seed-num-input {\n  max-width:300px\n}\n\n.fa-question-circle {\n  vertical-align:super;\n  font-size:12px\n}\n\n.question-mark {\n  cursor:pointer\n}\n\n.super-text {\n  vertical-align:super\n}\n\n.support-text {\n  margin-top:60px;\n  margin-bottom:60px\n}\n\n.mystery-info, .support-text {\n  text-align:center\n}\n\n.seed-type-descriptor {\n  margin-bottom:0;\n  padding-top:7px\n}\n\n.mode-select-radio {\n  margin-bottom:10px\n}\n\n.dark-theme .control-label, .dark-theme .control-label, .dark-theme .super-text, .dark-theme .super-text, .dark-theme h3, .dark-theme h3, .dark-theme p, .dark-theme p {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color)\n}\n\n.dark-theme .form-control, .dark-theme .form-control {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color);\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color)\n}\n\n.dark-theme .form-control[disabled], .dark-theme .form-control[disabled] {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color);\n  background-color:var(--dark-background-light-color);\n  background-color:var(--dark-background-light-color)\n}\n\n.dark-theme .btn-default, .dark-theme .btn-default {\n  color:var(--dark-text-color);\n  color:var(--dark-text-color);\n  background-color:var(--dark-background-color);\n  background-color:var(--dark-background-color)\n}\n\n.dark-theme .active, .dark-theme .active, .dark-theme .btn-default:active, .dark-theme .btn-default:active, .dark-theme .btn-default:focus, .dark-theme .btn-default:focus, .dark-theme .btn-default:hover, .dark-theme .btn-default:hover {\n  background-color:var(--dark-background-light-color);\n  background-color:var(--dark-background-light-color)\n}\n\n.dark-theme .btn-default:active:hover, .dark-theme .btn-default:active:hover {\n  background-color:var(--dark-background-med-color);\n  background-color:var(--dark-background-med-color)\n}\n\n.dark-theme .btn.active, .dark-theme .btn.active {\n  box-shadow:inset 0 3px 5px rgba(0,0,0,.5)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-justified mode-select-radio\" role=\"group\">\n  <label btnRadio=\"open\" class=\"btn btn-default\" name=\"open-gen-button\"\n         [(ngModel)]=\"generationType\">Open Mode</label>\n  <label btnRadio=\"custom\" class=\"btn btn-default\" name=\"custom-gen-button\"\n         [(ngModel)]=\"generationType\">Custom Generation</label>\n  <label btnRadio=\"mystery\" class=\"btn btn-default\" name=\"custom-gen-button\"\n         [(ngModel)]=\"generationType\">Mystery Seed</label>\n</div>\n\n<ng-container *ngIf=\"generationType == 'open'\">\n<form class=\"form-horizontal\" novalidate>\n  <div class=\"form-group\" style=\"margin-top: 15px;\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Item Placement\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Advanced\n        <span class=\"question-mark\" container=\"body\"\n              popover=\"Some dark rooms with firerod are in logic, Skull Woods pinball chest may have an item,\n        TR laser bridge doesn't require an invulnerability item, etc\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n        </span>\n  </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Dungeons Items\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Standard\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"All keys and dungeon items are inside their own dungeons\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Accessibility\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">100% Inventory\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"All bosses and inventory items are accessible. Not all keys may be reachable\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Goal\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Defeat Ganon\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"You must defeat Agahnim 2 and collect the required crystal amount to be able to beat Ganon\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Open Tower\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">7 Crystals\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"7 Crystals are required to be able to enter Ganons Tower\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Ganon Vulnerable\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">7 Crystals\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"7 Crystals are required to be able to damage Ganon\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">World State\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Open\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"Game starts with the escape prologue done and you may use Link's House or the Sanctuary as spawn points\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Hints\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Off\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"All hint tiles are disabled\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Swords\n      </label>\n      <p class=\"col-sm-4 seed-type-descriptor\">Randomized\n          <span class=\"question-mark\" container=\"body\"\n                popover=\"You start without a sword, all 4 swords are shuffled in the world\">\n          <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n          </span>\n      </p>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"map-mode\">Overworld\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Do you want to travel the overworld screen by screen?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"map-mode\">\n      <label btnRadio=\"no\" class=\"btn btn-default\" name=\"simple-map-button\"\n             [(ngModel)]=\"mapSelected\">Simple</label>\n      <label btnRadio=\"yes\" class=\"btn btn-default\" name=\"full-map-button\"\n             [ngStyle]=\"{'display': isAdvancedOWEnabled}\"\n             [(ngModel)]=\"mapSelected\">Advanced</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"seed-num-input\">Seed</label>\n    <div class=\"col-sm-8 form-inline\">\n        <input class=\"form-control\" id=\"seed-num-input\" maxlength=\"20\"\n               name=\"seedSelect\" placeholder=\"Random\" type=\"text\"\n               [(ngModel)]=\"seedNum\" [disabled]=\"dailySeed\"\n               (keyup.enter)=\"onSubmit()\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-4 col-sm-8\">\n       <button class=\"btn btn-success\" type=\"button\" style=\"margin-right: 10px;\"\n              [disabled]=\"isGenerating\"\n              (click)=\"onGenerateNewSeed()\">\n        <i class=\"fa\" [ngClass]=\"isGenerating ? 'fa-spinner fa-spin' : 'fa-magic'\"></i>\n        {{ isGenerating ? 'Generating...' : 'Generate Seed' }}\n      </button>\n      <button class=\"btn btn-default\" type=\"button\" style=\"margin-right: 10px;\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-upload\"></i> Load Spoiler Log\n      </button>\n      <input #fileInput type=\"file\" accept=\".json,.txt\" style=\"display:none\"\n             (change)=\"onSpoilerLogFileSelected($event)\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              [disabled]=\"shouldDisablePlay\"\n              (click)=\"onSubmit()\">Play</button>\n      <span *ngIf=\"seedInfo\" style=\"margin-left: 10px;\">{{seedInfo}}</span>\n    </div>\n  </div>\n  <alert *ngIf=\"errorMessage\" type=\"danger\">\n    {{errorMessage}}\n  </alert>\n</form>\n</ng-container>\n\n<ng-container *ngIf=\"generationType === 'custom'\">\n<form class=\"form-horizontal\" novalidate>\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"placement-mode\">Item Placement\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Changes logical restrictions for a more casual or advanced experience\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"placement-mode\">\n      <label btnRadio=\"basic\" class=\"btn btn-default\" name=\"basic-place-button\"\n             [(ngModel)]=\"itemPlacementSelected\">Basic</label>\n      <label btnRadio=\"advanced\" class=\"btn btn-default\" name=\"advanced-place-button\"\n             [(ngModel)]=\"itemPlacementSelected\">Advanced</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"var-mode\">Dungeon Items\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Which dungeon items get shuffled into the rest of the world?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"var-mode\">\n      <label btnRadio=\"standard\" class=\"btn btn-default\" name=\"no-di-button\"\n             [(ngModel)]=\"dungeonItemsSelected\">Standard</label>\n      <label btnRadio=\"mc\" class=\"btn btn-default\" name=\"mc-button\"\n             [(ngModel)]=\"dungeonItemsSelected\">Maps/Compasses</label>\n      <label btnRadio=\"mcs\" class=\"btn btn-default\" name=\"mcs-button\"\n             [(ngModel)]=\"dungeonItemsSelected\">Maps/Compasses/Small Keys</label>\n      <label btnRadio=\"full\" class=\"btn btn-default\" name=\"keysanity-button\"\n             [(ngModel)]=\"dungeonItemsSelected\">Keysanity</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"access-mode\">Accessibility\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Is every chest accessible?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"access-mode\">\n      <label btnRadio=\"items\" class=\"btn btn-default\" name=\"full-inv-button\"\n             [(ngModel)]=\"accessibilitySelected\">100% Inventory</label>\n      <label btnRadio=\"locations\" class=\"btn btn-default\" name=\"full-loc-button\"\n             [(ngModel)]=\"accessibilitySelected\">100% Locations</label>\n      <label btnRadio=\"none\" class=\"btn btn-default\" name=\"beatable-button\"\n             [(ngModel)]=\"accessibilitySelected\">Beatable Only</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"goal-mode\">Goal\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Fast Ganon means you don't need to beat Agahnim 2 to fight Ganon\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"goal-mode\">\n      <label btnRadio=\"ganon\" class=\"btn btn-default\" name=\"ganon-button\"\n             [(ngModel)]=\"goalSelected\">Defeat Ganon</label>\n      <label btnRadio=\"fast_ganon\" class=\"btn btn-default\" name=\"fast-ganon-button\"\n             [(ngModel)]=\"goalSelected\">Fast Ganon</label>\n      <label btnRadio=\"dungeons\" class=\"btn btn-default\" name=\"alldungeons-button\"\n             [(ngModel)]=\"goalSelected\">All Dungeons</label>\n      <label btnRadio=\"pedestal\" class=\"btn btn-default\" name=\"pedestal-button\"\n             [(ngModel)]=\"goalSelected\">Master Sword Pedestal</label>\n      <label btnRadio=\"triforce-hunt\" class=\"btn btn-default\" name=\"triforce-button\"\n             [(ngModel)]=\"goalSelected\">Triforce Hunt</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"open-tower-mode\">Open Tower\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"How many crystals do you need to open Ganon's Tower?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"game-mode\">\n      <select class=\"form-control\" id=\"open-tower-mode\" name=\"tower-select\"\n              [(ngModel)]=\"openTowerSelected\">\n        <option *ngFor=\"let option of openCrystalOptions\" [value]=\"option.id\">{{option.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"open-ganon-mode\">Ganon Vulnerable\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"How many crystals do you need to damage Ganon?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"game-mode\">\n      <select class=\"form-control\" id=\"open-ganon-mode\" name=\"ganon-select\"\n              [(ngModel)]=\"openGanonSelected\">\n        <option *ngFor=\"let option of openCrystalOptions\" [value]=\"option.id\">{{option.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"game-mode\">World State\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Do we rescue Zelda? Do we start in the Light World?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"game-mode\">\n      <label btnRadio=\"standard\" class=\"btn btn-default\" name=\"standard-button\"\n             [(ngModel)]=\"modeSelected\" (click)=\"onIsInverted(false)\">Standard</label>\n      <label btnRadio=\"open\" class=\"btn btn-default\" name=\"open-button\"\n             [(ngModel)]=\"modeSelected\" (click)=\"onIsInverted(false)\">Open</label>\n      <label btnRadio=\"inverted\" class=\"btn btn-default\" name=\"inverted-button\"\n             [(ngModel)]=\"modeSelected\" (click)=\"onIsInverted(true)\">Inverted</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"enemy-mode\">Boss Shuffle\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Shuffle bosses? Allow repeat bosses?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"enemy-mode\">\n      <label btnRadio=\"none\" class=\"btn btn-default\" name=\"no-enemy-button\"\n             [(ngModel)]=\"enemizerSelected\">None</label>\n      <label btnRadio=\"simple\" class=\"btn btn-default\" name=\"simple-button\"\n             [(ngModel)]=\"enemizerSelected\">Simple</label>\n      <label btnRadio=\"full\" class=\"btn btn-default\" name=\"full-button\"\n             [(ngModel)]=\"enemizerSelected\">Full</label>\n      <label btnRadio=\"random\" class=\"btn btn-default\" name=\"chaos-button\"\n             [(ngModel)]=\"enemizerSelected\">Random</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"hints-mode\">Hints\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Enable hint tiles?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"hints-mode\">\n      <label btnRadio=\"on\" class=\"btn btn-default\" name=\"with-hints-button\"\n             [(ngModel)]=\"hintsSelected\">On</label>\n      <label btnRadio=\"off\" class=\"btn btn-default\" name=\"no-hints-button\"\n             [(ngModel)]=\"hintsSelected\">Off</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"swords-mode\">Swords\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Do we start with a sword? Can we get swords at all?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"swords-mode\">\n      <label btnRadio=\"randomized\" class=\"btn btn-default\" name=\"randomized-button\"\n             [(ngModel)]=\"swordsSelected\">Randomized</label>\n      <label btnRadio=\"assured\" class=\"btn btn-default\" name=\"assured-button\"\n             [(ngModel)]=\"swordsSelected\">Assured</label>\n      <label btnRadio=\"swordless\" class=\"btn btn-default\" name=\"swordless-button\"\n             [(ngModel)]=\"swordsSelected\">Swordless</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"map-mode\">Overworld\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Do you want to travel the overworld screen by screen?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"map-mode\">\n      <label btnRadio=\"no\" class=\"btn btn-default\" name=\"simple-map-button\"\n             [(ngModel)]=\"mapSelected\">Simple</label>\n      <label btnRadio=\"yes\" class=\"btn btn-default\" name=\"full-map-button\"\n             [ngStyle]=\"{'display': isAdvancedOWEnabled}\"\n             [(ngModel)]=\"mapSelected\">Advanced</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-4 col-sm-8\">\n       <button class=\"btn btn-success\" type=\"button\" style=\"margin-right: 10px;\"\n              [disabled]=\"isGenerating\"\n              (click)=\"onGenerateNewSeed()\">\n        <i class=\"fa\" [ngClass]=\"isGenerating ? 'fa-spinner fa-spin' : 'fa-magic'\"></i>\n        {{ isGenerating ? 'Generating...' : 'Generate Seed' }}\n      </button>\n      <button class=\"btn btn-default\" type=\"button\" style=\"margin-right: 10px;\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-upload\"></i> Load Spoiler Log\n      </button>\n      <input #fileInput type=\"file\" accept=\".json,.txt\" style=\"display:none\"\n             (change)=\"onSpoilerLogFileSelected($event)\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              [disabled]=\"shouldDisablePlay\"\n              (click)=\"onSubmit()\">Play</button>\n      <span *ngIf=\"seedInfo\" style=\"margin-left: 10px;\">{{seedInfo}}</span>\n    </div>\n  </div>\n  <alert *ngIf=\"errorMessage\" type=\"danger\">\n    {{errorMessage}}\n  </alert>\n</form>\n</ng-container>\n\n<ng-container *ngIf=\"generationType === 'mystery'\">\n<form class=\"form-horizontal\" novalidate>\n  <div class=\"mystery-info\">\n    <p>With Mystery Seeds you won't know the settings of the seed before playing. Any combination of settings is possible</p>\n    <p>You will be thrown into the game and by opening chests and reading the handy signposts you'll be able to\n      guess what the settings are and complete the seed\n    </p>\n    <p>The seed isn't generated completely randomly, it follows the Weighted ruleset, as seen <a href=\"https://github.com/tcprescott/sahasrahbot/blob/master/weights/weighted.yaml\">here</a>.</p>\n    <p>All settings currently unavailable on Z3RSim like Entrance Shuffle are evenly distributed in the other options.</p>\n    <p>All seeds use the Keysanity interface</p>\n    <p>The sign that indicates how many crystals you need to beat Ganon will also inform you if it's a Fast Ganon goal:</p>\n    <p>You need x crystals and have defeated Agahnim 2: Defeat Ganon Goal </p>\n    <p>You only need x crystals to beat Ganon: Fast Ganon Goal</p>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-4 control-label\" for=\"map-mode\">Overworld\n      <span class=\"question-mark\" container=\"body\"\n            popover=\"Do you want to travel the overworld screen by screen?\">\n        <i aria-hidden=\"true\" class=\"fa fa-question-circle\"></i>\n      </span>\n    </label>\n    <div class=\"col-sm-8\" id=\"map-mode\">\n      <label btnRadio=\"no\" class=\"btn btn-default\" name=\"simple-map-button\"\n             [(ngModel)]=\"mapSelected\">Simple</label>\n      <label btnRadio=\"yes\" class=\"btn btn-default\" name=\"full-map-button\"\n             [ngStyle]=\"{'display': isAdvancedOWEnabled}\"\n             [(ngModel)]=\"mapSelected\">Advanced (won't work if Inverted)</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-4 col-sm-8\">\n       <button class=\"btn btn-success\" type=\"button\" style=\"margin-right: 10px;\"\n              [disabled]=\"isGenerating\"\n              (click)=\"onGenerateNewSeed()\">\n        <i class=\"fa\" [ngClass]=\"isGenerating ? 'fa-spinner fa-spin' : 'fa-magic'\"></i>\n        {{ isGenerating ? 'Generating...' : 'Generate Seed' }}\n      </button>\n      <button class=\"btn btn-default\" type=\"button\" style=\"margin-right: 10px;\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-upload\"></i> Load Spoiler Log\n      </button>\n      <input #fileInput type=\"file\" accept=\".json,.txt\" style=\"display:none\"\n             (change)=\"onSpoilerLogFileSelected($event)\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              [disabled]=\"shouldDisablePlay\"\n              (click)=\"onSubmit()\">Play</button>\n      <span *ngIf=\"seedInfo\" style=\"margin-left: 10px;\">{{seedInfo}}</span>\n    </div>\n  </div>\n  <alert *ngIf=\"errorMessage\" type=\"danger\">\n    {{errorMessage}}\n  </alert>\n</form>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/components/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_seed_service__ = __webpack_require__("../../../../../src/services/seed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = (function () {
    function MainMenuComponent(_seedService, _router, _route) {
        this._seedService = _seedService;
        this._router = _router;
        this._route = _route;
        this.generationType = 'open';
        this.shouldDisablePlay = false;
        this.modeSelected = 'standard';
        this.swordsSelected = 'randomized';
        this.goalSelected = 'ganon';
        this.dungeonItemsSelected = 'standard';
        this.enemizerSelected = 'none';
        this.itemPlacementSelected = 'advanced';
        this.accessibilitySelected = 'items';
        this.openTowerSelected = '7';
        this.openGanonSelected = '7';
        this.hintsSelected = 'off';
        this.mapSelected = 'no';
        this.seedNum = '';
        this.errorMessage = '';
        this.dailySeed = false;
        this.autoSeed = true;
        this.isAdvancedOWEnabled = 'inline-block';
        this.preloadedBosses = [];
        this.preloadedIcons = [];
        this.isGenerating = false;
        this.openCrystalOptions = [
            {
                id: '0',
                label: '0 Crystals',
            },
            {
                id: '1',
                label: '1 Crystal',
            },
            {
                id: '2',
                label: '2 Crystals',
            },
            {
                id: '3',
                label: '3 Crystals',
            },
            {
                id: '4',
                label: '4 Crystals',
            },
            {
                id: '5',
                label: '5 Crystals',
            },
            {
                id: '6',
                label: '6 Crystals',
            },
            {
                id: '7',
                label: '7 Crystals',
            },
            {
                id: 'random',
                label: 'Random',
            },
        ];
        if (!localStorage.getItem('seedHash')) {
            this.shouldDisablePlay = true;
        }
        else {
            this.seedInfo = this._seedService.buildStringUrl();
        }
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('defaultTab')) {
            this.generationType = localStorage.getItem('defaultTab');
        }
        else {
            this.generationType = 'open';
        }
        if (localStorage.getItem('swordsSelected')) {
            this.modeSelected = localStorage.getItem('modeSelected');
            this.swordsSelected = localStorage.getItem('swordsSelected');
            this.goalSelected = localStorage.getItem('goalSelected');
        }
        else {
            localStorage.setItem('modeSelected', this.modeSelected);
            localStorage.setItem('swordsSelected', this.swordsSelected);
            localStorage.setItem('goalSelected', this.goalSelected);
        }
        if (localStorage.getItem('mapSelected')) {
            this.mapSelected = localStorage.getItem('mapSelected');
        }
        else {
            localStorage.setItem('mapSelected', this.mapSelected);
        }
        if (localStorage.getItem('enemizerSelected')) {
            this.enemizerSelected = localStorage.getItem('enemizerSelected');
        }
        else {
            localStorage.setItem('enemizerSelected', this.enemizerSelected);
        }
        if (localStorage.getItem('dungeonItemsSelected')) {
            this.dungeonItemsSelected = localStorage.getItem('dungeonItemsSelected');
            this.itemPlacementSelected = localStorage.getItem('itemPlacementSelected');
            this.accessibilitySelected = localStorage.getItem('accessibilitySelected');
            this.openTowerSelected = localStorage.getItem('openTowerSelected');
            this.openGanonSelected = localStorage.getItem('openGanonSelected');
            this.hintsSelected = localStorage.getItem('hintsSelected');
        }
        if (this.modeSelected === 'inverted') {
            this.mapSelected = 'no';
            this.isAdvancedOWEnabled = 'none';
        }
        else {
            this.isAdvancedOWEnabled = 'inline-block';
        }
        this._seedService.getStatus().subscribe(function (statusResponse) {
            if (statusResponse) {
                switch (statusResponse.type) {
                    case 'error':
                    case 'warning':
                        _this.errorMessage = statusResponse.msg;
                }
            }
            else {
                _this.errorMessage = 'Unable to connect to the server. Please try again later';
            }
        }, function (error) {
            _this.errorMessage = error;
        });
        setTimeout(function () {
            _this.preloadMap();
        }, 1000);
        setTimeout(function () {
            _this.preloadBosses();
        }, 3000);
        setTimeout(function () {
            _this.preloadItems();
        }, 6000);
    };
    MainMenuComponent.prototype.onDailySeedClick = function () {
        if (this.dailySeed) {
            this.seedNum = "Today's Daily Seed";
        }
        else {
            this.seedNum = '';
        }
    };
    MainMenuComponent.prototype.onSubmit = function () {
        var _this = this;
        this.shouldDisablePlay = true;
        this.lockedMode = this.modeSelected;
        this.lockedMap = this.mapSelected;
        this.errorMessage = '';
        var seedParams = {};
        var queryParams = {};
        localStorage.setItem('defaultTab', this.generationType);
        if (this.lockedMap === 'yes') {
            queryParams.fullMap = true;
        }
        if (this.generationType === 'custom') {
            localStorage.setItem('modeSelected', this.modeSelected);
            localStorage.setItem('swordsSelected', this.swordsSelected);
            localStorage.setItem('goalSelected', this.goalSelected);
            localStorage.setItem('mapSelected', this.mapSelected);
            localStorage.setItem('enemizerSelected', this.enemizerSelected);
            localStorage.setItem('dungeonItemsSelected', this.dungeonItemsSelected);
            localStorage.setItem('itemPlacementSelected', this.itemPlacementSelected);
            localStorage.setItem('accessibilitySelected', this.accessibilitySelected);
            localStorage.setItem('openTowerSelected', this.openTowerSelected);
            localStorage.setItem('openGanonSelected', this.openGanonSelected);
            localStorage.setItem('hintsSelected', this.hintsSelected);
            this.preloadedMap = null;
            this.preloadedIcons = null;
            this.preloadedBosses = null;
            if (this.itemPlacementSelected !== 'advanced') {
                queryParams.placement = this.itemPlacementSelected;
            }
            if (this.dungeonItemsSelected !== 'standard') {
                queryParams.dItems = this.dungeonItemsSelected;
            }
            if (this.accessibilitySelected !== 'items') {
                queryParams.accessibility = this.accessibilitySelected;
            }
            if (this.goalSelected !== 'ganon') {
                queryParams.goal = this.goalSelected;
            }
            if (this.openTowerSelected !== '7') {
                queryParams.tower = this.openTowerSelected;
            }
            if (this.openGanonSelected !== '7') {
                queryParams.ganon = this.openGanonSelected;
            }
            if (this.enemizerSelected !== 'none') {
                queryParams.enemizer = this.enemizerSelected;
            }
            if (this.hintsSelected !== 'off') {
                queryParams.hints = this.hintsSelected;
            }
            if (this.swordsSelected !== 'randomized') {
                queryParams.swords = this.swordsSelected;
            }
            if (this.lockedMap === 'yes') {
                queryParams.fullMap = true;
            }
            seedParams.item_placement = this.itemPlacementSelected;
            seedParams.dungeon_items = this.dungeonItemsSelected;
            seedParams.accessibility = this.accessibilitySelected;
            seedParams.goal = this.goalSelected;
            seedParams.entry_crystals_tower = this.openTowerSelected;
            seedParams.entry_crystals_ganon = this.openGanonSelected;
            seedParams.mode = this.modeSelected;
            seedParams.enemizer = this.enemizerSelected;
            seedParams.hints = this.hintsSelected;
            seedParams.weapons = this.swordsSelected;
            this._seedService.getSeed(this.lockedMode, seedParams).subscribe(function (seedResponse) {
                if (!seedResponse || seedResponse.error) {
                    _this.errorMessage = seedResponse.error;
                    _this.shouldDisablePlay = false;
                }
                else {
                    _this._router.navigate(['/' + _this.modeSelected], {
                        queryParams: queryParams,
                    });
                }
                _this.preloadedMap = null;
                _this.preloadedIcons = null;
                _this.preloadedBosses = null;
            }, function (error) {
                _this.errorMessage = error;
                _this.shouldDisablePlay = false;
            });
        }
        else if (this.generationType === 'open') {
            if (this.seedNum) {
                seedParams.seed = this.seedNum;
            }
            seedParams.enemizer = 'none';
            this.errorMessage =
                "The seed may take a few seconds to load. If it doesn't after 10s please reload the page and try again.";
            this._seedService.getSeed(this.lockedMode, seedParams, false, true).subscribe(function (seedResponse) {
                if (!seedResponse || seedResponse.error) {
                    _this.errorMessage = seedResponse.error;
                    _this.shouldDisablePlay = false;
                }
                else if (_this.autoSeed) {
                    queryParams.seed = seedResponse.seed;
                    _this._router.navigate(['/qual'], {
                        queryParams: queryParams,
                    });
                }
                else {
                    _this._router.navigate(['/' + _this.modeSelected], {
                        queryParams: queryParams,
                    });
                }
                _this.preloadedMap = null;
                _this.preloadedIcons = null;
                _this.preloadedBosses = null;
            }, function (error) {
                _this.errorMessage = error;
                _this.shouldDisablePlay = false;
            });
        }
        else if (this.generationType === 'mystery') {
            this._seedService.getSeed('mystery', seedParams).subscribe(function (seedResponse) {
                if (!seedResponse || seedResponse.error) {
                    _this.errorMessage = seedResponse.error;
                    _this.shouldDisablePlay = false;
                }
                else {
                    _this._router.navigate(['/mystery'], {
                        queryParams: queryParams,
                    });
                }
                _this.preloadedMap = null;
                _this.preloadedIcons = null;
                _this.preloadedBosses = null;
            }, function (error) {
                _this.errorMessage = error;
                _this.shouldDisablePlay = false;
            });
        }
    };
    MainMenuComponent.prototype.onIsInverted = function (isInverted) {
        if (isInverted) {
            this.mapSelected = 'no';
            this.isAdvancedOWEnabled = 'none';
        }
        else {
            this.isAdvancedOWEnabled = 'inline-block';
        }
    };
    MainMenuComponent.prototype.preloadMap = function () {
        this.preloadedMap = new Image();
        this.preloadedMap.src = 'assets/light-world.png';
    };
    MainMenuComponent.prototype.preloadBosses = function () {
        var _this = this;
        var bossUrls = [
            'assets/dungeon-tracker-icons/boss02.png',
            'assets/dungeon-tracker-icons/boss12.png',
            'assets/dungeon-tracker-icons/boss22.png',
            'assets/dungeon-tracker-icons/boss32.png',
            'assets/dungeon-tracker-icons/boss42.png',
            'assets/dungeon-tracker-icons/boss52.png',
            'assets/dungeon-tracker-icons/boss62.png',
            'assets/dungeon-tracker-icons/boss72.png',
            'assets/dungeon-tracker-icons/boss82.png',
            'assets/dungeon-tracker-icons/boss92.png',
        ];
        this.preloadedBosses = [];
        bossUrls.forEach(function (url, index) {
            _this.preloadedBosses[index] = new Image();
            _this.preloadedBosses[index].src = url;
        });
    };
    MainMenuComponent.prototype.preloadItems = function () {
        var _this = this;
        var itemUrls = [
            'assets/item-icons/agahnim.png',
            'assets/item-icons/bombos.png',
            'assets/item-icons/book.png',
            'assets/item-icons/boots.png',
            'assets/item-icons/bottle.png',
            'assets/item-icons/bow.png',
            'assets/item-icons/byrna.png',
            'assets/item-icons/cape.png',
            'assets/item-icons/ether.png',
            'assets/item-icons/fireRod.png',
            'assets/item-icons/flippers.png',
            'assets/item-icons/flute.png',
            'assets/item-icons/glove.png',
            'assets/item-icons/hammer.png',
            'assets/item-icons/halfMagic.png',
            'assets/item-icons/hookshot.png',
            'assets/item-icons/iceRod.png',
            'assets/item-icons/lamp.png',
            'assets/item-icons/mirror.png',
            'assets/item-icons/moonPearl.png',
            'assets/item-icons/mushroom.png',
            'assets/item-icons/net.png',
            'assets/item-icons/powder.png',
            'assets/item-icons/quake.png',
            'assets/item-icons/somaria.png',
            'assets/item-icons/shield.png',
            'assets/item-icons/sword.png',
            'assets/item-icons/tunic1.png',
            'assets/dungeon-tracker-icons/medallion0.png',
            'assets/dungeon-tracker-icons/dungeon0.png',
        ];
        this.preloadedIcons = [];
        itemUrls.forEach(function (url, index) {
            _this.preloadedIcons[index] = new Image();
            _this.preloadedIcons[index].src = url;
        });
    };
    MainMenuComponent.prototype.redirect = function (path) {
        this._router.navigate(['/' + path]);
    };
    MainMenuComponent.prototype.onGenerateNewSeed = function () {
        var me = this;
        me.isGenerating = true;
        var seedParams = {
            glitches: 'none',
            item_placement: this.itemPlacementSelected || 'advanced',
            dungeon_items: this.dungeonItemsSelected || 'standard',
            accessibility: this.accessibilitySelected || 'items',
            goal: this.goalSelected || 'ganon',
            crystals: {
                ganon: this.openGanonSelected || '7',
                tower: this.openTowerSelected || '7'
            },
            mode: this.modeSelected || 'open',
            entrances: 'none',
            hints: this.hintsSelected || 'on',
            weapons: this.swordsSelected || 'randomized',
            item: { pool: 'normal', functionality: 'normal' },
            tournament: false,
            spoilers: 'on',
            lang: 'en',
            enemizer: {
                boss_shuffle: this.enemizerSelected || 'none',
                enemy_shuffle: 'none',
                enemy_damage: 'default',
                enemy_health: 'default'
            }
        };
        this._seedService.generateSeed(seedParams).then(function (spoilerData) {
            me._seedService.saveSpoilerLogToLocalStorage(spoilerData.spoiler);
            localStorage.setItem('seedHash', spoilerData && spoilerData.hash);
            me._seedService.loadAndGenerateItemArray().then(function (itemArray) {
                console.log('Item array generated:', itemArray && itemArray.length, 'locations');
                localStorage.setItem('itemArray', itemArray ? itemArray.join('') : '');
                me.showNotification('New seed generated successfully!', 'success');
                if (!localStorage.getItem('seedHash')) {
                    me.shouldDisablePlay = true;
                }
                else {
                    me.seedInfo = me._seedService.buildStringUrl();
                    me.shouldDisablePlay = false;
                }
            });
        }).catch(function (error) {
            console.error('Seed generation failed:', error);
            me.showNotification('Failed to generate seed: ' + error.message, 'error');
        }).then(function () {
            me.isGenerating = false;
        });
    };
    MainMenuComponent.prototype.onSpoilerLogFileSelected = function (event) {
        var me = this;
        var input = event.target;
        var files = input.files;
        var file = (files && files.length > 0) ? files[0] : null;
        if (!file)
            return;
        var reader = new FileReader();
        var me = this;
        reader.onload = function () {
            try {
                var text = reader.result;
                var spoilerLogData = JSON.parse(text);
                var seed = me._seedService.extractSeedHash(file.name);
                if (seed) {
                    localStorage.setItem('seedHash', seed);
                }
                me._seedService.saveSpoilerLogToLocalStorage(spoilerLogData);
                me._seedService.loadAndGenerateItemArray().then(function (itemArray) {
                    if (itemArray) {
                        localStorage.setItem('itemArray', itemArray.join(''));
                    }
                });
                me.showNotification('Spoiler log successfully loaded! Reloading page...', 'success');
                if (!localStorage.getItem('seedHash')) {
                    me.shouldDisablePlay = true;
                }
                else {
                    me.seedInfo = me._seedService.buildStringUrl();
                    me.shouldDisablePlay = false;
                }
            }
            catch (error) {
                console.error('Error loading spoiler log:', error);
                alert('Error loading spoiler log file. Please check the console for details.');
            }
        };
        reader.readAsText(file);
    };
    MainMenuComponent.prototype.showNotification = function (message, type) {
        var cls = type === 'success' ? 'alert-success' : 'alert-danger';
        var existing = document.querySelector('.' + cls + '-notification');
        if (existing)
            existing.remove();
        var notification = document.createElement('div');
        notification.className = 'alert ' + cls + ' ' + type + '-notification';
        notification.setAttribute('role', 'alert');
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '9999';
        notification.style.minWidth = '300px';
        notification.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        notification.innerHTML = '<strong>' + (type === 'success' ? 'Success:' : 'Error:') + '</strong> ' + message;
        var closeBtn = document.createElement('button');
        closeBtn.setAttribute('type', 'button');
        closeBtn.className = 'close';
        closeBtn.setAttribute('data-dismiss', 'alert');
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
        closeBtn.onclick = function () { notification.remove(); };
        notification.appendChild(closeBtn);
        document.body.appendChild(notification);
        setTimeout(function () {
            if (notification.parentNode)
                notification.remove();
        }, type === 'success' ? 5000 : 8000);
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-main-menu',
            template: __webpack_require__("../../../../../src/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/components/main-menu/main-menu.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_seed_service__["a" /* SeedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/components/node/node.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Note: original bundle uses url(assets/...) (relative). The leading slash on\n   url(/assets/...) here is required so Angular CLI's webpack resolves asset\n   paths from the project root rather than relative to this CSS file. */\n.node {\n  position:absolute;\n  cursor:pointer;\n  z-index:2\n}\n\n.chest-count {\n  width:100%;\n  text-align:right;\n  font-size:12px;\n  font-weight:700;\n  position:absolute;\n  bottom:-7px;\n  right:-5px;\n  color:#fff;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.warp {\n  background-image:url(/assets/node-icons/warp.png)\n}\n\n.tr-ledge, .warp {\n  background-size:cover;\n  background-repeat:no-repeat\n}\n\n.tr-ledge {\n  background-image:url(/assets/dungeon-tracker-icons/boss92.png)\n}\n\n.invisible {\n  display:none\n}\n\n.dungeon-unavailable, .unavailable, .unavailable-state {\n  background-color:#f08080\n}\n\n.dungeon, .dungeon-state {\n  background-color:blue\n}\n\n.open, .open-state {\n  background-color:#90ee90\n}\n\n.glitched-open, .glitched-state {\n  background-color:#00bfff\n}\n\n.dun-defeated, .dun-open-state, .dungeon-defeated {\n  background-color:#add8e6\n}\n\n.view, .view-state {\n  background-color:gold\n}\n\n.cleared, .defeated-boss, .dungeon-cleared, .dungeon-unavailable-cleared, .opened, .opened-state, .unavailable-open-state {\n  background-color:grey\n}\n\n.cleared, .dungeon-cleared, .dungeon-unavailable-cleared, .opened, .opened-state, .unavailable, .unavailable-open-state, .unavailable-state {\n  cursor:default\n}\n\n.dungeon-unavailable-cleared, .unavailable, .unavailable-open-state, .unavailable-state {\n  opacity:.5\n}\n\n.overworld-type {\n  width:5%;\n  height:5%;\n  margin:-2.5% -2.5%;\n  border:solid #000;\n  background-size:cover\n}\n\n.dungeon-type {\n  width:9%;\n  height:9%;\n  margin:-4.5% -4.5%;\n  background-size:100%\n}\n\n.dungeon-type, .in-dungeon-type {\n  background-repeat:no-repeat;\n  border:solid #000\n}\n\n.in-dungeon-type {\n  width:6%;\n  height:6%;\n  margin:-3% -3%;\n  background-position:50%;\n  background-size:cover\n}\n\n.icon-shown {\n  background-origin:content-box;\n  padding:2px\n}\n\n.bk-door, .open-door, .sk-door {\n  width:9%;\n  height:6%;\n  margin:-3% -4.5%\n}\n\n.open-door {\n  background-image:url(/assets/node-icons/open_door.png)\n}\n\n.sk-door {\n  background-image:url(/assets/node-icons/key_door.png)\n}\n\n.bk-door {\n  background-image:url(/assets/node-icons/big_door.png)\n}\n\n.closed-chest, .open-chest {\n  width:6%;\n  height:6%;\n  margin:-3% -3%\n}\n\n.closed-chest {\n  background-image:url(/assets/node-icons/closed_chest.png)\n}\n\n.open-chest {\n  background-image:url(/assets/node-icons/open_chest.png)\n}\n\n.big-chest, .open-big-chest {\n  width:7.5%;\n  height:6%;\n  margin:-3% -3.75%\n}\n\n.big-chest {\n  background-image:url(/assets/node-icons/closed_big_chest.png)\n}\n\n.open-big-chest {\n  background-image:url(/assets/node-icons/open_big_chest.png)\n}\n\n.spare-key {\n  background-image:url(/assets/node-icons/small_key.png)\n}\n\n.blind {\n  background-image:url(/assets/node-icons/blind.png)\n}\n\n.switch-blue {\n  background-image:url(/assets/node-icons/switch_blue.png)\n}\n\n.switch-red {\n  background-image:url(/assets/node-icons/switch_red.png)\n}\n\n.water-switch-off {\n  background-image:url(/assets/node-icons/water_switch_off.png)\n}\n\n.water-switch-on {\n  background-image:url(/assets/node-icons/water_switch_on.png)\n}\n\n.tt-floor {\n  background-image:url(/assets/node-icons/tt_floor_closed.png)\n}\n\n.tt-floor-open {\n  background-image:url(/assets/node-icons/tt_floor_open.png)\n}\n\n.push-block {\n  background-image:url(/assets/node-icons/push-block.png)\n}\n\n.empty {\n  background-image:url(/assets/node-icons/empty.png)\n}\n\n.portal {\n  background-image:url(/assets/node-icons/warp.png)\n}\n\n.mirror {\n  border-radius:50%;\n  background-image:url(/assets/item-icons/mirror.png)\n}\n\n.frog {\n  background-image:url(/assets/node-icons/frog.png)\n}\n\n.purple-chest {\n  background-image:url(/assets/node-icons/purple-chest.png)\n}\n\n.big-bomb {\n  background-image:url(/assets/node-icons/big-bomb.png)\n}\n\n.tablet {\n  background-image:url(/assets/node-icons/tablet.png)\n}\n\n.pedestal {\n  background-image:url(/assets/node-icons/pedestal.png)\n}\n\n.hint-tile {\n  background-image:url(/assets/node-icons/hint_tile.png)\n}\n\n.big-hint-tile {\n  background-image:url(/assets/item-icons/hintTile.png)\n}\n\n.sign {\n  background-image:url(/assets/item-icons/sign.png)\n}\n\n.duck {\n  background-image:url(/assets/node-icons/duck.png)\n}\n\n.hole {\n  background-image:url(/assets/node-icons/hole.png)\n}\n\n.water-warp {\n  background-image:url(/assets/node-icons/water-warp.png)\n}\n\n.sq-item {\n  width:60%;\n  margin-left:-30%;\n  background-size:cover;\n  background-color:#000\n}\n\n.lw-linkshouse {\n  background-image:url(/assets/node-icons/links_house.png)\n}\n\n.hc-sanctuary {\n  background-image:url(/assets/node-icons/sanctuary.png)\n}\n\n.lw-flute1 {\n  background-image:url(/assets/node-icons/mountain_cave.png)\n}\n\n.boss, .defeated-boss {\n  width:9%;\n  height:9%;\n  margin:-4.5% -4.5%\n}\n\n.invisible {\n  opacity:0\n}\n\n.faded {\n  display:none\n}\n\n@media (max-width:992px) {\n  .chest-count {\n    font-size:10px;\n    right:-4px;\n    bottom:-5px\n  }\n}\n\n@media (max-width:768px) {\n  .dungeon-type, .in-dungeon-type, .overworld-type {\n    border:1.5px solid #000\n  }\n  .chest-count {\n    font-size:8px;\n    right:-4px;\n    bottom:-5px\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/node/node.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"node\"\n  [ngClass]=\"[getNodeType(), getNodeState(), getNodeBgClass()]\"\n  [ngStyle]=\"{'left': nodeX, 'top': nodeY, 'background-image': getDungeonBg()}\"\n  (click)=\"onNodeClick()\">\n  <div class=\"chest-count outline-text\">\n    {{ chestCountNum }}\n    <i *ngIf=\"isLookable\" class=\"fa fa-search\" aria-hidden=\"true\"\n      [ngClass]=\"nodeInfo.isFaded ? 'faded' : ''\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/node/node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_dungeon_prize_enum__ = __webpack_require__("../../../../../src/models/dungeon-prize.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NodeComponent = (function () {
    function NodeComponent(itemNamesService) {
        this.itemNamesService = itemNamesService;
        this.clickedNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.nodeMouseEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.nodeMouseLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NodeComponent.prototype.ngOnInit = function () {
        this.nodeX = this.nodeInfo.x + '%';
        this.nodeY = this.nodeInfo.y + '%';
        this.isLookable = false;
        if (this.nodeType && this.nodeType === 'overworld' && this.nodeInfo.prize.length > 1) {
            this.chestCountNum = 'x' + this.nodeInfo.prize.length;
        }
    };
    NodeComponent.prototype.getNodeType = function () {
        if (this.nodeType === 'overworld') {
            return 'overworld-type';
        }
        else if (this.nodeType === 'dungeon') {
            return 'dungeon-type';
        }
        else if (this.isIconShown()) {
            return 'in-dungeon-type icon-shown';
        }
        else {
            return 'in-dungeon-type';
        }
    };
    NodeComponent.prototype.getDungeonBg = function () {
        var dungeonNames = [
            'Eastern Palace',
            'Desert Palace',
            'Tower of Hera',
            'Palace of Darkness',
            'Swamp Palace',
            'Skull Woods',
            'Thieves Town',
            'Ice Palace',
            'Misery Mire',
            'Turtle Rock',
            'Aga Tower',
            'Ganons Tower',
        ];
        if (this.nodeType === 'dungeon') {
            if (this.config.isEnemizer &&
                this.nodeInfo.tooltip !== 'Aga Tower' &&
                this.nodeInfo.tooltip !== 'Ganons Tower') {
                if (this.config.checkedBosses[dungeonNames.indexOf(this.nodeInfo.tooltip)]) {
                    return ('url("./assets/dungeon-tracker-icons/boss' +
                        this.config.bosses[dungeonNames.indexOf(this.nodeInfo.tooltip)] +
                        '2.png")');
                }
                else {
                    return 'url("./assets/dungeon-tracker-icons/boss.png")';
                }
            }
            else {
                return 'url("./assets/dungeon-tracker-icons/boss' + dungeonNames.indexOf(this.nodeInfo.tooltip) + '2.png")';
            }
        }
        if (this.isIconShown()) {
            var itemId = this.nodeInfo.prize[0];
            return ('url("./assets/item-icons/' +
                this.itemNamesService.convertItemName(itemId, 'view', this.items)[0].split('-')[0] +
                '.png")');
        }
        if (+this.nodeInfo.status == __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOSS) {
            if (this.dungeonItems.dungeonName === 'Aga Tower') {
                return 'url("./assets/dungeon-tracker-icons/boss102.png")';
            }
            if (this.dungeonItems.dungeonName !== 'Ganons Tower') {
                if (this.config.isEnemizer) {
                    return ('url("./assets/dungeon-tracker-icons/boss' +
                        this.config.bosses[this.dungeonItems.dungeonId] +
                        '2.png")');
                }
                else {
                    return ('url("./assets/dungeon-tracker-icons/boss' + dungeonNames.indexOf(this.dungeonItems.dungeonName) + '2.png")');
                }
            }
            if (this.config.isEnemizer) {
                switch (this.nodeInfo.tooltip) {
                    case 'Ice Armos':
                        return 'url("./assets/dungeon-tracker-icons/boss' + this.config.bosses[10] + '2.png")';
                    case 'Lanmolas 2':
                        return 'url("./assets/dungeon-tracker-icons/boss' + this.config.bosses[11] + '2.png")';
                    case 'Moldorm 2':
                        return 'url("./assets/dungeon-tracker-icons/boss' + this.config.bosses[12] + '2.png")';
                    case 'Agahnim 2':
                        return 'url("./assets/dungeon-tracker-icons/boss102.png")';
                }
            }
            else {
                switch (this.nodeInfo.tooltip) {
                    case 'Ice Armos':
                        return 'url("./assets/dungeon-tracker-icons/boss02.png")';
                    case 'Lanmolas 2':
                        return 'url("./assets/dungeon-tracker-icons/boss12.png")';
                    case 'Moldorm 2':
                        return 'url("./assets/dungeon-tracker-icons/boss22.png")';
                    case 'Agahnim 2':
                        return 'url("./assets/dungeon-tracker-icons/boss102.png")';
                }
            }
        }
    };
    NodeComponent.prototype.isIconShown = function () {
        return (!this.nodeInfo.originalNode.isOpened &&
            this.nodeInfo.prize[0].charAt(0) !== '=' &&
            !this.nodeInfo.prize[0].includes('requirement') &&
            (this.nodeInfo.isFaded ||
                (this.nodeInfo.originalNode.canView &&
                    this.nodeInfo.tooltip.indexOf('Tablet') === -1 &&
                    this.nodeInfo.status.indexOf('getable') > -1 &&
                    this.nodeInfo.status.indexOf('now') === -1) ||
                +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST ||
                (this.nodeInfo.tooltip === 'Ganon' && this.nodeInfo.status.indexOf('getable') > -1)));
    };
    NodeComponent.prototype.getNodeBgClass = function () {
        this.isLookable = false;
        if (this.nodeType === 'inside-dungeon') {
            var isViewable = +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST ||
                ((+this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL ||
                    +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM) &&
                    this.items.book);
            if (+this.nodeInfo.status !== __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST &&
                +this.nodeInfo.status !== __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL) {
                this.nodeInfo.status;
                __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM;
            }
            if ((this.nodeInfo.originalNode.canOpen(this.items, this.config) ||
                +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST ||
                (this.items.book &&
                    (!this.items.book ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM)) ||
                (this.config.canGlitch &&
                    this.nodeInfo.originalNode.canGlitch &&
                    this.nodeInfo.originalNode.canGlitch(this.items, this.config))) &&
                (+this.nodeInfo.status !== __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM || this.items.book)) {
                if (!isViewable ||
                    this.nodeInfo.originalNode.canOpen(this.items, this.config) ||
                    (this.config.canGlitch &&
                        this.nodeInfo.originalNode.canGlitch &&
                        this.nodeInfo.originalNode.canGlitch(this.items, this.config))) {
                    if (+this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED || +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST) {
                        if (this.dungeonItems.hasBigKey) {
                            if (!this.nodeInfo.originalNode.canOpen(this.items, this.config) &&
                                this.config.canGlitch &&
                                this.nodeInfo.originalNode.canGlitch &&
                                this.nodeInfo.originalNode.canGlitch(this.items, this.config)) {
                                return 'glitched-state';
                            }
                            else {
                                return 'dun-open-state';
                            }
                        }
                        else {
                            return 'dungeon-unavailable';
                        }
                    }
                    else if (+this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED) {
                        if (this.dungeonItems.smallKeys > 0) {
                            if (!this.nodeInfo.originalNode.canOpen(this.items, this.config) &&
                                this.config.canGlitch &&
                                this.nodeInfo.originalNode.canGlitch &&
                                this.nodeInfo.originalNode.canGlitch(this.items, this.config)) {
                                return 'glitched-state';
                            }
                            else {
                                return 'dun-open-state';
                            }
                        }
                        else {
                            return 'dungeon-unavailable';
                        }
                    }
                    else if (+this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH_FLIPPED ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUED ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].EMPTY ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_CHEST ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_BIG_CHEST ||
                        +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR_DONE) {
                        return 'opened-state';
                    }
                    else if (!this.nodeInfo.originalNode.canOpen(this.items, this.config) &&
                        this.config.canGlitch &&
                        this.nodeInfo.originalNode.canGlitch &&
                        this.nodeInfo.originalNode.canGlitch(this.items, this.config)) {
                        return 'glitched-state';
                    }
                    else {
                        return 'dun-open-state';
                    }
                }
                else {
                    return 'view-state';
                }
            }
            else {
                return 'dungeon-unavailable';
            }
        }
        if (this.nodeType !== 'overworld') {
            var bgClass = '';
            if (this.nodeInfo.status.indexOf('unavailable') > -1) {
                bgClass += 'unavailable';
            }
            if (this.nodeInfo.status.indexOf('getable') > -1) {
                bgClass += ' dungeon';
            }
            else {
                bgClass += ' unavailable';
            }
            if (this.dungeonItems.isBossDefeated && this.dungeonItems.itemsLeft === 0) {
                bgClass += ' cleared';
            }
            else if (this.dungeonItems.isBossDefeated) {
                bgClass += ' dun-defeated';
            }
            return bgClass;
        }
        var bgClass = '';
        if (this.nodeInfo.status.indexOf('unreachable') > -1) {
            bgClass += 'unavailable';
        }
        if (this.nodeInfo.originalNode.isOpened) {
            bgClass += ' opened';
        }
        else if (this.nodeInfo.status.indexOf('now-getable') > -1) {
            bgClass += ' open';
        }
        else if (this.nodeInfo.status.indexOf('g-') > -1) {
            bgClass += ' glitched-open';
        }
        else if (this.nodeInfo.status.indexOf('viewable') > -1) {
            bgClass += ' view';
        }
        else if (this.nodeInfo.prize[0] === 'warp') {
            bgClass += ' warp';
        }
        else if (this.nodeInfo.prize.includes('tr-ledge')) {
            bgClass += ' tr-ledge';
        }
        else if (this.nodeInfo.status.indexOf('unavailable') > -1) {
            bgClass += ' unavailable';
        }
        else {
            bgClass += ' open';
        }
        if (this.nodeInfo.prize[0].charAt(0) === '=') {
            bgClass += ' big-hint-tile';
        }
        else if (this.nodeInfo.prize[0].includes('requirement')) {
            bgClass += ' sign';
        }
        if (this.nodeInfo.status.indexOf('invisible') > -1 && !this.config.noLogic) {
            bgClass += ' invisible';
        }
        this.isLookable =
            this.nodeInfo.status.indexOf('now-getable') > -1 ||
                this.nodeInfo.status.indexOf('now-g-getable') > -1 ||
                this.nodeInfo.status.indexOf('viewable') > -1;
        return bgClass;
    };
    NodeComponent.prototype.getNodeState = function () {
        if (this.nodeType !== 'inside-dungeon') {
            return '';
        }
        switch (+this.nodeInfo.status) {
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR:
                return 'open-door';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED:
                return 'sk-door';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED:
                return 'bk-door';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST:
                return 'big-chest';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST:
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_GETABLE_CLOSED_CHEST:
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST:
                return 'closed-chest';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_CHEST:
                return 'open-chest';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_BIG_CHEST:
                return 'open-big-chest';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOSS:
                return 'boss';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].DEFEATED_BOSS:
                return 'defeated-boss';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY:
                return 'spare-key';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].EMPTY:
                return 'empty';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SWITCH:
                return 'switch-red';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SWITCH_FLIPPED:
                return 'switch-blue';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH:
                return 'water-switch-off';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH_FLIPPED:
                return 'water-switch-on';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUE:
                return 'blind';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUED:
                return 'empty';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR:
                return 'tt-floor';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR_DONE:
                return 'tt-floor-open';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR_PUSH_BLOCK:
                return 'push-block';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PORTAL:
                if (this.nodeInfo.originalNode.canOpen(this.items, this.config) || this.config.noLogic) {
                    return 'portal';
                }
                else {
                    return 'invisible';
                }
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].MIRROR:
                return 'mirror';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].FROG:
                return 'frog';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PURPLE_CHEST:
                return 'purple-chest';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BIG_BOMB:
                return 'big-bomb';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM:
                return 'tablet';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL:
                return 'pedestal';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].DUCK:
                return 'duck';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].HOLE:
                return 'hole';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP:
                return 'water-warp';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].HINT:
                return 'hint-tile';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SIGNPOST:
                return 'sign';
            case __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].SQ_OPTION:
                var sqClass = 'sq-item ' + this.nodeInfo.prize[0];
                if (this.nodeInfo.prize[0] === 'lw-flute1' &&
                    !this.nodeInfo.originalNode.canOpen(this.items, this.config)) {
                    sqClass += ' invisible';
                }
                return sqClass;
            default:
                console.log('Node Status not found: ' + this.nodeInfo.status);
                return '';
        }
    };
    NodeComponent.prototype.onNodeClick = function () {
        if (!this.config.noLogic && !!this.isLookable && !this.nodeInfo.isFaded) {
            if (this.nodeInfo.status.indexOf('viewable') > -1 ||
                (this.nodeInfo.originalNode.canOpen &&
                    !this.nodeInfo.originalNode.canOpen(this.items, this.config) &&
                    +this.nodeInfo.status === __WEBPACK_IMPORTED_MODULE_2__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST)) {
                this.nodeInfo.isFaded = true;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NodeComponent.prototype, "nodeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "nodeInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_dungeon_prize_enum__["a" /* DungeonPrize */])
    ], NodeComponent.prototype, "dungeonItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_items_model__["a" /* Items */])
    ], NodeComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_config_model__["a" /* Config */])
    ], NodeComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "clickedNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "nodeMouseEnter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NodeComponent.prototype, "nodeMouseLeave", void 0);
    NodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-node',
            template: __webpack_require__("../../../../../src/components/node/node.component.html"),
            styles: [__webpack_require__("../../../../../src/components/node/node.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_names_service__["a" /* ItemNamesService */]])
    ], NodeComponent);
    return NodeComponent;
}());



/***/ }),

/***/ "../../../../../src/components/options/options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/components/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsComponent = (function () {
    function OptionsComponent() {
    }
    OptionsComponent.prototype.ngOnInit = function () { };
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-options',
            template: __webpack_require__("../../../../../src/components/options/options.component.html"),
            styles: [__webpack_require__("../../../../../src/components/options/options.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/components/support/support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Support Us</h3>\n<p>\n  You can now support the development of our website directly through two options. All money received through\n  here will be used to cover hosting costs and enable more development time for new features and/or tools.\n</p>\n\n<h3>Patreon</h3>\n<p>\n  Z3RSim and future Randomizer tools now have a\n  <strong><a href=\"https://www.patreon.com/kyong92\" target=\"_blank\">Patreon</a></strong>.\n  The cool thing about Patreon is that you can get rewards by becoming a Patron of our website.\n  You'll be helping me take decisions on what new features to focus on, you'll be able to follow how development\n  is going closely and maybe even what future tools we explore.\n</p>\n<p>\n  Our biggest Patreon reward is a randomizer coaching session monthly. We'll be discussing your plays in detail\n  live on stream, we can talk about every routing decision and analyze everything to help you get better at the\n  game.\n</p>\n\n<h3>Donations</h3>\n<p>\n  If you'd like to just buy me a drink and not commit to anything, that's fine as well, you can do that through\n  a PayPal donation on my <strong><a href=\"https://streamlabs.com/kyong92\" target=\"_blank\">Twitch Donation Page</a></strong>.\n  All proceeds go directly to me, you do not need to select a GIF or effect.\n</p>\n\n<h3>Thank you</h3>\n<p>\n  Thanks for even considering supporting the website, I just hope we can keep building cool things to explore\n  this exciting world of randomizers we found.\n</p>\n\n<h3>Special Thanks to our Patrons</h3>\n<p class=\"golden col-xs-3\">Kohrek</p>\n<p class=\"silver col-xs-3\">Qirn</p>\n<p class=\"silver col-xs-3\">YunaKitty</p>\n<p class=\"silver col-xs-3\">Leenuhh</p>\n"

/***/ }),

/***/ "../../../../../src/components/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportComponent = (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () { };
    SupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-support',
            template: __webpack_require__("../../../../../src/components/support/support.component.html"),
            styles: [__webpack_require__("../../../../../src/components/support/support.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "../../../../../src/components/tp-log-redirect/tp-log-redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/tp-log-redirect/tp-log-redirect.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/components/tp-log-redirect/tp-log-redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpLogRedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TpLogRedirectComponent = (function () {
    function TpLogRedirectComponent() {
    }
    TpLogRedirectComponent.prototype.ngOnInit = function () {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1g8X_ZcOFw4J5ipngjgoUZi6KeQM_YggXH1wdsz0gjLc/';
    };
    TpLogRedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tp-log-redirect',
            template: __webpack_require__("../../../../../src/components/tp-log-redirect/tp-log-redirect.component.html"),
            styles: [__webpack_require__("../../../../../src/components/tp-log-redirect/tp-log-redirect.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], TpLogRedirectComponent);
    return TpLogRedirectComponent;
}());



/***/ }),

/***/ "../../../../../src/components/tp-log/tp-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/tp-log/tp-log.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Redirecting...</h2>\n<app-tp-log-redirect></app-tp-log-redirect>\n"

/***/ }),

/***/ "../../../../../src/components/tp-log/tp-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TpLogComponent = (function () {
    function TpLogComponent() {
    }
    TpLogComponent.prototype.ngOnInit = function () { };
    TpLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tp-log',
            template: __webpack_require__("../../../../../src/components/tp-log/tp-log.component.html"),
            styles: [__webpack_require__("../../../../../src/components/tp-log/tp-log.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], TpLogComponent);
    return TpLogComponent;
}());



/***/ }),

/***/ "../../../../../src/components/tracker-node/tracker-node.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Note: original bundle uses url(assets/...) (relative). The leading slash on\n   url(/assets/...) here is required so Angular CLI's webpack resolves asset\n   paths from the project root rather than relative to this CSS file. */\n.dungeon-chest, .dungeon-node-bg, .dungeon-prize, .node {\n  background-size:cover\n}\n\n.counter {\n  position:absolute;\n  bottom:-2px;\n  right:7px;\n  font-size:22px\n}\n\n.counter-smaller {\n  font-size:17px;\n  bottom:-7px\n}\n\n.dungeon-chest, .dungeon-node-bg, .node {\n  width:100%;\n  padding-bottom:100%;\n  height:0\n}\n\n.off {\n  opacity:.25\n}\n\ndiv {\n  color:#fff\n}\n\n.dungeon-node {\n  width:100%\n}\n\n.dungeon-node-bg {\n  position:absolute\n}\n\n.dungeon-initials, .dungeon-prize {\n  position:relative;\n  top:25%;\n  width:50%;\n  padding-top:50%\n}\n\n.dungeon-initials {\n  background-size:contain;\n  background-repeat:no-repeat\n}\n\n.dungeon-prize {\n  left:50%\n}\n\n.mm-medallion-text, .tr-medallion-text {\n  position:absolute;\n  font-weight:700;\n  color:#ddd\n}\n\n.mm-medallion-text {\n  top:33px\n}\n\n.tr-medallion-text {\n  top:5px;\n  right:9px\n}\n\n.dungeon-chest {\n  text-align:center;\n  font-size:30px;\n  font-weight:700\n}\n\n.dungeon-keys {\n  display:-ms-flexbox;\n  display:flex\n}\n\n.big-key-icon, .small-keys-icon {\n  background-size:contain;\n  width:50%;\n  padding-top:50%\n}\n\n.big-key-icon {\n  background-image:url(/assets/item-icons/bigKey.png)\n}\n\n.small-keys-icon {\n  background-image:url(/assets/item-icons/smallKey.png);\n  position:relative\n}\n\n.small-keys-text {\n  position:absolute;\n  font-size:16px;\n  top:5px;\n  right:1px\n}\n\n.grayscale {\n  opacity:.5;\n  filter:gray;\n  filter:grayscale(1)\n}\n\n.invisible {\n  visibility:hidden\n}\n\n@media (max-width:992px) {\n  .counter {\n    font-size:22px;\n    bottom:4px;\n    right:4px\n  }\n  .counter-smaller {\n    font-size:17px\n  }\n}\n\n@media (max-width:768px) {\n  .counter {\n    font-size:10px;\n    bottom:-4px;\n    right:1px\n  }\n  .counter-smaller {\n    font-size:8px;\n    right:0\n  }\n  .dungeon-chest {\n    font-size:10px\n  }\n  .big-key-icon, .small-keys-icon {\n    background-size:contain;\n    width:100%;\n    padding-top:100%\n  }\n  .dungeon-keys {\n    -ms-flex-flow:column;\n    flex-flow:column\n  }\n  .small-keys-text {\n    font-size:12px;\n    top:2px;\n    right:2px\n  }\n  .mm-medallion-text, .tr-medallion-text {\n    font-size:10px;\n    font-weight:400\n  }\n  .mm-medallion-text {\n    top:10px\n  }\n  .tr-medallion-text {\n    top:0;\n    right:0\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/tracker-node/tracker-node.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"node\" *ngIf=\"isItem\" [ngClass]=\"isTransparent()\" [style.background-image]=\"getBgImg()\">\n  <span class=\"counter not-selectable outline-text\" *ngIf=\"itemName === 'health'\">{{ items.totalHealth }}</span>\n  <span class=\"counter counter-smaller not-selectable outline-text\" *ngIf=\"itemName === 'triforcePieces'\">{{ items.triforcePieces }}/20</span>\n</div>\n<span class=\"not-selectable outline-text mm-medallion-text\" *ngIf=\"isItem && (itemName === 'bombos' || itemName === 'ether' || itemName === 'quake')\" [ngClass]=\"checkMmMedallion()\">MM</span>\n  <span class=\"not-selectable outline-text tr-medallion-text\" *ngIf=\"isItem && (itemName === 'bombos' || itemName === 'ether' || itemName === 'quake')\" [ngClass]=\"checkTrMedallion()\">TR</span>\n<div class=\"dungeon-node\" *ngIf=\"!isItem\">\n  <div>\n    <figure [ngClass]=\"getDungeonBeatenClass()\" [style.background-image]=\"getDungeonBg()\">\n    </figure>\n    <div class=\"dungeon-initials\" [style.background-image]=\"getDungeonInitials()\">\n    </div>\n    <div class=\"dungeon-prize\" [ngClass]=\"isAgaTowerOrGt ? 'invisible' : ''\" [style.background-image]=\"getDungeonPrizeBg()\">\n    </div>\n  </div>\n  <div class=\"dungeon-keys\" *ngIf=\"config.dungeonItems === 'mcs' || config.dungeonItems === 'full' || config.isMystery\">\n    <div class=\"big-key-icon\" [ngClass]=\"getBigKeyIconClass()\">\n\n    </div>\n    <div class=\"small-keys-icon\" [ngClass]=\"getSmallKeysIconClass()\">\n      <span class=\"small-keys-text not-selectable outline-text\">\n          {{ keyCountText }}\n      </span>\n\n    </div>\n  </div>\n  <div class=\"dungeon-chest outline-text not-selectable\" [style.background-image]=\"getDungeonChestCountBg()\">\n    {{ chestCountText }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/tracker-node/tracker-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__ = __webpack_require__("../../../../../src/models/dungeon-prize.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_items_model__ = __webpack_require__("../../../../../src/models/items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackerNodeComponent = (function () {
    function TrackerNodeComponent(_itemNamesService) {
        this._itemNamesService = _itemNamesService;
        this.duns = [
            'Eastern Palace',
            'Desert Palace',
            'Tower of Hera',
            'Palace of Darkness',
            'Swamp Palace',
            'Skull Woods',
            'Thieves Town',
            'Ice Palace',
            'Misery Mire',
            'Turtle Rock',
            'Aga Tower',
            'Ganons Tower',
        ];
    }
    TrackerNodeComponent.prototype.ngOnInit = function () {
        if (!this.isItem) {
            this.isAgaTowerOrGt =
                this.dungeonData.name === 'Aga Tower' || this.dungeonData.name === 'Ganons Tower';
            if (this.dungeonData.name === 'Misery Mire') {
                this.medallionName = this.config.mmMedallion;
            }
            if (this.dungeonData.name === 'Turtle Rock') {
                this.medallionName = this.config.trMedallion;
            }
        }
    };
    TrackerNodeComponent.prototype.getBgImg = function () {
        if (this.itemName === 'fluteShovel') {
            if ((this.items.shovel && this.items.flute) || (!this.items.shovel && !this.items.flute)) {
                return 'url("./assets/item-icons/allflute.png")';
            }
            else if (this.items.shovel) {
                return 'url("./assets/item-icons/shovel.png")';
            }
            else {
                return 'url("./assets/item-icons/flute.png")';
            }
        }
        else if (this.itemName === 'powderMush') {
            if ((this.items.powder && this.items.mushroom) ||
                (!this.items.powder && !this.items.mushroom)) {
                return 'url("./assets/item-icons/allpowder.png")';
            }
            else if (this.items.powder) {
                return 'url("./assets/item-icons/powder.png")';
            }
            else {
                return 'url("./assets/item-icons/mushroom.png")';
            }
        }
        else if (this.itemName === 'triforcePieces') {
            return 'url("./assets/item-icons/triforcePieces.png")';
        }
        else if (typeof this.items[this.itemName] == 'boolean') {
            if (this.itemName === 'boots' && this.config.noLogic) {
                return 'url("./assets/item-icons/boots_go.png")';
            }
            else {
                return 'url("./assets/item-icons/' + this.itemName + '.png")';
            }
        }
        else {
            return ('url("./assets/item-icons/' + this.itemName + (this.value > 0 ? this.value : '') + '.png")');
        }
    };
    TrackerNodeComponent.prototype.getDungeonBg = function () {
        if (this.config.isEnemizer &&
            this.dungeonData.name !== 'Aga Tower' &&
            this.dungeonData.name !== 'Ganons Tower') {
            if (this.config.checkedBosses[this.duns.indexOf(this.dungeonData.name)]) {
                return ('url("./assets/dungeon-tracker-icons/boss' +
                    this.config.bosses[this.duns.indexOf(this.dungeonData.name)] +
                    '2.png")');
            }
            else {
                return 'url("./assets/dungeon-tracker-icons/boss.png")';
            }
        }
        else {
            return ('url("./assets/dungeon-tracker-icons/boss' +
                this.duns.indexOf(this.dungeonData.name) +
                '2.png")');
        }
    };
    TrackerNodeComponent.prototype.checkMmMedallion = function () {
        if (this.items.mmMedallionChecked && this.itemName === this.config.mmMedallion) {
            return 'mm-medallion-text';
        }
        else {
            return 'invisible';
        }
    };
    TrackerNodeComponent.prototype.checkTrMedallion = function () {
        if (this.items.trMedallionChecked && this.itemName === this.config.trMedallion) {
            return 'tr-medallion-text';
        }
        else {
            return 'invisible';
        }
    };
    TrackerNodeComponent.prototype.getDungeonBeatenClass = function () {
        if (this.items.getDungeonItems(this.dungeonData.name).isBossDefeated) {
            return 'dungeon-node-bg';
        }
        else {
            return 'dungeon-node-bg grayscale';
        }
    };
    TrackerNodeComponent.prototype.getDungeonChestCountBg = function () {
        this.chestCountText = '';
        var chestCount = this.items.getDungeonItems(this.dungeonData.name).itemsLeft;
        if (this.isAgaTowerOrGt) {
            chestCount--;
            if (this.items.getDungeonItems(this.dungeonData.name).isBossDefeated) {
                chestCount++;
            }
        }
        if (chestCount >= 6) {
            this.chestCountText = chestCount.toString();
            chestCount = 6;
        }
        if (chestCount < 0) {
            chestCount = 0;
        }
        return 'url("./assets/dungeon-tracker-icons/chest' + chestCount + '.png")';
    };
    TrackerNodeComponent.prototype.getDungeonPrizeBg = function () {
        switch (this.items.getDungeonItems(this.dungeonData.name).mapPrizeStatus) {
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].CRYSTAL:
                return 'url("./assets/dungeon-tracker-icons/dungeon1.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].RED_CRYSTAL:
                return 'url("./assets/dungeon-tracker-icons/dungeon2.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].GREEN_PENDANT:
                return 'url("./assets/dungeon-tracker-icons/dungeon3.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].PENDANT:
                return 'url("./assets/dungeon-tracker-icons/dungeon4.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_CRYSTAL:
                return 'url("./assets/dungeon-tracker-icons/dungeonC.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].SOME_PENDANT:
                return 'url("./assets/dungeon-tracker-icons/dungeonP.png")';
            case __WEBPACK_IMPORTED_MODULE_2__models_dungeon_prize_enum__["a" /* DungeonPrize */].UNKNOWN:
            default:
                return 'url("./assets/dungeon-tracker-icons/dungeon0.png")';
        }
    };
    TrackerNodeComponent.prototype.getDungeonInitials = function () {
        return ('url("./assets/dungeon-tracker-icons/initials' +
            this.duns.indexOf(this.dungeonData.name) +
            '.png")');
    };
    TrackerNodeComponent.prototype.getBigKeyIconClass = function () {
        if (this.dungeonData.name === 'Aga Tower') {
            return 'invisible';
        }
        else if (this.items.getDungeonItems(this.dungeonData.name).hasBigKey) {
            return undefined;
        }
        else {
            return 'grayscale';
        }
    };
    TrackerNodeComponent.prototype.getSmallKeysIconClass = function () {
        this.keyCountText = '';
        if (this.dungeonData.name === 'Eastern Palace') {
            return 'invisible';
        }
        else if (this.items.getDungeonItems(this.dungeonData.name).smallKeys === 0) {
            return 'grayscale';
        }
        else {
            this.keyCountText = this.items.getDungeonItems(this.dungeonData.name).smallKeys.toString();
            return;
        }
    };
    TrackerNodeComponent.prototype.isMedallionDungeon = function () {
        return this.dungeonData.name == 'Misery Mire' || this.dungeonData.name == 'Turtle Rock';
    };
    TrackerNodeComponent.prototype.isTransparent = function () {
        if ((this.itemName === 'fluteShovel' && !this.items.shovel && !this.items.flute) ||
            (this.itemName === 'powderMush' && !this.items.powder && !this.items.mushroom) ||
            (this.itemName !== 'health' &&
                this.itemName !== 'triforcePieces' &&
                ((typeof this.value == 'boolean' && !this.value) || this.value === 0))) {
            return 'off';
        }
    };
    TrackerNodeComponent.prototype.canViewDarkWorldMap = function () {
        return (this.items.canWestDeathMountain(this.config.canGlitch) ||
            (this.items.glove && this.items.hammer) ||
            this.items.glove === 2 ||
            this.items.agahnim);
    };
    TrackerNodeComponent.prototype.shouldShowMedallion = function () {
        return ((!this.isItem &&
            this.dungeonData.name === 'Turtle Rock' &&
            !!this.items.trMedallionChecked) ||
            (!this.isItem && this.dungeonData.name === 'Misery Mire' && !!this.items.mmMedallionChecked));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TrackerNodeComponent.prototype, "isItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TrackerNodeComponent.prototype, "itemName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TrackerNodeComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_dungeon_model__["a" /* Dungeon */])
    ], TrackerNodeComponent.prototype, "dungeonData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_items_model__["a" /* Items */])
    ], TrackerNodeComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_config_model__["a" /* Config */])
    ], TrackerNodeComponent.prototype, "config", void 0);
    TrackerNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-tracker-node',
            template: __webpack_require__("../../../../../src/components/tracker-node/tracker-node.component.html"),
            styles: [__webpack_require__("../../../../../src/components/tracker-node/tracker-node.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_item_names_service__["a" /* ItemNamesService */]])
    ], TrackerNodeComponent);
    return TrackerNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/data/dark-world-locations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkWorldLocations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_location_model__ = __webpack_require__("../../../../../src/models/location.model.ts");

var DarkWorldLocations = (function () {
    function DarkWorldLocations() {
    }
    DarkWorldLocations.setup = function (items, config) {
        var locations = [];
        if (config.hintsEnabled) {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('SE Dark World Hint', 95, 78, function (items, config) {
                if (config.mode === 'inverted') {
                    return items.flippers && items.glove;
                }
                else {
                    return ((items.canNorthEastDarkWorld() || items.canNorthWestDarkWorld()) &&
                        items.flippers &&
                        items.glove &&
                        items.moonPearl);
                }
            }, null, ['=14'], '', function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove &&
                        ((items.flute && items.canInvertedLW()) ||
                            (items.canInvertedNEDW(true) && (items.hammer || items.glove)) ||
                            (items.canInvertedLW() && items.mirror) ||
                            items.boots ||
                            items.canAncillaFF()));
                }
                else {
                    return (items.glove &&
                        items.moonPearl &&
                        (items.canNorthEastDarkWorld(true) ||
                            (items.canNorthWestDarkWorld(true) && items.boots) ||
                            items.canAncillaFF()));
                }
            }));
        }
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Superbunny Cave', 92.8, 14.7, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain();
            }
            else {
                return items.canDarkEastDeathMountain() && items.moonPearl;
            }
        }, null, [items[97], items[98]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true);
            }
            else {
                return items.canDarkEastDeathMountain(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hookshot Cave (bottom chest)', 91.6, 8.6, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedEastDarkDeathMountain() &&
                    items.glove &&
                    (items.hookshot || (items.boots && config.advancedItems)));
            }
            else {
                return (items.canDarkEastDeathMountain() &&
                    items.moonPearl &&
                    (items.hookshot || (items.boots && config.advancedItems)));
            }
        }, null, [items[102]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true) && items.glove && (items.hookshot || items.boots);
            }
            else {
                return items.canDarkEastDeathMountain(true) && items.moonPearl && (items.hookshot || items.boots);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hookshot Cave (3 top chests)', 91.6, 3.4, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain() && items.glove && items.hookshot;
            }
            else {
                return items.canDarkEastDeathMountain() && items.moonPearl && items.hookshot;
            }
        }, null, [items[100], items[101], items[99]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true) && items.glove && (items.hookshot || items.boots);
            }
            else {
                return items.canDarkEastDeathMountain(true) && items.moonPearl && (items.hookshot || items.boots);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Spike Cave', 78.6, 14.9, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedEastDarkDeathMountain() &&
                    items.hammer &&
                    items.glove &&
                    ((items.cape && (items.halfMagic || items.bottle)) || items.byrna));
            }
            else {
                return (items.canDarkWestDeathMountain() &&
                    items.hammer &&
                    items.glove &&
                    ((items.cape && (items.halfMagic || items.bottle)) || items.byrna));
            }
        }, null, [items[103]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true) && items.hammer && items.glove;
            }
            else {
                return items.canDarkWestDeathMountain(true) && items.hammer && items.glove;
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Catfish', 96, 17.2, function (items, config) {
            return ((items.canNorthEastDarkWorld() && items.moonPearl && items.glove) ||
                (config.mode === 'inverted' && items.canInvertedNEDW() && items.glove));
        }, function (items, config) {
            return ((items.canNorthEastDarkWorld() && items.moonPearl && items.glove) ||
                (config.mode === 'inverted' && items.canInvertedNEDW() && items.glove));
        }, [items[104]], 'ow', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW(true) && items.glove;
            }
            else {
                return items.canNorthEastDarkWorld(true) && items.moonPearl && items.glove;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW(true) && items.glove;
            }
            else {
                return items.canNorthEastDarkWorld(true) && items.moonPearl && items.glove;
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Pyramid', 79, 43.5, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW();
            }
            else {
                return items.canNorthEastDarkWorld();
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW();
            }
            else {
                return items.canNorthEastDarkWorld();
            }
        }, [items[105]], 'ow', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW(true);
            }
            else {
                return items.canNorthEastDarkWorld(true);
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW(true);
            }
            else {
                return items.canNorthEastDarkWorld(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Pyramid Fairy', 73.5, 48.5, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.mirror && items.crystal5 && items.crystal6;
            }
            else {
                return (items.canSouthDarkWorld() &&
                    items.moonPearl &&
                    (items.hammer || (items.mirror && items.agahnim)) &&
                    items.crystal5 &&
                    items.crystal6);
            }
        }, null, [items[106], items[107]], 'ow'));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bombable Hut', 55.4, 57.8, function (items, config) {
            return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        }, null, [items[108]], 'ow', function (items, config) {
            return items.canNorthWestDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('C-Shaped House', 60.8, 47.9, function (items, config) {
            return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        }, null, [items[109]], 'ow', function (items, config) {
            return items.canNorthWestDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Chest Game', 52.1, 46.4, function (items, config) {
            return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        }, null, [items[110]], 'ow', function (items, config) {
            return items.canNorthWestDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hammer Pegs', 65.8, 60.1, function (items, config) {
            if (config.mode === 'inverted') {
                return items.hammer && (items.glove === 2 || (items.mirror && items.canInvertedLW() && items.glove));
            }
            else {
                return items.canNorthWestDarkWorld() && items.glove === 2 && items.hammer;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.hammer && (items.glove === 2 || (items.mirror && items.canInvertedLW() && items.glove));
            }
            else {
                return items.canNorthWestDarkWorld() && items.glove === 2 && items.hammer;
            }
        }, [items[111]], 'ow'));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bumper Cave', 67.1, 15.2, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.glove &&
                    items.cape &&
                    items.moonPearl &&
                    items.mirror &&
                    items.canInvertedLW() &&
                    (items.hookshot || config.advancedItems));
            }
            else {
                return (items.canNorthWestDarkWorld() &&
                    items.glove &&
                    items.cape &&
                    (items.hookshot || config.advancedItems));
            }
        }, function (items, config) {
            return items.canNorthWestDarkWorld() || config.mode === 'inverted';
        }, [items[112]], 'ow', function (items, config) {
            if (config.mode === 'inverted') {
                return items.glove && items.cape && items.moonPearl && items.mirror && items.canInvertedLW();
            }
            else {
                return (items.canNorthWestDarkWorld(true) &&
                    items.glove &&
                    items.cape &&
                    (items.hookshot || config.advancedItems));
            }
        }, function (items, config) {
            return items.canNorthWestDarkWorld(true) || config.mode === 'inverted';
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hype Cave', 80, 77.1, function (items, config) {
            return items.canSouthDarkWorld() || config.mode === 'inverted';
        }, null, [items[115], items[116], items[117], items[118], items[120]], 'ow', function (items, config) {
            return items.canSouthDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Ol' Stumpy", 65.5, 68.6, function (items, config) {
            return items.canSouthDarkWorld() || config.mode === 'inverted';
        }, null, [items[119]], 'ow', function (items, config) {
            return items.canSouthDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Digging Game', 52.9, 69.2, function (items, config) {
            return items.canSouthDarkWorld() || config.mode === 'inverted';
        }, function (items, config) {
            return items.canSouthDarkWorld() || config.mode === 'inverted';
        }, [items[121]], 'ow', function (items, config) {
            return items.canSouthDarkWorld(true);
        }, function (items, config) {
            return items.canSouthDarkWorld(true);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Mire Shed', 51.7, 79.5, function (items, config) {
            return items.canMire(config) && (items.moonPearl || config.mode === 'inverted');
        }, null, [items[122], items[123]], 'mire', function (items, config) {
            return items.canMire(config) && (items.mirror || items.moonPearl || config.mode === 'inverted');
        }));
        if (config.mode !== 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Ganon's Tower Accessibility", 73.5, 4.5, function (items, config) {
                return items.canDarkEastDeathMountain() && items.moonPearl;
            }, null, ['gt-requirement'], '', function (items, config) {
                return items.canDarkEastDeathMountain(true) && items.moonPearl;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Ganon's Vulnerability", 72, 42, function (items, config) {
                return items.canNorthEastDarkWorld() && items.moonPearl;
            }, null, ['ganon-requirement'], '', function (items, config) {
                return items.canNorthEastDarkWorld(true) && items.moonPearl;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Ganon', 75, 40.8, function (items, config) {
                switch (config.goal) {
                    case 'pedestal':
                    case 'triforce':
                        return false;
                    case 'dungeons':
                        return items.canNorthEastDarkWorld() && items.canDamageGanon(config);
                    case 'ganon':
                        return items.canNorthEastDarkWorld() && items.agahnim2 && items.canDamageGanon(config);
                    case 'fast_ganon':
                        return items.canNorthEastDarkWorld() && items.canDamageGanon(config);
                }
            }, null, ['Ganon'], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Blacksmiths', 57, 65.9, function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2 && (items.mirror || config.advancedItems);
                }
            }, null, [items[113]], 'ow', function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2;
                }
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Purple Chest', 65.2, 52.2, function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2 && (items.mirror || config.advancedItems);
                }
            }, null, [items[114]], 'ow', function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2;
                }
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bombos Tablet', 62.5, 92.2, function (items, config) {
                return (items.book &&
                    items.mirror &&
                    items.canSouthDarkWorld() &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }, function (items, config) {
                return items.book && items.mirror && items.canSouthDarkWorld();
            }, [items[33]], 'ow', function (items, config) {
                return (items.book &&
                    items.mirror &&
                    items.canSouthDarkWorld(true) &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }, function (items, config) {
                return items.book && items.mirror && items.canSouthDarkWorld(true);
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Checkerboard Cave', 60, 77.3, function (items, config) {
                return items.canMire(config) && items.mirror;
            }, function (items, config) {
                return items.canMire(config) && items.mirror;
            }, [items[39]], 'mire'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('South of Grove', 62.5, 84.1, function (items, config) {
                return items.mirror && items.canSouthDarkWorld();
            }, function (items, config) {
                return items.mirror && items.canSouthDarkWorld();
            }, [items[37]], 'ow', function (items, config) {
                return items.mirror && items.canSouthDarkWorld(true);
            }, function (items, config) {
                return items.mirror && items.canSouthDarkWorld(true);
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Graveyard Ledge', 78.5, 27, function (items, config) {
                return items.mirror && items.moonPearl && items.canNorthWestDarkWorld();
            }, function (items, config) {
                return items.mirror && items.moonPearl && items.canNorthWestDarkWorld();
            }, [items[38]], 'ow', function (items, config) {
                return items.mirror && items.moonPearl && items.canNorthWestDarkWorld(true);
            }, function (items, config) {
                return items.mirror && items.moonPearl && items.canNorthWestDarkWorld(true);
            }));
        }
        if (config.mode === 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Link's House", 77.4, 67.9, function (items, config) {
                return true;
            }, null, [items[5]], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 54.5, 34, function (items, config) {
                return (items.hammer && items.glove) || items.glove === 2;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('wdm', 75.6, 14.9, function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain();
                }
                else {
                    return items.canWestDeathMountain();
                }
            }, null, ['warp'], '', function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain(true);
                }
                else {
                    return items.canWestDeathMountain(true);
                }
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('dm', 88.1, 22.9, function (items, config) {
                return items.canWestDeathMountain() && items.glove === 2;
            }, null, ['warp'], '', function (items, config) {
                return items.canWestDeathMountain(true) && items.glove === 2;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 73.5, 79, function (items, config) {
                return items.hammer && items.glove;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('mire', 51.7, 96, function (items, config) {
                return items.flute && items.canInvertedLW() && items.glove === 2;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 98.2, 70, function (items, config) {
                return items.hammer && items.glove;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ip', 89.7, 92, function (items, config) {
                return items.flippers && items.glove === 2;
            }, null, ['warp'], '', function (items, config) {
                return items.glove === 2;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('dm', 98.6, 3.4, function (items, config) {
                return (items.canInvertedEastDarkDeathMountain() && items.glove === 2 && items.hammer && items.moonPearl);
            }, null, ['warp'], '', function (items, config) {
                return (items.canInvertedEastDarkDeathMountain(true) && items.glove === 2 && items.hammer && items.moonPearl);
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 74.9, 59, function (items, config) {
                return items.agahnim;
            }, null, ['warp']));
        }
        return locations;
    };
    return DarkWorldLocations;
}());



/***/ }),

/***/ "../../../../../src/data/light-world-locations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWorldLocations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_location_model__ = __webpack_require__("../../../../../src/models/location.model.ts");

var LightWorldLocations = (function () {
    function LightWorldLocations() {
    }
    LightWorldLocations.setup = function (items, config) {
        var locations = [];
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Master Sword Pedestal', 2.5, 3.2, function (items, config) {
            return (items.pendantCourage &&
                items.pendantPower &&
                items.pendantWisdom &&
                (config.mode !== 'inverted' || items.canInvertedLW()) &&
                (items.book || config.advancedItems));
        }, function (items, config) {
            return items.book && (config.mode !== 'inverted' || items.canInvertedLW());
        }, [items[0]], '', function (items, config) {
            return (items.pendantCourage &&
                items.pendantPower &&
                items.pendantWisdom &&
                (config.mode !== 'inverted' || items.canInvertedLW()));
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hyrule Secret Passage', 30, 40.8, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[1], items[2]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("King's Tomb", 30.8, 29.6, function (items, config) {
            if (config.mode === 'inverted') {
                return items.boots && items.glove === 2 && items.moonPearl && items.canInvertedLW();
            }
            else {
                return items.boots && (items.glove === 2 || (items.mirror && items.canNorthWestDarkWorld()));
            }
        }, null, [items[3]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Dam', 23.4, 93.4, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[4], items[47]], '', function (items, config) {
            return config.mode === 'inverted' && items.mirror && items.canInvertedLW();
        }));
        if (config.mode !== 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Link's House", 27.4, 67.9, function (items, config) {
                return true;
            }, null, [items[5]]));
        }
        if (config.mode !== 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Kakariko', 4, 53.8, function (items, config) {
                return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
            }, null, [items[6], items[7], items[12], items[13], items[14], items[15], items[16], items[17], items[18], items[19], items[20], items[21], items[28]]));
        }
        else {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Kakariko (Superbunny Chests)', 2.5, 42, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, null, [items[13], items[14], items[15], items[16]], '', function (items, config) {
                return items.canInvertedLW();
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Kakariko (Mirror Superbunny Chests)', 6.5, 42, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, null, [items[18], items[19], items[20], items[21], items[6]], '', function (items, config) {
                return items.canInvertedLW() && items.mirror;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Kakariko (Pearl Locked Chests)', 5, 53.8, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, null, [items[7], items[12], items[17]]));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bottle Vendor', 5, 47.5, function (items, config) {
                return config.mode !== 'inverted' || items.canInvertedLW();
            }, null, [items[28]]));
        }
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Aginah's Cave", 10, 82.6, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[8]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Sahasrahla Hut', 40.7, 41.4, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[9], items[10], items[11]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bonk Rocks', 19.5, 29.3, function (items, config) {
            return items.boots && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, null, [items[22]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Mini Moldorm Cave', 32.6, 93.4, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[23], items[24], items[25], items[26], items[40]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Ice Rod Cave', 44.7, 76.9, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[27]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Sahasrahla Green Pendant', 40.7, 46.7, function (items, config) {
            return items.pendantCourage && (config.mode !== 'inverted' || items.canInvertedLW());
        }, null, [items[29]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Magic Bat', 16, 58, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.moonPearl && items.hammer && items.powder;
            }
            else {
                return items.powder && (items.hammer || (items.moonPearl && items.mirror && items.glove === 2));
            }
        }, null, [items[30]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.moonPearl && items.hammer && items.somaria && items.mushroom;
            }
            else {
                return (items.somaria &&
                    items.mushroom &&
                    (items.hammer || (items.moonPearl && items.mirror && items.glove === 2)));
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Sick Kid', 7.8, 53, function (items, config) {
            return items.bottle && (config.mode !== 'inverted' || items.canInvertedLW());
        }, null, [items[31]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Hobo', 35.4, 69.7, function (items, config) {
            return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, null, [items[32]], '', function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('King Zora', 47.7, 12.1, function (items, config) {
            return ((items.flippers || items.glove) &&
                (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl)));
        }, null, [items[34]], '', function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Lumberjack Tree', 15.1, 7.6, function (items, config) {
            return (items.agahnim &&
                items.boots &&
                (config.mode !== 'inverted' || (items.moonPearl && items.canInvertedLW())));
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }, [items[36]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Library', 7.7, 65.9, function (items, config) {
            return items.boots && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }, [items[41]]));
        if (config.mode === 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Mushroom Item', 7.2, 9.6, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, function (items, config) {
                return items.canInvertedLW();
            }, [items[42]]));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Lost Woods Hideout', 9.2, 16.3, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, function (items, config) {
                return items.canInvertedLW();
            }, [items[35]]));
        }
        else {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Lost Woods', 7.2, 9.6, function (items, config) {
                return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
            }, null, [items[42], items[35]]));
        }
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Potion Shop', 40.8, 32.5, function (items, config) {
            return items.mushroom && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, null, [items[43]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Maze Race', 1.8, 69.8, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }, [items[44]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Desert Ledge', 1.5, 89, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.moonPearl && items.book;
            }
            else {
                return items.book || (items.canMire(config) && items.mirror);
            }
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }, [items[45]], '', function (items, config) {
            return config.mode === 'inverted' && items.book && items.canInvertedLW();
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Lake Hylia Island', 36.1, 82.9, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.moonPearl && items.flippers;
            }
            else {
                return (items.flippers &&
                    items.moonPearl &&
                    items.mirror &&
                    (items.canSouthDarkWorld() || items.canNorthEastDarkWorld()));
            }
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }, [items[46]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.moonPearl;
            }
            else {
                return (items.boots &&
                    items.moonPearl &&
                    items.mirror &&
                    (items.canSouthDarkWorld(true) || items.canNorthEastDarkWorld(true)));
            }
        }, function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Zora River Ledge', 47.7, 17.3, function (items, config) {
            return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, function (items, config) {
            return items.glove && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, [items[48]], '', function (items, config) {
            return ((items.boots || items.canAncillaFF()) &&
                (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl)));
        }, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Shovel Item', 14.4, 66.2, function (items, config) {
            return items.shovel && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, null, [items[49]]));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Waterfall Fairy', 45, 19.3, function (items, config) {
            return items.flippers && (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl));
        }, null, [items[50], items[51]], '', function (items, config) {
            return ((config.mode !== 'inverted' && (items.moonPearl || items.boots)) ||
                (items.canInvertedLW() && items.moonPearl));
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Sanctuary', 23, 28, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[52]], '', function (items, config) {
            return config.mode === 'inverted' && items.canInvertedLW() && items.mirror;
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Sewers Bombable Wall', 26.8, 32.4, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedLW() &&
                    items.moonPearl &&
                    (items.glove || (items.lamp && items.dungeonItemsArray[0].smallKeys > 0)));
            }
            else {
                return (config.mode.indexOf('standard') > -1 ||
                    items.glove ||
                    (items.lamp && items.dungeonItemsArray[0].smallKeys > 0));
            }
        }, null, [items[53], items[54], items[55]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedLW() && items.dungeonItemsArray[0].smallKeys > 0;
            }
            else {
                return items.dungeonItemsArray[0].smallKeys > 0;
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Escape Front Half', 24.9, 51, function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl);
        }, null, [items[57], items[58], items[59]], '', function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Escape Dark Room Chest', 24.9, 45.8, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedLW() && items.moonPearl && (items.lamp || (config.advancedItems && items.fireRod)));
            }
            else {
                return config.mode.indexOf('standard') > -1 || items.lamp || (config.advancedItems && items.fireRod);
            }
        }, null, [items[56]], '', function (items, config) {
            return config.mode !== 'inverted' || items.canInvertedLW();
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Old Man', 20.8, 20.4, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain() && items.lamp;
            }
            else {
                return items.canWestDeathMountain() && items.lamp;
            }
        }, null, [items[74]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true);
            }
            else {
                return items.canWestDeathMountain(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Spectacle Rock Cave', 25.8, 14.8, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain();
            }
            else {
                return items.canWestDeathMountain();
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain();
            }
            else {
                return items.canWestDeathMountain();
            }
        }, [items[75]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true);
            }
            else {
                return items.canWestDeathMountain(true);
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true);
            }
            else {
                return items.canWestDeathMountain(true);
            }
        }));
        if (config.hintsEnabled) {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Spectacle Rock Hint', 23.3, 14.8, function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain();
                }
                else {
                    return items.canWestDeathMountain();
                }
            }, function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain();
                }
                else {
                    return items.canWestDeathMountain();
                }
            }, ['=13'], '', function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain(true);
                }
                else {
                    return items.canWestDeathMountain(true);
                }
            }, function (items, config) {
                if (config.mode === 'inverted') {
                    return items.canInvertedEastDarkDeathMountain(true);
                }
                else {
                    return items.canWestDeathMountain(true);
                }
            }));
        }
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Ether Tablet', 21, 3, function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedEastDeathMountain() &&
                    items.moonPearl &&
                    items.book &&
                    items.hammer &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }
            else {
                return (items.book &&
                    items.canWestDeathMountain() &&
                    (items.mirror || (items.hammer && items.hookshot)) &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain() && items.moonPearl && items.book && items.hammer;
            }
            else {
                return (items.book && items.canWestDeathMountain() && (items.mirror || (items.hammer && items.hookshot)));
            }
        }, [items[76]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return (items.canInvertedEastDeathMountain(true) &&
                    items.moonPearl &&
                    items.book &&
                    items.hammer &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }
            else {
                return (items.book &&
                    items.canWestDeathMountain(true) &&
                    (items.mirror || (items.hammer && items.hookshot)) &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true) && items.moonPearl && items.book && items.hammer;
            }
            else {
                return (items.book && items.canWestDeathMountain(true) && (items.mirror || (items.hammer && items.hookshot)));
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Top of Spectacle Rock', 25.4, 8.5, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain() && items.moonPearl && items.hammer;
            }
            else {
                return items.canWestDeathMountain() && items.mirror;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain();
            }
            else {
                return items.canWestDeathMountain();
            }
        }, [items[77]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true) && items.moonPearl && items.hammer;
            }
            else {
                return items.canWestDeathMountain(true) && items.mirror;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDarkDeathMountain(true);
            }
            else {
                return items.canWestDeathMountain(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Paradox Cave', 41.4, 17.1, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain() && items.moonPearl;
            }
            else {
                return items.canEastDeathMountain();
            }
        }, null, [items[80], items[81], items[82], items[83], items[84], items[85], items[86]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true) && items.moonPearl;
            }
            else {
                return items.canEastDeathMountain(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Spiral Cave', 39.9, 9.3, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain() && items.moonPearl;
            }
            else {
                return items.canEastDeathMountain();
            }
        }, null, [items[78]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true);
            }
            else {
                return items.canEastDeathMountain(true);
            }
        }));
        locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Floating Island', 40.2, 3, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain();
            }
            else {
                return items.canEastDeathMountain() && items.mirror && items.moonPearl && items.glove === 2;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain();
            }
            else {
                return items.canEastDeathMountain();
            }
        }, [items[87]], '', function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true);
            }
            else {
                return items.canEastDeathMountain(true) && items.mirror && items.moonPearl && items.glove === 2;
            }
        }, function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedEastDeathMountain(true);
            }
            else {
                return items.canEastDeathMountain(true);
            }
        }));
        if (config.mode === 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Ganon's Tower Accessibility", 22, 46, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, null, ['gt-requirement']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]("Ganon's Vulnerability", 27.8, 46, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, null, ['ganon-requirement']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Ganon', 21, 40.8, function (items, config) {
                switch (config.goal) {
                    case 'pedestal':
                    case 'triforce':
                        return false;
                    case 'dungeons':
                        return items.canInvertedLW() && items.moonPearl && items.canDamageGanon(config);
                    case 'ganon':
                        return items.canInvertedLW() && items.moonPearl && items.agahnim2 && items.canDamageGanon(config);
                    case 'fast_ganon':
                        return items.canInvertedLW() && items.moonPearl && items.canDamageGanon(config);
                }
            }, null, ['Ganon'], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Blacksmiths', 15.2, 52, function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2;
                }
            }, null, [items[113]], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Purple Chest', 16.7, 90, function (items, config) {
                if (config.mode === 'inverted') {
                    return (items.glove === 2 || items.mirror) && items.canInvertedLW();
                }
                else {
                    return items.canNorthWestDarkWorld() && items.glove === 2;
                }
            }, null, [items[114]], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Other Turtle Rock Entrances', 42.5, 9.3, function (items, config) {
                return items.canInvertedEastDeathMountain();
            }, null, ['tr-ledge'], '', function (items, config) {
                return items.canInvertedEastDeathMountain(true);
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Bombos Tablet', 11, 92.2, function (items, config) {
                return (items.book &&
                    items.canInvertedLW() &&
                    (items.sword >= 2 || (items.hammer && config.weapons === 'swordless')));
            }, function (items, config) {
                return items.book && items.canInvertedLW();
            }, [items[33]], 'ow'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Checkerboard Cave', 8.75, 77.3, function (items, config) {
                return items.canInvertedLW() && items.glove && items.moonPearl;
            }, function (items, config) {
                return items.canInvertedLW() && items.glove && items.moonPearl;
            }, [items[39]], 'mire'));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('South of Grove', 13.5, 84.1, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, function (items, config) {
                return items.canInvertedLW();
            }, [items[37]], 'ow', function (items, config) {
                return items.canInvertedLW() && items.mirror;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('Graveyard Ledge', 28, 27, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, function (items, config) {
                return items.canInvertedLW() && items.moonPearl;
            }, [items[38]], 'ow'));
        }
        if (config.mode !== 'inverted') {
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 4.5, 34, function (items, config) {
                return (items.hammer && items.glove) || items.glove === 2;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('wdm', 28.6, 14.9, function (items, config) {
                return items.canWestDeathMountain();
            }, null, ['warp'], '', function (items, config) {
                return items.canWestDeathMountain(true);
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('dm', 38.1, 22.9, function (items, config) {
                return items.canEastDeathMountain() && items.glove === 2;
            }, null, ['warp'], '', function (items, config) {
                return items.canEastDeathMountain(true) && items.glove === 2;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 23.5, 79, function (items, config) {
                return items.hammer && items.glove;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('mire', 1.7, 96, function (items, config) {
                return items.canMire(config);
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 48.2, 70, function (items, config) {
                return items.hammer && items.glove;
            }, null, ['warp']));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ip', 39.7, 87, function (items, config) {
                return items.flippers && items.glove === 2;
            }, null, ['warp'], '', function (items, config) {
                return items.glove === 2;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('dm', 47, 6, function (items, config) {
                return items.canEastDeathMountain() && items.glove === 2 && items.hammer;
            }, null, ['warp'], '', function (items, config) {
                return items.canEastDeathMountain(true) && items.glove === 2 && items.hammer;
            }));
            locations.push(new __WEBPACK_IMPORTED_MODULE_0__models_location_model__["a" /* Location */]('ow', 24.9, 59, function (items, config) {
                return items.agahnim;
            }, null, ['warp']));
        }
        return locations;
    };
    return LightWorldLocations;
}());



/***/ }),

/***/ "../../../../../src/dungeons/aga-tower.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgaTowerSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var AgaTowerSetup = (function () {
    function AgaTowerSetup() {
    }
    AgaTowerSetup.setup = function (items, config) {
        var xCoords = [49.6, 55];
        var yCoords = [39, 4.5];
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Aga Tower', 'Agahnim', function (items, config) {
            return ((config.mode !== 'inverted' &&
                (items.cape || items.sword >= 2 || (config.weapons === 'swordless' && items.hammer))) ||
                (config.mode === 'inverted' && items.canInvertedEastDarkDeathMountain(config.canGlitch)));
        }, xCoords[config.mode === 'inverted' ? 1 : 0], yCoords[config.mode === 'inverted' ? 1 : 0]);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ct-entry', 'Aga Tower Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'lw-hyrule-castle' : 'exit', '', [-1], 1));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Maze', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.lamp;
        }, 'ct-maze', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Aga Tower First Chest', 72, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[95]));
        dungeon.dungeonMaps.push(entryMap);
        var mazeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ct-maze', 'Dark Maze');
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ct-entry'));
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ct-tile'));
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Aga Tower Dark Chest', 11, 43, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[96]));
        dungeon.dungeonMaps.push(mazeMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ct-tile', 'Hint Tile Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ct-maze'));
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'ct-top'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 28, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '0'));
        }
        dungeon.dungeonMaps.push(tileMap);
        var topMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ct-top', 'Top of the Tower');
        topMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 84, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ct-maze'));
        topMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Agahnim's Fight", 50, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.sword || (config.weapons === 'swordless' && (items.hammer || items.net));
        }, 'ct-aga', config.weapons !== 'swordless' ? 'Sword Required' : 'Hammer or Bug Net Required'));
        dungeon.dungeonMaps.push(topMap);
        var agaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ct-aga', 'Agahnim Room');
        agaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Agahnim', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, 'Agahnim'));
        dungeon.dungeonMaps.push(agaMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return AgaTowerSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/dark-world.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkWorldSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var DarkWorldSetup = (function () {
    function DarkWorldSetup() {
    }
    DarkWorldSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Dark World', '', function (items, config) {
            return true;
        }, 0, 0);
        var flute4Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute4', 'Front of Bomb Shop');
        flute4Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 69, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-bomb-shop'));
        flute4Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-octorok-field'));
        flute4Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-house-portal'));
        flute4Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 16, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-grove'));
        flute4Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(flute4Map);
        var octorokFieldMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-octorok-field', 'Hammer Pegs Bridge');
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 89, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 0;
        }, 'dw-flute4'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, 'dw-hyrule-castle'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, 'dw-east-sanctuary'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 0;
        }, 'dw-small-shop', '', [-1], 1));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, 'dw-eastern-palace'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 89, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers && (items.hammer || items.currentRegionInMap === 1);
        }, 'dw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF() && (items.hammer || items.currentRegionInMap === 1);
        }));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mirror', 17, 90, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 0;
        }, '', 'No Hammer', [-1], 0));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mirror', 26, 49, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, '', 'No Hammer', [-1], 0));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 40, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers && (items.hammer || items.currentRegionInMap === 1);
        }, 'dw-hobo-entrance', 'Flippers Required', [-1], 1, function (items, config) {
            return items.canAncillaFF() && (items.hammer || items.currentRegionInMap === 1);
        }));
        dungeon.dungeonMaps.push(octorokFieldMap);
        var hoboEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hobo-entrance', 'Hobo Portal');
        hoboEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        hoboEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 40, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-octorok-field', '', [-1], 1));
        hoboEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 82, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-lake-hylea'));
        dungeon.dungeonMaps.push(hoboEntranceMap);
        var southHousePortalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-south-house-portal', 'South of Bomb Shop');
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 36, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-hype-cave'));
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-flute4'));
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-minimoldorm-entrance'));
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 35, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-flute7'));
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove && items.moonPearl;
        }, 'dw-south-grove', 'Power Glove Required'));
        southHousePortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(southHousePortalMap);
        var southGroveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-south-grove', 'South of Grove');
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-flute4'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dw-south-house-portal', 'Power Glove Required'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dw-flute7', 'Power Glove Required'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 31, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-grove'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-race-game'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 1, null, [1]));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 23, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(southGroveMap);
        var hyruleCastleMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hyrule-castle', 'Pyramid');
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 65, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-octorok-field', '', [-1], 1));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 49, 12, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.agahnim2 || config.goal === 'fast_ganon';
        }, 'dw-ganon'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Ganon's Vulnerability", 36.75, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SIGNPOST, function (items, config) {
            return items.moonPearl;
        }, 'ganon-requirement'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 37, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hasBigBomb;
        }, 'dw-fat-fairy'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pyramid Item', 81, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[105]));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 59, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 1, null, [1]));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(hyruleCastleMap);
        var eastSanctuaryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-east-sanctuary', 'Broken Bridge');
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 51, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap === 0 || items.flippers;
        }, 'dw-octorok-field', '', [-1], 1, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 30, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return (items.currentRegionInMap === 1 || (items.hookshot && (items.flippers || items.glove || items.hammer)));
        }, 'dw-graveyard', '', [-1], 1, function (items, config) {
            return items.hookshot && items.canAncillaFF();
        }));
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 70, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return ((items.currentRegionInMap === 0 && (items.flippers || items.glove || items.hammer)) || items.flippers);
        }, 'dw-flute2', '', [-1], 0, function (items, config) {
            return (items.currentRegionInMap === 0 && items.canAncillaFF()) || items.currentRegionInMap === 1;
        }));
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 52, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'dw-flute8', 'Flippers Required', [-1], 0, function (items, config) {
            return ((items.currentRegionInMap === 0 &&
                (items.flippers || items.glove || items.hammer || items.canAncillaFF())) ||
                items.currentRegionInMap === 1);
        }));
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mirror Right Side', 65, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.currentRegionInMap === 0 || items.flippers;
        }, '', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        eastSanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mirror Left Side', 39, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return (items.currentRegionInMap === 1 || (items.hookshot && (items.flippers || items.glove || items.hammer)));
        }, '', '', [-1], 1, function (items, config) {
            return items.hookshot && items.canAncillaFF();
        }));
        dungeon.dungeonMaps.push(eastSanctuaryMap);
        var smallShopMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-small-shop', 'Northwest of Ice Lake');
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap === 1;
        }, 'dw-octorok-field'));
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 91, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.currentRegionInMap === 0 || items.canAncillaFF();
        }));
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mirror Top Side', 29, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.currentRegionInMap === 1;
        }, '', '', [-1], 0));
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Island Mirror Portal', 78, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.flippers || items.currentRegionInMap === 0;
        }, '', 'Flippers Required to Mirror Back', [-1], 3, function (items, config) {
            return items.canAncillaFF();
        }, [3], 0));
        dungeon.dungeonMaps.push(smallShopMap);
        var easternPalaceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-eastern-palace', 'Palace of Darkness Courtyard');
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-octorok-field', '', [-1], 1));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-flute5'));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 83.5, 8, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'pod-entry'));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 59, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(easternPalaceMap);
        var lakeHyleaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-lake-hylea', 'Ice Lake');
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-octorok-field', '', [0], 1, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-small-shop', '', [0], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-flute8', '', [0], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'ip-entry', '', [1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 61, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [1], 0, null, [-1], 1));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 44, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.flippers;
        }, '', '', [0], -1, function (items, config) {
            return items.canAncillaFF();
        }));
        dungeon.dungeonMaps.push(lakeHyleaMap);
        var minimoldormEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-minimoldorm-entrance', 'Southwest Ice Lake Shore');
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 22, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-house-portal'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-flute7'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(minimoldormEntranceMap);
        var flute7Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute7', 'Swamp Palace Entrance');
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-entry'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 81, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-house-portal'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-minimoldorm-entrance'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 65, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 24, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 1, null, [1]));
        dungeon.dungeonMaps.push(flute7Map);
        var groveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-grove', 'Haunted Grove');
        groveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 46, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-grove'));
        groveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Ol' Stumpy", 47, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[119]));
        groveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(groveMap);
        var raceGameMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-race-game', 'Digging Game');
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-south-grove'));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove === 2 || items.currentRegionInMap === 1;
        }, 'dw-kakariko'));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 60, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].FROG, function (items, config) {
            return items.glove === 2;
        }, ''));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Digging Game Prize', 28, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[121]));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 33, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.glove === 2 || items.currentRegionInMap === 1;
        }, '', 'Mitts Required'));
        dungeon.dungeonMaps.push(raceGameMap);
        var sanctuaryEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-sanctuary-entrance', 'Front of Sanctuary');
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-graveyard', '', [-1], 1));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-lumberjack'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 64, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-fortune-teller'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(sanctuaryEntranceMap);
        var graveyardMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-graveyard', 'Ghostly Garden');
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-sanctuary-entrance'));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-east-sanctuary', '', [-1], 1));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 47, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 0, null, [-1], 1));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 60, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 3, null, [3], 1));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 85, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.currentRegionInMap === 1 || items.currentRegionInMap === 2 || items.glove === 2;
        }, '', '', [-1], 2, null, [2], 1));
        dungeon.dungeonMaps.push(graveyardMap);
        var flute2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute2', 'Potion Shop');
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 75, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-east-sanctuary', '', [-1], 0));
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dw-zora-entrance', 'Power Glove Required'));
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 41, 81, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(flute2Map);
        var flute5Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute5', 'Palace of Darkness Portal');
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-eastern-palace'));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(flute5Map);
        var zoraEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-zora-entrance', 'Lake of Ill Omen');
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dw-flute2', 'Power Glove Required'));
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Catfish', 15, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[104]));
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 47, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(zoraEntranceMap);
        var flute8Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute8', 'East of Ice Lake');
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 34, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'dw-lake-hylea', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 57, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'dw-east-sanctuary', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 80, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.flippers;
        }, '', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 60, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dw-hint-cave'));
        dungeon.dungeonMaps.push(flute8Map);
        var desertMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-desert', 'Misery Mire Area');
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 15.5, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-mire-shed', '', [-1], 0, function (items, config) {
            return items.mirror;
        }));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 30, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return (items.moonPearl &&
                items[config.mmMedallion] &&
                (items.sword || config.weapons === 'swordless') &&
                (items.boots || items.hookshot));
        }, 'mm-entry'));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 2, null, [2]));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 61, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 1, null, [1]));
        dungeon.dungeonMaps.push(desertMap);
        var kakarikoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-kakariko', 'Village of Outcasts');
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-kak-portal'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-fortune-teller'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 81, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove === 2;
        }, 'dw-blacksmiths-entrance', 'Titan Mitts Required', [-1], 1));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-race-game', '', [-1], 1));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 44, 84, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-bombable-hut'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 83, 43, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-chouse'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 20.5, 37, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-chest-game'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 44.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'tt-entry'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(kakarikoMap);
        var lumberjackMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-lumberjack', 'Bumper Cave Entrance');
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bumper Cave Item', 63, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.cape && items.glove;
        }, items[112]));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 52, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-sanctuary-entrance'));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 39, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(lumberjackMap);
        var fortuneTellerMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-fortune-teller', 'Fortune Teller');
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-kakariko'));
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-sanctuary-entrance'));
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-lostwoods'));
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 74, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(fortuneTellerMap);
        var blacksmithsEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-blacksmiths-entrance', 'Hammer Pegs');
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-kakariko'));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 53, 84, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'dw-hammer-pegs'));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 41, 17, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PURPLE_CHEST, function (items, config) {
            return items.blacksmithsRescued;
        }, ''));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'Mirror', '', [-1], 0, null, [-1], 1));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return items.currentRegionInMap === 1 || items.hammer;
        }, 'Magic Bat Mirror', 'Hammer Required', [-1], 1, null, [-1], 1));
        dungeon.dungeonMaps.push(blacksmithsEntranceMap);
        var kakPortalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-kak-portal', 'Kakariko Dark World Portal');
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 65, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl && items.glove === 2;
        }, 'dw-kakariko'));
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-kakariko'));
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-lostwoods'));
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 2, null, [2]));
        dungeon.dungeonMaps.push(kakPortalMap);
        var lostwoodsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-lostwoods', 'Skeleton Forest');
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-left-drop', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-right-drop', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-northeast-bc', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 73.5, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-bc', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 58, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-part21', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-kak-portal', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-fortune-teller', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 23, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'sw-part22', '', [1]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 16, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.fireRod;
        }, 'sw-final', '', [1]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 62, 81, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [0]));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 36, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [1], 0, null, [-1], 1));
        dungeon.dungeonMaps.push(lostwoodsMap);
        var bombableHutMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-bombable-hut', 'Bombable Hut', true);
        bombableHutMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-kakariko'));
        bombableHutMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bombable Hut Chest', 46, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[108]));
        dungeon.dungeonMaps.push(bombableHutMap);
        var chouseMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-chouse', 'C-Shaped House', true);
        chouseMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-kakariko'));
        chouseMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('C-House Chest', 59.5, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[109]));
        dungeon.dungeonMaps.push(chouseMap);
        var chestGameMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-chest-game', 'Chest Game', true);
        chestGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-kakariko'));
        chestGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Chest Game Prize', 37, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[110]));
        dungeon.dungeonMaps.push(chestGameMap);
        var hammerPegsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hammer-pegs', 'Hammer Pegs Cave', true);
        hammerPegsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-blacksmiths-entrance', '', [-1], 1));
        hammerPegsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hammer Pegs Item', 50, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[111]));
        dungeon.dungeonMaps.push(hammerPegsMap);
        var fatFairyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-fat-fairy', 'Pyramid Fairy', true);
        fatFairyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-hyrule-castle'));
        fatFairyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pyramid Fairy Chest 1', 44, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[106]));
        fatFairyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pyramid Fairy Chest 2', 56, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[107]));
        dungeon.dungeonMaps.push(fatFairyMap);
        var hypeCaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hype-cave', 'Hype Cave', true);
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-south-house-portal'));
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hype Cave Chest 1', 52, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[115]));
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hype Cave Chest 2', 51, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[116]));
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hype Cave Chest 3', 48, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[117]));
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hype Cave Chest 4', 51, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[118]));
        hypeCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hype Cave Chest 5', 48, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[120]));
        dungeon.dungeonMaps.push(hypeCaveMap);
        var mireShedMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-mire-shed', 'Mire Shed', true);
        mireShedMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-desert'));
        mireShedMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mire Shed Chest 1', 46, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[122]));
        mireShedMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mire Shed Chest 2', 53, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[123]));
        dungeon.dungeonMaps.push(mireShedMap);
        var ganonMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-ganon', 'Ganon', true);
        ganonMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Triforce Room', 50, 12, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return (items.canDamageGanon(config) &&
                (items.sword >= 2 ||
                    (config.weapons === 'swordless' && items.hammer && items.hasSilvers() && items.hasBow())) &&
                items.hasFiresource());
        }, 'Ganon', config.goal === 'pedestal' || config.goal === 'triforce'
            ? 'Ganon is unbeatable in this goal'
            : config.goal === 'dungeons'
                ? 'Fire, MS and All Dungeons Required'
                : config.weapons !== 'swordless'
                    ? 'Fire and Master Sword Required'
                    : 'Hammer and Silvers Required'));
        ganonMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 49, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'dw-hyrule-castle'));
        dungeon.dungeonMaps.push(ganonMap);
        var bombShopMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-bomb-shop', 'Bomb Shop', true);
        bombShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-flute4'));
        bombShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 37, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_BOMB, function (items, config) {
            return items.crystal5 && items.crystal6;
        }, '', 'Crystals 5 and 6 required'));
        dungeon.dungeonMaps.push(bombShopMap);
        var flute1Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-flute1', 'Death Mountain Entrance');
        flute1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-spectacle-rock'));
        flute1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(flute1Map);
        var spectacleRockMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-spectacle-rock', 'Spectacle Rock');
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 11, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-flute1'));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 79, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-spikecave'));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 67, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 37, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [-1], 1, null, [1]));
        dungeon.dungeonMaps.push(spectacleRockMap);
        var heraMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hera', 'Ganons Tower Entrance');
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.canEnterGT(config);
        }, 'gt-entry'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Ganon's Tower Accessibility", 67.5, 44.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SIGNPOST, function (items, config) {
            return items.moonPearl;
        }, 'gt-requirement'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 37, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-trportal', '', [-1], 1));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-spectacle-rock'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 60, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(heraMap);
        var trportalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-trportal', 'Turtle Rock Entrance');
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-hera'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-east'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-superbunny'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl && items.glove;
        }, 'dw-hookshotcave'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76.5, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl && items.isTROpened;
        }, 'tr-entry'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 46, 37, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, '', '', [2], 1, null, [1], 2));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 31, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-hookshotcave', '', [2]));
        dungeon.dungeonMaps.push(trportalMap);
        var eastMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-east', 'Dark World East Death Mountain');
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 83, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.moonPearl;
        }, 'dw-superbunny', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        dungeon.dungeonMaps.push(eastMap);
        var spikecaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-spikecave', 'Spike Cave', true);
        spikecaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 92, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-spectacle-rock'));
        spikecaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spike Cave Chest', 21, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return (items.moonPearl &&
                items.glove &&
                items.hammer &&
                (items.byrna || (items.cape && items.hasMagicExtension(config))));
        }, items[103], '', [-1], 0, function (items, config) {
            return items.moonPearl && items.glove && items.hammer;
        }));
        dungeon.dungeonMaps.push(spikecaveMap);
        var superbunnyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-superbunny', 'Superbunny Cave', true);
        superbunnyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-trportal'));
        superbunnyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Superbunny Chest 1', 91, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[97]));
        superbunnyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Superbunny Chest 2', 91, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[98]));
        dungeon.dungeonMaps.push(superbunnyMap);
        var hookshotcaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hookshotcave', 'Hookshot Cave', true);
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 74, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-trportal'));
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dw-trportal', '', [-1], 2));
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hookshot Cave Bottom Chest', 42, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return (items.boots && config.advancedItems) || items.hookshot;
        }, items[102], '', [-1], 0, function (items, config) {
            return items.boots || items.hookshot;
        }));
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hookshot Cave Top Chest 1', 54, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hookshot;
        }, items[100], '', [-1], 0, function (items, config) {
            return items.boots;
        }));
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hookshot Cave Top Chest 2', 32, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hookshot;
        }, items[101], '', [-1], 0, function (items, config) {
            return items.boots;
        }));
        hookshotcaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hookshot Cave Top Chest 3', 35, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hookshot;
        }, items[99], '', [-1], 0, function (items, config) {
            return items.boots;
        }));
        dungeon.dungeonMaps.push(hookshotcaveMap);
        var trLedgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-tr-ledge', 'Turtle Rock Outside Corridor');
        trLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 37, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-double-pokey'));
        trLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-bc'));
        trLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 74, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].MIRROR, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(trLedgeMap);
        var hintCaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dw-hint-cave', 'South East Dark World');
        hintCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dw-flute8'));
        if (config.hintsEnabled) {
            hintCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '14'));
        }
        dungeon.dungeonMaps.push(hintCaveMap);
        dungeon.startingMap = hintCaveMap;
        return dungeon;
    };
    return DarkWorldSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/desert-palace.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesertPalaceSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var DesertPalaceSetup = (function () {
    function DesertPalaceSetup() {
    }
    DesertPalaceSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Desert Palace', items[73], function (items, config) {
            if (config.mode === 'inverted') {
                return items.book && items.canInvertedLW() && (items.moonPearl || config.canGlitch);
            }
            else {
                return items.book || (items.canMire(config) && items.mirror);
            }
        }, 7.6, 78.4);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-entry', 'Desert Palace Big Hall');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 83, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'lw-desert' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-bc'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 12.5, 16.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-torch'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 37.5, 16.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-map'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 62.5, 16.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-map'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 50.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'dp-right'));
        if (config.isFullMap) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Desert Ledge', 7, 76, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'lw-desert', '', [-1], 2));
        }
        else {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Desert Final Section', 7, 76, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return items.glove && (config.mode !== 'inverted' || items.moonPearl);
            }, 'dp-first-tile', 'Power Gloves Required'));
        }
        dungeon.dungeonMaps.push(entryMap);
        var torchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-torch', 'Torch Room');
        torchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-entry'));
        torchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Torch Item', 28.3, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.boots;
        }, items[69], 'Boots Required'));
        if (config.hintsEnabled) {
            torchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '2'));
        }
        dungeon.dungeonMaps.push(torchMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-map', 'Map Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-entry'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-entry'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[68]));
        dungeon.dungeonMaps.push(mapMap);
        var rightMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-right', 'Right Side');
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 39, 85, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-entry'));
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 50, 79, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[71]));
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 50, 12, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[70]));
        dungeon.dungeonMaps.push(rightMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-entry'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 49, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[67]));
        dungeon.dungeonMaps.push(bigChestMap);
        var firstTileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-first-tile', 'Tile Room');
        firstTileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'lw-desert' : 'dp-entry', '', [-1], 2));
        firstTileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'dp-big-door'));
        firstTileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 21.5, 79, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(firstTileMap);
        var bigDoorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-big-door', 'Big Door');
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 69, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'dp-first-tile'));
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lanmolas Room', 26, 35, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return items.hasFiresource();
        }, 'dp-lanmo', 'Fire Source and Weapon Required', [-1], 0, function (items, config) {
            return items.hasFiresource();
        }));
        dungeon.dungeonMaps.push(bigDoorMap);
        var lanmoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('dp-lanmo', 'Lanmolas Room');
        lanmoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lanmolas', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return (items.hasFiresource() &&
                (items.sword ||
                    items.hammer ||
                    items.hasBow() ||
                    items.fireRod ||
                    items.iceRod ||
                    items.byrna ||
                    items.somaria));
        }, items[72]));
        dungeon.dungeonMaps.push(lanmoMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return DesertPalaceSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/eastern-palace.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasternPalaceSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var EasternPalaceSetup = (function () {
    function EasternPalaceSetup() {
    }
    EasternPalaceSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Eastern Palace', items[66], function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && (items.moonPearl || config.canGlitch));
        }, 93.6, 38.8);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-entry', 'Eastern Palace Big Ball Room');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'lw-eastern-palace' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Cannonball Chest', 79.6, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[62]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-fork'));
        dungeon.dungeonMaps.push(entryMap);
        var forkMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-fork', 'First Fork');
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-entry'));
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-map'));
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-compass'));
        dungeon.dungeonMaps.push(forkMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-map', 'Map Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-fork'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Room Chest', 86, 73.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[64]));
        dungeon.dungeonMaps.push(mapMap);
        var compassMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-compass', 'Compass Room');
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-fork'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Room Chest', 44.5, 31.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[60]));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 79, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-tile'));
        dungeon.dungeonMaps.push(compassMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-tile', 'Hint Tile Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 21, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-compass'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '1'));
        }
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 79, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-bc'));
        dungeon.dungeonMaps.push(tileMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 9, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-tile'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[61]));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            if (config.isEnemizer) {
                return items.lamp || (config.advancedItems && items.fireRod);
            }
            else {
                return items.hasBow() && (items.lamp || (config.advancedItems && items.fireRod));
            }
        }, 'ep-armos', (config.isEnemizer && config.mode !== 'standard'
            ? 'Lamp'
            : 'Bow' + (config.canGlitch ? '' : ' and Lamp')) + ' Required', [-1], 0, function (items, config) {
            return !!config.isEnemizer || items.hasBow();
        }));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 91, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp;
        }, 'ep-bk', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(bigChestMap);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ep-tile'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 51.5, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[63]));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp;
        }, 'ep-bc', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(bigKeyMap);
        var armosMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ep-armos', 'Armos Room');
        armosMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Armos Knights', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[65]));
        dungeon.dungeonMaps.push(armosMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return EasternPalaceSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/ganons-tower.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanonsTowerSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var GanonsTowerSetup = (function () {
    function GanonsTowerSetup() {
    }
    GanonsTowerSetup.setup = function (items, config) {
        var xCoords = [49.6, 55];
        var yCoords = [39, 4.5];
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Ganons Tower', 'Agahnim 2', function (items, config) {
            return (((config.mode !== 'inverted' && items.canDarkEastDeathMountain(config.canGlitch)) ||
                (config.mode === 'inverted' && items.canInvertedLW())) &&
                items.canEnterGT(config));
        }, xCoords[config.mode === 'inverted' ? 0 : 1], yCoords[config.mode === 'inverted' ? 0 : 1]);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-entry', 'Ganons Tower Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-hera' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-first-left'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return (config.isEnemizer && config.mode !== 'standard') || items.hasBow();
        }, 'gt-lanmo2', 'Bow Required', [-1], 0, function (items, config) {
            return true;
        }));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-first-right'));
        dungeon.dungeonMaps.push(entryMap);
        var firstRightMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-first-right', 'Hope Room');
        firstRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-entry'));
        firstRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-first-left'));
        firstRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Tile Room', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.somaria;
        }, 'gt-tile-room', 'Cane of Somaria Required'));
        firstRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hope Room Left Chest', 22, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[211]));
        firstRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hope Room Right Chest', 78, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[212]));
        dungeon.dungeonMaps.push(firstRightMap);
        var tileRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-tile-room', 'Tile Room');
        tileRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-first-right'));
        if (config.canGlitch) {
            tileRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
                return items.fireRod || items.lamp;
            }, 'gt-right-side', 'Fire Source Required'));
        }
        else {
            tileRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
                return items.fireRod;
            }, 'gt-right-side', 'Fire Rod Required'));
        }
        tileRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Tile Room Chest', 53, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[214]));
        dungeon.dungeonMaps.push(tileRoomMap);
        var rightSideMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-right-side', 'Compass Room');
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-tile-room'));
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-sk-corridor'));
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Room Chest 1', 41, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[215]));
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Room Chest 2', 59.5, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[216]));
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Room Chest 3', 41, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[217]));
        rightSideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Room Chest 4', 59.5, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[218]));
        dungeon.dungeonMaps.push(rightSideMap);
        var skCorridorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-sk-corridor', 'Key Pot Corridor');
        skCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-invisible-maze'));
        skCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Small Key', 50, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(skCorridorMap);
        var invisibleMazeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-invisible-maze', 'Invisible Maze');
        invisibleMazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-bc'));
        invisibleMazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-bobs-room'));
        dungeon.dungeonMaps.push(invisibleMazeMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-invisible-maze'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-first-left'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[210]));
        dungeon.dungeonMaps.push(bigChestMap);
        var bobsRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-bobs-room', "Bob's Room");
        bobsRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-invisible-maze'));
        bobsRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'gt-armos'));
        bobsRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Bob's Chest", 78, 72.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[213]));
        dungeon.dungeonMaps.push(bobsRoomMap);
        var armosMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-armos', 'Ice Armos Room');
        armosMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Ice Armos', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[0], 'Ice Armos', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[0]));
        armosMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.iceArmosDefeated;
        }, 'gt-bc', 'Boss Defeated Required'));
        armosMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.iceArmosDefeated;
        }, 'gt-bk', 'Boss Defeated Required'));
        dungeon.dungeonMaps.push(armosMap);
        var lanmo2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-lanmo2', 'Lanmolas 2 Room');
        lanmo2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lanmolas 2', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[1], 'Lanmolas 2', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[1]));
        lanmo2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'gt-entry'));
        lanmo2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lanmo2Defeated;
        }, 'gt-upstairs', 'Boss Defeated Required'));
        dungeon.dungeonMaps.push(lanmo2Map);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-armos'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest 1', 50, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[219]));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest 2', 41, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[220]));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest 3', 60, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[221]));
        dungeon.dungeonMaps.push(bigKeyMap);
        var _ = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-first-left', "Bob's Torch Room");
        _.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-entry'));
        _.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-hammer-pegs'));
        _.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-first-right'));
        _.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Bob's Torch Item", 59.5, 47.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.boots;
        }, items[199], 'Boots Required'));
        dungeon.dungeonMaps.push(_);
        var hammerPegsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-hammer-pegs', 'Hammer Pegs Room');
        hammerPegsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-first-left'));
        hammerPegsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'gt-hookshot-room', 'Hammer Required'));
        hammerPegsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78.5, 79, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(hammerPegsMap);
        var hookshotRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-hookshot-room', 'Hookshot Room');
        hookshotRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-hammer-pegs'));
        hookshotRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'gt-stalfo', 'Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        hookshotRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.hookshot || items.boots;
        }, 'gt-double-firebar', 'Hookshot or Boots Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        hookshotRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'gt-double-switch', 'Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(hookshotRoomMap);
        var stalfoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-stalfo', 'Stalfos Room');
        stalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-hookshot-room'));
        stalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Stalfos Room Chest 1', 22, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[200]));
        stalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Stalfos Room Chest 2', 78.5, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[201]));
        stalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Stalfos Room Chest 3', 22, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[202]));
        stalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Stalfos Room Chest 4', 78.5, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[203]));
        dungeon.dungeonMaps.push(stalfoMap);
        var doubleFirebarMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-double-firebar', 'Double Firebar Room');
        doubleFirebarMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-hookshot-room'));
        doubleFirebarMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 53, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[209]));
        dungeon.dungeonMaps.push(doubleFirebarMap);
        var doubleSwitchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-double-switch', 'Double Switch Room');
        doubleSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-hookshot-room'));
        doubleSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-firesnake'));
        doubleSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 78.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(doubleSwitchMap);
        var firesnakeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-firesnake', 'Firesnake Room');
        firesnakeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 69, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.hookshot;
        }, 'gt-teleports', 'Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        firesnakeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Firesnake Chest', 23.5, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hookshot;
        }, items[208], 'Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(firesnakeMap);
        var teleportsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-teleports', 'Teleport Room');
        teleportsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-firesnake'));
        teleportsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-rando-room'));
        teleportsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 21.5, 78.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-invisible-maze'));
        dungeon.dungeonMaps.push(teleportsMap);
        var randoRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-rando-room', 'Randomizer Room');
        randoRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'gt-teleports'));
        randoRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Rando Room Chest 1', 45, 26.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[204]));
        randoRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Rando Room Chest 2', 54.6, 26.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[205]));
        randoRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Rando Room Chest 3', 45, 36.3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[206]));
        randoRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Rando Room Chest 4', 54.6, 36.3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[207]));
        dungeon.dungeonMaps.push(randoRoomMap);
        var upstairsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-upstairs', 'Mini Helmasaur Room');
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-refill'));
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Helma Chest 1', 22, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[222]));
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Helma Chest 2', 78.5, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[223]));
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(upstairsMap);
        var refillMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-refill', 'Pre-Moldorm Room');
        refillMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-upstairs'));
        refillMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pre-Moldorm Chest', 47, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[224]));
        refillMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'gt-moldorm'));
        dungeon.dungeonMaps.push(refillMap);
        var moldormMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-moldorm', 'Moldorm Room');
        moldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Moldorm 2', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[2], 'Moldorm 2', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[2]));
        moldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Moldorm Chest', 56.5, 73.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hookshot && items.moldorms2Defeated;
        }, items[225], 'Hookshot and Boss Defeated Required', [-1], 0, function (items, config) {
            return items.moldorms2Defeated && items.boots;
        }));
        moldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return items.hookshot && items.moldorms2Defeated;
        }, 'gt-aga2', 'Hookshot Required', [-1], 0, function (items, config) {
            return items.boots || (items.sword && !config.isEnemizer);
        }));
        dungeon.dungeonMaps.push(moldormMap);
        var aga2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('gt-aga2', 'Agahnim 2 Room');
        aga2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Agahnim 2', 50, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return items.sword || items.hammer || items.net;
        }, 'Agahnim 2'));
        dungeon.dungeonMaps.push(aga2Map);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return GanonsTowerSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/hyrule-castle.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HyruleCastleSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var HyruleCastleSetup = (function () {
    function HyruleCastleSetup() {
    }
    HyruleCastleSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Hyrule Castle', '', function (items, config) {
            return config.mode !== 'inverted' || (items.canInvertedLW() && (config.canGlitch || items.moonPearl));
        }, 0, 0);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-entry', 'Hyrule Castle Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'lw-hyrule-castle', '', [-1], 2));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 11, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-left'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return ((items.lamp && config.mode.indexOf('standard') === -1) ||
                (items.fireRod && config.mode.indexOf('standard') === -1 && config.advancedItems) ||
                (config.mode.indexOf('standard') > -1 && items.gameState >= 2));
        }, 'hc-darkchest', config.isFullMap && config.mode.indexOf('standard') > -1
            ? 'Zelda must be accompanying you'
            : 'Lamp Required', [-1], 0, function (items, config) {
            return config.mode.indexOf('standard') === -1;
        }));
        dungeon.dungeonMaps.push(entryMap);
        var leftMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-left', 'Left Corridor');
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-entry'));
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-map'));
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4;
        }, 'lw-hyrule-castle', 'Zelda must be rescued first', [-1], 1));
        dungeon.dungeonMaps.push(leftMap);
        var sanctuaryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-sanctuary', 'Sanctuary', true);
        sanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 89, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'lw-sanctuary-entrance'));
        sanctuaryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Sanctuary Chest', 45, 17, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[52]));
        dungeon.dungeonMaps.push(sanctuaryMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-map', 'Keyguard Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-left'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-boomerang'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 55, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 48, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[58]));
        dungeon.dungeonMaps.push(mapMap);
        var boomerangMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-boomerang', 'Boomerang Room');
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 64.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-map'));
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-zelda'));
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Boomerang Chest', 75, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[57]));
        dungeon.dungeonMaps.push(boomerangMap);
        var boomerangMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-zelda', "Zelda's Cell");
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 17, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-boomerang'));
        boomerangMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Zelda's Chest", 65, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[59]));
        dungeon.dungeonMaps.push(boomerangMap);
        var darkchestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-darkchest', 'Dark Sewers Room');
        darkchestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-entry'));
        darkchestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-keyrat'));
        darkchestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Sewers Chest', 76, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[56]));
        dungeon.dungeonMaps.push(darkchestMap);
        var keyratMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-keyrat', 'Key Rat');
        keyratMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 49, 69, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-darkchest'));
        keyratMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'hc-bombablewall'));
        keyratMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Boomerang Chest', 17, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, items[56]));
        dungeon.dungeonMaps.push(keyratMap);
        var bombablewallMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('hc-bombablewall', 'Sewers Bombable Wall');
        bombablewallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return ((items.lamp && config.mode.indexOf('standard') === -1) ||
                (items.fireRod && config.mode.indexOf('standard') === -1 && config.advancedItems) ||
                config.mode.indexOf('standard') > -1);
        }, 'hc-keyrat', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        bombablewallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'hc-sanctuary'));
        bombablewallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bombable Wall Chest 1', 14, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[53]));
        bombablewallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bombable Wall Chest 2', 20, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[54]));
        bombablewallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bombable Wall Chest 3', 26, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[55]));
        dungeon.dungeonMaps.push(bombablewallMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return HyruleCastleSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/ice-palace.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcePalaceSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var IcePalaceSetup = (function () {
    function IcePalaceSetup() {
    }
    IcePalaceSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Ice Palace', items[176], function (items, config) {
            if (config.mode === 'inverted') {
                return (items.flippers ||
                    (config.canGlitch &&
                        ((items.flute && items.canInvertedLW()) ||
                            (items.canInvertedNEDW(true) && (items.hammer || items.glove)) ||
                            (items.canInvertedLW() && items.mirror && items.moonPearl) ||
                            items.boots)));
            }
            else {
                return ((items.flippers || config.canGlitch) && (items.moonPearl || config.canGlitch) && items.glove === 2);
            }
        }, 79.6, 85.8);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-entry', 'Ice Palace Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-lake-hylea' : 'exit', '', [-1], 1));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hasMeltyPower(config) && (items.moonPearl || config.mode === 'inverted');
        }, 'ip-first-fork', 'Fire Rod or Bombos Required', [-1], 0, function (items, config) {
            return items.hasMeltyPower(config);
        }));
        if (config.hintsEnabled) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '8'));
        }
        dungeon.dungeonMaps.push(entryMap);
        var firstForkMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-first-fork', 'Push Block Cross');
        firstForkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-entry'));
        firstForkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-compass'));
        firstForkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-tile'));
        dungeon.dungeonMaps.push(firstForkMap);
        var compassMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-compass', 'Compass Room');
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-first-fork'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 47, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[169]));
        dungeon.dungeonMaps.push(compassMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-tile', 'Giant Stalfo Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-conveyor-room'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '9'));
        }
        dungeon.dungeonMaps.push(tileMap);
        var conveyorRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-conveyor-room', 'Conveyor Room');
        conveyorRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 55, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        conveyorRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 20, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SWITCH, function (items, config) {
            return true;
        }, 'switch'));
        conveyorRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 69, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-bj'));
        dungeon.dungeonMaps.push(conveyorRoomMap);
        var bjMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-bj', 'Bomb Jump Room');
        bjMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-conveyor-room'));
        bjMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return !items.crystalSwitch;
        }, 'ip-plus', 'Switch on Red Required', [-1], 0, function (items, config) {
            return true;
        }));
        dungeon.dungeonMaps.push(bjMap);
        var plusMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-plus', 'Plus Shaped Room');
        plusMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-bj'));
        plusMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-spike-room'));
        plusMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-tall-room'));
        plusMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-double-freezor'));
        dungeon.dungeonMaps.push(plusMap);
        var doubleFreezorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-double-freezor', 'Freezor Room');
        doubleFreezorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-plus'));
        doubleFreezorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Freezor Chest', 46.5, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[172]));
        doubleFreezorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 27, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'ip-bc'));
        if (config.canGlitch) {
            doubleFreezorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'ip-tall-room'));
        }
        dungeon.dungeonMaps.push(doubleFreezorMap);
        var tallRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-tall-room', 'Tall Icy Room');
        if (config.canGlitch) {
            tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'ip-double-freezor'));
        }
        else {
            tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'ip-bc'));
        }
        tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'ip-spike-room', 'Hookshot Required', [-1], 0, function (items, config) {
            return true;
        }));
        tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-double-jelly'));
        if (config.hintsEnabled) {
            tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '10'));
        }
        dungeon.dungeonMaps.push(tallRoomMap);
        var spikeRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-spike-room', 'Spike Room');
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-plus'));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spike Room Chest', 28.5, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[171]));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-map'));
        dungeon.dungeonMaps.push(spikeRoomMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-map', 'Map Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-spike-room'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 72, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hammer && items.glove;
        }, items[170], 'Hammer and Glove Required'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Small Key', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return items.hammer && items.glove;
        }, '', 'Hammer and Glove Required'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Room', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer && items.glove;
        }, 'ip-bk', 'Hammer and Glove Required'));
        dungeon.dungeonMaps.push(mapMap);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 40.5, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-map'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-first-fork'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 44, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[168]));
        dungeon.dungeonMaps.push(bigKeyMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-push-block'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 25, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[174]));
        dungeon.dungeonMaps.push(bigChestMap);
        var doubleJellyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-double-jelly', 'Iced T Room');
        doubleJellyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 31, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-tall-room'));
        doubleJellyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Iced T Chest', 28, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[173]));
        doubleJellyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-icy-pot'));
        dungeon.dungeonMaps.push(doubleJellyMap);
        var icyPotMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-icy-pot', 'Skull Pot Firebar Room');
        icyPotMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-push-block-right'));
        icyPotMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        icyPotMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-double-jelly'));
        dungeon.dungeonMaps.push(icyPotMap);
        var pushBlockMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-push-block', 'Push Block Room');
        pushBlockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'ip-bc', 'Hookshot Required'));
        pushBlockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 42, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR_PUSH_BLOCK, function (items, config) {
            return items.crystalSwitch;
        }, 'ip-switch-room', 'Switch on Blue Required'));
        pushBlockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return !items.crystalSwitch;
        }, 'ip-icy-pot', 'Switch on Red Required'));
        pushBlockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return !items.crystalSwitch;
        }, 'ip-fairy-drop', 'Switch on Red Required'));
        dungeon.dungeonMaps.push(pushBlockMap);
        var pushBlockRightMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-push-block-right', 'Push Block Room');
        pushBlockRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot && !items.crystalSwitch;
        }, 'ip-bc', 'Hookshot and Switch on Red Required'));
        pushBlockRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 59, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.crystalSwitch;
        }, 'ip-switch-room', 'Switch on Blue Required'));
        pushBlockRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-icy-pot'));
        pushBlockRightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'ip-fairy-drop'));
        dungeon.dungeonMaps.push(pushBlockRightMap);
        var fairyDropMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-fairy-drop', 'Fairy Drop Room');
        fairyDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-push-block-right'));
        fairyDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 31, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.crystalSwitch;
        }, 'ip-switch-room', 'Switch on Blue Required'));
        fairyDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-switch-room'));
        dungeon.dungeonMaps.push(fairyDropMap);
        var switchRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-switch-room', 'Button Switch Room');
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-fairy-drop'));
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-final-switch'));
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.somaria || items.ipBlockPushed;
        }, 'ip-pre-khold', 'Somaria or Block Pushed from Above Required'));
        dungeon.dungeonMaps.push(switchRoomMap);
        var finalSwitchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-final-switch', 'Crystal Switch Room');
        finalSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'ip-switch-room'));
        finalSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SWITCH, function (items, config) {
            return true;
        }, 'switch'));
        dungeon.dungeonMaps.push(finalSwitchMap);
        var preKholdMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-pre-khold', 'Room Above Boss');
        preKholdMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'ip-switch-room'));
        preKholdMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 76.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.hammer && items.glove;
        }, 'ip-khold', 'Hammer Required'));
        dungeon.dungeonMaps.push(preKholdMap);
        var kholdMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('ip-khold', 'Kholdstare Room');
        kholdMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kholdstare', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[175]));
        dungeon.dungeonMaps.push(kholdMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return IcePalaceSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/light-world.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightWorldSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var LightWorldSetup = (function () {
    function LightWorldSetup() {
    }
    LightWorldSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Light World', '', function (items, config) {
            return true;
        }, 0, 0);
        var startQuestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-sq', 'Select where to start from', true);
        startQuestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Link's House", 50, 35, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SQ_OPTION, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-linkshouse'));
        startQuestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Sanctuary', 50, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SQ_OPTION, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'hc-sanctuary'));
        startQuestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mountain Cave', 50, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SQ_OPTION, function (items, config) {
            return items.oldManRescued;
        }, 'lw-flute1'));
        dungeon.dungeonMaps.push(startQuestMap);
        var linkHouseMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-linkshouse', "Link's House", true);
        linkHouseMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 86, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute4'));
        linkHouseMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Link's House Chest", 78, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[5]));
        dungeon.dungeonMaps.push(linkHouseMap);
        var fluteMapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute-map', 'Select your Destination', true);
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute1'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute2'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 20, 43, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 53, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute4'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 59, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute5'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 81, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-desert', '', [-1], 3));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 47, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute7'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 89, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute8'));
        dungeon.dungeonMaps.push(fluteMapMap);
        var fluteMapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute4', "Front of Link's House");
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 69, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-linkshouse'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4;
        }, 'lw-octorok-field', 'Zelda must be rescued first'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4;
        }, 'lw-south-house-portal', 'Zelda must be rescued first'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 16, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4;
        }, 'lw-south-grove', 'Zelda must be rescued first'));
        fluteMapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hyrule-castle'));
        dungeon.dungeonMaps.push(fluteMapMap);
        var octorokFieldMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-octorok-field', 'Octorok Field');
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 89, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute4'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-hyrule-castle', 'Power Glove Required'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east-sanctuary'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-small-shop'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-eastern-palace'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 89, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'lw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        dungeon.dungeonMaps.push(octorokFieldMap);
        var octorokFieldMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-south-house-portal', "South of Link's House");
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 33, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.hammer && items.glove;
        }, 'dw-south-house-portal', '', [0], 1));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute4'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-minimoldorm-entrance', ''));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 35, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute7'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-south-grove', 'Power Glove Required'));
        octorokFieldMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 36, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'lw-east-sanctuary', 'Flippers Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(octorokFieldMap);
        var southGroveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-south-grove', 'South of Grove');
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute4'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-south-house-portal', 'Power Glove Required'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-flute7', 'Power Glove Required'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 31, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-grove'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-race-game'));
        southGroveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 8, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-grove-cave', '', [1]));
        dungeon.dungeonMaps.push(southGroveMap);
        var hyruleCastleMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-hyrule-castle', 'Hyrule Castle');
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 82, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4 || items.currentRegionInMap !== 2;
        }, 'lw-flute4', 'Zelda must be rescued first'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 65, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove && items.gameState === 4;
        }, 'lw-octorok-field', 'Power Glove Required'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4;
        }, 'lw-sanctuary-entrance', 'Zelda must be rescued first'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4 || items.currentRegionInMap === 2;
        }, 'hc-entry', 'Zelda must be rescued first'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.gameState === 4 || items.currentRegionInMap !== 2;
        }, 'lw-uncle', 'Zelda must be rescued first'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 70, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState === 4 || items.currentRegionInMap === 2;
        }, 'lw-uncle', 'Zelda must be rescued first'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.sword >= 2 || items.cape || (items.hammer && config.weapons === 'swordless');
        }, 'ct-entry', config.weapons !== 'swordless' ? 'Master Sword or Cape Required' : 'Hammer or Cape Required', [1]));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'hc-left', '', [1]));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.agahnim;
        }, ''));
        dungeon.dungeonMaps.push(hyruleCastleMap);
        var hyruleCastleMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-east-sanctuary', "Zora's River Bridge");
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 51, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-octorok-field'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 30, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-graveyard'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 70, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute2'));
        hyruleCastleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 52, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'lw-south-house-portal', 'Flippers Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(hyruleCastleMap);
        var smallShopMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-small-shop', 'Northwest of Lake Hylea');
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers || items.currentRegionInMap !== 3;
        }, 'lw-octorok-field', '', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 91, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers || (items.currentRegionInMap !== 3 && items.currentRegionInMap !== 0);
        }, 'lw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        smallShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lake Hylea Island', 79, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 3;
        }, items[46]));
        dungeon.dungeonMaps.push(smallShopMap);
        var easternPalaceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-eastern-palace', 'Eastern Palace Courtyard');
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-octorok-field'));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute5'));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 83.5, 8, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'ep-entry'));
        easternPalaceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 24, 31, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-saha'));
        dungeon.dungeonMaps.push(easternPalaceMap);
        var lakeHyleaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-lake-hylea', 'Lake Hylea');
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-octorok-field'));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-small-shop', '', [-1], 2));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.glove === 2;
        }, '', '', [-1], 1));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 64, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-zora-entrance'));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute8'));
        lakeHyleaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 82, 4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hobo-entrance'));
        dungeon.dungeonMaps.push(lakeHyleaMap);
        var minimoldormEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-minimoldorm-entrance', 'Minimoldorm Cave Entrance');
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 22, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-house-portal'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute7'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute8'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 61, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-minimoldorm'));
        minimoldormEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'lw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        dungeon.dungeonMaps.push(minimoldormEntranceMap);
        var flute7Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute7', 'Dam Entrance');
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-desert'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-dam'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 81, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-house-portal'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-minimoldorm-entrance'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Deliver Purple Chest', 48, 36, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasPurpleChest;
        }, items[114], 'Requires Purple Chest with you'));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Sunken Chest', 81, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[47], ''));
        flute7Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bombos Tablet', 11, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM, function (items, config) {
            return items.sword >= 2 || (items.hammer && config.weapons === 'swordless');
        }, items[33], '', [1]));
        dungeon.dungeonMaps.push(flute7Map);
        var groveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-grove', 'Haunted Grove');
        groveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 46, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-grove'));
        groveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Shovel Item', 29, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.shovel;
        }, items[49], 'Shovel Required'));
        dungeon.dungeonMaps.push(groveMap);
        var raceGameMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-race-game', 'Race Game');
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 95, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-grove'));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 62, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-library'));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 86, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        raceGameMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Race Game Prize', 11, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[44]));
        dungeon.dungeonMaps.push(raceGameMap);
        var sanctuaryEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-sanctuary-entrance', 'Front of Sanctuary');
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 63, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-graveyard'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84.5, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'hc-sanctuary'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lumberjack'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hyrule-castle'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 64, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-fortune-teller'));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 23, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'lw-flute8', 'Flippers Required', [-1], 0, function (items, config) {
            return items.canAncillaFF();
        }));
        sanctuaryEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.boots;
        }, 'lw-bonkrocks', 'Boots Required'));
        dungeon.dungeonMaps.push(sanctuaryEntranceMap);
        var uncleMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-uncle', 'Hyrule Castle Secret Passage', true);
        uncleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.gameState >= 1;
        }, 'lw-hyrule-castle', 'Talk to Uncle First', [-1], 2));
        uncleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Link's Uncle", 50, 22, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[1]));
        uncleMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Secret Passage Chest', 76.5, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.gameState >= 1;
        }, items[2], 'Talk to Uncle First'));
        dungeon.dungeonMaps.push(uncleMap);
        var graveyardMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-graveyard', 'Graveyard');
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap !== 2 || items.glove === 2;
        }, 'lw-sanctuary-entrance'));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap !== 2 || items.glove === 2;
        }, 'lw-east-sanctuary'));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 15.5, 34.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return (items.currentRegionInMap !== 2 && items.glove) || items.glove === 2;
        }, 'hc-bombablewall'));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-gy-ledge', '', [3]));
        graveyardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 81, 37.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.boots && (items.glove === 2 || items.currentRegionInMap === 2);
        }, 'lw-kingstomb', 'Boots and Titan Mitts Required'));
        dungeon.dungeonMaps.push(graveyardMap);
        var flute2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute2', 'Potion Witch');
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 75, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east-sanctuary'));
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 32, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-zora-entrance', 'Power Glove Required'));
        flute2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 40, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-potion-shop'));
        dungeon.dungeonMaps.push(flute2Map);
        var flute5Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute5', 'Eastern Portal');
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-eastern-palace'));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 80, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.hammer && items.glove;
        }, ''));
        dungeon.dungeonMaps.push(flute5Map);
        var flute5Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-saha', "Sahasrahla's Hut", true);
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-eastern-palace'));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Sahasrahala's Hut Left Chest", 43, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[9]));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Sahasrahala's Hut Middle Chest", 49.5, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[10]));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Sahasrahala's Hut Right Chest", 56, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[11]));
        flute5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Sahasrahala', 48, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.pendantCourage;
        }, items[29], 'Green Pendant Required'));
        dungeon.dungeonMaps.push(flute5Map);
        var zoraEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-zora-entrance', 'Zora Entrance');
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'lw-flute2', 'Power Glove Required'));
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 20, 8, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'lw-waterfall', 'Flippers Required', [-1], 0, function (items, config) {
            return items.moonPearl || items.boots;
        }));
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 26, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'lw-lake-hylea', 'Flippers Required', [-1], 0, function (items, config) {
            return true;
        }));
        zoraEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 65, 5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-zora-domain'));
        dungeon.dungeonMaps.push(zoraEntranceMap);
        var flute8Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute8', 'Ice Cave Entrance');
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-minimoldorm-entrance'));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 58, 8, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-icerod'));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 34, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.flippers;
        }, 'lw-lake-hylea', 'Flippers Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        flute8Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 61, 69, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP, function (items, config) {
            return items.flippers;
        }, 'lw-sanctuary-entrance', 'Flippers Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(flute8Map);
        var hoboEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-hobo-entrance', 'Hobo Entrance');
        hoboEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 34, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hobo'));
        hoboEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 82, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lake-hylea'));
        dungeon.dungeonMaps.push(hoboEntranceMap);
        var minimoldormMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-minimoldorm', 'Mini Moldorm Cave', true);
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 92, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-minimoldorm-entrance'));
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Moldorm Cave Far Left Chest', 35, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[23]));
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Moldorm Cave Left Chest', 42, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[24]));
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Moldorm Cave Right Chest', 57, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[25]));
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Moldorm Cave Far Right Chest', 64, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[26]));
        minimoldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mini Moldorm Cave NPC', 49.5, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[40]));
        dungeon.dungeonMaps.push(minimoldormMap);
        var desertMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-desert', 'Desert Area');
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 16, 92, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.glove === 2;
        }, '', '', [3]));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 90, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute7'));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 80, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-aginah'));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29.5, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.book;
        }, 'dp-entry', 'Book Required'));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Desert Ledge Item', 9, 65, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 2;
        }, items[45]));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 70, 11, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-checkerboard', '', [1]));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 14, 18, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'dp-entry', '', [2]));
        desertMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 30, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove;
        }, 'dp-first-tile', '', [2]));
        dungeon.dungeonMaps.push(desertMap);
        var damMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-dam', 'Dam', true);
        damMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute7'));
        damMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dam Chest', 50, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[4]));
        dungeon.dungeonMaps.push(damMap);
        var libraryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-library', 'Library', true);
        libraryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-race-game'));
        libraryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Library Item', 22, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.boots;
        }, items[41], 'Requires Boots'));
        dungeon.dungeonMaps.push(libraryMap);
        var kakarikoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-kakariko', 'Kakariko');
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lostwoods'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove === 2;
        }, 'lw-kak-portal'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-fortune-teller'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 81, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-blacksmiths-entrance'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-race-game'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-well'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 51.5, 18, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-blindshut'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 39, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-chicken'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 64, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-bar'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 62.5, 64, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-sickkid'));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bottle Vendor', 38, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[28]));
        kakarikoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Activate Flute', 50.5, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].DUCK, function (items, config) {
            return items.flute;
        }, ''));
        dungeon.dungeonMaps.push(kakarikoMap);
        var lumberjackMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-lumberjack', 'Lumberjack Tree');
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 67, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove && items.lamp;
        }, 'lw-flute1', '', [-1], 0, function (items, config) {
            return items.glove;
        }));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lostwoods'));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 54, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-sanctuary-entrance'));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 58, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lumberjack-item'));
        lumberjackMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.agahnim && items.boots;
        }, 'lw-lumberjack-item', '', [-1], 1));
        dungeon.dungeonMaps.push(lumberjackMap);
        var fortuneTellerMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-fortune-teller', 'Fortune Teller');
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-sanctuary-entrance'));
        fortuneTellerMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lostwoods'));
        dungeon.dungeonMaps.push(fortuneTellerMap);
        var bonkrocksMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-bonkrocks', 'Cave below Bonk Rocks', true);
        bonkrocksMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-sanctuary-entrance'));
        bonkrocksMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bonk Rocks', 50, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[22]));
        dungeon.dungeonMaps.push(bonkrocksMap);
        var bonkrocksMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-kingstomb', "King's Tomb", true);
        bonkrocksMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-graveyard', '', [-1], 2));
        bonkrocksMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("King's Tomb Chest", 50, 18, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[3]));
        dungeon.dungeonMaps.push(bonkrocksMap);
        var potionShopMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-potion-shop', 'Potion Shop', true);
        potionShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute2'));
        potionShopMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Potion Shop Item', 59, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.mushroom;
        }, items[43]));
        dungeon.dungeonMaps.push(potionShopMap);
        var waterfallMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-waterfall', 'Waterfall Fairy Cave', true);
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-zora-entrance'));
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Waterfall Fairy Left Chest', 43, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[50]));
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Waterfall Fairy Right Chest', 57, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[51]));
        dungeon.dungeonMaps.push(waterfallMap);
        var waterfallMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-zora-domain', "Zora's Domain", true);
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 15, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-zora-entrance'));
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('King Zora', 93, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[34]));
        waterfallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Zora River Ledge', 43, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.flippers;
        }, items[48], 'Flippers Required', [-1], 0, function (items, config) {
            return items.boots || items.canAncillaFF();
        }));
        dungeon.dungeonMaps.push(waterfallMap);
        var icerodMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-icerod', 'Ice Cave', true);
        icerodMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute8'));
        icerodMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Ice Rod Chest', 45, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[27]));
        dungeon.dungeonMaps.push(icerodMap);
        var hoboMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-hobo', 'Hobo Under the Bridge', true);
        hoboMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 92, 64, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hobo-entrance'));
        hoboMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hobo', 40, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[32]));
        dungeon.dungeonMaps.push(hoboMap);
        var hoboMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-aginah', "Aginah's Cave", true);
        hoboMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-desert'));
        hoboMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Aginah', 70, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[8]));
        dungeon.dungeonMaps.push(hoboMap);
        var wellMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-well', 'Kakariko Well', true);
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kakariko Well Chest 1', 24, 76, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[12]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kakariko Well Chest 2', 32, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[13]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kakariko Well Chest 3', 38.5, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[14]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kakariko Well Chest 4', 45, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[15]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Kakariko Well Chest 5', 25, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[16]));
        dungeon.dungeonMaps.push(wellMap);
        var wellMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-blindshut', "Blind's Hut", true);
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 41, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind' Hut Chest 1", 45, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[17]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind' Hut Chest 2", 39, 86, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[18]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind' Hut Chest 3", 61, 86, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[19]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind' Hut Chest 4", 55, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[20]));
        wellMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind' Hut Chest 5", 50, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[21]));
        dungeon.dungeonMaps.push(wellMap);
        var barMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-bar', 'Kakariko Tavern', true);
        barMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 10, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        barMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Tavern Chest', 36, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[6]));
        dungeon.dungeonMaps.push(barMap);
        var chickenMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-chicken', 'Chicken House', true);
        chickenMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        chickenMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Chicken House Chest', 75, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[7]));
        dungeon.dungeonMaps.push(chickenMap);
        var southGroveCaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-south-grove-cave', 'Cave South of Grove', true);
        southGroveCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-south-grove', '', [-1], 1));
        southGroveCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('South Grove Chest', 32, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[37]));
        dungeon.dungeonMaps.push(southGroveCaveMap);
        var southGroveCaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-sickkid', "Sick Kid's House", true);
        southGroveCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        southGroveCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Sick Kid', 22, 55, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.bottle;
        }, items[31]));
        dungeon.dungeonMaps.push(southGroveCaveMap);
        var blacksmithsEntranceMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-blacksmiths-entrance', 'Blacksmiths Entrance');
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 5, 62, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 0;
        }, 'lw-kakariko'));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 59, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, 'lw-bat'));
        blacksmithsEntranceMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 44, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 0;
        }, 'lw-blacksmiths'));
        dungeon.dungeonMaps.push(blacksmithsEntranceMap);
        var batMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-bat', 'Magic Bat Cave', true);
        batMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-blacksmiths-entrance'));
        batMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Magic Bat', 75, 24, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.powder;
        }, items[30], 'Magic Powder Required', [-1], 0, function (items, config) {
            return items.somaria && items.mushroom;
        }));
        dungeon.dungeonMaps.push(batMap);
        var blacksmithsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-blacksmiths', 'Blacksmiths', true);
        blacksmithsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 86, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-blacksmiths-entrance'));
        blacksmithsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Blacksmiths Item', 50, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasBlacksmiths;
        }, items[113]));
        dungeon.dungeonMaps.push(blacksmithsMap);
        var kakPortalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-kak-portal', 'Kakariko Dark World Portal');
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 65, 96, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.glove === 2 || items.currentRegionInMap === 0;
        }, 'lw-kakariko'));
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 73, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.glove;
        }, ''));
        kakPortalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer || items.currentRegionInMap === 1;
        }, 'lw-lostwoods'));
        dungeon.dungeonMaps.push(kakPortalMap);
        var lostwoodsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-lostwoods', 'Lost Woods');
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 11, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-kakariko'));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'lw-kak-portal', '', [-1], 1));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-fortune-teller'));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 92, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lumberjack'));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 16, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-pedestal'));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-thief-hideout'));
        lostwoodsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mushroom Item', 47, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[42]));
        dungeon.dungeonMaps.push(lostwoodsMap);
        var lumberjackItemMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-lumberjack-item', 'Lumberjack Cave', true);
        lumberjackItemMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lumberjack'));
        lumberjackItemMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lumberjack Item', 60, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 1;
        }, items[36]));
        dungeon.dungeonMaps.push(lumberjackItemMap);
        var thiefHideoutMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-thief-hideout', 'Lost Woods Hideout', true);
        thiefHideoutMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 90, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lostwoods'));
        thiefHideoutMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Lost Woods Hideout Chest', 73, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[35]));
        dungeon.dungeonMaps.push(thiefHideoutMap);
        var pedestalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-pedestal', 'Master Sword Pedestal', true);
        pedestalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 51, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-lostwoods'));
        pedestalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pedestal', 48.5, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PEDESTAL, function (items, config) {
            return items.pendantCourage && items.pendantPower && items.pendantWisdom;
        }, items[0]));
        dungeon.dungeonMaps.push(pedestalMap);
        var checkerboardMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-checkerboard', 'Checkerboard Cave', true);
        checkerboardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 85, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-desert', '', [-1], 1));
        checkerboardMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Checkerboard Item', 78, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[39]));
        dungeon.dungeonMaps.push(checkerboardMap);
        var gyLedgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-gy-ledge', 'Graveyard Ledge Cave', true);
        gyLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-graveyard', '', [-1], 3));
        gyLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Graveyard Ledge Chest', 51, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[38]));
        dungeon.dungeonMaps.push(gyLedgeMap);
        var flute1Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-flute1', 'Death Mountain Entrance');
        flute1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 10, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-spectacle-rock'));
        flute1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 57, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'lw-east'));
        flute1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Old Man', 29, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.lamp;
        }, items[74], 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(flute1Map);
        var spectacleRockMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-spectacle-rock', 'Spectacle Rock');
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 11, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute1'));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 78, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute1'));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-spectacle-cave'));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-spectacle-cave', '', [-1], 1));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 36, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, ''));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spectacle Rock Item', 53, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 1;
        }, items[77]));
        spectacleRockMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 45, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-hera', '', [1]));
        dungeon.dungeonMaps.push(spectacleRockMap);
        var spectacleCaveMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-spectacle-cave', 'Spectacle Rock Cave', true);
        spectacleCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap === 0;
        }, 'lw-spectacle-rock', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        spectacleCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-flute1'));
        spectacleCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spectacle Rock Cave Item', 36, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 1;
        }, items[75]));
        if (config.hintsEnabled) {
            spectacleCaveMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 36, 31, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return items.currentRegionInMap === 1;
            }, '13'));
        }
        dungeon.dungeonMaps.push(spectacleCaveMap);
        var heraMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-hera', 'Tower of Hera Entrance');
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 74, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'toh-entry'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 94, 37, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'lw-trportal'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-spectacle-rock'));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Ether Tablet', 18, 31, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOOK_CHECKABLE_ITEM, function (items, config) {
            return items.sword >= 2 || (items.hammer && config.weapons === 'swordless');
        }, items[76]));
        heraMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spectacle Rock Item', 53, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return false;
        }, items[77]));
        dungeon.dungeonMaps.push(heraMap);
        var trportalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-trportal', 'Turtle Rock Portal');
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 6, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'lw-hera'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-spiral'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 43, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-paradox5'));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 76, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.glove === 2 && items.hammer && items.moonPearl;
        }, ''));
        trportalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Floating Island', 23, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 1;
        }, items[87]));
        dungeon.dungeonMaps.push(trportalMap);
        var eastMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-east', 'East Death Mountain');
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hookshot;
        }, 'lw-flute1', 'Hookshot Required'));
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-paradox2', '', [-1], 1));
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 65, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-paradox5'));
        eastMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 44, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].PORTAL, function (items, config) {
            return items.glove === 2;
        }, ''));
        dungeon.dungeonMaps.push(eastMap);
        var spiralMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-spiral', 'Spiral Cave', true);
        spiralMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spiral Cave Chest', 70, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[78]));
        spiralMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 74, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east'));
        dungeon.dungeonMaps.push(spiralMap);
        var paradox2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-paradox2', 'Paradox Cave 2 Chests', true);
        paradox2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Upper - Left Chest', 72, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 0 || items.mirror;
        }, items[85]));
        paradox2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Upper - Right Chest', 78, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 0 || items.mirror;
        }, items[86]));
        paradox2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east'));
        paradox2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap === 0 || items.mirror;
        }, 'lw-paradox5', '', [-1], 1));
        dungeon.dungeonMaps.push(paradox2Map);
        var paradox5Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-paradox5', 'Paradox Cave 5 Chests', true);
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Lower - Chest 1', 61, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[80], '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Lower - Chest 2', 70, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[81], '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Lower - Chest 3', 73, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[82], '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Lower - Chest 4', 79, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[83], '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Paradox Cave Lower - Chest 5', 88, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, items[84], '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 67, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-paradox2', '', [-1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-paradox2', '', [1]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 92, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-east', '', config.canGlitch ? [-1] : [0]));
        paradox5Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-trportal', '', config.canGlitch ? [-1] : [0]));
        dungeon.dungeonMaps.push(paradox5Map);
        var trLedgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-tr-ledge', 'Mimic Cave Entrance');
        trLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-mimic'));
        dungeon.dungeonMaps.push(trLedgeMap);
        var mimicMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('lw-mimic', 'Mimic Cave', true);
        mimicMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'lw-tr-ledge'));
        mimicMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mimic Cave Chest', 50, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hammer;
        }, items[79], 'Hammer Required'));
        dungeon.dungeonMaps.push(mimicMap);
        dungeon.startingMap = startQuestMap;
        return dungeon;
    };
    return LightWorldSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/misery-mire.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiseryMireSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var MiseryMireSetup = (function () {
    function MiseryMireSetup() {
    }
    MiseryMireSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Misery Mire', items[185], function (items, config) {
            return ((items.moonPearl || config.mode === 'inverted') &&
                items.canMire(config) &&
                items.hasMedallion('mm', config) &&
                (items.sword || config.weapons === 'swordless') &&
                ((items.boots && config.advancedItems) || items.hookshot));
        }, 11.6, 82.9);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-entry', 'Misery Mire Main Lobby');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-desert' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-switch-room'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-lone-stalfo'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-west-spike'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-bc'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-map', 'Switch on Blue Required'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Main Lobby Chest', 57, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.crystalSwitch;
        }, items[178], 'Switch on Blue Required'));
        dungeon.dungeonMaps.push(entryMap);
        var westSpikeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-west-spike', 'Push Block Room');
        westSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-entry'));
        westSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-two-bridges'));
        westSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-spike-room'));
        dungeon.dungeonMaps.push(westSpikeMap);
        var spikeRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-spike-room', 'Spike Room');
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-west-spike'));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Spike Room Chest', 59.5, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[183]));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 22.5, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-north-spike'));
        spikeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-map', 'Switch on Blue Required'));
        dungeon.dungeonMaps.push(spikeRoomMap);
        var northSpikeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-north-spike', 'North of Spike Room');
        northSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 85, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-spike-room'));
        northSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 22, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-big-door'));
        northSpikeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 16, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-fish-spine'));
        dungeon.dungeonMaps.push(northSpikeMap);
        var fishSpineMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-fish-spine', 'Fish Spine');
        fishSpineMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-lone-stalfo', 'Switch on Blue Required'));
        fishSpineMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-north-spike'));
        fishSpineMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 19, 22, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        fishSpineMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SWITCH, function (items, config) {
            return true;
        }, 'switch'));
        dungeon.dungeonMaps.push(fishSpineMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-map', 'Map Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-entry'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-spike-room', 'Switch on Blue Required'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-entry', 'Switch on Blue Required'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-bc', 'Switch on Blue Required'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 41, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.crystalSwitch;
        }, items[182]));
        dungeon.dungeonMaps.push(mapMap);
        var switchRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-switch-room', 'Switch Room');
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-entry'));
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-four-torch'));
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 34.5, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SWITCH, function (items, config) {
            return true;
        }, 'switch'));
        switchRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 22, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(switchRoomMap);
        var fourTorchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-four-torch', 'Four Torch Room');
        fourTorchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'mm-switch-room'));
        fourTorchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hasFiresource();
        }, 'mm-compass', 'Fire Source Required'));
        fourTorchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hasFiresource();
        }, 'mm-tile', 'Fire Source Required'));
        dungeon.dungeonMaps.push(fourTorchMap);
        var compassMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-compass', 'Compass Room');
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-four-torch'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-lone-stalfo'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 50, 47, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.crystalSwitch;
        }, items[180], 'Switch on Blue Required'));
        dungeon.dungeonMaps.push(compassMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-tile', 'Moving Wall Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 76.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-four-torch'));
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56.5, 76.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'mm-bk'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 36, 33, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '11'));
        }
        dungeon.dungeonMaps.push(tileMap);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-lone-stalfo'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[179]));
        dungeon.dungeonMaps.push(bigKeyMap);
        var loneStalfoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-lone-stalfo', 'Lonely Stalfo Room');
        loneStalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-entry'));
        loneStalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'mm-big-door'));
        dungeon.dungeonMaps.push(loneStalfoMap);
        var bigDoorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-big-door', 'Big Door Room');
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-north-spike'));
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 34, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'mm-two-bridges', '', [-1], 1));
        dungeon.dungeonMaps.push(bigDoorMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-entry'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'mm-map', 'Switch on Blue Required'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[177]));
        dungeon.dungeonMaps.push(bigChestMap);
        var preVittyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-pre-vitty', 'Room before Vitreous');
        preVittyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'mm-two-bridges', '', [-1], 1));
        preVittyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 35, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'mm-vitty'));
        dungeon.dungeonMaps.push(preVittyMap);
        var twoBridgesMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-two-bridges', 'Bridge Room');
        twoBridgesMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 13, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp && items.somaria && items.currentRegionInMap === 1;
        }, 'mm-pre-vitty', 'Somaria ' + (config.canGlitch ? 'and Boots if hovering ' : 'and Lamp ') + 'required', [0, 1], 0, function (items, config) {
            return items.somaria && (items.currentRegionInMap === 1 || items.boots);
        }));
        twoBridgesMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'mm-big-door', '', [1]));
        twoBridgesMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 93, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.currentRegionInMap === 0 || items.hookshot;
        }, 'mm-west-spike', 'Hookshot Required'));
        twoBridgesMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 75, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.currentRegionInMap === 0 || items.hookshot;
        }, items[181], 'Hookshot Required', [0, 1]));
        dungeon.dungeonMaps.push(twoBridgesMap);
        var vittyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('mm-vitty', 'Vitreous Room');
        vittyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Vitreous', 50, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return items.hammer || items.sword || items.hasBow();
        }, items[184]));
        dungeon.dungeonMaps.push(vittyMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return MiseryMireSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/palace-of-darkness.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalaceOfDarknessSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var PalaceOfDarknessSetup = (function () {
    function PalaceOfDarknessSetup() {
    }
    PalaceOfDarknessSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Palace of Darkness', items[138], function (items, config) {
            if (config.mode === 'inverted') {
                return items.canInvertedNEDW(config.canGlitch);
            }
            else {
                return items.canNorthEastDarkWorld(config.canGlitch) && items.moonPearl;
            }
        }, 94, 40);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-entry', 'Palace of Darkness Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-eastern-palace' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-left'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'pod-fork1'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-tile'));
        dungeon.dungeonMaps.push(entryMap);
        var leftMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-left', 'Shooter Room');
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-entry'));
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Shooter Room Chest', 78, 72, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[124]));
        dungeon.dungeonMaps.push(leftMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-tile', 'Hint Tile Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 53, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-entry'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '5'));
        }
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Right Side', 50, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hasBow() || (config.isEnemizer && config.mode !== 'standard');
        }, 'pod-right', 'Bow Required', [-1], 0, function (items, config) {
            return true;
        }));
        dungeon.dungeonMaps.push(tileMap);
        var rightMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-right', 'Map Room');
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 78, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-tile'));
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 63, 57.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[129]));
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Arena Ledge Chest', 10, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[126]));
        rightMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 63, 30, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'pod-statue', 'Hammer Required'));
        dungeon.dungeonMaps.push(rightMap);
        var fork1Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-fork1', 'First Fork');
        fork1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-entry'));
        fork1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-jump'));
        fork1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-jump'));
        fork1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 67, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'pod-stalfos-drop'));
        fork1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'pod-bk'));
        dungeon.dungeonMaps.push(fork1Map);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 73, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'pod-stalfos-drop'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 50, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[125]));
        dungeon.dungeonMaps.push(bigKeyMap);
        var stalfosDropMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-stalfos-drop', 'Stalfos Basement Room');
        stalfosDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 80, 42, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-tile'));
        stalfosDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Stalfos Basement Chest', 48.5, 53, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[128]));
        dungeon.dungeonMaps.push(stalfosDropMap);
        var jumpMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-jump', 'The Arena');
        jumpMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-fork1'));
        jumpMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-fork1'));
        jumpMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Arena Bridge Chest', 73, 71, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[127]));
        jumpMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-statue'));
        jumpMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'pod-fork2'));
        dungeon.dungeonMaps.push(jumpMap);
        var fork2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-fork2', 'Hammer Bridge');
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-jump'));
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-compass'));
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.lamp;
        }, 'pod-maze', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        if (config.canGlitch) {
            fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 42, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return false;
            }, 'pod-maze', '', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        }
        dungeon.dungeonMaps.push(fork2Map);
        var mazeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-maze', 'Dark Maze');
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 67, 27, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'pod-fork2'));
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Maze Top Chest', 29, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[135]));
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Maze Bottom Chest', 64, 84, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[136]));
        mazeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 89, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[130]));
        dungeon.dungeonMaps.push(mazeMap);
        var compassMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-compass', 'Compass Room');
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-fork2'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 31, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp || (config.advancedItems && items.fireRod);
        }, 'pod-basement', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 69, 20, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp || (config.advancedItems && items.fireRod);
        }, 'pod-basement', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'pod-spike-statue'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 50, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[131]));
        dungeon.dungeonMaps.push(compassMap);
        var spikeStatueMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-spike-statue', 'Harmless Hellway');
        spikeStatueMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-compass'));
        spikeStatueMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-jump'));
        spikeStatueMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Harmless Hellway Chest', 25, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[132]));
        dungeon.dungeonMaps.push(spikeStatueMap);
        var basementMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-basement', 'Dark Basement Room');
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 39, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-compass'));
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 61, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-compass'));
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Basement Left Chest', 36, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[133]));
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Dark Basement Right Chest', 63, 73, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[134]));
        dungeon.dungeonMaps.push(basementMap);
        var statueMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-statue', 'Statue Push Room');
        statueMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 29, 79, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-jump'));
        statueMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.hasBow() && items.hammer && items.lamp;
        }, 'pod-to-helma', (config.canGlitch ? '' : 'Lamp, ') + 'Bow and Hammer Required', [-1], 0, function (items, config) {
            return items.hasBow() && items.hammer;
        }));
        dungeon.dungeonMaps.push(statueMap);
        var toHelmaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-to-helma', 'Path to Helmasaur');
        toHelmaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 49, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'pod-statue'));
        toHelmaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'pod-helma'));
        dungeon.dungeonMaps.push(toHelmaMap);
        var helmaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('pod-helma', 'Helmasaur King Room');
        helmaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Helmasaur King', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[137]));
        dungeon.dungeonMaps.push(helmaMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return PalaceOfDarknessSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/skull-woods.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkullWoodsSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var SkullWoodsSetup = (function () {
    function SkullWoodsSetup() {
    }
    SkullWoodsSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Skull Woods', items[158], function (items, config) {
            return config.mode === 'inverted' || (items.moonPearl && items.canNorthWestDarkWorld(config.canGlitch));
        }, 6.6, 5.4);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-entry', 'Skull Woods Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 57.5, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 27.5, 87, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-left-drop'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 90, 74.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-right-drop'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 80, 15.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-northeast-bc'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 71, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-bc'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 8.5, 40, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-part21'));
        dungeon.dungeonMaps.push(entryMap);
        var leftDropMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-left-drop', 'Compass Room');
        leftDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-gibdo-stalfo'));
        leftDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 76.5, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[152]));
        leftDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-right-drop'));
        dungeon.dungeonMaps.push(leftDropMap);
        var gibdoStalfoMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-gibdo-stalfo', 'Pot Prison Room');
        gibdoStalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-left-drop'));
        gibdoStalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pot Prison Chest', 22, 28.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[155]));
        gibdoStalfoMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'sw-bc'));
        dungeon.dungeonMaps.push(gibdoStalfoMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'sw-gibdo-stalfo'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-lostwoods' : 'sw-entry'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-map'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 39.4, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[150]));
        dungeon.dungeonMaps.push(bigChestMap);
        var rightDropMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-right-drop', 'Pinball Room');
        rightDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'sw-map'));
        rightDropMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pinball Chest', 51.5, 45, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[156]));
        dungeon.dungeonMaps.push(rightDropMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-map', 'Map Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'sw-right-drop'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-bc'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-northeast-bc'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 79, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[153]));
        dungeon.dungeonMaps.push(mapMap);
        var northeastBigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-northeast-bc', 'Circle of Pots Room');
        northeastBigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-map'));
        northeastBigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-bc'));
        dungeon.dungeonMaps.push(northeastBigChestMap);
        var part21Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-part21', 'Big Key Room');
        part21Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-lostwoods' : 'sw-entry'));
        part21Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-part22'));
        part21Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 51.5, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[151]));
        dungeon.dungeonMaps.push(part21Map);
        var part22Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-part22', 'Key Pot Room');
        part22Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sw-part21'));
        if (config.isFullMap) {
            part22Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'dw-lostwoods', '', [-1], 1));
        }
        else {
            part22Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return items.fireRod;
            }, 'sw-final', 'Fire Rod Required'));
        }
        part22Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 21, 28, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(part22Map);
        var finalMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-final', 'Final Section');
        if (config.isFullMap) {
            finalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'dw-lostwoods', '', [-1], 1));
        }
        else {
            finalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return true;
            }, 'sw-part22'));
        }
        finalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mothula Room', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.sword || config.weapons === 'swordless';
        }, 'sw-mothula', 'Sword Required'));
        finalMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bridge Room Chest', 33, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[154]));
        dungeon.dungeonMaps.push(finalMap);
        var mothulaMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sw-mothula', 'Mothula Room');
        mothulaMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mothula', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[157]));
        dungeon.dungeonMaps.push(mothulaMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return SkullWoodsSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/swamp-palace.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwampPalaceSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var SwampPalaceSetup = (function () {
    function SwampPalaceSetup() {
    }
    SwampPalaceSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Swamp Palace', items[149], function (items, config) {
            return config.mode === 'inverted' || (items.moonPearl && items.canSouthDarkWorld(config.canGlitch));
        }, 47, 91);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-entry', 'Swamp Palace Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-flute7' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Entrance Chest', 36, 21, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return (items.flippers &&
                items.mirror &&
                (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl)));
        }, items[139]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return (items.flippers &&
                items.mirror &&
                (config.mode !== 'inverted' || (items.canInvertedLW() && items.moonPearl)));
        }, 'sp-tall-room'));
        if (config.hintsEnabled) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 60, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '6'));
        }
        dungeon.dungeonMaps.push(entryMap);
        var tallRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-tall-room', 'Key Pot Corridor');
        tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-entry'));
        tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 12.5, 26.8, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[142]));
        tallRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 58, 76.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.hammer;
        }, 'sp-main-hub', 'Hammer Required'));
        dungeon.dungeonMaps.push(tallRoomMap);
        var mainHubMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-main-hub', 'Main Hub');
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-tall-room'));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 48.5, 44.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[140]));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Small Key', 91, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return items.hookshot;
        }, '', 'Hookshot Required'));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.hookshot;
        }, 'sp-downstairs1', 'Hookshot Required'));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'sp-switch'));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-south-switch'));
        mainHubMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-south'));
        dungeon.dungeonMaps.push(mainHubMap);
        var southMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-south', 'Compass Room');
        southMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 15, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-main-hub'));
        southMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 23.5, 17.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[144]));
        dungeon.dungeonMaps.push(southMap);
        var switchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-switch', 'Switch Room');
        switchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-main-hub'));
        switchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Crystal Switch', 40, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SWITCH, function (items, config) {
            return true;
        }, 'switch'));
        switchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Water Switch', 27, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].WATER_SWITCH, function (items, config) {
            return items.crystalSwitch;
        }, 'flood'));
        switchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'sp-south-switch', 'Switch on Blue Required'));
        dungeon.dungeonMaps.push(switchMap);
        var southSwitchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-south-switch', 'South of Switch Room');
        southSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-main-hub'));
        southSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 35, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.crystalSwitch;
        }, 'sp-switch', 'Switch on Blue Required'));
        southSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 51.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.spFlooded;
        }, 'sp-left', 'Flooded Swamp Required'));
        southSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return !items.spFlooded;
        }, 'sp-left-key', 'Room must not be flooded (leave dungeon to reset)'));
        dungeon.dungeonMaps.push(southSwitchMap);
        var leftKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-left-key', 'Key Pot Room');
        leftKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 79, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-south-switch'));
        leftKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 47, 41, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(leftKeyMap);
        var leftMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-left', 'Left Side');
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-south-switch'));
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Left Side Chest', 38, 26.7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[143]));
        leftMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 92, 26.7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return !items.crystalSwitch;
        }, items[141], 'Switch on Red Required'));
        dungeon.dungeonMaps.push(leftMap);
        var downstairs1Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-downstairs1', 'Flooded Room');
        downstairs1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 84, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-main-hub'));
        downstairs1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Flooded Room Left Chest', 67, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[145]));
        downstairs1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Flooded Room Right Chest', 76.5, 68, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[146]));
        downstairs1Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 13.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-downstairs2'));
        dungeon.dungeonMaps.push(downstairs1Map);
        var downstairs2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-downstairs2', 'Waterfall Room');
        downstairs2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-downstairs1'));
        downstairs2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hidden Waterfall Chest', 54.7, 76.7, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[147]));
        downstairs2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'sp-arrghus'));
        dungeon.dungeonMaps.push(downstairs2Map);
        var arrghusMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('sp-arrghus', 'Arrghus Room');
        arrghusMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Arrghus', 50, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[148]));
        dungeon.dungeonMaps.push(arrghusMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return SwampPalaceSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/thieves-town.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThievesTownSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var ThievesTownSetup = (function () {
    function ThievesTownSetup() {
    }
    ThievesTownSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Thieves Town', items[167], function (items, config) {
            return config.mode === 'inverted' || (items.moonPearl && items.canNorthWestDarkWorld(config.canGlitch));
        }, 12.8, 47.9);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-entry', 'Thieves Town Great Hall');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-kakariko' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87.5, 6, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'tt-stalfo-corridor'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 13.5, 66.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[161]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Ambush Chest', 19, 30.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[163]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 68.6, 80, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[162]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 39, 85.3, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[160]));
        dungeon.dungeonMaps.push(entryMap);
        var stalfoCorridorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-stalfo-corridor', 'Stalfo Corridor');
        stalfoCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-entry'));
        stalfoCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Blind', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return (!!config.isEnemizer ||
                (items.ttBlindDelivered &&
                    items.ttBombableFloor &&
                    (items.sword || items.hammer || items.somaria || items.byrna)));
        }, 'tt-blind', 'Floor Destroyed, Blind Rescued and a Weapon Required'));
        stalfoCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 33, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tt-hellway'));
        stalfoCorridorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 54, 17, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(stalfoCorridorMap);
        var hellwayMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-hellway', 'Hellway');
        hellwayMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-stalfo-corridor'));
        hellwayMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-tile'));
        hellwayMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-fork'));
        dungeon.dungeonMaps.push(hellwayMap);
        var tileMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-tile', 'Hint Tile Room');
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-hellway'));
        tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-bombable-floor'));
        if (config.hintsEnabled) {
            tileMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 34, 20.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '7'));
        }
        dungeon.dungeonMaps.push(tileMap);
        var forkMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-fork', 'Conveyor Belt Circle');
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-hellway'));
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-fork2'));
        forkMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-stalfo-corridor'));
        dungeon.dungeonMaps.push(forkMap);
        var fork2Map = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-fork2', 'Downstairs');
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-fork'));
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tt-bc'));
        fork2Map.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-maiden'));
        dungeon.dungeonMaps.push(fork2Map);
        var maidenMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-maiden', 'Blind Cell');
        maidenMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-fork2'));
        maidenMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]("Blind's Chest", 61, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[165]));
        if (!config.isEnemizer) {
            maidenMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 51, 22, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BLIND_RESCUE, function (items, config) {
                return true;
            }, 'blind'));
        }
        dungeon.dungeonMaps.push(maidenMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-bc', 'Big Chest');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-fork2'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 49, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return items.hammer;
        }, items[164], 'Hammer Required'));
        dungeon.dungeonMaps.push(bigChestMap);
        var bombableFloorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-bombable-floor', 'Attic');
        bombableFloorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tt-tile'));
        bombableFloorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Attic Chest', 22, 29, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[159]));
        if (!config.isEnemizer) {
            bombableFloorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Bomb the Floor', 50, 38, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].TT_BOMB_FLOOR, function (items, config) {
                return true;
            }, 'tt-bomb'));
        }
        dungeon.dungeonMaps.push(bombableFloorMap);
        var blindMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tt-blind', 'Blind Room');
        blindMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Blind', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return true;
        }, items[166]));
        dungeon.dungeonMaps.push(blindMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return ThievesTownSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/tower-of-hera.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TowerOfHeraSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var TowerOfHeraSetup = (function () {
    function TowerOfHeraSetup() {
    }
    TowerOfHeraSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Tower of Hera', items[94], function (items, config) {
            if (config.mode === 'inverted') {
                return items.moonPearl && items.hammer && items.canInvertedEastDeathMountain(config.canGlitch);
            }
            else {
                return (items.canWestDeathMountain(config.canGlitch) && (items.mirror || (items.hookshot && items.hammer)));
            }
        }, 62, 5.5);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('toh-entry', 'Tower of Hera Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 90, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'lw-hera' : 'exit'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 28, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'toh-sk'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Map Chest', 50, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[90]));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Basement', 25, 14, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.hasFiresource();
        }, 'toh-basement', 'Fire Source Required'));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'toh-upstairs'));
        if (config.canGlitch) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 36, 18, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return false;
            }, 'toh-upstairs', '', [-1], 0, function (items, config) {
                return items.hookshot;
            }));
        }
        if (config.hintsEnabled) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 46, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '3'));
        }
        dungeon.dungeonMaps.push(entryMap);
        var skMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('toh-sk', 'Left Room');
        skMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56.5, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'toh-entry'));
        skMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Basement Cage Item', 53, 61, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].VIEWABLE_CLOSED_CHEST, function (items, config) {
            return true;
        }, items[89]));
        dungeon.dungeonMaps.push(skMap);
        var basementMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('toh-basement', 'Basement');
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'toh-entry'));
        basementMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 50, 66, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[88]));
        dungeon.dungeonMaps.push(basementMap);
        var upstairsMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('toh-upstairs', 'Big Chest Room');
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'toh-entry'));
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 50, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[91]));
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 17, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return true;
        }, items[92]));
        if (config.hintsEnabled) {
            upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 50, 51, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '4'));
        }
        upstairsMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Moldorm Room', 13, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'toh-moldorm', 'Sword or Hammer Required'));
        dungeon.dungeonMaps.push(upstairsMap);
        var moldormMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('toh-moldorm', 'Moldorm Room');
        moldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Moldorm', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, function (items, config) {
            return items.sword || items.hammer;
        }, items[93]));
        moldormMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 72, 67, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HOLE, function (items, config) {
            return true;
        }, 'toh-upstairs'));
        dungeon.dungeonMaps.push(moldormMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return TowerOfHeraSetup;
}());



/***/ }),

/***/ "../../../../../src/dungeons/turtle-rock.setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurtleRockSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__ = __webpack_require__("../../../../../src/models/dungeon-map.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");




var TurtleRockSetup = (function () {
    function TurtleRockSetup() {
    }
    TurtleRockSetup.setup = function (items, config) {
        var dungeon = new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */]('Turtle Rock', items[198], function (items, config) {
            if (config.mode === 'inverted') {
                return (items.isTROpened ||
                    (items.canInvertedEastDarkDeathMountain(config.canGlitch) &&
                        (items.sword || config.weapons === 'swordless') &&
                        items.hasMedallion('tr', config)));
            }
            else {
                return (items.moonPearl &&
                    items.canDarkEastDeathMountain(config.canGlitch) &&
                    (items.sword || config.weapons === 'swordless') &&
                    items.hasMedallion('tr', config) &&
                    items.hammer);
            }
        }, 93.8, 10);
        var entryMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-entry', 'Turtle Rock Entrance');
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.isFullMap ? 'dw-trportal' : 'exit', '', [-1], 1));
        entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.somaria;
        }, 'tr-hall'));
        if (config.hintsEnabled) {
            entryMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Hint Tile', 36, 78.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].HINT, function (items, config) {
                return true;
            }, '12'));
        }
        dungeon.dungeonMaps.push(entryMap);
        var hallMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-hall', 'Main Lobby');
        hallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-entry'));
        hallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-compass'));
        hallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.fireRod;
        }, 'tr-map', 'Fire Rod Required'));
        hallMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tr-chain-chomp'));
        dungeon.dungeonMaps.push(hallMap);
        var compassMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-compass', 'Compass Room');
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-hall'));
        compassMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Compass Chest', 50, 58, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[187]));
        dungeon.dungeonMaps.push(compassMap);
        var mapMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-map', 'Roller Room');
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-hall'));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Roller Room Left Chest', 44, 17.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[188]));
        mapMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Roller Room Right Chest', 56, 17.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[189]));
        dungeon.dungeonMaps.push(mapMap);
        var chainChompMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-chain-chomp', 'Chain Chomp Room');
        chainChompMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.somaria;
        }, 'tr-hall'));
        chainChompMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tr-pipe-room'));
        chainChompMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Chain Chomps Chest', 50, 35, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[186]));
        dungeon.dungeonMaps.push(chainChompMap);
        var pipeRoomMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-pipe-room', 'Pipe Room');
        pipeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-chain-chomp'));
        pipeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-pokey-key'));
        pipeRoomMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 25, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-double-pokey'));
        dungeon.dungeonMaps.push(pipeRoomMap);
        var pokeyKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-pokey-key', 'Pokey Key Room');
        pokeyKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 26, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-pipe-room'));
        pokeyKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 68, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tr-bk'));
        pokeyKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Pokey Key', 45, 74, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].GROUND_KEY, function (items, config) {
            return true;
        }, ''));
        dungeon.dungeonMaps.push(pokeyKeyMap);
        var bigKeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-bk', 'Big Key Room');
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 7, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-pokey-key'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 93, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-pipe-room'));
        bigKeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Key Chest', 42, 39, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[191]));
        dungeon.dungeonMaps.push(bigKeyMap);
        var doublePokeyMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-double-pokey', 'Double Pokey Room');
        doublePokeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-pipe-room'));
        doublePokeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 88, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-big-door'));
        doublePokeyMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.mode === 'inverted' ? 'tr-bc' : config.isFullMap ? 'dw-tr-ledge' : 'tr-outside'));
        dungeon.dungeonMaps.push(doublePokeyMap);
        var outsideMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-outside', 'Corridor Outside');
        outsideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 12, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-double-pokey'));
        outsideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 52, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-bc'));
        outsideMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 87, 70, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.mirror;
        }, 'tr-mimic', 'Mirror Required'));
        dungeon.dungeonMaps.push(outsideMap);
        var mimicMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-mimic', 'Mimic Cave');
        mimicMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, config.mode === 'inverted' ? 'tr-inverted-ledge' : 'tr-outside'));
        mimicMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Mimic Cave Chest', 50, 25, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hammer && items.moonPearl;
        }, items[79], 'Hammer and Pearl Required'));
        dungeon.dungeonMaps.push(mimicMap);
        var bigChestMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-bc', 'Big Chest Room');
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return config.mode !== 'inverted' || items.mirror;
        }, config.mode === 'inverted' ? 'tr-inverted-ledge' : config.isFullMap ? 'dw-tr-ledge' : 'tr-outside'));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.somaria || items.hookshot;
        }, 'tr-big-door', 'Somaria or Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        bigChestMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Big Chest', 50, 39.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BIG_CHEST, function (items, config) {
            return items.somaria || items.hookshot;
        }, items[190], 'Somaria or Hookshot Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        dungeon.dungeonMaps.push(bigChestMap);
        var bigDoorMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-big-door', 'Big Door Room');
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 13, 53.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-double-pokey'));
        bigDoorMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return true;
        }, 'tr-roller-switch'));
        dungeon.dungeonMaps.push(bigDoorMap);
        var rollerSwitchMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-roller-switch', 'Crystaroller Room');
        rollerSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 88, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-big-door'));
        rollerSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 19, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return items.lamp;
        }, 'tr-helma-bridge', 'Lamp Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        rollerSwitchMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Crystaroller Chest', 21.6, 54, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return true;
        }, items[192]));
        dungeon.dungeonMaps.push(rollerSwitchMap);
        var helmaBridgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-helma-bridge', 'Mini Helma Bridge');
        helmaBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.lamp && items.somaria;
        }, 'tr-roller-switch', '', [-1], 0, function (items, config) {
            return items.somaria;
        }));
        helmaBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 32, 77, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED, function (items, config) {
            return true;
        }, 'tr-before-tri'));
        helmaBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-laser-bridge'));
        dungeon.dungeonMaps.push(helmaBridgeMap);
        var laserBridgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-laser-bridge', 'Laser Bridge');
        laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-helma-bridge'));
        laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Laser Bridge Chest 1', 64, 24, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasBeamReflection(config) || config.advancedItems;
        }, items[196], 'Invincibility Item Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Laser Bridge Chest 2', 36, 36, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasBeamReflection(config) || config.advancedItems;
        }, items[195], 'Invincibility Item Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Laser Bridge Chest 3', 64, 48, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasBeamReflection(config) || config.advancedItems;
        }, items[194], 'Invincibility Item Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Laser Bridge Chest 4', 36, 60, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].CLOSED_CHEST, function (items, config) {
            return items.hasBeamReflection(config) || config.advancedItems;
        }, items[193], 'Invincibility Item Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs));
        if (config.mode === 'inverted') {
            laserBridgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 50, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
                return items.mirror;
            }, 'tr-inverted-ledge'));
        }
        dungeon.dungeonMaps.push(laserBridgeMap);
        var beforeTriMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-before-tri', 'Final Somaria Ride');
        beforeTriMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 65, 95, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-helma-bridge'));
        beforeTriMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38.2, 9.5, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED, function (items, config) {
            return items.somaria;
        }, 'tr-trinexx', 'Cane of Somaria Required'));
        dungeon.dungeonMaps.push(beforeTriMap);
        var invertedLedgeMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-inverted-ledge', 'Turtle Rock Other Entrances');
        invertedLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 37, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return true;
        }, 'tr-mimic'));
        invertedLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 75, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.mirror;
        }, 'tr-bc', 'Mirror Required'));
        invertedLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 38, 44, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.mirror;
        }, 'tr-double-pokey', 'Mirror Required'));
        invertedLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 56, 56, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, function (items, config) {
            return items.mirror;
        }, 'tr-laser-bridge', 'Mirror Required', [-1], 0, function (items, config) {
            return items.mirror;
        }));
        invertedLedgeMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('', 48.5, 94, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].noReqs, 'exit'));
        dungeon.dungeonMaps.push(invertedLedgeMap);
        var trinexxMap = new __WEBPACK_IMPORTED_MODULE_1__models_dungeon_map_model__["a" /* DungeonMap */]('tr-trinexx', 'Trinexx Room');
        trinexxMap.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */]('Trinexx', 50, 50, __WEBPACK_IMPORTED_MODULE_3__models_node_status_enum__["a" /* NodeStatus */].BOSS, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[9], items[197], 'Ice Rod and Fire Rod Required', [-1], 0, __WEBPACK_IMPORTED_MODULE_2__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[9]));
        dungeon.dungeonMaps.push(trinexxMap);
        dungeon.startingMap = entryMap;
        return dungeon;
    };
    return TurtleRockSetup;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("../../../../../src/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/models/config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
// Game configuration - parsed from seed metadata + game parameters
var Config = (function () {
    function Config(seedNumber, seedMetadata, bosses, canGlitch, isFullMap) {
        this.advancedItems = seedMetadata.item_placement === 'advanced';
        this.dungeonItems = seedMetadata.dungeon_items;
        this.accessibility = seedMetadata.accessibility;
        this.goal = seedMetadata.goal;
        this.towerCrystals = +seedMetadata.entry_crystals_tower;
        this.ganonCrystals = +seedMetadata.entry_crystals_ganon;
        this.mode = seedMetadata.mode;
        this.isEnemizer = seedMetadata.enemizer !== 'none';
        this.weapons = seedMetadata.weapons;
        this.mmMedallion = seedMetadata.mmMedallion;
        this.trMedallion = seedMetadata.trMedallion;
        this.bosses = bosses;
        this.canGlitch = canGlitch;
        this.isFullMap = isFullMap;
        this.vtSeedNumber = seedNumber;
        this.isMystery = false;
        this.hints = [];
        this.silversHint = '';
        this.checkedBosses = [false, false, false, false, false, false, false, false, false, false];
        this.noLogic = false;
    }
    return Config;
}());



/***/ }),

/***/ "../../../../../src/models/dungeon-map.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DungeonMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");


var DungeonMap = (function () {
    function DungeonMap(id, name, isIndoors) {
        if (isIndoors === void 0) { isIndoors = false; }
        this.dungeonAbbrevs = [
            'ep', 'dp', 'toh', 'ct', 'pod', 'sp', 'sw', 'tt', 'ip', 'mm', 'tr', 'gt', 'lw', 'dw', 'hc',
        ];
        this.id = id;
        this.name = name;
        this.nodes = [];
        this.isIndoors = isIndoors;
    }
    DungeonMap.prototype.preloadImages = function (dungeonName) {
        var mapIds = [];
        this.preloadedImages = [];
        this.nodes.forEach(function (node) {
            if (node.content !== 'exit' &&
                (node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].BK_LOCKED ||
                    node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].SK_LOCKED ||
                    node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].OPEN_DOOR ||
                    node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].HOLE ||
                    node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].WATER_WARP ||
                    node.status === __WEBPACK_IMPORTED_MODULE_1__node_status_enum__["a" /* NodeStatus */].SQ_OPTION)) {
                mapIds.push(node.content);
            }
        });
        if (this.id.substr(0, 2) === 'dw' && !this.isIndoors) {
            mapIds.push('lw-' + this.id.substr(3));
        }
        if (this.id.substr(0, 2) === 'lw' && !this.isIndoors) {
            mapIds.push('dw-' + this.id.substr(3));
        }
        if (__WEBPACK_IMPORTED_MODULE_0__dungeon_model__["a" /* Dungeon */].pegMaps.indexOf(this.id) > -1) {
            mapIds.push(this.id + '-flipped');
        }
        if (__WEBPACK_IMPORTED_MODULE_0__dungeon_model__["a" /* Dungeon */].floodMaps.indexOf(this.id) > -1) {
            mapIds.push(this.id + '-flooded');
            mapIds.push(this.id + '-flooded-flipped');
        }
        for (var i = 0; i < mapIds.length; i++) {
            this.preloadedImages[i] = new Image();
            var abbrevIndex = this.dungeonAbbrevs.indexOf(mapIds[i].split('-')[0]);
            var imageUrl = 'assets/maps/' + __WEBPACK_IMPORTED_MODULE_0__dungeon_model__["a" /* Dungeon */].dungeonDataNames[abbrevIndex] + '/' + mapIds[i] + '.png';
            this.preloadedImages[i].src = imageUrl;
            this.preloadedImages[i].onerror = (function (failedUrl) {
                return function () {
                    var deadUrls = JSON.parse(localStorage.getItem('deadUrls') || '{}');
                    if (!deadUrls[failedUrl]) {
                        deadUrls[failedUrl] = true;
                        localStorage.setItem('deadUrls', JSON.stringify(deadUrls));
                        console.log('Added dead URL to localStorage:', failedUrl);
                    }
                };
            })(imageUrl);
        }
    };
    DungeonMap.prototype.cleanPreload = function () {
        this.preloadedImages = null;
    };
    return DungeonMap;
}());



/***/ }),

/***/ "../../../../../src/models/dungeon-node.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DungeonNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_node_model__ = __webpack_require__("../../../../../src/models/map-node.model.ts");

var DungeonNode = (function () {
    function DungeonNode(name, x, y, status, canOpen, content, errorMessage, accessibleSectionArray, destinationSection, canGlitch, mirrorAccessibleSectionArray, mirrorDestinationSection) {
        if (errorMessage === void 0) { errorMessage = ''; }
        if (accessibleSectionArray === void 0) { accessibleSectionArray = [-1]; }
        if (destinationSection === void 0) { destinationSection = 0; }
        if (canGlitch === void 0) { canGlitch = null; }
        if (mirrorAccessibleSectionArray === void 0) { mirrorAccessibleSectionArray = [-1]; }
        if (mirrorDestinationSection === void 0) { mirrorDestinationSection = 0; }
        this.mirrorAccessibleSectionArray = mirrorAccessibleSectionArray;
        this.mirrorDestinationSection = mirrorDestinationSection;
        this.name = name;
        this.x = x;
        this.y = y;
        this.canOpen = canOpen;
        this.content = content;
        this.errorMessage = errorMessage;
        this.mapNode = new __WEBPACK_IMPORTED_MODULE_0__map_node_model__["a" /* MapNode */]();
        this.status = status;
        this.accessibleSectionArray = accessibleSectionArray;
        this.destinationSection = destinationSection;
        this.canGlitch = canGlitch;
    }
    Object.defineProperty(DungeonNode.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            this.mapNode.status = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    DungeonNode.prototype.isDoable = function (items, config) {
        if (this.canOpen && this.canOpen(items, config)) {
            return 2;
        }
        else if (this.canGlitch && this.canGlitch(items, config)) {
            return 1;
        }
        else {
            return 0;
        }
    };
    DungeonNode.noReqs = function (items, config) { return true; };
    DungeonNode.bossReqs = [
        // 0: Armos Knights
        function (items, config) {
            return items.sword || items.hammer || items.hasBow() || items.boomerang ||
                (items.hasMagicBars(4) && (items.fireRod || items.iceRod)) ||
                (items.hasMagicBars(2) && (items.byrna || items.somaria));
        },
        // 1: Lanmolas
        function (items, config) {
            return items.sword || items.hammer || items.hasBow() || items.fireRod || items.iceRod || items.byrna || items.somaria;
        },
        // 2: Moldorm
        function (items, config) { return items.sword || items.hammer; },
        // 3: Helmasaur King
        function (items, config) { return items.sword || items.hasBow(); },
        // 4: Arrghus
        function (items, config) {
            return items.hookshot && (items.hammer || items.sword || ((items.hasMagicBars(2) || items.hasBow()) && (items.fireRod || items.iceRod)));
        },
        // 5: Mothula
        function (items, config) {
            return items.sword || items.hammer ||
                (items.hasMagicBars(2) && (items.fireRod || items.somaria || items.byrna)) ||
                (items.net && items.bottle && (items.boots || (items.sword && items.quake)));
        },
        // 6: Blind
        function (items, config) { return items.sword || items.hammer || items.somaria || items.byrna; },
        // 7: Kholdstare
        function (items, config) {
            return items.hasMeltyPower(config) &&
                (items.hammer || items.sword || (items.hasMagicBars(3) && items.fireRod) || (items.hasMagicBars(2) && items.fireRod && items.bombos));
        },
        // 8: Vitreous
        function (items, config) { return items.hammer || items.sword || items.hasBow(); },
        // 9: Trinexx
        function (items, config) {
            return items.fireRod && items.iceRod &&
                (items.sword >= 3 || items.hammer || (items.hasMagicBars(2) && items.sword >= 2) || (items.hasMagicBars(4) && items.sword));
        },
    ];
    DungeonNode.glitchedBossReqs = [
        // 0: Armos Knights
        function (items, config) { return items.fireRod || items.iceRod || items.byrna || items.somaria; },
        // 1: Lanmolas
        function (items, config) { return true; },
        // 2: Moldorm
        null,
        // 3: Helmasaur King
        function (items, config) { return items.sword || items.hasBow() || items.hammer; },
        // 4: Arrghus
        function (items, config) { return items.hookshot && (items.fireRod || items.iceRod); },
        // 5: Mothula
        function (items, config) { return items.fireRod || items.somaria || items.byrna; },
        // 6: Blind
        null,
        // 7: Kholdstare
        function (items, config) { return items.hasMeltyPower(config); },
        // 8: Vitreous
        null,
        // 9: Trinexx
        function (items, config) {
            return items.fireRod && items.iceRod && (items.sword >= 2 || (items.sword && items.hasMagicBars(2)));
        },
    ];
    return DungeonNode;
}());



/***/ }),

/***/ "../../../../../src/models/dungeon-prize.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DungeonPrize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");

var DungeonPrize = (function () {
    function DungeonPrize(dungeonName, itemsLeft, dungeonPrize, bossId) {
        this.dungeonName = dungeonName;
        this.hasBigKey = false;
        this.smallKeys = 0;
        this.hasCompass = false;
        this.hasMap = false;
        this.itemsLeft = itemsLeft;
        this.isBossDefeated = false;
        this.mapPrizeStatus = DungeonPrize.UNKNOWN;
        this.dungeonPrize = dungeonPrize;
        this.bossId = bossId;
        this.dungeonId = __WEBPACK_IMPORTED_MODULE_0__models_dungeon_model__["a" /* Dungeon */].crystalDungeonNames.indexOf(dungeonName);
    }
    DungeonPrize.prototype.dunCount = function () {
        if (this.hasCompass) {
            if (this.hasMap) {
                return 2;
            }
            else {
                return 1;
            }
        }
        else if (this.hasMap) {
            return 1;
        }
        else {
            return 0;
        }
    };
    DungeonPrize.prototype.checkThisMap = function () {
        switch (this.dungeonPrize) {
            case '111':
            case '112':
                this.mapPrizeStatus = DungeonPrize.RED_CRYSTAL;
                break;
            case '129':
                this.mapPrizeStatus = DungeonPrize.GREEN_PENDANT;
                break;
            case '130':
            case '131':
                this.mapPrizeStatus = DungeonPrize.PENDANT;
                break;
            default:
                this.mapPrizeStatus = DungeonPrize.CRYSTAL;
        }
    };
    DungeonPrize.prototype.listenThisMap = function () {
        if (this.mapPrizeStatus === DungeonPrize.UNKNOWN) {
            if (+this.dungeonPrize >= 129) {
                this.mapPrizeStatus = DungeonPrize.SOME_PENDANT;
            }
            else {
                this.mapPrizeStatus = DungeonPrize.SOME_CRYSTAL;
            }
        }
    };
    DungeonPrize.UNKNOWN = 0;
    DungeonPrize.CRYSTAL = 1;
    DungeonPrize.RED_CRYSTAL = 2;
    DungeonPrize.PENDANT = 3;
    DungeonPrize.GREEN_PENDANT = 4;
    DungeonPrize.SOME_CRYSTAL = 5;
    DungeonPrize.SOME_PENDANT = 6;
    return DungeonPrize;
}());



/***/ }),

/***/ "../../../../../src/models/dungeon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dungeon; });
var Dungeon = (function () {
    function Dungeon(name, dungeonPrize, canEnter, x, y) {
        this.name = name;
        this.dungeonPrize = dungeonPrize;
        this.canEnter = canEnter;
        this.dungeonMaps = [];
        this.x = x;
        this.y = y;
    }
    Dungeon.dungeonNames = [
        'light-world',
        'Eastern Palace',
        'Desert Palace',
        'Tower of Hera',
        'Aga Tower',
        'Palace of Darkness',
        'Swamp Palace',
        'Skull Woods',
        'Thieves Town',
        'Ice Palace',
        'Misery Mire',
        'Turtle Rock',
        'Ganons Tower',
    ];
    Dungeon.dungeonDataNames = [
        'Eastern Palace',
        'Desert Palace',
        'Tower of Hera',
        'Aga Tower',
        'Palace of Darkness',
        'Swamp Palace',
        'Skull Woods',
        'Thieves Town',
        'Ice Palace',
        'Misery Mire',
        'Turtle Rock',
        'Ganons Tower',
        'Light World',
        'Dark World',
        'Hyrule Castle',
    ];
    Dungeon.allDungeonNames = [
        'Hyrule Castle',
        'Eastern Palace',
        'Desert Palace',
        'Tower of Hera',
        'Aga Tower',
        'Palace of Darkness',
        'Swamp Palace',
        'Skull Woods',
        'Thieves Town',
        'Ice Palace',
        'Misery Mire',
        'Turtle Rock',
        'Ganons Tower',
        'Light World',
        'Dark World',
    ];
    Dungeon.crystalDungeonNames = [
        'Eastern Palace',
        'Desert Palace',
        'Tower of Hera',
        'Palace of Darkness',
        'Swamp Palace',
        'Skull Woods',
        'Thieves Town',
        'Ice Palace',
        'Misery Mire',
        'Turtle Rock',
    ];
    Dungeon.lwDungeons = ['Eastern Palace', 'Desert Palace', 'Tower of Hera'];
    Dungeon.pegMaps = [
        'ip-bj',
        'ip-fairy-drop',
        'ip-final-switch',
        'ip-push-block',
        'ip-push-block-right',
        'mm-compass',
        'mm-entry',
        'mm-fish-spine',
        'mm-map',
        'sp-left',
        'sp-south-switch',
        'sp-switch',
    ];
    Dungeon.floodMaps = ['sp-south-switch', 'sp-switch'];
    Dungeon.nonDungeon = [
        'light-world',
        'dark-world',
        'Light World',
        'Dark World',
        'Death Mountain',
        'Hyrule Castle',
    ];
    Dungeon.dungeonsWithDunItemsCount = [
        'Eastern Palace',
        'Desert Palace',
        'Tower of Hera',
        'Aga Tower',
        'Palace of Darkness',
        'Swamp Palace',
        'Skull Woods',
        'Thieves Town',
        'Ice Palace',
        'Misery Mire',
        'Turtle Rock',
        'Ganons Tower',
    ];
    return Dungeon;
}());



/***/ }),

/***/ "../../../../../src/models/items.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dungeon_prize_enum__ = __webpack_require__("../../../../../src/models/dungeon-prize.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__ = __webpack_require__("../../../../../src/models/dungeon.model.ts");


var Items = (function () {
    function Items() {
        this.tunic = 1;
        this.sword = 0;
        this.shield = 0;
        this.moonPearl = false;
        this.bow = 0;
        this.boomerang = 0;
        this.hookshot = false;
        this.bombs = true;
        this.shovel = false;
        this.mushroom = false;
        this.powder = false;
        this.fireRod = false;
        this.iceRod = false;
        this.bombos = false;
        this.ether = false;
        this.quake = false;
        this.lamp = false;
        this.hammer = false;
        this.flute = false;
        this.net = false;
        this.book = false;
        this.bottle = 0;
        this.somaria = false;
        this.byrna = false;
        this.cape = false;
        this.mirror = false;
        this.boots = false;
        this.glove = 0;
        this.flippers = false;
        this.halfMagic = 0;
        this.crystal1 = false;
        this.crystal2 = false;
        this.crystal3 = false;
        this.crystal4 = false;
        this.crystal5 = false;
        this.crystal6 = false;
        this.crystal7 = false;
        this.crystalSwitch = false;
        this.spFlooded = false;
        this.ttBlindDelivered = false;
        this.ttBombableFloor = false;
        this.ipBlockPushed = false;
        this.damFlooded = false;
        this.pendantCourage = false;
        this.pendantPower = false;
        this.pendantWisdom = false;
        this.agahnim = 0;
        this.agahnim2 = false;
        this.ganon = false;
        this.lwMapOpen = false;
        this.dwMapOpen = false;
        this.mmMedallionChecked = false;
        this.trMedallionChecked = false;
        this.hasPurpleChest = false;
        this.hasBigBomb = false;
        this.hasBlacksmiths = false;
        this.oldManRescued = false;
        this.blacksmithsRescued = false;
        this.isFluteActivated = false;
        this.isTROpened = false;
        this.iceArmosDefeated = false;
        this.lanmo2Defeated = false;
        this.moldorms2Defeated = false;
        this.triforcePieces = 0;
        this.gameState = 0;
        this.currentRegionInMap = 0;
        this.dungeonItemsArray = [];
        this.stats = {
            totalCount: 0,
            overworldCount: 0,
            dungeonCount: 0,
            capacityUpgrades: 0,
            heartPieces: 0,
            heartContainers: 0,
            maps: 0,
            compasses: 0,
            sks: 0,
            bks: 0,
            bigChests: 0,
            bosses: 0,
            itemsPreGTBK: 0,
            totalItemsPreGTBK: 0,
            sword0B: 0,
            sword1B: 0,
            sword2B: 0,
            sword3B: 0,
            sword4B: 0,
            preBoots: 0,
            preMirror: 0,
            preFlute: 0,
            preGlove: 0,
            preMitts: 0,
            preBow: 0,
            preSilvers: 0,
            prePearl: 0,
            preHammer: 0,
            preMS: 0,
            preFireRod: 0,
            preIceRod: 0,
            preHook: 0,
            preLamp: 0,
            preSomaria: 0,
            preFlippers: 0,
            preDW: 0,
            preGo: 0,
            preGanon: 0,
            startTime: 0,
            rupeeCount: 0,
        };
        this.preEachDun = [];
        this.preEachPendant = {};
        this.preEachMedallion = {};
        this.gtChestCount = 0;
        this.startingHearts = 3;
        this.startingItemCount = [];
        this.visitedDungeon = [];
        this.crystalList = [
            'crystal1',
            'crystal2',
            'crystal3',
            'crystal4',
            'crystal5',
            'crystal6',
            'crystal7',
        ];
        this.dungeonItemNames = ['map', 'compass', 'smallKey', 'bigKey'];
        this.dungeonItemIndex = 0;
    }
    Object.defineProperty(Items.prototype, "totalHealth", {
        get: function () {
            return (this.startingHearts + this.stats.heartContainers + Math.floor(this.stats.heartPieces / 4));
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.setup = function (dungeonItemsShuffle, isMystery, dungeonsData, isFullMap, bosses, isInverted) {
        var _this = this;
        this.dungeonItemsShuffle = dungeonItemsShuffle;
        switch (dungeonItemsShuffle) {
            case 'standard':
                this.startingItemCount = [6, 3, 2, 2, 1, 5, 6, 2, 4, 3, 2, 6, 20];
                this.dungeonItemIndex = 0;
                break;
            case 'mc':
                this.startingItemCount = [7, 5, 4, 4, 1, 7, 8, 4, 6, 5, 4, 8, 22];
                this.dungeonItemIndex = 2;
                break;
            case 'mcs':
                this.startingItemCount = [8, 5, 5, 5, 3, 13, 9, 7, 7, 7, 7, 12, 26];
                this.dungeonItemIndex = 3;
                break;
            case 'full':
                this.startingItemCount = [8, 6, 6, 6, 3, 14, 10, 8, 8, 8, 8, 13, 27];
                this.dungeonItemIndex = 4;
        }
        if (isMystery) {
            this.startingItemCount = [8, 6, 6, 6, 3, 14, 10, 8, 8, 8, 8, 13, 27];
            this.dungeonItemIndex = 4;
        }
        if (isFullMap) {
            this.startingItemCount[11]--;
        }
        __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].dungeonNames.forEach(function (dungeonName, index) {
            if (index === 0) {
                _this.dungeonItemsArray.push(new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_prize_enum__["a" /* DungeonPrize */]('Hyrule Castle', _this.startingItemCount[0], '', -1));
            }
            else if (__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].crystalDungeonNames.includes(dungeonName)) {
                _this.dungeonItemsArray.push(new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_prize_enum__["a" /* DungeonPrize */](dungeonName, _this.startingItemCount[index], dungeonsData[index - 1].dungeonPrize, bosses[__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].crystalDungeonNames.indexOf(dungeonName)]));
            }
            else {
                _this.dungeonItemsArray.push(new __WEBPACK_IMPORTED_MODULE_0__models_dungeon_prize_enum__["a" /* DungeonPrize */](dungeonName, _this.startingItemCount[index], dungeonsData[index - 1].dungeonPrize, -1));
            }
        });
        this.stats.startTime = Date.now();
        this.preEachDun = [0, 0, 0, 0, 0, 0, 0];
        this.visitedDungeon = [false, false, false, false, false, false, false, false, false, false];
        this.preEachPendant = {
            pendantCourage: 0,
            pendantPower: 0,
            pendantWisdom: 0,
        };
        this.preEachMedallion = {
            bombos: 0,
            ether: 0,
            quake: 0,
        };
    };
    Items.prototype.add = function (itemName, dungeonName, isDungeonItem) {
        var _this = this;
        if (isDungeonItem === undefined) {
            isDungeonItem = false;
        }
        if (itemName) {
            var nonCountableItems = [
                'flood',
                'blind',
                'tt-bomb',
                'switch',
                'ip-switch-room',
                'crystal1',
                'crystal2',
                'crystal3',
                'crystal4',
                'crystal5',
                'crystal6',
                'crystal7',
                'pendantCourage',
                'pendantPower',
                'pendantWisdom',
                'Agahnim',
                'Agahnim 2',
                'Ganon',
            ];
            var bossItems = [
                'crystal1',
                'crystal2',
                'crystal3',
                'crystal4',
                'crystal5',
                'crystal6',
                'crystal7',
                'pendantCourage',
                'pendantPower',
                'pendantWisdom',
                'Agahnim',
                'Agahnim 2',
                'Ganon',
            ];
            if (nonCountableItems.indexOf(itemName) === -1 && !isDungeonItem) {
                this.stats.totalCount++;
                if (dungeonName === 'Hyrule Castle' || __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].dungeonsWithDunItemsCount.indexOf(dungeonName) > -1) {
                    this.stats.dungeonCount++;
                }
                else {
                    this.stats.overworldCount++;
                }
            }
            if (bossItems.indexOf(itemName) > -1 && !this[itemName]) {
                this.stats.bosses++;
                switch (this.sword) {
                    case 0:
                        this.stats.sword0B++;
                        break;
                    case 1:
                        this.stats.sword1B++;
                        break;
                    case 2:
                        this.stats.sword2B++;
                        break;
                    case 3:
                        this.stats.sword3B++;
                        break;
                    case 4:
                        this.stats.sword4B++;
                }
                if (itemName.indexOf('crystal') > -1) {
                    this.preEachDun[+itemName.charAt(7) - 1] = this.stats.totalCount;
                }
                else if (itemName.indexOf('pendant') > -1) {
                    this.preEachPendant[itemName] = this.stats.totalCount;
                }
            }
            switch (itemName) {
                case 'bottle':
                    this.bottle++;
                    break;
                case 'bow':
                    if (this.bow === 0) {
                        this.stats.preBow = this.stats.totalCount;
                    }
                    else {
                        this.stats.preSilvers = this.stats.totalCount;
                    }
                    this.bow++;
                    break;
                case 'boomerang':
                    this.boomerang++;
                    break;
                case 'magicBoomerang':
                    this.boomerang += 2;
                    break;
                case 'mirror':
                    this.mirror = true;
                    this.stats.preMirror = this.stats.totalCount;
                    break;
                case 'boots':
                    this.boots = true;
                    this.stats.preBoots = this.stats.totalCount;
                    break;
                case 'flute':
                    this.flute = true;
                    this.stats.preFlute = this.stats.totalCount;
                    break;
                case 'hammer':
                    this.hammer = true;
                    this.stats.preHammer = this.stats.totalCount;
                    break;
                case 'fireRod':
                    this.fireRod = true;
                    this.stats.preFireRod = this.stats.totalCount;
                    break;
                case 'iceRod':
                    this.iceRod = true;
                    this.stats.preIceRod = this.stats.totalCount;
                    break;
                case 'flippers':
                    this.flippers = true;
                    this.stats.preFlippers = this.stats.totalCount;
                    break;
                case 'somaria':
                    this.somaria = true;
                    this.stats.preSomaria = this.stats.totalCount;
                    break;
                case 'lamp':
                    this.lamp = true;
                    this.stats.preLamp = this.stats.totalCount;
                    break;
                case 'hookshot':
                    this.hookshot = true;
                    this.stats.preHook = this.stats.totalCount;
                    break;
                case 'moonPearl':
                    this.moonPearl = true;
                    this.stats.prePearl = this.stats.totalCount;
                    break;
                case 'silvers':
                    this.bow += 1;
                    break;
                case 'halfMagic':
                    this.halfMagic++;
                    break;
                case 'tunic':
                    this.tunic++;
                    break;
                case 'glove':
                    this.glove++;
                    if (this.glove === 1) {
                        this.stats.preGlove = this.stats.totalCount;
                    }
                    if (this.glove === 2) {
                        this.stats.preMitts = this.stats.totalCount;
                    }
                    break;
                case 'shield':
                    this.shield++;
                    break;
                case 'sword':
                    this.sword++;
                    if (this.sword === 2) {
                        this.stats.preMS = this.stats.totalCount;
                    }
                    break;
                case 'Agahnim':
                    this.agahnim = 1;
                    break;
                case 'Agahnim 2':
                    this.agahnim2 = true;
                    break;
                case 'pieceHeart':
                    this.stats.heartPieces++;
                    break;
                case 'heartContainer':
                    this.stats.heartContainers++;
                    break;
                case 'flood':
                    this.spFlooded = true;
                    break;
                case 'blind':
                    this.ttBlindDelivered = true;
                    break;
                case 'tt-bomb':
                    this.ttBombableFloor = true;
                    break;
                case 'Ganon':
                    this.ganon = true;
                    this.stats.preGanon = this.stats.totalCount;
                    break;
                case 'switch':
                    this.crystalSwitch = !this.crystalSwitch;
                    break;
                case 'ip-switch-room':
                    this.ipBlockPushed = true;
                    break;
                case 'triforcePieces':
                    this.triforcePieces++;
                    break;
                case 'bombos':
                    this.bombos = true;
                    this.preEachMedallion.bombos = this.stats.totalCount;
                    break;
                case 'ether':
                    this.ether = true;
                    this.preEachMedallion.ether = this.stats.totalCount;
                    break;
                case 'quake':
                    this.quake = true;
                    this.preEachMedallion.quake = this.stats.totalCount;
                    break;
                default:
                    if (this[itemName] !== undefined) {
                        this[itemName] = true;
                    }
            }
            this.dungeonItemNames.forEach(function (dunItemName) {
                if (itemName.indexOf(dunItemName) > -1) {
                    _this.addDungeonItem(itemName);
                }
            });
            if (this.stats.preDW === 0 &&
                this.moonPearl &&
                (this.agahnim || (this.hammer && this.glove) || this.glove === 2)) {
                this.stats.preDW = this.stats.totalCount;
            }
            if (dungeonName === 'Ganons Tower' && this.stats.itemsPreGTBK === 0) {
                this.gtChestCount++;
                if (itemName === 'bigKey-12') {
                    this.stats.itemsPreGTBK = this.gtChestCount;
                }
            }
            if (itemName === 'bigKey-12') {
                this.stats.totalItemsPreGTBK = this.stats.totalCount;
            }
            if (itemName.indexOf('Upgrade') > -1) {
                this.stats.capacityUpgrades++;
            }
            var stateToggleItems = ['flood', 'blind', 'tt-bomb', 'switch', 'ip-switch-room'];
            if (!isDungeonItem &&
                itemName.indexOf('crystal') === -1 &&
                itemName.indexOf('pendant') === -1 &&
                itemName.indexOf('Agahnim 2') === -1 &&
                itemName.indexOf('Ganon') === -1 &&
                stateToggleItems.indexOf(itemName) === -1 &&
                __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].dungeonsWithDunItemsCount.indexOf(dungeonName) > -1) {
                var isTrackedDungeonItem = false;
                this.dungeonItemNames.forEach(function (dunItemName, dunItemIndex) {
                    if (itemName.indexOf(dunItemName) > -1 && dunItemIndex >= _this.dungeonItemIndex) {
                        isTrackedDungeonItem = true;
                    }
                });
                if (!isTrackedDungeonItem) {
                    this.dungeonItemsArray[__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].dungeonNames.indexOf(dungeonName)].itemsLeft--;
                }
            }
            if (itemName.indexOf('rupee') > -1) {
                var rupeeValue = +itemName.split('rupee')[0];
                this.stats.rupeeCount += rupeeValue;
            }
        }
    };
    Items.prototype.addDungeonItem = function (itemKey) {
        var itemType = itemKey.split('-')[0];
        var dungeonIndex = +itemKey.split('-')[1];
        switch (itemType) {
            case 'smallKey':
                this.dungeonItemsArray[dungeonIndex].smallKeys++;
                this.stats.sks++;
                break;
            case 'bigKey':
                this.dungeonItemsArray[dungeonIndex].hasBigKey = true;
                this.stats.bks++;
                break;
            case 'map':
                this.dungeonItemsArray[dungeonIndex].hasMap = true;
                this.stats.maps++;
                break;
            case 'compass':
                this.dungeonItemsArray[dungeonIndex].hasCompass = true;
                this.stats.compasses++;
        }
    };
    Items.prototype.remove = function (itemName, dungeonName) {
        switch (itemName) {
            case 'Mushroom':
                this.mushroom = false;
                break;
            case 'flood':
                this.spFlooded = false;
                break;
            case 'blind':
                this.ttBlindDelivered = false;
                break;
            case 'Key':
                this.dungeonItemsArray[__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].dungeonNames.indexOf(dungeonName)].smallKeys--;
        }
    };
    Items.prototype.hasLightsource = function (settings) {
        return this.lamp || settings.canGlitch;
    };
    Items.prototype.hasBottle = function () {
        return this.bottle > 0;
    };
    Items.prototype.hasBow = function () {
        return this.bow >= 1;
    };
    Items.prototype.hasFiresource = function () {
        return this.lamp || this.fireRod;
    };
    Items.prototype.hasMagicExtension = function (settings) {
        return this.halfMagic || this.bottle > 0 || settings.canGlitch;
    };
    Items.prototype.hasSilvers = function () {
        return this.bow >= 2;
    };
    Items.prototype.hasMeltyPower = function (settings) {
        return this.fireRod || (this.bombos && (this.sword || settings.weapons === 'swordless'));
    };
    Items.prototype.hasBeamReflection = function (settings) {
        return this.cape || this.byrna || this.shield === 3;
    };
    Items.prototype.hasInvincibilityItem = function (settings) {
        return this.cape || this.byrna || settings.canGlitch;
    };
    Items.prototype.hasMedallion = function (dungeonKey, settings) {
        return ((!!this.ether && !!this.bombos && !!this.quake) ||
            (dungeonKey === 'mm' && this.mmMedallionChecked
                ? this[settings.mmMedallion]
                : dungeonKey === 'tr' && !!this.trMedallionChecked && this[settings.trMedallion]));
    };
    Items.prototype.hasMagicBars = function (requiredBars) {
        var availableBars = 1;
        availableBars += this.bottle;
        if (this.halfMagic > 0) {
            availableBars *= this.halfMagic * 2;
        }
        return availableBars >= requiredBars;
    };
    Items.prototype.canWestDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return this.flute || (this.glove && (this.lamp || canGlitch));
    };
    Items.prototype.canEastDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return this.canWestDeathMountain(canGlitch) && (this.hookshot || (this.mirror && this.hammer));
    };
    Items.prototype.canDarkEastDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return this.glove === 2 && this.canEastDeathMountain(canGlitch);
    };
    Items.prototype.canDarkWestDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return this.canWestDeathMountain(canGlitch) && this.moonPearl;
    };
    Items.prototype.canNorthEastDarkWorld = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return (this.agahnim ||
            (this.hammer && this.glove && this.moonPearl) ||
            (this.glove === 2 && (this.flippers || canGlitch) && this.moonPearl));
    };
    Items.prototype.canNorthWestDarkWorld = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return (((this.canNorthEastDarkWorld(canGlitch) &&
            this.hookshot &&
            (this.hammer || this.glove || this.flippers || (canGlitch && this.canAncillaFF()))) ||
            (this.hammer && this.glove) ||
            this.glove === 2) &&
            this.moonPearl);
    };
    Items.prototype.canSouthDarkWorld = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return (this.moonPearl &&
            ((this.hammer && this.glove) ||
                this.glove === 2 ||
                this.canNorthWestDarkWorld(canGlitch) ||
                (this.hammer && this.agahnim)));
    };
    Items.prototype.canMire = function (settings) {
        if (settings.mode === 'inverted') {
            return (this.flute && this.canInvertedLW()) || (this.mirror && this.canInvertedLW());
        }
        else {
            return this.flute && this.glove === 2;
        }
    };
    Items.prototype.canInvertedLW = function () {
        return (this.agahnim > 0 || (this.moonPearl && ((this.hammer && this.glove > 0) || this.glove === 2)));
    };
    Items.prototype.canInvertedEastDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return ((this.glove === 2 && this.canInvertedEastDarkDeathMountain(canGlitch)) ||
            (this.moonPearl && this.hookshot && this.canWestDeathMountain(canGlitch)));
    };
    Items.prototype.canInvertedEastDarkDeathMountain = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return (this.flute && this.canInvertedLW()) || (this.glove && (this.lamp || canGlitch));
    };
    Items.prototype.canInvertedNEDW = function (canGlitch) {
        if (canGlitch === void 0) { canGlitch = false; }
        return this.hammer || this.flippers || (this.mirror && this.canInvertedLW()) || canGlitch;
    };
    Items.prototype.canEnterGT = function (settings) {
        var _this = this;
        var crystalCount = 0;
        this.crystalList.forEach(function (crystal) {
            if (_this[crystal]) {
                crystalCount++;
            }
        });
        return crystalCount >= settings.towerCrystals;
    };
    Items.prototype.canDamageGanon = function (settings) {
        var _this = this;
        var crystalCount = 0;
        if (settings.goal === 'pedestal' || settings.goal === 'triforce') {
            return false;
        }
        this.crystalList.forEach(function (crystal) {
            if (_this[crystal]) {
                crystalCount++;
            }
        });
        return (!!(settings.goal === 'dungeons'
            ? this.pendantCourage &&
                this.pendantPower &&
                this.pendantWisdom &&
                this.agahnim &&
                this.agahnim2 &&
                crystalCount >= 7
            : crystalCount >= settings.ganonCrystals) &&
            (this.lamp || this.fireRod) &&
            (this.sword >= 2 ||
                (settings.weapons === 'swordless' && this.hammer && this.hasSilvers() && this.hasBow())));
    };
    Items.prototype.canAncillaFF = function () {
        return this.hasBow() || this.somaria || this.boomerang >= 2 || this.iceRod;
    };
    Items.prototype.getDungeonItems = function (dungeonName) {
        return this.dungeonItemsArray[__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].allDungeonNames.indexOf(dungeonName)];
    };
    Items.prototype.getAllDungeonItems = function () {
        var _this = this;
        var result = [];
        __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].crystalDungeonNames.forEach(function (dungeonName) {
            result.push({
                name: dungeonName,
                items: _this.dungeonItemsArray[__WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].allDungeonNames.indexOf(dungeonName)],
            });
        });
        return result;
    };
    Items.prototype.visitDungeon = function (dungeonName) {
        var crystalIndex = __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].crystalDungeonNames.indexOf(dungeonName);
        if (crystalIndex > -1 && this.dungeonItemsShuffle === 'standard') {
            this.visitedDungeon[crystalIndex] = true;
            var allDungeonIndex = __WEBPACK_IMPORTED_MODULE_1__models_dungeon_model__["a" /* Dungeon */].allDungeonNames.indexOf(dungeonName);
            if (this.dungeonItemsArray[allDungeonIndex].mapPrizeStatus === __WEBPACK_IMPORTED_MODULE_0__models_dungeon_prize_enum__["a" /* DungeonPrize */].UNKNOWN) {
                this.dungeonItemsArray[allDungeonIndex].listenThisMap();
            }
        }
    };
    Items.prototype.hasVisitedDungeon = function (dungeonName) {
        var crystalDungeonList = [
            'Eastern Palace',
            'Desert Palace',
            'Tower of Hera',
            'Palace of Darkness',
            'Swamp Palace',
            'Skull Woods',
            'Thieves Town',
            'Ice Palace',
            'Misery Mire',
            'Turtle Rock',
        ];
        return crystalDungeonList.indexOf(dungeonName) > -1 && this.visitedDungeon[crystalDungeonList.indexOf(dungeonName)];
    };
    return Items;
}());



/***/ }),

/***/ "../../../../../src/models/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(location, x, y, canGet, canView, item, region, canGlitch, canViewGlitch) {
        if (canGet === void 0) { canGet = null; }
        if (canView === void 0) { canView = null; }
        if (region === void 0) { region = ''; }
        if (canGlitch === void 0) { canGlitch = null; }
        if (canViewGlitch === void 0) { canViewGlitch = null; }
        this.location = location;
        this.x = x;
        this.y = y;
        if (canGet) {
            this.canGet = canGet;
        }
        if (canView) {
            this.canView = canView;
        }
        if (canGlitch) {
            this.canGlitch = canGlitch;
        }
        if (canViewGlitch) {
            this.canViewGlitch = canViewGlitch;
        }
        this.region = region;
        this.item = item;
        this.isOpened = false;
    }
    return Location;
}());



/***/ }),

/***/ "../../../../../src/models/map-node.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapNode; });
var MapNode = (function () {
    function MapNode() {
    }
    return MapNode;
}());



/***/ }),

/***/ "../../../../../src/models/node-status.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeStatus; });
var NodeStatus = (function () {
    function NodeStatus() {
    }
    NodeStatus.OPEN_DOOR = 0;
    NodeStatus.SK_LOCKED = 1;
    NodeStatus.BK_LOCKED = 2;
    NodeStatus.WARP = 3;
    NodeStatus.HOLE = 4;
    NodeStatus.WATER_WARP = 5;
    NodeStatus.SQ_OPTION = 6;
    NodeStatus.PORTAL = 7;
    NodeStatus.MIRROR = 10;
    NodeStatus.ITEM_LOCKED = 11;
    NodeStatus.BIG_CHEST = 12;
    NodeStatus.VIEWABLE_CLOSED_CHEST = 13;
    NodeStatus.CLOSED_CHEST = 14;
    NodeStatus.OPEN_CHEST = 15;
    NodeStatus.OPEN_BIG_CHEST = 16;
    NodeStatus.BOSS = 17;
    NodeStatus.GROUND_KEY = 18;
    NodeStatus.EMPTY = 19;
    NodeStatus.SWITCH = 20;
    NodeStatus.VIEWABLE_GETABLE_CLOSED_CHEST = 21;
    NodeStatus.WATER_SWITCH = 22;
    NodeStatus.FROG = 23;
    NodeStatus.PURPLE_CHEST = 24;
    NodeStatus.BIG_BOMB = 25;
    NodeStatus.BLIND_RESCUE = 26;
    NodeStatus.TT_BOMB_FLOOR = 27;
    NodeStatus.MEDALLION = 28;
    NodeStatus.MEDALLION_OPENED = 29;
    NodeStatus.BOOK_CHECKABLE_ITEM = 30;
    NodeStatus.SWITCH_FLIPPED = 31;
    NodeStatus.PEDESTAL = 32;
    NodeStatus.DUCK = 33;
    NodeStatus.BLIND_RESCUED = 34;
    NodeStatus.TT_BOMB_FLOOR_DONE = 35;
    NodeStatus.WATER_SWITCH_FLIPPED = 36;
    NodeStatus.OPEN_DOOR_PUSH_BLOCK = 37;
    NodeStatus.HINT = 38;
    NodeStatus.DEFEATED_BOSS = 39;
    NodeStatus.SIGNPOST = 40;
    return NodeStatus;
}());



/***/ }),

/***/ "../../../../../src/models/overworld-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverworldData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dark_world_locations__ = __webpack_require__("../../../../../src/data/dark-world-locations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_light_world_locations__ = __webpack_require__("../../../../../src/data/light-world-locations.ts");


var OverworldData = (function () {
    function OverworldData(items, config) {
        this.lwLocations = __WEBPACK_IMPORTED_MODULE_1__data_light_world_locations__["a" /* LightWorldLocations */].setup(items, config);
        this.dwLocations = __WEBPACK_IMPORTED_MODULE_0__data_dark_world_locations__["a" /* DarkWorldLocations */].setup(items, config);
    }
    return OverworldData;
}());



/***/ }),

/***/ "../../../../../src/pipes/item-log-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemLogFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemLogFilterPipe = (function () {
    function ItemLogFilterPipe(_itemNamesService) {
        this._itemNamesService = _itemNamesService;
    }
    ItemLogFilterPipe.prototype.transform = function (items, filterArgs) {
        var _this = this;
        if (!items || !filterArgs) {
            return items;
        }
        var specialItems = ['blind', 'tt-bomb', 'switch', 'flood', 'ip-switch-room', 'hintTile'];
        return items.filter(function (entry) {
            return ((!!specialItems.includes(entry.shortName) && filterArgs.searchQuery === '') ||
                ((!filterArgs.onlyImportantShown ||
                    entry.longName.indexOf('Agahnim') !== -1 ||
                    entry.longName.indexOf('Ganon') !== -1 ||
                    entry.item === 'hint' ||
                    !!__WEBPACK_IMPORTED_MODULE_1__services_item_names_service__["a" /* ItemNamesService */].isTrackableItem(+entry.item) ||
                    entry.type === 'view' ||
                    entry.type === 'cant') &&
                    (filterArgs.searchQuery == '' ||
                        entry.location.toLowerCase().indexOf(filterArgs.searchQuery.toLowerCase()) > -1 ||
                        entry.region.toLowerCase().indexOf(filterArgs.searchQuery.toLowerCase()) > -1 ||
                        ((entry.type !== 'view' ||
                            (!entry.shortName.includes('smallKey') &&
                                !entry.shortName.includes('bigKey') &&
                                !entry.shortName.includes('map') &&
                                !entry.shortName.includes('compass'))) &&
                            (_this._itemNamesService
                                .getItemById(entry.item)
                                .longName.toLowerCase()
                                .indexOf(filterArgs.searchQuery.toLowerCase()) > -1 ||
                                entry.item.toLowerCase().indexOf(filterArgs.searchQuery.toLowerCase()) > -1)))));
        });
    };
    ItemLogFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'itemLogFilter',
            pure: false,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_names_service__["a" /* ItemNamesService */]])
    ], ItemLogFilterPipe);
    return ItemLogFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_names_service__ = __webpack_require__("../../../../../src/services/item-names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_seed_parser_service__ = __webpack_require__("../../../../../src/services/seed-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_config_model__ = __webpack_require__("../../../../../src/models/config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__ = __webpack_require__("../../../../../src/models/node-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_dungeon_node_model__ = __webpack_require__("../../../../../src/models/dungeon-node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_overworld_data_model__ = __webpack_require__("../../../../../src/models/overworld-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dungeons_eastern_palace_setup__ = __webpack_require__("../../../../../src/dungeons/eastern-palace.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dungeons_desert_palace_setup__ = __webpack_require__("../../../../../src/dungeons/desert-palace.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dungeons_tower_of_hera_setup__ = __webpack_require__("../../../../../src/dungeons/tower-of-hera.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dungeons_aga_tower_setup__ = __webpack_require__("../../../../../src/dungeons/aga-tower.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dungeons_palace_of_darkness_setup__ = __webpack_require__("../../../../../src/dungeons/palace-of-darkness.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dungeons_swamp_palace_setup__ = __webpack_require__("../../../../../src/dungeons/swamp-palace.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dungeons_skull_woods_setup__ = __webpack_require__("../../../../../src/dungeons/skull-woods.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dungeons_thieves_town_setup__ = __webpack_require__("../../../../../src/dungeons/thieves-town.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dungeons_ice_palace_setup__ = __webpack_require__("../../../../../src/dungeons/ice-palace.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dungeons_misery_mire_setup__ = __webpack_require__("../../../../../src/dungeons/misery-mire.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dungeons_turtle_rock_setup__ = __webpack_require__("../../../../../src/dungeons/turtle-rock.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dungeons_ganons_tower_setup__ = __webpack_require__("../../../../../src/dungeons/ganons-tower.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dungeons_light_world_setup__ = __webpack_require__("../../../../../src/dungeons/light-world.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dungeons_dark_world_setup__ = __webpack_require__("../../../../../src/dungeons/dark-world.setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dungeons_hyrule_castle_setup__ = __webpack_require__("../../../../../src/dungeons/hyrule-castle.setup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var GameService = (function () {
    function GameService(_itemNamesService) {
        this._itemNamesService = _itemNamesService;
        this.dungeonAbbrevs = [
            'ep',
            'dp',
            'toh',
            'ct',
            'pod',
            'sp',
            'sw',
            'tt',
            'ip',
            'mm',
            'tr',
            'gt',
            'lw',
            'dw',
            'hc',
        ];
        this.lwDuns = ['Eastern Palace', 'Desert Palace', 'Tower of Hera', 'Aga Tower'];
        this.dwDuns = [
            'Palace of Darkness',
            'Swamp Palace',
            'Skull Woods',
            'Thieves Town',
            'Ice Palace',
            'Misery Mire',
            'Turtle Rock',
            'Ganons Tower',
        ];
        this.prizesToReplace = {};
    }
    GameService.prototype.loadSeed = function (seedData, seedNumber, isLogic, isFullMap, bosses, hints) {
        var seedMetadata = __WEBPACK_IMPORTED_MODULE_2__services_seed_parser_service__["a" /* SeedParser */].collectSeedMetadata(seedData);
        this.config = new __WEBPACK_IMPORTED_MODULE_3__models_config_model__["a" /* Config */](seedNumber, seedMetadata, bosses, isLogic, isFullMap);
        if (hints && hints.length > 0) {
            this.config.hints = this.shuffleArray(hints);
            this.config.hintsEnabled = true;
        }
        if (seedMetadata.mode === 'inverted') {
            this.config.isFullMap = false;
            this.lwDuns = ['Eastern Palace', 'Desert Palace', 'Tower of Hera', 'Ganons Tower'];
            this.dwDuns = [
                'Palace of Darkness',
                'Swamp Palace',
                'Skull Woods',
                'Thieves Town',
                'Ice Palace',
                'Misery Mire',
                'Turtle Rock',
                'Aga Tower',
            ];
        }
        else {
            this.lwDuns = ['Eastern Palace', 'Desert Palace', 'Tower of Hera', 'Aga Tower'];
            this.dwDuns = [
                'Palace of Darkness',
                'Swamp Palace',
                'Skull Woods',
                'Thieves Town',
                'Ice Palace',
                'Misery Mire',
                'Turtle Rock',
                'Ganons Tower',
            ];
        }
        var seedPayload = seedData.substr(40);
        var itemCodes = [];
        for (var idx = 0; idx < seedPayload.length / 3; idx++) {
            itemCodes.push((+seedPayload.substr(idx * 3, 3)).toString());
        }
        var itemData = itemCodes;
        this.dungeonsData = [];
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_7__dungeons_eastern_palace_setup__["a" /* EasternPalaceSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_8__dungeons_desert_palace_setup__["a" /* DesertPalaceSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_9__dungeons_tower_of_hera_setup__["a" /* TowerOfHeraSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_10__dungeons_aga_tower_setup__["a" /* AgaTowerSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_11__dungeons_palace_of_darkness_setup__["a" /* PalaceOfDarknessSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_12__dungeons_swamp_palace_setup__["a" /* SwampPalaceSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_13__dungeons_skull_woods_setup__["a" /* SkullWoodsSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_14__dungeons_thieves_town_setup__["a" /* ThievesTownSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_15__dungeons_ice_palace_setup__["a" /* IcePalaceSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_16__dungeons_misery_mire_setup__["a" /* MiseryMireSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_17__dungeons_turtle_rock_setup__["a" /* TurtleRockSetup */].setup(itemData, this.config));
        this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_18__dungeons_ganons_tower_setup__["a" /* GanonsTowerSetup */].setup(itemData, this.config));
        if (this.config.isEnemizer) {
            this.dungeonsData.forEach(function (dungeon, dungeonIndex) {
                if (dungeonIndex !== 3 && dungeonIndex !== 11) {
                    dungeon.dungeonMaps[dungeon.dungeonMaps.length - 1].nodes.forEach(function (node) {
                        if (node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOSS) {
                            var bossIndex = dungeonIndex;
                            if (bossIndex > 3) {
                                bossIndex--;
                            }
                            node.canOpen = __WEBPACK_IMPORTED_MODULE_5__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[bosses[bossIndex]];
                            node.canGlitch = __WEBPACK_IMPORTED_MODULE_5__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[bosses[bossIndex]];
                        }
                    });
                }
                if (dungeonIndex === 11) {
                    var bossIndex = 10;
                    dungeon.dungeonMaps.forEach(function (floor) {
                        floor.nodes.forEach(function (node) {
                            if (node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BOSS && bossIndex <= 12) {
                                node.canOpen = __WEBPACK_IMPORTED_MODULE_5__models_dungeon_node_model__["a" /* DungeonNode */].bossReqs[bosses[bossIndex]];
                                node.canGlitch = __WEBPACK_IMPORTED_MODULE_5__models_dungeon_node_model__["a" /* DungeonNode */].glitchedBossReqs[bosses[bossIndex]];
                                bossIndex++;
                            }
                        });
                    });
                }
            });
        }
        if (this.config.isFullMap) {
            this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_19__dungeons_light_world_setup__["a" /* LightWorldSetup */].setup(itemData, this.config));
            this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_20__dungeons_dark_world_setup__["a" /* DarkWorldSetup */].setup(itemData, this.config));
            this.dungeonsData.push(__WEBPACK_IMPORTED_MODULE_21__dungeons_hyrule_castle_setup__["a" /* HyruleCastleSetup */].setup(itemData, this.config));
        }
        else {
            this.overworldData = new __WEBPACK_IMPORTED_MODULE_6__models_overworld_data_model__["a" /* OverworldData */](itemData, this.config);
        }
        this.config.data = seedData;
        this.setupData(this.config.isFullMap);
    };
    GameService.prototype.setupData = function (isFullMap) {
        var _this = this;
        if (!isFullMap) {
            this.overworldData.lwLocations.forEach(function (location) {
                var statusClass = '';
                statusClass =
                    location.item[0] === 'warp'
                        ? 'invisible'
                        : location.item[0] === 'tr-ledge'
                            ? 'tr-ledge'
                            : location.canView
                                ? 'viewable'
                                : location.canGet
                                    ? 'unavailable'
                                    : 'getable';
                if (location.item[0].charAt(0) === '=') {
                    statusClass += ' hint';
                }
                else if (location.item[0].includes('requirement')) {
                    statusClass += ' sign';
                }
                location.mapNode = {
                    x: location.x * 2,
                    y: location.y,
                    tooltip: location.location,
                    id: location.location,
                    status: statusClass,
                    prize: location.item,
                    originalNode: location,
                    isFaded: false,
                };
            });
            this.overworldData.dwLocations.forEach(function (location) {
                var statusClass = '';
                statusClass =
                    location.item[0] === 'warp'
                        ? 'invisible'
                        : location.canView
                            ? 'viewable'
                            : location.canGet
                                ? 'unavailable'
                                : 'getable';
                if (location.item[0].charAt(0) === '=') {
                    statusClass += ' hint';
                }
                else if (location.item[0].includes('requirement')) {
                    statusClass += ' sign';
                }
                location.mapNode = {
                    x: (location.x - 50) * 2,
                    y: location.y,
                    tooltip: location.location,
                    id: location.location,
                    status: statusClass,
                    prize: location.item,
                    originalNode: location,
                    isFaded: false,
                };
            });
        }
        var doorStatuses = [
            __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].OPEN_DOOR,
            __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].SK_LOCKED,
            __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].BK_LOCKED,
            __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].WATER_WARP,
            __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].HOLE,
        ];
        this.dungeonsData.forEach(function (dungeon) {
            dungeon.dungeonMaps.forEach(function (floor) {
                floor.nodes.forEach(function (node, nodeIndex) {
                    if (node.name === '' && doorStatuses.indexOf(+node.status) > -1) {
                        var targetId = node.content;
                        var found = false;
                        dungeon.dungeonMaps.forEach(function (searchFloor) {
                            if (searchFloor.id === targetId) {
                                node.name = searchFloor.name;
                                found = true;
                            }
                        });
                        if (!found) {
                            _this.dungeonsData.forEach(function (searchDungeon) {
                                if (!found) {
                                    searchDungeon.dungeonMaps.forEach(function (searchFloor) {
                                        if (searchFloor.id === targetId) {
                                            node.name = searchFloor.name;
                                            found = true;
                                        }
                                    });
                                }
                            });
                        }
                    }
                    node.mapNode = {
                        x: node.x ? node.x : nodeIndex * 10 + 15,
                        y: node.y ? node.y : node.status === __WEBPACK_IMPORTED_MODULE_4__models_node_status_enum__["a" /* NodeStatus */].MIRROR ? 30 : 15,
                        tooltip: node.name,
                        id: node.content,
                        status: node.status.toString(),
                        prize: [node.content],
                        originalNode: node,
                        isFaded: false,
                    };
                });
            });
            dungeon.mapNode = {
                x: dungeon.x,
                y: dungeon.y,
                tooltip: dungeon.name,
                id: dungeon.startingMap.id,
                status: 'unavailable',
                prize: [],
                originalNode: dungeon,
                isFaded: false,
            };
        });
    };
    GameService.prototype.updateData = function (items, mapName, viewType) {
        var _this = this;
        if (viewType === undefined) {
            viewType = '';
        }
        if (this.overworldData) {
            this.overworldData.lwLocations.forEach(function (location) {
                if (location.item[0] === 'tr-ledge') {
                    if (location.canGet(items, _this.config) ||
                        (_this.config.canGlitch && location.canGlitch && location.canGlitch(items, _this.config))) {
                        location.mapNode.status = 'tr-ledge';
                    }
                    else {
                        location.mapNode.status = 'invisible';
                    }
                }
                else if (location.item[0] === 'warp') {
                    if (location.canGet(items, _this.config) ||
                        (_this.config.canGlitch && location.canGlitch && location.canGlitch(items, _this.config))) {
                        location.mapNode.status = 'warp';
                    }
                    else {
                        location.mapNode.status = 'invisible';
                    }
                }
                else if (location.location !== 'Ether Tablet' &&
                    location.location !== 'Bombos Tablet' &&
                    (location.mapNode.status === 'now-getable' ||
                        ((location.mapNode.status === 'viewable' ||
                            location.mapNode.status === 'g-viewable' ||
                            (location.mapNode.status === 'g-getable' && location.canView) ||
                            location.mapNode.status === 'now-g-getable') &&
                            location.canGet(items, _this.config)) ||
                        (location.canView && location.canGet(items, _this.config) && location.mapNode.status === 'unavailable'))) {
                    if (location.mapNode.isFaded || location.mapNode.status === 'g-getable') {
                        location.mapNode.status = 'getable';
                    }
                    else {
                        location.mapNode.status = 'now-getable';
                    }
                }
                else if (!location.canGet || location.canGet(items, _this.config)) {
                    location.mapNode.status = 'getable';
                }
                else if (location.location !== 'Ether Tablet' &&
                    location.location !== 'Bombos Tablet' &&
                    (location.mapNode.status === 'now-g-getable' ||
                        ((location.mapNode.status === 'viewable' || location.mapNode.status === 'g-viewable') &&
                            _this.config.canGlitch &&
                            location.canGlitch &&
                            location.canGlitch(items, _this.config)) ||
                        (_this.config.canGlitch &&
                            location.canViewGlitch &&
                            _this.config.canGlitch &&
                            location.canGlitch &&
                            location.canGlitch(items, _this.config) &&
                            location.mapNode.status === 'unavailable'))) {
                    if (location.mapNode.isFaded) {
                        location.mapNode.status = 'g-getable';
                    }
                    else {
                        location.mapNode.status = 'now-g-getable';
                    }
                }
                else if (_this.config.canGlitch && location.canGlitch && location.canGlitch(items, _this.config)) {
                    location.mapNode.status = 'g-getable';
                }
                else if (location.canView && location.canView(items, _this.config)) {
                    location.mapNode.status = 'viewable';
                }
                else if (_this.config.canGlitch && location.canViewGlitch && location.canViewGlitch(items, _this.config)) {
                    location.mapNode.status = 'g-viewable';
                }
                else {
                    location.mapNode.status = 'unavailable';
                }
                if (location.item[0].charAt(0) === '=') {
                    location.mapNode.status += ' hint';
                }
                else if (location.item[0].includes('requirement')) {
                    // Original bug: writes to bare `status` variable instead of `location.mapNode.status`,
                    // making sign append a no-op for LW locations.
                    // Original: status += " sign"
                    // Fixed: location.mapNode.status += ' sign';
                    location.mapNode.status += ' sign';
                }
                location.item = _this.checkReplacePrizes(location.item);
                location.mapNode.prize = _this.checkReplacePrizes(location.mapNode.prize);
            });
            this.overworldData.dwLocations.forEach(function (location) {
                if (location.item[0] === 'warp') {
                    if (location.canGet(items, _this.config) ||
                        (_this.config.canGlitch && location.canGlitch && location.canGlitch(items, _this.config))) {
                        location.mapNode.status = 'warp';
                    }
                    else {
                        location.mapNode.status = 'invisible';
                    }
                }
                else {
                    var statusClass = '';
                    if (!location.mapNode.isFaded &&
                        _this.config.canGlitch &&
                        location.canViewGlitch &&
                        location.canViewGlitch(items, _this.config) &&
                        !location.canGet(items, _this.config) &&
                        !location.canView(items, _this.config)) {
                        statusClass += ' g-viewable';
                    }
                    else if (location.mapNode.status.indexOf('now-getable') > -1 ||
                        (location.canView &&
                            (location.mapNode.status.indexOf('unavailable') > -1 ||
                                location.mapNode.status.indexOf('viewable') > -1) &&
                            location.canGet(items, _this.config)) ||
                        (location.mapNode.status.indexOf('now-g-getable') > -1 && location.canGet(items, _this.config))) {
                        statusClass += ' now-getable';
                    }
                    else if (location.mapNode.status.indexOf('now-g-getable') > -1 ||
                        (!location.mapNode.isFaded &&
                            _this.config.canGlitch &&
                            location.canViewGlitch &&
                            _this.config.canGlitch &&
                            location.canGlitch &&
                            location.canGlitch(items, _this.config) &&
                            location.mapNode.status === 'unavailable')) {
                        statusClass += ' now-g-getable';
                    }
                    else if (!location.canGet || location.canGet(items, _this.config)) {
                        statusClass += ' getable';
                    }
                    else if (_this.config.canGlitch && location.canGlitch && location.canGlitch(items, _this.config)) {
                        statusClass += ' g-getable';
                    }
                    else if (location.canView && location.canView(items, _this.config)) {
                        statusClass += ' viewable';
                    }
                    else {
                        statusClass += ' unavailable';
                    }
                    location.mapNode.status = statusClass;
                    if (location.item[0].charAt(0) === '=') {
                        location.mapNode.status += ' hint';
                    }
                    else if (location.item[0].includes('requirement')) {
                        statusClass += ' sign';
                    }
                }
                location.item = _this.checkReplacePrizes(location.item);
                location.mapNode.prize = _this.checkReplacePrizes(location.mapNode.prize);
            });
            if (mapName === 'light-world') {
                this.dungeonsData.forEach(function (dungeon) {
                    if (_this.lwDuns.indexOf(dungeon.name) > -1) {
                        var dungeonStatus = 'unavailable';
                        if (dungeon.canEnter(items, _this.config)) {
                            dungeonStatus = 'getable';
                        }
                        dungeon.mapNode.status = dungeonStatus;
                    }
                });
            }
            else if (mapName === 'dark-world') {
                this.dungeonsData.forEach(function (dungeon) {
                    if (_this.lwDuns.indexOf(dungeon.name) === -1) {
                        var dungeonStatus = 'unavailable';
                        if (_this.config.mode === 'inverted') {
                            dungeonStatus = 'reachable';
                        }
                        else {
                            if (viewType && viewType !== 'all') {
                                if (((viewType === 'ip' && dungeon.name === 'Ice Palace') ||
                                    (viewType === 'mire' && dungeon.name === 'Misery Mire') ||
                                    (viewType === 'dm' && (dungeon.name === 'Turtle Rock' || dungeon.name === 'Ganons Tower')) ||
                                    (viewType === 'ow' &&
                                        dungeon.name !== 'Ice Palace' &&
                                        dungeon.name !== 'Misery Mire' &&
                                        dungeon.name !== 'Turtle Rock' &&
                                        dungeon.name !== 'Ganons Tower')) &&
                                    dungeon.canEnter(items, _this.config)) {
                                    dungeonStatus = 'getable';
                                }
                            }
                            else if (dungeon.canEnter(items, _this.config)) {
                                dungeonStatus = 'getable';
                            }
                            dungeonStatus =
                                (viewType === 'ip' && dungeon.name === 'Ice Palace') ||
                                    (viewType === 'mire' && dungeon.name === 'Misery Mire') ||
                                    (viewType === 'dm' && (dungeon.name === 'Turtle Rock' || dungeon.name === 'Ganons Tower')) ||
                                    (viewType === 'ow' &&
                                        dungeon.name !== 'Ice Palace' &&
                                        dungeon.name !== 'Misery Mire' &&
                                        dungeon.name !== 'Turtle Rock' &&
                                        dungeon.name !== 'Ganons Tower')
                                    ? 'reachable'
                                    : 'unavailable';
                        }
                        if (dungeon.canEnter(items, _this.config)) {
                            dungeonStatus += ' getable';
                        }
                        else {
                            dungeonStatus += ' unaccessible';
                        }
                        dungeon.mapNode.status = dungeonStatus;
                    }
                });
            }
        }
        this.dungeonsData.forEach(function (dungeon) {
            dungeon.dungeonMaps.forEach(function (floor) {
                floor.nodes.forEach(function (node) {
                    node.content = _this.checkReplacePrizes([node.content])[0];
                    node.mapNode.prize = _this.checkReplacePrizes(node.mapNode.prize);
                });
            });
        });
    };
    GameService.prototype.getAccessibleDungeons = function (items, worldName, filter) {
        var _this = this;
        if (filter === undefined) {
            filter = '';
        }
        var results = [];
        if (worldName === 'light-world') {
            this.dungeonsData.forEach(function (dungeon) {
                if (_this.lwDuns.indexOf(dungeon.name) > -1) {
                    var dungeonStatus = 'unavailable';
                    if (dungeon.canEnter(items, _this.config)) {
                        dungeonStatus = 'getable';
                    }
                    results.push({
                        x: dungeon.x,
                        y: dungeon.y,
                        tooltip: dungeon.name,
                        id: dungeon.startingMap.id,
                        status: dungeonStatus,
                        prize: [],
                        originalNode: dungeon,
                        isFaded: false,
                    });
                }
            });
        }
        else if (worldName === 'dark-world') {
            this.dungeonsData.forEach(function (dungeon) {
                if (_this.lwDuns.indexOf(dungeon.name) === -1) {
                    var dungeonStatus = 'unavailable';
                    if (filter && filter !== 'all') {
                        if (((filter === 'ip' && dungeon.name === 'Ice Palace') ||
                            (filter === 'mire' && dungeon.name === 'Misery Mire') ||
                            (filter === 'dm' && (dungeon.name === 'Turtle Rock' || dungeon.name === 'Ganons Tower')) ||
                            (filter === 'ow' &&
                                dungeon.name !== 'Ice Palace' &&
                                dungeon.name !== 'Misery Mire' &&
                                dungeon.name !== 'Turtle Rock' &&
                                dungeon.name !== 'Ganons Tower')) &&
                            dungeon.canEnter(items, _this.config)) {
                            dungeonStatus = 'getable';
                        }
                    }
                    else if (dungeon.canEnter(items, _this.config)) {
                        dungeonStatus = 'getable';
                    }
                    dungeonStatus =
                        (filter === 'ip' && dungeon.name === 'Ice Palace') ||
                            (filter === 'mire' && dungeon.name === 'Misery Mire') ||
                            (filter === 'dm' && (dungeon.name === 'Turtle Rock' || dungeon.name === 'Ganons Tower')) ||
                            (filter === 'ow' &&
                                dungeon.name !== 'Ice Palace' &&
                                dungeon.name !== 'Misery Mire' &&
                                dungeon.name !== 'Turtle Rock' &&
                                dungeon.name !== 'Ganons Tower')
                            ? 'reachable'
                            : 'unavailable';
                    if (dungeon.canEnter(items, _this.config)) {
                        dungeonStatus += ' getable';
                    }
                    else {
                        dungeonStatus += ' unaccessible';
                    }
                    results.push({
                        x: dungeon.x,
                        y: dungeon.y,
                        tooltip: dungeon.name,
                        id: dungeon.startingMap.id,
                        status: dungeonStatus,
                        prize: [],
                        originalNode: dungeon,
                        isFaded: false,
                    });
                }
            });
        }
        return results;
    };
    GameService.prototype.getDungeonPrizes = function () {
        var _this = this;
        var prizes = {};
        this.dungeonsData.forEach(function (dungeon, dungeonIndex) {
            if (dungeonIndex !== 3 && dungeonIndex !== 11) {
                prizes[dungeon.name] = _this._itemNamesService.getItemById(dungeon.dungeonPrize).longName;
            }
        });
        return prizes;
    };
    GameService.prototype.getMap = function (mapId) {
        var _this = this;
        var foundMap;
        var foundDungeon;
        var dungeonIndex = this.dungeonAbbrevs.indexOf(mapId.split('-')[0]);
        if (dungeonIndex > -1 &&
            (this.dungeonsData[dungeonIndex].dungeonMaps.forEach(function (floor) {
                if (floor.id === mapId) {
                    foundMap = floor;
                    foundDungeon = _this.dungeonsData[dungeonIndex];
                }
            }),
                foundMap)) {
            return [foundMap, foundDungeon];
        }
        else {
            console.log('Map not found');
            return [null, null];
        }
    };
    GameService.prototype.addItemReplacement = function (itemName) {
        var item = this._itemNamesService.getItemByLongName(itemName);
        if (!this.prizesToReplace[item.id]) {
            this.prizesToReplace[item.id] = '7';
        }
    };
    GameService.prototype.checkReplacePrizes = function (prizes) {
        var _this = this;
        return prizes.map(function (prizeId) {
            if (_this.prizesToReplace[prizeId]) {
                return _this.prizesToReplace[prizeId];
            }
            else {
                return prizeId;
            }
        });
    };
    GameService.prototype.shuffleArray = function (array) {
        var temp;
        var randomIndex;
        for (var remaining = array.length; remaining !== 0;) {
            randomIndex = Math.floor(Math.random() * remaining);
            remaining -= 1;
            temp = array[remaining];
            array[remaining] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_item_names_service__["a" /* ItemNamesService */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/services/item-array.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemArrayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemArrayService = (function () {
    function ItemArrayService() {
    }
    /**
     * Generates item array from spoiler log data
     * This replaces scripts/generateItemArray.js as a native Angular service
     */
    ItemArrayService.prototype.generateItemArray = function (spoilerLogData, itemNameToFullItemMap, spoilerToDetailedMap, detailedMap) {
        var itemNameToFullItemMap = typeof itemNameToFullItemMap === 'string'
            ? JSON.parse(itemNameToFullItemMap)
            : itemNameToFullItemMap;
        var spoilerToDetailedMap = typeof spoilerToDetailedMap === 'string'
            ? JSON.parse(spoilerToDetailedMap)
            : spoilerToDetailedMap;
        var detailedMap = typeof detailedMap === 'string'
            ? JSON.parse(detailedMap)
            : detailedMap;
        var spoilerLog = typeof spoilerLogData === 'string'
            ? JSON.parse(spoilerLogData)
            : spoilerLogData;
        // Initialize array with "000" for all positions (0-225 based on detailed map values)
        var itemArray = new Array(226).fill("000");
        function stripSuffix(name) {
            return name.replace(/:1$/, '');
        }
        function processSection(sectionName, section) {
            for (var locationName in section) {
                if (!section.hasOwnProperty(locationName))
                    continue;
                var itemName = section[locationName];
                // Skip non-item entries (like boss fights, etc.)
                if (typeof itemName !== 'string' || itemName.indexOf(':') === -1) {
                    continue;
                }
                // Strip :1 from location and item names
                var cleanLocationName = stripSuffix(locationName);
                var cleanItemName = stripSuffix(itemName);
                // Look up location in spoilerToDetailedMap
                var locationMapping = spoilerToDetailedMap[cleanLocationName];
                if (!locationMapping) {
                    continue;
                }
                var locationIndex = locationMapping.detailedMapValue;
                // Look up item in itemNameToFullItemMap
                var itemMapping = itemNameToFullItemMap[cleanItemName];
                if (!itemMapping) {
                    continue;
                }
                var itemId = itemMapping.id;
                // Place item ID at the correct location index (formatted as 3-digit number with leading zeros)
                if (locationIndex >= 0 && locationIndex < itemArray.length) {
                    var itemStr = itemId != null ? itemId.toString() : '000';
                    if (itemId === -1 || itemId == null) {
                        itemStr = '000';
                    }
                    while (itemStr.length < 3) {
                        itemStr = '0' + itemStr;
                    }
                    itemArray[locationIndex] = itemStr;
                }
            }
        }
        // Process each major section of the spoiler log
        for (var sectionName in spoilerLog) {
            if (!spoilerLog.hasOwnProperty(sectionName))
                continue;
            if (sectionName === 'meta' || sectionName === 'Bosses' || sectionName === 'playthrough' || sectionName === 'Shops' || sectionName === 'Equipped') {
                continue;
            }
            var section = spoilerLog[sectionName];
            if (typeof section === 'object' && section !== null) {
                processSection(sectionName, section);
            }
        }
        return itemArray;
    };
    /**
     * Generates seed metadata prefix string from spoiler log
     * This replaces scripts/generateSeedMetadataPrefix.js as a native Angular service
     */
    ItemArrayService.prototype.generateSeedMetadataPrefix = function (spoilerLog) {
        if (!spoilerLog || !spoilerLog.meta) {
            throw new Error('Invalid spoiler log: missing meta section');
        }
        var meta = spoilerLog.meta;
        var special = spoilerLog.Special;
        function stripSuffix(name) {
            return name.replace(/:1$/, '');
        }
        // Position mappings based on collectSeedMetadata function
        var positionMappings = {};
        positionMappings[20] = meta.item_placement === 'basic' ? '0' : meta.item_placement === 'advanced' ? '1' : '0';
        positionMappings[21] = meta.dungeon_items === 'standard' ? '0' : meta.dungeon_items === 'mc' ? '1' : meta.dungeon_items === 'mcs' ? '2' : meta.dungeon_items === 'full' ? '3' : '0';
        positionMappings[22] = meta.accessibility === 'items' ? '0' : meta.accessibility === 'locations' ? '1' : meta.accessibility === 'none' ? '2' : '0';
        positionMappings[23] = meta.goal === 'ganon' ? '0' : meta.goal === 'dungeons' ? '1' : meta.goal === 'pedestal' ? '2' : meta.goal === 'triforce' ? '3' : meta.goal === 'fast_ganon' ? '4' : '0';
        positionMappings[24] = meta.entry_crystals_tower || '0';
        positionMappings[25] = meta.entry_crystals_ganon || '0';
        positionMappings[26] = meta.mode === 'standard' ? '0' : meta.mode === 'open' ? '1' : meta.mode === 'inverted' ? '2' : '0';
        positionMappings[27] = (meta.enemizer || 'none') === 'none' ? '0' : meta.enemizer === 'simple' ? '1' : meta.enemizer === 'full' ? '2' : meta.enemizer === 'random' ? '3' : '0';
        positionMappings[28] = meta.weapons === 'randomized' ? '0' : meta.weapons === 'assured' ? '1' : meta.weapons === 'vanilla' ? '2' : meta.weapons === 'swordless' ? '3' : '0';
        // Position 29: mmMedallion
        var mmMedallion = 'bombos';
        if (special && special['Misery Mire Medallion:1']) {
            mmMedallion = stripSuffix(special['Misery Mire Medallion:1']).toLowerCase();
        }
        positionMappings[29] = mmMedallion === 'bombos' ? '0' : mmMedallion === 'ether' ? '1' : mmMedallion === 'quake' ? '2' : '0';
        // Position 30: trMedallion
        var trMedallion = 'bombos';
        if (special && special['Turtle Rock Medallion:1']) {
            trMedallion = stripSuffix(special['Turtle Rock Medallion:1']).toLowerCase();
        }
        positionMappings[30] = trMedallion === 'bombos' ? '0' : trMedallion === 'ether' ? '1' : trMedallion === 'quake' ? '2' : '0';
        // Build the prefix string (positions 0-39 for 40 total characters)
        var prefix = '';
        prefix += '000001xXJAo0A0ebe3WP'; // Using the example seed from your sample
        // Add the metadata positions (20-30)
        for (var i = 20; i <= 30; i++) {
            prefix += positionMappings[i];
        }
        // Add padding zeros for positions 31-39 to reach 40 characters total
        for (var i = 31; i <= 39; i++) {
            prefix += '0';
        }
        return prefix;
    };
    ItemArrayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ItemArrayService);
    return ItemArrayService;
}());



/***/ }),

/***/ "../../../../../src/services/item-names.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemNamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemNamesService = (function () {
    function ItemNamesService() {
        this.itemNames = [];
        this.initialized = false;
    }
    ItemNamesService.prototype.init = function () {
        this.itemNames = [];
        this.itemNames.push({
            id: 1,
            shortName: '10arrowUpgrade',
            longName: 'Arrow Upgrade (10)',
        });
        this.itemNames.push({
            id: 2,
            shortName: '5arrowUpgrade',
            longName: 'Arrow Upgrade (5)',
        });
        this.itemNames.push({
            id: 3,
            shortName: '10bombUpgrade',
            longName: 'Bomb Upgrade (10)',
        });
        this.itemNames.push({
            id: 4,
            shortName: '5bombUpgrade',
            longName: 'Bomb Upgrade (5)',
        });
        this.itemNames.push({
            id: 6,
            shortName: '50rupees',
            longName: 'Fifty Rupees',
        });
        this.itemNames.push({
            id: 7,
            shortName: '5rupees',
            longName: 'Five Rupees',
        });
        this.itemNames.push({
            id: 8,
            shortName: 'heartContainer',
            longName: 'Heart Container',
        });
        this.itemNames.push({
            id: 9,
            shortName: 'heartContainer',
            longName: 'Heart Container (refill)',
        });
        this.itemNames.push({
            id: 11,
            shortName: '100rupees',
            longName: 'One Hundred Rupees',
        });
        this.itemNames.push({
            id: 12,
            shortName: '1rupee',
            longName: 'One Rupee',
        });
        this.itemNames.push({
            id: 13,
            shortName: 'pieceHeart',
            longName: 'Piece of Heart',
        });
        this.itemNames.push({
            id: 14,
            shortName: '10arrows',
            longName: 'Ten Arrows',
        });
        this.itemNames.push({
            id: 15,
            shortName: '3bombs',
            longName: 'Three Bombs',
        });
        this.itemNames.push({
            id: 16,
            shortName: '300rupees',
            longName: 'Three Hundred Rupees',
        });
        this.itemNames.push({
            id: 17,
            shortName: '20rupees',
            longName: 'Twenty Rupees',
        });
        this.itemNames.push({
            id: 18,
            shortName: 'singleArrow',
            longName: 'Single Arrow',
        });
        this.itemNames.push({
            id: 19,
            shortName: '10bombs',
            longName: 'Ten Bombs',
        });
        this.itemNames.push({
            id: 20,
            shortName: '20rupeesb',
            longName: 'Twenty Rupees',
        });
        this.itemNames.push({
            id: 100,
            shortName: 'bombos',
            longName: 'Bombos',
        });
        this.itemNames.push({
            id: 101,
            shortName: 'book',
            longName: 'Book of Mudora',
        });
        this.itemNames.push({
            id: 102,
            shortName: 'bottle',
            longName: 'Bottle',
        });
        this.itemNames.push({
            id: 103,
            shortName: 'n-bow',
            longName: 'Bow',
        });
        this.itemNames.push({
            id: 104,
            shortName: 'net',
            longName: 'Bug Catching Net',
        });
        this.itemNames.push({
            id: 105,
            shortName: 'byrna',
            longName: 'Cane of Byrna',
        });
        this.itemNames.push({
            id: 106,
            shortName: 'somaria',
            longName: 'Cane of Somaria',
        });
        this.itemNames.push({
            id: 107,
            shortName: 'crystal1',
            longName: 'Crystal 1',
        });
        this.itemNames.push({
            id: 108,
            shortName: 'crystal2',
            longName: 'Crystal 2',
        });
        this.itemNames.push({
            id: 109,
            shortName: 'crystal3',
            longName: 'Crystal 3',
        });
        this.itemNames.push({
            id: 110,
            shortName: 'crystal4',
            longName: 'Crystal 4',
        });
        this.itemNames.push({
            id: 111,
            shortName: 'crystal5',
            longName: 'Crystal 5',
        });
        this.itemNames.push({
            id: 112,
            shortName: 'crystal6',
            longName: 'Crystal 6',
        });
        this.itemNames.push({
            id: 113,
            shortName: 'crystal7',
            longName: 'Crystal 7',
        });
        this.itemNames.push({
            id: 114,
            shortName: 'ether',
            longName: 'Ether',
        });
        this.itemNames.push({
            id: 115,
            shortName: 'fireRod',
            longName: 'Fire Rod',
        });
        this.itemNames.push({
            id: 116,
            shortName: 'flippers',
            longName: 'Flippers',
        });
        this.itemNames.push({
            id: 117,
            shortName: 'flute',
            longName: 'Flute',
        });
        this.itemNames.push({
            id: 118,
            shortName: 'halfMagic',
            longName: 'Half Magic',
        });
        this.itemNames.push({
            id: 119,
            shortName: 'hammer',
            longName: 'Hammer',
        });
        this.itemNames.push({
            id: 120,
            shortName: 'hookshot',
            longName: 'Hookshot',
        });
        this.itemNames.push({
            id: 121,
            shortName: 'iceRod',
            longName: 'Ice Rod',
        });
        this.itemNames.push({
            id: 122,
            shortName: 'lamp',
            longName: 'Lamp',
        });
        this.itemNames.push({
            id: 123,
            shortName: 'cape',
            longName: 'Magic Cape',
        });
        this.itemNames.push({
            id: 124,
            shortName: 'mirror',
            longName: 'Magic Mirror',
        });
        this.itemNames.push({
            id: 125,
            shortName: 'powder',
            longName: 'Magic Powder',
        });
        this.itemNames.push({
            id: 126,
            shortName: 'moonPearl',
            longName: 'Moon Pearl',
        });
        this.itemNames.push({
            id: 127,
            shortName: 'mushroom',
            longName: 'Mushroom',
        });
        this.itemNames.push({
            id: 128,
            shortName: 'boots',
            longName: 'Pegasus Boots',
        });
        this.itemNames.push({
            id: 129,
            shortName: 'pendantCourage',
            longName: 'Pendant of Courage',
        });
        this.itemNames.push({
            id: 130,
            shortName: 'pendantPower',
            longName: 'Pendant of Power',
        });
        this.itemNames.push({
            id: 131,
            shortName: 'pendantWisdom',
            longName: 'Pendant of Wisdom',
        });
        this.itemNames.push({
            id: 132,
            shortName: 'quake',
            longName: 'Quake',
        });
        this.itemNames.push({
            id: 133,
            shortName: 'shovel',
            longName: 'Shovel',
        });
        this.itemNames.push({
            id: 134,
            shortName: 'silvers',
            longName: 'Silver Arrows',
        });
        this.itemNames.push({
            id: 135,
            shortName: 'boomerang',
            longName: 'Boomerang',
        });
        this.itemNames.push({
            id: 136,
            shortName: 'magicBoomerang',
            longName: 'Magical Boomerang',
        });
        this.itemNames.push({
            id: 150,
            shortName: 'tunic',
            longName: 'Progressive Armor',
        });
        this.itemNames.push({
            id: 151,
            shortName: 'glove',
            longName: 'Progressive Glove',
        });
        this.itemNames.push({
            id: 152,
            shortName: 'shield',
            longName: 'Progressive Shield',
        });
        this.itemNames.push({
            id: 153,
            shortName: 'sword',
            longName: 'Progressive Sword',
        });
        this.itemNames.push({
            id: 154,
            shortName: 'bow',
            longName: 'Progressive Bow',
        });
        this.itemNames.push({
            id: 201,
            shortName: 'bigKey-1',
            longName: 'Eastern Palace Big Key',
        });
        this.itemNames.push({
            id: 202,
            shortName: 'bigKey-2',
            longName: 'Desert Palace Big Key',
        });
        this.itemNames.push({
            id: 203,
            shortName: 'bigKey-3',
            longName: 'Tower of Hera Big Key',
        });
        this.itemNames.push({
            id: 205,
            shortName: 'bigKey-5',
            longName: 'Palace of Darkness Big Key',
        });
        this.itemNames.push({
            id: 206,
            shortName: 'bigKey-6',
            longName: 'Swamp Palace Big Key',
        });
        this.itemNames.push({
            id: 207,
            shortName: 'bigKey-7',
            longName: 'Skull Woods Big Key',
        });
        this.itemNames.push({
            id: 208,
            shortName: 'bigKey-8',
            longName: 'Thieves Town Big Key',
        });
        this.itemNames.push({
            id: 209,
            shortName: 'bigKey-9',
            longName: 'Ice Palace Big Key',
        });
        this.itemNames.push({
            id: 210,
            shortName: 'bigKey-10',
            longName: 'Misery Mire Big Key',
        });
        this.itemNames.push({
            id: 211,
            shortName: 'bigKey-11',
            longName: 'Turtle Rock Big Key',
        });
        this.itemNames.push({
            id: 212,
            shortName: 'bigKey-12',
            longName: 'Ganons Tower Big Key',
        });
        this.itemNames.push({
            id: 213,
            shortName: 'smallKey-0',
            longName: 'Sewers Key',
        });
        this.itemNames.push({
            id: 215,
            shortName: 'smallKey-2',
            longName: 'Desert Palace Key',
        });
        this.itemNames.push({
            id: 216,
            shortName: 'smallKey-3',
            longName: 'Tower of Hera Key',
        });
        this.itemNames.push({
            id: 217,
            shortName: 'smallKey-4',
            longName: 'Agahnims Tower Key',
        });
        this.itemNames.push({
            id: 218,
            shortName: 'smallKey-5',
            longName: 'Palace of Darkness Key',
        });
        this.itemNames.push({
            id: 219,
            shortName: 'smallKey-6',
            longName: 'Swamp Palace Key',
        });
        this.itemNames.push({
            id: 220,
            shortName: 'smallKey-7',
            longName: 'Skull Woods Key',
        });
        this.itemNames.push({
            id: 221,
            shortName: 'smallKey-8',
            longName: 'Thieves Town Key',
        });
        this.itemNames.push({
            id: 222,
            shortName: 'smallKey-9',
            longName: 'Ice Palace Key',
        });
        this.itemNames.push({
            id: 223,
            shortName: 'smallKey-10',
            longName: 'Misery Mire Key',
        });
        this.itemNames.push({
            id: 224,
            shortName: 'smallKey-11',
            longName: 'Turtle Rock Key',
        });
        this.itemNames.push({
            id: 225,
            shortName: 'smallKey-12',
            longName: 'Ganons Tower Key',
        });
        this.itemNames.push({
            id: 226,
            shortName: 'map-0',
            longName: 'Sewers Map',
        });
        this.itemNames.push({
            id: 227,
            shortName: 'map-1',
            longName: 'Eastern Palace Map',
        });
        this.itemNames.push({
            id: 228,
            shortName: 'map-2',
            longName: 'Desert Palace Map',
        });
        this.itemNames.push({
            id: 229,
            shortName: 'map-3',
            longName: 'Tower of Hera Map',
        });
        this.itemNames.push({
            id: 230,
            shortName: 'map-4',
            longName: 'Agahnims Tower Map',
        });
        this.itemNames.push({
            id: 231,
            shortName: 'map-5',
            longName: 'Palace of Darkness Map',
        });
        this.itemNames.push({
            id: 232,
            shortName: 'map-6',
            longName: 'Swamp Palace Map',
        });
        this.itemNames.push({
            id: 233,
            shortName: 'map-7',
            longName: 'Skull Woods Map',
        });
        this.itemNames.push({
            id: 234,
            shortName: 'map-8',
            longName: 'Thieves Town Map',
        });
        this.itemNames.push({
            id: 235,
            shortName: 'map-9',
            longName: 'Ice Palace Map',
        });
        this.itemNames.push({
            id: 236,
            shortName: 'map-10',
            longName: 'Misery Mire Map',
        });
        this.itemNames.push({
            id: 237,
            shortName: 'map-11',
            longName: 'Turtle Rock Map',
        });
        this.itemNames.push({
            id: 238,
            shortName: 'map-12',
            longName: 'Ganons Tower Map',
        });
        this.itemNames.push({
            id: 240,
            shortName: 'compass-1',
            longName: 'Eastern Palace Compass',
        });
        this.itemNames.push({
            id: 241,
            shortName: 'compass-2',
            longName: 'Desert Palace Compass',
        });
        this.itemNames.push({
            id: 242,
            shortName: 'compass-3',
            longName: 'Tower of Hera Compass',
        });
        this.itemNames.push({
            id: 244,
            shortName: 'compass-5',
            longName: 'Palace of Darkness Compass',
        });
        this.itemNames.push({
            id: 245,
            shortName: 'compass-6',
            longName: 'Swamp Palace Compass',
        });
        this.itemNames.push({
            id: 246,
            shortName: 'compass-7',
            longName: 'Skull Woods Compass',
        });
        this.itemNames.push({
            id: 247,
            shortName: 'compass-8',
            longName: 'Thieves Town Compass',
        });
        this.itemNames.push({
            id: 248,
            shortName: 'compass-9',
            longName: 'Ice Palace Compass',
        });
        this.itemNames.push({
            id: 249,
            shortName: 'compass-10',
            longName: 'Misery Mire Compass',
        });
        this.itemNames.push({
            id: 250,
            shortName: 'compass-11',
            longName: 'Turtle Rock Compass',
        });
        this.itemNames.push({
            id: 251,
            shortName: 'compass-12',
            longName: 'Ganons Tower Compass',
        });
        this.itemNames.push({
            id: 270,
            shortName: 'triforce',
            longName: 'Triforce',
        });
        this.itemNames.push({
            id: 271,
            shortName: 'triforcePieces',
            longName: 'Triforce Piece',
        });
        this.itemNames.push({
            id: 300,
            shortName: 'flood',
            longName: 'Water Switch',
        });
        this.itemNames.push({
            id: 301,
            shortName: 'blind',
            longName: 'Rescued Blind',
        });
        this.itemNames.push({
            id: 302,
            shortName: 'tt-bomb',
            longName: 'Bombed the Floor',
        });
        this.itemNames.push({
            id: 303,
            shortName: 'switch',
            longName: 'Switch',
        });
        this.itemNames.push({
            id: 304,
            shortName: 'ip-switch-room',
            longName: 'Pushed the Block',
        });
        this.initialized = true;
    };
    ItemNamesService.prototype.getItemById = function (itemId) {
        if (!this.initialized) {
            this.init();
        }
        for (var i = 0; i < this.itemNames.length; i++) {
            if (this.itemNames[i].id === +itemId) {
                return this.itemNames[i];
            }
        }
        return {
            id: 0,
            shortName: itemId,
            longName: itemId,
        };
    };
    ItemNamesService.prototype.getItemByShortName = function (shortName) {
        if (!this.initialized) {
            this.init();
        }
        for (var i = 0; i < this.itemNames.length; i++) {
            if (this.itemNames[i].shortName === shortName) {
                return this.itemNames[i];
            }
        }
        return null;
    };
    ItemNamesService.prototype.getItemByLongName = function (longName) {
        if (!this.initialized) {
            this.init();
        }
        for (var i = 0; i < this.itemNames.length; i++) {
            if (this.itemNames[i].longName === longName) {
                return this.itemNames[i];
            }
        }
        return null;
    };
    ItemNamesService.prototype.convertItemName = function (itemId, eventType, items) {
        var item = this.getItemById(itemId);
        var displayLongName = item.longName;
        var displayShortName = item.shortName;
        var offset = eventType === 'view' ? 1 : 0;
        if (item.longName.indexOf('Progressive') > -1) {
            switch (item.shortName) {
                case 'glove':
                    switch (items.glove + offset) {
                        case 1:
                            displayLongName = 'Power Gloves';
                            break;
                        case 2:
                            displayLongName = 'Titan Mitts';
                    }
                    displayShortName = 'glove' + (items.glove + offset);
                    break;
                case 'sword':
                    switch (items.sword + offset) {
                        case 1:
                            displayLongName = 'Fighter Sword';
                            break;
                        case 2:
                            displayLongName = 'Master Sword';
                            break;
                        case 3:
                            displayLongName = 'Tempered Sword';
                            break;
                        case 4:
                            displayLongName = 'Golden Sword';
                    }
                    displayShortName = 'sword' + (items.sword + offset);
                    break;
                case 'tunic':
                    switch (items.tunic + offset) {
                        case 2:
                            displayLongName = 'Blue Mail';
                            break;
                        case 3:
                            displayLongName = 'Red Mail';
                    }
                    displayShortName = 'tunic' + (items.tunic + offset);
                    break;
                case 'shield':
                    switch (items.shield + offset) {
                        case 1:
                            displayLongName = 'Blue Shield';
                            break;
                        case 2:
                            displayLongName = 'Red Shield';
                            break;
                        case 3:
                            displayLongName = 'Mirror Shield';
                    }
                    displayShortName = 'shield' + (items.shield + offset);
                    break;
                case 'bow':
                    switch (items.bow + offset) {
                        case 1:
                            displayLongName = 'Bow';
                            break;
                        case 2:
                            displayLongName = 'Silver Arrows';
                    }
                    displayShortName = 'bow' + (items.bow + offset);
            }
        }
        if (item.shortName === 'halfMagic') {
            switch (items.halfMagic + offset) {
                case 1:
                    displayLongName = 'Half Magic';
                    displayShortName = 'halfMagic';
                    break;
                case 2:
                    displayLongName = 'Quarter Magic';
                    displayShortName = 'quarterMagic';
            }
        }
        if (item.shortName === 'boomerang') {
            displayShortName = 'boomerang1';
        }
        if (item.shortName === 'magicBoomerang') {
            displayShortName = 'boomerang2';
        }
        if (item.shortName.indexOf('Agahnim') > -1) {
            displayShortName = 'agahnim1';
        }
        if (item.shortName.indexOf('crystal') > -1) {
            displayShortName = 'crystal';
        }
        return [displayShortName, displayLongName];
    };
    ItemNamesService.isItem = function (itemId) {
        return itemId >= 100;
    };
    ItemNamesService.isDungeonItem = function (itemId) {
        return itemId >= 200 && itemId <= 250;
    };
    ItemNamesService.isProgressiveItem = function (itemId) {
        return itemId >= 150 && itemId < 200;
    };
    ItemNamesService.isTrackableItem = function (itemId) {
        return itemId >= 100;
    };
    ItemNamesService.dungeonItemNames = ['smallKey', 'bigKey', 'map', 'compass'];
    ItemNamesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ItemNamesService);
    return ItemNamesService;
}());



/***/ }),

/***/ "../../../../../src/services/seed-parser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeedParser = (function () {
    function SeedParser() {
    }
    // Original used switch/case with no default - out-of-range values leave the field undefined.
    // A previous version of the deobfuscation used array-lookup with fallback defaults (e.g. || 'basic'),
    // which silently added safety not present in the original.
    SeedParser.collectSeedMetadata = function (seedData) {
        var metadata = {};
        metadata.seed = seedData.substr(0, 20);
        switch (seedData.substr(20, 1)) {
            case '0':
                metadata.item_placement = 'basic';
                break;
            case '1':
                metadata.item_placement = 'advanced';
                break;
        }
        switch (seedData.substr(21, 1)) {
            case '0':
                metadata.dungeon_items = 'standard';
                break;
            case '1':
                metadata.dungeon_items = 'mc';
                break;
            case '2':
                metadata.dungeon_items = 'mcs';
                break;
            case '3':
                metadata.dungeon_items = 'full';
                break;
        }
        switch (seedData.substr(22, 1)) {
            case '0':
                metadata.accessibility = 'items';
                break;
            case '1':
                metadata.accessibility = 'locations';
                break;
            case '2':
                metadata.accessibility = 'none';
                break;
        }
        switch (seedData.substr(23, 1)) {
            case '0':
                metadata.goal = 'ganon';
                break;
            case '1':
                metadata.goal = 'dungeons';
                break;
            case '2':
                metadata.goal = 'pedestal';
                break;
            case '3':
                metadata.goal = 'triforce';
                break;
            case '4':
                metadata.goal = 'fast_ganon';
                break;
        }
        metadata.entry_crystals_tower = seedData.substr(24, 1);
        metadata.entry_crystals_ganon = seedData.substr(25, 1);
        switch (seedData.substr(26, 1)) {
            case '0':
                metadata.mode = 'standard';
                break;
            case '1':
                metadata.mode = 'open';
                break;
            case '2':
                metadata.mode = 'inverted';
                break;
        }
        switch (seedData.substr(27, 1)) {
            case '0':
                metadata.enemizer = 'none';
                break;
            case '1':
                metadata.enemizer = 'simple';
                break;
            case '2':
                metadata.enemizer = 'full';
                break;
            case '3':
                metadata.enemizer = 'random';
                break;
        }
        switch (seedData.substr(28, 1)) {
            case '0':
                metadata.weapons = 'randomized';
                break;
            case '1':
                metadata.weapons = 'assured';
                break;
            case '2':
                metadata.weapons = 'vanilla';
                break;
            case '3':
                metadata.weapons = 'swordless';
                break;
        }
        switch (seedData.substr(29, 1)) {
            case '0':
                metadata.mmMedallion = 'bombos';
                break;
            case '1':
                metadata.mmMedallion = 'ether';
                break;
            case '2':
                metadata.mmMedallion = 'quake';
                break;
        }
        switch (seedData.substr(30, 1)) {
            case '0':
                metadata.trMedallion = 'bombos';
                break;
            case '1':
                metadata.trMedallion = 'ether';
                break;
            case '2':
                metadata.trMedallion = 'quake';
                break;
        }
        return metadata;
    };
    SeedParser.prototype.formatNumber = function (value, digits) {
        return '0'.repeat(digits - value.toString().length) + value.toString();
    };
    SeedParser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SeedParser);
    return SeedParser;
}());



/***/ }),

/***/ "../../../../../src/services/seed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_array_service__ = __webpack_require__("../../../../../src/services/item-array.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeedService = (function () {
    function SeedService(_http, _itemArrayService) {
        this._http = _http;
        this._itemArrayService = _itemArrayService;
        this._apiUrl = 'https://lttp-rando-seed-api.glitch.me/';
        this.webVersion = '4.1';
        if (true /* environment.production */) {
            this._apiUrl = 'https://lttp-rando-seed-api.glitch.me/';
        }
        else {
            this._apiUrl = 'https://lttp-rando-seed-api-dev.glitch.me/';
        }
    }
    SeedService.prototype.ping = function () {
        this._http.get(this._apiUrl);
    };
    SeedService.prototype.buildStringUrl = function (seedHash) {
        return 'https://alttpr.com/en/h/' + (seedHash || localStorage.getItem('seedHash'));
    };
    SeedService.prototype.buildStringLabel = function () {
        var seedHash = localStorage.getItem('seedHash');
        var seedStr = seedHash
            ? localStorage.getItem('seedHash') + ' -> ' + this.buildStringUrl(seedHash)
            : 'BrXZ47EgQR4Qq8A: (Using Default Seed)';
        return seedStr;
    };
    SeedService.prototype.getSeed = function (mode, params, isDaily, isQuals) {
        if (isDaily === void 0) { isDaily = false; }
        if (isQuals === void 0) { isQuals = false; }
        var url;
        var online = false;
        var seedStr = this.buildStringLabel();
        var fakeObservable = {
            prefix: localStorage.getItem('seedMetadataPrefix') || '000001xXJAo0A0ebe3WP10000010022000000000',
            itemArray: localStorage.getItem('itemArray'),
            seedData: {
                seed: seedStr,
                logic: '',
                variation: 'none',
                goal: 'ganon',
                mode: 'open',
                data: '000001xXJAo0A0ebe3WP10000010022000000000017017015017006013120006013017153017016013101017013013014008015136017124128013014012118014014006121017014015015015017017015015013013126102132006014017154013151151213017017226013117106227201152240015109153228215013202241111007013102014152013017013153013008015017015242203009008229216112217217013013008017017154016150008017013127150019006119013152133100123016013013116122015218218218218231218244205008218008008135102131219232115014013017245017206125108207220246220220013233015113234221017208114015247006129017235222013248209017222110249223210236008223223017107211224015224224007104224015105250237130225251015153016007007014238014011012225225017008017016014018225017212017006102014',
                hints: [],
                silversHint: 'Did you find the silver arrows in Dark World?',
                bosses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
                reqTower: '7',
                reqGanon: '7',
                error: null,
            },
            subscribe: function (success, failure) {
                if (fakeObservable.itemArray) {
                    fakeObservable.seedData.data = fakeObservable.prefix + fakeObservable.itemArray;
                }
                this.lastSeedTimestamp = Date.now();
                this.lastSeedParams = {};
                this.lastSeed = fakeObservable.seedData;
                success(fakeObservable.seedData);
            },
        };
        var offlineResult = Object.create(fakeObservable);
        if (isQuals) {
            url = this._apiUrl + 'api/tseed?v=' + this.webVersion;
            Object.keys(params).forEach(function (key) {
                url += '&' + key + '=' + params[key];
            });
        }
        else if (isDaily) {
            url = this._apiUrl + 'api/daily?v=' + this.webVersion + '&mode=' + mode;
        }
        else if (mode === 'mystery') {
            url = this._apiUrl + 'api/seed?v=' + this.webVersion + '&mode=mystery';
        }
        else {
            url = this._apiUrl + 'api/seed?v=' + this.webVersion;
            Object.keys(params).forEach(function (key) {
                url += '&' + key + '=' + params[key];
            });
        }
        if (online) {
            return this._http
                .get(url)
                .map(function (response) {
                var data = response.json();
                this.lastSeedTimestamp = Date.now();
                this.lastSeedParams = {};
                this.lastSeed = data;
                return data;
            })
                .catch(function (error) { return this.handleError(error); });
        }
        else {
            return offlineResult;
        }
    };
    SeedService.prototype.getStatus = function () {
        var me = this;
        var fakeStatusObservable = {
            data: {},
            subscribe: function (success, failure) {
                success(this.data);
            },
        };
        var statusUrl = this._apiUrl + 'api/status?v=' + this.webVersion;
        return fakeStatusObservable;
    };
    SeedService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Z3RSim seems to be offline. Please try again later.');
    };
    // ---- Native Angular helper methods (replaces spoilerLogAdapter.js + globals) ----
    SeedService.prototype.saveSpoilerLogToLocalStorage = function (spoilerLogData) {
        try {
            localStorage.setItem('z3r_spoiler_log', JSON.stringify(spoilerLogData));
        }
        catch (e) {
            console.error('Failed to save spoiler log', e);
        }
    };
    SeedService.prototype.loadAndGenerateItemArray = function () {
        var me = this;
        return new Promise(function (resolve, reject) {
            try {
                var storedSpoilerLog = localStorage.getItem('z3r_spoiler_log');
                var spoilerLog = storedSpoilerLog ? JSON.parse(storedSpoilerLog) : null;
                if (!spoilerLog) {
                    resolve([]);
                    return;
                }
                // Fetch the hotfix JSON files at runtime
                Promise.all([
                    fetch('./hotfix/itemNameToFullItemMap.json').then(function (r) { return r.json(); }),
                    fetch('./hotfix/spoilerToDetailedMap.json').then(function (r) { return r.json(); }),
                    fetch('./hotfix/detailedMap.json').then(function (r) { return r.json(); })
                ]).then(function (results) {
                    var itemNameMap = results[0];
                    var spoilerMap = results[1];
                    var detailedMap = results[2];
                    // Generate seed metadata prefix
                    var seedPrefix = me._itemArrayService.generateSeedMetadataPrefix(spoilerLog);
                    localStorage.setItem('seedMetadataPrefix', seedPrefix);
                    // Generate the item array
                    var itemArray = me._itemArrayService.generateItemArray(spoilerLog, itemNameMap, spoilerMap, detailedMap);
                    resolve(itemArray);
                }).catch(function (err) {
                    console.error('Error loading hotfix data:', err);
                    resolve([]);
                });
            }
            catch (error) {
                console.error('Error generating item array:', error);
                reject(error);
            }
        });
    };
    SeedService.prototype.generateSeed = function (seedParams) {
        var proxyUrl = 'https://z3r-proxy.derpaholicrex.workers.dev';
        var fullUrl = proxyUrl + '/api/randomizer';
        return fetch(fullUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seedParams)
        }).then(function (response) {
            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error('Rate limit exceeded. Please wait before trying again.');
                }
                throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            return response.json();
        });
    };
    SeedService.prototype.extractSeedHash = function (fileName) {
        var lastUnderscoreIndex = fileName.lastIndexOf('_');
        var extensionIndex = fileName.lastIndexOf('.');
        if (lastUnderscoreIndex !== -1 && extensionIndex !== -1 && lastUnderscoreIndex < extensionIndex) {
            return fileName.substring(lastUnderscoreIndex + 1, extensionIndex);
        }
        return null;
    };
    SeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__item_array_service__["a" /* ItemArrayService */]])
    ], SeedService);
    return SeedService;
}());



/***/ }),

/***/ "../../../../../src/services/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map