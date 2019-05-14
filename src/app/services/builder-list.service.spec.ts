import { TestBed } from '@angular/core/testing';

import { BuilderListService } from './builder-list.service';

describe('BuilderListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuilderListService = TestBed.get(BuilderListService);
    expect(service).toBeTruthy();
  });
});
