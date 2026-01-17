import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageFeaturedPlayersComponent } from './container/homepage-featured-players/homepage-featured-players.component';


@NgModule({
    declarations: [
    HomepageFeaturedPlayersComponent
  ],
    imports: [CommonModule],
    exports: [HomepageFeaturedPlayersComponent],
    providers: [],
    bootstrap: []
})

export class FeaturedPlayersModule {}