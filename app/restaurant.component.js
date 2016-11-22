"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Include
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var core_2 = require('angular2-google-maps/core');
var Reataurant_service_1 = require('./Reataurant.service');
// Component
var RestaurantComponent = (function () {
    function RestaurantComponent(_restaurantService, mapsAPILoader) {
        this._restaurantService = _restaurantService;
        this.mapsAPILoader = mapsAPILoader;
        this.markers = [];
        this.doctor = [];
        this.latitude = 12.9766;
        this.longitude = 77.5993;
        this.getRestaurants();
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new forms_1.FormControl();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                var place = autocomplete.getPlace();
                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
                _this.getRestaurants();
            });
        });
    };
    RestaurantComponent.prototype.getRestaurants = function () {
        var _this = this;
        this._restaurantService.getBothHosDoc(this.latitude, this.longitude).subscribe(function (data) {
            _this.restaurants = data[0].results;
            _this.doctor = data[1].results;
            for (var i = 0; i < _this.restaurants.length; i++) {
                _this.markers.push({
                    lat: _this.restaurants[i].geometry.location.lat,
                    lng: _this.restaurants[i].geometry.location.lng,
                    label: _this.restaurants[i].name,
                    icon: _this.restaurants[i].icon,
                    draggable: true
                });
            }
            for (var i = 0; i < _this.doctor.length; i++) {
                _this.markers.push({
                    lat: _this.doctor[i].geometry.location.lat,
                    lng: _this.doctor[i].geometry.location.lng,
                    label: _this.doctor[i].name,
                    icon: _this.doctor[i].icon,
                    draggable: true
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild("search"), 
        __metadata('design:type', core_1.ElementRef)
    ], RestaurantComponent.prototype, "searchElementRef", void 0);
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'near-restaurants',
            styles: ["\n       .sebm-google-map-container {\n         height: 600px;\n       }\n    "],
            template: "<div class=\"container\">\n      <div class=\"col-md-8\">\n        <sebm-google-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"17\">\n          <sebm-google-map-marker *ngFor=\"let m of markers; let i = index\"  [latitude]=\"m.lat\"\n          [longitude]=\"m.lng\" [label]=\"m.label\" [iconUrl]=\"m.icon\"></sebm-google-map-marker>\n        </sebm-google-map>\n        </div>\n          <div class=\"col-md-4\">\n             <input placeholder=\"search for location\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n          </div>\n      </div>",
            providers: [Reataurant_service_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [Reataurant_service_1.RestaurantService, core_2.MapsAPILoader])
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;
//# sourceMappingURL=restaurant.component.js.map