# Changelog

## 0.1.5

- Fix README badge configuration

## 0.1.4

- Add Development section to README
- Fix CI badge to reference publish.yml
- Add test script to package.json

## 0.1.0
- Initial release
- Typed HTTP error classes: ApiError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, UnprocessableError, InternalError
- Error serialization with `toErrorResponse()`
- Type guard with `isApiError()`
