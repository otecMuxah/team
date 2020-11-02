import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OurTeamMember } from '../model/our-team-member.model';
import { RawOurTeamMember, RawTeamDataBlock } from '../model/raw-team-data.model';
import { OurTeamService } from './our-team.service';

@Injectable()
export class OurTeamResolverService implements Resolve<OurTeamMember[]> {
  constructor(public ourTeamService: OurTeamService) {}

  public resolve(): Observable<OurTeamMember[]> {
    return this.ourTeamService.getTeamMembers().pipe(
      switchMap((rawTeamMember) => {
        const rawMemberList: RawOurTeamMember[] = [];
        let memberList: OurTeamMember[] = [];
        rawTeamMember.data.forEach((block: RawTeamDataBlock) => {
          const values: RawOurTeamMember[] = Object.values(
            block.attributes.memberCards
          );
          rawMemberList.push(...values);
        });
        memberList = rawMemberList.map((member) => {
          return {
            name: member.block.title,
            position: member.block.description,
            image: member.imageUrl.w400,
            phone: member.block.text,
            email: member.block.link,
          } as OurTeamMember;
        });
        return of(memberList);
      })
    );
  }
}
