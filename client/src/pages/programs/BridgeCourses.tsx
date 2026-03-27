import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BookOpen, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const bridgeCoverage = [
  {
    title: "Foundation Repair",
    description: "Close critical gaps in Grade 6-8 fundamentals before progressing to O-Level.",
    icon: BookOpen,
  },
  {
    title: "Concept Mastery",
    description: "Build deep conceptual understanding instead of superficial memorization.",
    icon: Target,
  },
  {
    title: "Readiness Checkpoints",
    description: "Progress through validated milestones to ensure O-Level readiness.",
    icon: Zap,
  },
];

const bridgeHowItWorks = [
  {
    title: "1. Diagnostic Assessment",
    description: "Identify specific knowledge gaps with AI-powered pre-testing.",
    icon: Target,
  },
  {
    title: "2. Targeted Repair",
    description: "Work through focused modules addressing your exact weaknesses.",
    icon: BookOpen,
  },
  {
    title: "3. Practice & Reinforce",
    description: "Solve problem sets with immediate feedback and explanations.",
    icon: Zap,
  },
];

const bridgeWhoItsFor = [
  "Grade 7-8 students transitioning to O-Level",
  "Students with weak foundational concepts",
  "Those struggling with core subjects (Mathematics, Sciences, English)",
  "Learners seeking confidence before full O-Level prep",
];

const bridgeSubjectsIncluded = [
  "Mathematics Fundamentals",
  "Science Foundations (Physics, Chemistry, Biology)",
  "English Language Basics",
  "Problem-solving techniques",
];

export default function BridgeCourses() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title =
      "Foundational O-Level Bridge Courses - Gap Repair Before O-Level | EduMeUp";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "EduMeUp's Foundational O-Level Bridge Courses repair Grade 7-8 knowledge gaps quickly. Perfect for students transitioning to O-Level preparation with AI diagnostics.",
      );
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2366c9]">
              Foundation Programme
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              Close Your Knowledge Gaps Before O-Level
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              Foundational O-Level Bridge Courses repair Grade 6-8 weaknesses fast, with targeted diagnostics and
              confidence-building modules.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600">
              Perfect for Grade 7-8 students or anyone needing a stronger foundation.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/programs/pre-o-level-victory">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  Pre-O-Level Victory
                </span>
              </Link>
              <Link href="/programs/complete-o-level">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  Complete O-Level
                </span>
              </Link>
              <Link href="/programs/ai-diagnostic">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  AI Diagnostic
                </span>
              </Link>
            </div>

            <div className="mt-10">
              <Link href="/programs/ai-diagnostic">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#2366c9] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Start Free Diagnostic
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              Why Students Struggle in O-Level Without Strong Foundations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Many Grade 7-8 students approach O-Level with gaps in core concepts. Whether it's missing
              algebraic techniques, weak understanding of scientific laws, or shallow reading comprehension, these
              foundational weaknesses compound through O-Level, leading to lower scores and stress. Bridge Courses
              address these gaps directly before they impact exam performance.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              What Bridge Courses Cover
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bridgeCoverage.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#2366c9]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e1b4b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50/40 py-14 md:py-20">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bridgeHowItWorks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#2366c9]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e1b4b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1e1b4b]">
                Who This Is For
              </h2>
              <div className="mt-5 space-y-3">
                {bridgeWhoItsFor.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1e1b4b]">Subjects Included</h2>
              <div className="mt-5 space-y-3">
                {bridgeSubjectsIncluded.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2366c9]" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">Pricing</h2>

            <div className="mt-6 overflow-x-auto rounded-xl border border-blue-100">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-blue-50 text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#1e1b4b]">
                      Plan
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#1e1b4b]">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#1e1b4b]">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-blue-100">
                    <td className="px-4 py-3 text-sm text-slate-800">Monthly Access</td>
                    <td className="px-4 py-3 text-sm text-slate-800">1 month</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">$5 USD</td>
                  </tr>
                  <tr className="border-t border-blue-100">
                    <td className="px-4 py-3 text-sm text-slate-800">Annual Access</td>
                    <td className="px-4 py-3 text-sm text-slate-800">12 months</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">$55 USD</td>
                  </tr>
                  <tr className="border-t border-blue-100 bg-blue-50/50">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">Best Value</td>
                    <td className="px-4 py-3 text-sm text-slate-800">12 months</td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#2366c9]">
                      Annual saves $5 vs monthly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link href="/programs/bridge-courses">
                <span className="flex items-center justify-between rounded-xl border border-blue-200 bg-white px-5 py-4 text-sm font-semibold text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  Browse Bridge Courses
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/programs/ai-diagnostic">
                <span className="flex items-center justify-between rounded-xl bg-[#2366c9] px-5 py-4 text-sm font-semibold text-white hover:bg-blue-700">
                  Start Free Diagnostic First
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

