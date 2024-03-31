import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLivestreamingGamesComponent } from './container/homepage-livestream-games/homepage-livestream-games.component';
import { LivestreamingGameCardComponent } from './components/livestreaming-game-card/livestreaming-game-card.component';
import { MatCardModule } from '@angular/material/card';

// const routes: Routes = [
//     { path: '' ,component:  HomeComponent},
// ];

@NgModule({
    declarations:[HomeLivestreamingGamesComponent,LivestreamingGameCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
     //   RouterModule.forChild(routes),

    ],
    exports:[
        HomeLivestreamingGamesComponent,
        LivestreamingGameCardComponent
        
    ],
    providers:[],
    bootstrap:[],
})
export class  LiveStreamingModule    {}