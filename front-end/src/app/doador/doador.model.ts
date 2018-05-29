import { PaymentMethod } from "../payment-method/payment-method.model";
import { Entity } from "../util/mapping/entity";

export interface Doador extends Entity{
    name?: string;
    paymentMethods: PaymentMethod[];
}