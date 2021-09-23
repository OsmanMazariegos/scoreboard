import { FootballGames } from './football-games.model';
import { FootballTeam } from './football-team.model';

export class Championship {
    id: string;
    description: string;
    games: FootballGames[];
    teams: FootballTeam[];

}



