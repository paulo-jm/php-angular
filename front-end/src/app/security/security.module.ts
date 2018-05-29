import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule
    
  ],
  providers: [
    HttpClientModule,
  ],
  entryComponents: [],
  declarations: [
    AuthenticationComponent
  ] 
})
export class SecurityModule { }