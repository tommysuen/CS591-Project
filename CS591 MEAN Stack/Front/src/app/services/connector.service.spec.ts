import { TestBed, inject } from '@angular/core/testing';

import { ConnectorService } from './connector.service';

describe('ConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectorService]
    });
  });

  it('should be created', inject([ConnectorService], (service: ConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
