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
      <section className="bg-[#fbfaf7] px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]"
          >
            About Golden Cares LLC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl font-black leading-tight text-[#111111] sm:text-5xl lg:text-7xl"
          >
            A care agency created to support people, families, and community living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#555555] sm:text-lg"
          >
            Golden Cares LLC provides supportive services designed to help
            individuals feel safe, connected, and cared for while giving families
            dependable help they can trust.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#d4af37]/35 blur-2xl" />

            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-black/15 sm:p-6">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[460px]">
                <img
                  src="https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Senior care facility living space"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111111] sm:text-5xl">
              Support that meets people where they are.
            </h2>

            <p className="mt-6 leading-8 text-[#555555]">
              Golden Cares LLC exists to help individuals receive daily support,
              safe transportation, community participation, adult day support,
              and respite services in a way that feels human, organized, and
              dependable.
            </p>

            <div className="mt-8 rounded-[2rem] bg-[#111111] p-6 text-white">
              <Quote className="mb-4 text-[#d4af37]" size={34} />

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

      <section className="bg-[#fbfaf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
              A simple care process families can understand.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {timeline.map(([number, title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-[#d4af37]/20 bg-white p-8 shadow-sm transition hover:border-[#d4af37]/70 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-5xl font-black text-[#a67c00]">
                    {number}
                  </span>

                  <Sparkles className="text-[#d4af37]" />
                </div>

                <h3 className="text-2xl font-black text-[#111111]">{title}</h3>
                <p className="mt-4 leading-7 text-[#555555]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d4af37]">
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
                <div
                  key={title}
                  className="rounded-[2rem] border border-[#d4af37]/20 bg-white/5 p-6"
                >
                  <Icon className="mb-5 text-[#d4af37]" size={36} />

                  <h3 className="text-xl font-black">{title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
              Why It Matters
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
              Care is not just a service. It is trust.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
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
              <div
                key={item}
                className="flex items-center gap-3 rounded-3xl bg-white p-5 shadow-sm"
              >
                <CheckCircle className="shrink-0 text-[#a67c00]" />

                <p className="font-black text-[#222222]">{item}</p>
              </div>
            ))}

            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
            >
              Talk With Golden Cares <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}