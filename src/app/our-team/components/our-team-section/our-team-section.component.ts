import { Component, Input } from '@angular/core';
import { BlockData } from '../../model/our-team-member.model';

@Component({
  selector: 'app-our-team-section',
  templateUrl: './our-team-section.component.html',
  styleUrls: ['./our-team-section.component.scss'],
})
export class OurTeamSectionComponent {
  @Input()
  public sectionData: BlockData = {} as BlockData;
}
