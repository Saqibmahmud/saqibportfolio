import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center gap-6">
      <Image src="/Images/dp_saqib.jpg" alt="Logo" width={150} height={60} className="rounded-full" />
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Hi, I&apos;m Saqib Al Mahmud — Software Engineer
      </h1>
      <p className="text-foreground/80 max-w-2xl">
        Full‑stack developer specializing in Next.js, React, Node.js/NestJS, and ASP.NET Core. I build clean, responsive UIs and robust REST APIs, with solid experience across SQL Server, PostgreSQL, and MySQL. I focus on performance, scalability, and end‑to‑end delivery using TypeScript, Git, and modern development practices.
      </p>
      <div className="flex gap-3">
        <a href="#projects" className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90">View Projects</a>
        <a href="#contact" className="px-5 py-2 rounded-md border text-sm font-medium hover:bg-foreground/5">Contact</a>
        <a href="/cv"  target="_blank" className="px-5 py-2 rounded-md border text-sm font-medium hover:bg-foreground/5">View CV</a>
      </div>
    </section>
  );
}


