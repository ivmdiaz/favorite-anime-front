import { Observable } from 'rxjs';
export interface SessionDataHistoryModel {
  key: string;
  values: SessionDataModel[]
}

export interface SessionDataModel {
  key: string;
  value: any;
}

export interface SessionDataHistoryRequestModel {
  historyKey: string;
  historyLimit: number;
  valueKey: string;
  valueService: Observable<Object>;
}
