import { Router } from "express";
import MovieController from "./movie.controller";

const router = Router();

router.get("/", MovieController.getAllMovies);
router.get("/search", MovieController.searchMovie);
router.get("/:movieId", MovieController.getSingleMovie);
router.post("/", MovieController.createMovie);
router.patch("/:movieId", MovieController.updateMovie);
router.delete("/:movieId", MovieController.deleteMovie);

const MovieRoutes = router;

export default MovieRoutes;
