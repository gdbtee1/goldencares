import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Home,
  ArrowRight,
  CheckCircle,
  Quote,
  Sparkles,
} from "lucide-react";

const values = [
  ["Dignity First", "Every person deserves support that feels respectful, patient, and personal."],
  ["Dependable Care", "Families need care partners who communicate clearly and show up consistently."],
  ["Community Access", "Support should help people stay active, connected, and included."],
  ["Family Relief", "Care should also support the families and caregivers behind every individual."],
];

const timeline = [
  ["01", "Listen", "We learn about the individual, family needs, routines, and support goals."],
  ["02", "Plan", "We help identify the right service fit and build a clear care direction."],
  ["03", "Support", "Golden Cares provides compassionate services with safety and consistency."],
];

export default function About() {
  return (
    <Layout>
      <section className="bg-white px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            About Golden Cares LLC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl"
          >
            A care agency created to support people, families, and community living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Golden Cares LLC provides supportive services designed to help
            individuals feel safe, connected, and cared for while giving families
            dependable help they can trust.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#f7f4ec] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-amber-300/40 blur-2xl" />
            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-slate-300/50 sm:p-6">
              <div className="grid min-h-[360px] place-items-center rounded-[2rem] bg-gradient-to-br from-emerald-100 via-white to-amber-100 px-6 py-12 text-center">
                <div>
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] bg-emerald-700 text-white">
                    <HeartHandshake size={52} />
                  </div>
                  <h2 className="mt-6 text-3xl font-black text-slate-950">
                    Team / Facility Image
                  </h2>
                  <p className="mx-auto mt-3 max-w-sm text-slate-500">
                    Add a staff photo, adult day center image, home care setting,
                    or company photo here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Support that meets people where they are.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Golden Cares LLC exists to help individuals receive daily support,
              safe transportation, community participation, adult day support,
              and respite services in a way that feels human, organized, and
              dependable.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-6 text-white">
              <Quote className="mb-4 text-amber-400" size={34} />
              <p className="text-xl font-black leading-relaxed">
                “Our goal is to provide care that helps people feel respected,
                supported, and connected to their community.”
              </p>
              <p className="mt-4 text-sm font-bold text-white/50">
                Golden Cares LLC Mission Statement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-label">Our Approach</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
              A simple care process families can understand.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {timeline.map(([number, title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-5xl font-black text-emerald-700">
                    {number}
                  </span>
                  <Sparkles className="text-amber-500" />
                </div>

                <h3 className="text-2xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
              Core Values
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              The values behind the care.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map(([title, text], index) => {
              const icons = [ShieldCheck, HeartHandshake, Users, Home];
              const Icon = icons[index];

              return (
                <div key={title} className="rounded-[2rem] bg-white/10 p-6">
                  <Icon className="mb-5 text-amber-400" size={36} />
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="section-label">Why It Matters</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
              Care is not just a service. It is trust.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Families, individuals, and referral partners need a care agency
              that communicates well, respects people, and provides dependable
              support.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Respectful personal support",
              "Reliable transportation help",
              "Structured community care",
              "Relief for families and caregivers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-3xl bg-white p-5 shadow-sm">
                <CheckCircle className="shrink-0 text-emerald-700" />
                <p className="font-black text-slate-800">{item}</p>
              </div>
            ))}

            <Link to="/contact" className="primary-btn mt-2">
              Talk With Golden Cares <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}