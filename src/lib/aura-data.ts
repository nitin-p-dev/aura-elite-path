export type ExamKey = "JEE" | "IAT" | "CAT" | "GATE";

export const exams: { key: ExamKey; label: string; blurb: string }[] = [
  { key: "JEE", label: "JEE", blurb: "Advanced-level problem solving for IIT aspirants" },
  { key: "IAT", label: "IAT", blurb: "IISER aptitude — science-first preparation" },
  { key: "CAT", label: "CAT", blurb: "MBA entrance strategy for the top IIMs" },
  { key: "GATE", label: "GATE", blurb: "Core engineering depth for IISc and PSUs" },
];

export type Mentor = {
  id: string;
  name: string;
  exam: ExamKey;
  rank: string;
  college: string;
  subjects: string[];
  years: number;
  headline: string;
  strategy: string[];
  slots: string[];
  testimonials: { student: string; text: string; delta: string }[];
};

export const mentors: Mentor[] = [
  {
    id: "aarav-mehta",
    name: "Aarav Mehta",
    exam: "JEE",
    rank: "AIR 112",
    college: "IIT Bombay",
    subjects: ["Physics", "Calculus", "Mechanics"],
    years: 4,
    headline: "Turns brute-force solvers into pattern readers.",
    strategy: [
      "Concept audit in week one — we map exactly which chapters leak marks.",
      "Two timed sectionals a week, reviewed line-by-line on call.",
      "A living error log; every mistake gets a named cause and a drill.",
      "Final 8 weeks shift entirely to paper temperament and pacing.",
    ],
    slots: ["Mon 7:00 PM", "Wed 8:30 PM", "Sat 11:00 AM"],
    testimonials: [
      { student: "Ishan R.", text: "My physics accuracy went from coin-flip to dependable.", delta: "AIR 21,400 → AIR 1,860" },
      { student: "Nikita S.", text: "The error log alone was worth the whole program.", delta: "88 %ile → 99.1 %ile" },
    ],
  },
  {
    id: "sanya-kapoor",
    name: "Sanya Kapoor",
    exam: "JEE",
    rank: "AIR 340",
    college: "IIT Madras",
    subjects: ["Organic Chemistry", "Physical Chemistry"],
    years: 3,
    headline: "Chemistry without rote — mechanisms you can rebuild.",
    strategy: [
      "Mechanism-first organic: no reaction memorised without its arrow-pushing story.",
      "Weekly 40-question mixed sets to keep physical chemistry warm.",
      "Revision spirals at day 1, day 7 and day 30.",
    ],
    slots: ["Tue 6:30 PM", "Thu 7:30 PM", "Sun 10:00 AM"],
    testimonials: [
      { student: "Rehan M.", text: "Organic stopped being the section I dreaded.", delta: "AIR 9,700 → AIR 1,204" },
    ],
  },
  {
    id: "devika-nair",
    name: "Devika Nair",
    exam: "IAT",
    rank: "Rank 18",
    college: "IISER Pune",
    subjects: ["Biology", "Chemistry", "Aptitude"],
    years: 3,
    headline: "Builds researchers, not just test takers.",
    strategy: [
      "NCERT line-level mastery with weekly recall quizzes.",
      "Cross-subject reasoning drills unique to the IAT paper.",
      "Interview and campus-fit guidance after the exam.",
    ],
    slots: ["Mon 8:00 PM", "Fri 6:00 PM"],
    testimonials: [
      { student: "Aditi K.", text: "She made biology feel like logic instead of lists.", delta: "Rank 2,100 → Rank 240" },
    ],
  },
  {
    id: "rohan-iyer",
    name: "Rohan Iyer",
    exam: "IAT",
    rank: "Rank 44",
    college: "IISc Bangalore",
    subjects: ["Physics", "Mathematics"],
    years: 5,
    headline: "Slow, deliberate depth — the IISc way.",
    strategy: [
      "One hard problem per day, dissected fully rather than skimmed.",
      "Derivation notebooks reviewed fortnightly.",
      "Mock analysis focused on time lost, not marks lost.",
    ],
    slots: ["Wed 7:00 PM", "Sat 5:00 PM"],
    testimonials: [
      { student: "Manas P.", text: "First time a mentor cared how I thought, not what I scored.", delta: "Rank 1,480 → Rank 96" },
    ],
  },
  {
    id: "meher-shah",
    name: "Meher Shah",
    exam: "CAT",
    rank: "99.94 %ile",
    college: "IIM Ahmedabad",
    subjects: ["VARC", "DILR"],
    years: 4,
    headline: "Reading speed is a habit, not a talent.",
    strategy: [
      "Daily 20-minute structured reading with summary writing.",
      "DILR set selection framework — which sets to skip and why.",
      "Weekly mock debrief with a written percentile forecast.",
    ],
    slots: ["Tue 9:00 PM", "Thu 9:00 PM", "Sun 12:00 PM"],
    testimonials: [
      { student: "Kabir T.", text: "Set selection changed my DILR from 60 to 96 percentile.", delta: "82 %ile → 99.2 %ile" },
      { student: "Priya D.", text: "Calm, structured, zero hype.", delta: "91 %ile → 99.6 %ile" },
    ],
  },
  {
    id: "arjun-bansal",
    name: "Arjun Bansal",
    exam: "CAT",
    rank: "99.87 %ile",
    college: "IIM Bangalore",
    subjects: ["Quant", "Interview Prep"],
    years: 6,
    headline: "Quant fundamentals rebuilt in six weeks.",
    strategy: [
      "Arithmetic-first rebuild before touching advanced topics.",
      "Speed ladders: same set, three shrinking time budgets.",
      "WAT-PI simulations from November onward.",
    ],
    slots: ["Mon 9:30 PM", "Sat 4:00 PM"],
    testimonials: [
      { student: "Snehal V.", text: "He fixed the basics I was too embarrassed to revisit.", delta: "78 %ile → 98.8 %ile" },
    ],
  },
  {
    id: "vikram-rao",
    name: "Vikram Rao",
    exam: "GATE",
    rank: "AIR 7",
    college: "IISc Bangalore",
    subjects: ["Computer Science", "Algorithms", "OS"],
    years: 5,
    headline: "Standard-textbook rigour with exam-grade pacing.",
    strategy: [
      "Subject-wise closure plan with hard deadlines.",
      "Previous-year papers mined topic-by-topic, not year-by-year.",
      "Short formula-recall drills every Sunday.",
    ],
    slots: ["Tue 8:00 PM", "Fri 8:00 PM"],
    testimonials: [
      { student: "Harsh G.", text: "The closure plan removed all my planning anxiety.", delta: "AIR 4,300 → AIR 210" },
    ],
  },
  {
    id: "ananya-ghosh",
    name: "Ananya Ghosh",
    exam: "GATE",
    rank: "AIR 23",
    college: "IIT Bombay",
    subjects: ["Electrical", "Signals", "Control Systems"],
    years: 4,
    headline: "Signals and control, finally intuitive.",
    strategy: [
      "Every transform taught with a physical picture first.",
      "Weekly numericals sprint with negative-marking discipline.",
      "Research and PSU pathway guidance alongside prep.",
    ],
    slots: ["Wed 6:30 PM", "Sun 6:00 PM"],
    testimonials: [
      { student: "Farhan A.", text: "Control systems went from my weakest to my strongest.", delta: "AIR 6,900 → AIR 430" },
    ],
  },
];

