import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/order-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = orderSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ message: "Please review the order information", errors: parsed.error.flatten() }, { status: 400 });
    const orderId = `MX-${new Date().toISOString().slice(0,10).replaceAll("-","")}-${crypto.randomUUID().slice(0,6).toUpperCase()}`;
    return NextResponse.json({ success: true, orderId }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Invalid order request" }, { status: 400 });
  }
}
