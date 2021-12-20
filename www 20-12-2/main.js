(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/menu/menu.module */ 1014)).then(m => m.MenuPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/login/login.module */ 5234)).then(m => m.LoginPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ 9356);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var _stat_managment_user_user_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat-managment/user/user.effects */ 2358);
/* harmony import */ var _stat_managment_app_reduecer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-managment/app.reduecer */ 4255);
/* harmony import */ var _stat_managment_role_role_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat-managment/role/role.effects */ 1497);
/* harmony import */ var _stat_managment_product_product_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-managment/product/product.effects */ 7604);
/* harmony import */ var _stat_managment_provide_provide_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stat-managment/provide/provide.effects */ 8611);
/* harmony import */ var _stat_managment_sale_sale_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stat-managment/sale/sale.effects */ 2899);
/* harmony import */ var _services_request_interceptor_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/request-interceptor-service.service */ 9025);


















let AppModule = class AppModule {
    constructor(route, auth) {
        this.route = route;
        this.auth = auth;
        let jwt = this.auth.loadToken();
        if (jwt == null)
            this.route.navigateByUrl("/login");
        else
            this.route.navigateByUrl("/menu/home");
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forRoot({ appStatAct: _stat_managment_app_reduecer__WEBPACK_IMPORTED_MODULE_4__.appReducer }, {}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forRoot([_stat_managment_user_user_effects__WEBPACK_IMPORTED_MODULE_3__.UserEffects, _stat_managment_role_role_effects__WEBPACK_IMPORTED_MODULE_5__.RoleEffects, _stat_managment_product_product_effects__WEBPACK_IMPORTED_MODULE_6__.ProductEffects, _stat_managment_provide_provide_effects__WEBPACK_IMPORTED_MODULE_7__.ProductToProvideEffects, _stat_managment_sale_sale_effects__WEBPACK_IMPORTED_MODULE_8__.ProductToSaleEffects])
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS, useClass: _services_request_interceptor_service_service__WEBPACK_IMPORTED_MODULE_9__.RequestInterceptorService, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9356:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 37);







let AuthenticationService = class AuthenticationService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    getAllUser() {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.get(host + "/getAllUsers", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).pipe();
    }
    getAllRole() {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.get(host + "/getroles", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).pipe();
    }
    addUser(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.post(host + "/addUser", user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).pipe();
    }
    deleteUser(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.delete(host + "/deleteUser/" + user.id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() })
        }).pipe();
    }
    getUserByID(id) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        let user = null;
        this.http.get(host + "/addUser" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).subscribe((u) => user = u);
        return user;
    }
    getUserByname(name) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        let user = null;
        return this.http.get(host + "/getUserByName/" + name, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        });
    }
    login(user) {
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        let jwt;
        return this.http.post(host + "/login", user, { observe: "response" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            jwt = response.headers.get("Authorization");
            this.saveToken(jwt);
            return { token: jwt, error: null };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(er => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ token: null, error: er.message })));
    }
    /*
    Modifier un collaborateur
     */
    updateUser(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.put(host + "/updateUser", user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).pipe();
    }
    /*
     Rinitialiser le mot de passe  un collaborateur
      */
    rintPassword(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.put(host + "/update/" + user.id, user.password, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        }).pipe();
    }
    getCurrentUser() {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.get(host + "/getCurrentUser", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": "" + this.loadToken() }), observe: "body"
        });
    }
    saveToken(jwt) {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName, jwt);
    }
    loadToken() {
        return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
    }
    clearToken() {
        localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 6703:
/*!****************************************************!*\
  !*** ./src/app/services/product.productService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 9356);





let ProductService = class ProductService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getAllProduct() {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.get(host + "/getAllProducts", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).pipe();
    }
    saveProductToProvide(product) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.put(host + "/saveProductToProvide", product, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).pipe();
    }
    saveProductToSale(product) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.put(host + "/saveProductToSle", product, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).pipe();
    }
    addProduct(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.post(host + "/addProduct", user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).pipe();
    }
    deleteProduct(p) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.delete(host + "/deleteProduct/" + p.id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() })
        }).pipe();
    }
    getProductByID(id) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        let user = null;
        this.http.get(host + "/addProduct" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).subscribe((u) => user = u);
        return user;
    }
    getProductByname(name) {
        console.log(name);
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        let user = null;
        return this.http.get(host + "/getProductByName/" + name, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        });
    }
    /*
    Modifier un collaborateur
     */
    updateProduct(user) {
        let jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName);
        let host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendHost;
        return this.http.put(host + "/updateProduct", user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ "Authorization": "" + this.auth.loadToken() }), observe: "body"
        }).pipe();
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 9025:
/*!*****************************************************************!*\
  !*** ./src/app/services/request-interceptor-service.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestInterceptorService": () => (/* binding */ RequestInterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);



let RequestInterceptorService = class RequestInterceptorService {
    constructor() { }
    intercept(req, next) {
        let baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
        if (baseUrl && !(req.url.startsWith('http') || req.url.startsWith('https'))) {
            req = req.clone({ url: baseUrl + req.url });
            req.headers.append('Access-Control-Allow-Origin', baseUrl);
        }
        return next.handle(req);
    }
};
RequestInterceptorService.ctorParameters = () => [];
RequestInterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RequestInterceptorService);



/***/ }),

/***/ 4255:
/*!************************************************!*\
  !*** ./src/app/stat-managment/app.reduecer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStat": () => (/* binding */ AppStat),
/* harmony export */   "appReducer": () => (/* binding */ appReducer)
/* harmony export */ });
/* harmony import */ var _user_user_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.stat */ 3361);
/* harmony import */ var _role_role_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role/role.stat */ 8693);
/* harmony import */ var _product_product_stat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.stat */ 2855);
/* harmony import */ var _provide_provide_stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provide/provide.stat */ 1769);
/* harmony import */ var _sale_sale_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale/sale.stat */ 5531);





