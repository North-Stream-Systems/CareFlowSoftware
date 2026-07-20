export const trainingLessonTypes: { name: string; description: string }[] = [
  { name: "Video", description: "Host or embed training video content directly in a lesson." },
  { name: "Document", description: "Reading material, policies or guidance staff work through and confirm." },
  { name: "Quiz", description: "Scored multiple-choice or short-answer checks, with a pass threshold." },
  {
    name: "Practical sign-off",
    description: "An assessor confirms in-person or on-shift competency. Moving and handling, medication administration.",
  },
  { name: "Live session", description: "Log attendance at an in-person or virtual training session." },
  { name: "External / SCORM", description: "Bring in existing SCORM packages or externally-hosted courses." },
];

export const trainingBenefit = {
  heading: "Zero manual re-entry between \"did the training\" and \"can be rostered\"",
  body: "Course completion in the LMS updates the right entry in the Staff module's Training & Qualifications tab as soon as it happens, and lifts the matching rostering compliance block with it. Nobody's retyping a certificate number into a spreadsheet. Nobody gets rostered onto a shift they're not qualified for yet.",
};

export const trainingFeatures: string[] = [
  "In-platform course builder, so you're not paying for a separate authoring tool as well",
  "Curriculum pathways that open up one step at a time, so staff can't skip week four before finishing week one",
  "Six lesson types, video through to practical sign-off",
  "Certificates generate themselves when someone finishes a course",
  "Feeds straight into Staff compliance and rostering, more on that below",
];
