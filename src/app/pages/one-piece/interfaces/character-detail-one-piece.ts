import { CharacterDetailModel } from "src/app/shared/interfaces/character.interface";
import { ImageModel } from "src/app/shared/interfaces/image.interface";

export interface CharacterDetailOnePieceModel extends CharacterDetailModel {
  devilFruit: DevilFruitModel;
}

export interface DevilFruitModel {
  name: string;
  meaning: string;
  introduction: string;
  history: string;
  type: DevilFruitTypeModel;
  image: ImageModel;
}

export interface DevilFruitTypeModel {
  code: string;
  name: string;
  summary: string;
}
