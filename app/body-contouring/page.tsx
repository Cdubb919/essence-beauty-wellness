export default function BodyContouringPage() {
  return (
    <main className="bg-[#F8F4EE] text-[#111111]">

      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
          Non-Invasive Body Contouring
        </p>

        <h1 className="text-5xl md:text-7xl mb-6">
          Zerona Body Contouring
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Reduce stubborn fat, contour your body, and feel more confident
          without surgery, needles, or downtime.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl text-center mb-12">
            Why Choose Zerona?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl mb-3">No Downtime</h3>
              <p>
                Return to your normal daily activities immediately after treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl mb-3">Non-Invasive</h3>
              <p>
                No surgery, no needles, and no recovery period required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl mb-3">FDA Cleared</h3>
              <p>
                Advanced laser technology designed for body contouring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl mb-3">Comfortable Treatments</h3>
              <p>
                Relax during your session while the laser does the work.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-4xl mb-6">
          Schedule Your Consultation
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Discover whether Zerona Body Contouring is right for you.
        </p>

        <a
          href="https://lashessence.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-black rounded-full"
        >
          Book Now
        </a>
      </section>

    </main>
    
  );
}