export const institutions = [
  "IISc Bangalore",
  "IIT Bombay",
  "IIT Madras",
  "IIM Ahmedabad",
  "IISER Pune",
  "IIM Bangalore",
  "IIT Delhi",
  "IIM Calcutta",
];

export type Tier = {
  key: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  mentorAccess: string;
  batchSize: string;
  weekly: string;
  featured?: boolean;
  perks: string[];
  scarcity?: string;
};

export const tiers: Tier[] = [
  {
    key: "basic",
    name: "Basic",
    price: "₹1,499",
    cadence: "per month",
    tagline: "Structure to start with.",
    mentorAccess: "Group mentor, async doubts",
    batchSize: "40 students",
    weekly: "1 group session + weekly plan",
    perks: ["Weekly study plan", "Community doubt forum", "Monthly mock review"],
  },
  {
    key: "general",
    name: "General",
    price: "₹3,999",
    cadence: "per month",
    tagline: "Guidance that keeps pace.",
    mentorAccess: "Assigned mentor, weekly call",
    batchSize: "15 students",
    weekly: "2 group sessions + 1 check-in",
    perks: ["Assigned mentor", "Test analysis sheet", "Chat support in 12h"],
  },
  {
    key: "gold",
    name: "Gold",
    price: "₹7,999",
    cadence: "per month",
    tagline: "Where ranks actually move.",
    mentorAccess: "Top-100 mentor, 1:1 weekly",
    batchSize: "6 students",
    weekly: "2 group + 1 private hour",
    featured: true,
    perks: ["1:1 weekly hour", "Personal error log", "Priority chat in 3h", "Parent progress note"],
  },
  {
    key: "premium",
    name: "Premium",
    price: "₹14,999",
    cadence: "per month",
    tagline: "A full mentorship cabinet.",
    mentorAccess: "Two mentors (subject + strategy)",
    batchSize: "1:1 only",
    weekly: "3 private hours + daily async",
    perks: [
      "Dedicated strategy mentor",
      "Daily accountability",
      "Full mock forensics",
      "Interview & counselling support",
    ],
  },
];

export const steps = [
  { title: "Pick your exam", body: "JEE, IAT, CAT or GATE — we branch the whole plan from here." },
  { title: "Pick your tier", body: "From light structure to a full 1:1 cabinet. Switch anytime." },
  { title: "Get matched", body: "A 20-minute call pairs you with a mentor who fits your gaps." },
  { title: "Weekly structure", body: "Plan on Monday, drills midweek, review on Sunday. Repeat." },
];

export const successStories = [
  { name: "Ishan R.", exam: "JEE", delta: "AIR 21,400 → AIR 1,860", quote: "Aura replaced panic with a calendar." },
  { name: "Meera J.", exam: "CAT", delta: "84 %ile → 99.4 %ile", quote: "One hour a week rebuilt my quant from scratch." },
  { name: "Harsh G.", exam: "GATE", delta: "AIR 4,300 → AIR 210", quote: "My mentor knew exactly which chapters to drop." },
  { name: "Aditi K.", exam: "IAT", delta: "Rank 2,100 → Rank 240", quote: "I finally understood what I was reading." },
  { name: "Snehal V.", exam: "CAT", delta: "78 %ile → 98.8 %ile", quote: "No hype. Just weekly work that compounded." },
];
