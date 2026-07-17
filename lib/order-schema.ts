import { z } from "zod";

export const checkoutSchema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    phone: z.string().regex(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number"),
    email: z.string().email("Enter a valid email").or(z.literal("")),
    address: z.string().min(8, "Enter your complete delivery address"),
    city: z.string().min(2, "Enter your city or district"),
    notes: z.string().max(300).optional(),
    paymentMethod: z.enum(["cod", "bkash", "nagad"]),
    transactionId: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod !== "cod" && (!data.transactionId || data.transactionId.length < 6)) {
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
  items: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      size: z.string(),
      color: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().positive(),
    }),
  ).min(1),
  subtotal: z.number().nonnegative(),
  delivery: z.number().nonnegative(),
  total: z.number().positive(),
});
