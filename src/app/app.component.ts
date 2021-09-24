import { DialogGoalComponent } from './dialog-goal/dialog-goal.component';
import { DialogWinnerComponent } from './dialog-winner/dialog-winner.component';
import { DialogInitComponent } from './dialog-init/dialog-init.component';
import { Component, Input, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { Subscription, interval } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



}


