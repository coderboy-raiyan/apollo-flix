import express, { Request, Response } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res
    .status(httpStatus.OK)
    .json({ success: true, message: "Server is healthy!!" });
});

app.use("/api/v1", router);

// Not found
app.use(notFound);

// global Error Handler
app.use(globalErrorHandler);

export default app;
