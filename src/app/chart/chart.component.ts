import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { ThemePalette } from '@angular/material/core';
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ColorSet } from '@amcharts/amcharts5';
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {
  private root!: am5.Root;
  themeColor: ThemePalette = 'primary';
  series1Color: string = "#ff010f";
  series1Value!: string;
  colors = [
    { name: 'Red', hex: '#ff0000' },
    { name: 'Green', hex: '#00ff00' },
    { name: 'Blue', hex: '#0000ff' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    console.log(this.themeColor);
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("rpiechartdiv");

      let responsive = am5themes_Responsive.newEmpty(root);

      responsive.addRule({
        relevant: am5themes_Responsive.widthM,
        applying: function () {
          chart.set("layout", root.verticalLayout);
          legend.setAll({
            y: null,
            centerY: undefined,
            x: am5.p0,
            centerX: am5.p0
          });
        },
        removing: function () {
          chart.set("layout", root.horizontalLayout);
          legend.setAll({
            y: am5.p50,
            centerY: am5.p50,
            x: null,
            centerX: undefined
          });
        }
      });

      root.setThemes([am5themes_Animated.new(root), responsive]);

      let chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.verticalLayout
        })
      );

      // Define data
      let data = [{
        country: "France",
        sales: 100000
      }, {
        country: "Spain",
        sales: 160000
      }, {
        country: "United Kingdom",
        sales: 80000
      }];

      // Create series
      let series = chart.series.push(
        am5percent.PieSeries.new(root, {
          name: "Series",
          valueField: "sales",
          categoryField: "country"
        })
      );
      series.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout
      }));

      legend.data.setAll(series.dataItems);
      let exporting = am5plugins_exporting.Exporting.new(root, {
        menu: am5plugins_exporting.ExportingMenu.new(root, {}),
        pngOptions: {
          quality: 0.8,
          maintainPixelRatio: true
        }
      });
      this.root = root;
    });


  }

  series1Change(v: string) {
    console.log(v);
  }


  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}