

export interface Scoreboard {
    homeScore: number;
    awayScore: number;
    timeRemaining?: string;
    isActive?: boolean;
}


export interface BasketballScoreboard extends Scoreboard {
    quarters?: number;
    half: number;
    homeTimeouts: number;
    awayTimeouts: number;
}