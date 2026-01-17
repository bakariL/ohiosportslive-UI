import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamInfoComponent } from './components/team-info/team-info.component';

@NgModule({
  declarations: [TeamInfoComponent],
  imports: [CommonModule, RouterModule],
  exports: [TeamInfoComponent],
})
export class TeamSharedModule {}
