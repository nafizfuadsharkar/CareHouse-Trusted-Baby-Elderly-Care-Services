import nodemailer from "nodemailer";

export async function sendInvoiceEmail({ to, booking }) {
  // 1️⃣ Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2️⃣ Email options
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject: "CareHouse | Booking Invoice",
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>Booking Confirmed ✅</h2>
        <p>Hello ${booking.user?.name || "Customer"},</p>

        <h3>🧾 Invoice Details</h3>
        <p><strong>Service:</strong> ${booking.serviceName}</p>
        <p><strong>Duration:</strong> ${booking.durationValue} ${booking.durationType}</p>
        <p><strong>Total:</strong> ৳${booking.totalCost}</p>
        <p><strong>Status:</strong> Pending</p>

        <hr />
        <p>Thanks for choosing CareHouse ❤️</p>
      </div>
    `,
  };

  // 3️⃣ Send the email
  return transporter.sendMail(mailOptions);
}
