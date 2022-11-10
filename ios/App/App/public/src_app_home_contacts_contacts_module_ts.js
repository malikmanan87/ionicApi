"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_contacts_contacts_module_ts"],{

/***/ 5892:
/*!**********************************************************!*\
  !*** ./src/app/home/contacts/contacts-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageRoutingModule": () => (/* binding */ ContactsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page */ 5620);




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ 9373:
/*!**************************************************!*\
  !*** ./src/app/home/contacts/contacts.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageModule": () => (/* binding */ ContactsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 5892);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page */ 5620);







let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage]
    })
], ContactsPageModule);



/***/ }),

/***/ 5620:
/*!************************************************!*\
  !*** ./src/app/home/contacts/contacts.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPage": () => (/* binding */ ContactsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page.html?ngResource */ 3072);
/* harmony import */ var _contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page.scss?ngResource */ 8660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/contacts */ 3694);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 6710);







let ContactsPage = class ContactsPage {
    constructor(callNumber) {
        this.callNumber = callNumber;
        this.contacts = [];
    }
    ngOnInit() {
        this.getContacts();
    }
    getContacts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if ((0,_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.isPlatform)('android')) {
                    const permission = yield _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_3__.Contacts.getPermissions();
                    if (!permission.granted)
                        return;
                }
                const result = yield _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_3__.Contacts.getContacts();
                // (result.contacts).slice(0, 10).map((item, i) => {
                //   this.contacts.push(item);
                // });
                this.contacts = result.contacts;
                console.log(this.contacts);
                // for (const contact of result.contacts) {
                //     console.log(contact);
                // }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    call(contact) {
        console.log(contact);
        let phoneNumber = contact.phoneNumbers[0];
        if (phoneNumber) {
            if ((0,_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.isPlatform)('ios')) {
                phoneNumber = phoneNumber.number;
            }
            this.callNumber.callNumber(phoneNumber, true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        }
    }
};
ContactsPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber }
];
ContactsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contacts',
        template: _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsPage);



/***/ }),

/***/ 8242:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/contacts/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactType": () => (/* binding */ ContactType)
/* harmony export */ });
// declare module "@capacitor/core" {
//   interface PluginRegistry {
//     Contacts: ContactsPlugin;
//   }
// }
var ContactType;

(function (ContactType) {
  ContactType[ContactType["Person"] = 0] = "Person";
  ContactType[ContactType["Organization"] = 1] = "Organization";
})(ContactType || (ContactType = {}));

/***/ }),

/***/ 3694:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor-community/contacts/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ContactType),
/* harmony export */   "Contacts": () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8242);

const Contacts = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Contacts', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_contacts_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 422)).then(m => new m.ContactsPluginWeb())
});



/***/ }),

/***/ 8660:
/*!*************************************************************!*\
  !*** ./src/app/home/contacts/contacts.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3072:
/*!*************************************************************!*\
  !*** ./src/app/home/contacts/contacts.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>contacts Plugins</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      \r\n      <ion-item-sliding *ngFor=\"let contact of contacts\">\r\n        <ion-item>\r\n          {{ contact?.displayName }}\r\n        </ion-item>\r\n\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option>\r\n            <ion-icon name=\"call\" (click)=\"call(contact)\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>  \r\n      </ion-item-sliding>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_contacts_contacts_module_ts.js.map