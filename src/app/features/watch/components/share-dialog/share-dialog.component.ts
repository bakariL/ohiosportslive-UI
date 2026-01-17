import { Component, Inject } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA,
  MatLegacyDialogRef,
} from '@angular/material/legacy-dialog';

interface ShareDialogData {
  title: string;
  url?: string;
}

@Component({
  selector: 'osl-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css'],
})
export class ShareDialogComponent {
  shareUrl: string;
  shareTitle: string;
  copied = false;

  constructor(
    private dialogRef: MatLegacyDialogRef<ShareDialogComponent>,
    @Inject(MAT_LEGACY_DIALOG_DATA) public data: ShareDialogData
  ) {
    this.shareTitle = data.title;
    this.shareUrl = data.url ?? window.location.href;
  }

  close(): void {
    this.dialogRef.close();
  }

  async copyLink(): Promise<void> {
    this.copied = false;
    try {
      await navigator.clipboard.writeText(this.shareUrl);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    } catch {
      this.fallbackCopy();
    }
  }

  shareNative(): void {
    if (navigator.share) {
      navigator.share({
        title: this.shareTitle,
        url: this.shareUrl,
      });
    } else {
      this.copyLink();
    }
  }

  openEmail(): void {
    const subject = encodeURIComponent(`Watch ${this.shareTitle}`);
    const body = encodeURIComponent(
      `Join me to watch: ${this.shareTitle}\n${this.shareUrl}`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, '_self');
  }

  openText(): void {
    const body = encodeURIComponent(
      `Join me to watch: ${this.shareTitle} ${this.shareUrl}`
    );
    window.open(`sms:?&body=${body}`, '_self');
  }

  private fallbackCopy(): void {
    const input = document.createElement('input');
    input.value = this.shareUrl;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }
}
