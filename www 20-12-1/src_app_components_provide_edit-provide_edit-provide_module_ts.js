(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_provide_edit-provide_edit-provide_module_ts"],{

/***/ 9682:
/*!********************************************************************************!*\
  !*** ./src/app/components/provide/edit-provide/edit-provide-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProvidePageRoutingModule": () => (/* binding */ EditProvidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _edit_provide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-provide.page */ 8938);




const routes = [
    {
        path: '',
        component: _edit_provide_page__WEBPACK_IMPORTED_MODULE_0__.EditProvidePage
    }
];
let EditProvidePageRoutingModule = class EditProvidePageRoutingModule {
};
EditProvidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProvidePageRoutingModule);



/***/ }),

/***/ 3622:
/*!************************************************************************!*\
  !*** ./src/app/components/provide/edit-provide/edit-provide.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProvidePageModule": () => (/* binding */ EditProvidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _edit_provide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-provide-routing.module */ 9682);
/* harmony import */ var _edit_provide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-provide.page */ 8938);







let EditProvidePageModule = class EditProvidePageModule {
};
EditProvidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_provide_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProvidePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_provide_page__WEBPACK_IMPORTED_MODULE_1__.EditProvidePage]
    })
], EditProvidePageModule);



/***/ }),

/***/ 8938:
/*!**********************************************************************!*\
  !*** ./src/app/components/provide/edit-provide/edit-provide.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProvidePage": () => (/* binding */ EditProvidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_edit_provide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-provide.page.html */ 7164);
/* harmony import */ var _edit_provide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-provide.page.scss */ 8963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stat-managment/provide/provide.action */ 5525);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);









let EditProvidePage = class EditProvidePage {
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
        this.store.subscribe(s => selectedProduct = s.appStatAct.productToProvideStat.selectedProductToProvide);
        console.log(selectedProduct.product.name);
        this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToProvideAction({
            product: selectedProduct.product,
            requestedQuantity: 0,
            isSelected: false
        }));
        this.router.navigateByUrl("menu/provide");
    }
    onSelectProduct(value) {
        if (this.qteForm.valid) {
            let selectedProduct;
            this.store.subscribe(s => selectedProduct = s.appStatAct.productToProvideStat.selectedProductToProvide);
            this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToProvideAction({
                product: selectedProduct.product,
                requestedQuantity: value.qte,
                isSelected: true
            }));
            this.router.navigateByUrl("menu/provide");
        }
        else {
            this.alertController.create({
                header: "Alert",
                subHeader: "Iformations  monquantes",
                message: "Veuillez Sisaire de donneé valide ",
                buttons: ["OK"]
            }).then(res => {
                res.present();
            });
        }
    }
};
EditProvidePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
EditProvidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-provide',
        template: _raw_loader_edit_provide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_provide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProvidePage);



/***/ }),

/***/ 8963:
/*!************************************************************************!*\
  !*** ./src/app/components/provide/edit-provide/edit-provide.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb3ZpZGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7164:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/provide/edit-provide/edit-provide.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\"color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Approvisionner\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"qteForm\">\n        <ion-list>\n          <ion-item>\n            <ion-input  formControlName=\"qte\" id=\"name\" placeholder=\"Qte Achetée\"\n                        type=\"number\"></ion-input>\n            <ion-list>\n            </ion-list>\n            <ion-button (click)=onSelectProduct(qteForm.value) expand=\"block\">Valider</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_provide_edit-provide_edit-provide_module_ts.js.map