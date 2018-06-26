(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-yelp-component></app-yelp-component>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _yelp_component_master_yelp_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yelp-component/master/yelp-component.component */ "./src/app/yelp-component/master/yelp-component.component.ts");
/* harmony import */ var _services_connector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/connector.service */ "./src/app/services/connector.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _yelp_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yelp-component/nav/nav.component */ "./src/app/yelp-component/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _yelp_component_master_yelp_component_component__WEBPACK_IMPORTED_MODULE_5__["YelpComponentComponent"],
                _yelp_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_services_connector_service__WEBPACK_IMPORTED_MODULE_6__["ConnectorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/connector.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/connector.service.ts ***!
  \***********************************************/
/*! exports provided: ConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorService", function() { return ConnectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Connector acts as the bridge from the back end to front end
//Whenever Front end calls an API in the back end
var ConnectorService = /** @class */ (function () {
    function ConnectorService(http) {
        this.http = http;
    }
    ConnectorService.prototype.GetFunction = function (link) {
        return this.http.get(link).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ;
    ConnectorService.prototype.PostLocation = function (newLocation) {
        var httpO = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/Locations/input', newLocation, httpO)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    //Deletes location from List
    ConnectorService.prototype.DeleteLocation = function (deleteLocation) {
        console.log(deleteLocation);
        var httpO = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete('http://localhost:3000/Locations', deleteLocation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ConnectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConnectorService);
    return ConnectorService;
}());



/***/ }),

/***/ "./src/app/yelp-component/master/yelp-component.component.css":
/*!********************************************************************!*\
  !*** ./src/app/yelp-component/master/yelp-component.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n  margin:auto; float:left; display:block; padding-left: 5px; border-left-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/yelp-component/master/yelp-component.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/yelp-component/master/yelp-component.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Author: Tommy Suen\n-->\n\n<!--Bootstrap 4 CSS Stylesheet integration-->\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\" integrity=\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\" crossorigin=\"anonymous\">\n</head>\n\n<!--Calls the master function which will call the back end's Yelp, Eventful, and Ticketmaster API-->\n<form (submit)= \"GetYelpEvent(location.value, entertainment.value)\" style=\"margin:auto; width:50%\" class=\"form-inline\">\n  <div>\n    <label>Welcome {{person_name}}!</label>\n    <input placeholder=\"Pick a place\" type=\"any\" style=\"width:30%; margin-right: 15px\" #location required>\n    <input name=\"entertainment\" required ngModel placeholder=\"Pick an activity\" type=\"any\" style=\"width: 30%; margin-right: 15px\" #entertainment=\"ngModel\">\n    <input class=\"btn btn-secondary\" type=\"submit\"style=\"display: inline-block\">\n    <input class=\"btn btn-secondary\" type=\"button\" value=\"Save Location\" style =\"float:right;display:inline-block\"(click)=\"PostLocation(location.value, entertainment.value)\" *ngIf=\"login\">\n  </div>\n</form>\n\n<!--Only people who are logged in can see their favorite locations and save their interested locations-->\n<span *ngIf=\"login\" style= \"float:left; text-indent: 120px; padding-right: 10px;\"> Your Favorite Locations: </span>\n<div *ngFor=\"let content of more_activities\">\n  <p (click)=\"DeleteLocation(content)\" class=\"box\">{{content}} |</p>\n\n</div>\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h4 *ngIf=\"login\">Top Restaurants</h4>\n      <li style=\"list-style: none;\" *ngFor=\"let food of food\">\n        <!--This loop will list all of the top 3 restaurants and a save location button-->\n        <h5>{{food[0]}} |Rating: {{food[2]}} Stars Based on {{food[3]}} Reviews</h5>\n        <a href={{food[5]}}> <img src= {{food[1]}} style=\"width:200px;height:200px;\"></a>\n        <input class=\"btn btn-secondary\" type=\"button\" value=\"Save Location\" style =\"float:right;display:inline-block\"(click)=\"PostLocation(location.value, food[0])\" *ngIf=\"login\">\n      </li>\n    </div>\n    <div class=\"col-lg-4\">\n      <h4 *ngIf=\"login\">Top Hotels</h4>\n      <li style=\"list-style: none;\" *ngFor=\"let hotel of hotels\">\n        <!--This loop will list all of the top 3 hotels and a save location button-->\n        <h5>{{hotel[0]}} |Rating: {{hotel[2]}} Stars Based on {{hotel[3]}} Reviews</h5>\n        <a href={{hotel[5]}}> <img src= {{hotel[1]}} style=\"width:200px;height:200px;\"></a>\n        <input class=\"btn btn-secondary\" type=\"button\" value=\"Save Location\" style =\"float:right;display:inline-block\"(click)=\"PostLocation(location.value, hotel[0])\" *ngIf=\"login\">\n      </li>\n    </div>\n    <div class=\"col-lg-4\">\n      <h4 *ngIf=\"login\">Top Activities</h4>\n      <li style=\"list-style: none;\" *ngFor=\"let activities of activities\">\n        <!--This loop will list all of the top 3 User's Choice Entertainment and a save location button-->\n        <h5 *ngIf=\"activities[2] != -1\">{{activities[0]}} |Prices from: ${{activities[2]}} - ${{activities[3]}}</h5>\n        <h5 *ngIf=\"activities[2] == -1\">{{activities[0]}} |No Prices Currently Available</h5>\n        <a href ={{activities[5]}}><img src= {{activities[4]}} style=\"width:200px;height:200px;\"></a>\n        <input class=\"btn btn-secondary\" type=\"button\" value=\"Save Location\" style =\"float:right;display:inline-block\"(click)=\"PostLocation(location.value, activities[0])\" *ngIf=\"login\">\n      </li>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/yelp-component/master/yelp-component.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/yelp-component/master/yelp-component.component.ts ***!
  \*******************************************************************/
/*! exports provided: YelpComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YelpComponentComponent", function() { return YelpComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_connector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connector.service */ "./src/app/services/connector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Yelp-Component handles the Front-End Yelp Integration


var YelpComponentComponent = /** @class */ (function () {
    function YelpComponentComponent(connectorService) {
        var _this = this;
        this.connectorService = connectorService;
        //Queries the URL and takes the GID to fetch the user's MongoDB Data
        this.url = document.URL;
        if (this.url.includes("=")) {
            this.login = true;
        }
        else {
            this.login = false;
        }
        this.url_short = this.url.split("=").pop().replace("#", '');
        this.connectorService.GetFunction('http://localhost:3000/Locations/input/' + this.url_short).subscribe(function (data) {
            _this.DBContent.push(data);
            //Takes the returned Data and pushed it into DBContent that will be broken down to person's name and more activities
            _this.person_name = _this.DBContent[0].username;
            _this.more_activities = _this.DBContent[0].name;
            //console.log(this.DBContent[0])
        });
        return this.DBContent;
    }
    YelpComponentComponent.prototype.ngOnInit = function () {
        this.location = 0;
        this.entertainment = 0;
        this.data;
        this.hotels;
        this.food;
        this.data2;
        this.name_location;
        this.DBContent = [];
        this.url = '';
    };
    //MasterFunction Organizes the calls starting with Yelp and then Events
    YelpComponentComponent.prototype.GetYelpEvent = function (location, entertainment) {
        var _this = this;
        this.location = location;
        this.entertainment = entertainment;
        console.log(this.location, this.entertainment);
        this.connectorService.GetFunction('http://localhost:3000/yelp/yelp?location=' + this.location + '&entertainment=' + this.entertainment).subscribe(function (res) {
            _this.food = [];
            _this.hotels = [];
            _this.activities = [];
            _this.data = res;
            _this.food.push(res[0], res[1], res[2]);
            _this.hotels.push(res[3], res[4], res[5]);
            _this.activities.push(res[6], res[7], res[8]);
            //console.log(this.data);
        });
    };
    YelpComponentComponent.prototype.PostLocation = function (name_location, event_activity) {
        this.name_location = name_location;
        this.event_activity = event_activity;
        for (var i = 0; i < this.more_activities.length; i++) {
            if (this.more_activities[i][0] == this.name_location && this.more_activities[i][1] == this.event_activity) {
                this.test = true;
                break;
            }
            else {
                this.test = false;
            }
        }
        if (this.test == false) {
            this.more_activities.push([this.name_location, this.event_activity]);
        }
        this.connectorService.PostLocation({ GID: this.url_short, name: this.name_location, activity: this.event_activity }).subscribe(function (data) {
        });
    };
    ;
    YelpComponentComponent.prototype.DeleteLocation = function (delete_location) {
        this.index = this.more_activities.indexOf([delete_location]);
        console.log(delete_location);
        this.more_activities.splice(this.index, 1);
        this.delete_location = delete_location;
        console.log(this.delete_location);
        this.connectorService.DeleteLocation({ name: this.delete_location }).subscribe(function (data) {
            console.log(data);
        });
    };
    ;
    YelpComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yelp-component',
            template: __webpack_require__(/*! ./yelp-component.component.html */ "./src/app/yelp-component/master/yelp-component.component.html"),
            styles: [__webpack_require__(/*! ./yelp-component.component.css */ "./src/app/yelp-component/master/yelp-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_connector_service__WEBPACK_IMPORTED_MODULE_1__["ConnectorService"]])
    ], YelpComponentComponent);
    return YelpComponentComponent;
}());



/***/ }),

