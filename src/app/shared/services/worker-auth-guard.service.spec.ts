import { TestBed } from '@angular/core/testing';

import { WorkerAuthGuardService } from './worker-auth-guard.service';

describe('WorkerAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerAuthGuardService = TestBed.get(WorkerAuthGuardService);
    expect(service).toBeTruthy();
  });
});
