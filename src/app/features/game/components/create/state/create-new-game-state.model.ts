

export interface CreateNewGameState {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  location: string;
  // dateOfGame: string;
}

export const createIntialNewGameState = (): CreateNewGameState => ({
  id: '',
  sport: '',
  homeTeam: '',
  awayTeam: '',
  location: '',
  // dateOfGame: ''
});
