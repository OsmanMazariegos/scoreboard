import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-goal',
  templateUrl: './dialog-goal.component.html',
  styleUrls: ['./dialog-goal.component.css']
})
export class DialogGoalComponent implements OnInit {

  disableSelect = new FormControl(false);

  constructor(public dialogRef: MatDialogRef<DialogGoalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });

  }

  ngOnInit(): void {
  }



  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}

