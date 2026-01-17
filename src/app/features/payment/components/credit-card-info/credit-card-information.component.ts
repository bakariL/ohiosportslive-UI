import { Component, OnInit, Inject, Optional } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef,
} from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayment } from '../../models/payment-models';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'credit-card-information',
  templateUrl: 'credit-card-information.component.html',
  styleUrls: ['credit-card-information.component.css'],
})
export class CreditCardInformationComponent implements OnInit {
  form!: UntypedFormGroup;
  amount: number = 10;
  gameId: string | null = null;
  eventTitle = 'Live Game Ticket';
  eventMeta = 'Ohio Sports Live';
  ticketNumber = '';
  currentStep = 1;
  flowMode: 'ticket' | 'donate' = 'ticket';

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _paymentService: PaymentService,
    @Optional() private dialogRef?: MatLegacyDialogRef<CreditCardInformationComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      gameid: string;
      amount: number;
      title?: string;
      meta?: string;
      price?: string;
      mode?: 'ticket' | 'donate';
    }
  ) {}

  ngOnInit(): void {
    const routeGameId = this._route.snapshot.queryParamMap.get('gameid');
    const routeAmount = Number(
      this._route.snapshot.queryParamMap.get('amount')
    );
    const rawAmount = this.data?.amount ?? routeAmount;
    this.gameId = this.data?.gameid ?? routeGameId;
    this.amount = this.normalizeAmount(rawAmount);
    this.eventTitle = this.data?.title ?? this.eventTitle;
    this.eventMeta = this.data?.meta ?? this.eventMeta;
    this.flowMode = this.data?.mode ?? 'ticket';

    this.form = this._formBuilder.group({
      cardownername: '',
      cardnumber: 0,
      expirationdate: '',
      securitycode: 0,
      promoCode: '',
      id: this.gameId,
      amount: this.amount,
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

  onSubmitCCform() {
    //api post to service api
    //if fails return message and reset form data
    //reset cc form
    //close window
  }

  payNow(): void {
    this._paymentService.pay(this.form.value).subscribe(() => {
      this.ticketNumber = this.generateTicketNumber();
      this.currentStep = 3;
    });
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }

  continueToPayment(): void {
    this.currentStep = 2;
  }

  closeDialog(): void {
    this.dialogRef?.close();
  }

  private generateTicketNumber(): string {
    const stamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `${this.flowMode === 'donate' ? 'DON' : 'OSL'}-${stamp}-${random}`;
  }
}
