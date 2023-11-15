(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["main"],{

/***/ 4605:
/*!**********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageComponent: () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-page.component.html?ngResource */ 6848);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 5565);
var _class;





let AboutPageComponent = (_class = class AboutPageComponent {
  constructor(config) {
    this.config = config;
    this.intro$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.features$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 1);
    this.getBlockData('features');
  }
  getPageData(database, id) {
    this.intro$ = this.config.getSettings(database, id);
  }
  getBlockData(database) {
    this.features$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
AboutPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-about-page',
  template: _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AboutPageComponent);

/***/ }),

/***/ 7468:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutRoutingModule: () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-page/about-page.component */ 4605);




const routes = [{
  path: '',
  component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__.AboutPageComponent
}];
let AboutRoutingModule = class AboutRoutingModule {};
AboutRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AboutRoutingModule);

/***/ }),

/***/ 8822:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 7468);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page/about-page.component */ 4605);
/* harmony import */ var _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-block/feature-block.component */ 1695);






let AboutModule = class AboutModule {};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__.AboutPageComponent, _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_2__.FeatureBlockComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule]
})], AboutModule);

/***/ }),

/***/ 1695:
/*!****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureBlockComponent: () => (/* binding */ FeatureBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _feature_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-block.component.html?ngResource */ 8762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let FeatureBlockComponent = (_class = class FeatureBlockComponent {}, _class.propDecorators = {
  feature: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
FeatureBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-feature-block',
  template: _feature_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], FeatureBlockComponent);

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4320)).then(mod => mod.HomeModule)
}, {
  path: 'about',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 8822)).then(mod => mod.AboutModule)
}, {
  path: 'services',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./services/services.module */ 9557)).then(mod => mod.ServicesModule)
}, {
  path: 'testimonials',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./testimonial/testimonial.module */ 6486)).then(mod => mod.TestimonialModule)
}, {
  path: 'gallery',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./gallery/gallery.module */ 7999)).then(mod => mod.GalleryModule)
}, {
  path: 'clients',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients.module */ 6131)).then(mod => mod.ClientsModule)
}, {
  path: 'pricing',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pricing/pricing.module */ 1613)).then(mod => mod.PricingModule)
}, {
  path: '404',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./notfound/notfound.module */ 8892)).then(mod => mod.NotfoundModule)
}, {
  path: '**',
  redirectTo: '/404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: []
})], AppRoutingModule);

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



let AppComponent = class AppComponent {
  constructor() {
    this.title = 'Namari Website';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-in-memory-web-api */ 5402);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navmenu/navmenu.component */ 3722);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ 2603);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social/social.component */ 8864);
/* harmony import */ var _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./website-block/website-block.component */ 1248);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.module */ 8822);
/* harmony import */ var _clients_clients_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients/clients.module */ 6131);
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.module */ 7999);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ 4320);
/* harmony import */ var _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.module */ 8892);
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pricing/pricing.module */ 1613);
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.module */ 9557);
/* harmony import */ var _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testimonial/testimonial.module */ 6486);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/config.service */ 5565);
/* harmony import */ var _shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/in-memory-data.service */ 8786);






// Components






// Modules









// Services


let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__.NavmenuComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_4__.SocialComponent, _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_5__.WebsiteBlockComponent],
  imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_7__.AboutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _clients_clients_module__WEBPACK_IMPORTED_MODULE_8__.ClientsModule, _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, _home_home_module__WEBPACK_IMPORTED_MODULE_10__.HomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_11__.NotfoundModule, _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_12__.PricingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _services_services_module__WEBPACK_IMPORTED_MODULE_13__.ServicesModule, _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_14__.TestimonialModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_22__.HttpClientInMemoryWebApiModule.forRoot(_shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_16__.InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true
  })],
  providers: [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_15__.ConfigService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);

/***/ }),

/***/ 824:
/*!****************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsPageComponent: () => (/* binding */ ClientsPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _clients_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-page.component.html?ngResource */ 4244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 5565);
var _class;





let ClientsPageComponent = (_class = class ClientsPageComponent {
  constructor(config) {
    this.config = config;
    this.clients$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.companies$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 2);
    this.getBlockData('companies');
  }
  getPageData(database, id) {
    this.clients$ = this.config.getSettings(database, id);
  }
  getBlockData(database) {
    this.companies$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
ClientsPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-clients-page',
  template: _clients_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ClientsPageComponent);

/***/ }),

/***/ 4210:
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsRoutingModule: () => (/* binding */ ClientsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 824);




const routes = [{
  path: '',
  component: _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_0__.ClientsPageComponent
}];
let ClientsRoutingModule = class ClientsRoutingModule {};
ClientsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ClientsRoutingModule);

/***/ }),

/***/ 6131:
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsModule: () => (/* binding */ ClientsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-routing.module */ 4210);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 824);
/* harmony import */ var _companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies-block/companies-block.component */ 4054);






