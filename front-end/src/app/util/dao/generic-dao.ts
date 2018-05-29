import { HttpClient, HttpParams } from '@angular/common/http';
import { Entity } from '../mapping/entity';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginator } from '../paginator/paginator-model/paginator.model';

export abstract class GenericDao<T extends Entity> {

    constructor(protected endopoints, protected _http: HttpClient) { }

    paginate(filter = '', sort: string = null, order: string = null, page: number = null, limit: number = null): Observable<Paginator<T>> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'paginate')[0];

        page = page | 1;
        limit = limit | 10;

        return this._http.get(endopoint.path, {
            params: new HttpParams()
                .set('filter', filter)
                .set('sort', sort)
                .set('order', order)
                .set('page', page.toString())
                .set('limit', limit.toString())
        }).pipe(
            map(response => response as Paginator<T>)
        );

    }

    findById(id: number): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'findById')[0];

        let urlResouce = endopoint.path;

        return this._http.get(`${urlResouce}${id}`)
            .pipe(
                map(response => response as T)
            );

    }

    create(entity: T): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'create')[0];

        return this._http.post(endopoint.path, entity)
            .pipe(
                map(response => response as T)
            );

    }

    update(id: number, entity: T): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'update')[0];

        let urlResouce = endopoint.path;

        return this._http.put(`${urlResouce}${id}`, entity)
            .pipe(
                map(response => response as T)
            );

    }

}
