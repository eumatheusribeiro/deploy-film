import { TestBed } from '@angular/core/testing';

import { VideoInjectorService } from './video-injector.service';

describe('VideoInjectorService', () => {
  let service: VideoInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
