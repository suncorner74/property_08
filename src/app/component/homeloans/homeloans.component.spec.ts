import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloansComponent } from './homeloans.component';

describe('HomeloansComponent', () => {
  let component: HomeloansComponent;
  let fixture: ComponentFixture<HomeloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
