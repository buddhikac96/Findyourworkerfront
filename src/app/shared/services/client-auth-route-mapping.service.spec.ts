import { TestBed } from '@angular/core/testing';

import { ClientAuthRouteMappingService } from './client-auth-route-mapping.service';

describe('ClientAuthRouteMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientAuthRouteMappingService = TestBed.get(ClientAuthRouteMappingService);
    expect(service).toBeTruthy();
  });
});
