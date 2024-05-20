import { format } from "date-fns";
import { Schema, model } from "mongoose";
import slugify from "slugify";
import { TMovie, TMovieMethods, TMovieModel, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<TMovie, TMovieModel, TMovieMethods>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: reviewSchema,
      required: true,
    },
  ],
});

movieSchema.static("createSlug", async function (movie: TMovie) {
  const slug =
    slugify(movie.title, { lower: true }) +
    "-" +
    format(movie.releaseDate, "dd-MM-yyyy") +
    "-" +
    movie.genre.toLocaleLowerCase();
  return slug;
});

movieSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const Movie = model<TMovie, TMovieModel>("Movie", movieSchema);

export default Movie;
