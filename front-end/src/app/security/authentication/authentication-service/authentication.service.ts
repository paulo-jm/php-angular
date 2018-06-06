import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Observer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private _router: Router) {

    }

    get IsLogged() { return this.logged.asObservable(); }
    private logged = new BehaviorSubject<boolean>(false);

    setLogged(value) {
        console.log(value);
        this.logged.next(false);
    }

    login(username: string, password: string) {

        let endopoint = environment.endopoint.security.endopoints.filter(
            item => item.resource === 'login')[0];

        return this.http.post<any>(endopoint.path, { usuario: username, senha: password })
            .pipe(
                tap(() => {
                    this.logged.next(true);
                })
            );
    }

    logout() {

        let endopoint = environment.endopoint.security.endopoints.filter(
            item => item.resource === 'logout')[0];

        return this.http.post<any>(endopoint.path, null)
            .pipe(
                tap(() => {
                    this.logged.next(false);
                })
            );

    }

    handleLogin() {
        this._router.navigate(['/security']);
    }
}