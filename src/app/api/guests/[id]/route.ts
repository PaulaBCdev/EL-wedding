import dbConnect from "@/src/lib/dbConnect";
import Guest from "@/src/models/Guest";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await dbConnect();

    const guest = await Guest.findById(id);
    if (!guest) {
      return NextResponse.json({ message: "Guest not found" }, { status: 404 });
    }
    await Guest.findByIdAndDelete(id);
    return NextResponse.json({ message: "Guest removed from list" });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}
