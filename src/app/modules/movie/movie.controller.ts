import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsyncError from "../../utils/catchAsyncError";
import pick from "../../utils/pick";
import { TQueySearchOptions } from "./movie.interface";
import MovieService from "./movie.service";

const createMovie = catchAsyncError(async (req: Request, res: Response) => {
  const { movie } = req.body;
  const result = await MovieService.createMovieToDB(movie);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movie created Successfully",
    data: result,
  });
});

const getAllMovies = catchAsyncError(async (req: Request, res: Response) => {
  const result = await MovieService.getAllMoviesFromDB();
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movies fetched successfully!",
    data: result,
  });
});

const getSingleMovie = catchAsyncError(async (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  const result = await MovieService.getSingleMovieFromDB(movieId);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movie fetched successfully!",
    data: result,
  });
});

const updateMovie = catchAsyncError(async (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  const { movie } = req.body;
  const result = await MovieService.updateMovieToDB(movieId, movie);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movie updated successfully!",
    data: result,
  });
});

const deleteMovie = catchAsyncError(async (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  await MovieService.deleteMovieFromDB(movieId);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movie deleted successfully!",
    data: null,
  });
});

const searchMovie = catchAsyncError(async (req: Request, res: Response) => {
  const query = pick<TQueySearchOptions, keyof TQueySearchOptions>(req.query, [
    "title",
    "description",
    "genre",
  ]);
  const result = await MovieService.searchMovieFromDB(query);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Movies fetched successfully!",
    data: result,
  });
});

const MovieController = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
};

export default MovieController;
