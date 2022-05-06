import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionAppService {

  protected getDataSession(sessionKey: string, service?: Observable<any>): Observable<any> {
    return new Observable<any>((observer) => {
      const data = sessionStorage.getItem(sessionKey);
      if (data) {
        observer.next(JSON.parse(data));
        observer.complete();
      } else if (service) {
        service.subscribe((response) => {
          this.setDataSession(sessionKey, response)
          observer.next(response);
          observer.complete();
        })
      } else {
        observer.next(undefined);
        observer.complete();
      }
    });
  }

  protected setDataSession(sessionKey: string, data: any): void {
    if (data) {
      sessionStorage.setItem(sessionKey, JSON.stringify(data));
    } else {
      sessionStorage.removeItem(sessionKey)
    }
  }

}
