import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VastueServiceComponent } from './vastue-service.component';

describe('VastueServiceComponent', () => {
  let component: VastueServiceComponent;
  let fixture: ComponentFixture<VastueServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VastueServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VastueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
