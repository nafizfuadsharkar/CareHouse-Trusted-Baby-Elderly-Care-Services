"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const emojis = ["⚡", "🚀", "💫", "✨", "🌀"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % emojis.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Spinner Ring */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500/30"></div>
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>

        {/* Emoji */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl animate-pulse">
          {emojis[index]}
        </div>
      </div>

      {/* Text */}
      <p className="text-lg font-semibold tracking-wide animate-bounce">
        Loading awesomeness...
      </p>
    </div>
  );
}
