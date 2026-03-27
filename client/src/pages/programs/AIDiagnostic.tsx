import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { InquiryDialog } from "@/components/InquiryDialog";

export default function AIDiagnostic() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2366c9]">
              Programme P
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              AI Diagnostic Assessment
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              Identify exact learning gaps before starting any programme. This is the
              first step of the EduMeUp mastery path.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <Brain className="h-6 w-6 text-[#2366c9]" />
              <h2 className="mt-3 text-lg font-semibold text-[#1e1b4b]">Precision Gap Mapping</h2>
              <p className="mt-2 text-sm text-slate-700">
                Topic and sub-skill level analysis to identify hidden weaknesses.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <Target className="h-6 w-6 text-[#2366c9]" />
              <h2 className="mt-3 text-lg font-semibold text-[#1e1b4b]">Personalized Plan</h2>
              <p className="mt-2 text-sm text-slate-700">
                Every student receives a tailored progression plan aligned to goals.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#2366c9]" />
              <h2 className="mt-3 text-lg font-semibold text-[#1e1b4b]">Actionable Report</h2>
              <p className="mt-2 text-sm text-slate-700">
                Clear next steps for parents and students to begin targeted learning.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <InquiryDialog
              defaultType="diagnostic"
              title="Book Free AI Diagnostic"
              trigger={
                <button className="inline-flex items-center gap-2 rounded-lg bg-[#2366c9] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Start Free Diagnostic
                  <ArrowRight className="h-4 w-4" />
                </button>
              }
            />
            <Link href="/programs">
              <span className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                Explore All Programmes
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
