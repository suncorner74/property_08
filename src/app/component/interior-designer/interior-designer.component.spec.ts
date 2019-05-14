import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesignerComponent } from './interior-designer.component';

describe('InteriorDesignerComponent', () => {
  let component: InteriorDesignerComponent;
  let fixture: ComponentFixture<InteriorDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
