import { JwtModule } from '@auth0/angular-jwt';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedPlayersModule } from './features/featured-players/featured-players.module';
import { PreviousGamesListComponent } from './features/game/components/previous-games-list/previous-games-list.component';
import { TodaysGamesListComponent } from './features/game/components/todays-games-list/todays-games-list.component';
import { UpcomingGamesListComponent } from './features/game/components/upcoming-games-list/upcoming-games-list.component';
import { GameModule } from './features/game/game.module';
import { GameEffects } from './features/game/store/game.effects';
import { HighlightsModule } from './features/highlights/highlights.module';
import { HomeComponent } from './features/home/container/home.component';
import { SportHomeComponent } from './features/home/container/sport-home.component';
import { OslHomeModule } from './features/home/home.module';
import { LiveScoresComponent } from './features/live-scores/live-scores.component';
import { LiveScoresFullComponent } from './features/live-scores/components/live-scores-full/live-scores-full.component';
import { LiveScoresPageComponent } from './features/live-scores/pages/live-scores-page/live-scores-page.component';
import { LiveStreamingModule } from './features/live-streaming/live-streaming.module';
import { PaymentModule } from './features/payment/payment.module';
import { EditProfileComponent } from './features/profile/components/edit-profile/edit-profile.component';
import { ManageSubscriptionComponent } from './features/profile/components/manage-subscription/manage-subscription.component';
import { ProfilePageComponent } from './features/profile/components/profile-page/profile-page.component';
import { ScorekeeperDashboardComponent } from './features/scorekeeper/components/scorekeeper-dashboard/scorekeeper-dashboard.component';
import { ScoreboardComponent } from './features/scoreboard/components/scoreboard.component';
import { SearchResultsComponent } from './features/search/components/search-results/search-results.component';
import { searchReducer } from './features/search/store/search.reducer';
import { TeamModule } from './features/team/team.module';
import { WatchModule } from './features/watch/watch.module';
import { AuthModule } from './shared/auth/auth.module';
import { AuthGuard } from './shared/auth/services/auth.guard';
import { SharedModule } from './shared/shared.module';
import { NgxSubscribeDirective } from './shared/utils/ng-subscribe.directive';
export function tokenGetter() {
  return sessionStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportHomeComponent,
    ProfilePageComponent,
    SearchResultsComponent,
    EditProfileComponent,
    ManageSubscriptionComponent,
    ScorekeeperDashboardComponent,
    UpcomingGamesListComponent,
    PreviousGamesListComponent,
    ScoreboardComponent,
    TodaysGamesListComponent,
    NgxSubscribeDirective,
    LiveScoresComponent,
    LiveScoresPageComponent,
    LiveScoresFullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TeamModule,
    AuthModule,
    WatchModule,
    PaymentModule,
    LiveStreamingModule,
    FeaturedPlayersModule,
    HighlightsModule,
    GameModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    SharedModule,
    OslHomeModule,
    FormsModule,
    ReactiveFormsModule,
    UcWidgetModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: [],
      },
    }),
    StoreModule.forRoot({}),
    StoreModule.forFeature('search', searchReducer),
    EffectsModule.forRoot([GameEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
