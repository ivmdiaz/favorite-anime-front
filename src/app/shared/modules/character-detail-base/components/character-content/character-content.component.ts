import { UtilService } from 'src/app/shared/services/util.service';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterDetailModel } from 'src/app/shared/interfaces/character.interface';

@Component({
  selector: 'app-character-content',
  templateUrl: './character-content.component.html',
  styleUrls: ['./character-content.component.scss']
})
export class CharacterContentComponent implements OnInit {

  @Input()
  datasource: CharacterDetailModel;

  constructor(public service: UtilService) { }

  ngOnInit(): void {
    console.log(this.datasource)
  }

}
