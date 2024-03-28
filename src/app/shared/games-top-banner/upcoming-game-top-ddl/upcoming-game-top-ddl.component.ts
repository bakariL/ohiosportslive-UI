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

  ];

  constructor() { 
    this.selectedValue = 'boys-basketball'; 

  }

  ngOnInit(): void {
  }


  onSelectionChange(event: any) {
    console.log('>>> , ', this.selectedValue)
    this.selectedValue = event.value;
  }

}
