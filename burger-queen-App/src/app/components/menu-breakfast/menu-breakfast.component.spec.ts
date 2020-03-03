import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBreakfastComponent } from './menu-breakfast.component';

describe('MenuBreakfastComponent', () => {
  let component: MenuBreakfastComponent;
  let fixture: ComponentFixture<MenuBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
