"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-indigo-500/20 blur-3xl" />

      <div className="relative section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              Trusted Care Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Care for Your <br />
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                Loved Ones
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              CareHouse helps families find verified caregivers for baby care,
              elderly support, and special home care — safe, simple, reliable.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/services" className="primary-button">
                Find Care Now
              </Link>
              <Link href="/about" className="secondary-button">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZGVybHklMjBjYXJlfGVufDB8fDB8fHww"
              alt="CareHouse"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
