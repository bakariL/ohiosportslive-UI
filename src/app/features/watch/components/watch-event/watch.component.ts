import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Plyr from 'plyr';
import { CreditCardInformationComponent } from 'src/app/features/payment/components/credit-card-info/credit-card-information.component';
import { IPayment } from 'src/app/features/payment/models/payment-models';
import { PaymentService } from 'src/app/features/payment/services/payment.service';
import { ShareDialogComponent } from 'src/app/shared/share-dialog/share-dialog.component';
import { WatchService } from '../../services/watch.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent
  implements OnInit, AfterViewInit, OnDestroy {
  gid = '';
  amount = 0;
  subscription?: Subscription;
  private plyr?: Plyr;
  activeTab: 'box' | 'team' = 'box';
  eventTitle =
    'Varsity Softball Wilson - Henryetta High School Vs. Mounds High School';
  eventMeta = 'Basketball · Boys · Marion, OH';
  eventPrice = '$4.99';
  donateTitle = 'Support Ohio Sports Live';
  donateMeta = 'Your donation helps keep local sports streaming.';
  donateAmount = '$10.00';
  videoType: 'youtube' | 'custom' = 'custom';
  customVideoUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  videoPosterUrl = 'assets/images/stow_vs_northRoyalton_example.jpg';
  youtubeEmbedUrl?: SafeResourceUrl;
  teamStats = {
    home: [
      { label: 'FG', value: '34-78' },
      { label: 'FG%', value: '43.6%' },
      { label: '3P', value: '9-26' },
      { label: '3P%', value: '34.6%' },
      { label: 'FT', value: '16-21' },
      { label: 'FT%', value: '76.2%' },
      { label: 'REB', value: 42 },
      { label: 'AST', value: 21 },
      { label: 'STL', value: 7 },
      { label: 'BLK', value: 5 },
      { label: 'TO', value: 11 },
      { label: 'PF', value: 14 },
      { label: 'PTS', value: 93 },
    ],
    away: [
      { label: 'FG', value: '48-90' },
      { label: 'FG%', value: '53.3%' },
      { label: '3P', value: '11-30' },
      { label: '3P%', value: '36.7%' },
      { label: 'FT', value: '30-36' },
      { label: 'FT%', value: '83.3%' },
      { label: 'REB', value: 45 },
      { label: 'AST', value: 24 },
      { label: 'STL', value: 6 },
      { label: 'BLK', value: 4 },
      { label: 'TO', value: 9 },
      { label: 'PF', value: 18 },
      { label: 'PTS', value: 137 },
    ],
  };


  @ViewChild('player', { static: false })
  playerRef!: ElementRef<HTMLVideoElement>;

  constructor(
    private _paymentService: PaymentService,
    private _watchService: WatchService,
    private _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.gid = this._route.snapshot.paramMap.get('gameId') ?? '';
    this.getTicketAmount(this.gid);
    const streamUrl =
      this._route.snapshot.queryParamMap.get('streamUrl') ||
      this.customVideoUrl;
    this.setVideoSource(streamUrl);
    this.startPayCheckTimer();
  }

  ngAfterViewInit(): void {
    if (this.videoType === 'custom' && this.playerRef?.nativeElement) {
      this.plyr = new Plyr(this.playerRef.nativeElement, {
        autoplay: false,
        controls: [
          'play',
          'progress',
          'current-time',
          'duration',
          'mute',
          'volume',
          'settings',
          'fullscreen',
        ],
      });
    }
  }

  setActiveTab(tab: 'box' | 'team') {
    this.activeTab = tab;
  }

  getTicketAmount(id: string) {
    return this._paymentService.getTicketPrice(id).subscribe((res) => {
      this.amount = this.normalizeAmount(res);
    });
  }

  private normalizeAmount(value: unknown): number {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string') {
      const parsed = Number.parseFloat(value.replace(/[^0-9.]/g, ''));
      return Number.isFinite(parsed) ? parsed : 0;
    }

    if (value && typeof value === 'object') {
      const anyValue = value as { amount?: unknown; price?: unknown; value?: unknown };
      return this.normalizeAmount(
        anyValue.amount ?? anyValue.price ?? anyValue.value ?? 0
      );
    }

    return 0;
  }

  private setVideoSource(url: string): void {
    if (this.isYoutubeUrl(url)) {
      this.videoType = 'youtube';
      const embedUrl = this.buildYoutubeEmbedUrl(url);
      this.youtubeEmbedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
        embedUrl
      );
    } else {
      this.videoType = 'custom';
      this.customVideoUrl = url;
    }
  }

  private isYoutubeUrl(url: string): boolean {
    return /youtube\.com|youtu\.be/i.test(url);
  }

  private buildYoutubeEmbedUrl(url: string): string {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('youtu.be')) {
        const videoId = parsed.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${videoId}`;
      }
      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch {
      // fall through to raw URL
    }
    return url;
  }

  pay(payment: IPayment) {
    this._paymentService.pay(payment);
  }

  goToCCForm(ticketDetails?: {
    title?: string;
    meta?: string;
    price?: string;
    mode?: 'ticket' | 'donate';
  }) {
    this._dialog.open(CreditCardInformationComponent, {
      data: {
        gameid: this.gid,
        amount: this.amount,
        title: ticketDetails?.title,
        meta: ticketDetails?.meta,
        price: ticketDetails?.price,
        mode: ticketDetails?.mode ?? 'ticket',
      },
      panelClass: 'cc-dialog-panel',
      backdropClass: 'cc-dialog-backdrop',
      autoFocus: false,
      restoreFocus: false,
      position: { right: '24px', top: '24px' },
    });
  }

  startPaymentFlow() {
    if (!Number.isFinite(this.amount)) {
      this.amount = this.normalizeAmount(this.eventPrice);
    }
    this.goToCCForm({
      title: this.eventTitle,
      meta: this.eventMeta,
      price: this.eventPrice,
      mode: 'ticket',
    });
  }

  startDonateFlow() {
    this.amount = this.normalizeAmount(this.donateAmount);
    this.goToCCForm({
      title: this.donateTitle,
      meta: this.donateMeta,
      price: this.donateAmount,
      mode: 'donate',
    });
  }

  openShareDialog() {
    this._dialog.open(ShareDialogComponent, {
      data: {
        title: this.eventTitle,
        url: window.location.href,
      },
      panelClass: 'share-dialog-panel',
      backdropClass: 'share-dialog-backdrop',
      autoFocus: false,
      restoreFocus: false,
    });
  }

  startPayCheckTimer() {
    this.subscription = this._watchService.startTimer().subscribe((res) => {
      if (res === true) {
        this.goToCCForm();
      }
    });
  }

  ngOnDestroy(): void {
    this.plyr?.destroy();
    this.subscription?.unsubscribe();
  }
}
