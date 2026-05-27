import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Plus,
  Minus,
  Phone,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    question: "What services does Golden Cares LLC offer?",
    answer:
      "Golden Cares LLC offers HPC, non-medical transportation, adult day center support, and community respite services.",
  },
  {
    question: "What is HPC?",
    answer:
      "HPC stands for Homemaker Personal Care. It can include support with daily living, routines, personal care needs, and community-based assistance.",
  },
  {
    question: "Is transportation medical transportation?",
    answer:
      "No. The transportation service is non-medical transportation for appointments, programs, errands, activities, and community access.",
  },
  {
    question: "Who can use community respite services?",
    answer:
      "Community respite may support families or caregivers who need temporary relief while ensuring their loved one remains safe and supported.",
  },
  {
    question: "Does Golden Cares have career opportunities?",
    answer:
      "Yes. Career areas include Director, House Managers, DSPs, and Transportation Drivers. The careers page is ready for application details.",
  },
  {
    question: "How do I request services?",
    answer:
      "You can contact Golden Cares through the Contact Us page.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Layout>
      <section className="bg-[#171717] px-5 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d4af37]">
              <HelpCircle size={16} />
              Help Center
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Questions families may ask before getting started.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Use this page to answer common questions about services,
              transportation, respite, careers, referrals, and how to contact
              Golden Cares LLC.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-[2.5rem] bg-white p-6 text-[#111111] shadow-2xl shadow-black/15">
              <MessageCircle className="mb-5 text-[#a67c00]" size={44} />

              <h2 className="text-3xl font-black">Need an answer fast?</h2>

              <p className="mt-4 leading-8 text-[#555555]">
                Contact Golden Cares directly for service availability,
                eligibility questions, career inquiries, or referral details.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
              Common questions, clear answers.
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              This accordion keeps the page clean and professional while giving
              visitors quick answers without overwhelming them.
            </p>

            <div className="mt-8 rounded-[2rem] bg-[#111111] p-6 text-white">
              <ShieldCheck className="mb-4 text-[#d4af37]" size={36} />
              <h3 className="text-2xl font-black">Still unsure?</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Reach out to Golden Cares for help with services, careers,
                transportation, respite, or referral questions.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-[2rem] border border-[#d4af37]/20 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                  >
                    <span className="text-lg font-black text-[#111111]">
                      {faq.question}
                    </span>

                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#111111] text-[#f4d46b]">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6">
                      <p className="border-t border-[#d4af37]/20 pt-5 leading-8 text-[#555555]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67c00]">
              Next Step
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-5xl">
              Ready to talk with Golden Cares?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
              Visitors who still have questions can contact the team directly
              for services, careers, transportation, or referral information.
            </p>
          </div>

          <div className="grid gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 font-black text-[#f4d46b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#2a2a2a]"
            >
              Contact Us <Phone size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/60 bg-white/85 px-7 py-4 font-black text-[#111111] shadow-sm transition hover:-translate-y-1 hover:bg-[#fff6d8]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}