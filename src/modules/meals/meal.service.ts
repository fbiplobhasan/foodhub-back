import { prisma } from "../../lib/prisma";

const createMeal = async (mealData: any) => {
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

const getSingleMeal = async (mealId: any) => {
  const result = await prisma.meal.findUnique({
    where: { id: mealId },
    include: {
      category: true,
      provider: true,
      reviews: true,
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
  getSingleMeal,
};
