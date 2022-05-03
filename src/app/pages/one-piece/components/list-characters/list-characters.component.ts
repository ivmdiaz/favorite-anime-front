import { OnePieceService } from './../../services/one-piece.service';
import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  datasource: CharacterModel[];

  constructor(public service: OnePieceService) {
    service.getCharacters().subscribe(result => this.datasource = result);
  }

  ngOnInit(): void {
  }
}
