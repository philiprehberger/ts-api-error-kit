export interface ApiErrorOptions {
  code?: string;
  details?: Record<string, unknown>;
}

export interface ErrorResponse {
  status: number;
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}
