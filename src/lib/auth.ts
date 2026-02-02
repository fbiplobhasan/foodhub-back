import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  trustedOrigins: [(process.env.APP_URL! as string) || "http://localhost:3000"],
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "CUSTOMER",
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
      },
      phone: {
        type: "string",
        required: false,
      },
      address: {
        type: "string",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
