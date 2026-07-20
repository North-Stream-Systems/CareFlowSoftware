export type ProblemPoint = {
  label: string;
  detail: string;
};

// Deliberately qualitative, not fabricated statistics — these are pain points
// pulled from lived experience running and working in care, not survey data.
export const problemPoints: ProblemPoint[] = [
  {
    label: "Paperwork instead of care",
    detail:
      "The same training record, typed into three different systems. A form nobody reads. That's a chunk of most days, and it's not the bit anyone signed up for.",
  },
  {
    label: "Compliance tracked on a whiteboard",
    detail:
      "We've seen it done on a spreadsheet, a wall planner, and more than one sticky note stuck to a monitor. It works, right up until the person who remembers where everything is takes a day off.",
  },
  {
    label: "It goes down on the Saturday you need it",
    detail: "Rota software that falls over at 6am when three carers have rung in sick isn't a minor inconvenience. It's a missed visit.",
  },
  {
    label: "Built by people who've never done a shift",
    detail: "So the manager ends up managing the software, not the team.",
  },
];
