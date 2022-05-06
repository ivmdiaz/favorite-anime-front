import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/shared/interfaces/card-component.interface';
import { CharacterModel } from 'src/app/shared/interfaces/character.interface';
import { OnePieceService } from '../../services/one-piece.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, CardComponent {

  datasource: CharacterModel[];

  constructor(public service: OnePieceService, public router: Router) {
    service.getCharacters().subscribe(result => this.datasource = result);
  }

  ngOnInit(): void {
    this.service.setCharacterSelected(undefined);
  }

  navigate(model: CharacterModel) {
    this.service.setCharacterSelected(model)
    this.router.navigate(['one-piece/character'])
  }

}
