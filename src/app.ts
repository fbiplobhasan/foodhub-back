import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFound from "./middleware/not-found";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));



app.use(globalErrorHandler);
app.use(notFound);

export default app;
