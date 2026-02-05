import { Router } from "express";
import { mealController } from "./meal.controller";

const router = Router();

router.post("/", mealController.createMeal);
router.get("/", mealController.getMeal);
router.get("/:id", mealController.getMeal);
router.patch("/:id", mealController.updateMeal);
router.delete("/:id", mealController.deleteMeal);

export const mealRouter = router;
