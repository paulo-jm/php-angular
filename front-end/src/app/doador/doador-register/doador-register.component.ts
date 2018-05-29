import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup, FormArray } from '@angular/forms/src/model';

import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material';

import { GenericRegisterComponent } from '../../util/crud/generic-register-component';
import { DoadorDao } from './doador-register.dao';
import { Doador } from '../doador.model';
import { DoadorRegisterPaymentMethodDialogComponent } from './doador-register-payment-method/doador-register-payment-method-dialog/doador-register-payment-method-dialog.component';

@Component({
  selector: 'app-doador-register',
  templateUrl: './doador-register.component.html'
})
export class DoadorRegisterComponent extends GenericRegisterComponent<Doador> {

  public tabInfBasicas: boolean = false;
  public tabMeioPagamento: boolean = true;
  public tabDoacao: boolean = false;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _dao: DoadorDao,
    public dialog: MatDialog,
  ) {
    super();
  }

  getDao(): DoadorDao {
    return this._dao;
  }

  getPathId(): number {
    return null;
  }

  afterCreated(): void {
    this._router.navigate(['/doador/list']);
  }

  berforeCreat(): void { }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: this._formBuilder.control('', []),
      name: this._formBuilder.control('', [Validators.required]),
      phone: this._formBuilder.control('', []),
      paymentMethods: this._formBuilder.array([]),
      donations: this._formBuilder.array([]),
    });
  }

  ativarTab(tab: string) {
    console.log(tab);
    this.tabInfBasicas = false;
    this.tabMeioPagamento = false;
    this.tabDoacao = false;

    switch (tab) {
      case "inf-basicas":
        this.tabInfBasicas = true;
        break;
      case "meio-pagamento":
        this.tabMeioPagamento = true;
        break;
      case "doacao":
        this.tabDoacao = true;
        break;
      default:
        this.tabInfBasicas = true;
        break;
    }

  }

  init(): void {
  }
}
