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
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FileUploadComponent } from 'src/app/shared/file-upload/file-upload.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';


const routes: Routes = [
  { path: 'add', component: UpcomingGameComponent },
  { path: 'view', component: GameListFullPageComponent },
  { path: 'view/watch/:gameId', component: WatchComponent },
  { path: 'view/:gameId', component: ViewGameComponent },
];

@NgModule({
  declarations: [UpcomingGameComponent, ViewGameComponent,FileUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
