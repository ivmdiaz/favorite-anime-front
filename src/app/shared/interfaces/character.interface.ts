import { ImageModel } from "./image.interface";
import { KeyValueModel } from "./key-value.interface";

export interface CharacterModel {
  id: number;
  image: ImageModel,
  name: string;
  alias: string;
  birthday: string;
}

export interface CharacterDetailModel {
  character: CharacterModel;
  location: LocationModel;
  introduction: string;
  history: string;
  abilities: string;
  gallery: ImageModel[];
  tags: TagModel[];
  relationships: RelationshipModel[];
}

export interface LocationModel {
  code: string;
  name: string;
  summary: string;
  gallery: ImageModel[];
}

export interface TagModel extends KeyValueModel {
  summary: string;
}

export interface RelationshipModel {
  character: CharacterModel;
  relationship: KeyValueModel;
  relationshipCharacter: CharacterModel;
}
