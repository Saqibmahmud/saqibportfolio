import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="font-sans" id="top">
      <Navbar />
      <main className="pt-16">
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
