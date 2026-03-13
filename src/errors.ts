import type { ApiErrorOptions } from './types.js';

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly code?: string;
  public readonly details?: Record<string, unknown>;

  constructor(statusCode: number, message: string, options?: ApiErrorOptions) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = options?.code;
    this.details = options?.details;
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(400, message, options);
    this.name = 'BadRequestError';
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(401, message, options);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(403, message, options);
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(404, message, options);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(409, message, options);
    this.name = 'ConflictError';
  }
}

export class UnprocessableError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(422, message, options);
    this.name = 'UnprocessableError';
  }
}

export class InternalError extends ApiError {
  constructor(message: string, options?: ApiErrorOptions) {
    super(500, message, options);
    this.name = 'InternalError';
  }
}
