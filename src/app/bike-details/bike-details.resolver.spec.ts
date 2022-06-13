import { TestBed } from '@angular/core/testing';

import { BikeDetailsResolver } from './bike-details.resolver';

describe('BikeDetailsResolver', () => {
  let resolver: BikeDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BikeDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
