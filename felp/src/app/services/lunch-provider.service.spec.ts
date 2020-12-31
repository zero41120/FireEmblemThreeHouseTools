import { TestBed } from '@angular/core/testing';

import { LunchProviderService } from './lunch-provider.service';

describe('LunchProviderService', () => {
  let service: LunchProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunchProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain 39 characters', () => {
    const characters = service.getCharacters();
    expect(characters.length).toBe(39);
  });

});
