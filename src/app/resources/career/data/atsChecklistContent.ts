export type ChecklistSection = {
  title: string;
  items: string[];
};

export const ATS_CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    title: "Resume Structure",
    items: [
      "Clear contact information",
      "Professional summary",
      "Work experience",
      "Education",
      "Skills",
      "Optional certifications/projects",
    ],
  },
  {
    title: "ATS Formatting",
    items: [
      "Avoid unnecessary tables",
      "Avoid complex multi-column layouts where ATS compatibility is uncertain",
      "Use clear section headings",
      "Use readable fonts",
      "Keep formatting consistent",
      "Avoid text embedded inside images",
    ],
  },
  {
    title: "Keywords",
    items: [
      "Review the job description",
      "Identify relevant skills",
      "Add keywords naturally",
      "Avoid keyword stuffing",
    ],
  },
  {
    title: "Work Experience",
    items: [
      "Use clear job titles",
      "Include measurable achievements where possible",
      "Use action-oriented language",
      "Focus on relevant responsibilities",
    ],
  },
  {
    title: "Skills",
    items: [
      "Include relevant technical skills",
      "Include role-specific tools",
      "Match genuine skills to job requirements",
    ],
  },
  {
    title: "Final Review",
    items: [
      "Check spelling",
      "Check grammar",
      "Verify dates",
      "Verify contact details",
      "Export in an appropriate format",
      "Review the resume for readability",
    ],
  },
];

export const CHECKLIST_STORAGE_KEY = "nsl-career-ats-checklist-unlocked";

export const CHECKLIST_LEAD_MAGNET_ID = "free-ats-resume-checklist";

export const CHECKLIST_PAGE_PATH = "/resources/career/free-ats-resume-checklist";
