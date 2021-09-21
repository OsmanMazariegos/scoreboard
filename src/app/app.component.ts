import { DialogGoalComponent } from './dialog-goal/dialog-goal.component';
import { Component } from '@angular/core';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';


export interface SoccerElement {
  logo: string;
  team: string;
  points: number;
}


export interface SoccerElement1 {
  logo1: string;
  team1: string;
  vs: string;
  points1: number;
  logo2: string;
  team2: string;
  points2: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: SoccerElement1[] = [
  {logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'P', team2: 'Helium', points2: 0},
  {logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS',logo2: 'P', team2: 'Helium', points2: 0},
  {logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS',logo2: 'P', team2: 'Helium', points2: 0},
  {logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS',logo2: 'Q', team2: 'Helium', points2: 0},
  {logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS',logo2: 'R', team2: 'Helium', points2: 0},
  {logo1: 'O', team1: 'Hydrogen', points1: 0, vs: 'VS',logo2: 'U', team2: 'Helium', points2: 1}, 
];

const ELEMENT_DATA1: SoccerElement[] = [
  {logo: 'O', team: 'Hydrogen', points: 1},
  {logo: 'P', team: 'Helium', points:0},
 
];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matDialog: MatDialog) {}

  title = 'Tour of Heroes';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1: string[] = ['logo', 'team', 'points'];
  displayedColumns2: string[] = ['logo1', 'team1', 'points1','vs', 'logo2', 'team2', 'points2'];
  dataSource = ELEMENT_DATA;  
  dataSource1 = ELEMENT_DATA1;  
  dataSource2 = ELEMENT_DATA2;  


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    this.matDialog.open(DialogGoalComponent, dialogConfig);
  }


}


