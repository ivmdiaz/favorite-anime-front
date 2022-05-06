import { NgModule } from '@angular/core';
import { CharacterListBaseComponent } from './components/character-list-base/character-list-base.component';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [
    CharacterListBaseComponent
  ],
  imports: [
    CommonsModule
  ],
  exports: [
    CharacterListBaseComponent
  ]
})
export class CharacterListBaseModule { }
