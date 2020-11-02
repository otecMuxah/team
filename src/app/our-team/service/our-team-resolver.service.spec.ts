/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurTeamResolverService } from './our-team-resolver.service';

describe('Service: OurTeamResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurTeamResolverService]
    });
  });

  it('should ...', inject([OurTeamResolverService], (service: OurTeamResolverService) => {
    expect(service).toBeTruthy();
  }));
});
