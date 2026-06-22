// export default function BodyContouringPage() {
//   return (
//     <>
//     </>
//   );
// }
//     <main className="bg-[#F8F4EE] text-[#111111]">

//       {/* HERO */}
//       <section className="py-24 px-6 text-center">
//         <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
//           Non-Invasive Body Contouring
//         </p>

//         <h1 className="text-5xl md:text-7xl mb-6">
//           Zerona Body Contouring
//         </h1>

//         <p className="max-w-3xl mx-auto text-lg text-gray-700">
//           Reduce stubborn fat, contour your body, and feel more confident
//           without surgery, needles, or downtime.
//         </p>
//       </section>

//       {/* BENEFITS */}
//       <section className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-4xl text-center mb-12">
//             Why Choose Zerona?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//             <div className="bg-white p-8 rounded-3xl shadow-sm">
//               <h3 className="text-xl mb-3">No Downtime</h3>
//               <p>
//                 Return to your normal daily activities immediately after treatment.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-sm">
//               <h3 className="text-xl mb-3">Non-Invasive</h3>
//               <p>
//                 No surgery, no needles, and no recovery period required.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-sm">
//               <h3 className="text-xl mb-3">FDA Cleared</h3>
//               <p>
//                 Advanced laser technology designed for body contouring.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-sm">
//               <h3 className="text-xl mb-3">Comfortable Treatments</h3>
//               <p>
//                 Relax during your session while the laser does the work.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-6 bg-black text-white text-center">
//         <h2 className="text-4xl mb-6">
//           Schedule Your Consultation
//         </h2>

//         <p className="max-w-2xl mx-auto mb-8">
//           Discover whether Zerona Body Contouring is right for you.
//         </p>

//         <a
//           href="https://lashessence.square.site"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-8 py-4 bg-white text-black rounded-full"
//         >
//           Book Now
//         </a>
//       </section>

//     </main>

//   );
// }

import Image from "next/image";

