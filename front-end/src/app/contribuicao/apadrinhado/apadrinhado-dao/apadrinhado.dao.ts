import { Injectable } from '@angular/core';
import { GenericDao } from '../../../util/dao/generic-dao';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Apadrinhado } from '../apadrinhado-model/apadrinhado.model';

@Injectable()
export class ApadrinhadoDao extends GenericDao<Apadrinhado> {

  constructor(protected _http: HttpClient) {
    super(environment.endopoint.apadrinhado.endopoints, _http);
  }

}
