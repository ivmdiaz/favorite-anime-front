import { SessionAppService } from './session-app.service';
import { Injectable } from '@angular/core';
import { ImageModel } from '../interfaces/image.interface';
import { ECategoryImage } from '../constants/category-image.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService extends SessionAppService {

  constructor(public utilHttp: HttpClient) {
    super(utilHttp);
  }

  getImageSource(image: ImageModel): string {
    const category = ECategoryImage.findByCode(image.category.code);
    return `${category.folder}/${image.filename}`;
  }

  getParagraphs(text: string): string[] {
    return text.split(/\\n/g);
  }
}
