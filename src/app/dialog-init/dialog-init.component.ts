import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl } from '@angular/forms';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-dialog-init',
  templateUrl: './dialog-init.component.html',
  styleUrls: ['./dialog-init.component.css']
})
export class DialogInitComponent implements OnInit {

  disableSelect = new FormControl(false);
  uuidValue: string;

  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  constructor(public dialogRef: MatDialogRef<DialogInitComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });

  }

  ngAddLeague(): void {
    alert("add");
    this.dialogRef.close("Thanks for using me!");
  }


  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close("Thanks for using me!");
  }


}
