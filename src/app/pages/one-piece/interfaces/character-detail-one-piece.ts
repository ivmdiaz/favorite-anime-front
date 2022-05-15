import { ImageModel } from './../../../shared/interfaces/image.interface';
import { CharacterDetailModel } from './../../../shared/interfaces/character.interface';

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
