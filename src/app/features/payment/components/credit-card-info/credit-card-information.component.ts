import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _paymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) public data: { gameid: string; amount: number }
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      cardownername: '',
      cardnumber: 0,
      expirationmonth: 0,
      expirationyear: 0,
      securitycode: 0,
      id: this.data.gameid,
      amount: this.data.amount,
    });
  }

  onSubmitCCform() {
    //api post to service api
    //if fails return message and reset form data
    //reset cc form
    //close window
  }

  payNow(): void {
    this._paymentService.pay(this.form.value).subscribe((data: IPayment) => {
      // this._router.navigate([''])
    });
  }
}
