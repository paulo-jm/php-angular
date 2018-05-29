import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../../../util/crud/generic-list-component';
import { Contribuicao } from '../contribuicao-model/contribuicao.model';
import { GenericDao } from '../../../util/dao/generic-dao';
import { ContribuicaoDao } from '../contribuicao-dao/contribuicao.dao';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contribuicao-list',
  templateUrl: './contribuicao-list.component.html'
})
export class ContribuicaoListComponent extends GenericListComponent<Contribuicao> {

  displayedColumns = ["id", "name", "type", "action"];

  constructor(
    public dialog: MatDialog,
    private _dao: ContribuicaoDao
  ) {
    super(dialog);
  }

  getDao(): ContribuicaoDao {
    return this._dao;
  }


}
