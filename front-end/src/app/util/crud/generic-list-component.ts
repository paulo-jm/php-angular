import { Entity } from '../mapping/entity';
import { GenericDataSourceModule } from '../collection/generic-data-source.module';
import { GenericDao } from '../dao/generic-dao';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms/src/model';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { GenericCrudComponent } from './generic-grud-component';
import { ViewChild } from '@angular/core';

export abstract class GenericListComponent<T extends Entity> extends GenericCrudComponent<T> {

  private dataSource;

  @ViewChild(MatPaginator) public paginator: MatPaginator;

  @ViewChild(MatSort) public sort: MatSort;

  constructor(public dialog: MatDialog) {
    super();
  }

  delete(entity: T) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    /*  if (result) {
        this.getDao()
          .delete(entity)
          .subscribe(() => {
            console.log('sucesso');
          });
      }*/
    });
  }

  getDataSource(): GenericDataSourceModule<T> {
    if (!this.dataSource) {
      this.dataSource = new GenericDataSourceModule<T>(
        this.getDao(),
        this.paginator,
        this.sort
      );
    }
    return this.dataSource;
  }

}
