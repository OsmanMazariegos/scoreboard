import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-goal',
  templateUrl: './dialog-goal.component.html',
  styleUrls: ['./dialog-goal.component.css']
})
export class DialogGoalComponent implements OnInit {

  marker:number = 0;
  disableSelect = new FormControl(false);

  constructor(public dialogRef: MatDialogRef<DialogGoalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });

  }

  ngOnInit(): void {
   ///alert(data.marker1);
  }

  add(){

    this.marker = parseInt(localStorage.getItem('marker'));
    this.marker++;
    localStorage.setItem('marker', this.marker+"");
  }

  minus(){
    this.marker = parseInt(localStorage.getItem('marker'));

    if(this.marker > 0){
      this.marker--;
    }
    localStorage.setItem('marker', this.marker+"");
  }


  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}

