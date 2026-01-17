import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA, MatLegacyDialogRef } from '@angular/material/legacy-dialog';

interface TicketDialogData {
  title: string;
  meta: string;
  price: string;
}

@Component({
  selector: 'osl-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.css'],
})
export class TicketDialogComponent {
  constructor(
    private dialogRef: MatLegacyDialogRef<TicketDialogComponent>,
    @Inject(MAT_LEGACY_DIALOG_DATA) public data: TicketDialogData
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  payNow(): void {
    this.dialogRef.close({ action: 'pay', payload: this.data });
  }
}
