import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarServiceComponent } from './navbar-service.component';

describe('NavbarServiceComponent', () => {
  let component: NavbarServiceComponent;
  let fixture: ComponentFixture<NavbarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
