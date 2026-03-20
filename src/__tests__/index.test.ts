import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('api-error-kit', () => {
  it('should export ApiError', () => {
    assert.ok(mod.ApiError);
  });

  it('should export BadRequestError', () => {
    assert.ok(mod.BadRequestError);
  });

  it('should export UnauthorizedError', () => {
    assert.ok(mod.UnauthorizedError);
  });

  it('should export ForbiddenError', () => {
    assert.ok(mod.ForbiddenError);
  });

  it('should export NotFoundError', () => {
    assert.ok(mod.NotFoundError);
  });

  it('should export ConflictError', () => {
    assert.ok(mod.ConflictError);
  });

  it('should export UnprocessableError', () => {
    assert.ok(mod.UnprocessableError);
  });

  it('should export InternalError', () => {
    assert.ok(mod.InternalError);
  });

  it('should export isApiError', () => {
    assert.ok(mod.isApiError);
  });

  it('should export toErrorResponse', () => {
    assert.ok(mod.toErrorResponse);
  });
});
