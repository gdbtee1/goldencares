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
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#f7f4ec] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-amber-200/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <MessageCircle size={16} />
              Contact Golden Cares
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Let’s talk about care, support, or careers.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Reach out to Golden Cares LLC for service questions, intake
              information, transportation support, respite care, adult day
              center details, referrals, or career inquiries.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-black text-slate-950">Phone</p>
                  <p className="mt-1 text-sm text-slate-500">Phone number goes here</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-black text-slate-950">Email</p>
                  <p className="mt-1 text-sm text-slate-500">Email address goes here</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-black text-slate-950">Service Area</p>
                  <p className="mt-1 text-sm text-slate-500">City / county / service area goes here</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-slate-300/60 sm:p-8">
              <ClipboardCheck className="mb-5 text-emerald-700" size={44} />

              <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                Send A Message
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                This form is ready to connect later to Formspree, EmailJS,
                Firebase, Supabase, or a custom backend.
              </p>

              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white"
                    type="text"
                    placeholder="First Name"
                  />

                  <input
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white"
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white"
                  type="tel"
                  placeholder="Phone Number"
                />

                <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white">
                  <option>What are you contacting us about?</option>
                  <option>HPC Services</option>
                  <option>Non-Medical Transportation</option>
                  <option>Adult Day Center</option>
                  <option>Community Respite</option>
                  <option>Careers</option>
                  <option>General Question</option>
                </select>

                <textarea
                  className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-700 focus:bg-white"
                  placeholder="Tell us how we can help..."
                />

                <button
                  type="button"
                  className="primary-btn w-full"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactOptions.map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
            >
              <CheckCircle className="mb-5 text-emerald-700" size={34} />
              <h3 className="text-2xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Clock className="mb-5 text-amber-400" size={44} />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
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

          <div className="rounded-[2.5rem] bg-white/10 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-amber-400">
              Important Note
            </h3>

            <p className="mt-4 leading-8 text-white/70">
              This website is for general service, career, and contact requests.
              For emergencies, visitors should contact local emergency services
              immediately.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 font-black text-amber-400"
            >
              Review Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}