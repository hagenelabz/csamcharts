import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5venn from "@amcharts/amcharts5/venn";

@Component({
  selector: 'app-venndiagram',
  templateUrl: './venndiagram.component.html',
  styleUrls: ['./venndiagram.component.scss']
})
export class VenndiagramComponent {

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
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      let root = am5.Root.new("venndiagramdiv");

      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create wrapper container
      var container = root.container.children.push(am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout
      }));

      // Create venn series
      var chart = container.children.push(am5venn.Venn.new(root, {
        categoryField: "name",
        valueField: "value",
        intersectionsField: "sets",
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40
      }));

      // Set data
      chart.data.setAll([
        { name: "A", value: 10 },
        { name: "B", value: 10 },
        { name: "C", value: 5 },
        { name: "X", value: 4, sets: ["A", "B"] },
        { name: "Y", value: 2, sets: ["A", "C"] },
        { name: "Z", value: 2, sets: ["B", "C"] },
        {
          name: "Q", value: 1, sets: ["A", "B", "C"]
        }]);

      // Set tooltip content
      chart.slices.template.set("tooltipText", "{category}: {value}");

      // Set up hover appearance
      chart.hoverGraphics.setAll({
        strokeDasharray: [3, 3],
        stroke: am5.color(0xffffff),
        strokeWidth: 2
      });

      // Add legend
      var legend = container.children.push(
        am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        })
      );
      legend.data.setAll(chart.dataItems);

    }
    );
  }
}
