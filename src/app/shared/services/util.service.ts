import { Injectable } from '@angular/core';
import { ImageModel } from '../interfaces/image.interface';
import { getPathImageUtil } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  getPathImage(image: ImageModel): string {
    return getPathImageUtil(image);
  }
}
