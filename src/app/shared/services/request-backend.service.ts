import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestBackendService {

  constructor(private backendHttp: HttpClient) {
  }

  protected getServiceCharacters(): Observable<Object> {
    return this.backendHttp.get(`${environment.api.subpaths.onepiece}/character`);
  }

  protected getServiceCharacterDetail(characterId: number): Observable<Object> {
    return this.backendHttp.get(`${environment.api.subpaths.onepiece}/character/${characterId}`);
  }
}
