import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './container/payment-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { CreditCardInformationComponent } from './components/credit-card-info/credit-card-information.component';
import { PurchaseProcessComponent } from './purchase-process/purchase-process.component';

const routes: Routes = [{ path: 'pay', component: PaymentListComponent }];

@NgModule({
  declarations: [
    PaymentListComponent,
    CreditCardInformationComponent,
    PurchaseProcessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [PaymentListComponent, CreditCardInformationComponent],
})
export class PaymentModule {}
