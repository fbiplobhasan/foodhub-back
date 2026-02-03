import { Request, Response } from "express";
import { categoryService } from "./category.sevice";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req.body)
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

export const categoryController = {
  createCategory,
};