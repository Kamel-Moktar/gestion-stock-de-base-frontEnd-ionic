(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_user_add-user_add-user_module_ts"],{

/***/ 802:
/*!*********************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPageRoutingModule": () => (/* binding */ AddUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-user.page */ 1056);




const routes = [
    {
        path: '',
        component: _add_user_page__WEBPACK_IMPORTED_MODULE_0__.AddUserPage
    }
];
let AddUserPageRoutingModule = class AddUserPageRoutingModule {
};
AddUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddUserPageRoutingModule);



/***/ }),

/***/ 5600:
/*!*************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPageModule": () => (/* binding */ AddUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-user-routing.module */ 802);
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user.page */ 1056);







let AddUserPageModule = class AddUserPageModule {
};
AddUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddUserPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_1__.AddUserPage]
    })
], AddUserPageModule);



/***/ }),

/***/ 1056:
/*!***********************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPage": () => (/* binding */ AddUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_add_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-user.page.html */ 5494);
/* harmony import */ var _add_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user.page.scss */ 5896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ 9356);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stat-managment/user/user.actions */ 1867);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);











let AddUserPage = class AddUserPage {
    constructor(fb, router, auth, store, alertcontroler) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.alertcontroler = alertcontroler;
    }
    ngOnInit() {
        this.roles$ = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(a => a.appStatAct.roleStat.roles));
        this.userForm = this.fb.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    onAddUser(user) {
        if (this.userForm.valid) {
            this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__.AddUserAction({
                id: null,
                userName: user.userName,
                password: user.password,
                roles: [{ id: null, roleName: user.role }]
            }));
            this.router.navigateByUrl('/menu/users');
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
        this.router.navigateByUrl('/menu/users');
    }
};
AddUserPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
AddUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-user',
        template: _raw_loader_add_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddUserPage);



/***/ }),

/***/ 5896:
/*!*************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5494:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/add-user/add-user.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\" color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      Nouveau Collaborateurs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"userForm\">\n        <ion-list>\n          <ion-item>\n            <ion-input formControlName=\"userName\" id=\"username\" placeholder=\"Nom d'utilistateur\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input formControlName=\"password\" id=\"password\" placeholder=\"Mot de pass\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-list-header>\n            <ion-label><strong> Mission </strong> </ion-label>\n          </ion-list-header>\n          <ion-list>\n            <ion-radio-group *ngIf=\"roles$|async as rolles\" formControlName=\"role\">\n              <ion-item *ngFor=\"let r of rolles\">\n                <ion-label>{{r.roleName}}</ion-label>\n                <ion-radio color=\"primary\" slot=\"start\" value=\"{{r.roleName}}\" ></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-button (click)=onAddUser(userForm.value) expand=\"block\">Engerister</ion-button>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_user_add-user_add-user_module_ts.js.map