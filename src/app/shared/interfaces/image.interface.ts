import { KeyValueModel } from './key-value.interface';

export interface ImageModel {
  category: KeyValueModel;
  code: string;
  filename: string;
  url: string;
  summary: string;
}
