export class Payment {
  amount: number = 0;
  cardnumber: number = 0;
  expirationdate: number = 0;
  securitycode: number = 0;
  cardownername: string = '';
  gameid: number = 0;
}

export interface IPayment {
  amount: number;
  cardnumber: number;
  expirationz: number;
  cvv: number;
  id: string;
  cardownername: string;
}

export interface CreditCardData {
  fullname: string;
  creditCardnumber: number;
  expirationdate: Date;
  cvv: number;
}
