import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5map from "@amcharts/amcharts5/map";
// npm install @amcharts/amcharts5-geodata
// Required for map data from amcharts
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
@Component({
  selector: 'app-mapchart',
  templateUrl: './mapchart.component.html',
  styleUrls: ['./mapchart.component.scss']
})
export class MapchartComponent {
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
      let root = am5.Root.new("mapchartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          projection: am5map.geoNaturalEarth1()
        })
      );

      // Create polygon series
      var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          // exclude: ["AQ", "US", "UK"],
          // include: ["CA", "MX", "US", "AU", "AQ"],
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color('#93186c'),
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color('#16666f')
      });

    }
    );
  }
}
