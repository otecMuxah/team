/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurTeamService } from './our-team.service';

describe('Service: OurTeam', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurTeamService]
    });
  });

  it('should ...', inject([OurTeamService], (service: OurTeamService) => {
    expect(service).toBeTruthy();
  }));
});
