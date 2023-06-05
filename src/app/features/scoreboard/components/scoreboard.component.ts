import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { map } from 'rxjs';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  scoreForm = new FormGroup({
    homeScore: new FormControl(0),
    awayScore: new FormControl(0),
    totalScore: new FormControl(0),
  })

  count: number = 0
  homeScore: number = 0

  

  constructor(
    private scoreboardService: ScoreboardService
  ) { }

  ngOnInit(): void {
  }

  

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  addHome1(score?: number){ 
      return ++this.homeScore 
  }
  addHome2(score: number){
    return ++this.homeScore 
   }
  addHome3(score: number){ }
  minusHome1(score: number){ }
  resetScore(){ }
  addAway1(){ }
  addAway2(){ }
  addAway3(){ }
  minusAway1(){
    
  }


}
