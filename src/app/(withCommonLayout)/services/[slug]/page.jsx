import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import BookingButton from "../_components/BookingButton";
import { getSingleService } from "@/Services/services.service";

export const metadata = {
  title: "Details Produc | CareHouse",
  description: "Explore trusted baby care, elderly care, and home services",
};

// const getSingleService = async (id) => {
//   const res = await fetch(
//     `https://care-house-server.vercel.app/services/${id}`
//   );
//   const service = await res.json();
//   return service;
// };

// const { slug } = await params;
// const service = await getSingleService(slug);

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;
  const service = await getSingleService(slug);

  if (!service) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Service not found
        </h2>
      </div>
    );
  }
  return (
    <section className="section-padding">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="relative h-[450px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={service.image}
            alt={service.serviceName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              {service.serviceName}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-800 dark:text-gray-100">
                {service.rating} Rating
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Price & Booking */}
          <div className="glass-card p-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Price per hour
              </p>
              <p className="text-4xl font-bold text-emerald-600">
                ৳{service.pricePerHour}
              </p>
            </div>

            <BookingButton service={service} />
          </div>

          {/* Trust Features */}
          <ul className="grid sm:grid-cols-2 gap-4 mt-10 text-sm text-gray-600 dark:text-gray-300">
            <li>✅ Verified & certified caregivers</li>
            <li>✅ Flexible scheduling</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Safe & compassionate care</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
