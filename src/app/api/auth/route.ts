import dbConnect from "@/src/lib/dbConnect";
import Password from "@/src/models/Psw";
import { NextRequest, NextResponse } from "next/server";
import { PasswordResponse } from "../dto/auth.dto";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const requestBody = await req.json();
    const dbPassword = await Password.findOne({});
    const hashedPassword = dbPassword.psw;

    const isPasswordCorrect = await bcrypt.compare(
      requestBody.password,
      hashedPassword
    );

    if (isPasswordCorrect) {
      return NextResponse.json({ status: true });
    } else {
      return NextResponse.json({ status: false });
    }
  } catch (e) {
    return NextResponse.error();
  }
}
