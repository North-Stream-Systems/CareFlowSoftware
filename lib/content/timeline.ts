export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "The problem",
    title: "North Wales, on the ground",
    description:
      "Cameron spends four years inside a family-run care home and domiciliary company, watching software slow down the people it was supposed to help. Edward spends two years working directly in child and elderly care services, seeing the same pattern from a different seat.",
  },
  {
    period: "The decision",
    title: "Two people, one frustration",
    description:
      "Cameron and Edward compare notes on what they'd both lived through — and realise the fix wasn't going to come from inside the existing care software vendors. They decide to build it themselves.",
  },
  {
    period: "The build",
    title: "Platform built with a real provider",
    description:
      "CareFlow is built module by module — Staff, Clients, Rostering, Reports — grounded in a North Wales care provider's actual day-to-day operation, not a generic feature list.",
  },
  {
    period: "The pilot",
    title: "Piloted with a North Wales care provider",
    description:
      "The platform goes live with a real domiciliary and residential provider, testing rostering, compliance and care records against real shifts, real inspections and real edge cases.",
  },
  {
    period: "Now",
    title: "Opening up to more care companies",
    description:
      "CareFlow is ready for other domiciliary and residential providers across the UK who want software built by people who understand what a care shift actually looks like.",
  },
];
