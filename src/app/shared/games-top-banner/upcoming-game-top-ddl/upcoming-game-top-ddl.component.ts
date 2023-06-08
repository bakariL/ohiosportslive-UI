import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osl-upcoming-game-top-ddl',
  templateUrl: './upcoming-game-top-ddl.component.html',
  styleUrls: ['./upcoming-game-top-ddl.component.css']
})
export class UpcomingGameTopDdlComponent implements OnInit {
  selectedValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  onSelectionChange(event: any) {
    this.selectedValue = event.value;
  }

}
