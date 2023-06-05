import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { CreditCardInformationComponent } from '../../payment/components/credit-card-info/credit-card-information.component';

@Injectable({
  providedIn: 'root',
})
export class WatchService {
  constructor(private _http: HttpClient) {}

  getVideoPaymentPopUp() {
    return CreditCardInformationComponent;
  }

  startTimer(): Observable<boolean> {
    return this._http.get<boolean>(
      FluxConnections.FLUX_API_URI + 'api/auth/start-timer'
    );
  }
}