let ClientsModule = class ClientsModule {};
ClientsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_1__.ClientsPageComponent, _companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_2__.CompaniesBlockComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsRoutingModule]
})], ClientsModule);

/***/ }),

/***/ 4054:
/*!**********************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaniesBlockComponent: () => (/* binding */ CompaniesBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _companies_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies-block.component.html?ngResource */ 9994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let CompaniesBlockComponent = (_class = class CompaniesBlockComponent {}, _class.propDecorators = {
  company: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
CompaniesBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-companies-block',
  template: _companies_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], CompaniesBlockComponent);

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 2811);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 3727);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
var _class;






let FooterComponent = (_class = class FooterComponent {
  constructor(config) {
    this.config = config;
    // footer$: Observable<IFooter> = new Observable<IFooter>();
    this.footer$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 6);
  }
  getPageData(database, id) {
    this.footer$ = this.config.getSettings(database, id);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
}], _class);
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);

/***/ }),

/***/ 2318:
/*!****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryPageComponent: () => (/* binding */ GalleryPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _gallery_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-page.component.html?ngResource */ 8031);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 5565);
var _class;





let GalleryPageComponent = (_class = class GalleryPageComponent {
  constructor(config) {
    this.config = config;
    this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getBlockData('images');
  }
  getBlockData(database) {
    this.images$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
GalleryPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-gallery-page',
  template: _gallery_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], GalleryPageComponent);

/***/ }),

/***/ 8932:
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryRoutingModule: () => (/* binding */ GalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ 2318);




const routes = [{
  path: '',
  component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_0__.GalleryPageComponent
}];
let GalleryRoutingModule = class GalleryRoutingModule {};
GalleryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GalleryRoutingModule);

/***/ }),

/***/ 7999:
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryModule: () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 8932);
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ 2318);
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-block/image-block.component */ 4493);






let GalleryModule = class GalleryModule {};
GalleryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__.GalleryPageComponent, _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__.ImageBlockComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule]
})], GalleryModule);

/***/ }),

/***/ 4493:
/*!**************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlockComponent: () => (/* binding */ ImageBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-block.component.html?ngResource */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let ImageBlockComponent = (_class = class ImageBlockComponent {}, _class.propDecorators = {
  image: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
ImageBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-image-block',
  template: _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ImageBlockComponent);

/***/ }),

/***/ 7433:
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component.html?ngResource */ 1361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 5565);
var _class;




let HomePageComponent = (_class = class HomePageComponent {
  constructor(config) {
    this.config = config;
  }
  ngOnInit() {
    this.getPageData('pages', 7);
  }
  getPageData(database, id) {
    this.header$ = this.config.getSettings(database, id);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-home-page',
  template: _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], HomePageComponent);

/***/ }),

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 7433);




const routes = [{
  path: '',
  component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}];
let HomeRoutingModule = class HomeRoutingModule {};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomeRoutingModule);

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6058);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ 7433);





let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
})], HomeModule);

/***/ }),

/***/ 2603:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 8334);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css?ngResource */ 7510);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
var _class;






let NavigationComponent = (_class = class NavigationComponent {
  constructor(location, config) {
    this.location = location;
    this.config = config;
    this.database = 'menu';
  }
  ngOnInit() {
    this.menuOpen = false;
    this.getMenu();
  }
  toggleMenu(status) {
    this.menuOpen = status;
  }
  getMenu() {
    this.config.getSettings(this.database).subscribe(setting => {
      this.menu = setting;
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location
}, {
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
}], _class);
NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-navigation',
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavigationComponent);

/***/ }),

/***/ 3722:
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavmenuComponent: () => (/* binding */ NavmenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navmenu.component.html?ngResource */ 6724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let NavmenuComponent = (_class = class NavmenuComponent {
  constructor() {
    this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }
}, _class.propDecorators = {
  menu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  menuOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  menuStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }]
}, _class);
NavmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-navmenu',
  template: _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], NavmenuComponent);

/***/ }),

/***/ 3028:
/*!*******************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundPageComponent: () => (/* binding */ NotfoundPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _notfound_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-page.component.html?ngResource */ 9548);
/* harmony import */ var _notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound-page.component.css?ngResource */ 6042);
/* harmony import */ var _notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let NotfoundPageComponent = class NotfoundPageComponent {};
NotfoundPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-notfound-page',
  template: _notfound_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotfoundPageComponent);

/***/ }),

/***/ 5022:
/*!*****************************************************!*\
  !*** ./src/app/notfound/notfound-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundRoutingModule: () => (/* binding */ NotfoundRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ 3028);




const routes = [{
  path: '',
  component: _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundPageComponent
}];
let NotfoundRoutingModule = class NotfoundRoutingModule {};
NotfoundRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NotfoundRoutingModule);

/***/ }),

