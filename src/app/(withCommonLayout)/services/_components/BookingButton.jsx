"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";



const BookingButton = ({ service }) => {
  const router = useRouter();
    const { data: session, status } = useSession();

  const handleBooking = () => {
    if (!session?.user) {
      router.push("/login"); // go to login if not logged in
    } else {
      router.push(`/booking/${service._id}`); // go to booking page
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition w-full sm:w-auto"
    >
      Book Service
    </button>
  );
};

export default BookingButton;
