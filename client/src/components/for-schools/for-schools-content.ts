import {
  BookOpen,
  GraduationCap,
  Users,
  BarChart3,
  Palette,
  Headset,
  ShieldCheck,
  Building2,
  Network,
  Target,
  type LucideIcon,
} from "lucide-react";

export type SchoolSolutionItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SchoolAudienceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const schoolSolutions: SchoolSolutionItem[] = [
  {
    title: "Student Learning Platform",
    description:
      "Full access to EduMeUp programmes for enrolled students: 10 subjects, interactive H5P modules, AI diagnostic, spaced retrieval, and mock exams.",
    icon: BookOpen,
  },
  {
    title: "Cambridge Teacher Training (CTMW)",
    description:
      "One-day workshop for all subject teachers with 7 CPD hours and a Certificate of Cambridge Teaching Excellence.",
    icon: GraduationCap,
  },
  {
    title: "Parent Dashboard & Tools",
    description:
      "Parents get topic-level mastery, weak-area alerts, study consistency, and exam readiness updates after every session.",
    icon: Users,
  },
  {
    title: "Admin Analytics",
    description:
      "School leadership receives real-time data on student progress, teacher engagement, course effectiveness, and subject-level trends.",
    icon: BarChart3,
  },
  {
    title: "White-Label Option",
    description:
      "Deploy the platform under your school's own branding while powered by EduMeUp content and systems.",
    icon: Palette,
  },
  {
    title: "Expert Support",
    description:
      "Continuous access to EduMeUp Cambridge specialists for curriculum queries, teacher support, and platform guidance.",
    icon: Headset,
  },
  {
    title: "SMK Teacher Certification",
    description:
      "A formal teacher certification pathway that builds subject mastery standards across your school and strengthens long-term instructional quality.",
    icon: ShieldCheck,
  },
];

export const schoolAudience: SchoolAudienceItem[] = [
  {
    title: "Cambridge / IGCSE Schools",
    description:
      "For schools delivering O-Level or IGCSE and aiming to improve results, reduce tutor dependency, and show stronger value to parents.",
    icon: Building2,
  },
  {
    title: "Schools Scaling Across Campuses",
    description:
      "For growing school networks that need a consistent academic infrastructure without rebuilding systems campus by campus.",
    icon: Network,
  },
  {
    title: "Schools Investing in Teacher Quality",
    description:
      "For leadership teams that recognize teacher development as the highest-leverage academic investment.",
    icon: Target,
  },
];