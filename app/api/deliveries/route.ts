import { NextResponse } from "next/server";

// GET /api/deliveries
export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      orderId: 101,
      courier: "Andrii",
      status: "on_the_way",
      estimatedTime: "20 min"
    }
  ]);
}

// POST /api/deliveries
export async function POST(request: Request) {
  const body = await request.json();

  const delivery = {
    id: Date.now(),
    orderId: body.orderId,
    courier: body.courier,
    status: "created"
  };

  return NextResponse.json(
    {
      message: "Delivery created successfully",
      data: delivery
    },
    { status: 201 }
  );
}