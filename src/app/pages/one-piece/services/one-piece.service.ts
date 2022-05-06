import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OnePieceService extends UtilService {

  constructor(private http: HttpClient) {
    super();
  }

  getCharacters(): Observable<CharacterModel[]> {
    return this.getDataSession('characters', this.http.get(`${environment.api.subpaths.onepiece}/character`));
  }

  setCharacterSelected(data: CharacterModel): void {
    this.setDataSession('character-selected', data);
  }

  getCharacterSelected(): Observable<CharacterModel> {
    return this.getDataSession('character-selected');
  }

}
