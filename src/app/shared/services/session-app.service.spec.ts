import { TestBed } from '@angular/core/testing';

import { SessionAppService } from './session-app.service';

describe('SessionAppService', () => {
  let service: SessionAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