/***/ 8892:
/*!*********************************************!*\
  !*** ./src/app/notfound/notfound.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundModule: () => (/* binding */ NotfoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _notfound_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-routing.module */ 5022);
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ 3028);





let NotfoundModule = class NotfoundModule {};
NotfoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_1__.NotfoundPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _notfound_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotfoundRoutingModule]
})], NotfoundModule);

/***/ }),

/***/ 9615:
/*!******************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingBlockComponent: () => (/* binding */ PricingBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _pricing_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-block.component.html?ngResource */ 3456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let PricingBlockComponent = (_class = class PricingBlockComponent {}, _class.propDecorators = {
  plan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
PricingBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-pricing-block',
  template: _pricing_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], PricingBlockComponent);

/***/ }),

/***/ 2173:
/*!****************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingPageComponent: () => (/* binding */ PricingPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _pricing_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-page.component.html?ngResource */ 6916);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 5565);
var _class;





let PricingPageComponent = (_class = class PricingPageComponent {
  constructor(config) {
    this.config = config;
    this.pricing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.plans$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 5);
    this.getBlockData('plans');
  }
  getPageData(database, id) {
    this.pricing$ = this.config.getSettings(database, id);
  }
  getBlockData(database) {
    this.plans$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
PricingPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-pricing-page',
  template: _pricing_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], PricingPageComponent);

/***/ }),

/***/ 7609:
/*!***************************************************!*\
  !*** ./src/app/pricing/pricing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingRoutingModule: () => (/* binding */ PricingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-page/pricing-page.component */ 2173);




const routes = [{
  path: '',
  component: _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_0__.PricingPageComponent
}];
let PricingRoutingModule = class PricingRoutingModule {};
PricingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PricingRoutingModule);

/***/ }),

/***/ 1613:
/*!*******************************************!*\
  !*** ./src/app/pricing/pricing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingModule: () => (/* binding */ PricingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-routing.module */ 7609);
/* harmony import */ var _pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing-block/pricing-block.component */ 9615);
/* harmony import */ var _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing-page/pricing-page.component */ 2173);






let PricingModule = class PricingModule {};
PricingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_1__.PricingBlockComponent, _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_2__.PricingPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PricingRoutingModule]
})], PricingModule);

/***/ }),

/***/ 6386:
/*!*******************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesPageComponent: () => (/* binding */ ServicesPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _services_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-page.component.html?ngResource */ 7889);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 5565);
var _class;





let ServicesPageComponent = (_class = class ServicesPageComponent {
  constructor(config) {
    this.config = config;
    this.services$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 3);
  }
  getPageData(database, id) {
    this.services$ = this.config.getSettings(database, id);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
ServicesPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-services-page',
  template: _services_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ServicesPageComponent);

/***/ }),

/***/ 2650:
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesRoutingModule: () => (/* binding */ ServicesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-page/services-page.component */ 6386);




const routes = [{
  path: '',
  component: _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_0__.ServicesPageComponent
}];
let ServicesRoutingModule = class ServicesRoutingModule {};
ServicesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ServicesRoutingModule);

/***/ }),

/***/ 9557:
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesModule: () => (/* binding */ ServicesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-routing.module */ 2650);
/* harmony import */ var _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-page/services-page.component */ 6386);





let ServicesModule = class ServicesModule {};
ServicesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_1__.ServicesPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _services_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicesRoutingModule]
})], ServicesModule);

/***/ }),

/***/ 5565:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 2133);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
var _class;






