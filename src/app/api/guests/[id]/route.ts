import { UpdateGuestDTO } from "@/src/app/dto/update-guest.dto";
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
      {
        message:
          error instanceof Error ? error.message : "Error deleting guest",
      },
      { status: 400 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await dbConnect();

    let guest = Guest.findById(id);

    if (!guest) {
      return NextResponse.json({ message: "Guest not found" }, { status: 404 });
    }

    const updatedData: UpdateGuestDTO = await req.json();
    guest = await Guest.findByIdAndUpdate(id, updatedData, { new: true });

    return NextResponse.json(guest);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Error updating guest",
      },
      { status: 400 }
    );
  }
}
