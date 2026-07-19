export type Founder = {
  name: string;
  initials: string;
  role: string;
  bio: string[];
};

export const founders: Founder[] = [
  {
    name: "Cameron Darling",
    initials: "CD",
    role: "Co-Founder",
    bio: [
      "Cameron spent four years inside a family-run care home and domiciliary care company in North Wales, in an IT management role that put him right in the middle of daily operations.",
      "He watched, shift after shift, as good care teams were let down by software that was either too complicated for the people using it, too rigid to match how the company actually worked, or simply unreliable exactly when it mattered most — mid-visit, mid-inspection, mid-crisis.",
      "CareFlow was built on a simple belief that came out of that: care companies should be able to focus on care, not on fighting their own software.",
    ],
  },
  {
    name: "Edward Lunt",
    initials: "EL",
    role: "Co-Founder",
    bio: [
      "Edward holds a Master's in AI and Machine Learning and a First Class BSc in Computer Science — the technical depth behind CareFlow's engineering.",
      "Before software, he spent two years working directly within child and elderly care services. That time gave him something most technical founders never get: a first-hand feel for what care staff actually need from the tools they're handed, and what they'll quietly stop using if it gets in the way.",
      "He brings the rare combination of serious technical capability and genuine care-sector experience — not one bolted onto the other.",
    ],
  },
];

export const foundersIntro =
  "Two people who'd sat on both sides of the same broken problem — one running a care company and living with the software every day, one working inside care services and watching it fail from the other side — decided to stop waiting for someone else to fix it, and build the platform they wished existed.";
