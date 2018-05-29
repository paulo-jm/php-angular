import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import { MatDialogModule, MatButtonModule } from '@angular/material';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DeleteDialogComponent, SuccessMessageComponent],
  exports: [DeleteDialogComponent, SuccessMessageComponent]
})
export class CrudModule { }
