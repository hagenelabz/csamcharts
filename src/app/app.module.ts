import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { XychartComponent } from './xychart/xychart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { MapchartComponent } from './mapchart/mapchart.component';
import { HierarchychartComponent } from './hierarchychart/hierarchychart.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { StockchartComponent } from './stockchart/stockchart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PhosphoriconsComponent } from './phosphoricons/phosphoricons.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VenndiagramComponent } from './venndiagram/venndiagram.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    XychartComponent,
    PiechartComponent,
    RadarchartComponent,
    MapchartComponent,
    HierarchychartComponent,
    FlowchartComponent,
    StockchartComponent,
    PhosphoriconsComponent,
    HeaderComponent,
    FooterComponent,
    VenndiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule, AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
