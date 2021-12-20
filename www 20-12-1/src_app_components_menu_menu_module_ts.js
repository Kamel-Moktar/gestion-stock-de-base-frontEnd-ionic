(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_menu_menu_module_ts"],{

/***/ 1558:
/*!********************************************************!*\
  !*** ./src/app/components/menu/menu-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 3529);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
        children: [
            {
                path: 'users',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_user_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../user/users/users.module */ 2541)).then(m => m.UsersPageModule)
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/home/home.module */ 2711)).then(m => m.HomePageModule)
            },
            {
                path: 'sale',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_sale_sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../sale/sale.module */ 2081)).then(m => m.SalePageModule)
            },
            {
                path: 'editSale',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_sale_edit-sale_edit-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../sale/edit-sale/edit-sale.module */ 3586)).then(m => m.EditSalePageModule)
            },
            {
                path: 'product',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_product_product_product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../product/product/product.module */ 4116)).then(m => m.ProductPageModule)
            },
            {
                path: 'newProduct',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_product_add-product_add-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../product/add-product/add-product.module */ 9701)).then(m => m.AddProductPageModule)
            },
            {
                path: 'provide',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_provide_provide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../provide/provide.module */ 5757)).then(m => m.ProvidePageModule)
            },
            {
                path: 'editProvide',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_provide_edit-provide_edit-provide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../provide/edit-provide/edit-provide.module */ 3622)).then(m => m.EditProvidePageModule)
            },
            {
                path: 'newUser',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_user_add-user_add-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../user/add-user/add-user.module */ 5600)).then(m => m.AddUserPageModule)
            },
            {
                path: 'updateUser',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_user_edit-user_edit-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../user/edit-user/edit-user.module */ 3538)).then(m => m.EditUserPageModule)
            },
            {
                path: 'updateProduct',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_product_edit-product_edit-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../product/edit-product/edit-product.module */ 8191)).then(m => m.EditProductPageModule)
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 1014:
/*!************************************************!*\
  !*** ./src/app/components/menu/menu.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 1558);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 3529);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 3529:
/*!**********************************************!*\
  !*** ./src/app/components/menu/menu.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 2041);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 3638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servises/authentication.service */ 2207);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stat-managment/provide/provide.action */ 5525);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stat-managment/sale/sale.action */ 7502);











let MenuPage = class MenuPage {
    constructor(router, auth, menuController, store) {
        this.router = router;
        this.auth = auth;
        this.menuController = menuController;
        this.store = store;
        this.listMenu = [
            { title: "Produit/Refference", url: "/menu/product", icon: "albums-outline", },
            { title: "Vendre", url: "/menu/sale", icon: "barcode-outline" },
            { title: "S'aprovisionner", url: "/menu/provide", icon: "boat-outline" },
            { title: "Collaborateurs", url: "/menu/users", icon: "people-outline" },
            { title: "Deconnexion", url: "/login", icon: "log-out-outline" }
        ];
    }
    ngOnInit() {
        this.appStat$ = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((s) => s.appStatAct));
    }
    onMenuAction(m) {
        if (m == "/login")
            this.auth.clearToken();
        if (m == "/menu/sale" || m == "/menu/provide") {
            this.appStat$.subscribe(r => this.products = r.productStat.products);
            this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_3__.InitProductToProvideAction(this.products));
            this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_4__.InitProductToSaleAction(this.products));
        }
        this.router.navigateByUrl(m);
    }
    onMenuDemand() {
        this.menuController.open();
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 3638:
/*!************************************************!*\
  !*** ./src/app/components/menu/menu.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNGIiwiZmlsZSI6Im1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2041:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu contentId=\"content\" type=\"overlay\" side=\"start\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n    <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <ion-menu-toggle *ngFor=\"let m of listMenu\">\n    <ion-item (click)=onMenuAction(m.url)>\n      <ion-icon [name]=\"m.icon\" slot=\"start\"> </ion-icon>\n      <ion-label>{{m.title}} </ion-label>\n    </ion-item>\n  </ion-menu-toggle>\n\n</ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"content\"></ion-router-outlet>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_menu_menu_module_ts.js.map