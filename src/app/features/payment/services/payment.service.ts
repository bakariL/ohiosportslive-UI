import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { IPayment, Payment } from '../models/payment-models';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private _http: HttpClient) {}

  pay(payment: IPayment): Observable<IPayment> {
    console.log(payment + '    hhjghjghj');
    return this._http.post<IPayment>(
      FluxConnections.FLUX_API_URI + 'api/PaymentDetail/get-game',
      payment
    );
  }

  getTicketPrice(gameId: string): Observable<number> {
    console.log(gameId + ' paymentsrevice get ticket');
    return this._http.get<number>(
      FluxConnections.FLUX_API_URI + 'api/PaymentDetail/get-price/' + gameId
    );
  }
}
