"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Mail, Phone, User, Shield } from "lucide-react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading profile...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">You must be logged in to view this page.</p>
      </div>
    );
  }

  const { name, email, image, role, phone } = session.user;
  const userRole = role || "User";
  const userPhone = phone || "Not provided";

  return (
    <section className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="section-title">My Profile</h1>
        <p className="mt-2">
          Manage your personal information and account details
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card max-w-3xl mx-auto p-8"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={image || "https://i.pravatar.cc/150"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-[var(--border-color)] mb-4"
          />
          <h2 className="text-2xl font-semibold">{name}</h2>
          <span className="mt-1 inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <Shield size={14} /> {userRole}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <InfoItem icon={<User />} label="Full Name" value={name} />
          <InfoItem icon={<Mail />} label="Email Address" value={email} />
          <InfoItem icon={<Phone />} label="Phone" value={userPhone} />
          <InfoItem icon={<Shield />} label="Account Status" value="Active" />
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
          <button className="secondary-button w-full sm:w-auto">
            Edit Profile
          </button>
          <button className="primary-button w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </motion.div>
    </section>
  );
}

/* -------- Info Item -------- */
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-[var(--border-color)]">
      <div className="text-emerald-600">{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
