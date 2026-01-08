// Common error classes with status codes

import { ZodError } from "zod";

export class AppError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

export function handleApiError(error: unknown) {
  console.log("error", error);
  if (error instanceof ZodError) {
    return {
      status: 400,
      body: {
        success: false,
        message: "Invalid request body",
      },
    };
  }
  if (error instanceof AppError) {
    return {
      status: error.status,
      body: {
        success: false,
        message: error.message,
      },
    };
  }
  // Fallback for unexpected errors
  return {
    status: 500,
    body: {
      success: false,
      message: "Internal server error",
    },
  };
}
