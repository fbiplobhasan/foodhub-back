import { prisma } from "../../lib/prisma";

const createProviderProfile = async (provider: any) => {
  try {
    const result = await prisma.providerProfile.create({
      data: {
        storeName: provider.storeName,
        description: provider.description,
        address: provider.address,
        userId: provider.userId,
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

export const providerService = {
  createProviderProfile,
};
