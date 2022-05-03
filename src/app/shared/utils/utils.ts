import { ImageModel } from "../interfaces/image.interface";

export function getPathImageUtil(image: ImageModel) {
  return `/assets/img/${image.url}`;
}
