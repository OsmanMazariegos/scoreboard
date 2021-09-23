import { DialogGoalComponent } from './dialog-goal/dialog-goal.component';
import { DialogWinnerComponent } from './dialog-winner/dialog-winner.component';
import { Component, Input, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { Subscription, interval } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';

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
  id: number;
  shield: string;
  name: string;
  pg: number;
  g: number;
  pts: number;
}

const ELEMENT_DATA2: SoccerElement1[] = [
  { logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'P', team2: 'Helium', points2: 0 },
  { logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'P', team2: 'Helium', points2: 0 },
  { logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'P', team2: 'Helium', points2: 0 },
  { logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'Q', team2: 'Helium', points2: 0 },
  { logo1: 'O', team1: 'Hydrogen', points1: 1, vs: 'VS', logo2: 'R', team2: 'Helium', points2: 0 },
  { logo1: 'O', team1: 'Hydrogen', points1: 0, vs: 'VS', logo2: 'U', team2: 'Helium', points2: 1 },
];

const ELEMENT_DATA1: SoccerElement[] = [
  { logo: 'O', team: 'Hydrogen', points: 1 },
  { logo: 'P', team: 'Helium', points: 0 },

];

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, shield: '0', name: 'FC BARCELONA', pg: 10, g: 8, pts: 15 },
  { id: 2, shield: 'A', name: 'REAL MADRID', pg: 10, g: 3, pts: 6 },
  { id: 3, shield: 'C', name: 'CHELSEA', pg: 10, g: 2, pts: 5 },
  { id: 4, shield: 'D', name: 'VILLAREAL', pg: 10, g: 0, pts: 0 }
];

var colors = ["red", "blue", "green", "yellow"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private matDialog: MatDialog, private route: ActivatedRoute,
    private router: Router) { }

  @ViewChild('timer') myTimer: ElementRef;
  @ViewChild('input1') myInput1: ElementRef;

  uuidValue:string;

  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }

  start: boolean = false;
  pause: boolean = true;
  stop: boolean = true;

  public mData1: number = 1;

  public mMarker1: number = 0;
  public mMarker2: number = 0;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  title = 'Tour of Heroes';
  displayedColumns: string[] = ['id', 'shield', 'name', 'pg', 'g', 'pts'];
  displayedColumns1: string[] = ['logo', 'team', 'points'];
  displayedColumns2: string[] = ['logo1', 'team1', 'points1', 'vs', 'logo2', 'team2', 'points2'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;

  secondsRemaining: any;
  intervalHandle: any;

  ngOnInit(): void {
    localStorage.setItem('marker', this.mMarker1+"");
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    console.log(id);
  }


  addMarker1(){
    this.mMarker1++;
  }
  
  subtractMarker1(){
    this.mMarker1++;
  }

  addMarker2(){
    this.mMarker1++;
  }

  subtractMarker2(){
    this.mMarker1++;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    this.matDialog.open(DialogGoalComponent, dialogConfig);
  }

  openWinner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {marker1: this.mMarker1};
    this.matDialog.open(DialogWinnerComponent, dialogConfig);
  }

  startCountdown() {
    this.start = !this.start;
    this.pause = !this.pause;
    this.stop = !this.stop;

    clearInterval(this.intervalHandle);

    console.log(this.generateUUID());

    var minutes = this.myInput1.nativeElement.value;

    if (isNaN(minutes)) {
      alert("Please enter a number");
      return;
    }

    this.secondsRemaining = minutes * 60;

    this.intervalHandle = setInterval(() => {

      console.log("randomColor: "+randomColor);

      let min = Math.floor(this.secondsRemaining / 60);
      let sec = this.secondsRemaining - (min * 60);

      var message = ('0' + min).slice(-2).toString() + ":" + ('0' + sec).slice(-2);

      this.myTimer.nativeElement.innerHTML = message;

      if (this.secondsRemaining === 0) {
        this.playAudio();

        clearInterval(this.intervalHandle);

        this.start = !this.start;
        this.pause = !this.pause;
        this.stop = !this.stop;

        this.openWinner();

      }

      this.secondsRemaining--;

    }, 1000);

    console.log(this.intervalHandle)

  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/arbitro-futbol.mp3";
    audio.crossOrigin = 'anonymous';
    audio.load();
    const promise = audio.play();
    if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.
      promise
        .then(() => {
          console.log("Audio is playing"); // Audio is playing.
        })
        .catch(error => {
          console.log(error);
        });
    }

  }


}


