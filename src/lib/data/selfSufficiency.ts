import type { BadgeLevel } from "./crops";

export interface StatDatum {
  figure: string;
  label: string;
}

export interface BalanceRow {
  category: string;
  production: string;
  consumption: string;
  result: string;
  resultLevel: BadgeLevel;
}

export interface AnalysisCard {
  title: string;
  body: string;
}

export const headlineStats: StatDatum[] = [
  { figure: "80–85%", label: "Overall food self-sufficiency" },
  { figure: "~5–6×", label: "Fruit surplus vs. consumption" },
  { figure: "Oil", label: "The one structural deficit" },
];

export const balanceRows: BalanceRow[] = [
  {
    category: "Fruits",
    production: "~2,800–3,200 kg",
    consumption: "~450–550 kg",
    result: "Large surplus (~5–6×)",
    resultLevel: "good",
  },
  {
    category: "Vegetables",
    production: "~1,800–2,200 kg",
    consumption: "~900–1,100 kg",
    result: "Surplus (~2×)",
    resultLevel: "good",
  },
  {
    category: "Greens",
    production: "~400–500 kg",
    consumption: "~150–200 kg",
    result: "Surplus",
    resultLevel: "good",
  },
  {
    category: "Pulses",
    production: "~180–220 kg",
    consumption: "~150–180 kg",
    result: "Roughly self-sufficient",
    resultLevel: "mid",
  },
  {
    category: "Millets (Ragi/Jowar/Bajra)",
    production: "~350–450 kg",
    consumption: "~250–300 kg",
    result: "Surplus",
    resultLevel: "good",
  },
  {
    category: "Oilseed (Sesame)",
    production: "~25–35 kg seed → ~8–12 L oil",
    consumption: "~40–50 L cooking oil",
    result: "Deficit — supplement from market",
    resultLevel: "trial",
  },
  {
    category: "Spices",
    production: "Turmeric/Chilli/Curry Leaf: full. Cardamom/Clove/Cinnamon: negligible.",
    consumption: "Full household basket",
    result: "Partial",
    resultLevel: "mid",
  },
];

export const analysisCards: AnalysisCard[] = [
  {
    title: "Fruit is the surplus engine",
    body: "At 5–6× household need, fruit is the category to gift, barter, or lightly sell — the food forest's clearest win, driven by Mango, Guava, Banana, Papaya, Jackfruit, Sapota, Amla and the citrus trees together.",
  },
  {
    title: "Cooking oil is the real gap",
    body: "Sesame alone can't cover a typical Indian household's oil use. Closing it fully would mean dedicating far more of the acre to Groundnut/Sesame — at the cost of the tree biodiversity that's the whole point of this design, so it's left as a deliberate, acknowledged trade-off.",
  },
  {
    title: "Pulses land almost exactly on target",
    body: "Pigeon Pea, Green Gram, Black Gram, Chickpea, Groundnut and Soybean together roughly match dal-heavy household consumption — a good sign the bed sizing in Zone B is close to right.",
  },
  {
    title: "Specialty spices stay a market purchase",
    body: "Cardamom, Clove and Cinnamon were never expected to feed the household — they're trial plantings. Turmeric, Chilli and Curry Leaf, which the plot handles well, cover the spices that actually matter day-to-day.",
  },
];

export interface Step {
  lead: string;
  rest: string;
}

export const steps: Step[] = [
  {
    lead: "Year 1:",
    rest: " boundary windbreak + pond/RWH structures + cow shed first — everything downstream depends on wind protection and water.",
  },
  {
    lead: "Year 2–3:",
    rest: " Layer 1–3 trees go in at final spacing with a Beejamrutham dip; Zones B and C carry the household's food while trees are too young to bear.",
  },
  {
    lead: "Ongoing:",
    rest: " the 7–10 day Jeevamrutham cycle is the single highest-leverage recurring task on the whole plot — don't let it slip.",
  },
];

export const closingNote =
  "Every crop from the original brief is present somewhere in this plan. The six trial-zone crops are flagged as low-yield, educational plantings rather than core food sources, each with a realistic substitute already carrying its share of the harvest.";