class AppStat {
}
const intAppStat = {
    userStat: _user_user_stat__WEBPACK_IMPORTED_MODULE_0__.UserReducer.initUserStat(),
    roleStat: _role_role_stat__WEBPACK_IMPORTED_MODULE_1__.RoleReducer.initRoleStat(),
    productStat: _product_product_stat__WEBPACK_IMPORTED_MODULE_2__.ProductReducer.initProductStat(),
    productToProvideStat: _provide_provide_stat__WEBPACK_IMPORTED_MODULE_3__.ProductToProvideReducer.initProductToProvideStat(),
    productToSaleStat: _sale_sale_stat__WEBPACK_IMPORTED_MODULE_4__.ProductToSaleReducer.initProductToSaleStat()
};
function appReducer(appstat = intAppStat, action) {
    /*
    gestion l'etat de l'appliction liee au ulitisateur
    */
    return Object.assign(Object.assign({}, appstat), { userStat: _user_user_stat__WEBPACK_IMPORTED_MODULE_0__.UserReducer.userReducer(appstat.userStat, action), roleStat: _role_role_stat__WEBPACK_IMPORTED_MODULE_1__.RoleReducer.roleReducer(appstat.roleStat, action), productStat: _product_product_stat__WEBPACK_IMPORTED_MODULE_2__.ProductReducer.productReducer(appstat.productStat, action), productToProvideStat: _provide_provide_stat__WEBPACK_IMPORTED_MODULE_3__.ProductToProvideReducer.productToProvideReducer(appstat.productToProvideStat, action), productToSaleStat: _sale_sale_stat__WEBPACK_IMPORTED_MODULE_4__.ProductToSaleReducer.productToSaleReducer(appstat.productToSaleStat, action) });
}


/***/ }),

/***/ 1302:
/*!*************************************************!*\
  !*** ./src/app/stat-managment/app.stat-enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStatEnum": () => (/* binding */ AppStatEnum)
/* harmony export */ });
var AppStatEnum;
(function (AppStatEnum) {
    AppStatEnum["LOADING"] = "Loading";
    AppStatEnum["LOADED"] = "loaded";
    AppStatEnum["ERROR"] = " error";
    AppStatEnum["INITIAL"] = "initial";
})(AppStatEnum || (AppStatEnum = {}));


/***/ }),

/***/ 1910:
/*!**********************************************************!*\
  !*** ./src/app/stat-managment/product/product.action.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductActionType": () => (/* binding */ ProductActionType),
/* harmony export */   "GetAllProductAction": () => (/* binding */ GetAllProductAction),
/* harmony export */   "GetAllProductActionSuccess": () => (/* binding */ GetAllProductActionSuccess),
/* harmony export */   "GetAllProductActionError": () => (/* binding */ GetAllProductActionError),
/* harmony export */   "AddProductAction": () => (/* binding */ AddProductAction),
/* harmony export */   "AddProductActionSuccess": () => (/* binding */ AddProductActionSuccess),
/* harmony export */   "AddProductActionError": () => (/* binding */ AddProductActionError),
/* harmony export */   "UpdateProductAction": () => (/* binding */ UpdateProductAction),
/* harmony export */   "UpdateProductActionSuccess": () => (/* binding */ UpdateProductActionSuccess),
/* harmony export */   "UpdateProductActionError": () => (/* binding */ UpdateProductActionError),
/* harmony export */   "DeleteProductAction": () => (/* binding */ DeleteProductAction),
/* harmony export */   "DeleteProductActionSuccess": () => (/* binding */ DeleteProductActionSuccess),
/* harmony export */   "DeleteProductActionError": () => (/* binding */ DeleteProductActionError),
/* harmony export */   "SelectProductAction": () => (/* binding */ SelectProductAction),
/* harmony export */   "SelectProductActionSuccess": () => (/* binding */ SelectProductActionSuccess),
/* harmony export */   "SelectProductActionError": () => (/* binding */ SelectProductActionError)
/* harmony export */ });
var ProductActionType;
(function (ProductActionType) {
    /*
     Action pour selectionner le produit (les collaborateur en pecherie)
     */
    ProductActionType["GET_ALL_PRODUCT"] = "[Product] get all user";
    ProductActionType["GET_ALL_PRODUCT_SUCCESS"] = "[Product] get all user success";
    ProductActionType["GET_ALL_PRODUCT_ERROR"] = "[Product] get all user error";
    /*
     Action pour ajouter un utlisateur  produit (les collaborateur en pecherie)
     */
    ProductActionType["ADD_PRODUCT"] = "[Product] ajouter user";
    ProductActionType["ADD_PRODUCT_SUCCESS"] = "[Product] ajouter user success";
    ProductActionType["ADD_PRODUCT_ERROR"] = "[Product] ajouter user error";
    /*
     Action pour supprimer un produit (les collaborateur en pecherie)
     */
    ProductActionType["DELETE_PRODUCT"] = "[Product] delete user";
    ProductActionType["DELETE_PRODUCT_SUCCESS"] = "[Product] delete user success";
    ProductActionType["DELETE_PRODUCT_ERROR"] = "[Product] delete user error";
    /*
     Action pour modifier un produit (les collaborateur en pecherie)
     */
    ProductActionType["UPDATE_PRODUCT"] = "[Product] edit user";
    ProductActionType["UPDATE_PRODUCT_SUCCESS"] = "[Product] edit user success";
    ProductActionType["UPDATE_PRODUCT_ERROR"] = "[Product] edit user error";
    /*Selectionner un utilisteur dans le but de le maitre à jour */
    ProductActionType["SELECT_PRODUCT"] = "[Product] select user";
    ProductActionType["SELECT_PRODUCT_SUCCESS"] = "[Product] select user success";
    ProductActionType["SELECT_PRODUCT_ERROR"] = "[Product] select  user error";
})(ProductActionType || (ProductActionType = {}));
/*
Get all user action
* */
class GetAllProductAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.GET_ALL_PRODUCT;
    }
}
class GetAllProductActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.GET_ALL_PRODUCT_SUCCESS;
    }
}
class GetAllProductActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.GET_ALL_PRODUCT_ERROR;
    }
}
/*
Add user action
* */
class AddProductAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.ADD_PRODUCT;
    }
}
class AddProductActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.ADD_PRODUCT_SUCCESS;
    }
}
class AddProductActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.ADD_PRODUCT_ERROR;
    }
}
/*
Update user action
* */
class UpdateProductAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.UPDATE_PRODUCT;
    }
}
class UpdateProductActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.UPDATE_PRODUCT_SUCCESS;
    }
}
class UpdateProductActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.UPDATE_PRODUCT_ERROR;
    }
}
/*
Delete user action
* */
class DeleteProductAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.DELETE_PRODUCT;
    }
}
class DeleteProductActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.DELETE_PRODUCT_SUCCESS;
    }
}
class DeleteProductActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.DELETE_PRODUCT_ERROR;
    }
}
/*
* selectionner un produit */
class SelectProductAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.SELECT_PRODUCT;
    }
}
class SelectProductActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.SELECT_PRODUCT_SUCCESS;
    }
}
class SelectProductActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionType.SELECT_PRODUCT_ERROR;
    }
}


