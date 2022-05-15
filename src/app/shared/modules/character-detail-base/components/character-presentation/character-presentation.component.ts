import { UtilService } from './../../../../services/util.service';
import { Component, Input, OnInit } from '@angular/core';
import { OnePieceService } from 'src/app/pages/one-piece/services/one-piece.service';
import { CharacterDetailModel, CharacterModel, LocationModel, TagModel } from 'src/app/shared/interfaces/character.interface';

@Component({
  selector: 'app-character-presentation',
  templateUrl: './character-presentation.component.html',
  styleUrls: ['./character-presentation.component.scss']
})
export class CharacterPresentationComponent implements OnInit {

  @Input()
  datasource: CharacterDetailModel;

  constructor(public service: UtilService) {
  }

  ngOnInit(): void {
  }

  get character(): CharacterModel {
    return this.datasource.character;
  }

  get location(): LocationModel {
    return this.datasource.location;
  }

  get tags(): TagModel[] {
    return this.datasource.tags;
  }

}
