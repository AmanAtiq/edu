import {
  FileArchive,
  Timer,
  FileUp,
  Sparkles,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type ExamPapersFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const examPapersFeatures: ExamPapersFeature[] = [
  {
    title: "20+ Actual Cambridge Papers per Subject",
    description:
      "Real past papers, not generated questions, matching Cambridge format, structure, and style.",
    icon: FileArchive,
  },
  {
    title: "Paper 1: Online Timed MCQ with Instant Enhanced Solutions",
    description:
      "MCQ papers are completed under timer conditions with immediate enhanced answer explanation on submission, or view-only for study.",
    icon: Timer,
  },
  {
    title: "Paper 2: Downloadable PDF with Real-Time Simulation Option",
    description:
      "Essay papers are handwritten from downloadable PDFs with optional timed simulation plus upload workflow and 15-minute buffer.",
    icon: FileUp,
  },
  {
    title: "Enhanced Solutions for Every Paper",
    description:
      "Includes mark scheme logic, examiner language commentary, high-band examples, and frequent error analysis.",
    icon: Sparkles,
  },
  {
    title: "8 Core Subjects Covered",
    description:
      "Mathematics, Physics, Chemistry, Biology, Economics, Business Studies, English Language, and additional subjects.",
    icon: Layers,
  },
];

export const examPapersReferences: string[] = [
  "Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2008). Correcting a metacognitive error: Feedback increases retention of low-confidence correct responses. Journal of Experimental Psychology: Learning, Memory, and Cognition, 34(4), 918-928.",
  "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81-112.",
  "Mangen, A., Anda, L. G., Oxborough, G. H., & Bronnick, K. (2015). Handwriting versus keyboard writing: Effect on word recall. Journal of Writing Research, 7(2), 227-247.",
  "Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255.",
];