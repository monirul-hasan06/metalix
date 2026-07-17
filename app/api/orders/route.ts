import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { orderSchema } from "@/lib/order-schema";

export const dynamic = "force-dynamic";

const FREE_DELIVERY_THRESHOLD = 2500;
const DELIVERY_FEE = 120;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please review the order information",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const validatedItems = [];

    for (const item of parsed.data.items) {
      const product = products.find((entry) => entry.slug === item.slug);

      if (!product) {
        return NextResponse.json(
          { message: `Product not found: ${item.slug}` },
          { status: 400 },
        );
      }

      if (!product.sizes.includes(item.size)) {
        return NextResponse.json(
          { message: `Invalid size selected for ${product.name}` },
          { status: 400 },
        );
      }

      if (!product.colors.includes(item.color)) {
        return NextResponse.json(
          { message: `Invalid colour selected for ${product.name}` },
          { status: 400 },
        );
      }

      if (item.quantity > product.stock) {
        return NextResponse.json(
          { message: `Only ${product.stock} unit(s) of ${product.name} are available` },
          { status: 400 },
        );
      }

      validatedItems.push({
        slug: product.slug,
        name: product.name,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        unitPrice: product.price,
        lineTotal: product.price * item.quantity,
      });
    }

    const subtotal = validatedItems.reduce(
      (sum, item) => sum + item.lineTotal,
      0,
    );
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const total = subtotal + delivery;
    const orderId = `MX-${new Date()
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;

    return NextResponse.json(
      {
        success: true,
        orderId,
        items: validatedItems,
        subtotal,
        delivery,
        total,
      },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid order request" },
      { status: 400 },
    );
  }
}
