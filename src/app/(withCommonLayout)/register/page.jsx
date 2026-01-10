"use client";

import React, { useState } from "react";
import { signup } from "@/Services/users.service";
import { Sparkles } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const randomImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=33",
];

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateRandomImage = () => {
    const random =
      randomImages[Math.floor(Math.random() * randomImages.length)];
    setFormData((prev) => ({ ...prev, image: random }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // 1️⃣ Signup
      await signup(formData);

      // 2️⃣ Auto login
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error("Login failed after signup");
      }

      // 3️⃣ Success message
      setSuccess("Account created! Redirecting...");

      // 4️⃣ Redirect
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen section-padding flex items-center justify-center">
      <div className="glass-card w-full max-w-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          {formData.image ? (
            <img
              src={formData.image}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-[var(--border-color)]"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
              Profile
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight">
            Create Your Account
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Join us and get started today
          </p>
        </div>

        {/* Alerts */}
        {success && (
          <div className="mb-4 rounded-xl bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 text-red-600 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />

          {/* Image */}
          <div className="flex gap-3">
            <input
              type="text"
              name="image"
              placeholder="Profile Image URL"
              value={formData.image}
              onChange={handleChange}
              className="flex-1 rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 focus:ring-2 focus:ring-emerald-400 outline-none transition"
            />

            <button
              type="button"
              onClick={generateRandomImage}
              className="secondary-button flex items-center gap-2"
            >
              <Sparkles size={16} />
              Random
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="primary-button w-full mt-2 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
