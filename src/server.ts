import http from "http";
import mongoose from "mongoose";
import app from "./app/app";
import config from "./config";

const server = http.createServer(app);

const PORT = config.PORT || 5000;

async function bootstrap() {
  try {
    await mongoose.connect(config.DB_URI);
    console.log("DB connected Successfully");
    server.listen(PORT, () => {
      console.log("Server is listening on PORT ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
