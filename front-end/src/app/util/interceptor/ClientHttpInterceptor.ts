import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpUserEvent, HttpHeaderResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class ClientHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {


        const newRequest: HttpRequest<any> = req.clone({
            withCredentials : true,
            headers: req.headers.set('Content-Type', 'application/json') 
        });
        console.log("intercept")
        return next.handle(newRequest);
    }
}