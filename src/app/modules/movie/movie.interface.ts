import { Model } from "mongoose";

export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted?: boolean;
  viewCount: number;
  reviews: TReview[];
  slug: string;
};

export type TMovieMethods = {};

export type TMovieModel = Model<
  TMovie,
  Record<string, never>,
  TMovieMethods
> & {
  createSlug(movie: TMovie): string;
};