let ConfigService = (_class = class ConfigService {
  constructor(http) {
    this.http = http;
    this.config = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration;
    this.apiUrl = 'api/posts';
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
    };
  }
  getConfig() {
    return this.config;
  }
  getSettings(database, id) {
    const url = id ? `api/${database}/${id}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}], _class);
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], ConfigService);

/***/ }),

/***/ 2133:
/*!**************************************************!*\
  !*** ./src/app/shared/services/configuration.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configuration: () => (/* binding */ configuration)
/* harmony export */ });
const configuration = {
  header: {
    heading: 'My website',
    headingtext: 'Namari is a free landing page template you can use for your projects.',
    buttontext: 'do some action',
    buttonlink: 'home'
  }
};

/***/ }),

/***/ 8786:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/in-memory-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let InMemoryDataService = class InMemoryDataService {
  createDb() {
    const pages = [{
      id: 1,
      name: 'intro',
      tagline: 'SUCCESS',
      title: 'How We Help You To Sell Your Product',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 2,
      name: 'clients',
      tagline: 'TRUST',
      title: 'Companies who use our services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 3,
      name: 'services',
      tagline: 'BELIEVING',
      title: 'Focusing On What Matters Most',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 4,
      name: 'testimonials',
      tagline: 'FEEDBACK',
      title: 'What our customers are saying',
      description: ''
    }, {
      id: 5,
      name: 'pricing',
      tagline: 'YOUR CHOICE',
      title: 'We have the right package for you',
      description: ''
    }, {
      id: 6,
      name: 'footer',
      tagline: 'Made with ❤ by',
      developer: 'Bateman Industries',
      developerlink: 'andrewbateman.org'
    }, {
      id: 7,
      name: 'header',
      tagline: 'A FREE AND SIMPLE LANDING PAGE',
      title: 'Namari is free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
      buttontext: 'START CREATING TODAY',
      buttonlink: '/about',
      image: 'banner-image-1.jpg'
    }];
    const features = [{
      id: 1,
      icon: 'html5',
      title: 'HTML5 & CSS3',
      description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'
    }, {
      id: 2,
      icon: 'bolt',
      title: 'Easy to Use',
      description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'
    }, {
      id: 3,
      icon: 'tablet',
      title: 'Fully Responsive',
      description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'
    }, {
      id: 4,
      icon: 'rocket',
      title: 'Parallax Effect',
      description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'
    }];
    const images = [{
      id: 1,
      name: 'gallery-image-1.jpg'
    }, {
      id: 2,
      name: 'gallery-image-2.jpg'
    }, {
      id: 3,
      name: 'gallery-image-3.jpg'
    }, {
      id: 4,
      name: 'gallery-image-4.jpg'
    }, {
      id: 5,
      name: 'gallery-image-5.jpg'
    }, {
      id: 6,
      name: 'gallery-image-6.jpg'
    }];
    const menu = [{
      id: 1,
      title: 'Home',
      link: '/home'
    }, {
      id: 2,
      title: 'About',
      link: '/about'
    }, {
      id: 3,
      title: 'Services',
      link: '/services'
    }, {
      id: 4,
      title: 'Gallery',
      link: '/gallery'
    }, {
      id: 5,
      title: 'Testimonials',
      link: '/testimonials'
    }, {
      id: 6,
      title: 'Clients',
      link: '/clients'
    }, {
      id: 7,
      title: 'Pricing',
      link: '/pricing'
    }];
    const companies = [{
      id: 1,
      name: 'Tree',
      weblink: 'company-logo1.png',
      logo: 'company-logo1.png'
    }, {
      id: 2,
      name: 'Fingerprint',
      weblink: 'company-logo2.png',
      logo: 'company-logo2.png'
    }, {
      id: 3,
      name: 'The Man',
      weblink: 'company-logo3.png',
      logo: 'company-logo3.png'
    }, {
      id: 4,
      name: 'Mustache',
      weblink: 'company-logo4.png',
      logo: 'company-logo4.png'
    }, {
      id: 5,
      name: 'Goat',
      weblink: 'company-logo5.png',
      logo: 'company-logo5.png'
    }, {
      id: 6,
      name: 'Justice',
      weblink: 'company-logo6.png',
      logo: 'company-logo6.png'
    }, {
      id: 7,
      name: 'Ball',
      weblink: 'company-logo7.png',
      logo: 'company-logo7.png'
    }, {
      id: 8,
      name: 'Cold',
      weblink: 'company-logo8.png',
      logo: 'company-logo8.png'
    }, {
      id: 9,
      name: 'Cold',
      weblink: 'company-logo9.png',
      logo: 'company-logo9.png'
    }];
    const feedback = [{
      id: 1,
      name: 'John Doe',
      userimage: 'user-1.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'ABC'
    }, {
      id: 2,
      name: 'Roslyn Doe',
      userimage: 'user-2.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }, {
      id: 3,
      name: 'Thomas Doe',
      userimage: 'user-3.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }];
    const plans = [{
      id: 1,
      title: 'PERSONAL',
      subtitle: 'The standard version',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '19',
      currency: '₹',
      downloads: '5 Downloads',
      extensions: '2 Extensions',
      tutorials: 'Tutorials',
      support: 'Forum Support',
      updates: '1 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }, {
      id: 2,
      title: 'STUDENT',
      subtitle: 'Most popular choice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '29',
      currency: '₹',
      downloads: '15 Downloads',
      extensions: '5 Extensions',
      tutorials: 'Tutorials with files',
      support: 'Forum Support',
      updates: '2 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: true
    }, {
      id: 3,
      title: 'BUSINESS',
      subtitle: 'For the whole team',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '49',
      currency: '₹',
      downloads: 'Unlimited Downloads',
      extensions: 'Unlimited Downloads',
      tutorials: 'HD Video Tutorials',
      support: 'Chat Support',
      updates: 'Lifetime free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }];
    const websites = [{
      id: 1,
      link: 'https://facebook.com/',
      title: 'Facebook',
      target: '_blank',
      username: 'Thor',
      icon: 'facebook'
    },
    // {
    //   id: 2,
    //   link: "https://googleplus.com/",
    //   title: "Google+",
    //   target: "_blank",
    //   username: "+jagmohan",
    //   icon: "google-plus",
    // },
    {
      id: 3,
      link: 'https://twitter.com/',
      title: 'Twitter',
      target: '_blank',
      username: 'joker',
      icon: 'twitter'
    }, {
      id: 4,
      link: 'https://instagram.com/',
      title: 'Instagram',
      target: '_blank',
      username: 'superman',
      icon: 'instagram'
    }
    // {
    //   id: 5,
    //   link: "https://behance.com/",
    //   title: "Behance",
    //   target: "_blank",
    //   username: "jagmohan",
    //   icon: "behance",
    // },
    ];

    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites
    };
  }
};
InMemoryDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], InMemoryDataService);

/***/ }),

/***/ 8864:
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.component.html?ngResource */ 4914);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
var _class;





let SocialComponent = (_class = class SocialComponent {
  constructor(config) {
    this.config = config;
    this.socialsites$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getSocialsites();
  }
  getSocialsites() {
    this.socialsites$ = this.config.getSettings('websites');
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
SocialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-social',
  template: _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], SocialComponent);

/***/ }),

/***/ 8501:
/*!************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackBlockComponent: () => (/* binding */ FeedbackBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _feedback_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-block.component.html?ngResource */ 3426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let FeedbackBlockComponent = (_class = class FeedbackBlockComponent {}, _class.propDecorators = {
  feedback: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
FeedbackBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-feedback-block',
  template: _feedback_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], FeedbackBlockComponent);

/***/ }),

/***/ 5409:
/*!****************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialPageComponent: () => (/* binding */ TestimonialPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _testimonial_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial-page.component.html?ngResource */ 259);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 5565);
var _class;





let TestimonialPageComponent = (_class = class TestimonialPageComponent {
  constructor(config) {
    this.config = config;
    this.testimonials$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.feedback$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 4);
    this.getBlockData('feedback');
  }
  getPageData(database, id) {
    this.testimonials$ = this.config.getSettings(database, id);
  }
  getBlockData(database) {
    this.feedback$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}], _class);
TestimonialPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-testimonial-page',
  template: _testimonial_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], TestimonialPageComponent);

/***/ }),

/***/ 8761:
/*!***********************************************************!*\
  !*** ./src/app/testimonial/testimonial-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialRoutingModule: () => (/* binding */ TestimonialRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial-page/testimonial-page.component */ 5409);




const routes = [{
  path: '',
  component: _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_0__.TestimonialPageComponent
}];
let TestimonialRoutingModule = class TestimonialRoutingModule {};
TestimonialRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TestimonialRoutingModule);

/***/ }),

/***/ 6486:
/*!***************************************************!*\
  !*** ./src/app/testimonial/testimonial.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialModule: () => (/* binding */ TestimonialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial-routing.module */ 8761);
/* harmony import */ var _feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-block/feedback-block.component */ 8501);
/* harmony import */ var _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-page/testimonial-page.component */ 5409);






let TestimonialModule = class TestimonialModule {};
TestimonialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_1__.FeedbackBlockComponent, _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestimonialRoutingModule]
})], TestimonialModule);

/***/ }),

/***/ 1248:
/*!**********************************************************!*\
  !*** ./src/app/website-block/website-block.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteBlockComponent: () => (/* binding */ WebsiteBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _website_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-block.component.html?ngResource */ 8545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



let WebsiteBlockComponent = (_class = class WebsiteBlockComponent {}, _class.propDecorators = {
  website: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }]
}, _class);
WebsiteBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-website-block',
  template: _website_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], WebsiteBlockComponent);

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 3727:
/*!********************************************************!*\
  !*** ./src/app/footer/footer.component.css?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-social app-social {
  float: right;
  right: 10px;
  margin-right: 0;
  margin-left: 15px;
}
`, "",{"version":3,"sources":["webpack://./src/app/footer/footer.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB","sourcesContent":[".footer-social app-social {\n  float: right;\n  right: 10px;\n  margin-right: 0;\n  margin-left: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7510:
/*!****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* #header {
  margin-top: 15px;
} */`, "",{"version":3,"sources":["webpack://./src/app/navigation/navigation.component.css"],"names":[],"mappings":"AAAA;;GAEG","sourcesContent":["/* #header {\n  margin-top: 15px;\n} */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6042:
/*!*******************************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.big-text {

  font-size: 15em;
}.big-text {

  font-size: 15em;
}
`, "",{"version":3,"sources":["webpack://./src/app/notfound/notfound-page/notfound-page.component.css"],"names":[],"mappings":"AAAA;;EAEE,eAAe;AACjB,CAAC;;EAEC,eAAe;AACjB","sourcesContent":[".big-text {\n\n  font-size: 15em;\n}.big-text {\n\n  font-size: 15em;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6848:
/*!***********************************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section\n\tid=\"about\"\n\tclass=\"introduction scrollto pull-right\"\n\t*ngIf=\"intro$ | async as intro\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-3\">\n\t\t\t<div class=\"section-heading\">\n\t\t\t\t<h3>{{ intro.tagline }}</h3>\n\t\t\t\t<h2 class=\"section-title\">{{ intro.title }}</h2>\n\t\t\t\t<p class=\"section-subtitle\">{{ intro.description }}</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-2-3\" *ngIf=\"features$\">\n\t\t\t<div *ngFor=\"let feature of features$ | async; let i = index\">\n\t\t\t\t<app-feature-block [feature]=\"feature\"></app-feature-block>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n";

/***/ }),

/***/ 8762:
/*!*****************************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n\t<!--Icon-->\n\t<div class=\"icon\">\n\t\t<i class=\"fa fa-{{ feature.icon }} fa-2x\"></i>\n\t</div>\n\t<!--Icon Block Description-->\n\t<div class=\"icon-block-description\">\n\t\t<h4>{{ feature.title }}</h4>\n\t\t<p>{{ feature.description }}</p>\n\t</div>\n</div>\n";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\"> -->\n\t<!-- <div\n\t\tclass=\"top-border wow fadeInDown animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInDown\"></div> -->\n\t<!-- <div\n\t\tclass=\"right-border wow fadeInRight animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInRight\"></div> -->\n\t<!-- <div\n\t\tclass=\"bottom-border wow fadeInUp animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInUp\"></div> -->\n\t<!-- <div\n\t\tclass=\"left-border wow fadeInLeft animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInLeft\"></div> -->\n<!-- </div> -->\n<!--Main Content Area-->\n<main id=\"content\">\n\t<app-navigation></app-navigation>\n\t<router-outlet></router-outlet>\n\t<app-footer></app-footer>\n</main>\n<!--End Main Content Area-->\n";

/***/ }),

/***/ 4244:
/*!*****************************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section id=\"clients\" class=\"scrollto clearfix\">\n\t<div class=\"row clearfix pull-right\">\n\t\t<div class=\"col-3\" *ngIf=\"clients$ | async as clients\">\n\t\t\t<div class=\"section-heading\">\n\t\t\t\t<h3>{{ clients.tagline }}</h3>\n\t\t\t\t<h2 class=\"section-title\">{{ clients.title }}</h2>\n\t\t\t\t<p class=\"section-subtitle\">{{ clients.description }}</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-2-3\">\n\t\t\t<div *ngFor=\"let company of companies$ | async; let i = index\">\n\t\t\t\t<app-companies-block [company]=\"company\"></app-companies-block>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n";

/***/ }),

/***/ 9994:
/*!***********************************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<a href=\"{{ company.weblink }}\" class=\"col-3\">\n\t<img\n\t\tsrc=\"assets/images/company-images/{{ company.logo }}\"\n\t\talt=\"{{ company.name }}\" />\n\t<div class=\"client-overlay\">\n\t\t<span>{{ company.name }}</span>\n\t</div>\n</a>\n";

/***/ }),

