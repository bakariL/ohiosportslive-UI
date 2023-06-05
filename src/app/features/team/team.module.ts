import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewTeamComponent } from './components/create/create-new-team.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from './services/team.service';

const routes: Routes = [
  { path: 'new-team', component: CreateNewTeamComponent },
];

@NgModule({
  declarations: [CreateNewTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TeamService],
  bootstrap: [CreateNewTeamComponent],
})
export class TeamModule {}
