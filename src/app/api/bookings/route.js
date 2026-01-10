import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendInvoiceEmail } from "@/lib/sendInvoiceEmail";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  const booking = {
    ...data,
    user: session.user.email,
    date: new Date(),
    status: "Pending",
  };

  const collection = await dbConnect("bookings");
  const result = await collection.insertOne(booking);

  // 🔥 SEND EMAIL INVOICE
  try {
    await sendInvoiceEmail({
      to: session.user.email,
      booking,
    });
    console.log("Invoice email sent!");
  } catch (err) {
    console.error("Error sending email:", err);
  }

  return NextResponse.json({
    success: true,
    message: "Booking confirmed & invoice emailed",
    bookingId: result.insertedId,
  });
}
