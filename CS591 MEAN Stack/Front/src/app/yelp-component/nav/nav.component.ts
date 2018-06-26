import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  url: any;
  url_short:any;
  login: boolean;
  constructor() {
    this.url = document.URL;

    if (this.url.includes("=")){
      this.login = true;
      this.url_short = this.url.split("=").pop().replace("#",'');

    }
    else{
      this.login = false;
    }

  }

  ngOnInit() {
    this.url;
    this.url_short;
  }

}
