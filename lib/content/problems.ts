export type ProblemPoint = {
  label: string;
  detail: string;
};

// Deliberately qualitative, not fabricated statistics — these are pain points
// pulled from lived experience running and working in care, not survey data.
export const problemPoints: ProblemPoint[] = [
  {
    label: "Hours lost to paperwork",
    detail: "Time that should go to care and to staff goes into forms, instead.",
  },
  {
    label: "Compliance on spreadsheets and sticky notes",
    detail: "Tracked by memory and good intentions, not by the system that's supposed to help.",
  },
  {
    label: "Software that breaks when it matters most",
    detail: "Mid-visit, mid-inspection, mid-crisis — exactly when you can least afford it to.",
  },
  {
    label: "Built by people who've never delivered care",
    detail: "So managers spend more time fighting the software than supporting staff and clients.",
  },
];
