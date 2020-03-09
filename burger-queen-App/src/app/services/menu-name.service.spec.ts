import { TestBed } from '@angular/core/testing';

import { MenuNameServiceService } from './menu-name-service.service';

describe('MenuNameServiceService', () => {
  let service: MenuNameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
