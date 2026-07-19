export const trainingLessonTypes: { name: string; description: string }[] = [
  { name: "Video", description: "Host or embed training video content directly in a lesson." },
  { name: "Document", description: "Reading material, policies or guidance staff work through and confirm." },
  { name: "Quiz", description: "Scored multiple-choice or short-answer checks, with a pass threshold." },
  {
    name: "Practical sign-off",
    description: "An assessor confirms in-person or on-shift competency — moving & handling, medication administration.",
  },
  { name: "Live session", description: "Log attendance at an in-person or virtual training session." },
  { name: "External / SCORM", description: "Bring in existing SCORM packages or externally-hosted courses." },
];

export const trainingBenefit = {
  heading: "Zero manual re-entry between \"did the training\" and \"can be rostered\"",
  body: "Course completion in the LMS auto-populates the relevant entry in the Staff module's Training & Qualifications tab, the moment it happens — and automatically lifts the matching rostering compliance block. No coordinator re-typing a certificate number into a spreadsheet, and no care worker rostered onto a shift they're not yet qualified for.",
};

export const trainingFeatures: string[] = [
  "In-platform course builder — no external authoring tool required",
  "Curriculum pathways with sequential unlock, so staff complete training in the right order",
  "Six lesson types, including video, quiz and practical sign-off",
  "Auto-generated certificates on completion",
  "Direct feed into Staff compliance and rostering — see it in action below",
];
