import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  serviceId: { type: String, required: true },
  serviceName: { type: String, required: true },
  durationType: { type: String, required: true },
  durationValue: { type: Number, required: true },
  location: {
    region: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
  },
  totalCost: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, required: true },
  user: { type: String, required: true }, // ✅ email string
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
