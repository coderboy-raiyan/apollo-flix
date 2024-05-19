import { NextFunction, Request, RequestHandler, Response } from "express";

function catchAsyncError(fn: RequestHandler) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

export default catchAsyncError;
