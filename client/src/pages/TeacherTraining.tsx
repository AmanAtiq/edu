import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, GraduationCap, School, UserCheck } from "lucide-react";
import { Layout } from "@/components/Layout";

const comparisonRows = [
  {
    traditional: "Generic CPD with no Cambridge alignment",
    smk: "Cambridge Subject Master Knowledge (SMK) by subject and syllabus",
  },
  {
    traditional: "One-off training with limited classroom transfer",
    smk: "Structured implementation cycle with classroom-ready templates",
  },
  {
    traditional: "No measurable teacher growth evidence",
    smk: "Trackable competency milestones and certification outcomes",
  },
  {
    traditional: "No direct link to student performance",
    smk: "Teacher mastery connected to student retention and exam readiness",
  },
];

const implementationSteps = [
  "Baseline teacher skills and subject-need mapping",
  "SMK intensive workshop delivery",
  "Classroom practice sprint with guided templates",
  "Review, feedback, and certification evaluation",
];

const certificationTracks = [
  {
    title: "School Track",
    description:
      "For institutions onboarding full department teams with leadership reporting and implementation review.",
  },
  {
    title: "Individual Teacher Track",
    description:
      "For teachers seeking personal Cambridge-aligned mastery and formal competency certification.",
  },
  {
    title: "Advanced Lead Mentor Track",
    description:
      "For senior teachers preparing to mentor peers and scale best practices across campuses.",
  },
];

const pricingOptions = [
  {
    plan: "Institution Bundle",
    detail: "School-level delivery for teacher cohorts",
    price: "Custom Quote",
  },
  {
    plan: "Individual Teacher",
    detail: "Per-teacher enrollment with certification",
    price: "From PKR 25,000",
  },
  {
    plan: "Lead Mentor Upgrade",
    detail: "Advanced mentoring and implementation support",
    price: "From PKR 40,000",
  },
];

export default function TeacherTraining() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = "Teacher Training (SMK) - Cambridge Teacher Certification | EduMeUp";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "EduMeUp SMK Teacher Training helps schools and teachers build Cambridge-aligned subject mastery with structured certification tracks.",
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
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2366c9]">
              Teacher Training
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              Cambridge SMK Teacher Certification
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              A structured certification pathway that upgrades subject mastery, teaching quality, and measurable classroom outcomes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="#smk">
                <span className="inline-flex items-center rounded-full bg-[#2366c9] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                  View SMK Framework
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  Book Training Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="smk" className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              SMK vs Traditional Teacher CPD
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              SMK is designed for Cambridge classrooms where subject precision matters. It is not generic pedagogy; it is subject-specific, classroom-anchored, and certifiable.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#1e1b4b] text-white">
                    <th className="p-4 text-sm font-semibold md:p-5 md:text-base">Traditional CPD</th>
                    <th className="p-4 text-sm font-semibold text-blue-300 md:p-5 md:text-base">EduMeUp SMK Certification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100 bg-white">
                  {comparisonRows.map((row) => (
                    <tr key={row.traditional}>
                      <td className="p-4 align-top text-sm text-slate-600 md:p-5">{row.traditional}</td>
                      <td className="p-4 align-top text-sm font-medium text-[#1e1b4b] md:p-5">{row.smk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50/40 py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              Implementation Steps
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {implementationSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2366c9]">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#1e1b4b] md:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              Certification Tracks
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {certificationTracks.map((track, index) => (
                <div key={track.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#2366c9]">
                    {index === 0 ? (
                      <School className="h-5 w-5" />
                    ) : index === 1 ? (
                      <UserCheck className="h-5 w-5" />
                    ) : (
                      <GraduationCap className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e1b4b]">{track.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e1b4b] py-14 text-white md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Pricing & Enrollment</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pricingOptions.map((pricing) => (
                <div key={pricing.plan} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{pricing.plan}</h3>
                  <p className="mt-2 text-sm text-blue-100">{pricing.detail}</p>
                  <p className="mt-4 text-xl font-semibold text-blue-300">{pricing.price}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-100">
                    <CheckCircle2 className="h-4 w-4" />
                    Certification included
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link href="/contact">
                <span className="flex items-center justify-between rounded-xl bg-[#2366c9] px-5 py-4 text-sm font-semibold text-white hover:bg-blue-700">
                  Enquire About SMK Training
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/for-schools/partnership">
                <span className="flex items-center justify-between rounded-xl border border-blue-300 bg-white px-5 py-4 text-sm font-semibold text-[#1e1b4b] hover:border-blue-200 hover:text-[#2366c9]">
                  Explore School Partnership Model
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
