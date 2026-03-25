import {
  FolderTree,
  Download,
  Laptop,
  Languages,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export type TopicalFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const topicalFeatures: TopicalFeature[] = [
  {
    title: "Topic-Organized Past Questions",
    description:
      "Every past paper question for each topic is collected together for targeted revision before moving onward.",
    icon: FolderTree,
  },
  {
    title: "Downloadable for Hands-On Practice",
    description:
      "Workbooks are downloadable PDFs completed by hand to mirror Cambridge written exam demands.",
    icon: Download,
  },
  {
    title: "Enhanced Solutions on the Platform",
    description:
      "After practice, students review enhanced answers with mark allocation logic and common error analysis.",
    icon: Laptop,
  },
  {
    title: "Mark Scheme Language Training",
    description:
      "Solutions train students in examiner-preferred phrasing and precision used in Cambridge marking.",
    icon: Languages,
  },
  {
    title: "Available for All Core Subjects",
    description:
      "Includes Mathematics, Physics, Chemistry, Biology, Economics, Business Studies, and English Language.",
    icon: BookOpen,
  },
];

export const topicalReferences: string[] = [
  "Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249-255.",
  "Brown, P. C., Roediger, H. L., & McDaniel, M. A. (2014). Make it stick: The science of successful learning. Harvard University Press.",
];