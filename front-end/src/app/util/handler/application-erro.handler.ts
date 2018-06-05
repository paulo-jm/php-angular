import { Injectable, ErrorHandler, NgZone, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../security/authentication/authentication-service/authentication.service";

@Injectable()
export class ApplicationErroHandler extends ErrorHandler {

    private authService: AuthenticationService;

    constructor(public snackBar: MatSnackBar, private zone: NgZone, private injector: Injector) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {

        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.message;
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 401:
                        const authService = this.injector.get(AuthenticationService);
                        authService.setLogged(false);
                        this.snackBar.open('Usuario não esta logado.', 'Fazer Login', {duration: 3000})
                            .onAction().subscribe(() => {
                                authService.handleLogin();
                            });
                        break;
                    case 403:
                        this.snackBar.open('Usuario não tem permição para acioar o recurso.', null ,{duration: 3000})
                        break;
                    case 404:
                        this.snackBar.open('Recurso não encontrado.', null, {duration: 3000});
                        break;
                    case 409:
                        this.snackBar.open(errorResponse.error.messagem, null, {duration: 3000});
                        break;
                }
            });

            super.handleError(errorResponse);

        }


    }

}