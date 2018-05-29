import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DoadorRegisterPaymentMethodDialogComponent } from './doador-register-payment-method-dialog/doador-register-payment-method-dialog.component';

@Component({
  selector: 'app-doador-register-payment-method',
  templateUrl: './doador-register-payment-method.component.html'
})
export class DoadorRegisterPaymentMethodComponent implements OnInit {

  @Input() formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog, ) { }

  addPaymentMethod() {
    let dialogRef = this.dialog.open(DoadorRegisterPaymentMethodDialogComponent, {
      width: '650px',
      data: { formGroup: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      let formArray: FormArray = this.formGroup.controls.paymentMethods as FormArray;
      if(result) {
        formArray.push(result);
      }
    });
  }

  updatePaymentMethod(index: number) {
    let formArray: FormArray = this.formGroup.controls.paymentMethods as FormArray;
    let formGroupDonation = formArray.at(index);
    let dialogRef = this.dialog.open(DoadorRegisterPaymentMethodDialogComponent, {
      width: '650px',
      data: { formGroup: formGroupDonation }
    });
  }

  deletePaymentMethod(index: number) {
    let formArray: FormArray = this.formGroup.controls.paymentMethods as FormArray;
    let formGroupDonation = formArray.removeAt(index);
  }

  ngOnInit() {
  }

}
