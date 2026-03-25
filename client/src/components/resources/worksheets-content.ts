import {
  GraduationCap,
  BookOpen,
  SlidersHorizontal,
  PenSquare,
  Printer,
  Users,
  type LucideIcon,
} from "lucide-react";

export type WorksheetFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const worksheetFeatures: WorksheetFeature[] = [
  {
    title: "Full Grade Range: Grade 1 to O-Level",
    description:
      "Worksheets are available from Grade 1 through O-Level for both primary foundation building and secondary reinforcement.",
    icon: GraduationCap,
  },
  {
    title: "Subjects: English, Math, Sciences",
    description:
      "Core subjects run across the full grade range. O-Level worksheets extend to Economics, Biology, Chemistry, and Physics.",
    icon: BookOpen,
  },
  {
    title: "Conceptually Graded",
    description:
      "Each worksheet is tagged by grade level, topic, and cognitive level so teachers can select exact difficulty.",
    icon: SlidersHorizontal,
  },
  {
    title: "Worked Example Included",
    description:
      "Every worksheet begins with a completed worked example before independent student attempt.",
    icon: PenSquare,
  },
  {
    title: "Printable and Digital",
    description:
      "Available for printing or direct platform completion, with progress tracking for digital completions.",
    icon: Printer,
  },
  {
    title: "Classroom and Home Use",
    description:
      "Designed for classroom practice, home reinforcement, and student-led revision.",
    icon: Users,
  },
];
