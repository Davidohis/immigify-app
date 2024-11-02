export const pageSteps = [
  { number: 1, label: "Eligibility Agent" },
  { number: 2, label: "Document Agent" },
  { number: 3, label: "Form-Filling Agent" },
  { number: 4, label: "Interview Prep Agent" },
];

export const steps = [
  {
    key: 1,
    question: "What’s the highest level of education you’ve completed?",
    options: ["Undergraduate Degree", "High School Cert.", "Masters Degree"],
    answer: "",
  },
  {
    key: 2,
    question: "What’s your country of region?",
    options: ["Nigeria", "South Africa.", "Ghana"],
    answer: "",
  },
  {
    key: 3,
    question: "What’s your current occupation?",
    options: [
      "Engineering",
      "Healthcare",
      "Education",
      "Information Technology",
      "Finance & Accounting",
      "Marketing & Communication",
      "Arts & Entertainment",
      "Hospitality & Tourism",
      "Legal & Law Enforcement",
      "Construction & Manu.",
    ],
    answer: "",
  },
  {
    key: 4,
    question: "Kindly select the visa type of your choice",
    options: ["H-1B Visa  70%", "O-1 Visa  40%", "EB-2 Visa 50%"],
    answer: "",
  },
];

export const eligibilityAgent = [
  {
    key: 1,
    label: "H-1B Visa (Skilled Worker)",
    options: ["Undergraduate Degree", "Nigerian", "Job Experience"],
  },
  {
    key: 2,
    label:
      "EB-2 Visa (Employment-Based Green Card for Advanced Degree Holders or Exceptional Ability)",
    options: ["Undergraduate Degree", "Significant Skills", "Job Experience"],
  },
  {
    key: 3,
    label: "O-1 Visa (Extraordinary Ability)",
    options: [
      "Undergraduate Degree",
      "Achievements or Unique skills",
      "Job Experience",
    ],
  },
];