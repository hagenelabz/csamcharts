import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomIconModuleModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    const icons = [
      'address-book', 'activity', 'airplane',
      'airplane-takeoff', 'airplane-landing', 'airplay',
      'alarm', 'album', 'alert-circle', 'alert-octagon',
      'alert-triangle', 'align-center', 'align-justify',
      'align-left', 'align-right', 'anchor', 'aperture',
      'archive', 'arrow-bar-down', 'arrow-bar-left',
      'arrow-bar-right', 'arrow-bar-up', 'arrow-down',
      'arrow-down-circle', 'arrow-down-left', 'arrow-down-right',
      'arrow-left', 'arrow-left-circle', 'arrow-right',
      'arrow-right-circle', 'arrow-up', 'arrow-up-circle',
      'arrow-up-left', 'arrow-up-right', 'at-sign', 'award',
      'backspace', 'backspace-reverse', 'badge', 'badge-check',
      'ball', 'bandage', 'bar-chart', 'bar-chart-line',
      'bar-chart-square', 'barcode', 'basket', 'basket-fill',
      'battery-charging', 'battery-full', 'battery-low',
      'battery-medium', 'battery-slash', 'battery-warning',
      'beaker', 'bed', 'bell', 'bell-fill', 'bell-ringing',
      'bell-slash', 'bell-slash-fill', 'bicycle', 'binoculars',
      'blockquote-left', 'blockquote-right', 'book', 'bookmark',
      'bookmark-fill', 'bookmarks', 'bookmarks-fill', 'book-open',
      'book-open-fill', 'book-reader', 'book-reader-fill', 'bookmark-slash',
      'bookmark-slash-fill', 'bookmark-star', 'bookmark-star-fill',
      'border-all', 'border-bottom', 'border-horizontal', 'border-inner',
      'border-left', 'border-none', 'border-outer', 'border-right',
      'border-top', 'border-vertical', 'box', 'box-seam', 'briefcase',
      'briefcase-fill', 'broadcast', 'browser', 'brush', 'brush-fill',
      'bug', 'bug-fill', 'building', 'building-fill', 'bullseye',
      'bullseye-arrow', 'bullseye-pointer', 'calculator', 'calendar',
      'calendar-fill', 'calendar-event', 'calendar-event-fill',
      'calendar-minus', 'calendar-minus-fill', 'calendar-plus',
      'calendar-plus-fill', 'calendar-x', 'calendar-x-fill',
      'calendar-star', 'calendar-star-fill', 'calendar-check',
      'calendar-check-fill'
    ];

    for (const icon of icons) {
      this.matIconRegistry.addSvgIconInNamespace(
        'my-namespace',
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/phosphoricons/SVGs/Regular/${icon}.svg`)
      );
    }
  }
}