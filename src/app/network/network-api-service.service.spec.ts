import { TestBed, inject } from '@angular/core/testing';

import { NetworkApiServiceService } from './network-api-service.service';

describe('NetworkApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkApiServiceService]
    });
  });

  it('should be created', inject([NetworkApiServiceService], (service: NetworkApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
