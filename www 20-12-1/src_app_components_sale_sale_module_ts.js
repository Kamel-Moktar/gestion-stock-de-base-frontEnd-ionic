(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_sale_sale_module_ts"],{

/***/ 408:
/*!********************************************************!*\
  !*** ./src/app/components/sale/sale-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePageRoutingModule": () => (/* binding */ SalePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.page */ 4593);




const routes = [
    {
        path: '',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_0__.SalePage
    },
    {
        path: 'edit-sale',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_sale_edit-sale_edit-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-sale/edit-sale.module */ 3586)).then(m => m.EditSalePageModule)
    }
];
let SalePageRoutingModule = class SalePageRoutingModule {
};
SalePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalePageRoutingModule);



/***/ }),

/***/ 2081:
/*!************************************************!*\
  !*** ./src/app/components/sale/sale.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePageModule": () => (/* binding */ SalePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-routing.module */ 408);
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.page */ 4593);







let SalePageModule = class SalePageModule {
};
SalePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalePageRoutingModule
        ],
        declarations: [_sale_page__WEBPACK_IMPORTED_MODULE_1__.SalePage]
    })
], SalePageModule);



/***/ }),

/***/ 4593:
/*!**********************************************!*\
  !*** ./src/app/components/sale/sale.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePage": () => (/* binding */ SalePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sale.page.html */ 6192);
/* harmony import */ var _sale_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.page.scss */ 1718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stat-managment/sale/sale.action */ 7502);









let SalePage = class SalePage {
    constructor(store, router, alertController) {
        this.store = store;
        this.router = router;
        this.alertController = alertController;
        this.selected = false;
    }
    ngOnInit() {
        this.appStat$ = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((s) => {
            return s.appStatAct;
        }));
        this.appStat$.subscribe(s => this.productToSale = s.productToSaleStat.productsToSale);
    }
    onSave() {
        let products = [];
        this.productToSale.forEach(p => {
            let pp = { id: p.product.id, quantity: p.requestedQuantity, name: p.product.name };
            products.push(pp);
        });
        this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SaveProductToSaleAction(products));
        this.router.navigateByUrl("/menu/home");
    }
    OnSelect(v) {
        this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductSaleAction(v));
        if (!v.isSelected)
            this.router.navigateByUrl("/menu/editSale");
        else {
            this.alertController.create({
                header: 'Alerte',
                subHeader: 'Confirmation :',
                message: 'Vousllez vous vraimment annuler la selection de ce produits  ?',
                buttons: [
                    {
                        text: 'OUI',
                        handler: () => {
                            this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToSaleAction({ product: v.product, requestedQuantity: 0, isSelected: false }));
                        }
                    },
                    {
                        text: 'NO',
                        handler: () => {
                            this.store.dispatch(new _stat_managment_sale_sale_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToSaleAction({ product: v.product, requestedQuantity: v.requestedQuantity, isSelected: true }));
                        }
                    }
                ]
            }).then(res => {
                res.present();
            });
        }
    }
};
SalePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
SalePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sale',
        template: _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sale_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SalePage);



/***/ }),

/***/ 1718:
/*!************************************************!*\
  !*** ./src/app/components/sale/sale.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6192:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sale/sale.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/menu/home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onSave()\">\n        <ion-icon name=\"checkmark-done-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Vendre\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"appStat$|async as stateAcc\" [fullscreen]=\"true\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label><h1>Choisissez Les produits à vendre</h1></ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let v of stateAcc.productToSaleStat.productsToSale\">\n\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-checkbox (click)=\"OnSelect(v)\" [checked]=v.isSelected color=\"primary\" name=\"selected\"\n                    slot=\"start\"></ion-checkbox>\n      <ion-label *ngIf=\"v.product.quantity\">\n        <strong> {{v.product.name}}</strong>\n      </ion-label >\n      <ion-label *ngIf=\"v.product.quantity\"  slot=\"end\">\n        <h6>Qte acheté</h6>\n        <strong> {{v.requestedQuantity}}</strong>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_sale_sale_module_ts.js.map