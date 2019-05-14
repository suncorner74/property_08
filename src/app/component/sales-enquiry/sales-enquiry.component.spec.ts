import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEnquiryComponent } from './sales-enquiry.component';

describe('SalesEnquiryComponent', () => {
  let component: SalesEnquiryComponent;
  let fixture: ComponentFixture<SalesEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
