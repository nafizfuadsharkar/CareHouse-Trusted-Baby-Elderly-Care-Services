"use client";

import React, { useState } from "react";
import { signup } from "@/Services/users.service";

const randomImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=33",
];

const RegisterPage = () => {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      await signup(formData);
      setSuccess("Account created successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        image: "",
        role: "user",
      });
    } catch (err) {
      setError(err.message); // this will now show "This email is already registered" if email exists
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          {formData.image ? (
            <img
              src={formData.image}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No Image
            </div>
          )}

          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-1">Register to get started</p>
        </div>

        {/* Alerts */}
        {success && (
          <p className="mb-4 text-green-600 bg-green-50 p-3 rounded text-sm">
            {success}
          </p>
        )}
        {error && (
          <p className="mb-4 text-red-600 bg-red-50 p-3 rounded text-sm">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Image URL + Random Button */}
          <div className="flex gap-2">
            <input
              type="text"
              name="image"
              placeholder="Profile Image URL"
              value={formData.image}
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded-lg border bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={generateRandomImage}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
            >
              Random
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
