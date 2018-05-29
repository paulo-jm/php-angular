import { PaymentMethodType } from "./payment-method-type.model";

export interface PaymentMethod {
    id?: number;
    paymentMethodName?: string;
    paymentMethodType?: PaymentMethodType;
}