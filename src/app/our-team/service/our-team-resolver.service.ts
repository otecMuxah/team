import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BlockData, OurTeamMember } from '../model/our-team-member.model';
import { RawOurTeamMember, RawTeamDataBlock } from '../model/raw-team-data.model';
import { OurTeamService } from './our-team.service';

@Injectable()
export class OurTeamResolverService implements Resolve<BlockData[]> {
  constructor(public ourTeamService: OurTeamService) {}

  public resolve(): Observable<BlockData[]> {
    return this.ourTeamService.getTeamMembers().pipe(
      switchMap((rawTeamMember) => {
        const listOfBlocks: BlockData[] = [];

        rawTeamMember.data.forEach((block: RawTeamDataBlock) => {
          const rawMemberList: RawOurTeamMember[] = [];
          const blockData: BlockData = {} as BlockData;
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
