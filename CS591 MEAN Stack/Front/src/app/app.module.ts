import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { YelpComponentComponent } from './yelp-component/master/yelp-component.component';
import { ConnectorService} from "./services/connector.service";
import { HttpClientModule} from "@angular/common/http";
import { NavComponent } from './yelp-component/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    YelpComponentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
