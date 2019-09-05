import { TestBed } from '@angular/core/testing';

import { ClientAuthGuardService } from './client-auth-guard.service';

describe('ClientAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientAuthGuardService = TestBed.get(ClientAuthGuardService);
    expect(service).toBeTruthy();
  });
});
