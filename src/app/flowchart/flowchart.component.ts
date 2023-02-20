import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { ThemePalette } from '@angular/material/core';
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ColorSet } from '@amcharts/amcharts5';
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import * as am5flow from "@amcharts/amcharts5/flow";


@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss']
})
export class FlowchartComponent {

  private rootFlow!: am5.Root;
  private rootCircle!: am5.Root;

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
      let rootFlow = am5.Root.new("flowchartdiv1");
      let rootCircle = am5.Root.new("flowchartdiv2");

      rootFlow.setThemes([am5themes_Animated.new(rootFlow)]);
      rootCircle.setThemes([am5themes_Animated.new(rootCircle)]);


      // Create series
      const series = rootFlow.container.children.push(
        am5flow.Sankey.new(rootFlow, {
          sourceIdField: "from",
          targetIdField: "to",
          valueField: "value"
        })
      );

      const seriesCircle = rootCircle.container.children.push(am5flow.Chord.new(rootCircle, {
        sourceIdField: "source",
        targetIdField: "target",
        valueField: "value"
      }));

      series.nodes.get("colors")!.set("step", 2);
      seriesCircle.nodes.get("colors")!.set("step", 2);

      // Set data
      // https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data

      series.data.setAll([
        { from: "A", to: "B", value: 10 },
        { from: "B", to: "C", value: 8 },
        { from: "C", to: "D", value: 4 },
        { from: "C", to: "E", value: 3 },
        { from: "D", to: "G", value: 5 },
        { from: "D", to: "I", value: 2 },
        { from: "D", to: "H", value: 3 },
        { from: "E", to: "H", value: 6 },
        { from: "G", to: "J", value: 5 },
        { from: "I", to: "J", value: 1 },
        { from: "H", to: "J", value: 9 }


      ]);
      // Example used
      // https://github.com/amcharts/amcharts5/blob/master/examples/shared/flow-chord/index.ts
      seriesCircle.data.setAll([
        { source: "Berlin", target: "Amsterdam", value: 14 },
        { source: "Berlin", target: "London", value: 33 },
        { source: "Berlin", target: "Paris", value: 13 },
        { source: "Berlin", target: "Madrid", value: 36 },

        { source: "Amsterdam", target: "Berlin", value: 42 },
        { source: "Amsterdam", target: "London", value: 20 },
        { source: "Amsterdam", target: "Paris", value: 19 },
        { source: "Amsterdam", target: "Madrid", value: 11 },

        { source: "London", target: "Amsterdam", value: 9 },
        { source: "London", target: "Berlin", value: 38 },
        { source: "London", target: "Paris", value: 41 },
        { source: "London", target: "Madrid", value: 16 },

        { source: "Paris", target: "Amsterdam", value: 12 },
        { source: "Paris", target: "London", value: 16 },
        { source: "Paris", target: "Berlin", value: 21 },
        { source: "Paris", target: "Madrid", value: 8 },

        { source: "Madrid", target: "Amsterdam", value: 22 },
        { source: "Madrid", target: "London", value: 25 },
        { source: "Madrid", target: "Paris", value: 19 },
        { source: "Madrid", target: "Berlin", value: 7 }
      ]);
      // Make stuff animate on load
      series.appear(1000, 100);
      seriesCircle.appear(1000, 100);
      this.rootFlow = rootFlow;
      this.rootCircle = rootCircle;
    });
  }
  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.rootFlow) {
        this.rootCircle.dispose();
      }
    });
  }
}