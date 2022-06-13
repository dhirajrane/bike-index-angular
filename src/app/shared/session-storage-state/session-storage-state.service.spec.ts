import { TestBed } from '@angular/core/testing';

import { SessionStorageStateService } from './session-storage-state.service';

describe('SessionStorageStateService', () => {
  let service: SessionStorageStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
