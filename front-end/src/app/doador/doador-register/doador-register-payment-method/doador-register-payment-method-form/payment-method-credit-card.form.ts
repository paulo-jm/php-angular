import { FormBuilder, Validators } from "@angular/forms";
import { PaymentMethodFormBuilder } from "./payment-method.form";

export class PaymentMethodCreditCardFormBuilder extends PaymentMethodFormBuilder {

    constructor(protected _formBuilder : FormBuilder) {
        super(_formBuilder);
        this.formGroup.addControl("creditCardToken" , _formBuilder.control(null, []));
        this.formGroup.addControl("creditCard",  _formBuilder.group({
            cardType: _formBuilder.control(null, [Validators.required]),
            cardNumber: _formBuilder.control(null, [Validators.required]),
            expiratinDate: _formBuilder.control(null, [Validators.required]),
            securityCode: _formBuilder.control(null, [Validators.required]),
            cardNameOwner: _formBuilder.control(null, [Validators.required]),
        })) 
    }

}