/***/ 2811:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer id=\"landing-footer\" class=\"clearfix\" *ngIf=\"footer$ | async as footer\">\n\t<div class=\"row clearfix\">\n\t\t<p id=\"copyright\" class=\"col-2\">\n\t\t\t{{ footer.tagline }}\n\t\t\t<a routerLink=\"{{ footer.developerlink }}\">{{ footer.developer }}</a>\n\t\t</p>\n\n\t\t<!--Social Icons in Footer-->\n\t\t<div class=\"col-2\" style=\"text-align: right\">\n\t\t\t<app-social></app-social>\n\t\t</div>\n\t\t<!--End of Social Icons in Footer-->\n\t</div>\n</footer>\n";

/***/ }),

/***/ 8031:
/*!*****************************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section id=\"gallery\" class=\"introduction scrollto text-center\">\n\t<div class=\"row clearfix\">\n\t\t<aside id=\"gallery\" class=\"row text-center scrollto clearfix\">\n\t\t\t<div *ngFor=\"let image of images$ | async; let i = index\">\n\t\t\t\t<app-image-block [image]=\"image\"></app-image-block>\n\t\t\t</div>\n\t\t</aside>\n\t</div>\n</section>\n";

/***/ }),

/***/ 5903:
/*!***************************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<a\n\thref=\"assets/images/gallery-images/{{ image.name }}\"\n\tdata-featherlight=\"image\"\n\tclass=\"col-3 wow fadeIn\"\n\tdata-wow-delay=\"0.1s\">\n\t<img src=\"assets/images/gallery-images/{{ image.name }}\" alt=\"Landing Page\" />\n</a>\n";

/***/ }),

