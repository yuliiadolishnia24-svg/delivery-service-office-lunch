import { NextResponse } from "next/server";

// PATCH /api/deliveries/{id}/status
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  return NextResponse.json({
    deliveryId: params.id,
    newStatus: body.status,
    updatedAt: new Date().toISOString()
  });
}