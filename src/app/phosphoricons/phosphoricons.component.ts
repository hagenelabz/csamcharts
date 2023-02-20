import { Component } from '@angular/core';

@Component({
  selector: 'app-phosphoricons',
  templateUrl: './phosphoricons.component.html',
  styleUrls: ['./phosphoricons.component.scss']
})
export class PhosphoriconsComponent {
  // regularIcons: any = [{
  //   "icons-array": ["address-book", "activity", "airplane",
  //     "airplane-takeoff", "airplane-landing", "airplay",
  //     "alarm", "album", "alert-circle", "alert-octagon",
  //     "alert-triangle", "align-center", "align-justify",
  //     "align-left", "align-right", "anchor", "aperture",
  //     "archive", "arrow-bar-down", "arrow-bar-left",
  //     "arrow-bar-right", "arrow-bar-up", "arrow-down",
  //     "arrow-down-circle", "arrow-down-left", "arrow-down-right",
  //     "arrow-left", "arrow-left-circle", "arrow-right",
  //     "arrow-right-circle", "arrow-up", "arrow-up-circle",
  //     "arrow-up-left", "arrow-up-right", "at-sign", "award",
  //     "backspace", "backspace-reverse", "badge", "badge-check",
  //     "ball", "bandage", "bar-chart", "bar-chart-line",
  //     "bar-chart-square", "barcode", "basket", "basket-fill",
  //     "battery-charging", "battery-full", "battery-low",
  //     "battery-medium", "battery-slash", "battery-warning",
  //     "beaker", "bed", "bell", "bell-fill", "bell-ringing",
  //     "bell-slash", "bell-slash-fill", "bicycle", "binoculars",
  //     "blockquote-left", "blockquote-right", "book", "bookmark",
  //     "bookmark-fill", "bookmarks", "bookmarks-fill", "book-open",
  //     "book-open-fill", "book-reader", "book-reader-fill", "bookmark-slash",
  //     "bookmark-slash-fill", "bookmark-star", "bookmark-star-fill",
  //     "border-all", "border-bottom", "border-horizontal", "border-inner",
  //     "border-left", "border-none", "border-outer", "border-right",
  //     "border-top", "border-vertical", "box", "box-seam", "briefcase",
  //     "briefcase-fill", "broadcast", "browser", "brush", "brush-fill",
  //     "bug", "bug-fill", "building", "building-fill", "bullseye",
  //     "bullseye-arrow", "bullseye-pointer", "calculator", "calendar",
  //     "calendar-fill", "calendar-event", "calendar-event-fill",
  //     "calendar-minus", "calendar-minus-fill", "calendar-plus",
  //     "calendar-plus-fill", "calendar-x", "calendar-x-fill",
  //     "calendar-star", "calendar-star-fill", "calendar-check",
  //     "calendar-check-fill"]
  // }]

  regularIcons: any = [{
    "icons-array": [
      "address-book", "bicycle", "binoculars", "butterfly", "cactus", "cloud-slash", "crown", "dribbble-logo", "gender-transgender", "ghost", "gif", "needle", "pencil-simple", "pencil", "percent", "person-simple-run", "selection-inverse", "selection-plus", "selection-slash", "selection", "share-network", "sparkle", "speaker-high", ,
    ]
  }];

  duoToneIcons: any = [{
    "icons-array": ["arrow-square-up-right-duotone", "asterisk-simple-duotone", "circle-notch-duotone", "code-duotone", "crosshair-simple-duotone", "crown-duotone", "crown-simple-duotone", "git-branch-duotone", "link-simple-horizontal-duotone", "music-note-duotone", "ny-times-logo-duotone", "prohibit-inset-duotone", "radical-duotone", "recycle-duotone", "scroll-duotone", "selection-all-duotone", "selection-background-duotone", "selection-duotone"]
  }];

  fillIcons: any = [{
    "icons-array": [
      "factory-fill", "google-play-logo-fill", "house-fill", "magnifying-glass-minus-fill", "paper-plane-fill", "placeholder-fill", "planet-fill", "shield-slash-fill", "shield-star-fill", "shield-warning-fill", "shopping-bag-fill", "shopping-bag-open-fill", "shopping-cart-fill", "shopping-cart-simple-fill", "shower-fill", "speaker-none-fill", "terminal-window-fill", "tree-evergreen-fill", "wrench-fill",
    ]
  }];

  thinIcons: any = [{
    "icons-array": ["number-square-eight-thin", "suitcase-simple-thin", "thermometer-cold-thin", "thermometer-hot-thin", "thermometer-simple-thin", "thermometer-thin", "thumbs-down-thin", "thumbs-up-thin", "ticket-thin", "tiktok-logo-thin", "timer-thin", "toggle-left-thin", "toggle-right-thin", "toilet-paper-thin", "trophy-thin", "truck-thin", "twitch-logo-thin", "twitter-logo-thin", "umbrella-simple-thin", "user-plus-thin", "user-rectangle-thin", "user-square-thin", "user-switch-thin", "user-thin",]
  }];
  ngOnInit() {
    console.log(this.regularIcons[0]['icons-array'][0]);
  }
}
