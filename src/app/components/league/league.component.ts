import { StorageService } from './../../service/storage.service';
import { DialogGoalComponent } from './../../dialog-goal/dialog-goal.component';
import { DialogWinnerComponent } from './../../dialog-winner/dialog-winner.component';
import { DialogInitComponent } from './../../dialog-init/dialog-init.component';
import { Component, Input, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { Subscription, interval } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { Championship } from 'src/app/models/championship.model';
import { HeaderTitleService } from 'src/app/service/header-title.service';
import { DialogAddClubComponent } from 'src/app/club/dialog-add-club/dialog-add-club.component';
import { Club } from 'src/app/models/club.model';
import { MatTableDataSource } from '@angular/material/table';

const StorageKey = 'data';

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
  increment: number,
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

var ELEMENT_DATA: PeriodicElement[] = [];
var colors = ["red", "blue", "green", "yellow"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent {

  @ViewChild('timer') myTimer: ElementRef;
  @ViewChild('input1') myInput1: ElementRef;

  public mData1: number = 1;
  public mMarker1: number = 0;
  public mMarker2: number = 0;

  uuidValue: string;
  start: boolean = false;
  pause: boolean = true;
  stop: boolean = true;
  tab1: boolean = false;
  tab2: boolean = false;
  tab3: boolean = false;
  tab4: boolean = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  displayedColumns: string[] = ['id', 'shield', 'name', 'pg', 'g', 'pts'];
  displayedColumns1: string[] = ['logo', 'team', 'points'];
  displayedColumns2: string[] = ['logo1', 'team1', 'points1', 'vs', 'logo2', 'team2', 'points2'];
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
  id: any;
  secondsRemaining: any;
  intervalHandle: any;

  public ChampionshipList: Championship[] = [];
  dataSourceTable: MatTableDataSource<PeriodicElement>;

  constructor(private matDialog: MatDialog, private route: ActivatedRoute,
    private router: Router, private titleService: Title,
    private headerTitleService: HeaderTitleService,
    private storageService: StorageService, private changeDetectorRefs: ChangeDetectorRef) {

    this.ChampionshipList = storageService.getData(StorageKey)

    var id = this.route.snapshot.paramMap.get('id');

    var index = this.ChampionshipList.findIndex(function (obj) {
      return obj.id === id;
    });

    this.ChampionshipList[index].clubs.forEach((element, index) => {
      ELEMENT_DATA.push(this.createNew(element, index + 1));
    });

    this.dataSourceTable = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //  localStorage.setItem('marker', this.mMarker1 + "");

    var id = this.route.snapshot.paramMap.get('id');
    var result = this.ChampionshipList.find(obj => {
      return obj.id === id;
    });

    //    this.titleService.setTitle(result.description)
  }


  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  displayOrHideTab(tabIndex: number, displayTab: boolean): void {
    const tabHeaders = document.querySelectorAll('.mat-tab-label');
    const tabBodys = document.querySelectorAll('.mat-tab-body');
    if (tabHeaders[tabIndex]) {
      (tabHeaders[tabIndex] as HTMLElement).style.display = displayTab ? 'inherit' : 'none';
    }
  }

  getFromLocalStorage() {
    const reference = localStorage.getItem('data');
    if (reference) {
      this.ChampionshipList = JSON.parse(reference);
    }
  }

  public createList = (id) => {
  }

  createNew(item: Club, index): PeriodicElement {
    return {
      increment: index,
      id: item.id,
      shield: item.shield,
      name: item.name,
      pg: 0,
      g: 0,
      pts: 0,
    };
  }

  ngAddLeague(): void {
    alert("add");
  }

  getTutorial(id): void {
    console.log(id);
  }

  addMarker1() {
    this.mMarker1++;
  }

  subtractMarker1() {
    this.mMarker1++;
  }

  addMarker2() {
    this.mMarker1++;
  }

  subtractMarker2() {
    this.mMarker1++;
  }

  openDialogAddClub(action, obj) {
    console.log(action)
    obj.action = action;
    obj.id = this.route.snapshot.paramMap.get('id');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = obj;
    this.matDialog.open(DialogAddClubComponent, dialogConfig).afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        
        var id = this.route.snapshot.paramMap.get('id');
        var index = this.ChampionshipList.findIndex(function (obj) {
          return obj.id === id;
        });
        this.ChampionshipList[index].clubs.push(result.data);
      
        var size = this.ChampionshipList[index].clubs.length;

        console.log("size:" +size)

        ELEMENT_DATA.push(this.createNew(result.data, size));
        console.log(ELEMENT_DATA);
        this.dataSourceTable = new MatTableDataSource(ELEMENT_DATA);
        this.changeDetectorRefs.detectChanges();
      }
    });;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    this.matDialog.open(DialogGoalComponent, dialogConfig);
  }

  openWinner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { marker1: this.mMarker1 };
    this.matDialog.open(DialogWinnerComponent, dialogConfig);
  }

  openDialogInit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { marker1: this.mMarker1 };
    this.matDialog.open(DialogInitComponent, dialogConfig);
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

      console.log("randomColor: " + randomColor);

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
