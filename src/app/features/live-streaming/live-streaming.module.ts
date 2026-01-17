import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLivestreamingGamesComponent } from './container/homepage-livestream-games/homepage-livestream-games.component';
import { LivestreamingGameCardComponent } from './components/livestreaming-game-card/livestreaming-game-card.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { LivestreamingPreviousGameCardComponent } from './components/livestreaming-previous-game-card/livestreaming-previous-game-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { liveStreamingReducer } from './store/live-streaming.reducer';
import { LiveStreamingEffects } from './store/live-streaming.effects';

@NgModule({
    declarations: [
        HomeLivestreamingGamesComponent,
        LivestreamingGameCardComponent,
        LivestreamingPreviousGameCardComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule,
        StoreModule.forFeature('liveStreaming', liveStreamingReducer),
        EffectsModule.forFeature([LiveStreamingEffects]),
    ],
    exports: [
        HomeLivestreamingGamesComponent,
        LivestreamingGameCardComponent,
        LivestreamingPreviousGameCardComponent,
    ],
    providers: [],
    bootstrap: [],
})
export class LiveStreamingModule {}