import { Component, OnInit } from '@angular/core';
import { IPayment, Payment } from '../models/payment-models';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
})
export class PaymentListComponent implements OnInit {
  constructor(private _paymentService: PaymentService) {}
  ngOnInit(): void {}

  pay(payment: IPayment) {
    this._paymentService.pay(payment);
    console.log(payment + '  pay function in list component');
  }
}
