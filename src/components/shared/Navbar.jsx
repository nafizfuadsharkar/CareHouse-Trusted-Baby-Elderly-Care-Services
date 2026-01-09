"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-[var(--border-color)]">
        <div className="container mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-emerald-500">Care</span>
            <span className="text-slate-900 dark:text-white">House</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {session?.user && (
              <li>
                <Link
                href="/dashboard"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition"
              >
                Dashboard
              </Link>
              </li>
            )}
            {session?.user && (
              <li>
                <Link
                href="/my-bookings"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition"
              >
                My Bookings
              </Link>
              </li>
            )}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {status === "loading" ? (
              <span className="text-sm text-slate-500">Loading...</span>
            ) : session?.user ? (
              <>
                <span className="text-sm text-slate-500">
                  Hi, {session.user.name || "User"}
                </span>
                <button onClick={() => signOut()} className="secondary-button">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="primary-button">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6">
            <ul className="glass-card p-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {session?.user && (
                <Link href="/dashboard" onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
              )}

              <div className="pt-4 border-t border-[var(--border-color)]">
                {session?.user ? (
                  <button
                    onClick={() => signOut()}
                    className="w-full secondary-button"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="primary-button w-full block text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
