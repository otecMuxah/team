import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'team',
    loadChildren: () =>
      import('./our-team/our-team.module').then((m) => m.OurTeamModule),
  },
  {
    path: '',
    redirectTo: 'team',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
