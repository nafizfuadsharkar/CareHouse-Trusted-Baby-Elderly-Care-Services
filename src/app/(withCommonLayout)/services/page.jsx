import React from "react";
import ServiceCard from "./_components/ServiceCard";
import { getAllServices } from "@/Services/services.service";

export const metadata = {
  title: "Services | CareHouse",
  description: "Explore trusted baby care, elderly care, and home services",
};

const Services = async ({ searchParams }) => {
  // Keep your original logic
  const getParams = await searchParams;
  const services = await getAllServices({ ...getParams });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl text-center mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Our Professional Care Services
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Trusted baby care, elderly care, and home services provided by
            verified caregivers. Choose the service that fits your family’s
            needs.
          </p>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
              No services found
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Try refreshing or check back later.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
