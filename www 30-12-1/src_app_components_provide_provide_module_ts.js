(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_provide_provide_module_ts"],{

/***/ 8931:
/*!**************************************************************!*\
  !*** ./src/app/components/provide/provide-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidePageRoutingModule": () => (/* binding */ ProvidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _provide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provide.page */ 8310);




const routes = [
    {
        path: '',
        component: _provide_page__WEBPACK_IMPORTED_MODULE_0__.ProvidePage
    },
    {
        path: 'edit-provide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_provide_edit-provide_edit-provide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-provide/edit-provide.module */ 3622)).then(m => m.EditProvidePageModule)
    }
];
let ProvidePageRoutingModule = class ProvidePageRoutingModule {
};
ProvidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProvidePageRoutingModule);



/***/ }),

/***/ 5757:
/*!******************************************************!*\
  !*** ./src/app/components/provide/provide.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidePageModule": () => (/* binding */ ProvidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _provide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provide-routing.module */ 8931);
/* harmony import */ var _provide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provide.page */ 8310);







let ProvidePageModule = class ProvidePageModule {
};
ProvidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _provide_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProvidePageRoutingModule
        ],
        declarations: [_provide_page__WEBPACK_IMPORTED_MODULE_1__.ProvidePage]
    })
], ProvidePageModule);



/***/ }),

/***/ 8310:
/*!****************************************************!*\
  !*** ./src/app/components/provide/provide.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidePage": () => (/* binding */ ProvidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_provide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./provide.page.html */ 3756);
/* harmony import */ var _provide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provide.page.scss */ 913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stat-managment/provide/provide.action */ 5525);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);









let ProvidePage = class ProvidePage {
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
        this.appStat$.subscribe(s => this.productToProvide = s.productToProvideStat.productsToProvide);
    }
    onSave() {
        let products = [];
        this.productToProvide.forEach(p => {
            if (p.requestedQuantity > 0) {
                let pp = { id: p.product.id, quantity: p.requestedQuantity, name: p.product.name };
                products.push(pp);
            }
        });
        this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SaveProductToProvideAction(products));
        this.router.navigateByUrl("/menu/home");
    }
    OnSelect(v) {
        this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductProvideAction(v));
        if (!v.isSelected)
            this.router.navigateByUrl("/menu/editProvide");
        else {
            this.alertController.create({
                header: 'Alerte',
                subHeader: 'Confirmation :',
                message: 'Vousllez vous vraimment annuler la selection de ce produits  ?',
                buttons: [
                    {
                        text: 'OUI',
                        handler: () => {
                            this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToProvideAction({ product: v.product, requestedQuantity: 0, isSelected: false }));
                        }
                    },
                    {
                        text: 'NO',
                        handler: () => {
                            this.store.dispatch(new _stat_managment_provide_provide_action__WEBPACK_IMPORTED_MODULE_2__.SelectProductToProvideAction({ product: v.product, requestedQuantity: v.requestedQuantity, isSelected: true }));
                        }
                    }
                ]
            }).then(res => {
                res.present();
            });
        }
    }
};
ProvidePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ProvidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-provide',
        template: _raw_loader_provide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_provide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProvidePage);



/***/ }),

/***/ 913:
/*!******************************************************!*\
  !*** ./src/app/components/provide/provide.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aWRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3756:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/provide/provide.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/menu/home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onSave()\">\n        <ion-icon name=\"checkmark-done-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      S'approvisionner\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"appStat$|async as stateAcc\" [fullscreen]=\"true\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label><h1>Choisissez Les produits à approvisionner</h1></ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let v of stateAcc.productToProvideStat.productsToProvide\">\n      <ion-avatar slot=\"start\">\n      </ion-avatar>\n      <ion-item-group>\n        <ion-checkbox name=\"selected\" [checked]=v.isSelected color=\"primary\" slot=\"start\" (click)=\"OnSelect(v)\"></ion-checkbox>\n        <ion-label>\n          <strong> {{v.product.name}}</strong>\n        </ion-label>\n      </ion-item-group>\n      <ion-label slot=\"end\">\n        <h6>Qte acheté</h6>\n        <strong> {{v.requestedQuantity}}</strong>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_provide_provide_module_ts.js.map