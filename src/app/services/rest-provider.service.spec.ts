import { TestBed } from '@angular/core/testing';

import { RestProviderService } from './rest-provider.service';

describe('RestProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestProviderService = TestBed.get(RestProviderService);
    expect(service).toBeTruthy();
  });
});
