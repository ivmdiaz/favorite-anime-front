import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestBackendService } from './request-backend.service';
import { SessionDataHistoryModel, SessionDataHistoryRequestModel } from '../interfaces/session.interface';
import { HttpClient } from '@angular/common/http';
import { ResponseWrapperModel } from '../interfaces/response-wrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionAppService extends RequestBackendService {

  constructor(public sessionHttp: HttpClient) {
    super(sessionHttp);
  }

  protected getSessionDataHistory(request: SessionDataHistoryRequestModel): Observable<any> {
    return new Observable<any>((observer) => {
      this.getSessionData(request.historyKey).subscribe((history: SessionDataHistoryModel) => {
        if (!history) {
          history = { key: request.historyKey, values: [] }
        }

        let found = history.values.find(value => value.key === request.valueKey);
        if (found) {
          observer.next(found.value);
          observer.complete();
        }
        else {
          request.valueService.subscribe((response: ResponseWrapperModel<Object>) => {
            const responseData = response.data;
            if (response.success && responseData) {
              if (history.values.length >= request.historyLimit) {
                history.values.shift();
              }
              history.values.push({ key: request.valueKey, value: responseData })
              this.setSessionData(request.historyKey, history);
              observer.next(responseData);
            }
            else {
              observer.next(undefined);
            }
            observer.complete();
          })
        }
      })
    });

  }

  protected getSessionData(sessionKey: string, service?: Observable<any>): Observable<any> {
    return new Observable<any>((observer) => {
      const data = sessionStorage.getItem(sessionKey);
      if (data) {
        observer.next(JSON.parse(data));
        observer.complete();
      } else if (service) {
        service.subscribe((response: ResponseWrapperModel<Object>) => {
          const responseData = response.data;
          if (response.success && responseData) {
            this.setSessionData(sessionKey, responseData)
            observer.next(responseData);
          }
          else {
            observer.next(undefined);
          }
          observer.complete();
        })
      } else {
        observer.next(undefined);
        observer.complete();
      }
    });
  }

  protected setSessionData(sessionKey: string, data: any): void {
    if (data) {
      sessionStorage.setItem(sessionKey, JSON.stringify(data));
    } else {
      sessionStorage.removeItem(sessionKey)
    }
  }

}
