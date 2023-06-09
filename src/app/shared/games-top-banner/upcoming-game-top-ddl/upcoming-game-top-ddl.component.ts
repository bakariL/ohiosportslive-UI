import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osl-upcoming-game-top-ddl',
  templateUrl: './upcoming-game-top-ddl.component.html',
  styleUrls: ['./upcoming-game-top-ddl.component.css']
})
export class UpcomingGameTopDdlComponent implements OnInit {
  selectedValue: string = "";
  options = [
    { value: 'boys-basketball', label: 'Boys Basketball' },
    { value: 'girls-basketball', label: 'Girls Basketball' },
    { value: 'football', label: 'Football' },
    { value: 'volleyball', label: 'Volleyball' },

  ];

  constructor() { }

  ngOnInit(): void {
  }


  onSelectionChange(event: any) {
    this.selectedValue = event.value;
  }

}
