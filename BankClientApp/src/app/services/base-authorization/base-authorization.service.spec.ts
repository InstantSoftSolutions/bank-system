import { TestBed } from '@angular/core/testing';

import { BaseAuthorizationService } from './base-authorization.service';

describe('BaseAuthorizationService', () => {
  let service: BaseAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
