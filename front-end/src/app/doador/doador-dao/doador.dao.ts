import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericDao } from '../../util/dao/generic-dao';
import { environment } from '../../../environments/environment';
import { Doador } from '../doador-model/doador.model';


@Injectable()
export class DoadorDao extends GenericDao<Doador> {

  constructor(protected _http: HttpClient) {
    super(environment.endopoint.doador.endopoints, _http);
  }

}
