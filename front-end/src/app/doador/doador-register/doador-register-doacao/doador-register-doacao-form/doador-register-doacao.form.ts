import { FormBuilder, Validators, FormGroup } from "@angular/forms";

export class DoacaoFormBuilder {

    protected formGroup: FormGroup;

    constructor(protected _formBuilder: FormBuilder) {

        this.formGroup = _formBuilder.group({ 
            id: _formBuilder.control(null, []),
            startDate: _formBuilder.control(null, [Validators.required]),
            endDate: _formBuilder.control(null, []),
            amount: _formBuilder.control(null, [Validators.required]),
            paymentMethod: _formBuilder.control(null, [Validators.required]),
            periodicty: _formBuilder.control(null, [Validators.required])
        });

    }

    build(): FormGroup {
        return this.formGroup;
    }

}