import { NgModule } from '@angular/core';
import { CommonsModule } from '../commons/commons.module';
import { CharacterPresentationComponent } from './components/character-presentation/character-presentation.component';
import { CharacterContentComponent } from './components/character-content/character-content.component';
import { CharacterGalleryComponent } from './components/character-gallery/character-gallery.component';
import { CharacterRelationshipComponent } from './components/character-relationship/character-relationship.component';



@NgModule({
  declarations: [
    CharacterPresentationComponent,
    CharacterContentComponent,
    CharacterGalleryComponent,
    CharacterRelationshipComponent,
  ],
  imports: [
    CommonsModule,
  ],
  exports: [
    CharacterPresentationComponent,
    CharacterContentComponent,
  ]
})
export class CharacterDetailBaseModule { }
