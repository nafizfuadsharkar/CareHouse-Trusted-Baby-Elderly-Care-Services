"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="glass-card w-full max-w-md p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back 👋</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Login to continue to your dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center">
            Login failed. Please try again.
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-[var(--border-color)] bg-white/70 dark:bg-slate-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>

          <button type="submit" className="primary-button w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <span className="text-sm text-slate-500">or</span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="secondary-button w-full flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="secondary-button w-full flex items-center justify-center gap-2"
          >
            <Github size={18} /> Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link href={'/register'} className="text-emerald-600 font-medium cursor-pointer hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
