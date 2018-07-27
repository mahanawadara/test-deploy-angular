import { TestBed, inject } from '@angular/core/testing';

import { SposifyService } from './sposify.service';

describe('SposifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SposifyService]
    });
  });

  it('should be created', inject([SposifyService], (service: SposifyService) => {
    expect(service).toBeTruthy();
  }));
});
