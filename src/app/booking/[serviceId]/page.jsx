import React from "react";
import BookingClient from "./BookingClient";

export default function BookingPage({ params }) {
  const resolvedParams = React.use(params); // ✅ REQUIRED

  console.log("SERVER PARAMS:", resolvedParams);

  return <BookingClient serviceId={resolvedParams.serviceId} />;
}
