import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osl-upcoming-game-top-ddl',
  templateUrl: './upcoming-game-top-ddl.component.html',
  styleUrls: ['./upcoming-game-top-ddl.component.css']
})
export class UpcomingGameTopDdlComponent implements OnInit {
  selectedValue: string = "";
  options = [
    { label: 'Select a sport', value: 'select-a-sport' },
    { label: 'Boys Basketball', value: 'boys-basketball' },
    { label: 'Girls Basketball', value: 'girls-basketball' },
  ];
  

  constructor() { 
    this.selectedValue = 'select-a-sport'; 

  }

  ngOnInit(): void {
  }


  onSelectionChange(event: any) {
    this.selectedValue = event.value;
    this.options = this.options.filter(option => option.value !== 'select-a-sport');
  }

}