/***/ 1361:
/*!********************************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"header$ | async as header\">\n\t<header\n\t\tid=\"banner\"\n\t\tclass=\"scrollto clearfix shift-left\"\n\t\tdata-enllax-ratio=\".5\"\n\t\t[style.background]=\"\n\t\t\t'url(../assets/images/banner-images/' +\n\t\t\theader.image +\n\t\t\t' ) no-repeat center top;'\n\t\t\">\n\t\t<div id=\"banner-content\" class=\"row clearfix pull-right\">\n\t\t\t<div class=\"col-38\">\n\t\t\t\t<div class=\"section-heading\">\n\t\t\t\t\t<h1>{{ header.tagline }}</h1>\n\t\t\t\t\t<h2>{{ header.title }}</h2>\n\t\t\t\t</div>\n\n\t\t\t\t<a routerLink=\"{{ header.buttonlink }}\" class=\"button\">{{\n\t\t\t\t\theader.buttontext\n\t\t\t\t}}</a>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n</div>\n";

/***/ }),

/***/ 8334:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-1\">\n\t\t\t<!--Logo-->\n\t\t\t<div id=\"logo\">\n\t\t\t\t<!--Logo that is shown on the banner-->\n\t\t\t\t<img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\" />\n\t\t\t\t<!--End of Banner Logo-->\n\n\t\t\t\t<!--The Logo that is shown on the sticky Navigation Bar-->\n\t\t\t\t<img\n\t\t\t\t\tsrc=\"assets/images/logo-2.png\"\n\t\t\t\t\tid=\"navigation-logo\"\n\t\t\t\t\talt=\"Landing Page\" />\n\t\t\t\t<!--End of Navigation Logo-->\n\t\t\t</div>\n\t\t\t<!--End of Logo-->\n\n\t\t\t<!-- <aside>\n        <app-social></app-social>\n      </aside> -->\n\n\t\t\t<!--Main Navigation-->\n\t\t\t<nav id=\"nav-main\">\n\t\t\t\t<app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\n\t\t\t</nav>\n\t\t\t<!--End of Main Navigation-->\n\n\t\t\t<div id=\"nav-trigger\">\n\t\t\t\t<span\n\t\t\t\t\t[class.open]=\"menuOpen === true\"\n\t\t\t\t\t(onClick)=\"toggleMenu(!menuOpen)\"\n\t\t\t\t\t(onKeyUp)=\"toggleMenu(!menuOpen)\"></span>\n\t\t\t</div>\n\t\t\t<nav id=\"nav-mobile\">\n\t\t\t\t<app-navmenu\n\t\t\t\t\t[menu]=\"menu\"\n\t\t\t\t\t*ngIf=\"menuOpen === true\"\n\t\t\t\t\t(menuStatus)=\"toggleMenu($event)\"\n\t\t\t\t\t[menuOpen]=\"menuOpen\"></app-navmenu>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n</div>\n<!--End of Header-->\n";

/***/ }),

/***/ 6724:
/*!***********************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul [class.expanded]=\"menuOpen === true\">\n\t<li *ngFor=\"let menuItem of menu\">\n\t\t<a\n\t\t\trouterLink=\"{{ menuItem.link }}\"\n\t\t\t(click)=\"toggleMenu()\"\n\t\t\trouterLinkActive=\"active\"\n\t\t\t[routerLinkActiveOptions]=\"{ exact: true }\"\n\t\t\t>{{ menuItem.title }}</a\n\t\t>\n\t</li>\n</ul>\n";

/***/ }),

/***/ 9548:
/*!********************************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section id=\"notfound\" class=\"secondary-color text-center scrollto clearfix\">\n\t<div class=\"row clearfix\">\n\t\t<h1 class=\"big-text\">404</h1>\n\t\t<h2>Nothing Found Here!! try our <a routerLink=\"/home\">Home Page</a></h2>\n\t</div>\n</section>\n";

/***/ }),

/***/ 3456:
/*!*******************************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Pricing Block-->\n<div\n\tclass=\"pricing-block col-3 wow fadeInUp\"\n\tdata-wow-delay=\"0.4s\"\n\t[class.featured]=\"plan.featured\">\n\t<div class=\"pricing-block-content\">\n\t\t<h3>{{ plan.title }}</h3>\n\t\t<p class=\"pricing-sub\">{{ plan.subtitle }}</p>\n\t\t<div class=\"pricing\">\n\t\t\t<div class=\"price\">\n\t\t\t\t<span>{{ plan.currency }}</span\n\t\t\t\t>{{ plan.price }}\n\t\t\t</div>\n\t\t\t<p>{{ plan.description }}</p>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li>{{ plan.downloads }}</li>\n\t\t\t<li>{{ plan.extensions }}</li>\n\t\t\t<li>{{ plan.tutorials }}</li>\n\t\t\t<li>{{ plan.support }}</li>\n\t\t\t<li>{{ plan.updates }}</li>\n\t\t</ul>\n\t\t<a href=\"{{ plan.buttonlink }}\" class=\"button\">{{ plan.buttontext }}</a>\n\t</div>\n</div>\n<!--End Pricing Block-->\n";

/***/ }),

