import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-character-gallery',
  templateUrl: './character-gallery.component.html',
  styleUrls: ['./character-gallery.component.scss']
})
export class CharacterGalleryComponent implements OnInit {

  @Input()
  datasource: ImageModel[];

  @Input()
  selector: boolean = true;

  assets: string;

  currentValue: ImageModel;
  currentIndex: number;

  constructor() {

  }

  ngOnInit(): void {
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
