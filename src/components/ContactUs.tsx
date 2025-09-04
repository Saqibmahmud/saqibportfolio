'use client'
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
             setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Please try again later.");
           setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Contact</h2>
      <p className="mt-4 text-foreground/70 mb-8 text-center">
        Have a project in mind or want to say hi? Send me a message below.
      </p>
      
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 outline-none transition-colors resize-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity w-full"
            >
              Send Message
            </button>
          </div>
        </form>
        
        {status && (
          <p className="mt-4 text-sm text-foreground/70">{status}</p>
        )}
        
        <div className="mt-8 pt-6 border-t border-foreground/10">
          <p className="text-sm text-foreground/70">
            Or reach me directly at{" "}
            <a className="underline hover:opacity-80" href="mailto:saqibalmahmud@gmail.com">
              saqibalmahmud@gmail.com
            </a>
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:opacity-80">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:opacity-80">
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:opacity-80">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
