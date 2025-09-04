export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-sm text-foreground/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Saqib. All rights reserved.</p>
        <a href="#top" className="hover:opacity-80">Back to top ↑</a>
      </div>
    </footer>
  );
}


