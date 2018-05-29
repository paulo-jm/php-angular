import { Injectable } from '@angular/core';
import { GenericDao } from '../../util/dao/generic-dao';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Doador } from '../doador.model';

@Injectable()
export class DoadorDao extends GenericDao<Doador> {

  constructor(protected _http: HttpClient) {
    super(environment.endopoint.doador.path, _http);
  }

}
