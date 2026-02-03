import { prisma } from "../../lib/prisma";

const createMeal = async (mealData: any) => {
  try {
    const result = await prisma.meal.create({
      data: {
        name: mealData.name,
        description: mealData.description,
        price: Number(mealData.price),
        image: mealData.image,
        dietaryType: mealData.dietaryType,
        categoryId: mealData.categoryId,
        providerId: mealData.providerId,
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

const getMeal = async () => {
  const result = await prisma.meal.findMany({
    include: {
      category: true,
      provider: true,
    },
  });
  return result;
};

const updateMeal = async (meal: any, mealId: string) => {
  const result = await prisma.meal.update({
    where: { id: mealId },
    data: meal,
  });
  return result;
};

const deleteMeal = async (mealId: string) => {
  const result = await prisma.meal.delete({
    where: { id: mealId },
  });
  return result;
};

export const mealService = {
  createMeal,
  getMeal,
  updateMeal,
  deleteMeal,
};
