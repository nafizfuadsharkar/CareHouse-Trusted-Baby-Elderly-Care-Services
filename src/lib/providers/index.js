"use client";
import BookingsContextProvider from "@/context/booking.context";
import UserContextProvider from "@/context/user.context";
import { SessionProvider } from "next-auth/react"
import React from "react";

const Providers = ({ children }) => {
  return (
    <div>
      <SessionProvider>
        <UserContextProvider>
          <BookingsContextProvider>{children}</BookingsContextProvider>
        </UserContextProvider>
      </SessionProvider>
    </div>
  );
};

export default Providers;