export default function BodyContouringPage() {
  return (
    <main className="bg-[#F8F4EE] text-[#111111]">
      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              Advanced Body Contouring
            </p>

            <h1 className="text-5xl lg:text-7xl leading-tight mb-6">
              Zerona Body Contouring
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Non-invasive laser body contouring designed to help reduce
              stubborn fat, contour your body, and support your wellness goals
              without surgery, downtime, or medications.
            </p>

            <a
              href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 rounded-full"
            >
              Schedule Consultation
            </a>
          </div>

          <div>
            <Image
              src="/body-contouring/lbc.webp"
              alt="Body Contouring"
              width={900}
              height={700}
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/body-contouring/hs.jpg"
              alt="Christina Whiteley"
              width={700}
              height={900}
              className="rounded-[40px] shadow-xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              My Story
            </p>

            <h2 className="text-5xl mb-8">Bringing Zerona® to East Texas</h2>

            <p className="text-lg text-gray-700 mb-6 leading-8">
              My journey with Zerona® began in 2021 when I joined Austin Body
              Contouring as a laser technician. Over the next two years, I
              gained extensive hands-on experience helping clients achieve their
              body goals through advanced, non-invasive body contouring
              treatments.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-8">
              During that time, I worked with hundreds of clients who were
              looking to lose inches, reduce stubborn fat, tighten loose skin,
              and improve their confidence. Watching those transformations
              happen every day inspired my passion for helping others feel their
              best.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-8">
              After welcoming my son, I made the decision to move back home to
              Lufkin. While I was excited to return to East Texas, I knew there
              was one thing missing — access to the same advanced body
              contouring technology that had helped so many clients transform
              their lives.
            </p>

            <p className="text-lg text-gray-700 leading-8">
              That's why I partnered to bring Zerona® Laser Body Contouring to
              East Texas. My mission is simple: provide clients with advanced
              technology, honest guidance, and personalized care to help them
              become the best version of themselves.
            </p>
          </div>
        </div>
      </section>

      {/* PERSONAL RESULTS */}
      <section className="py-24 px-6 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
            Personal Results
          </p>

          <h2 className="text-5xl mb-8">My Own Zerona® Transformation</h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 leading-8">
            Before bringing Zerona® to Lufkin, I experienced the treatment
            myself while working as a laser technician at Austin Body
            Contouring. Seeing my own results firsthand strengthened my belief
            in the technology and my passion for helping others achieve their
            goals through non-invasive body contouring.
          </p>

          <Image
            src="/body-contouring/mybeforeandafterpic.jpg"
            alt="Christina Zerona Results"
            width={1200}
            height={800}
            className="rounded-[40px] shadow-2xl mx-auto"
          />

          <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-12 leading-8">
            Having experienced the benefits personally, I'm proud to now offer
            the same advanced technology to clients throughout Lufkin and East
            Texas. Helping clients gain confidence and feel their best is what
            inspires me every day.
          </p>
        </div>
      </section>

      {/* WHAT IS ZERONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/body-contouring/bikini.webp"
              alt="Zerona Body Contouring"
              width={900}
              height={700}
              className="rounded-[40px] shadow-xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              What Is Zerona®
            </p>

            <h2 className="text-5xl mb-8">
              Advanced Non-Invasive Body Contouring
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-8">
              Zerona® is an FDA-cleared low-level laser treatment designed to
              help contour the body by targeting fat cells without surgery,
              needles, discomfort, or downtime.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-8">
              During treatment, low-level laser energy interacts with fat cells,
              allowing the body to naturally process and eliminate the released
              fat through normal metabolic functions.
            </p>

            <p className="text-lg text-gray-700 leading-8">
              Treatments are painless, relaxing, and designed for individuals
              who want a non-invasive solution to help support their body
              contouring goals.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              Benefits
            </p>

            <h2 className="text-5xl mb-6">Why Clients Love Zerona®</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-3xl mb-4">✨</h3>
              <h4 className="font-semibold mb-3">Non-Invasive</h4>
              <p className="text-gray-600">
                No surgery, needles, anesthesia, or recovery time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-3xl mb-4">⏰</h3>
              <h4 className="font-semibold mb-3">No Downtime</h4>
              <p className="text-gray-600">
                Return to normal activities immediately after treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-3xl mb-4">📏</h3>
              <h4 className="font-semibold mb-3">Inch Loss</h4>
              <p className="text-gray-600">
                Designed to help contour areas of stubborn fat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-3xl mb-4">🛋️</h3>
              <h4 className="font-semibold mb-3">Relaxing Experience</h4>
              <p className="text-gray-600">
                Comfortable treatments in a private spa-like setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT RESULTS VIDEO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
            Real Client Results
          </p>

          <h2 className="text-5xl mb-8">
            Transformations That Inspire Confidence
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 leading-8">
            While our Lufkin location is new, Zerona® has already helped
            countless clients achieve incredible results. The transformations
            shown below are real client results from our trusted partner
            location, Austin Body Contouring.
          </p>

          <div className="aspect-video overflow-hidden rounded-3xl shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/o46oGr2J6pE"
              title="Body Contouring Results"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
            Complimentary Consultation
          </p>

          <h2 className="text-5xl mb-8">Ready To Start Your Transformation?</h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Schedule a complimentary consultation and learn whether Zerona® Body
            Contouring is right for your goals.
          </p>

          <a
            href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Book Consultation
          </a>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section className="py-24 px-6 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
            Results Gallery
          </p>

          <h2 className="text-5xl mb-12">Real Before & After Results</h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <Image
              src="/body-contouring/ba.webp"
              alt="Body Contouring Results"
              width={1200}
              height={900}
              className="rounded-[40px] shadow-xl"
            />

            <Image
              src="/body-contouring/before-after.webp"
              alt="Before and After Results"
              width={1200}
              height={900}
              className="rounded-[40px] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              FAQ
            </p>

            <h2 className="text-5xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-3">Does Zerona hurt?</h3>

              <p className="text-gray-700">
                No. Treatments are painless and relaxing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-3">Is there any downtime?</h3>

              <p className="text-gray-700">
                No downtime is required. Most clients return to normal
                activities immediately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-3">How long is a treatment?</h3>

              <p className="text-gray-700">
                Most sessions take approximately 40 minutes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-3">How many sessions will I need?</h3>

              <p className="text-gray-700">
                Recommendations vary based on individual goals and consultation
                findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
              Visit Us
            </p>

            <h2 className="text-5xl mb-6">Visit Essence Beauty & Wellness</h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Conveniently located in Lufkin, Texas, offering advanced body
              contouring, beauty services, and professional training.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-[40px] shadow-sm">
              <h3 className="text-3xl mb-6">Contact Information</h3>

              <p className="mb-4 text-lg">
                📍 3213 South Medford Drive, Suite 305
                <br />
                Lufkin, Texas 75901
              </p>

              <p className="mb-4 text-lg">📞 (512) 765-5214</p>

              <p className="mb-8 text-lg break-all">
                ✉️ essencebeautyandwellness@gmail.com
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=3213+South+Medford+Drive+Suite+305+Lufkin+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-full"
                >
                  Get Directions
                </a>

                <a
                  href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black px-6 py-3 rounded-full"
                >
                  Book Consultation
                </a>
              </div>
            </div>

            <div>
              <iframe
                src="https://maps.google.com/maps?q=3213%20S%20Medford%20Dr%20Suite%20305%20Lufkin%20TX%2075901&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "40px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#C6A86B]">
          Start Your Journey
        </p>

        <h2 className="text-6xl mb-8">Confidence Starts Here</h2>

        <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-12">
          Discover what advanced body contouring can do for you with a
          complimentary consultation at Essence Beauty & Wellness.
        </p>

        <a
          href="https://book.squareup.com/appointments/bc52e454-dae1-4f17-9202-978a3354bf21/location/V38TF6VCY7BP3/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-10 py-5 rounded-full text-lg"
        >
          Schedule Consultation
        </a>
      </section>
    </main>
  );
}
