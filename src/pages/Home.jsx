import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Car,
  Users,
  Home as HomeIcon,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "HPC",
    text: "Daily living support, personal care assistance, and routine help.",
    icon: HeartHandshake,
  },
  {
    title: "Non-Medical Transportation",
    text: "Safe rides to appointments, programs, errands, and community outings.",
    icon: Car,
  },
  {
    title: "Adult Day Center",
    text: "Supervised daytime support, activities, structure, and engagement.",
    icon: Users,
  },
  {
    title: "Community Respite",
    text: "Temporary relief and dependable support for families and caregivers.",
    icon: HomeIcon,
  },
];

const steps = [
  "Reach out to Golden Cares",
  "Discuss care needs and services",
  "Create a support plan",
  "Begin dependable care",
];

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#f5efe2] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/35 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#4b4b4b]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8a6a12] shadow-sm">
              <ShieldCheck size={16} />
              Premium care support
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] text-[#111111] sm:text-5xl lg:text-7xl">
              Care that helps people feel safe, supported, and connected.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
              Golden Cares LLC provides compassionate community-based support
              through HPC, non-medical transportation, adult day center services,
              and community respite.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
              >
                Explore Services <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/85 px-7 py-4 font-black text-[#111111] shadow-sm transition hover:-translate-y-1 hover:bg-[#fff6d8]"
              >
                <Phone size={18} /> Request Information
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Care", "Daily support"],
                ["Access", "Safe transport"],
                ["Relief", "Family respite"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-[#d4af37]/25 bg-white/85 p-5 shadow-lg shadow-black/5"
                >
                  <p className="text-2xl font-black text-[#a67c00]">
                    {title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#6a6a6a]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-black/15">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[500px]">
           <img
  src="https://images.pexels.com/photos/4262424/pexels-photo-4262424.jpeg?auto=compress&cs=tinysrgb&w=1200&v=10"
  className="absolute inset-0 h-full w-full object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f4d46b] backdrop-blur-md">
                    Compassionate support
                  </div>

                  <h2 className="mt-4 max-w-sm text-3xl font-black text-white">
                    Reliable care with a premium personal touch.
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
                Care Services
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
                Support for daily life and community connection.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#555555] sm:text-lg lg:ml-auto">
              Whether someone needs help with daily living, reliable rides,
              structured daytime support, or temporary family relief, Golden
              Cares is built to provide dependable care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-[#d4af37]/20 bg-white p-6 shadow-sm transition hover:border-[#d4af37]/70 hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#111111] text-[#f4d46b] transition group-hover:bg-[#d4af37] group-hover:text-[#111111]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 font-black text-[#a67c00]"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d4af37]">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              A simple path from first call to care support.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/65">
              This section gives the site more agency polish by showing families
              and referral partners what the process looks like before they
              contact the company.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[2rem] border border-[#d4af37]/20 bg-white/5 p-5"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#d4af37] font-black text-[#111111]">
                  {index + 1}
                </div>

                <div>
                  <p className="font-black">{step}</p>

                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Placeholder detail ready for the client’s exact intake
                    process.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-black/10 sm:p-10">
            <ClipboardCheck className="mb-5 text-[#a67c00]" size={44} />

            <h2 className="text-3xl font-black text-[#111111] sm:text-5xl">
              Built for families, individuals, and referral partners.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
              Use this area to explain who can contact Golden Cares, how
              referrals work, what areas are served, and what information is
              needed to begin.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Ask about services",
              "Request intake information",
              "Explore open careers",
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
            >
              Contact Golden Cares <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}