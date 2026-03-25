import {
  ScrollText,
  BookOpenCheck,
  Download,
  ArrowUpRight,
  CheckCheck,
  Presentation,
  type LucideIcon,
} from "lucide-react";

export type ConceptualFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const conceptualFeatures: ConceptualFeature[] = [
  {
    title: "Concept Summary Before Every Section",
    description:
      "Each topic opens with key definitions, formulas, and principles so students consolidate understanding before questions.",
    icon: ScrollText,
  },
  {
    title: "Complete Subject Coverage",
    description:
      "Workbooks cover all 10 EduMeUp subjects across the full Cambridge O-Level syllabus, topic by topic.",
    icon: BookOpenCheck,
  },
  {
    title: "Downloadable for Offline, Hands-On Practice",
    description:
      "Every workbook is a printable PDF designed for handwritten exam-style practice.",
    icon: Download,
  },
  {
    title: "Graded Practice Questions",
    description:
      "Question flow builds from recall to analysis and evaluation, aligned with Bloom's revised taxonomy.",
    icon: ArrowUpRight,
  },
  {
    title: "Enhanced Solutions at the End",
    description:
      "Complete worked solutions with mark scheme commentary appear after practice to support genuine self-checking.",
    icon: CheckCheck,
  },
  {
    title: "Effective for Teacher Use",
    description:
      "Suitable for classroom tasks, homework assignment, and concept remediation support.",
    icon: Presentation,
  },
];

export const conceptualReferences: string[] = [
  "Anderson, L. W., & Krathwohl, D. R. (2001). A taxonomy for learning, teaching, and assessing. Longman.",
  "Muller, P. A., & Oppenheimer, D. M. (2014). The pen is mightier than the keyboard: Advantages of longhand over laptop note taking. Psychological Science, 25(6), 1159-1168.",
];