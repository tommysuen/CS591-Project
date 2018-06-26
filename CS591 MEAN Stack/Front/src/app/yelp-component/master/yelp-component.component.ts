//Yelp-Component handles the Front-End Yelp Integration
import { Component, OnInit } from '@angular/core';
import {ConnectorService} from "../../services/connector.service";


@Component({
  selector: 'app-yelp-component',
  templateUrl: './yelp-component.component.html',
  styleUrls: ['./yelp-component.component.css']
})
export class YelpComponentComponent implements OnInit {
  //Sets up type requirements for variables
  location:any;
  data:any;
  entertainment: any;
  food: any;
  hotels: any;
  activities: any;
  data2: any;
  name_location: any;
  event_activity: any;
  DBContent: any;
  url: any;
  url_short:any;
  login: boolean;
  person_name: any;
  more_activities:any;
  test:boolean;
  index: any;
  delete_location: any;

  constructor(private connectorService:ConnectorService) {
    //Queries the URL and takes the GID to fetch the user's MongoDB Data
    this.url = document.URL;
    if(this.url.includes("=")){
      this.login = true;
    }
    else{
      this.login = false;
    }
    this.url_short = this.url.split("=").pop().replace("#",'');

    this.connectorService.GetFunction('http://localhost:3000/Locations/input/'+this.url_short).subscribe((data:any) =>{
      this.DBContent.push(data);
      //Takes the returned Data and pushed it into DBContent that will be broken down to person's name and more activities
      this.person_name = this.DBContent[0].username;
      this.more_activities = this.DBContent[0].name;
      //console.log(this.DBContent[0])
    });
    return this.DBContent
  }

  ngOnInit() {
    this.location = 0;
    this.entertainment = 0;
    this.data;
    this.hotels;
    this.food;
    this.data2;
    this.name_location;
    this.DBContent=[];
    this.url='';

  }
  //MasterFunction Organizes the calls starting with Yelp and then Events

  GetYelpEvent(location, entertainment){
    this.location = location;
    this.entertainment = entertainment;
    console.log(this.location, this.entertainment)

    this.connectorService.GetFunction('http://localhost:3000/yelp/yelp?location='+this.location+'&entertainment='+this.entertainment).subscribe(res => {
      this.food = [];
      this.hotels = [];
      this.activities = [];
      this.data = res;
      this.food.push(res[0], res[1], res[2]);
      this.hotels.push(res[3], res[4], res[5]);
      this.activities.push(res[6], res[7], res[8])
      //console.log(this.data);

    });
  }


  PostLocation(name_location, event_activity){
    this.name_location = name_location;
    this.event_activity = event_activity;
    for (let i = 0; i <this.more_activities.length; i++){
      if (this.more_activities[i][0] == this.name_location && this.more_activities[i][1] == this.event_activity){
        this.test = true;
        break;

      }
      else{
        this.test = false;
      }

    }
    if (this.test == false){
      this.more_activities.push([this.name_location, this.event_activity])
    }

    this.connectorService.PostLocation({GID: this.url_short, name:this.name_location, activity: this.event_activity}).subscribe((data:any) =>{

    })
  };

  DeleteLocation(delete_location){
    this.index = this.more_activities.indexOf([delete_location]);console.log(delete_location)
    this.more_activities.splice(this.index, 1);
    this.delete_location =delete_location
    console.log(this.delete_location)
    this.connectorService.DeleteLocation({name: this.delete_location}).subscribe((data:any) =>{
      console.log(data);
    })
  };
}
