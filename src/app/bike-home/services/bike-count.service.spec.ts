import { TestBed } from '@angular/core/testing';

import { BikeCountService } from './bike-count.service';

describe('BikeCountService', () => {
  let service: BikeCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
