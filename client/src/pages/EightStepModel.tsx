import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  Zap, 
  Layers, 
  Search, 
  UserCheck, 
  BarChart3, 
  RefreshCw,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const steps = [
  {
    number: "1",
    title: "Diagnostic Assessment",
    description: "Identify exact gaps before starting. AI-powered diagnostic identifies precisely where each student stands, preventing time wasted on material they already know.",
    icon: Search,
    status: "Coming June 2026",
    phase: "Phase 1: Foundation Building",
    benefits: ["Precise gap identification", "Saves 20+ hours of wasted study", "Personalized starting point"],
  },
  {
    number: "2",
    title: "Personalized Pathways",
    description: "Teacher-guided pathways tailored to each student. Not a one-size-fits-all curriculum, but adaptive routes based on learning style, pace, and needs.",
    icon: UserCheck,
    status: "Available Now",
    phase: "Phase 1: Foundation Building",
    benefits: ["Customized learning routes", "Matches individual pace", "Flexible content sequencing"],
  },
  {
    number: "3",
    title: "Active Learning Engine",
    description: "1000+ interactive activities â€” practice by doing. Rather than passive video watching, students engage with problems, simulations, and exercises that demand active thinking.",
    icon: Zap,
    status: "Available Now",
    phase: "Phase 1: Foundation Building",
    benefits: ["Interactive practice", "Real-time feedback", "Problem-solving focus"],
  },
  {
    number: "4",
    title: "Dual Coding",
    description: "Every concept taught with text + visuals. Words alone â‰  understanding. Research shows combining text with images, diagrams, and animations increases retention by 40%.",
    icon: Brain,
    status: "Available Now",
    phase: "Phase 2: Mastery Building",
    benefits: ["Multi-sensory learning", "40% higher retention", "Concept clarity"],
  },
  {
    number: "5",
    title: "Retrieval Practice",
    description: "Frequent low-stakes quizzes strengthen memory. Not high-stakes exams but constant, gentle retrieval that builds long-term recall without anxiety.",
    icon: Target,
    status: "Available Now",
    phase: "Phase 2: Mastery Building",
    benefits: ["Strengthened memory", "Low-anxiety learning", "Frequent feedback"],
  },
  {
    number: "6",
    title: "Spaced Repetition",
    description: "Automated reviews at optimal intervals. Instead of cramming, the system schedules review moments right before you would naturally forget, maximizing retention.",
    icon: RefreshCw,
    status: "Coming September 2026",
    phase: "Phase 2: Mastery Building",
    benefits: ["Optimal spacing", "75%+ long-term retention", "Anti-forgetting system"],
  },
  {
    number: "7",
    title: "Interleaved Practice",
    description: "Mix topics for deeper learning (not blocked practice). Switching between related topics forces deeper connections and transfer of learning.",
    icon: Layers,
    status: "Available Now",
    phase: "Phase 2: Mastery Building",
    benefits: ["Better transfer", "Deeper connections", "Real-world application"],
  },
  {
    number: "8",
    title: "Mastery Verification",
    description: "Track true understanding through dashboards. Real-time visibility for students, teachers, and parents to see mastery progress â€” not just time spent.",
    icon: BarChart3,
    status: "Available Now",
    phase: "Phase 3: Mastery Verification",
    benefits: ["Mastery tracking", "Stakeholder visibility", "Data-driven decisions"],
  },
];

export default function EightStepModel() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = "The 8-Step Mastery Cycle - EduMeUp Learning System | EduMeUp";
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "EduMeUp's 8-Step Mastery Cycle is a research-backed learning system combining diagnostic assessment, active learning, spaced repetition, and mastery verification for lasting retention.",
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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 to-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2366c9]">
              The 8-Step Mastery Cycle
            </div>
            <h1 className="text-4xl font-semibold text-[#1e1b4b] md:text-6xl">
              How Great Learning Actually Works
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
              EduMeUp's 8-Step Mastery Cycle combines cognitive science research with educational psychology to build lasting understandingâ€”not just test scores.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600">
              Based on research from Ebbinghaus, Bloom, Dunlosky, and leading learning scientists worldwide.
            </p>

            <div className="mt-10">
              <Link href="/programs">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#2366c9] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Explore Our Programmes
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8 STEPS GRID */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl">
              The 8 Steps of the Mastery Cycle
            </h2>
            <p className="mt-4 text-slate-600">Each step is research-backed and scientifically proven to improve retention and understanding.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl border border-blue-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  {/* Left: Number & Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-[#2366c9]">
                      {step.number}
                    </div>
                    <step.icon className="h-8 w-8 text-[#2366c9]" />
                  </div>

                  {/* Right: Content */}
                  <div>
                    <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2366c9]">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1e1b4b] mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-700 mb-4">{step.description}</p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-4">
                      {step.benefits.map((benefit) => (
                        <p key={benefit} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{benefit}</span>
                        </p>
                      ))}
                    </div>

                    {/* Status Badge */}
                    <div className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold ${
                      step.status.includes("Available") 
                        ? "bg-green-100 text-green-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {step.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS SECTION */}
      <section className="border-y border-blue-100 bg-blue-50/40 py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] md:text-4xl mb-4">
              Key Research Findings
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The 8-Step Cycle is built on decades of educational research.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                fact: "Active Learning",
                stat: "55% Lower",
                detail: "failure rates in STEM (Freeman et al., 2014)",
              },
              {
                fact: "Dual Coding",
                stat: "40% Higher",
                detail: "retention with text + visuals (Paivio, 1986)",
              },
              {
                fact: "Spaced Repetition",
                stat: "75% Retention",
                detail: "vs 5-10% from cramming (Dunlosky et al., 2013)",
              },
              {
                fact: "Retrieval Practice",
                stat: "3x More Effective",
                detail: "than re-reading (Roediger & Butler, 2011)",
              },
              {
                fact: "Interleaved Practice",
                stat: "30% Better Transfer",
                detail: "to novel problems (Royer, 1979)",
              },
              {
                fact: "Personalization",
                stat: "5x Engagement",
                detail: "vs one-size-fits-all approaches",
              },
            ].map((item) => (
              <div key={item.fact} className="rounded-xl border border-blue-100 bg-white p-6 text-center">
                <div className="text-sm font-semibold text-slate-600 mb-2">{item.fact}</div>
                <div className="text-3xl font-bold text-[#2366c9] mb-2">{item.stat}</div>
                <p className="text-xs text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-semibold text-[#1e1b4b] mb-4">
              Ready to Experience Mastery-Based Learning?
            </h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              The 8-Step Mastery Cycle isn't just theoryâ€”it's implemented across all EduMeUp courses. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#2366c9] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/programs/ai-diagnostic">
                <span className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-[#2366c9] hover:bg-blue-50">
                  Free Diagnostic
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

