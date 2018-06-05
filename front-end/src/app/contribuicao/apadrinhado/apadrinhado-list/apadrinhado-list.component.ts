import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Apadrinhado } from '../apadrinhado-model/apadrinhado.model';
import { GenericListComponent } from '../../../util/crud/generic-list-component';
import { ApadrinhadoDao } from '../apadrinhado-dao/apadrinhado.dao';

@Component({
  selector: 'app-apadrinhado-list',
  templateUrl: './apadrinhado-list.component.html'
})
export class ApadrinhadoListComponent extends GenericListComponent<Apadrinhado> {

  displayedColumns = ["id", "nome", "projeto", "acao"];

  constructor(
    public dialog: MatDialog,
    private _dao: ApadrinhadoDao
  ) {
    super(dialog);
  }

  getDao(): ApadrinhadoDao {
    return this._dao;
  }

}