import { z } from "zod";

export const reviewValidationSchema = z.object({
  email: z.string().email(),
  rating: z.number(),
  comment: z.string(),
});

export const movieValidationSchema = z.object({
  title: z.string().max(20),
  description: z.string(),
  releaseDate: z.string().date(),
  genre: z.string(),
  isDeleted: z.boolean(),
  viewCount: z.number(),
  slug: z.string().optional(),
  reviews: z.array(reviewValidationSchema),
});
