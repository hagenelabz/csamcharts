import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhosphoriconsComponent } from './phosphoricons.component';

describe('PhosphoriconsComponent', () => {
  let component: PhosphoriconsComponent;
  let fixture: ComponentFixture<PhosphoriconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhosphoriconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhosphoriconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
