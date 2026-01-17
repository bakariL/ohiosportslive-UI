import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TeamSharedModule } from '../team/team-shared.module';
import { playerReducer } from './store/player.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';

const routes: Routes = [{ path: ':id', component: PlayerProfileComponent }];

@NgModule({
  declarations: [PlayersTableComponent, PlayerProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('player', playerReducer),
    TeamSharedModule,
  ],
  exports: [PlayersTableComponent],
})
export class PlayerModule {}
