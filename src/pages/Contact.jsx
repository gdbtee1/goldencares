import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
} from "lucide-react";

const contactOptions = [
  ["Services", "Ask about HPC, transportation, adult day center, or respite."],
  ["Careers", "Ask about Director, House Manager, DSP, or Driver roles."],
  ["Referrals", "Request intake information or referral next steps."],
];

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#f5efe2] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#d4af37]/35 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[#4b4b4b]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8a6a12] shadow-sm">
              <MessageCircle size={16} />
              Contact Golden Cares
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight text-[#111111] sm:text-5xl lg:text-7xl">
              Let’s talk about care, support, or careers.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
              Reach out to Golden Cares LLC for service questions, intake
              information, transportation support, respite care, adult day
              center details, referrals, or career inquiries.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#111111] text-[#f4d46b]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-black text-[#111111]">Phone</p>
                  <p className="mt-1 text-sm text-[#555555]">216-559-8570</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#111111] text-[#f4d46b]">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-black text-[#111111]">Email</p>
                  <p className="mt-1 text-sm text-[#555555]">goldencaresllc@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#111111] text-[#f4d46b]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-black text-[#111111]">Service Area</p>
                  <p className="mt-1 text-sm text-[#555555]">Cleveland, Ohio</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-black/15 sm:p-8">
              <ClipboardCheck className="mb-5 text-[#a67c00]" size={44} />

              <h2 className="text-3xl font-black text-[#111111] sm:text-4xl">
                Send A Message
              </h2>

              <p className="mt-3 leading-7 text-[#555555]">
                Send Golden Cares a message about services, referrals, careers,
                or general questions.
              </p>

              <form
                action="https://formspree.io/f/xgoqrzdw"
                method="POST"
                className="mt-8 grid gap-4"
                onSubmit={() => {
                  setStatus("sent");
                }}
              >
                <input type="hidden" name="_subject" value="New Golden Cares Website Message" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="firstName"
                    className="rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                    type="text"
                    placeholder="First Name"
                    required
                  />

                  <input
                    name="lastName"
                    className="rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <input
                  name="email"
                  className="rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  name="phone"
                  className="rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                  type="tel"
                  placeholder="Phone Number"
                />

                <select
                  name="topic"
                  className="rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                  required
                >
                  <option value="">What are you contacting us about?</option>
                  <option>HPC Services</option>
                  <option>Non-Medical Transportation</option>
                  <option>Adult Day Center</option>
                  <option>Community Respite</option>
                  <option>Careers</option>
                  <option>General Question</option>
                </select>

                <textarea
                  name="message"
                  className="min-h-36 rounded-2xl border border-[#d4af37]/20 bg-[#fbfaf7] px-4 py-4 outline-none transition focus:border-[#d4af37] focus:bg-white"
                  placeholder="Tell us how we can help..."
                  required
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
                >
                  {status === "sent" ? "Sent" : "Send Message"} <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactOptions.map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-[#d4af37]/20 bg-white p-6 transition hover:shadow-xl hover:shadow-black/10"
            >
              <CheckCircle className="mb-5 text-[#a67c00]" size={34} />
              <h3 className="text-2xl font-black text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#555555]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#d4af37]/20 bg-white p-4 shadow-xl shadow-black/10">
            <iframe
              title="Golden Cares service area map - Cleveland Ohio"
              src="https://www.google.com/maps?q=Cleveland%2C%20Ohio&output=embed"
              className="h-[360px] w-full rounded-[2rem] border-0 sm:h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Clock className="mb-5 text-[#d4af37]" size={44} />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d4af37]">
              Response Info
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              We’ll help guide the next step.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/65">
              Use this section for office hours, expected response times,
              referral instructions, intake information, or emergency disclaimer.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-[#d4af37]/20 bg-white/10 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-[#d4af37]">
              Important Note
            </h3>

            <p className="mt-4 leading-8 text-white/70">
              This website is for general service, career, and contact requests.
              For emergencies, visitors should contact local emergency services
              immediately.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 font-black text-[#d4af37]"
            >
              Review Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}