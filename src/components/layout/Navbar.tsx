"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects Completed", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo Section */}
          <Link
            href="/"
            className="
              flex
              items-center
              flex-1
              min-w-0
              gap-2
              md:gap-4
              -ml-2
            "
          >
            {/* Increased Logo Size */}
            <div className="relative flex-shrink-0 w-20 h-20 md:w-32 md:h-32">
              <Image
                src="/images/jts-logo.jpeg"
                alt="JTS Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Company Text */}
            <div className="flex flex-col justify-center leading-tight">
              <span
                className="
                  font-bold
                  text-[10px]
                  sm:text-[11px]
                  md:text-lg
                  text-slate-900
                  whitespace-normal
                  break-words
                  max-w-[150px]
                  md:max-w-none
                "
              >
                Joppa Technology Services Limited
              </span>

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  text-slate-500
                  mt-1
                "
              >
                RC 972862
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary-600 relative py-2",
                  pathname === link.href
                    ? "text-primary-600"
                    : "text-slate-700",
                )}
              >
                {link.name}

                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="
              md:hidden
              flex-shrink-0
              ml-2
              p-2
              rounded-lg
              text-slate-800
              hover:bg-slate-100
              transition
              z-50
            "
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.25 }}
              className="
                fixed
                inset-0
                bg-white
                z-40
                pt-28
                px-6
                pb-6
                md:hidden
                flex
                flex-col
              "
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "text-lg font-medium border-b border-slate-100 pb-3",
                      pathname === link.href
                        ? "text-primary-600"
                        : "text-slate-800",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pb-6">
                <Link
                  href="/contact"
                  className="
                    w-full
                    flex
                    justify-center
                    items-center
                    bg-primary-600
                    text-white
                    rounded-xl
                    py-4
                    font-semibold
                  "
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
