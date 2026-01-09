import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-indigo-500/10 blur-3xl" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold">
              <span className="text-emerald-500">Care</span>House
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Trusted platform for baby care, elderly care and special home care
              services. Safe, reliable and easy to book.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>Baby Care</li>
              <li>Elderly Care</li>
              <li>Sick Care</li>
              <li>Home Assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-slate-600 dark:text-slate-300">
              support@carehouse.com
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              +880 1XXX-XXXXXX
            </p>

            <div className="flex gap-4 mt-6">
              <a className="p-2 glass-card" href="#">
                <Facebook size={18} />
              </a>
              <a className="p-2 glass-card" href="#">
                <Twitter size={18} />
              </a>
              <a className="p-2 glass-card" href="#">
                <Linkedin size={18} />
              </a>
              <a className="p-2 glass-card" href="#">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border-color)] pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CareHouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
