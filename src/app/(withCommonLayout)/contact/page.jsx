"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100">
      {/* ---------- Hero ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Get in <span className="text-emerald-600">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
        >
          Have a question or need support? We’d love to hear from you.
        </motion.p>
      </section>

      {/* ---------- Content ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* ---- Contact Info ---- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <InfoCard
            icon={<Mail />}
            title="Email"
            value="support@carehouse.com"
          />
          <InfoCard icon={<Phone />} title="Phone" value="+880 1234 567 890" />
          <InfoCard
            icon={<MapPin />}
            title="Address"
            value="Dhaka, Bangladesh"
          />
        </motion.div>

        {/* ---- Contact Form ---- */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}

/* ---------- Info Card ---------- */
function InfoCard({ icon, title, value }) {
  return (
    <div className="glass-card p-5 rounded-xl flex items-center gap-4">
      <div className="text-emerald-600">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-600 dark:text-slate-300">{value}</p>
      </div>
    </div>
  );
}