/***/ }),

/***/ 7604:
/*!***********************************************************!*\
  !*** ./src/app/stat-managment/product/product.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEffects": () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var _services_product_productService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.productService */ 6703);
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.action */ 1910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 367);







let ProductEffects = class ProductEffects {
    constructor(productService, effectAction) {
        this.productService = productService;
        this.effectAction = effectAction;
        /*
        Creation le Effects pour la selection de toutes les collaborateurs
         */
        this.getAllProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.GET_ALL_PRODUCT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.productService.getAllProduct().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_action__WEBPACK_IMPORTED_MODULE_1__.GetAllProductActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _product_action__WEBPACK_IMPORTED_MODULE_1__.GetAllProductActionError(err.message))));
        })));
        /*
      Creation le Effects pour la l'ajout d'un  collaborateur
       */
        this.addProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.ADD_PRODUCT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.productService.addProduct(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_action__WEBPACK_IMPORTED_MODULE_1__.AddProductActionSuccess(action.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _product_action__WEBPACK_IMPORTED_MODULE_1__.AddProductActionError(err.message))));
        })));
        /* Creation le Effects pour la supprission d'un  collaborateur
       */
        this.deleteProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.DELETE_PRODUCT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.productService.deleteProduct(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_action__WEBPACK_IMPORTED_MODULE_1__.DeleteProductActionSuccess(action.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _product_action__WEBPACK_IMPORTED_MODULE_1__.DeleteProductActionError(err.message))));
        })));
        /* Creation le Effects pour la modification d'un  collaborateur
      */
        this.updateProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.UPDATE_PRODUCT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.productService.updateProduct(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_action__WEBPACK_IMPORTED_MODULE_1__.UpdateProductActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _product_action__WEBPACK_IMPORTED_MODULE_1__.UpdateProductActionError(err.message))));
        })));
        /* Creation le Effects pour selectionner collaborateur
       */
        this.selectProduct = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.SELECT_PRODUCT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.productService.getProductByname(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_action__WEBPACK_IMPORTED_MODULE_1__.SelectProductActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _product_action__WEBPACK_IMPORTED_MODULE_1__.SelectProductActionError(err.message))));
        })));
    }
};
ProductEffects.ctorParameters = () => [
    { type: _services_product_productService__WEBPACK_IMPORTED_MODULE_0__.ProductService },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions }
];
ProductEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: "root" })
], ProductEffects);



/***/ }),

/***/ 2855:
/*!********************************************************!*\
  !*** ./src/app/stat-managment/product/product.stat.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductReducer": () => (/* binding */ ProductReducer)
/* harmony export */ });
/* harmony import */ var _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.stat-enum */ 1302);
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.action */ 1910);


class ProductReducer {
    static initProductStat() { return { products: [], selectedProduct: null, stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.INITIAL, error: "" }; }
    ;
    static productReducer(productStat, action) {
        /*
        Gestion de l'etat d'affechage de collaborateurs
        */
        switch (action.type) {
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.GET_ALL_PRODUCT: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.GET_ALL_PRODUCT_SUCCESS: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, products: action.payload });
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.GET_ALL_PRODUCT_ERROR: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, products: action.payload });
            /*
            Gestion de l'etat d'ajout de collaborateurs
            */
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.ADD_PRODUCT: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedProduct: action.payload });
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.ADD_PRODUCT_SUCCESS: {
                let product = action.payload;
                let products = productStat.products;
                let productList = [...productStat.products];
                productList.push(product);
                return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, products: productList });
            }
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.ADD_PRODUCT_ERROR: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, products: action.payload });
            /*
         Gestion de l'etat de supprission de collaborateurs
         */
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.DELETE_PRODUCT: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.DELETE_PRODUCT_SUCCESS: {
                let product1 = action.payload;
                let productList1 = [...productStat.products];
                let index = productList1.indexOf(product1);
                productList1.splice(index, 1);
                return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, products: productList1 });
            }
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.DELETE_PRODUCT_ERROR: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, products: action.payload });
            /*
        Gestion de l'etat de la modification de collaborateurs
        */
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.UPDATE_PRODUCT: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.UPDATE_PRODUCT_SUCCESS: {
                let product2 = action.payload;
                let productList2 = [...productStat.products];
                let index = productList2.indexOf(product2);
                productList2 = productList2.map((p) => p.id == product2.id ? product2 : p);
                return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, products: productList2 });
            }
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.UPDATE_PRODUCT_ERROR: return Object.assign(Object.assign({}, productStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, products: action.payload });
            /*Selection d'un utilisateur */
            case _product_action__WEBPACK_IMPORTED_MODULE_1__.ProductActionType.SELECT_PRODUCT_SUCCESS: return Object.assign(Object.assign({}, productStat), { selectedProduct: action.payload });
            /* Autre*/
            default: return Object.assign({}, productStat);
        }
    }
}


/***/ }),

/***/ 5525:
/*!**********************************************************!*\
  !*** ./src/app/stat-managment/provide/provide.action.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToProvideActionType": () => (/* binding */ ProductToProvideActionType),
