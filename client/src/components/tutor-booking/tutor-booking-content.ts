import {
  ClipboardList,
  PhoneCall,
  GraduationCap,
  BadgeCheck,
  SearchCheck,
  Library,
  LayoutDashboard,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type StepItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const studentJourneySteps: StepItem[] = [
  {
    title: "Step 1 - Tell Us Your Needs",
    description:
      "Share subject, level, preferred timing, and online or in-person preference. EduMeUp personally selects the most suitable certified tutor.",
    icon: ClipboardList,
  },
  {
    title: "Step 2 - We Contact You with a Match",
    description:
      "We introduce the matched tutor with relevant qualifications and subject expertise so you can make an informed decision.",
    icon: PhoneCall,
  },
  {
    title: "Step 3 - Free Trial Classes",
    description:
      "Attend one or two free trial classes online or in person, with no obligation before confirmation.",
    icon: GraduationCap,
  },
  {
    title: "Step 4 - Confirm and Begin",
    description:
      "After confirmation, tuition is processed via EduMeUp with structured monthly payment management.",
    icon: BadgeCheck,
  },
];

export const studentFeatures: FeatureItem[] = [
  {
    title: "Free Diagnostic Foundation",
    description:
      "AI diagnostic gap reports are shared with the tutor so lessons target real weaknesses from day one.",
    icon: SearchCheck,
  },
  {
    title: "Selected Learning Resources Free",
    description:
      "Key concept summaries, formula sheets, and reference materials support tutor sessions between classes.",
    icon: Library,
  },
  {
    title: "Parent Progress Dashboard Free",
    description:
      "Real-time visibility into subject mastery, consistency, and readiness throughout tuition.",
    icon: LayoutDashboard,
  },
  {
    title: "EduMeUp Expert Backup",
    description:
      "Education experts support tutors when needed and can arrange a replacement tutor after review and consent.",
    icon: LifeBuoy,
  },
];

export const tutorJourneySteps: StepItem[] = [
  {
    title: "Step 1 - Register Free",
    description:
      "Submit your free registration with qualifications, subjects, levels, experience, and availability.",
    icon: ClipboardList,
  },
  {
    title: "Step 2 - Become EduMeUp Certified",
    description:
      "Pass the subject assessment and short interview to receive certified tutor status.",
    icon: BadgeCheck,
  },
  {
    title: "Step 3 - We Contact You with a Match",
    description:
      "EduMeUp handles matching and contacts you directly when a suitable student is identified.",
    icon: PhoneCall,
  },
  {
    title: "Step 4 - Deliver Free Trial Classes",
    description:
      "Deliver one or two free trial classes to demonstrate teaching quality and fit.",
    icon: GraduationCap,
  },
  {
    title: "Step 5 - Confirmed Tuition and Payment",
    description:
      "EduMeUp manages parent-side fee collection and pays tutors according to the agreed schedule.",
    icon: LayoutDashboard,
  },
];

export const tutorFeatures: FeatureItem[] = [
  {
    title: "Student Diagnostic Data",
    description:
      "Get pre-lesson gap reports so your first session is precise and needs-focused.",
    icon: SearchCheck,
  },
  {
    title: "Selected Worksheets and References Free",
    description:
      "Use concept summaries and formula sheets to strengthen continuity between sessions.",
    icon: Library,
  },
  {
    title: "EduMeUp Expert Support",
    description:
      "Consult education specialists for difficult cases and strategy support.",
    icon: LifeBuoy,
  },
];

export const tutorNetworkReasons: FeatureItem[] = [
  {
    title: "Rigorous Certification, Real Credibility",
    description:
      "Certified status is earned through assessment and interview, giving parents trusted quality signals.",
    icon: BadgeCheck,
  },
  {
    title: "No Upfront Fee, Ever",
    description:
      "Registration, certification, and matching are free before tuition confirmation.",
    icon: ClipboardList,
  },
  {
    title: "Managed Matching, No Marketing Required",
    description:
      "EduMeUp handles student matching, so tutors focus on teaching.",
    icon: PhoneCall,
  },
  {
    title: "Reliable, Structured Payment",
    description:
      "Tuition administration is handled by EduMeUp with scheduled tutor payouts.",
    icon: LayoutDashboard,
  },
];