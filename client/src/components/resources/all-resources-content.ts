import {
  MonitorPlay,
  BookOpenCheck,
  FolderTree,
  FileArchive,
  PenSquare,
  Gift,
  type LucideIcon,
} from "lucide-react";

export const resourceSubjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Business Studies",
  "English",
  "Islamiyat",
  "Pakistan Studies",
  "Urdu",
] as const;

export type ResourceCategory = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  type: string;
};

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Interactive Courses",
    description:
      "H5P-powered topic-by-topic courses for Cambridge O-Level subjects and foundational levels.",
    cta: "View Courses",
    href: "/programs",
    icon: MonitorPlay,
    type: "courses",
  },
  {
    title: "Conceptual Workbooks",
    description:
      "Topic-by-topic workbooks with worked examples and full enhanced solutions.",
    cta: "View Workbooks",
    href: "/resources/workbooks",
    icon: BookOpenCheck,
    type: "conceptual-workbooks",
  },
  {
    title: "Topical Practice Workbooks",
    description:
      "Past paper questions by topic with enhanced solutions and exam-frequency focus.",
    cta: "View Topical Workbooks",
    href: "/resources/topical-workbooks",
    icon: FolderTree,
    type: "topical-workbooks",
  },
  {
    title: "Exam Practice Papers",
    description:
      "Real Cambridge papers with timed practice and enhanced solution workflows.",
    cta: "View Exam Papers",
    href: "/resources/exam-papers",
    icon: FileArchive,
    type: "exam-papers",
  },
  {
    title: "Worksheets (Grade 1 to O-Level)",
    description:
      "Graded printable and digital worksheets for primary through O-Level.",
    cta: "View Worksheets",
    href: "/resources/worksheets",
    icon: PenSquare,
    type: "worksheets",
  },
  {
    title: "Free Resources",
    description:
      "Free parent guide, free diagnostic, and O-Level checklists without login.",
    cta: "View Freebies",
    href: "/resources/freebies",
    icon: Gift,
    type: "freebies",
  },
];

export type ResourceEntry = {
  title: string;
  subject: string;
  type: string;
  href: string;
  keywords: string[];
};

export const allResourceEntries: ResourceEntry[] = [
  { title: "O-Level Mathematics Interactive Course", subject: "Mathematics", type: "courses", href: "/programs", keywords: ["algebra", "calculus", "cambridge"] },
  { title: "Physics Conceptual Workbook", subject: "Physics", type: "conceptual-workbooks", href: "/resources/workbooks", keywords: ["concept", "practice", "pdf"] },
  { title: "Chemistry Topical Workbook", subject: "Chemistry", type: "topical-workbooks", href: "/resources/topical-workbooks", keywords: ["past paper", "topic"] },
  { title: "Biology Exam Practice Paper Pack", subject: "Biology", type: "exam-papers", href: "/resources/exam-papers", keywords: ["paper 1", "paper 2"] },
  { title: "Primary English Worksheet Set", subject: "English", type: "worksheets", href: "/resources/worksheets", keywords: ["grade 1", "grade 2"] },
  { title: "Economics Worksheet Set", subject: "Economics", type: "worksheets", href: "/resources/worksheets", keywords: ["o-level", "cambridge"] },
  { title: "Business Studies Workbook", subject: "Business Studies", type: "conceptual-workbooks", href: "/resources/workbooks", keywords: ["business", "exam"] },
  { title: "Pakistan Studies Worksheet Pack", subject: "Pakistan Studies", type: "worksheets", href: "/resources/worksheets", keywords: ["history", "civics"] },
  { title: "Islamiyat Worksheet Pack", subject: "Islamiyat", type: "worksheets", href: "/resources/worksheets", keywords: ["islamiyat", "grade"] },
  { title: "Urdu Foundation Worksheets", subject: "Urdu", type: "worksheets", href: "/resources/worksheets", keywords: ["urdu", "language"] },
];