/***/ "./src/app/yelp-component/nav/nav.component.css":
/*!******************************************************!*\
  !*** ./src/app/yelp-component/nav/nav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*Header Section*/\r\nheader{\r\n  background:#000000;\r\n  color:#ffffff;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\nheader a{\r\n  color:#ffffff;\r\n  text-decoration: none;\r\n  text-transform: none;\r\n  padding: 10px 15px;\r\n  font-size: .9em;\r\n  font-weight:100;\r\n}\r\nheader a:hover{\r\n  color: #a49c9a;\r\n}\r\nheader li{\r\n  float: left;\r\n  display: block;\r\n  width: 10%;\r\n}\r\n/*Navigation Bar Images*/\r\n/*Showcase Sections*/\r\n#showcase{\r\n  min-height: 155px;\r\n  background: url('Aruba.jpg') no-repeat, url('Mountain.jpg') 50% no-repeat, url('Florida.JPG') 100% no-repeat;\r\n  background-size: contain, contain, 270px 200px;\r\n  text-align: center;\r\n  color:#000000;\r\n  border-bottom: #ffffff 3px solid;\r\n}\r\n#showcase p{\r\n  padding-top: 0px;\r\n  font-weight: 580;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/yelp-component/nav/nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/yelp-component/nav/nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"navigation\">\n      <nav>\n        <ul>\n          <!--Navigation Bar Login and Signout-->\n          <li *ngIf=\"!login\"> <a href=\"http://localhost:3000/auth/google\">Sign In</a></li>\n          <li *ngIf=\"login\"> <a href=\"http://localhost:3000/auth/logout\">Sign Out</a></li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</header>\n\n<section id=\"showcase\">\n  <div class=\"container\">\n    <p><span style=\"font-size:2.5em;\"> Lets Go Places</span><br/>\n      <span style=\"font-size:1em;\">Travel, Live, Experience</span>\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/yelp-component/nav/nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/yelp-component/nav/nav.component.ts ***!
  \*****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.url = document.URL;
        if (this.url.includes("=")) {
            this.login = true;
            this.url_short = this.url.split("=").pop().replace("#", '');
        }
        else {
            this.login = false;
        }
    }
    NavComponent.prototype.ngOnInit = function () {
        this.url;
        this.url_short;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/yelp-component/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/yelp-component/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom\Desktop\Academics\CS591 MEAN Stack\Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map