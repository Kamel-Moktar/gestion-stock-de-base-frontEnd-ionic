(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_product_edit-product_edit-product_module_ts"],{

/***/ 1021:
/*!********************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPageRoutingModule": () => (/* binding */ EditProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-product.page */ 485);




const routes = [
    {
        path: '',
        component: _edit_product_page__WEBPACK_IMPORTED_MODULE_0__.EditProductPage
    }
];
let EditProductPageRoutingModule = class EditProductPageRoutingModule {
};
EditProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProductPageRoutingModule);



/***/ }),

/***/ 8191:
/*!************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPageModule": () => (/* binding */ EditProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-product-routing.module */ 1021);
/* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product.page */ 485);







let EditProductPageModule = class EditProductPageModule {
};
EditProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProductPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_product_page__WEBPACK_IMPORTED_MODULE_1__.EditProductPage]
    })
], EditProductPageModule);



/***/ }),

/***/ 485:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPage": () => (/* binding */ EditProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_edit_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-product.page.html */ 7459);
/* harmony import */ var _edit_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product.page.scss */ 352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stat-managment/product/product.action */ 1910);










let EditProductPage = class EditProductPage {
    constructor(router, fb, store, alertcontroler) {
        this.router = router;
        this.fb = fb;
        this.store = store;
        this.alertcontroler = alertcontroler;
        this.selectedProduct = null;
        this.dataArrived = false;
        this.productForm = this.fb.group({
            id: [""],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        this.state$ = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((s) => {
            this.selectedProduct = s.appStatAct.productStat.selectedProduct;
            if (this.selectedProduct != null) {
                this.productForm = this.fb.group({
                    id: [this.selectedProduct.id],
                    name: [this.selectedProduct.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    quantity: [this.selectedProduct.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
                });
            }
            return s.appStatAct;
        }));
    }
    onEditProduct(p) {
        if (p.id != null) {
            this.store.dispatch(new _stat_managment_product_product_action__WEBPACK_IMPORTED_MODULE_2__.UpdateProductAction({
                id: p.id,
                name: p.name,
                quantity: p.quantity
            }));
        }
        this.router.navigateByUrl('/menu/product');
    }
    onAnnuler() {
        this.router.navigateByUrl('/menu/product');
    }
};
EditProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
EditProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-product',
        template: _raw_loader_edit_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProductPage);



/***/ }),

/***/ 352:
/*!************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2R1Y3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7459:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\" color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      MAJ produit/Ref\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"state$|async as state\">\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"productForm\">\n        <ion-list>\n          <ion-item>\n            <label><strong>Non de collaborateur </strong></label>\n          </ion-item>\n          <ion-item>\n            <ion-input formControlName=\"name\" id=\"name\" placeholder=\"Nom produit\"type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=onEditProduct(productForm.value) expand=\"block\">Enregistrer</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_product_edit-product_edit-product_module_ts.js.map