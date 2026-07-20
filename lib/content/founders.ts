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
      "Cameron spent four years inside a family-run care home and domiciliary company in North Wales, in an IT role that sat right in the middle of daily operations, not off to one side of them.",
      "He watched software let good care teams down again and again. Too complicated for the people actually using it. Too rigid to fit how the company really worked. Or it just fell over at the worst possible moment — mid-visit, mid-inspection, once during a safeguarding call that couldn't wait.",
      "That's where CareFlow came from. Care companies should be able to get on with care, not spend half the week fighting the system that's supposed to help them.",
    ],
  },
  {
    name: "Edward Lunt",
    initials: "EL",
    role: "Co-Founder",
    bio: [
      "Edward has a Master's in AI and Machine Learning and a First in Computer Science. That's the technical side of CareFlow sorted.",
      "Before any of that, he spent two years working in child and elderly care services. Most people building software for this sector have never sat in on a care review, or filled in an incident form at midnight. He has.",
      "That means he knows what care staff actually need from a tool, and what they'll quietly stop using within a week if it gets in their way.",
    ],
  },
];

export const foundersIntro =
  "Two people, the same problem, seen from different sides. Cameron ran a care company and lived with the software every day. Edward worked inside care services and watched it fail from the staff side. Neither of them thought someone else was going to fix it, so they built it themselves.";
