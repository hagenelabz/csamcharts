import {
    NgModule
  } from "@angular/core";

  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import {MatCardModule} from '@angular/material/card';
  import {MatRadioModule} from '@angular/material/radio';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatButtonModule} from '@angular/material/button';
  import {MatIconModule} from '@angular/material/icon';
  import {MatDividerModule} from '@angular/material/divider';
  import {MatToolbarModule} from '@angular/material/toolbar';

  @NgModule({
    imports: [
        MatSlideToggleModule ,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatToolbarModule,
    ],
    exports: [
        MatSlideToggleModule ,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatToolbarModule
    ]
  })
  export class MaterialModule {}