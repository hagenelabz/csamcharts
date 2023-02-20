import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchychartComponent } from './hierarchychart.component';

describe('HierarchychartComponent', () => {
  let component: HierarchychartComponent;
  let fixture: ComponentFixture<HierarchychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchychartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
