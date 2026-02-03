import { prisma } from "../../lib/prisma";

const createCategory = async (CategoryData: any) => {
  try {
    const result = await prisma.category.create({
      data: {
        name: CategoryData.name,
      },
    });
    return result;
  } catch (error: any) {
    console.log("Error in createMeal service:", error);
    throw new Error(
      error.message || "Something went wrong while creating meal.",
    );
  }
};

export const categoryService = {
  createCategory,
};
