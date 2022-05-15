import { Component, OnInit } from '@angular/core';
import { CharacterDetailModel } from 'src/app/shared/interfaces/character.interface';
import { OnePieceService } from '../../services/one-piece.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  datasource: CharacterDetailModel;

  constructor(public service: OnePieceService) {
    this.service.getCharacterDetail().subscribe(result => this.datasource = result);
  }

  ngOnInit(): void {
  }

}
