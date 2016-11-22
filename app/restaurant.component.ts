// Include
import { Component, NgModule, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormControl, FormsModule,Validators, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { RestaurantService } from './Reataurant.service';
import { Restaurant } from './Restaurant';


// Component
@Component({
    selector: 'near-restaurants',
     styles: [`
       .sebm-google-map-container {
         height: 600px;
       }
    `],
    template: `<div class="container">
      <div class="col-md-8">
        <sebm-google-map [latitude]="latitude" [longitude]="longitude" [zoom]="17">
          <sebm-google-map-marker *ngFor="let m of markers; let i = index"  [latitude]="m.lat"
          [longitude]="m.lng" [label]="m.label" [iconUrl]="m.icon"></sebm-google-map-marker>
        </sebm-google-map>
        </div>
          <div class="col-md-4">
             <input placeholder="search for location" type="text" class="form-control" #search [formControl]="searchControl">
          </div>
      </div>`,
    providers: [RestaurantService]
})


// Export
export class RestaurantComponent implements OnInit {
   public address : Object;
   public restaurants : any;
   public foods_error : any;
   public markers =  [];
   public doctor = [];
   public latitude: number = 12.9766;
   public longitude: number = 77.5993;
   public searchControl: FormControl;
   @ViewChild("search")
   public searchElementRef: ElementRef;
   constructor(private _restaurantService:RestaurantService,private mapsAPILoader: MapsAPILoader){
        this.getRestaurants();
   }

   ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.getRestaurants();
      });
    });
  }

  getRestaurants(){
    this._restaurantService.getBothHosDoc(this.latitude,this.longitude).subscribe(
       data => {
         this.restaurants = data[0].results;
         this.doctor = data[1].results;
         for(let i = 0 ; i < this.restaurants.length; i++ ){
           this.markers.push({
             lat: this.restaurants[i].geometry.location.lat,
             lng: this.restaurants[i].geometry.location.lng,
             label: this.restaurants[i].name,
             icon : this.restaurants[i].icon,
             draggable: true
           });
         }
         for(let i = 0 ; i < this.doctor.length; i++ ){
           this.markers.push({
             lat: this.doctor[i].geometry.location.lat,
             lng: this.doctor[i].geometry.location.lng,
             label: this.doctor[i].name,
             icon : this.doctor[i].icon,
             draggable: true
           });
         }
       }
     );
  }
}
