import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFound from "./middleware/not-found";
import { mealRouter } from "./modules/meals/meal.router";
import { categoryRouter } from "./modules/category/category.route";
import { providerRouter } from "./modules/providerProfile/provider.route";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/categories", categoryRouter);
app.use("/api/meals", mealRouter);
app.use("/api/providers",providerRouter)

app.get("/", (req, res) => {
  res.json("Hello food-hub");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
