export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F8F4EE]/95 backdrop-blur border-b border-[#e8e1d6]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A86B]">
            Beauty • Wellness • Education
          </p>

          <h2 className="text-2xl">
            Essence Beauty & Wellness
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#training">Training</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}