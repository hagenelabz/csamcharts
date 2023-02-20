import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent {

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
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("radarchartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5radar.RadarChart.new(root, {})
      );

      // Define data
      let data = [{
        date: new Date(2023, 0, 1).getTime(),
        value: 100,
        value2: 220
      }, {
        date: new Date(2023, 0, 2).getTime(),
        value: 320,
        value2: 300
      }, {
        date: new Date(2023, 0, 3).getTime(),
        value: 216,
        value2: 120
      }, {
        date: new Date(2023, 0, 4).getTime(),
        value: 150,
        value2: 190
      }, {
        date: new Date(2023, 0, 5).getTime(),
        value: 156,
        value2: 190
      }, {
        date: new Date(2023, 0, 6).getTime(),
        value: 199,
        value2: 120
      }, {
        date: new Date(2023, 0, 7).getTime(),
        value: 114,
        value2: 300
      }, {
        date: new Date(2023, 0, 8).getTime(),
        value: 269,
        value2: 290
      }, {
        date: new Date(2023, 0, 9).getTime(),
        value: 190,
        value2: 290
      }, {
        date: new Date(2023, 0, 10).getTime(),
        value: 380,
        value2: 170
      }, {
        date: new Date(2023, 0, 11).getTime(),
        value: 250,
        value2: 200
      }, {
        date: new Date(2023, 0, 12).getTime(),
        value: 110,
        value2: 210
      }, {
        date: new Date(2023, 0, 13).getTime(),
        value: 185,
        value2: 85
      }, {
        date: new Date(2023, 0, 14).getTime(),
        value: 105,
        value2: 244
      },
      {
        date: new Date(2023, 0, 15).getTime(),
        value: 650,
        value2: 700
      }
      ];

      // Create Y-axis
      var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          extraTooltipPrecision: 1,
          renderer: am5radar.AxisRendererRadial.new(root, {
            minGridDistance: 20
          })
        })
      );

      yAxis.get("renderer").labels.template.setAll({
        visible: false
      });

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5radar.AxisRendererCircular.new(root, {
            minGridDistance: 20,
            cellStartLocation: 0.2,
            cellEndLocation: 0.8
          })
        })
      );

      xAxis.get("renderer").labels.template.setAll({
        fontSize: 12
      });

      // Create series
      function createSeries(name: string, field: string) {
        var series = chart.series.push(
          am5radar.RadarColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {}),
            clustered: true
          })
        );

        // series.columns.template.setAll({
        //   width: am5.percent(70)
        // })

        series.get("tooltip")?.label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")

        series.data.setAll(data);
      }

      createSeries("Series #1", "value");
      createSeries("Series #2", "value2");

      // Add cursor
      chart.set("cursor", am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
        xAxis: xAxis
      }));

      xAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));

      yAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));

      var legend = chart.children.push(am5.Legend.new(root, {
        centerY: am5.p50,
        y: am5.p50,
        layout: root.verticalLayout,
      }));

      legend.data.setAll(chart.series.values);

    }
    );
  }
}
