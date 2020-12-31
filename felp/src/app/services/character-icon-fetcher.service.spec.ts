import { TestBed } from '@angular/core/testing';

import { CharacterIconFetcherService } from './character-icon-fetcher.service';

describe('CharacterIconFetcherService', () => {
  let service: CharacterIconFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterIconFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
