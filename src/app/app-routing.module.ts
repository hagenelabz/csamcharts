import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HierarchychartComponent } from './hierarchychart/hierarchychart.component';
import { MapchartComponent } from './mapchart/mapchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { StockchartComponent } from './stockchart/stockchart.component';
import { XychartComponent } from './xychart/xychart.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { PhosphoriconsComponent } from './phosphoricons/phosphoricons.component';
import { VenndiagramComponent } from './venndiagram/venndiagram.component';

const routes: Routes = [
  { path: '', title: 'Home', component: ChartComponent, pathMatch: 'full' },
  { path: '' || 'home', title: 'Home', component: ChartComponent, pathMatch: 'full' },
  { path: 'icons', title: 'Phosphor Icons', component: PhosphoriconsComponent, pathMatch: 'full' },
  { path: 'xychart', title: 'XY Chart', component: XychartComponent, pathMatch: 'full' },
  { path: 'stockchart', title: 'Stock Chart', component: StockchartComponent, pathMatch: 'full' },
  { path: 'radarchart', title: 'Radar Chart', component: RadarchartComponent, pathMatch: 'full' },
  { path: 'piechart', title: 'Pie Chart', component: PiechartComponent, pathMatch: 'full' },
  { path: 'mapchart', title: 'Map Chart', component: MapchartComponent, pathMatch: 'full' },
  { path: 'hierarchychart', title: 'Hierarchy Chart', component: HierarchychartComponent, pathMatch: 'full' },
  { path: 'flowchart', title: 'Flow Chart', component: FlowchartComponent, pathMatch: 'full' },
  { path: 'venndiagram', title: 'Venn Diagram', component: VenndiagramComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
