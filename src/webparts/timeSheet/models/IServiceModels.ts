export interface IApiError {
  message: string;
  statusCode?: number;
}

export interface IServiceResult<T> {
  data?: T;
  error?: IApiError;
  success: boolean;
}
