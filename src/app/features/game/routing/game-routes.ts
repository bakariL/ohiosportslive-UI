import { Routes } from '@angular/router';
import { WatchComponent } from '../../watch/components/watch-event/watch.component';
import { UpcomingGameComponent } from '../components/create/upcoming-game.component';
import { ViewGameComponent } from '../components/view/view-game.component';

export class GameRoutes {
  constructor(private _routes: Routes) {}

  routes: [] = [];
  // routes = [
  //     { path: 'view', component: GameListComponent },
  //     { path:'add', component: UpcomingGameComponent },
  //     { path:'view/watch/:gameId', component: WatchComponent },
  //     { path:'view/:gameId', component: ViewGameComponent },
  // ]
}
