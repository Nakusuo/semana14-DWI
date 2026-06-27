import { TestBed } from '@angular/core/testing';

import { RegistroApi } from './registro-api';

describe('RegistroApi', () => {
  let service: RegistroApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
