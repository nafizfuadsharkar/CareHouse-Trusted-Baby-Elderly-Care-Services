"use client";
import ServiceCard from "@/app/(withCommonLayout)/services/_components/ServiceCard";
import { BookingsContext } from "@/context/booking.context";
import React, { use } from "react";

const MyBookings = () => {
  const { bookings, addBooking, removeBooking } = use(BookingsContext);
  return (
    <div>
      {bookings?.length === 0 ? (
        <h2 className="text-2xl font-bold text-green-400">
          Didn't book anything yet!
        </h2>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings?.map((service) => (
            <ServiceCard service={service} key={service?._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
