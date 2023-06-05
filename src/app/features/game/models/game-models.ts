export class UpcomingGame {
  gameId: number = 0;
  homeTeam: string = '';
  awayTeam: string = '';
  location: string = '';
  imgPath: string = '';
  description: string = '';
  // Date_Of_game: Date = ''
}

// export class UpcomingGamesResponse {
//   gameId: number = 0;
//   homeTeam: string = '';
//   awayTeam: string = '';
//   location: string = '';
//   imgPath: string = '';
//   description: string = '';
//   games: UpcomingGame[];
// }


export interface UpcomingGamesResponse {
  gameId: number;
  homeTeam: string;
  awayTeam: string;
  location: string;
  imgPath: string ;
  description: string;
  games: UpcomingGame[];
}

export const createUpcomingGamesRepsonse = (
  params: Partial<UpcomingGamesResponse>,
): UpcomingGamesResponse => ({
    gameId: 0,
    homeTeam: '',
    awayTeam: '',
    location: '',
    imgPath: '',
    description: '',
    games: [],
    ...params,
});


export class NewGame {
  homeTeam: string = '';
  awayTeam: string = '';
  location: string = '';
  imgPath: string = '';
  dateOfGame: Date = new Date(2000,4,1);
  description: string = '';
}

export class TodaysGames {
  gameId: number = 0;
  home_team_1: string = '';
  away_team_2: string = '';
  location: string = '';
  imG_PATH: string = '';
  // Date_Of_game: Date = ''
}

export class PreviousGames {
  gameId: number = 0;
  homeTeam: string = '';
  awayTeam: string = '';
  location: string = '';
  imG_PATH: string = '';
  // Date_Of_game: Date = ''
}

export class AllGames {
  gameId: number = 0;
  home_team_1: string = '';
  away_team_2: string = '';
  // location: string = '';
  // home_score_1: number =0;
  // away_score_1: number = 0;
  // keyplayers: string = '';
  imG_PATH: string = '';
}

export class ViewGame {
  // gameId: number = 0;
  // home_team_1 : string = '';
  // away_team_2: string = '';
  // keyplayers: string = '';
  // isAccepted: boolean = false;

  gameId: number = 0;
  home_team_1: string = '';
  away_team_2: string = '';
  // location: string = '';
  // home_score_1: number =0;
  // away_score_1: number = 0;
  keyplayers: string = '';
  imG_PATH: string = '';
}
