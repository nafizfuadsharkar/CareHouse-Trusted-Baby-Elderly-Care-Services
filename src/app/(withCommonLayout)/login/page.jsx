"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call NextAuth credentials signIn
    const result = await signIn("credentials", {
      redirect: false, // we'll handle redirect manually
      email,
      password,
    });

    if (result?.error) {
      alert("Login failed! Check your email and password.");
    } else {
      router.push("/dashboard"); // redirect after login
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {error && <p className="text-red-500 mb-2">Error: {error}</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-[300px]"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>

      <div className="mt-4 flex gap-2">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Login with Google
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
