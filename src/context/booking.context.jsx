"use client";
import React, { createContext, useState } from "react";

export const BookingsContext = createContext(null);

const BookingsContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  const value = {
    bookings,
    addBooking,
    removeBooking,
  };

  return (
    <BookingsContext.Provider value={value}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
