(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_product_add-product_add-product_module_ts"],{

/***/ 8396:
/*!******************************************************************************!*\
  !*** ./src/app/components/product/add-product/add-product-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPageRoutingModule": () => (/* binding */ AddProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product.page */ 7430);




const routes = [
    {
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_0__.AddProductPage
    }
];
let AddProductPageRoutingModule = class AddProductPageRoutingModule {
};
AddProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProductPageRoutingModule);



/***/ }),

/***/ 9701:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/add-product/add-product.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPageModule": () => (/* binding */ AddProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-routing.module */ 8396);
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.page */ 7430);







let AddProductPageModule = class AddProductPageModule {
};
AddProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProductPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_1__.AddProductPage]
    })
], AddProductPageModule);



/***/ }),

/***/ 7430:
/*!********************************************************************!*\
  !*** ./src/app/components/product/add-product/add-product.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": () => (/* binding */ AddProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-product.page.html */ 454);
/* harmony import */ var _add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.page.scss */ 4994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stat-managment/product/product.action */ 1910);









let AddProductPage = class AddProductPage {
    constructor(fb, router, store, alertcontroler) {
        this.fb = fb;
        this.router = router;
        this.store = store;
        this.alertcontroler = alertcontroler;
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onAddProduct(user) {
        if (this.productForm.valid) {
            this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_2__.AddProductAction({
                id: null,
                name: user.name,
                quantity: 0,
            }));
            this.router.navigateByUrl('/menu/product');
        }
        else
            this.alertcontroler.create({
                header: "Alerte",
                subHeader: "Manque d'iformation",
                message: "Veuillez Comléter la sisai des information Moncantes .",
                buttons: ["OK"]
            }).then(res => { res.present(); });
    }
    onAnnuler() {
        this.router.navigateByUrl('/menu/product');
    }
};
AddProductPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AddProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-product',
        template: _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddProductPage);



/***/ }),

/***/ 4994:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/add-product/add-product.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 454:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/add-product/add-product.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\" color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Ajouter un produit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"productForm\">\n        <ion-list>\n          <ion-item>\n            <ion-input  formControlName=\"name\" id=\"name\" placeholder=\"Nom de produit\"\n                       type=\"text\"></ion-input>\n            <ion-list>\n            </ion-list>\n            <ion-button (click)=onAddProduct(productForm.value) expand=\"block\">Engerister</ion-button>\n            </ion-item>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_product_add-product_add-product_module_ts.js.map