import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { timeout, retry, tap, catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

const SESION_TIME_OUT = 30 * 60 * 60 * 1000;


@Injectable({
  providedIn: 'root'
})
export class RestInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinner.show();

    if (request.url.indexOf('/assets') > 0) {
      return next.handle(request).pipe(finalize(() => this.finalize()));
    }

    let { url } = request;
    url = `${environment.api.dns}/${environment.api.path}${url}`;

    const req: any = { url };

    return next.handle(request.clone(req))
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {

            const urlObj = new URL('' + event.url);
            const body = (event as any).body;
            this.group(`${request.method} ${urlObj.pathname}${urlObj.search}:`,
              (log: any) => {
                log('Status:', event.status);
                log('Body:', body);
              });
          }
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message);
        }),
        retry(1),
        timeout(SESION_TIME_OUT),
        finalize(() => this.finalize())
      )
      ;
  }

  private group(label: string, fn: any) {
    console.group(this.prefixMessage('group', label));
    fn(console.log.bind(console));
    console.groupEnd();
  }

  private prefixMessage(logType: string, message?: string) {
    return `[${logType.toUpperCase()} ${new Date().toTimeString().slice(0, 8)}] ${message}`;
  }

  private finalize(): void {
    this.spinner.hide()
  }

}
