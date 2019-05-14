import { TestBed } from '@angular/core/testing';

import { BuilderDetailsService } from './builder-details.service';

describe('BuilderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuilderDetailsService = TestBed.get(BuilderDetailsService);
    expect(service).toBeTruthy();
  });
});
