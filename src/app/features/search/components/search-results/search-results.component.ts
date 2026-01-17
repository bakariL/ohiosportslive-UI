import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'player' | 'team' | 'event';
}

@Component({
  selector: 'osl-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  query = '';
  results: SearchItem[] = [];
  private subscription?: Subscription;

  private allItems: SearchItem[] = [
    { id: 'marvin-mckinney', title: 'Marvin McKinney', subtitle: 'Leesburg, GA · Lee County High School', type: 'player' },
    { id: 'darrell-steward', title: 'Darrell Steward', subtitle: 'Leesburg, GA · Lee County High School', type: 'player' },
    { id: 'henryetta-high-school', title: 'Henryetta High School', subtitle: 'Marion, OH · Boys Basketball', type: 'team' },
    { id: 'stow-high-school', title: 'Stow High School', subtitle: 'Stow, OH · Girls Basketball', type: 'team' },
    { id: 'game-1', title: 'Henryetta High School vs Mounds High School', subtitle: 'Varsity Softball · Marion, OH', type: 'event' },
    { id: 'game-2', title: 'Stow High School vs North Royalton', subtitle: 'Basketball · Stow, OH', type: 'event' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('q')?.trim() ?? '';
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private applyFilter(): void {
    if (!this.query) {
      this.results = [];
      return;
    }

    const lowered = this.query.toLowerCase();
    this.results = this.allItems.filter((item) =>
      `${item.title} ${item.subtitle}`.toLowerCase().includes(lowered)
    );
  }

  get players(): SearchItem[] {
    return this.results.filter((item) => item.type === 'player');
  }

  get teams(): SearchItem[] {
    return this.results.filter((item) => item.type === 'team');
  }

  get events(): SearchItem[] {
    return this.results.filter((item) => item.type === 'event');
  }
}
