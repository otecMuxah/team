import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DestroyableComponent } from '../shared/destroyable/destroyable.component';
import { OurTeamMember } from './model/our-team-member.model';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent extends DestroyableComponent implements OnInit {
  public ourTeam: OurTeamMember[] = [];

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$$))
      .subscribe((data: Data) => (this.ourTeam = data.team));
  }
}
