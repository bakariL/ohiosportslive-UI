import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './shared/auth/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent
  // , canActivate: [AuthGuard] 
},
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
    path: 'games',
    loadChildren: () =>
      import('./features/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./features/watch/watch.module').then((m) => m.WatchModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'score',
    loadChildren: () =>
      import('./features/scoreboard/scoreboard.module').then((m) => m.ScoreboardModule),
    // canActivate: [AuthGuard],
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
