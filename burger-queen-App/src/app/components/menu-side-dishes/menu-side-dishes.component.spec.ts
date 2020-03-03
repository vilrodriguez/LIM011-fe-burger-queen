import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideDishesComponent } from './menu-side-dishes.component';

describe('MenuSideDishesComponent', () => {
  let component: MenuSideDishesComponent;
  let fixture: ComponentFixture<MenuSideDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSideDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSideDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
