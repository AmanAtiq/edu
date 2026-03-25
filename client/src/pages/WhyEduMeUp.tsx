import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function WhyEduMeUp() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = "Why EduMeUp - Complete Stakeholder Learning System | EduMeUp";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "EduMeUp is a complete stakeholder ecosystem for students, teachers, parents, and schools with SMK teacher certification built in.",
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
              Why EduMeUp
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              More Than a Student Platform
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              EduMeUp delivers a complete stakeholder ecosystem for students, teachers, schools, and parents, now strengthened with SMK Teacher Certification as a built-in differentiation layer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/why-edumeup/how-it-works">
                <span className="inline-flex items-center rounded-full bg-[#2366c9] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                  See How It Works
                </span>
              </Link>
              <Link href="/for-schools/partnership">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1e1b4b] hover:border-blue-300 hover:text-[#2366c9]">
                  View School Partnership
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">The Differentiator</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Most platforms optimize only student content. EduMeUp aligns all stakeholder actions around the same mastery system and strengthens classroom delivery through SMK-certified teacher capability.
            </p>
            <Link href="/teacher-training#smk">
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2366c9] hover:text-blue-700">
                Explore SMK Certification
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
