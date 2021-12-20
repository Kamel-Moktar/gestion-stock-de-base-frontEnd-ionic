(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_product_product_product_module_ts"],{

/***/ 7801:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/product/product-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageRoutingModule": () => (/* binding */ ProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 3125);




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ 4116:
/*!**************************************************************!*\
  !*** ./src/app/components/product/product/product.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 7801);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page */ 3125);







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
    })
], ProductPageModule);



/***/ }),

/***/ 3125:
/*!************************************************************!*\
  !*** ./src/app/components/product/product/product.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product.page.html */ 7654);
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss */ 7558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servises/authentication.service */ 2207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stat-managment/product/product.action */ 1910);










let ProductPage = class ProductPage {
    constructor(auth, router, store, alertControler) {
        this.auth = auth;
        this.router = router;
        this.store = store;
        this.alertControler = alertControler;
    }
    ngOnInit() {
        this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_3__.GetAllProductAction({}));
        this.statAct = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(s => s.appStatAct));
    }
    onRefresh() {
        this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_3__.GetAllProductAction({}));
    }
    onAddProduct() {
        this.router.navigateByUrl('menu/newProduct');
    }
    onDeleteProduct(u) {
        this.alertControler.create({
            header: 'Alerte',
            subHeader: 'Confirmation :',
            message: 'Vousllez vous vraimment suprimer ce Collaborateurs ?',
            buttons: [
                {
                    text: 'OUI',
                    handler: () => {
                        this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_3__.DeleteProductAction(u));
                    }
                },
                {
                    text: 'NO',
                    handler: () => {
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    onUpdateProduct(u) {
        this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_3__.SelectProductAction(u.name));
        this.router.navigateByUrl('menu/updateProduct');
    }
};
ProductPage.ctorParameters = () => [
    { type: _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductPage);



/***/ }),

/***/ 7558:
/*!**************************************************************!*\
  !*** ./src/app/components/product/product/product.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7654:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product/product.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onRefresh()\">\n        <ion-icon name=\"refresh\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onAddProduct()\">\n        <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Liste produits/Réf\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content *ngIf=\"statAct|async as result \">\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n\n        <ion-list-header>\n          <ion-label> <strong>Produits</strong> </ion-label>\n        </ion-list-header>\n\n        <ion-item #item  *ngFor=\"let p of result.productStat.products \">\n          <ion-avatar slot=\"start\">\n          </ion-avatar>\n          <ion-label>\n            <h5><strong>{{p.name }}</strong></h5>\n          </ion-label>\n          <ion-buttons>\n            <ion-button (click)=onUpdateProduct(p) color=\"Medium\">\n              <ion-icon name=\"pencil-outline\" slot=\"end\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-buttons>\n            <ion-button (click)=onDeleteProduct(p) color=\"Medium\">\n              <ion-icon color=\"danger\" name=\"trash-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_product_product_product_module_ts.js.map