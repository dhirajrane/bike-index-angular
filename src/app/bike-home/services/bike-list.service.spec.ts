import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BikeListService } from './bike-list.service';

describe('BikeListService', () => {
  let service: BikeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BikeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
