import { PaymentMethod } from "./payment-method.model";
import { CreditCard } from "./credit-card.model";

export interface CreditCardPaymentMethod extends PaymentMethod {
    creditCardToken?: string;
    creditCard?: CreditCard;
}