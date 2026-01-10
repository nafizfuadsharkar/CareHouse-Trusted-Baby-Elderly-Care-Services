import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const users = await dbConnect("users"); // ✅ inside the function

    const isUserExist = await users.findOne({ email: reqBody.email });
    if (isUserExist) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(reqBody.password, 10);

    const newUser = await users.insertOne({
      ...reqBody,
      password: passwordHash,
    });

    return NextResponse.json(
      { message: "User created successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
