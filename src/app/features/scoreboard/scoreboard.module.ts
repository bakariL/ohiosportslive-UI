import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScoreboardComponent } from './components/scoreboard.component';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';



const routes: Routes = [
  { path: 'scoreboard', component: ScoreboardComponent, },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [],schemas:[]
})
export class ScoreboardModule {}
