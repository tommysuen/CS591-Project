import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import { HttpHeaders} from "@angular/common/http";

//Connector acts as the bridge from the back end to front end
//Whenever Front end calls an API in the back end

@Injectable()
export class ConnectorService {
  newLocation: any;

  constructor(private http: HttpClient) {}

  GetFunction(link:string){
    return this.http.get(link).pipe(
      map(res => res));

  };

  PostLocation(newLocation){
    const httpO = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    return this.http.post('http://localhost:3000/Locations/input', newLocation, httpO)
      .pipe(map(res =>res))
  }

  //Deletes location from List
  DeleteLocation(deleteLocation){
    console.log(deleteLocation)
    const httpO = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    return this.http.delete('http://localhost:3000/Locations', deleteLocation)
      .pipe(map(res =>res))
  }
}


