"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyBookingsClient() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- Fetch Bookings ---------------- */
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/my-bookings", { cache: "no-store" });
        const data = await res.json();

        const normalized = data.map((b) => ({
          ...b,
          status: b.status || "Pending",
          id: b._id,
        }));

        setBookings(normalized);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  /* ---------------- Cancel Booking (UI only) ---------------- */
  const handleCancel = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );
    setBookings(updated);
  };

  /* ---------------- UI States ---------------- */
  if (loading) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-xl font-semibold">Loading bookings...</h2>
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-2xl font-bold mb-2">No bookings found</h2>
        <p className="text-gray-500">You haven’t booked any service yet.</p>
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <section className="section-padding max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Bookings</h1>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="glass-card p-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4"
        >
          {/* LEFT: Image */}
          <div className="flex-shrink-0">
            {booking.image ? (
              <img
                src={booking.image}
                alt={booking.serviceName}
                className="w-32 h-32 object-cover rounded-md"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* CENTER: Details */}
          <div className="flex-1 space-y-2 md:pl-4">
            <h2 className="text-xl font-semibold">{booking.serviceName}</h2>
            <p>
              <strong>Duration:</strong> {booking.durationValue}{" "}
              {booking.durationType}
            </p>
            <p>
              <strong>Location:</strong> {booking.location?.region},{" "}
              {booking.location?.district}, {booking.location?.city},{" "}
              {booking.location?.area}
            </p>
            <p className="font-semibold">Total Cost: ৳{booking.totalCost}</p>
          </div>

          {/* RIGHT: Status & Buttons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColor(
                booking.status
              )}`}
            >
              {booking.status}
            </span>

            <div className="flex flex-col md:flex-row gap-2">
              <Link
                href={`/services/${booking.serviceId}`}
                className="btn btn-outline bg-green-500 text-white hover:bg-green-600 py-1 px-3 rounded-lg"
              >
                View Details
              </Link>

              {booking.status === "Pending" && (
                <button
                  onClick={() => handleCancel(booking.id)}
                  className="btn bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded-lg"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------------- Status Color ---------------- */
function statusColor(status) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Confirmed":
      return "bg-blue-100 text-blue-700";
    case "Completed":
      return "bg-emerald-100 text-emerald-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}
