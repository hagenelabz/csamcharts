import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapchartComponent } from './mapchart.component';

describe('MapchartComponent', () => {
  let component: MapchartComponent;
  let fixture: ComponentFixture<MapchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
