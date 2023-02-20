import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemePalette } from '@angular/material/core';


// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ColorSet } from '@amcharts/amcharts5';
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";


@Component({
  selector: 'app-xychart',
  templateUrl: './xychart.component.html',
  styleUrls: ['./xychart.component.scss']
})

export class XychartComponent {
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
    // console.log(this.themeColor);
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("xychartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      // Define data
      let data = [
        {
          category: "Research",
          value1: 1000,
          value2: 588
        },
        {
          category: "Marketing",
          value1: 1200,
          value2: 1800
        },
        {
          category: "Sales",
          value1: 850,
          value2: 1230
        }
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
      series1.data.setAll(data);
      series1.set("fill", am5.color(this.series1Color)); // set Series color to red

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series2",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category"
        })
      );
      series2.data.setAll(data);
      series2.set("fill", am5.color("#00ff00")); // set Series color to green

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      // custom colors testing
      xAxis.get("renderer").labels.template.setAll({
        fill: root.interfaceColors.get("alternativeText")
      });

      xAxis.setAll({
        background: am5.Rectangle.new(root, {
          // fill: root.interfaceColors.get("alternativeBackground"),
          fill: am5.color("#000000"),
          fillOpacity: 0.7
        })
      });
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