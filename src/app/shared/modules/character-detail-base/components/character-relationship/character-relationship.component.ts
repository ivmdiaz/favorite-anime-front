import { Component, Input, OnInit } from '@angular/core';
import { RelationshipModel } from 'src/app/shared/interfaces/character.interface';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-character-relationship',
  templateUrl: './character-relationship.component.html',
  styleUrls: ['./character-relationship.component.scss']
})
export class CharacterRelationshipComponent implements OnInit {

  @Input()
  datasource: RelationshipModel[];

  constructor(public service: UtilService) { }

  ngOnInit(): void {
  }

}
