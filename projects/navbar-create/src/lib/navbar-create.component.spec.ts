import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCreateComponent } from './navbar-create.component';

describe('NavbarCreateComponent', () => {
  let component: NavbarCreateComponent;
  let fixture: ComponentFixture<NavbarCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
