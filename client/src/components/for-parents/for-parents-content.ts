import {
  BarChart3,
  Clock3,
  Gauge,
  GraduationCap,
  Home,
  type LucideIcon,
} from "lucide-react";

export type ParentBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const parentBenefits: ParentBenefit[] = [
  {
    title: "Real-time Progress Dashboard",
    description:
      "Topic-by-topic mastery percentages for every subject, updated automatically after every learning session.",
    icon: BarChart3,
  },
  {
    title: "Study Consistency Tracking",
    description:
      "See whether your child is studying consistently throughout the year, not just in final exam weeks.",
    icon: Clock3,
  },
  {
    title: "Exam Readiness Score",
    description:
      "A continuously updated readiness level for each subject based on diagnostic and practice data.",
    icon: Gauge,
  },
  {
    title: "Parent Training Modules",
    description:
      "Guided modules on supporting your child's learning at home without requiring subject expertise.",
    icon: GraduationCap,
  },
  {
    title: "Home-Support Activity Guides",
    description:
      "Structured weekly guides on what to ask, what to check, and how to maintain engagement without pressure.",
    icon: Home,
  },
];

export const parentCanDoList: string[] = [
  "See exactly which topics your child is strong and weak in",
  "Check whether they have studied in the past 7 days",
  "Ask what topic they studied today and verify it",
  "Know whether their exam readiness score is improving",
  "Receive an alert if a new gap is identified",
];

export const parentDoNotNeedList: string[] = [
  "Know Chemistry, Physics, or Economics",
  "Mark or check homework yourself",
  "Wait for a school report to know how they are doing",
  "Rely on your child's self-report of revision quality",
  "Spend on additional tutors to discover hidden gaps",
];

export const parentReferences: string[] = [
  "Hoover-Dempsey, K. V., & Sandler, H. M. (2005). The social context of parental involvement. Educational Psychologist, 40(2), 117-131.",
  "Hattie, J. (2009). Visible learning. Routledge.",
];