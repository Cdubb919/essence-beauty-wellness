export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] bg-[#F8F4EE] border-b border-[#e8e1d6] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h2 className="text-2xl text-[#C6A86B]">
            Essence Beauty & Wellness
          </h2>

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Beauty • Wellness • Education
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm uppercase tracking-wider text-black">
          <a href="/">Home</a>

          <a href="/#services">Services</a>

          <a href="/#training">Training</a>

          <a href="/#about">About</a>

          <a href="/#contact">Contact</a>
        </div>

        <a
          href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Book Now
        </a>

      </div>
    </nav>
  );
}