import { Request, Response } from "express";
import { providerService } from "./provider.service";

const createProviderProfile = async (req: Request, res: Response) => {
  try {
    const result = await providerService.createProviderProfile(req.body);
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

export const providerController = {
  createProviderProfile,
};

// model ProviderProfile {
//   id          String  @id @default(uuid())
//   userId      String  @unique
//   user        User    @relation(fields: [userId], references: [id])
//   storeName   String
//   description String?
//   address     String
//   meals       Meal[]
// }
