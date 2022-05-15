import { ImageModel } from './../../../../interfaces/image.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input()
  datasource: ImageModel[];

  @Input()
  selector: boolean = true;

  assets: string;

  currentValue: ImageModel;
  currentIndex: number;

  constructor() {

    this.assets = "assets/img/one-piece/characters";
    this.datasource = [
      { name: 'Image ACE', url: `${this.assets}/ace.png`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/bigmom.png`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/luffy.png`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/zoro.png`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/usopp.png`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/nami.png`, summary: "summary", tag: 'test' },
    ]

    this.assets = "assets/img/homepage";
    this.datasource = [
      { name: 'Image ACE', url: `${this.assets}/dragon-ball-presentation.jpg`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/naruto-presentation.jpg`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/one-piece-presentation.jpg`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/dragon-ball-presentation.jpg`, summary: "summary", tag: 'test' },
      { name: 'Image ACE', url: `${this.assets}/naruto-presentation.jpg`, summary: "summary", tag: 'test' },
    ]

    this.selectImage(0);
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.currentValue = this.datasource[this.currentIndex];
  }

  next() {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex > (this.datasource.length - 1)) {
      nextIndex = 0;
    }
    this.selectImage(nextIndex);
  }

  prev() {
    let nextIndex = this.currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = (this.datasource.length - 1);
    }
    this.selectImage(nextIndex);
  }

}
