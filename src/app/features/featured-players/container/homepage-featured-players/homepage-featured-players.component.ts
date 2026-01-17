import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'osl-homepage-featured-players',
  templateUrl: './homepage-featured-players.component.html',
  styleUrls: ['./homepage-featured-players.component.css']
})
export class HomepageFeaturedPlayersComponent implements OnInit {
  @ViewChild('cardsScroller') cardsScroller?: ElementRef<HTMLDivElement>;
  activeCategory: 'basketball' | 'football' | 'volleyball' = 'basketball';
  players = {
    basketball: [
      {
        name: 'Darrell Steward',
        initials: 'DS',
        height: '5\'11"',
        weight: '155 lbs',
        location: 'Leesburg, GA',
        school: 'Lee County High School',
      },
      {
        name: 'Kristin Watson',
        initials: 'KW',
        height: '5\'11"',
        weight: '155 lbs',
        location: 'Leesburg, GA',
        school: 'Lee County High School',
      },
      {
        name: 'Courtney Henry',
        initials: 'CH',
        height: '5\'11"',
        weight: '155 lbs',
        location: 'Leesburg, GA',
        school: 'Lee County High School',
      },
      {
        name: 'Dianne Russell',
        initials: 'DR',
        height: '5\'11"',
        weight: '155 lbs',
        location: 'Leesburg, GA',
        school: 'Lee County High School',
      },
    ],
    football: [
      {
        name: 'Marcus Hill',
        initials: 'MH',
        height: '6\'1"',
        weight: '190 lbs',
        location: 'Columbus, OH',
        school: 'Central High School',
      },
      {
        name: 'Isaac Reed',
        initials: 'IR',
        height: '6\'0"',
        weight: '180 lbs',
        location: 'Dayton, OH',
        school: 'Northview High School',
      },
      {
        name: 'Cameron Lee',
        initials: 'CL',
        height: '5\'10"',
        weight: '175 lbs',
        location: 'Akron, OH',
        school: 'Westside High School',
      },
      {
        name: 'Jordan Wade',
        initials: 'JW',
        height: '6\'2"',
        weight: '200 lbs',
        location: 'Toledo, OH',
        school: 'East Ridge High School',
      },
    ],
    volleyball: [
      {
        name: 'Ava Brooks',
        initials: 'AB',
        height: '5\'9"',
        weight: '140 lbs',
        location: 'Cleveland, OH',
        school: 'Lakeside High School',
      },
      {
        name: 'Mia Carter',
        initials: 'MC',
        height: '5\'10"',
        weight: '145 lbs',
        location: 'Cincinnati, OH',
        school: 'River Valley High School',
      },
      {
        name: 'Olivia West',
        initials: 'OW',
        height: '5\'8"',
        weight: '135 lbs',
        location: 'Springfield, OH',
        school: 'Southview High School',
      },
      {
        name: 'Harper James',
        initials: 'HJ',
        height: '5\'11"',
        weight: '150 lbs',
        location: 'Youngstown, OH',
        school: 'Valley High School',
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

  get visiblePlayers() {
    return this.players[this.activeCategory];
  }

  setCategory(category: 'basketball' | 'football' | 'volleyball'): void {
    this.activeCategory = category;
  }

  scrollCards(direction: 1 | -1): void {
    const scroller = this.cardsScroller?.nativeElement;
    if (!scroller) {
      return;
    }
    const scrollAmount = 220 * direction;
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

}
