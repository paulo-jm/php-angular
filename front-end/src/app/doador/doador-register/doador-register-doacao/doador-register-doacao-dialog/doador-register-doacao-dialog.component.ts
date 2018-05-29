import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DoacaoFormBuilder } from '../doador-register-doacao-form/doador-register-doacao.form';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaymentMethod } from '../../../../payment-method/payment-method.model';

@Component({
  selector: 'app-doador-register-doacao-dialog',
  templateUrl: './doador-register-doacao-dialog.component.html'
})
export class DoadorRegisterDoacaoDialogComponent implements OnInit {

  private formGroup: FormGroup;

  public paymentMethods: PaymentMethod[];

  constructor(public dialogRef: MatDialogRef<DoadorRegisterDoacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) {

    this.paymentMethods = data.paymentMethods;
    if (data.formGroup) {
      this.formGroup = data.formGroup;
    } else {
      this.formGroup = new DoacaoFormBuilder(this._formBuilder).build();
    }

  }

  comparePaymentMethod(p1: PaymentMethod, p2: PaymentMethod): boolean {
    return p1 && p2 ? p1.paymentMethodName === p2.paymentMethodName : p1 === p2;
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

  ngOnInit() {
  }

}
