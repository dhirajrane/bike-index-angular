import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BikeDetailsResolver } from './bike-details.resolver';

describe('BikeDetailsResolver', () => {
  let resolver: BikeDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    resolver = TestBed.inject(BikeDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
