

export interface FluxScoreBoard<T> {
    team1: string;
    team2: string;
    scoreTotal1: number;
    scoreTotal2: number;
    quarter?: string;
    set?: string;
    timeRemaining?: string; 
    down?: number;
    yardsToGo?: number;
    playClock?: string; 
}