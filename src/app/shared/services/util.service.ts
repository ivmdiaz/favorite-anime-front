import { SessionAppService } from './session-app.service';
import { Injectable } from '@angular/core';
import { ImageModel } from '../interfaces/image.interface';
import { getPathImageUtil } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UtilService extends SessionAppService {

  getPathImage(image: ImageModel): string {
    return getPathImageUtil(image);
  }

  getPTags(text: string): string[] {
    return text.split(/\n/g);
  }
}
