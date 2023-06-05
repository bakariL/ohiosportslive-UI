import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WatchComponent } from './components/watch-event/watch.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardInformationComponent } from '../payment/components/credit-card-info/credit-card-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WatchService } from './services/watch.service';
import { AuthGuard } from 'src/app/shared/auth/services/auth.guard';
import { AuthModule } from 'src/app/shared/auth/auth.module';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { AuthService } from 'src/app/shared/auth/services/auth.service';

const routes: Routes = [
  { path: 'watch/id?', component: WatchComponent, canActivate: [AuthGuard] },
  { path: 'watch/cc', component: CreditCardInformationComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AuthModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  schemas: [],
  providers: [WatchService, AuthService],
  bootstrap: [],
})
export class WatchModule {}
