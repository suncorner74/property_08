import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertsaathiCareersComponent } from './propertsaathi-careers.component';

describe('PropertsaathiCareersComponent', () => {
  let component: PropertsaathiCareersComponent;
  let fixture: ComponentFixture<PropertsaathiCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertsaathiCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertsaathiCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
