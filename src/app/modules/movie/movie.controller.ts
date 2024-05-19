import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsyncError from "../../utils/catchAsyncError";
import { movieValidationSchema } from "./movie.validation";

const createMovie = catchAsyncError(async (req: Request, res: Response) => {
  movieValidationSchema.parse(req.body);
  return res.status(httpStatus.OK).json({ success: true });
});

const MovieController = {
  createMovie,
};

export default MovieController;
