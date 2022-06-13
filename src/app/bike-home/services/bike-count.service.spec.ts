import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BikeCountService } from './bike-count.service';

describe('BikeCountService', () => {
  let service: BikeCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BikeCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
