import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CreateNewTeamComponent } from './components/create/create-new-team.component';
import { TeamService } from './services/team.service';
import { TeamSharedModule } from './team-shared.module';
import { teamReducer } from './store/team.reducer';
import { TeamProfileComponent } from 'src/app/features/team/components/team-profile/team-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: 'new-team', component: CreateNewTeamComponent },
  { path: ':id', component: TeamProfileComponent },
];

@NgModule({
  declarations: [CreateNewTeamComponent, TeamProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeamSharedModule,
    SharedModule,
    StoreModule.forFeature('team', teamReducer),
  ],
  providers: [TeamService],
})
export class TeamModule {}
