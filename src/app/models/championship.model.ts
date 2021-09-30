import { Club } from './club.model';
import { FootballGames } from './football-games.model';


export class Championship {
    id: string;
    description: string;
    games: FootballGames[];
    clubs: Array<Club> = [];

}



