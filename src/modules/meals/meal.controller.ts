import { Request, Response } from "express";
import { mealService } from "./meal.service";

const createMeal = async (req: Request, res: Response) => {
  try {
    const result = await mealService.createMeal(req.body);
    return res.status(201).json({
      success: true,
      message: "Meal created successfully!",
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create meal",
    });
  }
};

const getMeal = async (req: Request, res: Response) => {
  try {
    const result = await mealService.getMeal(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Comment creation failed.",
      details: error,
    });
  }
};

export const mealController = {
  createMeal,
  getMeal,
};
