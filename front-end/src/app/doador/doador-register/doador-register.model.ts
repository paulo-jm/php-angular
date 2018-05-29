import { CreditCard } from "./../../payment-method/credit-card.model";
import { Entity } from "../../util/mapping/entity";
import { PaymentMethod } from "../../payment-method/payment-method.model";

export interface Doador extends Entity {
    name?: string;
    phone?: string;
    paymentMethods: PaymentMethod[];
    
}