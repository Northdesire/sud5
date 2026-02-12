"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [formOpen, setFormOpen] = useState(true);

  const openForm = () => {
    setFormOpen(true);
    setTimeout(() => {
      document.getElementById("anfrage")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="wood-bg min-h-screen">
      <Header onInquiry={openForm} />
      <Hero onInquiry={openForm} />
      <Story />
      <Gallery />
      <InquiryForm isOpen={formOpen} onToggle={() => setFormOpen(!formOpen)} />
      <Footer />
    </div>
  );
}
