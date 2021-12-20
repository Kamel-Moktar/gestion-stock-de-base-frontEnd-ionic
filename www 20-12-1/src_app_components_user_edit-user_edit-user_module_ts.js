(self["webpackChunkpecherie_frontend2"] = self["webpackChunkpecherie_frontend2"] || []).push([["src_app_components_user_edit-user_edit-user_module_ts"],{

/***/ 2119:
/*!***********************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageRoutingModule": () => (/* binding */ EditUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.page */ 7132);




const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_0__.EditUserPage
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ 3538:
/*!***************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageModule": () => (/* binding */ EditUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user-routing.module */ 2119);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page */ 7132);







let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditUserPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_1__.EditUserPage]
    })
], EditUserPageModule);



/***/ }),

/***/ 7132:
/*!*************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": () => (/* binding */ EditUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-user.page.html */ 5081);
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page.scss */ 1993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stat-managment/user/user.actions */ 1867);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 37);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);










let EditUserPage = class EditUserPage {
    constructor(router, fb, store, loadingCtrl, alertcontroler) {
        this.router = router;
        this.fb = fb;
        this.store = store;
        this.loadingCtrl = loadingCtrl;
        this.alertcontroler = alertcontroler;
        this.selectedUser = null;
        this.dataArrived = false;
        this.userForm = this.fb.group({
            id: [""],
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.passwordFormControl = this.fb.group({
            psw: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        //this.basicLoader();
        this.state$ = this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((s) => {
            this.selectedUser = s.appStatAct.userStat.selectedUser;
            let r = "";
            if (this.selectedUser != null) {
                this.dataArrived = true;
                if (this.selectedUser.roles[0] != null)
                    r = this.selectedUser.roles[0].roleName;
                this.userForm = this.fb.group({
                    id: [this.selectedUser.id],
                    userName: [this.selectedUser.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    role: [r, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
                });
            }
            return s.appStatAct;
        }));
    }
    basicLoader() {
        this.loadingCtrl.create({
            message: 'Please wait...',
            duration: 1000,
            translucent: true
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((res) => {
            });
        });
    }
    onEditUser(user) {
        if (user.id != null) {
            this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_2__.UpdateUserAction({
                id: user.id,
                userName: user.userName,
                password: null,
                roles: [{ id: null, roleName: user.role }]
            }));
        }
        this.router.navigateByUrl('/menu/users');
    }
    onAnnuler() {
        this.router.navigateByUrl('/menu/users');
    }
    rinitPasword(s, user) {
        if (this.passwordFormControl.valid) {
            this.store.dispatch(new _stat_managment_user_user_actions__WEBPACK_IMPORTED_MODULE_2__.RinitPasswordAction({
                id: user.id,
                userName: user.userName,
                password: s.psw,
                roles: null
            }));
            this.alertcontroler.create({
                header: "info",
                subHeader: "success",
                message: "Mot de passe rinitialiser avec success",
                buttons: ["OK"]
            }).then(res => { res.present(); });
            this.passwordFormControl = this.fb.group({
                psw: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
        }
        else {
            this.alertcontroler.create({
                header: "Alerte",
                subHeader: "Manque d'iformation",
                message: "Veuillez Comléter la sisai des information Moncantes .",
                buttons: ["OK"]
            }).then(res => { res.present(); });
        }
    }
};
EditUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
EditUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-user',
        template: _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditUserPage);



/***/ }),

/***/ 1993:
/*!***************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5081:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/edit-user/edit-user.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"../home\">\n        <ion-icon name=\"podium-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAnnuler()\" color=\"primary\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>\n      MAJ Collaborateurs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"state$|async as state\">\n  <form>\n    <ion-card-content>\n      <form [formGroup]=\"userForm\">\n        <ion-list>\n          <ion-item>\n            <label><strong>Non de collaborateur </strong></label>\n          </ion-item>\n          <ion-item>\n            <ion-input formControlName=\"userName\" id=\"username\" placeholder=\"Nom d'utilistateur\"\n                       type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-list>\n            <ion-list-header>\n              <ion-label><strong>Mission de collaborateur :</strong></ion-label>\n            </ion-list-header>\n            <ion-radio-group formControlName=\"role\">\n              <ion-item *ngFor=\"let r of state.roleStat.roles\">\n                <ion-label> {{r.roleName}} </ion-label>\n                <ion-radio color=\"primary\" slot=\"start\" value={{r.roleName}}></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <ion-item>\n            <ion-button (click)=onEditUser(userForm.value) expand=\"block\">Enregistrer</ion-button>\n          </ion-item>\n\n\n        </ion-list>\n      </form>\n      <form [formGroup]=\"passwordFormControl\">\n        <ion-list>\n          <ion-item>\n            <label><strong>Rinitialiser password </strong> </label>\n          </ion-item>\n\n          <ion-item>\n            <ion-input  formControlName=\"psw\"   id=\"password\" placeholder=\"Nouveau mot de pass\" slot=\"start\" type=\"text\"></ion-input>\n            <ion-button (click)=rinitPasword(passwordFormControl.value,userForm.value) expand=\"block\" slot=\"end\">Rinitialiser</ion-button>\n          </ion-item>\n\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_components_user_edit-user_edit-user_module_ts.js.map