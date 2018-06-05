import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
 MatNativeDateModule,
 MatPaginatorModule,
 MatSnackBarModule,
 MatSortModule,
 MatDialogModule,
 MatIconModule,
 MatTableModule,
 MatCardModule,
 MatButtonModule, 
 MatInputModule, 
 MatExpansionModule,
 MatAutocompleteModule, 
 MatDatepickerModule,
 MatSelectModule,
 MatListModule,
 MatProgressBarModule,
 MatProgressSpinnerModule } 
from '@angular/material';

import { CrudModule } from '../util/crud/crud.module';
import { DeleteDialogComponent } from '../util/crud/delete-dialog/delete-dialog.component';

import { DoadorListComponent } from './doador-list/doador-list.component';
import { DoadorRegisterComponent } from './doador-register/doador-register.component';
import { DoadorComponent } from './doador.component';
import { DoadorDao } from './doador-dao/doador.dao';
import { DoadorRegisterPaymentMethodComponent } from './doador-register/doador-register-payment-method/doador-register-payment-method.component';
import { DoadorRegisterPaymentMethodDialogComponent } from './doador-register/doador-register-payment-method/doador-register-payment-method-dialog/doador-register-payment-method-dialog.component';
import { DoadorRegisterDoacaoComponent } from './doador-register/doador-register-doacao/doador-register-doacao.component';
import { DoadorRegisterDoacaoDialogComponent } from './doador-register/doador-register-doacao/doador-register-doacao-dialog/doador-register-doacao-dialog.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,

    CrudModule,

    LayoutModule

    
  ],
  providers: [
    HttpClientModule,
    DoadorDao,
  ],
  entryComponents: [DeleteDialogComponent, DoadorRegisterPaymentMethodDialogComponent, DoadorRegisterDoacaoDialogComponent, DoadorRegisterPaymentMethodDialogComponent],
  declarations: [
    DoadorListComponent,
    DoadorRegisterComponent,
    DoadorComponent,
    DoadorRegisterPaymentMethodComponent,
    DoadorRegisterPaymentMethodDialogComponent,
    DoadorRegisterDoacaoComponent,
    DoadorRegisterDoacaoDialogComponent
  ] 
})
export class DoadorModule { }
