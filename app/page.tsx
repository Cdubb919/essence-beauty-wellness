import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F4EE] text-[#111111]">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
            Beauty • Wellness • Education
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Essence Beauty & Wellness
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-gray-700 mb-10">
            Enhancing confidence through luxury beauty services, advanced body
            contouring treatments, and professional training opportunities in
            Lufkin, Texas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition">
              Book Appointment
            </button>

            <button className="px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition">
              Explore Services
            </button>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center mb-4">Our Services</h2>

            <p className="text-center text-gray-600 mb-16">
              Beauty, wellness, and education all under one roof.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Lash Extensions</h3>
                <p className="text-gray-600">
                  Customized lash artistry designed to enhance your natural
                  beauty.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Lash Lift & Tint</h3>
                <p className="text-gray-600">
                  A low-maintenance way to achieve darker, lifted lashes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Airbrush Tanning</h3>
                <p className="text-gray-600">
                  Beautiful, natural-looking color without UV exposure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Body Contouring</h3>
                <p className="text-gray-600">
                  Non-invasive Zerona treatments with no downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl mb-8">About Essence Beauty & Wellness</h2>

            <p className="text-lg leading-8 text-gray-700">
              Founded with a passion for helping others look and feel their
              best, Essence Beauty & Wellness combines luxury beauty services,
              advanced wellness treatments, and professional education under one
              brand.
            </p>
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Training Academy</h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Learn the skills, techniques, and business knowledge needed to
              build a successful career in the beauty industry.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Lash Training</h3>
                <p className="text-gray-600">
                  Hands-on education designed for aspiring lash artists.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl mb-4">Airbrush Tan Training</h3>
                <p className="text-gray-600">
                  Learn professional spray tanning techniques and business
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-white text-center">
          <h2 className="text-4xl mb-6">Contact Us</h2>

          <p className="text-lg text-gray-700 mb-4">
            Essence Beauty & Wellness
          </p>

          <p className="text-gray-600">3213 South Medford Drive, Suite 305</p>

          <p className="text-gray-600">Lufkin, Texas 75901</p>

          <p className="mt-4 text-gray-600">Call or Text: (512) 765-5214</p>

          <p className="text-gray-600">lufkinbodycontouring@gmail.com</p>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-black text-white text-center">
          <h2 className="text-4xl mb-6">Ready to Invest in Yourself?</h2>

          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Schedule your appointment or consultation today and discover the
            Essence Beauty & Wellness experience.
          </p>

          <button className="px-8 py-4 bg-white text-black rounded-full">
            Book Now
          </button>
        </section>
      </main>
    </>
  );
}
