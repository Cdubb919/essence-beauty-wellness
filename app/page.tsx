import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-[#F8F4EE] text-[#111111]">
        {/* HERO */}
        <section className="min-h-[90vh] flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
                Beauty • Wellness • Education
              </p>

              <h1 className="text-5xl lg:text-7xl leading-tight mb-6">
                Essence Beauty
                <br />& Wellness
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 mb-10 max-w-xl">
                Enhancing confidence through luxury beauty services, advanced
                body contouring treatments, and professional training
                opportunities in Lufkin, Texas.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition inline-block"
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition inline-block"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <Image
                src="/hero-v2.png"
                alt="Essence Beauty and Wellness"
                width={1200}
                height={1200}
                priority
                className="rounded-[40px] shadow-2xl"
              />
            </div>
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
              <a
                href="https://lashessence.square.site/lash-services"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition cursor-pointer h-full">
                  <h3 className="text-2xl mb-4">Lash Extensions</h3>
                  <p className="text-gray-600">
                    Customized lash artistry designed to enhance your natural
                    beauty.
                  </p>
                </div>
              </a>

              <a
                href="https://lashessence.square.site/lash-services"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition cursor-pointer h-full">
                  <h3 className="text-2xl mb-4">Lash Lift & Tint</h3>
                  <p className="text-gray-600">
                    A low-maintenance way to achieve darker, lifted lashes.
                  </p>
                </div>
              </a>

              <a
                href="https://lashessence.square.site/airbrush-tanning"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition cursor-pointer h-full">
                  <h3 className="text-2xl mb-4">Airbrush Tanning</h3>
                  <p className="text-gray-600">
                    Beautiful, natural-looking color without UV exposure.
                  </p>
                </div>
              </a>

              <Link href="/body-contouring">
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition cursor-pointer h-full">
                  <h3 className="text-2xl mb-4">Body Contouring</h3>
                  <p className="text-gray-600">
                    Non-invasive Zerona treatments with no downtime.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* MEET CHRISTINA */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/christina-about.png"
                alt="Christina Whiteley"
                className="rounded-[40px] shadow-xl w-full"
              />
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
                Meet The Founder
              </p>

              <h2 className="text-5xl mb-8">Christina Whiteley</h2>

              <p className="text-lg text-gray-700 mb-6 leading-8">
                What began as a passion for helping women feel confident through
                beauty services has grown into Essence Beauty & Wellness — a
                destination for beauty, wellness, and professional education in
                East Texas.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-8">
                With over 19 years of customer-focused experience and more than
                6 years as a successful beauty business owner, Christina has
                built a reputation for exceptional client care, personalized
                services, and hands-on training.
              </p>

              <p className="text-lg text-gray-700 leading-8">
                Today, Essence Beauty & Wellness offers luxury lash services,
                airbrush tanning, advanced Zerona body contouring treatments,
                and professional training programs designed to help clients
                look, feel, and live with confidence.
              </p>
            </div>
          </div>
        </section>
        {/* WHY CHOOSE US */}
        <section className="py-24 px-6 bg-[#F8F4EE]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
                Why Choose Us
              </p>

              <h2 className="text-5xl mb-6">Beauty, Wellness & Education</h2>

              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                More than a beauty studio — we're committed to helping you look,
                feel, and live with confidence through personalized services,
                advanced technology, and professional education.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-4xl mb-4">6+</h3>
                <p className="font-medium mb-2">Years in Business</p>
                <p className="text-gray-600">
                  Now proudly serving East Texas with trusted beauty and
                  wellness services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-4xl mb-4">10+</h3>
                <p className="font-medium mb-2">
                  Years Beauty Industry Experience
                </p>
                <p className="text-gray-600">
                  Over a decade of hands-on experience helping clients look and
                  feel their best.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-4xl mb-4">1000s</h3>
                <p className="font-medium mb-2">Client Appointments</p>
                <p className="text-gray-600">
                  Thousands of beauty, tanning, and wellness appointments
                  successfully completed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-4xl mb-4">🎓</h3>
                <p className="font-medium mb-2">
                  Professional Training Programs
                </p>
                <p className="text-gray-600">
                  Hands-on education designed to help aspiring beauty
                  professionals succeed.
                </p>
              </div>
            </div>
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

          <p className="text-gray-600">essencebeautyandwellness@gmail.com</p>
        </section>
        {/* CTA */}
        <section className="py-24 px-6 bg-black text-white text-center">
          <h2 className="text-4xl mb-6">Ready to Invest in Yourself?</h2>

          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Schedule your appointment or consultation today and discover the
            Essence Beauty & Wellness experience.
          </p>

          <a
            href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black rounded-full inline-block"
          >
            Book Now
          </a>
        </section>
      </main>
    </>
  );
}
