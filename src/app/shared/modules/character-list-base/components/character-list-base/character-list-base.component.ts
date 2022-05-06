import { CardComponent } from './../../../../interfaces/card-component.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-character-list-base',
  templateUrl: './character-list-base.component.html',
  styleUrls: ['./character-list-base.component.scss']
})
export class CharacterListBaseComponent implements CardComponent {

  @Input() datasource: CharacterModel[];

  @Output() navigateItemEvent = new EventEmitter<CharacterModel>();

  constructor(public service: UtilService) { }

  navigate(item: CharacterModel) {
    this.navigateItemEvent.emit(item);
  }

}