/* harmony export */   "InitProductToProvideAction": () => (/* binding */ InitProductToProvideAction),
/* harmony export */   "InitProductToProvideActionSuccess": () => (/* binding */ InitProductToProvideActionSuccess),
/* harmony export */   "InitProductToProvideActionError": () => (/* binding */ InitProductToProvideActionError),
/* harmony export */   "SaveProductToProvideAction": () => (/* binding */ SaveProductToProvideAction),
/* harmony export */   "SaveProductToProvideActionSuccess": () => (/* binding */ SaveProductToProvideActionSuccess),
/* harmony export */   "SaveProductToProvideActionError": () => (/* binding */ SaveProductToProvideActionError),
/* harmony export */   "UnselectProductFromProvideAction": () => (/* binding */ UnselectProductFromProvideAction),
/* harmony export */   "UnselectProductFromProvideActionSuccess": () => (/* binding */ UnselectProductFromProvideActionSuccess),
/* harmony export */   "UnselectProductFromProvideActionError": () => (/* binding */ UnselectProductFromProvideActionError),
/* harmony export */   "SelectProductToProvideAction": () => (/* binding */ SelectProductToProvideAction),
/* harmony export */   "SelectProductToProvideActionSuccess": () => (/* binding */ SelectProductToProvideActionSuccess),
/* harmony export */   "SelectProductToProvideActionError": () => (/* binding */ SelectProductToProvideActionError),
/* harmony export */   "SelectProductProvideAction": () => (/* binding */ SelectProductProvideAction)
/* harmony export */ });
var ProductToProvideActionType;
(function (ProductToProvideActionType) {
    /*
     Action pour initialiser  les produits pour aprovisionnement  (les collaborateur en pecherie)
     */
    ProductToProvideActionType["INIT_PRODUCTS_TO_PROVIDE"] = "[Provide] get all ";
    ProductToProvideActionType["INIT_PRODUCTS_TO_PROVIDE_SUCCESS"] = "[Provide] get all  success";
    ProductToProvideActionType["INIT_PRODUCTS_TO_PROVIDE_ERROR"] = "[Provide] get all error";
    /*
     Action pour deselectionner  un produit de la liste a approvisionner
     */
    ProductToProvideActionType["UNSELECT_PRODUCT_FROM_PROVIDE"] = "[Provide] delete ";
    ProductToProvideActionType["UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS"] = "[Provide] delete  success";
    ProductToProvideActionType["UNSELECT_PRODUCT_FROM_PROVIDE_ERROR"] = "[Provide] delete  error";
    /*SAction pour selectionner  un produit dans la liste a approvisionner  */
    ProductToProvideActionType["SELECT_PRODUCT_TO_PROVIDE"] = "[Provide] select ";
    ProductToProvideActionType["SELECT_PRODUCT_TO_PROVIDE_SUCCESS"] = "[Provide] select success";
    ProductToProvideActionType["SELECT_PRODUCT_TO_PROVIDE_ERROR"] = "[Provide] select   error";
    /*Enregister tous les produits selectionneés a approvisionnés*/
    ProductToProvideActionType["SAVE_PRODUCT_TO_PROVIDE"] = "[Provide] save";
    ProductToProvideActionType["SAVE_PRODUCT_TO_PROVIDE_SUCCESS"] = "[Provide] save success";
    ProductToProvideActionType["SAVE_PRODUCT_TO_PROVIDE_ERROR"] = "[Provide] save   error";
    /*Enregister tous les produits selectionneés a approvisionnés*/
    ProductToProvideActionType["SELECT_PRODUCT_PROVIDE"] = "[Provide] selectionner un produit pour traittment ";
})(ProductToProvideActionType || (ProductToProvideActionType = {}));
/*
 L'action de selection de produit pour approvisionnemt
* */
class InitProductToProvideAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE;
    }
}
class InitProductToProvideActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_SUCCESS;
    }
}
class InitProductToProvideActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_ERROR;
    }
}
/*
L'action de d'engegistrement de produit a approvisionner
* */
class SaveProductToProvideAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE;
    }
}
class SaveProductToProvideActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE_SUCCESS;
    }
}
class SaveProductToProvideActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE_ERROR;
    }
}
/*
Action de deselectionner un produit de la liste
* */
class UnselectProductFromProvideAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE;
    }
}
class UnselectProductFromProvideActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS;
    }
}
class UnselectProductFromProvideActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_ERROR;
    }
}
/*
* selectionner un produit pour approvisionner  */
class SelectProductToProvideAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE;
    }
}
class SelectProductToProvideActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_SUCCESS;
    }
}
class SelectProductToProvideActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_ERROR;
    }
}
/*Type d'action qui nous permettre de selectionner un produit pour traittement */
class SelectProductProvideAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToProvideActionType.SELECT_PRODUCT_PROVIDE;
    }
}


/***/ }),

/***/ 8611:
/*!***********************************************************!*\
  !*** ./src/app/stat-managment/provide/provide.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToProvideEffects": () => (/* binding */ ProductToProvideEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 367);
/* harmony import */ var _services_product_productService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.productService */ 6703);
/* harmony import */ var _provide_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provide.action */ 5525);
/* harmony import */ var _product_product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.action */ 1910);








let ProductToProvideEffects = class ProductToProvideEffects {
    constructor(productService, effectAction) {
        this.productService = productService;
        this.effectAction = effectAction;
        /*
        Creation le Effects pour la selection de toutes les collaborateurs
         */
        this.initProductToProvideEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => {
            let products = action.payload;
            let productsToProvide = [];
            products.forEach(p => productsToProvide.push({
                product: p,
                requestedQuantity: 0,
                isSelected: false
            }));
            return new _provide_action__WEBPACK_IMPORTED_MODULE_1__.InitProductToProvideActionSuccess(productsToProvide);
        })));
        /*
      Creation le Effects pour la l'ajout
       */
        this.selectProductToProvideEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => new _provide_action__WEBPACK_IMPORTED_MODULE_1__.SelectProductToProvideActionSuccess(action.payload))));
        /* Creation le Effects pour la supprission
       */
        this.deleteProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => new _provide_action__WEBPACK_IMPORTED_MODULE_1__.UnselectProductFromProvideActionSuccess(action.payload))));
        /* Creation le Effects pour la modification d'un  collaborateur
      */
        this.saveProductToProvideEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => {
            return this.productService.saveProductToProvide(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_product_action__WEBPACK_IMPORTED_MODULE_2__.GetAllProductAction({})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _provide_action__WEBPACK_IMPORTED_MODULE_1__.SaveProductToProvideActionError((err.message)))));
        })));
    }
};
ProductToProvideEffects.ctorParameters = () => [
    { type: _services_product_productService__WEBPACK_IMPORTED_MODULE_0__.ProductService },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions }
];
ProductToProvideEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: "root" })
], ProductToProvideEffects);



/***/ }),

/***/ 1769:
/*!********************************************************!*\
  !*** ./src/app/stat-managment/provide/provide.stat.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToProvideReducer": () => (/* binding */ ProductToProvideReducer)
/* harmony export */ });
/* harmony import */ var _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.stat-enum */ 1302);
/* harmony import */ var _provide_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provide.action */ 5525);


