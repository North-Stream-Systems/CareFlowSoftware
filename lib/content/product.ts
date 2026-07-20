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
    summary: "From the first job application to the last appraisal, without switching systems.",
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
    summary: "Care plans you write yourself. Not a template built for a company that isn't yours.",
    points: [
      "Care plans and risk assessments, no rigid templates",
      "Medication management with MAR charts",
      "Incidents, complaints and safeguarding logs",
      "Mental capacity records, all CQC/CIW mapped",
    ],
  },
  {
    key: "rostering",
    name: "Rostering",
    summary: "SmartRota. Because rotas fall apart the moment someone rings in sick, and that happens most weeks.",
    points: [
      "Template-based scheduling for recurring patterns",
      "Live drag-and-drop day view",
      "AI-assisted cover suggestions when someone calls in sick",
      "Unassigned visit alerts before they turn into missed visits",
    ],
  },
  {
    key: "dashboard",
    name: "Dashboard",
    summary: "Every user sets up their own home screen. A coordinator's view shouldn't look like an admin's.",
    points: [
      "Fully customisable widget layout",
      "Different views for managers, coordinators and office staff",
      "Live status, not a static report from this morning",
    ],
  },
  {
    key: "reports",
    name: "Reports",
    summary: "Reports on what you're already putting into the system.",
    points: [
      "Operational, compliance and staffing reports",
      "Exportable, audit-ready formatting",
      "CQC/CIW inspection packs are a separate add-on. See Inspection Report Packages.",
    ],
  },
  {
    key: "finance",
    name: "Finance",
    summary: "Billing built from what was actually delivered, not what was planned.",
    points: [
      "Invoicing generated from delivered visits, not estimated ones",
      "Payroll export matched to actual hours worked",
      "Billing rules for local authority, private and direct payment funding",
      "No manual reconciliation between the rota and the pay run",
    ],
  },
  {
    key: "settings",
    name: "Settings & Configuration",
    summary: "You configure the workflows. We don't run a support queue for \"can you add a field.\"",
    points: [
      "Every workflow and form is configurable by you",
      "Compliance rules matched to your organisation",
      "Changes that used to be a support ticket now take minutes",
    ],
  },
];

export const productCallouts: string[] = [
  "Mapped to CQC and CIW from day one",
  "Hosted in the UK, UK data residency",
  "No two care companies run the same way. We stopped pretending they should.",
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
      "Build the course once. When someone finishes it, their Staff record updates on its own, and rostering unblocks them for that shift type.",
    href: "/training",
    linkLabel: "Learn more",
  },
  {
    key: "policies",
    name: "Policies & Procedures",
    summary:
      "Answer some questions about your organisation and get a full, regulation-referenced policy suite back. Staff acknowledgement is tracked automatically.",
    href: "/policies",
    linkLabel: "Learn more",
  },
  {
    key: "inspection-packages",
    name: "Inspection Report Packages",
    summary: "Pulls training, incidents, medication and MCA records into one PDF, ready for the inspector.",
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
    title: "No legacy tech debt",
    description:
      "We started this in the last couple of years, on a modern stack. There's no decade of patches underneath it, because there's no decade.",
  },
  {
    title: "Custom role-based permissions",
    description:
      "Not a fixed list of roles. You define who can see and do what, down to the individual permission, matched to how your organisation is actually structured.",
  },
  {
    title: "AI used practically, not as a gimmick",
    description:
      "AI Cover Assist is built into Core for every customer. AI-generated policy suites are an add-on. A human confirms every one. AI doesn't decide anything that affects someone's care.",
  },
  {
    title: "Serious about security and access",
    description: "UK data residency. Cyber Essentials certified. WCAG 2.1 accessible interfaces throughout.",
  },
  {
    title: "Native mobile, built for the doorstep",
    description:
      "A carer standing at someone's door in the rain needs one hand free for the app. That's the design brief. It's a proper mobile app, not a website squeezed onto a phone.",
  },
];
