import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './shared/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GameModule } from './features/game/game.module';
import { GameListFullPageComponent } from './features/game/container/game-list-full-page.component';
import { HomeComponent } from './features/home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PreviousGamesListComponent } from './features/game/components/previous-games-list/previous-games-list.component';
import { Routes } from '@angular/router';
import { PaymentModule } from './features/payment/payment.module';
import { TodaysGamesListComponent } from './features/game/components/todays-games-list/todays-games-list.component';
import { TeamModule } from './features/team/team.module';
import { UpcomingGamesListComponent } from './features/game/components/upcoming-games-list/upcoming-games-list.component';
import { WatchModule } from './features/watch/watch.module';
import { WatchComponent } from './features/watch/components/watch-event/watch.component';
import { AuthGuard } from './shared/auth/services/auth.guard';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import  {MatToolbarModule} from '@angular/material/toolbar'
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { MatTabsModule } from '@angular/material/tabs';
import { ScoreboardComponent } from './features/scoreboard/components/scoreboard.component';
import { NgxSubscribeDirective } from './shared/utils/ng-subscribe.directive';
import { FooterFluxComponent } from './shared/footer-flux/footer-flux.component';
import { GameFeedTopBannerContainerComponent } from './shared/games-top-banner/game-feed-top-banner-container/game-feed-top-banner-container.component';
import { GameFeedTopComponent } from './shared/games-top-banner/game-feed-top/game-feed-top.component';
import { UpcomingGameTopDdlComponent } from './shared/games-top-banner/upcoming-game-top-ddl/upcoming-game-top-ddl.component';




export function tokenGetter() {
  return sessionStorage.getItem('jwt');
}

const routes: Routes = [
  { path: 'home', component: HomeComponent
  // , canActivate: [AuthGuard] 
},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WatchComponent,
    UpcomingGamesListComponent,
    PreviousGamesListComponent,
    ScoreboardComponent,
    TodaysGamesListComponent,
    NgxSubscribeDirective,
    FooterFluxComponent,
    GameFeedTopBannerContainerComponent,
    GameFeedTopComponent,
    UpcomingGameTopDdlComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TeamModule,
    AuthModule,
    WatchModule,
    PaymentModule,
    GameModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    MatTabsModule ,
    ReactiveFormsModule,
    UcWidgetModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: [],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
