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
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AuthenticationService } from './authentication/authentication-service/authentication.service';
import { LogoutComponent } from './authentication/logout/logout.component';
import { LoginComponent } from './authentication/login/login.component';

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
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule

  ],
  providers: [
    HttpClientModule, AuthenticationService
  ],
  entryComponents: [],
  declarations: [
    AuthenticationComponent,
    LogoutComponent,
    LoginComponent
  ]
})
export class SecurityModule { }