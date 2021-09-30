import { Component, Input, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { Subscription, interval } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Championship } from 'src/app/models/championship.model';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('leagueName') leagueName: ElementRef;

  uuidValue: string;
  leagues = [];

  public ChampionshipList: Championship[] = [];

  public ownerForm: FormGroup;

  ngOnInit(): void {
    this.getFromLocalStorage();
    this.ownerForm = new FormGroup({
      leagueName: new FormControl('', [Validators.required]),
    });

  }

  ngAfterViewInit() {
    //this.leagueName.nativeElement.focus();
  }

  getFromLocalStorage() {
    const reference = localStorage.getItem('data');
    if (reference) {
      this.ChampionshipList = JSON.parse(reference);
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public createOwner = () => {
    if (this.ownerForm.valid) {
      let uid_ = this.generateUUID();
      var champion = new Championship()
      champion.id = uid_,
      champion.description = this.leagueName.nativeElement.value
      this.ChampionshipList.push(champion);
      localStorage.setItem("data", JSON.stringify(this.ChampionshipList));
      this.router.navigate(['/league/' + uid_]);
    }
  }

  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }


}
