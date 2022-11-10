"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_network_network_module_ts"],{

/***/ 1193:
/*!********************************************************!*\
  !*** ./src/app/home/network/network-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageRoutingModule": () => (/* binding */ NetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.page */ 9458);




const routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_0__.NetworkPage
    }
];
let NetworkPageRoutingModule = class NetworkPageRoutingModule {
};
NetworkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NetworkPageRoutingModule);



/***/ }),

/***/ 2819:
/*!************************************************!*\
  !*** ./src/app/home/network/network.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageModule": () => (/* binding */ NetworkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-routing.module */ 1193);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page */ 9458);







let NetworkPageModule = class NetworkPageModule {
};
NetworkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule
        ],
        declarations: [_network_page__WEBPACK_IMPORTED_MODULE_1__.NetworkPage]
    })
], NetworkPageModule);



/***/ }),

/***/ 9458:
/*!**********************************************!*\
  !*** ./src/app/home/network/network.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPage": () => (/* binding */ NetworkPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.page.html?ngResource */ 3163);
/* harmony import */ var _network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page.scss?ngResource */ 754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/toast */ 5881);






let NetworkPage = class NetworkPage {
    constructor(NgZone) {
        this.NgZone = NgZone;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.networkistener = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.addListener('networkStatusChange', (status) => {
                console.log('Network status changed', status);
                this.NgZone.run(() => {
                    this.changeStatus(status);
                });
            });
            const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.getStatus();
            this.changeStatus(status);
            console.log('Network status:', this.status);
        });
    }
    changeStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.status = status;
            this.status = status.connected ? 'Online' : 'Offline';
            yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_3__.Toast.show({
                text: this.status,
            });
        });
    }
    ngOnDestroy() {
        if (this.networkistener)
            this.networkistener.remove();
    }
};
NetworkPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
NetworkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-network',
        template: _network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NetworkPage);



/***/ }),

/***/ 7909:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4984:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7909);

const Network = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Network', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_network_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5442)).then(m => new m.NetworkWeb())
});



/***/ }),

/***/ 3915:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/toast/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5881:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/toast/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3915);

const Toast = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Toast', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_toast_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4749)).then(m => new m.ToastWeb())
});



/***/ }),

/***/ 754:
/*!***********************************************************!*\
  !*** ./src/app/home/network/network.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXR3b3JrLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3163:
/*!***********************************************************!*\
  !*** ./src/app/home/network/network.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Network & Toast</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- {{status?.connected ? 'Device Online' : 'Device Offline'}} -->\r\n  {{ status }}\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_network_network_module_ts.js.map