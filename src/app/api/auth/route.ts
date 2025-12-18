import dbConnect from "@/src/lib/dbConnect";
import Password from "@/src/models/Psw";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const requestBody = await req.json();
    const dbPassword = await Password.findOne({});
    const hashedPassword = dbPassword.psw;

    const isPasswordCorrect = await bcrypt.compare(
      requestBody.psw,
      hashedPassword
    );

    if (isPasswordCorrect) {
      const cookieStore = await cookies();

      cookieStore.set({
        name: "session",
        value: "active",
        httpOnly: true,
        path: "/",
      });

      return NextResponse.json({ status: true });
    } else {
      return NextResponse.json({ status: false });
    }
  } catch (e) {
    return NextResponse.error();
  }
}

export async function DELETE(req: NextRequest) {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  return NextResponse.json({});
}
