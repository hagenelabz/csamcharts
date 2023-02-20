import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { ThemePalette } from '@angular/material/core';
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ColorSet } from '@amcharts/amcharts5';
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import * as am5flow from "@amcharts/amcharts5/flow";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";


@Component({
  selector: 'app-hierarchychart',
  templateUrl: './hierarchychart.component.html',
  styleUrls: ['./hierarchychart.component.scss']
})
export class HierarchychartComponent {
  private rootHierarchy!: am5.Root;

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
      let rootHierarchy = am5.Root.new("hierarchychartdiv");

      rootHierarchy.setThemes([am5themes_Animated.new(rootHierarchy)]);

      // Create wrapper container
      const container = rootHierarchy.container.children.push(am5.Container.new(rootHierarchy, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: rootHierarchy.verticalLayout
      }));


      // Create series
      // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
      const series = container.children.push(am5hierarchy.Treemap.new(rootHierarchy, {
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children"
      }));

      // Generate and set data
      // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
      const maxLevels = 2;
      const maxNodes = 6;
      const maxValue = 100;

      const data = {
        name: "Hierarchy",
        children: []
      }
      generateLevel(data, "", 0);

      series.data.setAll([data]);
      series.set("selectedDataItem", series.dataItems[0]);

      container.children.moveValue(
        am5hierarchy.BreadcrumbBar.new(rootHierarchy, {
          series: series
        }), 0
      );

      function generateLevel(data: any, name: string, level: number) {
        for (let i = 0; i < Math.ceil(maxNodes * Math.random()) + 1; i++) {
          let nodeName = name + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
          let child: any;
          if (level < maxLevels) {
            child = {
              name: nodeName + level
            }

            if (level > 0 && Math.random() < 0.5) {
              child.value = Math.round(Math.random() * maxValue);
            }
            else {
              child.children = [];
              generateLevel(child, nodeName + i, level + 1)
            }
          }
          else {
            child = {
              name: name + i,
              value: Math.round(Math.random() * maxValue)
            }
          }
          data.children.push(child);
        }

        level++;
        return data;
      }


      // Make stuff animate on load
      series.appear(1000, 100);
      // Make stuff animate on load
      series.appear(1000, 100);
      this.rootHierarchy = rootHierarchy;
    });
  }
  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.rootHierarchy) {
        this.rootHierarchy.dispose();
      }
    });
  }
}