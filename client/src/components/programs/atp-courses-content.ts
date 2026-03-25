import {
  Atom,
  FlaskConical,
  Microscope,
  MonitorSmartphone,
  ClipboardCheck,
  FileStack,
  Timer,
  type LucideIcon,
} from "lucide-react";

export type AtpCourseCoverage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AtpHowItWorksItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const atpCoverage: AtpCourseCoverage[] = [
  {
    title: "Physics ATP",
    description:
      "Measurement and uncertainty, graph analysis (gradient, intercept, linearisation), circuit design questions, experimental planning, variable identification, and error calculation techniques.",
    icon: Atom,
  },
  {
    title: "Chemistry ATP",
    description:
      "Titration technique and result analysis, chromatography and identification experiments, gas collection methods, safety justification, and conclusion writing from data sets.",
    icon: FlaskConical,
  },
  {
    title: "Biology ATP",
    description:
      "Microscope observation questions, osmosis and diffusion experiment design, food-test identification, statistical data interpretation, and diagram drawing from descriptions.",
    icon: Microscope,
  },
];

export const atpHowItWorks: AtpHowItWorksItem[] = [
  {
    title: "Virtual Practical Scenarios",
    description:
      "H5P interactive simulations of common ATP experimental scenarios with procedure, data, and conclusion tasks. No physical lab required.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mark Scheme Analysis",
    description:
      "Every ATP question type is deconstructed against Cambridge mark schemes to show exactly what examiners credit.",
    icon: ClipboardCheck,
  },
  {
    title: "Past Paper ATP Questions",
    description:
      "Full Paper 4 question library across all three subjects with enhanced, mark-by-mark solutions.",
    icon: FileStack,
  },
  {
    title: "Exam Strategy Training",
    description:
      "Question timing, method-structure writing, precaution placement, and accurate error calculation and reporting.",
    icon: Timer,
  },
];

export const atpWhoItsFor: string[] = [
  "Have not had access to a well-equipped science lab",
  "Struggle with the data-analysis section of Paper 4",
  "Lose marks on graph questions despite understanding concepts",
  "Have never been explicitly taught ATP exam technique",
  "Want targeted preparation for this specific paper",
];

export const atpSubjectsIncluded: string[] = [
  "Physics ATP - standalone or part of Complete O-Level",
  "Chemistry ATP - standalone or part of Complete O-Level",
  "Biology ATP - standalone or part of Complete O-Level",
  "Complete ATP Bundle (all 3 subjects) - recommended for science stream students",
];