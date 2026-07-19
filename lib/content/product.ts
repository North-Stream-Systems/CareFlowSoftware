export type ProductModule = {
  key: string;
  name: string;
  summary: string;
  points: string[];
};

export const productModules: ProductModule[] = [
  {
    key: "staff",
    name: "Staff",
    summary: "The full employment lifecycle, in one place.",
    points: [
      "Candidate pipeline and onboarding",
      "Compliance tracking and training records",
      "Bradford Factor absence monitoring",
      "Supervision, one to ones and appraisals",
    ],
  },
  {
    key: "clients",
    name: "Clients",
    summary: "Complete care records, built the way you actually work.",
    points: [
      "Care plans and risk assessments you build — no rigid templates",
      "Medication management with MAR charts",
      "Incidents, complaints and safeguarding logs",
      "Mental capacity records, all CQC/CIW mapped",
    ],
  },
  {
    key: "rostering",
    name: "Rostering",
    summary: "SmartRota — built for the reality of last-minute change.",
    points: [
      "Template-based scheduling for recurring patterns",
      "Live drag-and-drop day view",
      "AI-assisted cover suggestions when someone calls in sick",
      "Unassigned visit alerts before they become missed visits",
    ],
  },
  {
    key: "dashboard",
    name: "Dashboard",
    summary: "One home screen. Built by every user, for what they need.",
    points: [
      "Fully customisable widget layout",
      "Different views for managers, coordinators and office staff",
      "Live status, not static reporting",
    ],
  },
  {
    key: "reports",
    name: "Reports",
    summary: "30+ built-in reports on everything you're already recording.",
    points: [
      "Operational, compliance and staffing reports",
      "Exportable, audit-ready formatting",
      "One-click CQC/CIW inspection packs available as an add-on — see Inspection Report Packages",
    ],
  },
  {
    key: "settings",
    name: "Settings & Configuration",
    summary: "Your workflows, your rules — no developer required.",
    points: [
      "Every workflow and form is configurable by you",
      "Compliance rules matched to your organisation",
      "No waiting on a vendor for changes that should take minutes",
    ],
  },
];

export const productCallouts: string[] = [
  "Built CQC & CIW ready from day one",
  "UK-hosted, UK data residency",
  "Fully configurable — no two care companies work the same way, so your software shouldn't force them to.",
];

export type AddOnModule = {
  key: string;
  name: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export const addOnModules: AddOnModule[] = [
  {
    key: "training",
    name: "Training & Compliance",
    summary:
      "In-platform course builder and curriculum pathways. Course completion auto-populates staff compliance — no manual re-entry.",
    href: "/training",
    linkLabel: "Learn more",
  },
  {
    key: "policies",
    name: "Policies & Procedures",
    summary:
      "A full, regulation-referenced policy suite generated for your organisation in minutes, with staff acknowledgement tracking.",
    href: "/policies",
    linkLabel: "Learn more",
  },
  {
    key: "inspection-packages",
    name: "Inspection Report Packages",
    summary:
      "One-click, inspector-ready CQC/CIW packs generated from data across the whole platform.",
    href: "/pricing#inspection-packages",
    linkLabel: "See pricing",
  },
];

export type TechPoint = {
  title: string;
  description: string;
};

export const techPoints: TechPoint[] = [
  {
    title: "Modern architecture, built for reliability",
    description:
      "No legacy tech debt to work around. CareFlow is built on a modern stack designed to stay up when you need it — not patched together over a decade.",
  },
  {
    title: "Custom role-based permissions",
    description:
      "Not a fixed list of roles. Define exactly who can see and do what, down to the individual permission — matched to how your organisation is actually structured.",
  },
  {
    title: "AI used practically, not as a gimmick",
    description:
      "AI Cover Assist is built into Core for every customer. AI-assisted supervision note-taking and AI-generated policy suites are available as add-ons. A human always confirms. AI never auto-decides anything that affects care.",
  },
  {
    title: "Serious about security and access",
    description:
      "UK data residency, ISO 27001-aligned practices, Cyber Essentials Plus, and WCAG 2.1 accessible interfaces throughout.",
  },
  {
    title: "Native mobile, built for the doorstep",
    description:
      "Purpose-built mobile apps for care workers — designed for one-handed use standing at a client's door, not a shrunken-down desktop screen.",
  },
];
