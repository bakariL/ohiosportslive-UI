import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterFluxComponent } from './footer-flux/footer-flux.component';
import { GameFeedTopBannerContainerComponent } from './games-top-banner/game-feed-top-banner-container/game-feed-top-banner-container.component';
import { GameFeedTopComponent } from './games-top-banner/game-feed-top/game-feed-top.component';
import { UpcomingGameTopDdlComponent } from './games-top-banner/upcoming-game-top-ddl/upcoming-game-top-ddl.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterFluxComponent,
    GameFeedTopBannerContainerComponent,
    GameFeedTopComponent,
    UpcomingGameTopDdlComponent,
    ShareDialogComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule],
  exports: [
    NavbarComponent,
    FooterFluxComponent,
    GameFeedTopBannerContainerComponent,
    GameFeedTopComponent,
    UpcomingGameTopDdlComponent,
    ShareDialogComponent,
  ],
})
export class SharedModule {}
