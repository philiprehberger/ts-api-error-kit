# Changelog

## 0.1.0
- Initial release
- Typed HTTP error classes: ApiError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, UnprocessableError, InternalError
- Error serialization with `toErrorResponse()`
- Type guard with `isApiError()`
