import { NgModule } from '@angular/core';

import { OnePieceRoutingModule } from './one-piece-routing.module';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';


@NgModule({
  declarations: [
    ListCharactersComponent
  ],
  imports: [
    CommonsModule,
    OnePieceRoutingModule
  ]
})
export class OnePieceModule { }
