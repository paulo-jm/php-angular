import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentMethodType } from '../../../../payment-method/payment-method-type.model';
import { PaymentMethodCreditCardFormBuilder } from '../doador-register-payment-method-form/payment-method-credit-card.form';

@Component({
  selector: 'app-doador-register-payment-method-dialog',
  templateUrl: './doador-register-payment-method-dialog.component.html'
})
export class DoadorRegisterPaymentMethodDialogComponent implements OnInit {

  public formGroup: FormGroup;

  public defaultPaymentMethodType = 'CREDIT_CARD';

  public selectedPaymentMethodType: PaymentMethodType;

  public paymentMethodTypes: PaymentMethodType[] = [
    {
      id: 1,
      paymentMethodTypeCode: 'CREDIT_CARD',
      paymentMethodTypeName: 'Cartão de Credito'
    },
    {
      id: 1,
      paymentMethodTypeCode: 'DEBIT',
      paymentMethodTypeName: 'Debito'
    }
  ];

  constructor(public dialogRef: MatDialogRef<DoadorRegisterPaymentMethodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) {

    if (data.formGroup) {
      this.formGroup = data.formGroup;
    } 

  }

  private getFormGroupByPaymentMethod(): FormGroup {
    let formGroup: FormGroup = null;
    switch (this.selectedPaymentMethodType.paymentMethodTypeCode) {
      case "CREDIT_CARD":
        formGroup = new PaymentMethodCreditCardFormBuilder(this._formBuilder).build();
        formGroup.controls.paymentMethodType.setValue(this.selectedPaymentMethodType);
        break;
    }
    return formGroup;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFormValid() : boolean{
    return this.formGroup && this.formGroup.valid;
  }

  onSave() {
    this.dialogRef.close(this.formGroup);
  }

  updateFormGroup(){
    this.formGroup = this.getFormGroupByPaymentMethod();
  }

  comparePaymentMethodType(t1: PaymentMethodType, t2: PaymentMethodType): boolean {
    return t1 && t2 ? t1.paymentMethodTypeCode === t2.paymentMethodTypeCode : t1 === t2;
  }

  ngOnInit() {

    if(!this.formGroup) {
      this.paymentMethodTypes.forEach(element => {
        if (element.paymentMethodTypeCode === this.defaultPaymentMethodType) {
          this.selectedPaymentMethodType = element;
          this.formGroup = this.getFormGroupByPaymentMethod();
        }
      });
    } else {
      this.selectedPaymentMethodType = this.formGroup.controls.paymentMethodType.value;
    }

  }

}
