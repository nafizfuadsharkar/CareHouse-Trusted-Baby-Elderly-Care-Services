"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-slate-900/40" />

      <div className="relative container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Caring Made Simple, Safe & Human
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle mx-auto"
        >
          CareHouse exists to remove stress from caregiving.  
          Whether it’s a child, an elderly parent, or a loved one recovering
          at home — we connect families with trusted, verified caregivers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Verified Caregivers",
              desc: "All caregivers go through identity and background checks.",
            },
            {
              title: "Flexible Booking",
              desc: "Choose duration, location and care type that fits your need.",
            },
            {
              title: "Secure & Transparent",
              desc: "Clear pricing, booking status and real-time updates.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 text-left">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
