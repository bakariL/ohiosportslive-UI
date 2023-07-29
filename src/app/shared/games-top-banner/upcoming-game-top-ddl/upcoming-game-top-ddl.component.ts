import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osl-upcoming-game-top-ddl',
  templateUrl: './upcoming-game-top-ddl.component.html',
  styleUrls: ['./upcoming-game-top-ddl.component.css']
})
export class UpcomingGameTopDdlComponent implements OnInit {
  selectedValue: string = "";
  options = [
    {  label: 'Boys Basketball',value: 'boys-basketball' },
    {  label: 'Girls Basketball' ,value: 'girls-basketball'},
    // { value: 'football', label: 'Football' },
    // { value: 'volleyball', label: 'Volleyball' },

  ];

  constructor() { 
      this.selectedValue = 'Deez'

  }

  ngOnInit(): void {
  }


  onSelectionChange(event: any) {
    this.selectedValue = event.value;
  }

}
