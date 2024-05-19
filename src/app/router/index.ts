import { Router } from "express";
import MovieRoutes from "../modules/movie/movie.route";

const router = Router();

const routers = [
  {
    path: "/movies",
    route: MovieRoutes,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
