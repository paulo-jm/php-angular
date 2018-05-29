import { FormBuilder, Validators, FormGroup } from "@angular/forms";

export abstract class PaymentMethodFormBuilder  {

    protected formGroup : FormGroup;

    constructor( protected _formBuilder : FormBuilder) {

       this.formGroup =  _formBuilder.group({
            id: _formBuilder.control('', []),
            paymentMethodName: _formBuilder.control(null, [Validators.required]),
            paymentMethodType: _formBuilder.control(null, [Validators.required]),
        });
        
    }

    build() : FormGroup{
        return this.formGroup;
    }

}