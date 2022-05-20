import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { CharacterDetailOnePieceModel } from '../interfaces/character-detail-one-piece';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService extends UtilService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getCharacters(): Observable<CharacterModel[]> {
    return this.getSessionData('characters', this.getServiceCharacters());
  }

  setCharacterSelected(data: CharacterModel): void {
    this.setSessionData('character-selected', data);
  }

  getCharacterSelected(): Observable<CharacterModel> {
    return this.getSessionData('character-selected');
  }

  getCharacterDetail(characterId: number): Observable<CharacterDetailOnePieceModel> {
    return this.getSessionDataHistory({
      historyKey: 'character-detail-history',
      historyLimit: 5,
      valueKey: `character-detail-${characterId}`,
      valueService: this.getServiceCharacterDetail(characterId)
    });
  }

}
