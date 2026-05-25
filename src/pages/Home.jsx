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
  CalendarCheck,
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
      <section className="relative overflow-hidden bg-[#f7f4ec] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-200/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <ShieldCheck size={16} />
              Trusted care support
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] text-slate-950 sm:text-5xl lg:text-7xl">
              Care that helps people feel safe, supported, and connected.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Golden Cares LLC provides compassionate community-based support
              through HPC, non-medical transportation, adult day center services,
              and community respite.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="primary-btn">
                Explore Services <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="secondary-btn">
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
                  className="rounded-3xl border border-white bg-white/80 p-5 shadow-lg shadow-slate-200/60"
                >
                  <p className="text-2xl font-black text-emerald-700">
                    {title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
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
            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-slate-300/60">
              <div className="grid min-h-[360px] place-items-center rounded-[2rem] bg-gradient-to-br from-emerald-100 via-white to-amber-100 px-6 py-12 text-center sm:min-h-[500px]">
                <div>
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-emerald-700 text-white shadow-xl shadow-emerald-900/20">
                    <HeartHandshake size={58} />
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-slate-950">
                    Real Image Space
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-slate-500">
                    Add caregiver, adult day center, transportation, or official
                    Golden Cares brand photo here.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 right-4 rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <CalendarCheck className="shrink-0 text-amber-400" size={34} />
                <div>
                  <p className="font-black">Now accepting inquiries</p>
                  <p className="mt-1 text-sm text-white/60">
                    Services • Referrals • Careers • Family support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">Care Services</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
                Support for daily life and community connection.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:ml-auto">
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
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-2xl hover:shadow-slate-200/80"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-700 text-white transition group-hover:bg-amber-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 font-black text-emerald-700"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
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
                className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400 font-black text-slate-950">
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

      <section className="bg-emerald-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <ClipboardCheck className="mb-5 text-emerald-700" size={44} />

            <h2 className="text-3xl font-black text-slate-950 sm:text-5xl">
              Built for families, individuals, and referral partners.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
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
                <CheckCircle className="shrink-0 text-emerald-700" />
                <p className="font-black text-slate-800">{item}</p>
              </div>
            ))}

            <Link to="/contact" className="primary-btn">
              Contact Golden Cares <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}