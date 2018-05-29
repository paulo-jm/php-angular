import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DoadorRegisterDoacaoDialogComponent } from './doador-register-doacao-dialog/doador-register-doacao-dialog.component';
import { PaymentMethod } from '../../../payment-method/payment-method.model';

@Component({
  selector: 'app-doador-register-doacao',
  templateUrl: './doador-register-doacao.component.html'
})
export class DoadorRegisterDoacaoComponent implements OnInit {

  @Input() formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,) { }

  addDonation(): void {
    let dialogRef = this.dialog.open(DoadorRegisterDoacaoDialogComponent, {
      width: '650px',
      data: { 
        formGroup: null, 
        paymentMethods: this.getPaymentMethods()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let formArray: FormArray = this.formGroup.controls.donations as FormArray;
      if(result) {
        formArray.push(result);
      }
    });
  }

  updataDonation(index: number): void {

    let formArray: FormArray = this.formGroup.controls.donations as FormArray;
    let formGroupDonation = formArray.at(index);
    let dialogRef = this.dialog.open(DoadorRegisterDoacaoDialogComponent, {
      width: '650px',
      data: { 
        formGroup: formGroupDonation, 
        paymentMethods: this.getPaymentMethods()
      }
    });

  }

  getPaymentMethods(): PaymentMethod[] {
    let formArray:FormArray = this.formGroup.get('paymentMethods') as FormArray;
    return formArray.getRawValue();
  }

  deleteDonation(index: number): void {
    let formArray: FormArray = this.formGroup.controls.donations as FormArray;
    let formGroupDonation = formArray.removeAt(index);
  }

  ngOnInit() {
  }

}
