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
    const result = await mealService.getMeal();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Comment creation failed.",
      details: error,
    });
  }
};

const updateMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await mealService.updateMeal(req.body, id as string);
    res.status(200).json({
      success: true,
      message: "Status updated!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await mealService.deleteMeal(id as string);
    res.status(200).json({
      success: true,
      message: "Deleted meal!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Delete failed." });
  }
};

export const mealController = {
  createMeal,
  getMeal,
  updateMeal,
  deleteMeal,
};
