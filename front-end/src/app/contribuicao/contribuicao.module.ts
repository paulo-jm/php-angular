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
 MatProgressSpinnerModule} 
from '@angular/material';

import { CrudModule } from '../util/crud/crud.module';
import { DeleteDialogComponent } from '../util/crud/delete-dialog/delete-dialog.component';

import { LayoutModule } from '../layout/layout.module';

import { ContribuicaoComponent } from './contribuicao/contribuicao.component';
import { ContribuicaoListComponent } from './contribuicao/contribuicao-list/contribuicao-list.component';
import { ContribuicaoRegisterComponent } from './contribuicao/contribuicao-register/contribuicao-register.component';
import { ContribuicaoDao } from './contribuicao/contribuicao-dao/contribuicao.dao';
import { ApadrinhadoComponent } from './apadrinhado/apadrinhado.component';
import { ApadrinhadoListComponent } from './apadrinhado/apadrinhado-list/apadrinhado-list.component';
import { ApadrinhadoRegisterComponent } from './apadrinhado/apadrinhado-register/apadrinhado-register.component';
import { ApadrinhadoDao } from './apadrinhado/apadrinhado-dao/Apadrinhado.dao';

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
    MatProgressSpinnerModule,

    CrudModule,

    LayoutModule

    
  ],
  providers: [
    HttpClientModule, ContribuicaoDao, ApadrinhadoDao
  ],
  entryComponents: [DeleteDialogComponent],
  declarations: [ContribuicaoComponent, ContribuicaoListComponent, ContribuicaoRegisterComponent, ApadrinhadoComponent, ApadrinhadoListComponent, ApadrinhadoRegisterComponent]
})
export class ContribuicaoModule { }
