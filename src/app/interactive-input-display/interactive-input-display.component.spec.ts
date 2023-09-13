import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveInputDisplayComponent } from './interactive-input-display.component';

describe('InteractiveInputDisplayComponent', () => {
  let component: InteractiveInputDisplayComponent;
  let fixture: ComponentFixture<InteractiveInputDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveInputDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveInputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