class ProductToProvideReducer {
    static initProductToProvideStat() { return { productsToProvide: [], selectedProductToProvide: null, stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.INITIAL, error: "" }; }
    ;
    static productToProvideReducer(productToProvideStat, action) {
        /*
        Gestion de l'etat d'affechage de collaborateurs
        */
        switch (action.type) {
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_SUCCESS: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToProvide: action.payload });
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_ERROR: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            /*
            Gestion de l'etat d'ajout d'un produit au collection
            */
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedProductToProvide: action.payload });
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_SUCCESS: {
                let productToProvide = action.payload;
                let productList = [...productToProvideStat.productsToProvide];
                productList = productList.map((p) => p.product.id == productToProvide.product.id ? productToProvide : p);
                // productList.push(product);
                return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToProvide: productList });
            }
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_ERROR: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            /*
            Gestion de l'etat de supprission de collaborateurs
            */
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedProductToProvide: action.payload });
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS: {
                let productToProvide = action.payload;
                let productList = [...productToProvideStat.productsToProvide];
                productList = productList.map((p) => p.product.id == productToProvide.product.id ? productToProvide : p);
                return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToProvide: productList });
            }
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_ERROR: return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            case _provide_action__WEBPACK_IMPORTED_MODULE_1__.ProductToProvideActionType.SELECT_PRODUCT_PROVIDE: {
                return Object.assign(Object.assign({}, productToProvideStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, selectedProductToProvide: action.payload });
            }
            /* Autre*/
            default: return Object.assign({}, productToProvideStat);
        }
    }
}


/***/ }),

/***/ 3723:
/*!****************************************************!*\
  !*** ./src/app/stat-managment/role/role.action.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleActionType": () => (/* binding */ RoleActionType),
/* harmony export */   "GetAllRoleAction": () => (/* binding */ GetAllRoleAction),
/* harmony export */   "GetAllRoleActionSuccess": () => (/* binding */ GetAllRoleActionSuccess),
/* harmony export */   "GetAllRoleActionError": () => (/* binding */ GetAllRoleActionError)
/* harmony export */ });
var RoleActionType;
(function (RoleActionType) {
    /*
     Action pour selectionner le utilisateur (les collaborateur en pecherie)
     */
    RoleActionType["GET_ALL_ROLE"] = "[Role] get all user";
    RoleActionType["GET_ALL_ROLE_SUCCESS"] = "[Role] get all user success";
    RoleActionType["GET_ALL_ROLE_ERROR"] = "[Role] get all user error";
})(RoleActionType || (RoleActionType = {}));
class GetAllRoleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionType.GET_ALL_ROLE;
    }
}
class GetAllRoleActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionType.GET_ALL_ROLE_SUCCESS;
    }
}
class GetAllRoleActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionType.GET_ALL_ROLE_ERROR;
    }
}


/***/ }),

/***/ 1497:
/*!*****************************************************!*\
  !*** ./src/app/stat-managment/role/role.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleEffects": () => (/* binding */ RoleEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication.service */ 9356);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 367);
/* harmony import */ var _role_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.action */ 3723);







let RoleEffects = class RoleEffects {
    constructor(auth, effectAction) {
        this.auth = auth;
        this.effectAction = effectAction;
        this.getAllRoleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_role_action__WEBPACK_IMPORTED_MODULE_1__.RoleActionType.GET_ALL_ROLE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.getAllRole().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _role_action__WEBPACK_IMPORTED_MODULE_1__.GetAllRoleActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _role_action__WEBPACK_IMPORTED_MODULE_1__.GetAllRoleActionError(err.message))));
        })));
    }
};
RoleEffects.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions }
];
RoleEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: "root" })
], RoleEffects);



/***/ }),

/***/ 8693:
/*!**************************************************!*\
  !*** ./src/app/stat-managment/role/role.stat.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleReducer": () => (/* binding */ RoleReducer)
/* harmony export */ });
/* harmony import */ var _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.stat-enum */ 1302);
/* harmony import */ var _role_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.action */ 3723);


class RoleReducer {
    static initRoleStat() {
        return { roles: [], stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.INITIAL, error: "" };
    }
    ;
    static roleReducer(userStat, action) {
        /*
        Gestion de l'etat d'affechage de collaborateurs
        */
        switch (action.type) {
            case _role_action__WEBPACK_IMPORTED_MODULE_1__.RoleActionType.GET_ALL_ROLE:
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _role_action__WEBPACK_IMPORTED_MODULE_1__.RoleActionType.GET_ALL_ROLE_SUCCESS:
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, roles: action.payload });
            case _role_action__WEBPACK_IMPORTED_MODULE_1__.RoleActionType.GET_ALL_ROLE_ERROR:
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, roles: action.payload });
            default: return Object.assign({}, userStat);
        }
    }
}


/***/ }),

/***/ 7502:
/*!****************************************************!*\
  !*** ./src/app/stat-managment/sale/sale.action.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToSaleActionType": () => (/* binding */ ProductToSaleActionType),
