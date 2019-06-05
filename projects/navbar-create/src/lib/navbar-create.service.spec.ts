import { TestBed } from '@angular/core/testing';

import { NavbarCreateService } from './navbar-create.service';

describe('NavbarCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarCreateService = TestBed.get(NavbarCreateService);
    expect(service).toBeTruthy();
  });
});
