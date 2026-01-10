"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarCheck,
  Users,
  ClipboardList,
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();

  const user = session?.user || {};
  const { name = "User", email = "Not available", image, role, phone } = user;

  const userRole = role ?? "User";
  const userPhone = phone ?? "Not provided";

  return (
    <section className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto space-y-10">
        <h1 className="text-2xl text-red-500 text-center">This page is under maintenance!!</h1>
        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, {name} 👋
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Manage your bookings, services and profile from here
            </p>
          </div>

          <Link
            href="/services"
            className="primary-button inline-flex items-center gap-2"
          >
            Book a Service <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* ---------- Profile + Stats ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ---- Profile Card ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border border-[var(--border-color)]"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xl font-bold">
                  {name.charAt(0)}
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mt-1">
                  <ShieldCheck size={14} />
                  {userRole}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail size={16} /> {email}
              </p>
              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Phone size={16} /> {userPhone}
              </p>
            </div>

            <Link
              href="/profile"
              className="secondary-button w-full mt-6 text-center block"
            >
              Edit Profile
            </Link>
          </motion.div>

          {/* ---- Stats ---- */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={<CalendarCheck />}
              title="Total Bookings"
              value="12"
              subtitle="All time"
            />
            <StatCard
              icon={<ClipboardList />}
              title="Active Services"
              value="3"
              subtitle="Currently running"
            />
            <StatCard
              icon={<Users />}
              title="Caregivers"
              value="5"
              subtitle="Assigned to you"
            />
          </div>
        </div>

        {/* ---------- Quick Actions ---------- */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ActionCard
              title="My Bookings"
              description="View and manage your booked services"
              href="/my-bookings"
            />
            <ActionCard
              title="Browse Services"
              description="Explore baby & elderly care services"
              href="/services"
            />
            <ActionCard
              title="Update Profile"
              description="Edit your personal information"
              href="/profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */
function StatCard({ icon, title, value, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 flex items-center gap-4"
    >
      <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function ActionCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className="glass-card p-6 hover:scale-[1.02] transition transform"
    >
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </Link>
  );
}
