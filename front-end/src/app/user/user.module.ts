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
 MatListModule } 
from '@angular/material';

import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LayoutModule } from '../layout/layout.module';
import { CrudModule } from '../util/crud/crud.module';
import { DeleteDialogComponent } from '../util/crud/delete-dialog/delete-dialog.component';
import { UserDao } from './user/user.dao';

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

    CrudModule,

    LayoutModule
  ],
  providers: [
    HttpClientModule,
    UserDao,
  ],
  entryComponents: [DeleteDialogComponent],
  declarations: [
    UserComponent,
    UserRegisterComponent,
    UserListComponent
  ]
})
export class UserModule { }
