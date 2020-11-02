import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OurTeamMember, OurTeamSectionData } from '../model/our-team-member.model';
import { RawOurTeamMember, RawTeamDataBlock } from '../model/raw-team-data.model';
import { OurTeamService } from './our-team.service';

@Injectable()
export class OurTeamResolverService implements Resolve<OurTeamSectionData[]> {
  constructor(public ourTeamService: OurTeamService) {}

  public resolve(): Observable<OurTeamSectionData[]> {
    return this.ourTeamService.getTeamMembers().pipe(
      switchMap((rawTeamMember) => {
        const listOfBlocks: OurTeamSectionData[] = [];

        rawTeamMember.data.forEach((block: RawTeamDataBlock) => {
          const rawMemberList: RawOurTeamMember[] = [];
          const blockData: OurTeamSectionData = {} as OurTeamSectionData;
          blockData.title = block.attributes.title;

          rawMemberList.push(...Object.values(
            block.attributes.memberCards
          ));

          blockData.data = rawMemberList.map((member) => {
            return {
              name: member.block.title,
              position: member.block.description,
              image: member.imageUrl.w400,
              phone: member.block.text,
              email: member.block.link,
            } as OurTeamMember;
          });

          listOfBlocks.push(blockData);
        });

        return of(listOfBlocks);
      })
    );
  }
}
