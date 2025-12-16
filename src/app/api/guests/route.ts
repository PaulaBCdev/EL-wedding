import dbConnect from "@/src/lib/dbConnect";
import Guest from "@/src/models/Guest";
import { NextRequest, NextResponse } from "next/server";
import { NewGuestDTO } from "../dto/new-guest.dto";

export async function GET() {
  try {
    await dbConnect();
    const guests = await Guest.find({});

    const mappedGuests = guests.map((guest) => ({
      id: guest._id.toString(),
      name: guest.name,
      surname: guest.surname,
      contact: guest.contact,
      attending: guest.attending,
      children: guest.children,
      allergies: guest.allergies,
      notes: guest.notes,
    }));

    return NextResponse.json({ data: mappedGuests });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data: NewGuestDTO = await req.json();

    const contactExists = await Guest.findOne({ contact: data.contact });

    if (contactExists) {
      return NextResponse.json(
        { message: "Este número de contacto ya está registrado" },
        { status: 409 }
      );
    }

    const guest = await Guest.create(data);
    return NextResponse.json(guest);
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}
