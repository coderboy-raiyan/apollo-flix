import { Router } from "express";
import MovieController from "./movie.controller";

const router = Router();

router.post("/", MovieController.createMovie);

const MovieRoutes = router;

export default MovieRoutes;
