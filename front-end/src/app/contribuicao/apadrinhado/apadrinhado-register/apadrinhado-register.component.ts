import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Contribuicao } from '../../contribuicao/contribuicao-model/contribuicao.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { GenericRegisterComponent } from '../../../util/crud/generic-register-component';
import { ApadrinhadoDao } from '../apadrinhado-dao/Apadrinhado.dao';
import { ContribuicaoDao } from '../../contribuicao/contribuicao-dao/contribuicao.dao';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paginator } from '../../../util/paginator/paginator-model/paginator.model';
import { Apadrinhado } from '../apadrinhado-model/apadrinhado.model';

@Component({
  selector: 'app-apadrinhado-register',
  templateUrl: './apadrinhado-register.component.html'
})
export class ApadrinhadoRegisterComponent
  extends GenericRegisterComponent<Apadrinhado> {

  public contribuicoes: BehaviorSubject<Contribuicao[]> = new BehaviorSubject([]);

  constructor(
    public dialog: MatDialog,
    private _dao: ApadrinhadoDao,
    private _contribuicaoDao: ContribuicaoDao,
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    super();
  }

  getPathId(): number {
    return this._activateRouter.snapshot.params['id'];
  }

  afterCreated(): void {
    this._router.navigate(['/contribuicao/apadrinhado/list']);
  }

  berforeCreat(): void { }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: this._formBuilder.control('', []),
      nome: this._formBuilder.control('', [Validators.required]),
      contribuicao: this._formBuilder.control('', [Validators.required]),
    });
  }


  getDao(): ApadrinhadoDao {
    return this._dao;
  }

  init() {
    this.searchAllContribuicoes(null);
    this.handlerAutoComplete();
  }

  handlerAutoComplete(): void {
    this.form.controls.contribuicao.valueChanges.subscribe(query => {
      this.searchAllContribuicoes(query);
    });
  }


  displayContribuicao(contribuicao: Contribuicao) {
    return contribuicao ? `${contribuicao.nome}` : null;
  }

  searchAllContribuicoes(query) {
    this._contribuicaoDao.paginate(query, 'nome', 'desc', 1, 10).subscribe(result => {
      this.contribuicoes.next(result.data);
    });
  }

}
