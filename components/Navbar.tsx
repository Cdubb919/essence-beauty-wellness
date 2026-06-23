"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-[#F8F4EE] border-b border-[#e8e1d6] shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h2 className="text-lg md:text-2xl text-[#C6A86B]">
            Essence Beauty & Wellness
          </h2>

          <p className="hidden md:block text-xs uppercase tracking-[0.3em] text-gray-500">
            Beauty • Wellness • Education
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-black">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#training">Training</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* Desktop Book Now */}
        <a
          href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#C6A86B]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F4EE] border-t border-[#e8e1d6]">

          <div className="flex flex-col items-center py-6 gap-6 text-black">

            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="/#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="/#training" onClick={() => setMenuOpen(false)}>
              Training
            </a>

            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C6A86B] text-black px-6 py-3 rounded-full font-medium"
            >
              Book Now
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}