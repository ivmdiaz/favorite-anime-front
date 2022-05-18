import { SessionAppService } from './session-app.service';
import { Injectable } from '@angular/core';
import { ImageModel } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService extends SessionAppService {

  getPathImage(image: ImageModel): string {
    return `assets/img/${image.url}`;
  }

  getPTags(text: string): string[] {
    return text.split(/\n/g);
  }
}
