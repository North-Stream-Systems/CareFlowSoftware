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
      "Cameron spent four years inside a family-run care home and domiciliary company, watching software slow the whole team down instead of helping them. Edward spent two years in child and elderly care services. Same pattern, different seat.",
  },
  {
    period: "The decision",
    title: "Two people, one frustration",
    description:
      "Cameron and Edward compared notes on what they'd both lived through. Neither of them thought the fix was coming from inside the existing vendors, so they decided to build it themselves.",
  },
  {
    period: "The build",
    title: "Platform built with a real provider",
    description:
      "CareFlow got built module by module: Staff, Clients, Rostering, Reports. Every one shaped by an actual North Wales care provider's day-to-day, not a feature list drawn up in a meeting.",
  },
  {
    period: "The pilot",
    title: "Piloted with a North Wales care provider",
    description:
      "The platform went live with a real domiciliary and residential provider. Rostering, compliance and care records, tested against actual shifts and an actual inspection, not a demo environment.",
  },
  {
    period: "Now",
    title: "Opening up to more care companies",
    description:
      "Now we're opening it up to other domiciliary and residential providers across the UK. Same platform, built by people who've actually done the job.",
  },
];
