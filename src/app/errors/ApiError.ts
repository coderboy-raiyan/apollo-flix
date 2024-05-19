class ApiError extends Error {
  statusCode: number;
  message: string;
  stack?: string | null;

  constructor(statusCode: number, message: string, stack: string | null = "") {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
