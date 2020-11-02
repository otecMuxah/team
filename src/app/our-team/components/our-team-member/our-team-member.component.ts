import { Component, Input, OnInit } from '@angular/core';
import { OurTeamMember } from '../../model/our-team-member.model';

@Component({
  selector: 'app-our-team-member',
  templateUrl: './our-team-member.component.html',
  styleUrls: ['./our-team-member.component.scss'],
})
export class OurTeamMemberComponent {
  @Input()
  public member: OurTeamMember = {} as OurTeamMember;
}
