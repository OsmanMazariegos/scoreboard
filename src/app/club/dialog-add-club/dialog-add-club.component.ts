import { Component, Input, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Club } from 'src/app/models/club.model';
import { Championship } from 'src/app/models/championship.model';
import { StorageService } from 'src/app/service/storage.service';

const StorageKey = 'data';


var shields = new Array(17);
shields[0] = "C4115860F06B3D41AD3A50DC049C3061";
shields[1] = "4369F53DFCC9BCF0929F3581BFB72C17";
shields[2] = "4A82E4EEECB1ABEC188EC1F1910FD344";
shields[3] = "4228C7EF5093149C98648399DC649365";
shields[4] = "F89394C979B34A25CC4FF8E11234FBFB";
shields[5] = "79C495C4329D8CA7790944132CCB22E3";
shields[6] = "326833047F3A3DE6692929150312E2B2";
shields[7] = "BD62D707836D5B88F0181961A65CBDB2";
shields[8] = "6329CF5516B0FCE6943C365EE14D73CD";
shields[9] = "64BCA776808B7114602B61FAB5F2DC1B";
shields[10] = "584a9b3bb080d7616d298777";
shields[11] = "584ad7dfb519ea740933a959";
shields[12] = "584ad697b519ea740933a931";
shields[13] = "584ad55fb519ea740933a910";
shields[14] = "584ad6dbb519ea740933a939";
shields[15] = "584a9b3bb080d7616d298777";
shields[16] = "584ad85fb519ea740933a968";

var randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

@Component({
  selector: 'app-dialog-add-club',
  templateUrl: './dialog-add-club.component.html',
  styleUrls: ['./dialog-add-club.component.css']
})
export class DialogAddClubComponent implements OnInit {

  public result: Championship;
  public champion = new Championship();
  public ClubList: Club[] = [];
  public ChampionshipList: Championship[] = [];
  clubArray: Array<Club> = [];

  constructor(private route: ActivatedRoute, public dialogRef: MatDialogRef<DialogAddClubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private storageService: StorageService) {
    this.ChampionshipList = storageService.getData(StorageKey);
 
  }

  @ViewChild('nameClub') nameClub: ElementRef;


  uuidValue: string;
  public ownerForm: FormGroup;
  action:string;
  local_data:any;

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      nameClub: new FormControl('', [Validators.required]),
    });

    //    this.createList();

  }

  ngAfterViewInit() {
    // this.nameClub.nativeElement.focus();
    var obj = this.data;
    console.log(obj)
    var id = this.data.id;
    this.champion = this.ChampionshipList.find(obj => {
      return obj.id === id;
    });

  }

  onNoClick(): void {
    console.log("onNoClick");
    this.dialogRef.close({event:'Cancel'});
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  saveList(newClub:any): void {
    this.local_data = newClub;
    this.action = "Add";
    this.storageService.setData(StorageKey, this.ChampionshipList);
    this.dialogRef.close({event:this.action, data:this.local_data});
  }

  public createList = () => {
    var id = this.champion.id;
    var index = this.ChampionshipList.findIndex(function (obj) {
      return obj.id === id;
    });
    console.log(this.ChampionshipList[index].clubs)

  }

  public createOwner = () => {
    if (this.ownerForm.valid) {

      console.log("createOwner");

      var id = this.champion.id;

      var index = this.ChampionshipList.findIndex(function (obj) {
        return obj.id === id;
      });

      let uid_ = this.generateUUID();

      var newClub = new Club();
      newClub.id = uid_;
      newClub.shield = shields[this.ChampionshipList[index].clubs.length];
      newClub.name = this.nameClub.nativeElement.value;
      this.ChampionshipList[index].clubs.push(newClub);
      this.saveList(newClub);
//      this.createList();

    }
  }

  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

}
