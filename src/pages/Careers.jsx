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

const applicationForm = "https://forms.gle/wz2Z3Ebk1ceUcx5x8";

export default function Careers() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#f5efe2] px-5 py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#d4af37]/35 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[#4b4b4b]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8a6a12] shadow-sm">
              <BriefcaseBusiness size={16} />
              Careers at Golden Cares
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] text-[#111111] sm:text-5xl lg:text-7xl">
              Join a care team built around purpose and people.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
              Golden Cares LLC is preparing career opportunities for directors,
              house managers, DSPs, and transportation drivers who want to help
              individuals live with dignity, safety, and support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
              >
                View Open Roles <ArrowRight size={18} />
              </a>

              <a
                href={applicationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/85 px-7 py-4 font-black text-[#111111] shadow-sm transition hover:-translate-y-1 hover:bg-[#fff6d8]"
              >
                Ask About Hiring
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-black/15">
              <div className="rounded-[2rem] bg-[#111111] p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d4af37]">
                  Hiring Focus
                </p>

                <div className="mt-6 grid gap-4">
                  {["Director", "House Managers", "DSP", "Transportation Drivers"].map((role) => (
                    <div key={role} className="flex items-center gap-3 rounded-2xl border border-[#d4af37]/20 bg-white/10 p-4">
                      <CheckCircle className="shrink-0 text-[#d4af37]" />
                      <p className="font-black">{role}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-[#d4af37] p-5 text-[#111111] transition hover:bg-[#f4d46b]"
                >
                  <p className="font-black">Apply Now</p>
                  <ArrowRight className="shrink-0" size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="open-roles" className="bg-[#fbfaf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
                Open Roles
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
                Career paths with real impact.
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-[#555555] lg:ml-auto">
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
                  className="rounded-[2.25rem] border border-[#d4af37]/20 bg-white p-6 transition hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a67c00]">
                        {role.type}
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-[#111111]">
                        {role.title}
                      </h3>
                    </div>

                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#111111] text-[#f4d46b]">
                      <Icon size={28} />
                    </div>
                  </div>

                  <p className="mt-5 leading-8 text-[#555555]">{role.description}</p>

                  <div className="mt-6 grid gap-3">
                    {role.highlights.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle className="mt-1 shrink-0 text-[#a67c00]" size={18} />
                        <p className="text-sm font-bold text-[#555555]">{item}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={applicationForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 font-black text-[#f4d46b] transition hover:bg-[#2a2a2a]"
                  >
                    Apply / Inquire <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d4af37]">
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
              <div key={title} className="rounded-[2rem] border border-[#d4af37]/20 bg-white/10 p-6">
                <Icon className="mb-5 text-[#d4af37]" size={36} />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-black/10 sm:p-10">
            <ClipboardList className="mb-5 text-[#a67c00]" size={44} />

            <h2 className="text-3xl font-black text-[#111111] sm:text-5xl">
              Application process placeholder.
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
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
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#111111] font-black text-[#f4d46b]">
                  {index + 1}
                </div>
                <p className="font-bold leading-7 text-[#555555]">{step}</p>
              </div>
            ))}

            <a
              href={applicationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
            >
              Start Career Inquiry <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}