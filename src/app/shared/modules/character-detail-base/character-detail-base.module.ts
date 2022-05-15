import { NgModule } from '@angular/core';
import { CommonsModule } from '../commons/commons.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CharacterPresentationComponent } from './components/character-presentation/character-presentation.component';
import { CharacterContentComponent } from './components/character-content/character-content.component';



@NgModule({
  declarations: [
    CharacterPresentationComponent,
    CharacterContentComponent,
    GalleryComponent,
  ],
  imports: [
    CommonsModule,
  ],
  exports: [
    CharacterPresentationComponent,
    CharacterContentComponent,
    GalleryComponent
  ]
})
export class CharacterDetailBaseModule { }
