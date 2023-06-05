import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './credit-card-information.component';

@Component({
  selector: 'cc-dialog',
  templateUrl: 'cc-dialog.component.html',
})
export class CCDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CCDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
