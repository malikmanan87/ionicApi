"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_camera_camera_module_ts"],{

/***/ 8986:
/*!******************************************************!*\
  !*** ./src/app/home/camera/camera-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPageRoutingModule": () => (/* binding */ CameraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.page */ 3879);




const routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_0__.CameraPage
    }
];
let CameraPageRoutingModule = class CameraPageRoutingModule {
};
CameraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CameraPageRoutingModule);



/***/ }),

/***/ 1321:
/*!**********************************************!*\
  !*** ./src/app/home/camera/camera.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPageModule": () => (/* binding */ CameraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-routing.module */ 8986);
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.page */ 3879);







let CameraPageModule = class CameraPageModule {
};
CameraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _camera_routing_module__WEBPACK_IMPORTED_MODULE_0__.CameraPageRoutingModule
        ],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_1__.CameraPage]
    })
], CameraPageModule);



/***/ }),

/***/ 3879:
/*!********************************************!*\
  !*** ./src/app/home/camera/camera.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPage": () => (/* binding */ CameraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.page.html?ngResource */ 883);
/* harmony import */ var _camera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.page.scss?ngResource */ 8178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/share */ 8921);






// import { isPlatform } from '@ionic/angular';

let CameraPage = class CameraPage {
    constructor() { }
    ngOnInit() { }
    checkPlatformForWeb() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'web')
            return true;
        return false;
    }
    getPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 90,
                // allowEditing: true,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                width: 600,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            console.log('image: ', image);
            // this.selectImage = image.webPath;
            this.selectImage = image.path;
            // Can be set to the src of an image now
            // imageElement.src = imageUrl;
            let shareRet = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_4__.Share.share({
                title: 'Image Sharing',
                text: 'Share This Image',
                url: this.selectImage,
                dialogTitle: 'Image Sharing',
            });
        });
    }
};
CameraPage.ctorParameters = () => [];
CameraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-camera',
        template: _camera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraPage);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 8178:
/*!*********************************************************!*\
  !*** ./src/app/home/camera/camera.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 883:
/*!*********************************************************!*\
  !*** ./src/app/home/camera/camera.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Camera</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button (click)=\"getPhoto()\" expand=\"block\"> Get Photo </ion-button>\r\n  <img *ngIf=\"selectImage\" [src]=\"selectImage\" />\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_camera_camera_module_ts.js.map