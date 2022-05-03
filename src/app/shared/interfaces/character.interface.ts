import { ImageModel } from "./image.interface";

export interface CharacterModel {
  id: number;
  image: ImageModel,
  name: string;
  alias: string;
  birthday: string;
}
