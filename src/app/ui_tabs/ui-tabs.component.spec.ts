import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UITabsComponent } from './ui-tabs.component';

describe('CatagoriesComponent', () => {
  let component: UITabsComponent;
  let fixture: ComponentFixture<UITabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UITabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UITabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
