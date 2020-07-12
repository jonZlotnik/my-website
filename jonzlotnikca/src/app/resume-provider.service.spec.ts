import { TestBed } from '@angular/core/testing';

import { ResumeProviderService } from './resume-provider.service';

describe('ResumeProviderService', () => {
  let service: ResumeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
