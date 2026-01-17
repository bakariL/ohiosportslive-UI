import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingGameComponent } from './components/create/upcoming-game.component';
import { ViewGameComponent } from './components/view/view-game.component';
import { WatchComponent } from '../watch/components/watch-event/watch.component';
import { GameService } from './services/game.service';
import { GameListFullPageComponent } from './container/game-list-full-page.component';
import { MatLegacyFormFieldModule as MatFormFieldModule, MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatNativeDateModule } from '@angular/material/core';
import { FileUploadComponent } from 'src/app/shared/file-upload/file-upload.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { gameReducer } from './store/game.reducer';
import { StoreModule } from '@ngrx/store';


const routes: Routes = [
  { path: 'add', component: UpcomingGameComponent },
  { path: 'view', component: GameListFullPageComponent },
  { path: 'view/watch/:gameId', component: WatchComponent },
  { path: 'view/:gameId', component: ViewGameComponent },
  { path: 'preview/:gameId', component: ViewGameComponent },
];

@NgModule({
  declarations: [ ViewGameComponent,FileUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('game', gameReducer),
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    UcWidgetModule,

    
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},GameService],
  bootstrap: [UpcomingGameComponent],
})
export class GameModule {}
