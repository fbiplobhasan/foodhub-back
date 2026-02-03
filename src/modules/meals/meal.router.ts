import { Router } from "express";
import { mealController } from "./meal.controller";

const router = Router();

router.post("/", mealController.createMeal);
router.get("/",mealController.getMeal)

export const mealRouter = router;