/* harmony export */   "InitProductToSaleAction": () => (/* binding */ InitProductToSaleAction),
/* harmony export */   "InitProductToSaleActionSuccess": () => (/* binding */ InitProductToSaleActionSuccess),
/* harmony export */   "InitProductToSaleActionError": () => (/* binding */ InitProductToSaleActionError),
/* harmony export */   "SaveProductToSaleAction": () => (/* binding */ SaveProductToSaleAction),
/* harmony export */   "SaveProductToSaleActionSuccess": () => (/* binding */ SaveProductToSaleActionSuccess),
/* harmony export */   "SaveProductToSaleActionError": () => (/* binding */ SaveProductToSaleActionError),
/* harmony export */   "UnselectProductFromSaleAction": () => (/* binding */ UnselectProductFromSaleAction),
/* harmony export */   "UnselectProductFromSaleActionSuccess": () => (/* binding */ UnselectProductFromSaleActionSuccess),
/* harmony export */   "UnselectProductFromSaleActionError": () => (/* binding */ UnselectProductFromSaleActionError),
/* harmony export */   "SelectProductToSaleAction": () => (/* binding */ SelectProductToSaleAction),
/* harmony export */   "SelectProductToSaleActionSuccess": () => (/* binding */ SelectProductToSaleActionSuccess),
/* harmony export */   "SelectProductToSaleActionError": () => (/* binding */ SelectProductToSaleActionError),
/* harmony export */   "SelectProductSaleAction": () => (/* binding */ SelectProductSaleAction)
/* harmony export */ });
var ProductToSaleActionType;
(function (ProductToSaleActionType) {
    /*
     Action pour initialiser  les produits pour aprovisionnement  (les collaborateur en pecherie)
     */
    ProductToSaleActionType["INIT_PRODUCTS_TO_SALE"] = "[Sale] get all ";
    ProductToSaleActionType["INIT_PRODUCTS_TO_SALE_SUCCESS"] = "[Sale] get all  success";
    ProductToSaleActionType["INIT_PRODUCTS_TO_SALE_ERROR"] = "[Sale] get all error";
    /*
     Action pour deselectionner  un produit de la liste a approvisionner
     */
    ProductToSaleActionType["UNSELECT_PRODUCT_FROM_SALE"] = "[Sale] delete ";
    ProductToSaleActionType["UNSELECT_PRODUCT_FROM_SALE_SUCCESS"] = "[Sale] delete  success";
    ProductToSaleActionType["UNSELECT_PRODUCT_FROM_SALE_ERROR"] = "[Sale] delete  error";
    /*SAction pour selectionner  un produit dans la liste a approvisionner  */
    ProductToSaleActionType["SELECT_PRODUCT_TO_SALE"] = "[Sale] select ";
    ProductToSaleActionType["SELECT_PRODUCT_TO_SALE_SUCCESS"] = "[Sale] select success";
    ProductToSaleActionType["SELECT_PRODUCT_TO_SALE_ERROR"] = "[Sale] select   error";
    /*Enregister tous les produits selectionneés a approvisionnés*/
    ProductToSaleActionType["SAVE_PRODUCT_TO_SALE"] = "[Sale] save";
    ProductToSaleActionType["SAVE_PRODUCT_TO_SALE_SUCCESS"] = "[Sale] save success";
    ProductToSaleActionType["SAVE_PRODUCT_TO_SALE_ERROR"] = "[Sale] save   error";
    /*Enregister tous les produits selectionneés a approvisionnés*/
    ProductToSaleActionType["SELECT_PRODUCT_SALE"] = "[Sale] selectionner un produit pour traittment ";
})(ProductToSaleActionType || (ProductToSaleActionType = {}));
/*
 L'action de selection de produit pour approvisionnemt
* */
class InitProductToSaleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.INIT_PRODUCTS_TO_SALE;
    }
}
class InitProductToSaleActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_SUCCESS;
    }
}
class InitProductToSaleActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_ERROR;
    }
}
/*
L'action de d'engegistrement de produit a approvisionner
* */
class SaveProductToSaleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SAVE_PRODUCT_TO_SALE;
    }
}
class SaveProductToSaleActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SAVE_PRODUCT_TO_SALE_SUCCESS;
    }
}
class SaveProductToSaleActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SAVE_PRODUCT_TO_SALE_ERROR;
    }
}
/*
Action de deselectionner un produit de la liste
* */
class UnselectProductFromSaleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE;
    }
}
class UnselectProductFromSaleActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_SUCCESS;
    }
}
class UnselectProductFromSaleActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_ERROR;
    }
}
/*
* selectionner un produit pour approvisionner  */
class SelectProductToSaleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE;
    }
}
class SelectProductToSaleActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_SUCCESS;
    }
}
class SelectProductToSaleActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_ERROR;
    }
}
/*Type d'action qui nous permettre de selectionner un produit pour traittement */
class SelectProductSaleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductToSaleActionType.SELECT_PRODUCT_SALE;
    }
}


/***/ }),

/***/ 2899:
/*!*****************************************************!*\
  !*** ./src/app/stat-managment/sale/sale.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToSaleEffects": () => (/* binding */ ProductToSaleEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 367);
/* harmony import */ var _services_product_productService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.productService */ 6703);
/* harmony import */ var _product_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/product.action */ 1910);
/* harmony import */ var _sale_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale.action */ 7502);








let ProductToSaleEffects = class ProductToSaleEffects {
    constructor(productService, effectAction) {
        this.productService = productService;
        this.effectAction = effectAction;
        /*
        Creation le Effects pour la selection de toutes les collaborateurs
         */
        this.initProductToSaleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_sale_action__WEBPACK_IMPORTED_MODULE_2__.ProductToSaleActionType.INIT_PRODUCTS_TO_SALE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => {
            let products = action.payload;
            let productsToSale = [];
            products.forEach((p) => {
                if (p.quantity > 0) {
                    productsToSale.push({
                        product: p,
                        requestedQuantity: 0,
                        isSelected: false
                    });
                }
            });
            return new _sale_action__WEBPACK_IMPORTED_MODULE_2__.InitProductToSaleActionSuccess(productsToSale);
        })));
        /*
      Creation le Effects pour la l'ajout
       */
        this.selectProductToSaleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_sale_action__WEBPACK_IMPORTED_MODULE_2__.ProductToSaleActionType.SELECT_PRODUCT_TO_SALE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => new _sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToSaleActionSuccess(action.payload))));
        /* Creation le Effects pour la supprission
       */
        this.deleteProductEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_sale_action__WEBPACK_IMPORTED_MODULE_2__.ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((action) => new _sale_action__WEBPACK_IMPORTED_MODULE_2__.UnselectProductFromSaleActionSuccess(action.payload))));
        /* Creation le Effects pour la modification d'un  collaborateur
      */
        this.saveProductToSaleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_sale_action__WEBPACK_IMPORTED_MODULE_2__.ProductToSaleActionType.SAVE_PRODUCT_TO_SALE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((action) => {
            return this.productService.saveProductToSale(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _product_product_action__WEBPACK_IMPORTED_MODULE_1__.GetAllProductAction({})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _sale_action__WEBPACK_IMPORTED_MODULE_2__.SaveProductToSaleActionError((err.message)))));
        })));
    }
};
ProductToSaleEffects.ctorParameters = () => [
    { type: _services_product_productService__WEBPACK_IMPORTED_MODULE_0__.ProductService },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions }
];
ProductToSaleEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: "root" })
], ProductToSaleEffects);



/***/ }),

/***/ 5531:
/*!**************************************************!*\
  !*** ./src/app/stat-managment/sale/sale.stat.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductToSaleReducer": () => (/* binding */ ProductToSaleReducer)
