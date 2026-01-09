"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    desc: "Loving and trained babysitters to ensure your child’s safety and happiness.",
    image:
      "https://images.unsplash.com/photo-1551934262-db2d7dd517f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    desc: "Compassionate support for elderly family members at home.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxkZXJseSUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "sick-care",
    title: "Sick Care",
    desc: "Specialized care for patients during recovery or illness.",
    image:
      "https://images.unsplash.com/photo-1564732005956-20420ebdab60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpY2slMjBjYXJlfGVufDB8fDB8fHww",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Services Designed for Every Need
        </motion.h2>

        <p className="section-subtitle text-center mx-auto">
          Choose from a range of professional caregiving services tailored to
          your family’s needs.
        </p>

        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {service.desc}
                </p>

                <Link
                  href={`/services`}
                  className="inline-flex items-center gap-2 mt-6 font-medium text-emerald-600 hover:gap-3 transition-all"
                >
                  Explore All →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
