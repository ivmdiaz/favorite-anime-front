export interface ResponseWrapperModel<T> {
  success: boolean;
  timestamp: Date;
  message: string;
  data: T;
}
