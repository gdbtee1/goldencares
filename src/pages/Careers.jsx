import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Car,
  Home,
  ArrowRight,
  CheckCircle,
  HeartHandshake,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const roles = [
  {
    title: "Director",
    type: "Leadership",
    icon: BriefcaseBusiness,
    description:
      "Oversees operations, service quality, compliance, team coordination, and program growth.",
    highlights: ["Leadership role", "Program oversight", "Team support"],
  },
  {
    title: "House Managers",
    type: "Residential Support",
    icon: Home,
    description:
      "Supports daily home operations, schedules, staff communication, documentation, and resident needs.",
    highlights: ["Daily operations", "Staff coordination", "Resident support"],
  },
  {
    title: "DSP",
    type: "Direct Support Professional",
    icon: HeartHandshake,
    description:
      "Provides hands-on support for individuals with daily living, community access, routines, and personal goals.",
    highlights: ["Direct care", "Community support", "Daily assistance"],
  },
  {
    title: "Transportation Drivers",
    type: "Transportation",
    icon: Car,
    description:
      "Provides safe and dependable non-medical transportation for appointments, programs, and community needs.",
    highlights: ["Safe driving", "Reliable scheduling", "Community access"],
  },
];

const benefits = [
  ["Meaningful Work", "Support individuals and families in real daily-life situations.", HeartHandshake],
  ["Team Support", "Work with a care-focused team built around communication.", Users],
  ["Training Ready", "Space for onboarding, certifications, and role expectations.", GraduationCap],
  ["Mission Driven", "Help people stay safe, connected, and supported.", ShieldCheck],
];

export default function Careers() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#f7f4ec] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-amber-200/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <BriefcaseBusiness size={16} />
              Careers at Golden Cares
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] text-slate-950 sm:text-5xl lg:text-7xl">
              Join a care team built around purpose and people.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Golden Cares LLC is preparing career opportunities for directors,
              house managers, DSPs, and transportation drivers who want to help
              individuals live with dignity, safety, and support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#open-roles" className="primary-btn">
                View Open Roles <ArrowRight size={18} />
              </a>

              <Link to="/contact" className="secondary-btn">
                Ask About Hiring
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-slate-300/60">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">
                  Hiring Focus
                </p>

                <div className="mt-6 grid gap-4">
                  {["Director", "House Managers", "DSP", "Transportation Drivers"].map((role) => (
                    <div key={role} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <CheckCircle className="shrink-0 text-amber-400" />
                      <p className="font-black">{role}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-emerald-700 p-5">
                  <p className="font-black">Application Area Ready</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    This page can connect later to a form, email, job board, or
                    applicant tracking process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="open-roles" className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-label">Open Roles</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
                Career paths with real impact.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:ml-auto">
              Each role card is ready for pay range, requirements, schedule,
              location, application link, and responsibilities once the client
              provides the official hiring details.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.article
                  key={role.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-2xl hover:shadow-slate-200/80"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                        {role.type}
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-slate-950">
                        {role.title}
                      </h3>
                    </div>

                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white">
                      <Icon size={28} />
                    </div>
                  </div>

                  <p className="mt-5 leading-8 text-slate-600">{role.description}</p>

                  <div className="mt-6 grid gap-3">
                    {role.highlights.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle className="mt-1 shrink-0 text-emerald-700" size={18} />
                        <p className="text-sm font-bold text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-black text-white transition hover:bg-emerald-800"
                  >
                    Apply / Inquire <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
              Why Work With Us
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Work that supports people beyond a shift.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/70">
              This section can later include pay, benefits, training,
              certifications, scheduling, company culture, and onboarding
              details.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map(([title, text, Icon]) => (
              <div key={title} className="rounded-[2rem] bg-white/10 p-6">
                <Icon className="mb-5 text-amber-400" size={36} />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
            <ClipboardList className="mb-5 text-emerald-700" size={44} />

            <h2 className="text-3xl font-black text-slate-950 sm:text-5xl">
              Application process placeholder.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Once the client provides exact hiring instructions, this section
              can include an application form, upload resume field, role
              selection, eligibility questions, and contact details.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Choose the role you are interested in",
              "Submit contact information and experience",
              "Complete screening or interview process",
              "Begin onboarding and training",
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-700 font-black text-white">
                  {index + 1}
                </div>
                <p className="font-bold leading-7 text-slate-700">{step}</p>
              </div>
            ))}

            <Link to="/contact" className="primary-btn">
              Start Career Inquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}