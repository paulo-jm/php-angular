import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup, FormArray } from '@angular/forms/src/model';

import { Observable } from 'rxjs';

import { MatDialog, MatSnackBar } from '@angular/material';

import { GenericRegisterComponent } from '../../util/crud/generic-register-component';
import { DoadorRegisterPaymentMethodDialogComponent } from './doador-register-payment-method/doador-register-payment-method-dialog/doador-register-payment-method-dialog.component';
import { DoadorDao } from '../doador-dao/doador.dao';
import { Doador } from '../doador-model/doador.model';



@Component({
  selector: 'app-doador-register',
  templateUrl: './doador-register.component.html'
})
export class DoadorRegisterComponent extends GenericRegisterComponent<Doador> {

  public tabInfBasicas: boolean = true;
  public tabMeioPagamento: boolean = false;
  public tabDoacao: boolean = false;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _dao: DoadorDao,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
    super();
  }

  getDao(): DoadorDao {
    return this._dao;
  }

  getPathId(): number {
    return this._activateRouter.snapshot.params['id'];
  }

  afterCreated(): void {
    this.snackBar.open('Doador salvo com sucesso.', 'Ver todos')
      .onAction().subscribe(() => {
        this._router.navigate(['/doador/list']);

      });
  }

  berforeCreat(): void { }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: this._formBuilder.control('', []),
      nome: this._formBuilder.control('', [Validators.required]),
      telefone: this._formBuilder.control('', [])
    });
  }

  ativarTab(tab: string) {
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

  isUserSaved() : boolean {
    console.log(this.form.controls.id.value);
    return this.form.controls.id.value !== "";
  }

  init(): void {
  }
}
