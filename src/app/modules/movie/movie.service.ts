import { TMovie } from "./movie.interface";
import Movie from "./movie.model";

const createMovieToDB = async (movie: TMovie) => {
  const result = await Movie.create(movie);
  return result;
};

const MovieService = {
  createMovieToDB,
};
export default MovieService;
