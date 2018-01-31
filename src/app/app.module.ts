import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs.component';
import { ApiService } from './api.service';
import { HttpModule, JsonpModule } from '@angular/http';

import { ChartModule } from 'angular2-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule.forRoot(
        require('highcharts/highstock'),
        require('highcharts/modules/exporting')
    ),
    AccordionModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