/* harmony export */ });
/* harmony import */ var _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.stat-enum */ 1302);
/* harmony import */ var _sale_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.action */ 7502);


class ProductToSaleReducer {
    static initProductToSaleStat() { return { productsToSale: [], selectedProductToSale: null, stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.INITIAL, error: "" }; }
    ;
    static productToSaleReducer(productToSaleStat, action) {
        /*
        Gestion de l'etat d'affechage de collaborateurs
        */
        switch (action.type) {
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.INIT_PRODUCTS_TO_SALE: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_SUCCESS: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToSale: action.payload });
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_ERROR: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            /*
            Gestion de l'etat d'ajout d'un produit au collection
            */
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.SELECT_PRODUCT_TO_SALE: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedProductToSale: action.payload });
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_SUCCESS: {
                let productToSale = action.payload;
                let productList = [...productToSaleStat.productsToSale];
                productList = productList.map((p) => p.product.id == productToSale.product.id ? productToSale : p);
                // productList.push(product);
                return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToSale: productList });
            }
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_ERROR: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            /*
            Gestion de l'etat de supprission de collaborateurs
            */
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedProductToSale: action.payload });
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_SUCCESS: {
                let productToSale = action.payload;
                let productList = [...productToSaleStat.productsToSale];
                productList = productList.map((p) => p.product.id == productToSale.product.id ? productToSale : p);
                return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, productsToSale: productList });
            }
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_ERROR: return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR });
            case _sale_action__WEBPACK_IMPORTED_MODULE_1__.ProductToSaleActionType.SELECT_PRODUCT_SALE: {
                //console.log("Je sui dans reducer ECT_PRODUCT_SALE"+ (<ProductToSaleAction>action).payload.product.name)
                return Object.assign(Object.assign({}, productToSaleStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, selectedProductToSale: action.payload });
            }
            /* Autre*/
            default: return Object.assign({}, productToSaleStat);
        }
    }
}


/***/ }),

/***/ 1867:
/*!*****************************************************!*\
  !*** ./src/app/stat-managment/user/user.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionType": () => (/* binding */ UserActionType),
/* harmony export */   "PutCurrentUser": () => (/* binding */ PutCurrentUser),
/* harmony export */   "GetAllUserAction": () => (/* binding */ GetAllUserAction),
/* harmony export */   "GetAllUserActionSuccess": () => (/* binding */ GetAllUserActionSuccess),
/* harmony export */   "GetAllUserActionError": () => (/* binding */ GetAllUserActionError),
/* harmony export */   "AddUserAction": () => (/* binding */ AddUserAction),
/* harmony export */   "AddUserActionSuccess": () => (/* binding */ AddUserActionSuccess),
/* harmony export */   "AddUserActionError": () => (/* binding */ AddUserActionError),
/* harmony export */   "UpdateUserAction": () => (/* binding */ UpdateUserAction),
/* harmony export */   "UpdateUserActionSuccess": () => (/* binding */ UpdateUserActionSuccess),
/* harmony export */   "UpdateUserActionError": () => (/* binding */ UpdateUserActionError),
/* harmony export */   "DeleteUserAction": () => (/* binding */ DeleteUserAction),
/* harmony export */   "DeleteUserActionSuccess": () => (/* binding */ DeleteUserActionSuccess),
/* harmony export */   "DeleteUserActionError": () => (/* binding */ DeleteUserActionError),
/* harmony export */   "SelectUserAction": () => (/* binding */ SelectUserAction),
/* harmony export */   "SelectUserActionSuccess": () => (/* binding */ SelectUserActionSuccess),
/* harmony export */   "SelectUserActionError": () => (/* binding */ SelectUserActionError),
/* harmony export */   "RinitPasswordAction": () => (/* binding */ RinitPasswordAction),
/* harmony export */   "RinitPasswordActionSuccess": () => (/* binding */ RinitPasswordActionSuccess),
/* harmony export */   "RinitPasswordActionError": () => (/* binding */ RinitPasswordActionError)
/* harmony export */ });
var UserActionType;
(function (UserActionType) {
    /*
     Action pour selectionner le utilisateur (les collaborateur en pecherie)
     */
    UserActionType["GET_ALL_USER"] = "[User] get all user";
    UserActionType["GET_ALL_USER_SUCCESS"] = "[User] get all user success";
    UserActionType["GET_ALL_USER_ERROR"] = "[User] get all user error";
    /*
     Action pour ajouter un utlisateur  utilisateur (les collaborateur en pecherie)
     */
    UserActionType["ADD_USER"] = "[User] ajouter user";
    UserActionType["ADD_USER_SUCCESS"] = "[User] ajouter user success";
    UserActionType["ADD_USER_ERROR"] = "[User] ajouter user error";
    /*
     Action pour supprimer un utilisateur (les collaborateur en pecherie)
     */
    UserActionType["DELETE_USER"] = "[User] delete user";
    UserActionType["DELETE_USER_SUCCESS"] = "[User] delete user success";
    UserActionType["DELETE_USER_ERROR"] = "[User] delete user error";
    /*
     Action pour modifier un utilisateur (les collaborateur en pecherie)
     */
    UserActionType["UPDATE_USER"] = "[User] edit user";
    UserActionType["UPDATE_USER_SUCCESS"] = "[User] edit user success";
    UserActionType["UPDATE_USER_ERROR"] = "[User] edit user error";
    /*Selectionner un utilisteur dans le but de le maitre à jour */
    UserActionType["SELECT_USER"] = "[User] select user";
    UserActionType["SELECT_USER_SUCCESS"] = "[User] select user success";
    UserActionType["SELECT_USER_ERROR"] = "[User] select  user error";
    /*
    * Rinsitialiser le mot de passe d'un utilisateeur*/
    UserActionType["RINIT_PASSWORD"] = "[User] rininite password";
    UserActionType["RINIT_PASSWORD_SUCCESS"] = "[User] rinitepassword success";
    UserActionType["RINIT_PASSWORD_ERROR"] = "[User] select  rinitpassword error";
    /*save currente user*/
    UserActionType["PUT_CURRENT_USER"] = "put current user";
})(UserActionType || (UserActionType = {}));
class PutCurrentUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.PUT_CURRENT_USER;
    }
}
/*
Get all user action
* */
class GetAllUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.GET_ALL_USER;
    }
}
class GetAllUserActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.GET_ALL_USER_SUCCESS;
    }
}
class GetAllUserActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.GET_ALL_USER_ERROR;
    }
}
/*
Add user action
* */
class AddUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.ADD_USER;
    }
}
class AddUserActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.ADD_USER_SUCCESS;
    }
}
class AddUserActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.ADD_USER_ERROR;
    }
}
/*
Update user action
* */
class UpdateUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER;
    }
}
class UpdateUserActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER_SUCCESS;
    }
}
class UpdateUserActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.UPDATE_USER_ERROR;
    }
}
/*
Delete user action
* */
class DeleteUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.DELETE_USER;
    }
}
class DeleteUserActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.DELETE_USER_SUCCESS;
    }
}
class DeleteUserActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.DELETE_USER_ERROR;
    }
}
/*
* selectionner un utilisateur */
class SelectUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.SELECT_USER;
    }
}
class SelectUserActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.SELECT_USER_SUCCESS;
    }
}
class SelectUserActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.SELECT_USER_ERROR;
    }
}
/*
* rinistiolier un mot de passe */
class RinitPasswordAction {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.RINIT_PASSWORD;
    }
}
class RinitPasswordActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.RINIT_PASSWORD_SUCCESS;
    }
}
class RinitPasswordActionError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionType.RINIT_PASSWORD_ERROR;
    }
}


