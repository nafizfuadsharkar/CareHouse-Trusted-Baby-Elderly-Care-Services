"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5K+", label: "Happy Families" },
  { value: "1.2K+", label: "Verified Caregivers" },
  { value: "8.5K+", label: "Bookings Completed" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-indigo-500/10 blur-3xl" />

      <div className="relative max-w-7xl  mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Trusted by Families Across the Country
        </motion.h2>

        <p className="section-subtitle mx-auto">
          Thousands of families rely on CareHouse for safe and dependable care.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-10"
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
