import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CreditCardInformationComponent } from '../payment/components/credit-card-info/credit-card-information.component';
import { PlayerModule } from '../player/player.module';
import { TeamSharedModule } from '../team/team-shared.module';
import { AuthModule } from 'src/app/shared/auth/auth.module';
import { AuthService } from 'src/app/shared/auth/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WatchComponent } from './components/watch-event/watch.component';
import { WatchService } from './services/watch.service';
import { watchReducer } from './store/watch.reducer';

const routes: Routes = [
  { path: '', component: WatchComponent, pathMatch: 'full' },
  { path: 'cc', component: CreditCardInformationComponent },
  { path: ':gameId', component: WatchComponent },
];

@NgModule({
  declarations: [WatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AuthModule,
    SharedModule,
    PlayerModule,
    TeamSharedModule,
    StoreModule.forFeature('watch', watchReducer),
  ],
  schemas: [],
  providers: [WatchService, AuthService],
  bootstrap: [],
})
export class WatchModule {}
