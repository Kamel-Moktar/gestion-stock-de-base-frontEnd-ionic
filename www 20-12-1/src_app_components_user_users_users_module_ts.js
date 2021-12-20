(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_user_users_users_module_ts"],{

/***/ 5380:
/*!***************************************************************!*\
  !*** ./src/app/components/user/users/users-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 8384);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage,
    },
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 2541:
/*!*******************************************************!*\
  !*** ./src/app/components/user/users/users.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 5380);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 8384);







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 8384:
/*!*****************************************************!*\
  !*** ./src/app/components/user/users/users.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./users.page.html */ 327);
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss */ 6435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servises/authentication.service */ 2207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stat-managment/user/user.actions */ 1867);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _stat_managment_role_role_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stat-managment/role/role.action */ 3723);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);











let UsersPage = class UsersPage {
    constructor(auth, router, store, alertControler) {
        this.auth = auth;
        this.router = router;
        this.store = store;
        this.alertControler = alertControler;
    }
    ngOnInit() {
        this.store.dispatch(new _stat_managment_role_role_action__WEBPACK_IMPORTED_MODULE_4__.GetAllRoleAction({}));
        this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__.GetAllUserAction({}));
        this.statAct = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(s => s.appStatAct));
    }
    onRefresh() {
        this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__.GetAllUserAction({}));
    }
    onAddUser() {
        this.router.navigateByUrl('menu/newUser');
    }
    onDelete(u) {
        this.alertControler.create({
            header: 'Alerte',
            subHeader: 'Confirmation :',
            message: 'Vousllez vous vraimment suprimer ce Collaborateurs ?',
            buttons: [
                {
                    text: 'OUI',
                    handler: () => {
                        this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__.DeleteUserAction(u));
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
    onUpdate(u) {
        this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_3__.SelectUserAction(u.userName));
        this.router.navigateByUrl('menu/updateUser');
    }
};
UsersPage.ctorParameters = () => [
    { type: _servises_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsersPage);



/***/ }),

/***/ 6435:
/*!*******************************************************!*\
  !*** ./src/app/components/user/users/users.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 327:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/users/users.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onRefresh()\">\n        <ion-icon name=\"refresh\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onAddUser()\">\n        <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Collaborateurs\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content *ngIf=\"statAct|async as result \">\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item #item  *ngFor=\"let u of result.userStat.users \">\n\n          <ion-avatar slot=\"start\">\n          </ion-avatar>\n\n          <ion-label>\n            <h5>User Id :<strong>{{u.userName }}</strong></h5>\n            <h6 *ngFor=\"let r of   u.roles\">Mission : {{r.roleName}}</h6>\n          </ion-label>\n\n          <ion-buttons>\n            <ion-button (click)=onUpdate(u) color=\"Medium\">\n              <ion-icon name=\"pencil-outline\" slot=\"end\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-buttons>\n            <ion-button (click)=onDelete(u) color=\"Medium\">\n              <ion-icon color=\"danger\" name=\"trash-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_user_users_users_module_ts.js.map