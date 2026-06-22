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

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition"
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
              {/* LASHES */}
              <a
                href="https://lashessence.square.site/lash-services"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <Image
                    src="/hybrid-replacement.jpg"
                    alt="Lash Extensions"
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl mb-4">Lash Extensions</h3>

                    <p className="text-gray-600 min-h-[72px]">
                      Customized lash artistry designed to enhance your natural
                      beauty.
                    </p>

                    <span className="inline-block mt-6 mx-auto bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium group-hover:scale-105 transition duration-300">
                      Book Now
                    </span>
                  </div>
                </div>
              </a>

              {/* TANNING */}
              <a
                href="https://lashessence.square.site/airbrush-tanning"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <Image
                    src="/airbrushtan1.jpg"
                    alt="Airbrush Tanning"
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl mb-4">Airbrush Tanning</h3>

                    <p className="text-gray-600 min-h-[72px]">
                      Beautiful, natural-looking color without UV exposure.
                    </p>

                    <span className="inline-block mt-6 mx-auto bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium group-hover:scale-105 transition duration-300">
                      Book Now
                    </span>
                  </div>
                </div>
              </a>

              {/* BODY CONTOURING */}
              <Link href="/body-contouring" className="group block">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <Image
                    src="/laser.webp"
                    alt="Body Contouring"
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl mb-4">Body Contouring</h3>

                    <p className="text-gray-600 min-h-[72px]">
                      Non-invasive Zerona treatments with no downtime.
                    </p>

                    <span className="inline-block mt-6 mx-auto bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium group-hover:scale-105 transition duration-300">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>

              {/* TRAINING */}
              <a
                href="https://lashessence.square.site/classestraining"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <Image
                    src="/sitetraining.jpg"
                    alt="Training Academy"
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl mb-4">Training</h3>

                    <p className="text-gray-600 min-h-[72px]">
                      Hands on beauty education designed to help launch your
                      career.
                    </p>

                    <span className="inline-block mt-6 mx-auto bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium group-hover:scale-105 transition duration-300">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
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
              <p className="text-[#C6A86B] text-lg mb-8 tracking-wide">
                Founder • Beauty Professional • Educator
              </p>

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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
                Training
              </p>

              <h2 className="text-5xl mb-6">Professional Beauty Training</h2>

              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                Learn hands-on techniques, client care, and business strategies
                from an experienced beauty professional in a supportive,
                real-world training environment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* LASH TRAINING */}
              <div className="group h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                  <Image
                    src="/lltraining.png"
                    alt="Lash Lift Training"
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-[260px]">
                    <h3 className="text-3xl mb-4">Lash Training</h3>

                    <p className="text-gray-600 leading-7">
                      Learn proper lash lift placement, product application,
                      client consultation, safety protocols, and professional
                      techniques through hands-on instruction.
                    </p>

                    <div className="flex justify-center gap-4 pt-8">
                      <a
                        href="https://lashessence.square.site/classestraining"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition"
                      >
                        Learn More
                      </a>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe7R1mWK0_Ppog6WaVNrpznFy4Zwl6QUpNxzl3hzdWJiEERfQ/viewform?usp=preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium hover:scale-105 transition duration-300"
                      >
                        Enroll Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* AIRBRUSH TRAINING */}
              <div className="group h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                  <Image
                    src="/tantraining.png"
                    alt="Airbrush Tan Training"
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-8 flex flex-col h-[260px]">
                    <h3 className="text-3xl mb-4">Airbrush Tan Training</h3>

                    <p className="text-gray-600 leading-7">
                      Master spray tan techniques, body positioning, color
                      selection, equipment setup, and business fundamentals
                      through guided hands-on training.
                    </p>

                    <div className="flex justify-center gap-4 pt-8">
                      <a
                        href="https://lashessence.square.site/classestraining"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition"
                      >
                        Learn More
                      </a>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe7R1mWK0_Ppog6WaVNrpznFy4Zwl6QUpNxzl3hzdWJiEERfQ/viewform?usp=preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#C6A86B] text-black px-5 py-3 rounded-full font-medium hover:scale-105 transition duration-300"
                      >
                        Enroll Here
                      </a>
                    </div>
                  </div>
                </div>
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
