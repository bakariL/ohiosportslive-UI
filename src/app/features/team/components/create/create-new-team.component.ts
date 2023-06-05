import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { Team } from '../../models/Team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-create-new-team',
  templateUrl: './create-new-team.component.html',
  styleUrls: ['./create-new-team.component.css'],
})
export class CreateNewTeamComponent implements OnInit {
  team!: Team;
  // formValue !: FormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _teamService: TeamService
  ) {}

  newTeamForm = this.formBuilder.group({
    id: new UntypedFormControl(2),
    teamName: new UntypedFormControl(''),
    schoolName: new UntypedFormControl(''),
    city: new UntypedFormControl(''),
    state: new UntypedFormControl(''),
    headCoachName: new UntypedFormControl(''),
    wins: new UntypedFormControl(0),
    losses: new UntypedFormControl(0),
    conferenceName: new UntypedFormControl(''),
    conferenceRanking: new UntypedFormControl(2),
    stateRanking: new UntypedFormControl(5),
    areaRanking: new UntypedFormControl(1),
    upcomingGame: new UntypedFormControl(''),
    igName: new UntypedFormControl(''),
    twitterName: new UntypedFormControl(''),
    logoPath: new UntypedFormControl(''),
    inGame: new UntypedFormControl(false),
    seasonPass: new UntypedFormControl(false),
    payPerGame: new UntypedFormControl(true),
  });

  ngOnInit(): void {}

  onSubmit() {
    this._teamService
      .createTeam(this.newTeamForm.value)
      .subscribe((data: Team) => {
        console.warn(data + ' : subscribe here!');
      });
  }
}
