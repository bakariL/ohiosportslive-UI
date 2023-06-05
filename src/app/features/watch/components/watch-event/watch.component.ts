import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CreditCardInformationComponent } from 'src/app/features/payment/components/credit-card-info/credit-card-information.component';
import {
  IPayment,
  Payment,
} from 'src/app/features/payment/models/payment-models';
import { PurchaseProcessComponent } from 'src/app/features/payment/purchase-process/purchase-process.component';
import { PaymentService } from 'src/app/features/payment/services/payment.service';
import { WatchService } from '../../services/watch.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent implements OnInit {
  gid: any;
  amount: any;
  isUserAllowed: any;
  intervalNumber: number = 0;
  currentNumber: number = 0;
  subscription!: Subscription;
  ccform!: CreditCardInformationComponent;
  constructor(
    private _paymentService: PaymentService,
    private _watchService: WatchService,
    private _router: Router,
    private _dialog: MatDialog,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.gid = this._route.snapshot.paramMap.get('gameId');
    this.amount = this.getTicketAmount(this.gid);
    this.startPayCheckTimer();
  }

  getTicketAmount(id: string) {
    return this._paymentService.getTicketPrice(id).subscribe((res) => {
      this.amount = res;
    });
  }

  pay(payment: IPayment) {
    console.log('  pay function in list component');
    this._paymentService.pay(payment);
    console.log('  pay function in list component');
  }

  goToCCForm() {
    this._dialog.open(CreditCardInformationComponent, {
      data: {
        gameid: this.gid,
        amount: this.amount,
      },
      restoreFocus: false,
      disableClose: true,
      panelClass: 'my-dialog',
    });
  }

  startPayCheckTimer() {
    return this._watchService.startTimer().subscribe((res) => {
      if (res === true) {
        this.goToCCForm();
      }
    });
  }
}
