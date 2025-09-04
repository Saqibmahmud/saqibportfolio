"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Saqib Al Mahmud<span className="text-foreground/60">-Software Engineer</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li><Link href="/#about" className="hover:opacity-80">About</Link></li>
          <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
          <li><Link href="/#contact" className="hover:opacity-80">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