/***/ }),

/***/ 2358:
/*!*****************************************************!*\
  !*** ./src/app/stat-managment/user/user.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication.service */ 9356);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ 1867);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 367);







let UserEffects = class UserEffects {
    constructor(auth, effectAction) {
        this.auth = auth;
        this.effectAction = effectAction;
        /*
        Creation le Effects pour la selection de toutes les collaborateurs
         */
        this.getAllUserEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.GET_ALL_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.getAllUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetAllUserActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetAllUserActionError(err.message))));
        })));
        /*
      Creation le Effects pour la l'ajout d'un  collaborateur
       */
        this.addUserEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.ADD_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.addUser(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.AddUserActionSuccess(action.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.AddUserActionError(err.message))));
        })));
        /* Creation le Effects pour la supprission d'un  collaborateur
       */
        this.deleteUserEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.DELETE_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.deleteUser(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteUserActionSuccess(action.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteUserActionError(err.message))));
        })));
        /* Creation le Effects pour la modification d'un  collaborateur
      */
        this.updateUserEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.UPDATE_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.updateUser(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateUserActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateUserActionError(err.message))));
        })));
        /* Creation le Effects pour selectionner collaborateur
       */
        this.selectUser = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.SELECT_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.getUserByname(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.SelectUserActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.SelectUserActionError(err.message))));
        })));
        /* Creation le Effects pour la modification mot de passe d'un  collaborateur
      */
        this.rinitPassworde = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.effectAction.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.RINIT_PASSWORD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((action) => {
            return this.auth.rintPassword(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((r) => new _user_actions__WEBPACK_IMPORTED_MODULE_1__.RinitPasswordActionSuccess(r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.RinitPasswordActionError(err.message))));
        })));
    }
};
UserEffects.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions }
];
UserEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: "root" })
], UserEffects);



/***/ }),

/***/ 3361:
/*!**************************************************!*\
  !*** ./src/app/stat-managment/user/user.stat.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserReducer": () => (/* binding */ UserReducer)
/* harmony export */ });
/* harmony import */ var _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.stat-enum */ 1302);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ 1867);


class UserReducer {
    static initUserStat() { return { users: [], selectedUser: null, stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.INITIAL, error: "", currentUser: null }; }
    ;
    static userReducer(userStat, action) {
        /*
        Gestion de l'etat d'affechage de collaborateurs
        */
        switch (action.type) {
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.GET_ALL_USER: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.GET_ALL_USER_SUCCESS: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, users: action.payload });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.GET_ALL_USER_ERROR: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, users: action.payload });
            /*
            Gestion de l'etat d'ajout de collaborateurs
            */
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.ADD_USER: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING, selectedUser: action.payload });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.ADD_USER_SUCCESS: {
                let user = action.payload;
                let users = userStat.users;
                let userList = [...userStat.users];
                userList.push(user);
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, users: userList });
            }
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.ADD_USER_ERROR: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, users: action.payload });
            /*
         Gestion de l'etat de supprission de collaborateurs
         */
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.DELETE_USER: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.DELETE_USER_SUCCESS: {
                let user1 = action.payload;
                let userList1 = [...userStat.users];
                let index = userList1.indexOf(user1);
                userList1.splice(index, 1);
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, users: userList1 });
            }
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.DELETE_USER_ERROR: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, users: action.payload });
            /*
        Gestion de l'etat de la modification de collaborateurs
        */
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.UPDATE_USER: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.UPDATE_USER_SUCCESS: {
                let user2 = action.payload;
                let userList2 = [...userStat.users];
                userList2 = userList2.map((p) => p.id == user2.id ? user2 : p);
                return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, users: userList2 });
            }
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.UPDATE_USER_ERROR: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, users: action.payload });
            /*Selection d'un utilisateur */
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.SELECT_USER_SUCCESS: return Object.assign(Object.assign({}, userStat), { selectedUser: action.payload });
            /*
            Gestion de l'etat de la modification de mot de passe collaborateurs
            */
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.RINIT_PASSWORD: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADING });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.RINIT_PASSWORD_SUCCESS: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.LOADED, selectedUser: action.payload });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.RINIT_PASSWORD_ERROR: return Object.assign(Object.assign({}, userStat), { stat: _app_stat_enum__WEBPACK_IMPORTED_MODULE_0__.AppStatEnum.ERROR, users: action.payload });
            case _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActionType.PUT_CURRENT_USER: {
                return Object.assign(Object.assign({}, userStat), { currentUser: action.payload });
            }
            /* Autre*/
            default: return Object.assign({}, userStat);
        }
    }
}


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendHost: "http://localhost:8080",
    //backendHost:"http://ec2-3-142-197-2.us-east-2.compute.amazonaws.com:8080",
    tokenName: "token",
    adminName: "ADMINISTRATEUR",
    sallerName: "VENDEUR",
    bayerName: "VENDEUR",
    apiBaseUrl: "http://"
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

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map