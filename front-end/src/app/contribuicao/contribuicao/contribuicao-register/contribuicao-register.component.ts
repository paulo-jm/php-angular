import { Component, OnInit } from '@angular/core';
import { Contribuicao } from '../contribuicao-model/contribuicao.model';
import { GenericRegisterComponent } from '../../../util/crud/generic-register-component';
import { ContribuicaoDao } from '../contribuicao-dao/contribuicao.dao';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contribuicao-register',
  templateUrl: './contribuicao-register.component.html'
})
export class ContribuicaoRegisterComponent extends GenericRegisterComponent<Contribuicao> {

  public tiposContribuicao = [{ 'value': 'D', 'label': 'Doação' }, { 'value': 'A', 'label': 'Apadrinhamento' }];
  public tipoContribuicaoSelecioado;

  constructor(private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _dao: ContribuicaoDao,
    public dialog: MatDialog,
  ) {
    super();
  }

  getPathId(): number {
    return this._activateRouter.snapshot.params['id'];
  }

  afterCreated(): void { }

  berforeCreat(): void {
    this._router.navigate(['/contribuicao/contribuicao/list']);
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: this._formBuilder.control('', []),
      nome: this._formBuilder.control('', [Validators.required]),
      tipo : this._formBuilder.control('', [Validators.required]),
      ativo: this._formBuilder.control(true, []),
    });
  }

  getDao(): ContribuicaoDao {
    return this._dao;
  }

  init(): void {
  }

}
