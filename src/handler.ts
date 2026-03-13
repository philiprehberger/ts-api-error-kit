import { ApiError } from './errors.js';
import type { ErrorResponse } from './types.js';

export function isApiError(err: unknown): err is ApiError {
  return err instanceof ApiError;
}

export function toErrorResponse(err: unknown): ErrorResponse {
  if (isApiError(err)) {
    return {
      status: err.statusCode,
      message: err.message,
      ...(err.code !== undefined && { code: err.code }),
      ...(err.details !== undefined && { details: err.details }),
    };
  }

  return {
    status: 500,
    message: err instanceof Error ? err.message : 'Internal server error',
  };
}
