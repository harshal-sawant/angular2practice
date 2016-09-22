import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { CustomComponent } from './custom/custom.component';
import { CustomChildHomeComponent } from './custom/CustomChildHome.component';
import { CustomChildComponent } from './custom/Customchild.component';
import { CustomChildParamComponent } from './custom/Customchildparam.component';

import { CustomDirective } from "./custom/custom.directive";
import { CustomPipe } from "./custom/custom.pipe";

import { PrivateComponent }     from './private/private.component';


import { app_routing } from './app.routing';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, app_routing ],
  declarations: [ AppComponent, HomeComponent, FeatureComponent, CustomComponent, CustomChildComponent, CustomChildHomeComponent, CustomChildParamComponent, PrivateComponent, CustomDirective, CustomPipe],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }