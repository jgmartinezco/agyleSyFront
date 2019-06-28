import { TestBed } from '@angular/core/testing';

import { PeticionHttpService } from './peticion-http.service';

describe('PeticionHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionHttpService = TestBed.get(PeticionHttpService);
    expect(service).toBeTruthy();
  });
});
