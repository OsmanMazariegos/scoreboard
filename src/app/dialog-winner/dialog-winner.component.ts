import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dialog-winner',
  templateUrl: './dialog-winner.component.html',
  styleUrls: ['./dialog-winner.component.css']
})
export class DialogWinnerComponent implements OnInit {

  disableSelect = new FormControl(false);

  constructor(public dialogRef: MatDialogRef<DialogWinnerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

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
