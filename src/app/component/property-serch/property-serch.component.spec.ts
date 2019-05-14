import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySerchComponent } from './property-serch.component';

describe('PropertySerchComponent', () => {
  let component: PropertySerchComponent;
  let fixture: ComponentFixture<PropertySerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
