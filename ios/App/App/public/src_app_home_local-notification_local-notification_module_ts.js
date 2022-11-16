"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_local-notification_local-notification_module_ts"],{

/***/ 1615:
/*!******************************************************************************!*\
  !*** ./src/app/home/local-notification/local-notification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationPageRoutingModule": () => (/* binding */ LocalNotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _local_notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-notification.page */ 4509);




const routes = [
    {
        path: '',
        component: _local_notification_page__WEBPACK_IMPORTED_MODULE_0__.LocalNotificationPage
    }
];
let LocalNotificationPageRoutingModule = class LocalNotificationPageRoutingModule {
};
LocalNotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocalNotificationPageRoutingModule);



/***/ }),

/***/ 8388:
/*!**********************************************************************!*\
  !*** ./src/app/home/local-notification/local-notification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationPageModule": () => (/* binding */ LocalNotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _local_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-notification-routing.module */ 1615);
/* harmony import */ var _local_notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-notification.page */ 4509);







let LocalNotificationPageModule = class LocalNotificationPageModule {
};
LocalNotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _local_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalNotificationPageRoutingModule
        ],
        declarations: [_local_notification_page__WEBPACK_IMPORTED_MODULE_1__.LocalNotificationPage]
    })
], LocalNotificationPageModule);



/***/ }),

/***/ 4509:
/*!********************************************************************!*\
  !*** ./src/app/home/local-notification/local-notification.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationPage": () => (/* binding */ LocalNotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _local_notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-notification.page.html?ngResource */ 6505);
/* harmony import */ var _local_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-notification.page.scss?ngResource */ 5022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);





let LocalNotificationPage = class LocalNotificationPage {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications.requestPermissions();
        });
    }
    schedule() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const notifs = yield _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications.schedule({
                notifications: [
                    {
                        title: 'Native Plugins App',
                        body: 'Checking Local Notification',
                        id: 1,
                        schedule: { at: new Date(Date.now() + 1000 * 1) },
                        sound: 'sound.wav',
                        attachments: null,
                        smallIcon: 'ic_stat_adb',
                        actionTypeId: '',
                        extra: {
                            data: 'Checking extras',
                        },
                    },
                ],
            });
            console.log('schedule notifications: ', notifs);
        });
    }
};
LocalNotificationPage.ctorParameters = () => [];
LocalNotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-local-notification',
        template: _local_notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_local_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocalNotificationPage);



/***/ }),

/***/ 6398:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/definitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weekday": () => (/* binding */ Weekday)
/* harmony export */ });
/// <reference types="@capacitor/cli" />

/**
 * Day of the week. Used for scheduling notifications on a particular weekday.
 */
var Weekday;

(function (Weekday) {
  Weekday[Weekday["Sunday"] = 1] = "Sunday";
  Weekday[Weekday["Monday"] = 2] = "Monday";
  Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
  Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
  Weekday[Weekday["Thursday"] = 5] = "Thursday";
  Weekday[Weekday["Friday"] = 6] = "Friday";
  Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

/***/ }),

/***/ 5568:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications),
/* harmony export */   "Weekday": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Weekday)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6398);

const LocalNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('LocalNotifications', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_local-notifications_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7671)).then(m => new m.LocalNotificationsWeb())
});



/***/ }),

/***/ 5022:
/*!*********************************************************************************!*\
  !*** ./src/app/home/local-notification/local-notification.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbC1ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6505:
/*!*********************************************************************************!*\
  !*** ./src/app/home/local-notification/local-notification.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>local-notification</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"schedule()\" expand=\"block\" class=\"ion-margin\">\n    Schedule Notification\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_local-notification_local-notification_module_ts.js.map