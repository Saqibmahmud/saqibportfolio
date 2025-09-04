"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Saqib Al Mahmud<span className="text-foreground/60">-Software Engineer</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li><Link href="/#about" className="hover:opacity-80">About</Link></li>
          <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
          <li><Link href="/#contact" className="hover:opacity-80">Contact</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border hover:bg-foreground/5"
          onClick={() => setIsOpen((o) => !o)}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="sm:hidden border-t border-black/10 dark:border-white/10 bg-background/95 backdrop-blur">
          <div className="max-w-5xl mx-auto px-6 py-3">
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/#about" className="block py-2 hover:opacity-80" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block py-2 hover:opacity-80" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="block py-2 hover:opacity-80" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}


