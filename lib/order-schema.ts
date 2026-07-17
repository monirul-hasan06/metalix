import { z } from "zod";

export const checkoutSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(80),
    phone: z
      .string()
      .trim()
      .regex(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number"),
    email: z.string().trim().email("Enter a valid email").or(z.literal("")),
    address: z
      .string()
      .trim()
      .min(8, "Enter your complete delivery address")
      .max(250),
    city: z.string().trim().min(2, "Enter your city or district").max(80),
    notes: z.string().trim().max(300).optional(),
    paymentMethod: z.enum(["cod", "bkash", "nagad"]),
    transactionId: z.string().trim().max(50).optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.paymentMethod !== "cod" &&
      (!data.transactionId || data.transactionId.length < 6)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["transactionId"],
        message: "Enter the payment transaction ID",
      });
    }
  });

export type CheckoutValues = z.infer<typeof checkoutSchema>;

export const orderSchema = z.object({
  customer: checkoutSchema,
  items: z
    .array(
      z.object({
        slug: z.string().trim().min(1),
        size: z.string().trim().min(1),
        color: z.string().trim().min(1),
        quantity: z.number().int().min(1).max(10),
      }),
    )
    .min(1)
    .max(20),
});

export type OrderRequest = z.infer<typeof orderSchema>;
