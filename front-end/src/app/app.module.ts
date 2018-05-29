import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { DoadorModule } from './doador/doador.module';
import { SecurityModule } from './security/security.module';
import { UserModule } from './user/user.module';
import { ContribuicaoModule } from './contribuicao/contribuicao.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    DoadorModule,
    SecurityModule,
    UserModule,
    ContribuicaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
