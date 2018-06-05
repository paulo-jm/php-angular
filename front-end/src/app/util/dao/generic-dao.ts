import { HttpClient, HttpParams } from '@angular/common/http';
import { Entity } from '../mapping/entity';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';
import { Paginator } from '../paginator/paginator-model/paginator.model';

export abstract class GenericDao<T extends Entity> {

    get loading() { return  this.loadingSubject.asObservable(); }
    private loadingSubject = new BehaviorSubject<boolean>(false);

    constructor(protected endopoints, protected _http: HttpClient) { }

    paginate(filter : any = null, column: string = null, sort: string = null, page: number = null, limit: number = null): Observable<Paginator<T>> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'paginate')[0];

        page = page | 1;
        limit = limit | 10;
        filter = JSON.stringify(filter);
        column = column ? column : "" ;
        sort = sort ? sort : "" ;

        this.loadingSubject.next(true);
        return this._http.get(endopoint.path, {
            withCredentials : true,
            params: new HttpParams()
                .set('filter', filter)
                .set('column', column)
                .set('sort', sort)
                .set('page', page.toString())
                .set('limit', limit.toString())
        }).pipe(
            map(response => response as Paginator<T>),
            finalize(() => {this.loadingSubject.next(false);})
        );

    }

    findById(id: number): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'findById')[0];

        let urlResouce = endopoint.path;
        this.loadingSubject.next(true);
        return this._http.get(`${urlResouce}${id}`,{withCredentials : true})
            .pipe(
                map(response => response as T),
                finalize(() => {this.loadingSubject.next(false);})
            );

    }

    create(entity: T): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'create')[0];
        this.loadingSubject.next(true);
        return this._http.post(endopoint.path, entity, {withCredentials : true})
            .pipe(
                map(response => response as T),
                finalize(() => {this.loadingSubject.next(false);})
            );

    }

    update(id: number, entity: T): Observable<T> {

        let endopoint = this.endopoints.filter(
            item => item.resource === 'update')[0];

        let urlResouce = endopoint.path;
        this.loadingSubject.next(true);
        return this._http.put(`${urlResouce}${id}`, entity, {withCredentials : true})
            .pipe(
                map(response => response as T),
                finalize(() => {this.loadingSubject.next(false);})
            );

    }

}
