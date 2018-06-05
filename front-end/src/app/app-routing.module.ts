import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DoadorListComponent } from './doador/doador-list/doador-list.component';
import { DoadorRegisterComponent } from './doador/doador-register/doador-register.component';
import { DoadorComponent } from './doador/doador.component';
import { AuthenticationComponent } from './security/authentication/authentication.component';
import { UserComponent } from './user/user/user.component';
import { UserRegisterComponent } from './user/user/user-register/user-register.component';
import { UserListComponent } from './user/user/user-list/user-list.component';
import { ContribuicaoComponent } from './contribuicao/contribuicao/contribuicao.component';
import { ContribuicaoListComponent } from './contribuicao/contribuicao/contribuicao-list/contribuicao-list.component';
import { ContribuicaoRegisterComponent } from './contribuicao/contribuicao/contribuicao-register/contribuicao-register.component';
import { ApadrinhadoComponent } from './contribuicao/apadrinhado/apadrinhado.component';
import { ApadrinhadoListComponent } from './contribuicao/apadrinhado/apadrinhado-list/apadrinhado-list.component';
import { ApadrinhadoRegisterComponent } from './contribuicao/apadrinhado/apadrinhado-register/apadrinhado-register.component';
import { LogoutComponent } from './security/authentication/logout/logout.component';
import { LoginComponent } from './security/authentication/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'doador', pathMatch: 'full' },
  {
    path: 'security', component: AuthenticationComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'list', component: UserListComponent },
      { path: 'register', component: UserRegisterComponent },
      { path: 'view/:id', component: UserRegisterComponent }
    ]
  },
  {
    path: 'doador', component: DoadorComponent,
    children: [
      { path: '', component: DoadorListComponent },
      { path: 'list', component: DoadorListComponent },
      { path: 'register', component: DoadorRegisterComponent },
      { path: 'view/:id', component: DoadorRegisterComponent }
    ]
  },
  {
    path: 'contribuicao',
    children: [
      {
        path: 'contribuicao', component: ContribuicaoComponent,
        children: [
          { path: '', component: ContribuicaoListComponent },
          { path: 'list', component: ContribuicaoListComponent },
          { path: 'register', component: ContribuicaoRegisterComponent },
          { path: 'view/:id', component: ContribuicaoRegisterComponent }
        ]
      },
      {
        path: 'apadrinhado', component: ApadrinhadoComponent,
        children: [
          { path: '', component: ApadrinhadoListComponent },
          { path: 'list', component: ApadrinhadoListComponent },
          { path: 'register', component: ApadrinhadoRegisterComponent },
          { path: 'view/:id', component: ApadrinhadoRegisterComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

