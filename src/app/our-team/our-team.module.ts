import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { OurTeamService } from './service/our-team.service';
import { Routes, RouterModule } from '@angular/router';
import { OurTeamResolverService } from './service/our-team-resolver.service';
import { OurTeamMemberComponent } from './components/our-team-member/our-team-member.component';

const routes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
    resolve: { team: OurTeamResolverService },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [OurTeamComponent, OurTeamMemberComponent],
  providers: [OurTeamService, OurTeamResolverService],
})
export class OurTeamModule {}
