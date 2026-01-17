import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageHighlightsComponent } from './container/homepage-highlights/homepage-highlights.component';

@NgModule({
  declarations: [HomepageHighlightsComponent],
  imports: [CommonModule],
  exports: [HomepageHighlightsComponent],
})
export class HighlightsModule {}
