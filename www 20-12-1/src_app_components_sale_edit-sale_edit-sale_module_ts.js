(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_sale_edit-sale_edit-sale_module_ts"],{

/***/ 4421:
/*!***********************************************************************!*\
  !*** ./src/app/components/sale/edit-sale/edit-sale-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalePageRoutingModule": () => (/* binding */ EditSalePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _edit_sale_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sale.page */ 5355);




const routes = [
    {
        path: '',
        component: _edit_sale_page__WEBPACK_IMPORTED_MODULE_0__.EditSalePage
    }
];
let EditSalePageRoutingModule = class EditSalePageRoutingModule {
};
EditSalePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSalePageRoutingModule);



/***/ }),

/***/ 3586:
/*!***************************************************************!*\
  !*** ./src/app/components/sale/edit-sale/edit-sale.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalePageModule": () => (/* binding */ EditSalePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _edit_sale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sale-routing.module */ 4421);
/* harmony import */ var _edit_sale_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sale.page */ 5355);







let EditSalePageModule = class EditSalePageModule {
};
EditSalePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSalePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_sale_page__WEBPACK_IMPORTED_MODULE_1__.EditSalePage]
    })
], EditSalePageModule);



/***/ }),

/***/ 5355:
/*!*************************************************************!*\
  !*** ./src/app/components/sale/edit-sale/edit-sale.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalePage": () => (/* binding */ EditSalePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_edit_sale_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-sale.page.html */ 6890);
/* harmony import */ var _edit_sale_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sale.page.scss */ 1321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stat-managment/sale/sale.action */ 7502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);









let EditSalePage = class EditSalePage {
    constructor(store, router, fb, alertController) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.qteForm = this.fb.group({ qte: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] });
    }
    onAnnuler() {
        let selectedProduct;
        this.store.subscribe(s => selectedProduct = s.appStatAct.productToSaleStat.selectedProductToSale);
        this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToSaleAction({
            product: selectedProduct.product,
            requestedQuantity: 0,
            isSelected: false
        }));
        this.router.navigateByUrl("menu/sale");
    }
    onSelectProduct(value) {
        if (this.qteForm.valid) {
            let selectedProduct;
            this.store.subscribe(s => selectedProduct = s.appStatAct.productToSaleStat.selectedProductToSale);
            this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToSaleAction({ product: selectedProduct.product,
                requestedQuantity: value.qte,
                isSelected: true }));
            this.router.navigateByUrl("menu/sale");
        }
        else {
            this.alertController.create({
                header: "Alert",
                subHeader: "Iformations  monquantes",
                message: "Veuillez Sisaire de donneé valide ",
                buttons: ["OK"]
            }).then(res => { res.present(); });
        }
    }
};
EditSalePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
EditSalePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-sale',
        template: _raw_loader_edit_sale_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_sale_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSalePage);



/***/ }),

/***/ 1321:
/*!***************************************************************!*\
  !*** ./src/app/components/sale/edit-sale/edit-sale.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNhbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 6890:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sale/edit-sale/edit-sale.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\" color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Vente\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"qteForm\">\n        <ion-list>\n          <ion-item>\n            <ion-input  formControlName=\"qte\" id=\"name\" placeholder=\"Qte vendu\"\n                        type=\"number\"></ion-input>\n            <ion-list>\n            </ion-list>\n            <ion-button (click)=onSelectProduct(qteForm.value) expand=\"block\">Valider</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_sale_edit-sale_edit-sale_module_ts.js.map