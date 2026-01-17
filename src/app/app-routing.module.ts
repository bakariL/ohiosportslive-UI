import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/container/home.component';
import { LiveScoresPageComponent } from './features/live-scores/pages/live-scores-page/live-scores-page.component';
import { SportHomeComponent } from './features/home/container/sport-home.component';
import { ProfilePageComponent } from './features/profile/components/profile-page/profile-page.component';
import { SearchResultsComponent } from './features/search/components/search-results/search-results.component';
import { EditProfileComponent } from './features/profile/components/edit-profile/edit-profile.component';
import { ManageSubscriptionComponent } from './features/profile/components/manage-subscription/manage-subscription.component';
import { ScorekeeperDashboardComponent } from './features/scorekeeper/components/scorekeeper-dashboard/scorekeeper-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basketball', component: SportHomeComponent, data: { sport: 'Basketball' } },
  { path: 'football', component: SportHomeComponent, data: { sport: 'Football' } },
  { path: 'volleyball', component: SportHomeComponent, data: { sport: 'Volleyball' } },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'profile/subscription', component: ManageSubscriptionComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'scorekeeper', component: ScorekeeperDashboardComponent },
  { path: 'event-organizer', component: ScorekeeperDashboardComponent },
  { path: 'live-games', component: LiveScoresPageComponent },
  { path: 'live-scores', redirectTo: 'live-games', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./shared/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./features/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./features/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./features/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./features/watch/watch.module').then((m) => m.WatchModule),
  },
  {
    path: 'score',
    loadChildren: () =>
      import('./features/scoreboard/scoreboard.module').then((m) => m.ScoreboardModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
