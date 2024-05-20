import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { TMovie, TQueySearchOptions } from "./movie.interface";
import Movie from "./movie.model";

const createMovieToDB = async (movie: TMovie) => {
  let slug = await Movie.createSlug(movie);
  const result = await Movie.create({ ...movie, slug });
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find({});
  return result;
};

const getSingleMovieFromDB = async (movieId: string) => {
  const result = await Movie.findById(movieId);
  return result;
};

const updateMovieToDB = async (movieId: string, payload: TMovie) => {
  const { title, genre, releaseDate } = payload;
  const findMovie = await Movie.findById(movieId);
  if (!findMovie) {
    throw new ApiError(httpStatus.NOT_FOUND, "Movie not found");
  }
  let slug;
  if (
    findMovie.title !== title ||
    findMovie.genre !== genre ||
    findMovie.releaseDate !== releaseDate
  ) {
    slug = await Movie.createSlug(payload);
    console.log(slug);
  }
  const result = await Movie.findByIdAndUpdate(
    movieId,
    { ...payload, slug },
    { new: true }
  );
  return result;
};

const deleteMovieFromDB = async (movieId: string) => {
  await Movie.findByIdAndUpdate(movieId, { isDeleted: true });
};

const searchMovieFromDB = async (queries: TQueySearchOptions) => {
  let query: any = [];

  if (queries.title) {
    query.push({ title: { $regex: queries.title, $options: "i" } });
  }
  if (queries.description) {
    query.push({ description: { $regex: queries.description } });
  }
  const result = await Movie.find({ $or: query });
  return result;
};

const MovieService = {
  createMovieToDB,
  getAllMoviesFromDB,
  getSingleMovieFromDB,
  updateMovieToDB,
  deleteMovieFromDB,
  searchMovieFromDB,
};
export default MovieService;
