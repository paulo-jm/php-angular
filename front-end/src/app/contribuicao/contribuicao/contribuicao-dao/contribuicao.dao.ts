import { Injectable } from '@angular/core';
import { GenericDao } from '../../../util/dao/generic-dao';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contribuicao } from '../contribuicao-model/contribuicao.model';


@Injectable()
export class ContribuicaoDao extends GenericDao<Contribuicao> {

  constructor(protected _http: HttpClient) {
    super(environment.endopoint.contribuicao.endopoints, _http);
  }

}
