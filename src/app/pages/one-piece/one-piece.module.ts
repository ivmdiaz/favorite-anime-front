import { NgModule } from '@angular/core';

import { OnePieceRoutingModule } from './one-piece-routing.module';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';
import { CharacterListBaseModule } from 'src/app/shared/modules/character-list-base/character-list-base.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent
  ],
  imports: [
    CommonsModule,
    OnePieceRoutingModule,
    CharacterListBaseModule
  ]
})
export class OnePieceModule { }
