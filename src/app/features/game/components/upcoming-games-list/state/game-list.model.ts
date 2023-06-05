export interface GameList {
  gameId: number | string;
}

export interface UpcomingGamesList{
  gameId: number | string;
  homeTeam: string;
  awayTeam: string;
  location: string;
  imgPath: string;
  description: string;
}




export function createUpcomingGameList(params: Partial<UpcomingGamesList>) {
  return {

  } as UpcomingGamesList;
}

