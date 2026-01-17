import { Component } from '@angular/core';

interface HighlightItem {
  title: string;
  category: string;
  accent: string;
}

@Component({
  selector: 'osl-homepage-highlights',
  templateUrl: './homepage-highlights.component.html',
  styleUrls: ['./homepage-highlights.component.css'],
})
export class HomepageHighlightsComponent {
  highlights: HighlightItem[] = [
    {
      title: 'Top Dunks of the Week',
      category: 'Basketball',
      accent: '#c4183b',
    },
    {
      title: 'Friday Night Lights',
      category: 'Football',
      accent: '#0b4f7c',
    },
    {
      title: 'Championship Match Point',
      category: 'Volleyball',
      accent: '#1f8b6a',
    },
  ];
}
