import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BikeDetailsService } from './bike-details.service';

describe('BikeDetailsService', () => {
  let service: BikeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BikeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