/***/ 6916:
/*!*****************************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"section-heading\" *ngIf=\"pricing$ | async as pricing\">\n\t\t\t<h3 class=\"pull-down\">{{ pricing.tagline }}</h3>\n\t\t\t<h2 class=\"section-title\">{{ pricing.title }}</h2>\n\t\t</div>\n\n\t\t<div *ngFor=\"let plan of plans$ | async; let i = index\">\n\t\t\t<app-pricing-block [plan]=\"plan\"></app-pricing-block>\n\t\t</div>\n\t</div>\n</section>\n";

/***/ }),

/***/ 7889:
/*!********************************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\n\tid=\"services\"\n\tclass=\"scrollto clearfix\"\n\t*ngIf=\"services$ | async as services\">\n\t<div class=\"row no-padding-bottom clearfix\">\n\t\t<!--Content Left Side-->\n\t\t<div class=\"col-3\">\n\t\t\t<!--User Testimonial-->\n\t\t\t<blockquote class=\"testimonial text-right bigtest\">\n\t\t\t\t<q\n\t\t\t\t\t>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n\t\t\t\t\teiusmod tempor incididunt ut labore et dolore magna aliqua</q\n\t\t\t\t>\n\t\t\t\t<footer>— John Doe, Happy Customer</footer>\n\t\t\t</blockquote>\n\t\t\t<!-- End of Testimonial-->\n\t\t</div>\n\t\t<!--End Content Left Side-->\n\n\t\t<!--Content of the Right Side-->\n\t\t<div class=\"col-3\">\n\t\t\t<div class=\"section-heading\">\n\t\t\t\t<h3>{{ services.tagline }}</h3>\n\t\t\t\t<h2 class=\"section-title\">{{ services.title }}</h2>\n\t\t\t\t<p class=\"section-subtitle\">{{ services.description }}</p>\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tSed ut perspiciatis unde omnis iste natus error sit voluptatem\n\t\t\t\taccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n\t\t\t\tillo inventore veritatis et quasi architecto beatae vitae dicta sunt\n\t\t\t\texplicabo.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\n\t\t\t\tfugit, sed quia consequuntur magni dolores eos qui ratione voluptatem\n\t\t\t\tsequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n\t\t\t\tsit amet!\n\t\t\t</p>\n\t\t\t<!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n\t\t\t<a\n\t\t\t\thref=\"#\"\n\t\t\t\tdata-videoid=\"UYJ5IjBRlW8\"\n\t\t\t\tdata-videosite=\"youtube\"\n\t\t\t\tclass=\"button video link-lightbox\">\n\t\t\t\tWATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t<!--End Content Right Side-->\n\n\t\t<div class=\"col-3\">\n\t\t\t<img src=\"assets/images/dancer.jpg\" alt=\"Dancer\" />\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),

/***/ 4914:
/*!*********************************************************!*\
  !*** ./src/app/social/social.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"social-icons\">\n\t<li *ngFor=\"let website of socialsites$ | async; let i = index\">\n\t\t<a\n\t\t\ttarget=\"{{ website.target }}\"\n\t\t\ttitle=\"{{ website.title }}\"\n\t\t\thref=\"{{ website.link }}{{ website.username }}\">\n\t\t\t<i class=\"fa fa-{{ website.icon }} fa-1x\"></i\n\t\t\t><span>{{ website.title }}</span>\n\t\t</a>\n\t</li>\n</ul>\n";

/***/ }),

/***/ 3426:
/*!*************************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<blockquote class=\"col-3 testimonial classic\">\n\t<img src=\"assets/images/user-images/{{ feedback.userimage }}\" alt=\"User\" />\n\t<q>{{ feedback.comments }}</q>\n\t<footer>{{ feedback.name }} - {{ feedback.company }}</footer>\n</blockquote>\n";

/***/ }),

/***/ 259:
/*!*****************************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<aside\n\tid=\"testimonials\"\n\tclass=\"scrollto text-center pull-right pull-left\"\n\tdata-enllax-ratio=\".2\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"section-heading\" *ngIf=\"testimonials$ | async as testimonials\">\n\t\t\t<h3 class=\"pull-down\">{{ testimonials.tagline }}</h3>\n\t\t\t<h2 class=\"section-title\">{{ testimonials.title }}</h2>\n\t\t</div>\n\n\t\t<!--User Testimonial-->\n\t\t<div *ngFor=\"let feedback of feedback$ | async; let i = index\">\n\t\t\t<app-feedback-block [feedback]=\"feedback\"></app-feedback-block>\n\t\t</div>\n\t\t<!-- End of Testimonial-->\n\t</div>\n</aside>\n";

/***/ }),

/***/ 8545:
/*!***********************************************************************!*\
  !*** ./src/app/website-block/website-block.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<a\n\ttarget=\"{{ website.target }}\"\n\ttitle=\"{{ website.title }}\"\n\thref=\"{{ website.link }}/{{ website.username }}\">\n\t<i class=\"fa fa-{{ website.icon }} fa-1x\"></i><span>{{ website.title }}</span>\n</a>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map