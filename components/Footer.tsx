export default function Footer() {
return ( <footer className="bg-black text-white mt-24"> <div className="max-w-7xl mx-auto px-6 py-16"> <div className="grid md:grid-cols-3 gap-12"> <div> <h3 className="text-3xl mb-4 text-[#C6A86B]">
Essence Beauty & Wellness </h3>

        <p className="text-gray-400 leading-7">
          Luxury beauty services, wellness treatments, and professional
          education designed to help you look, feel, and live with
          confidence.
        </p>
      </div>

      <div>
        <h4 className="text-xl mb-4 text-[#C6A86B]">Quick Links</h4>

        <ul className="space-y-3 text-gray-300">
          <li>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition">
              Meet Christina
            </a>
          </li>

          <li>
            <a
              href="/body-contouring"
              className="hover:text-white transition"
            >
              Body Contouring
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl mb-4 text-[#C6A86B]">Contact</h4>

        <p className="text-gray-300 mb-3">
          3213 South Medford Drive
          <br />
          Suite 305
          <br />
          Lufkin, Texas 75901
        </p>

        <p className="text-gray-300 mb-3">(512) 765-5214</p>

        <p className="text-gray-300 mb-6 break-all">
          essencebeautyandwellnessbrand@gmail.com
        </p>

        <a
          href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C6A86B] text-black px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Book Appointment
        </a>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Essence Beauty & Wellness. All Rights
      Reserved.
    </div>
  </div>
</footer>


);
}
