import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../../util/crud/generic-list-component';
import { MatDialog } from '@angular/material';
import { DoadorDao } from '../doador-dao/doador.dao';
import { Doador } from '../doador-model/doador.model';

@Component({
  selector: 'app-doador-list',
  templateUrl: './doador-list.component.html'
})
export class DoadorListComponent extends GenericListComponent<Doador> {

  displayedColumns = ["id", "nome", "telefone", "action"];

  constructor(
    public dialog: MatDialog,
    private _dao: DoadorDao
  ) {
    super(dialog);
  }

  getDao(): DoadorDao {
    return this._dao;
  }


}
