# @philiprehberger/ts-api-error-kit

[![CI](https://github.com/philiprehberger/ts-api-error-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-api-error-kit/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-api-error-kit.svg)](https://www.npmjs.com/package/@philiprehberger/ts-api-error-kit)
[![License](https://img.shields.io/github/license/philiprehberger/ts-api-error-kit)](LICENSE)

Standardized typed HTTP error classes for APIs

## Installation

```bash
npm install @philiprehberger/ts-api-error-kit
```

## Usage

### Throwing Errors

```ts
import { ApiError, NotFoundError, BadRequestError } from '@philiprehberger/ts-api-error-kit';

// Generic error with status code
throw new ApiError(404, 'User not found', { code: 'USER_NOT_FOUND' });

// Convenience subclasses
throw new NotFoundError('User not found');
throw new BadRequestError('Invalid email', { code: 'INVALID_EMAIL', details: { field: 'email' } });
```

### Serializing Errors

```ts
import { toErrorResponse } from '@philiprehberger/ts-api-error-kit';

app.use((err, req, res, next) => {
  const response = toErrorResponse(err);
  res.status(response.status).json(response);
});

// ApiError → { status: 404, message: 'User not found', code: 'USER_NOT_FOUND' }
// Unknown  → { status: 500, message: 'Internal server error' }
```

### Type Guard

```ts
import { isApiError } from '@philiprehberger/ts-api-error-kit';

if (isApiError(err)) {
  console.log(err.statusCode); // typed
}
```

## Error Classes

| Class | Status Code |
|-------|------------|
| `ApiError` | Any (first argument) |
| `BadRequestError` | 400 |
| `UnauthorizedError` | 401 |
| `ForbiddenError` | 403 |
| `NotFoundError` | 404 |
| `ConflictError` | 409 |
| `UnprocessableError` | 422 |
| `InternalError` | 500 |

## API

| Export | Description |
|--------|-------------|
| `ApiError` | Base error class with `statusCode`, `code`, `details` |
| `isApiError(err)` | Type guard — returns `true` if `err` is an `ApiError` |
| `toErrorResponse(err)` | Serializes any error to `ErrorResponse` object |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
