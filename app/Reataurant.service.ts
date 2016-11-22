import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Restaurant } from './Restaurant';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantService {
public restaurant = [];
constructor (private http: Http) {}
     getRestaurants(){
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9766,77.5993&radius=500&types=hospital&key=AIzaSyBiqduWE1mO3jHHgymLub81OMCqfbYpGIE').map((res:Response) => res.json());
     }

     getBothHosDoc(lat,lng){
        return Observable.forkJoin(
          this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lng+'&radius=500&types=hospital&key=AIzaSyBiqduWE1mO3jHHgymLub81OMCqfbYpGIE').map((res:Response) => res.json()),
          this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lng+'&radius=500&types=doctor&key=AIzaSyBiqduWE1mO3jHHgymLub81OMCqfbYpGIE').map((res:Response) => res.json())
        );
     }
}
