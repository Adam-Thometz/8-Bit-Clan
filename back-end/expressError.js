class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

// 404 NotFoundError

class NotFoundError extends ExpressError {
  constructor(message = "Not found") {
    super(message, 404)
  }
}

// 401 UnauthorizedError

class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 401)
  }
}

// 400 BadRequestError

class BadRequestError extends ExpressError {
  constructor(message = "Bad request") {
    super(message, 400)
  }
}

// 403 ForbiddenError

class ForbiddenError extends ExpressError {
  constructor(message = "Forbidden request") {
    super(message, 403)
  }
}

module.exports = {
  ExpressError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError
}