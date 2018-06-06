import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { DoadorModule } from './doador/doador.module';
import { SecurityModule } from './security/security.module';
import { UserModule } from './user/user.module';
import { ContribuicaoModule } from './contribuicao/contribuicao.module';
import { ApplicationErroHandler } from './util/handler/application-erro.handler';
import { UtilModule } from './util/util.module';
import { AuthenticationService } from './security/authentication/authentication-service/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientHttpInterceptor } from './util/interceptor/ClientHttpInterceptor';

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
    UtilModule,
    ContribuicaoModule,
    SecurityModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ApplicationErroHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ClientHttpInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
