import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, BarChart3, BookOpen, GraduationCap, Headset, Palette, ShieldCheck, Users } from "lucide-react";
import { Layout } from "@/components/Layout";

const deliverables = [
  {
    title: "Student Learning Platform",
    description: "Cambridge-aligned student programmes with active learning, diagnostics, and retrieval cycles.",
    icon: BookOpen,
  },
  {
    title: "Cambridge Teacher Training (CTMW)",
    description: "Department-level CPD workshops with implementation templates and coaching support.",
    icon: GraduationCap,
  },
  {
    title: "Parent Dashboard & Tools",
    description: "Parent visibility into consistency, weak areas, and exam readiness.",
    icon: Users,
  },
  {
    title: "Admin Analytics",
    description: "Leadership reporting on student outcomes, teacher activity, and subject-level trends.",
    icon: BarChart3,
  },
  {
    title: "White-Label Option",
    description: "Deploy with your own school branding while keeping EduMeUp academic engine.",
    icon: Palette,
  },
  {
    title: "Expert Support",
    description: "Ongoing curriculum and implementation support from EduMeUp specialists.",
    icon: Headset,
  },
  {
    title: "SMK Teacher Certification",
    description: "A dedicated certification track that institutionalizes subject-mastery standards across departments.",
    icon: ShieldCheck,
  },
];

export default function ForSchoolsPartnership() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = "School Partnership - EduMeUp for Schools | EduMeUp";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore EduMeUp's complete school partnership model with student platform, teacher training, parent tools, admin analytics, and SMK teacher certification.",
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
              School Partnership
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              Complete Academic Infrastructure for Cambridge Schools
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              One partnership model designed to support students, teachers, parents, and school leadership with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              Seven Deliverables Included
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#2366c9]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e1b4b]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50/40 py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-200 bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">Partnership Value Box</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Schools receive a single integrated system instead of disconnected vendors. With SMK Teacher Certification as the seventh deliverable, your school builds long-term instructional quality, not just short-term platform usage.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              This means stronger teacher confidence, better parent trust, and improved student performance continuity across terms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/contact">
              <span className="flex items-center justify-between rounded-xl bg-[#2366c9] px-5 py-4 text-sm font-semibold text-white hover:bg-blue-700">
                Book a School Consultation
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/teacher-training#smk">
              <span className="flex items-center justify-between rounded-xl border border-blue-200 bg-white px-5 py-4 text-sm font-semibold text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                View SMK Teacher Certification
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
