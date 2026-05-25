import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Car,
  Users,
  Home,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    title: "HPC",
    subtitle: "Homemaker Personal Care",
    icon: HeartHandshake,
    description:
      "Support for daily living routines, personal care needs, household tasks, community participation, and everyday assistance.",
    points: [
      "Daily living support",
      "Personal care assistance",
      "Routine and structure",
      "Community-based support",
    ],
  },
  {
    title: "Non-Medical Transportation",
    subtitle: "Safe Community Access",
    icon: Car,
    description:
      "Reliable transportation for appointments, adult day programs, errands, activities, and community-based needs.",
    points: [
      "Appointment transportation",
      "Program drop-off and pickup",
      "Community outings",
      "Dependable scheduling",
    ],
  },
  {
    title: "Adult Day Center",
    subtitle: "Structured Day Support",
    icon: Users,
    description:
      "Daytime supervision, activities, engagement, social connection, and support in a safe structured environment.",
    points: [
      "Supervised day support",
      "Activities and engagement",
      "Social connection",
      "Safe structured environment",
    ],
  },
  {
    title: "Community Respite",
    subtitle: "Relief For Families",
    icon: Home,
    description:
      "Temporary care and support that gives families and caregivers relief while ensuring individuals remain safe and supported.",
    points: [
      "Caregiver relief",
      "Temporary support",
      "Flexible respite help",
      "Comfort and safety",
    ],
  },
];

const process = [
  ["01", "Contact", "Reach out with questions or service needs."],
  ["02", "Review", "Discuss the best service fit and support goals."],
  ["03", "Plan", "Create a clear direction for care and scheduling."],
  ["04", "Support", "Begin services with dependable communication."],
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
              Services
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Care solutions for daily support, transportation, and respite.
            </h1>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-6 sm:p-8">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Golden Cares LLC offers support services designed to help
              individuals stay safe, active, connected, and supported while
              giving families and caregivers dependable help.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="rounded-full bg-amber-400 px-7 py-4 text-center font-black text-slate-950 transition hover:bg-amber-300">
                Request Services
              </Link>

              <Link to="/faq" className="rounded-full border border-white/20 px-7 py-4 text-center font-black text-white transition hover:bg-white hover:text-slate-950">
                Read FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ec] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-[2.25rem] p-6 shadow-xl shadow-slate-300/40 ${
                    index === 0
                      ? "bg-emerald-700 text-white lg:col-span-2 lg:row-span-2"
                      : "bg-white text-slate-950"
                  }`}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${
                      index === 0
                        ? "bg-white text-emerald-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    <Icon size={30} />
                  </div>

                  <p
                    className={`mt-6 text-xs font-black uppercase tracking-[0.2em] ${
                      index === 0 ? "text-amber-200" : "text-emerald-700"
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <h2
                    className={`mt-2 font-black ${
                      index === 0 ? "text-4xl sm:text-5xl" : "text-2xl"
                    }`}
                  >
                    {service.title}
                  </h2>

                  <p
                    className={`mt-4 leading-8 ${
                      index === 0 ? "text-white/75" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle
                          className={`mt-1 shrink-0 ${
                            index === 0 ? "text-amber-300" : "text-emerald-700"
                          }`}
                          size={18}
                        />
                        <p
                          className={`text-sm font-bold ${
                            index === 0 ? "text-white/85" : "text-slate-700"
                          }`}
                        >
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center gap-2 font-black ${
                      index === 0 ? "text-amber-300" : "text-emerald-700"
                    }`}
                  >
                    Ask About This Service <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="sticky top-28">
            <p className="section-label">Service Fit</p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
              Who these services may support.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This section can be customized once you get exact eligibility,
              referral, and intake information from the company.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              ["Individuals needing daily living support", HeartHandshake],
              ["Families needing caregiver relief", Home],
              ["People needing safe transportation", Car],
              ["Adults needing structured daytime engagement", Users],
            ].map(([text, Icon]) => (
              <div
                key={text}
                className="flex gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-950">{text}</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Placeholder copy for exact service qualification, referral
                    requirements, or program details.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <CalendarDays className="mb-5 text-amber-400" size={46} />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
                Process
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Clear steps from first question to care support.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map(([number, title, text]) => (
                <div key={title} className="rounded-[2rem] bg-white/10 p-6">
                  <p className="text-4xl font-black text-amber-400">{number}</p>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <ClipboardCheck className="mb-5 text-emerald-700" size={44} />

            <h2 className="text-3xl font-black text-slate-950 sm:text-5xl">
              Need help choosing the right service?
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Golden Cares can guide families, individuals, and referral
              partners through service questions, availability, and next steps.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-4 text-emerald-700" />
              <p className="font-black text-slate-950">
                Ask about care, transportation, day support, or respite.
              </p>
            </div>

            <Link to="/contact" className="primary-btn">
              Contact Golden Cares <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}