"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, ShieldCheck, Clock } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Trusted Baby & Elderly Care Services";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100">
      {/* ---------- Hero Section ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Caring Made <span className="text-emerald-600">Simple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300"
        >
          We connect people with trusted, professional care services — delivered
          with compassion, reliability, and transparency.
        </motion.p>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Our Mission",
            desc: "To make quality care accessible and stress-free for everyone through technology and trusted professionals.",
          },
          {
            title: "Our Vision",
            desc: "A world where finding reliable care is effortless, transparent, and human-centered.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ---------- Stats Section ---------- */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Happy Clients", value: "5K+" },
            { icon: ShieldCheck, label: "Verified Caregivers", value: "1K+" },
            { icon: Clock, label: "Service Hours", value: "50K+" },
            { icon: HeartHandshake, label: "Trust & Care", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <stat.icon size={36} />
              <h4 className="text-3xl font-bold">{stat.value}</h4>
              <p className="text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Verified & trained professionals",
            "Transparent pricing & booking",
            "Reliable support & fast service",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <p className="font-medium text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
