export type BadgeLevel = "good" | "mid" | "trial";

export interface CropEntry {
  crop: string;
  suitability: number;
  water: string;
  heat: string;
  shade: string;
  performance: string;
  /** Yield estimate (fruit tables) or management note (spice tables). */
  note?: string;
}

export interface TrialCard {
  title: string;
  body: string;
  /** Text rendered after an emphasized "Substitute:" label. */
  substitute?: string;
}

/** Score → badge tone, matching the original tables (≥8 good, 5–7 mid, ≤4 trial). */
export function badgeLevel(score: number): BadgeLevel {
  if (score >= 8) return "good";
  if (score >= 5) return "mid";
  return "trial";
}

export const fruitTrees: CropEntry[] = [
  { crop: "Mango", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "150–300 fruits (yr 5+)" },
  { crop: "Banana", suitability: 8, water: "High", heat: "Medium", shade: "Medium", performance: "8", note: "15–20 kg / bunch" },
  { crop: "Avocado", suitability: 4, water: "High", heat: "Medium", shade: "Medium", performance: "4", note: "30–60 fruits if it fruits" },
  { crop: "Apple", suitability: 1, water: "Medium", heat: "Low", shade: "Low", performance: "1", note: "Negligible — no chill hours" },
  { crop: "Lemon", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "200–400 fruits" },
  { crop: "Bathayi (Sweet Lime)", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "300–500 fruits" },
  { crop: "Orange", suitability: 6, water: "Medium", heat: "Medium", shade: "Low", performance: "6", note: "100–200 fruits" },
  { crop: "Grape", suitability: 6, water: "Medium", heat: "High", shade: "Low", performance: "6", note: "8–12 kg / vine" },
  { crop: "Blueberry", suitability: 1, water: "High", heat: "Low", shade: "Medium", performance: "1", note: "Substitute: Jamun" },
  { crop: "Guava", suitability: 9, water: "Medium", heat: "High", shade: "Medium", performance: "9", note: "40–80 kg / tree" },
  { crop: "Seethaphalam (Custard Apple)", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8", note: "50–100 fruits" },
  { crop: "Ramphal", suitability: 7, water: "Medium", heat: "High", shade: "Low", performance: "7", note: "40–70 fruits" },
  { crop: "Litchi", suitability: 3, water: "High", heat: "Low", shade: "Medium", performance: "3", note: "Very low, needs cool nights" },
  { crop: "Muskmelon", suitability: 7, water: "Medium", heat: "High", shade: "Low", performance: "7", note: "Seasonal bed crop" },
  { crop: "Pumpkin", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8", note: "Seasonal bed crop" },
  { crop: "Papaya", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "40–60 kg / tree" },
  { crop: "Watermelon", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8", note: "Seasonal bed crop" },
  { crop: "Pineapple", suitability: 7, water: "Medium", heat: "High", shade: "Medium", performance: "7", note: "1 fruit / plant" },
  { crop: "Kiwi", suitability: 1, water: "High", heat: "Low", shade: "Low", performance: "1", note: "Substitute: Passion Fruit" },
  { crop: "Coconut", suitability: 9, water: "High", heat: "High", shade: "Low", performance: "9", note: "60–100 nuts / tree" },
  { crop: "Jackfruit", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "15–30 fruits / tree" },
  { crop: "Sapota", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9", note: "500–1,000 fruits" },
  { crop: "Tamarind", suitability: 9, water: "Low", heat: "High", shade: "Low", performance: "9", note: "100–200 kg / tree (mature)" },
  { crop: "Neem", suitability: 10, water: "Very low", heat: "Very high", shade: "Low", performance: "10", note: "Non-food — windbreak / pesticide" },
  { crop: "Sugarcane", suitability: 8, water: "High", heat: "High", shade: "Low", performance: "8", note: "25–35 t / acre equiv. row" },
  { crop: "Tati Chettu (Palmyra)", suitability: 9, water: "Very low", heat: "Very high", shade: "Low", performance: "9", note: "Toddy / jaggery + fruit" },
  { crop: "Pomegranate", suitability: 7, water: "Low", heat: "High", shade: "Low", performance: "7", note: "50–100 fruits" },
  { crop: "Amla", suitability: 9, water: "Low", heat: "High", shade: "Low", performance: "9", note: "40–80 kg / tree" },
  { crop: "Drumstick", suitability: 10, water: "Very low", heat: "Very high", shade: "Low", performance: "10", note: "300–600 pods / tree / yr" },
  { crop: "Fig", suitability: 6, water: "Medium", heat: "Medium", shade: "Low", performance: "6", note: "15–25 kg / tree" },
  { crop: "Star Fruit", suitability: 6, water: "Medium", heat: "Medium", shade: "Medium", performance: "6", note: "20–40 kg / tree" },
  { crop: "Jamun", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8", note: "80–150 kg / tree (mature)" },
  { crop: "Wood Apple", suitability: 8, water: "Very low", heat: "High", shade: "Low", performance: "8", note: "100–150 fruits" },
  { crop: "Passion Fruit", suitability: 7, water: "Medium", heat: "Medium", shade: "Medium", performance: "7", note: "10–15 kg / vine" },
  { crop: "Dragon Fruit", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8", note: "15–25 kg / plant (mature)" },
];

export const herbsSpices: CropEntry[] = [
  { crop: "Curry Leaf", suitability: 9, water: "Low", heat: "High", shade: "Medium", performance: "9", note: "Thrives, prune hard" },
  { crop: "Betel Leaf", suitability: 6, water: "High", heat: "Low", shade: "High", performance: "6", note: "Needs shade + humidity trellis" },
  { crop: "Black Pepper", suitability: 5, water: "High", heat: "Low", shade: "High", performance: "5", note: "Only on shaded trunks near pond" },
  { crop: "Cardamom", suitability: 2, water: "Very high", heat: "Low", shade: "Very high", performance: "2", note: "Micro-shade bed only" },
  { crop: "Clove", suitability: 2, water: "Very high", heat: "Low", shade: "Very high", performance: "2", note: "Same constraint as Cardamom" },
  { crop: "Cinnamon", suitability: 3, water: "High", heat: "Low", shade: "High", performance: "3", note: "Marginal, same micro-shade bed" },
];

export const vegetables: CropEntry[] = [
  { crop: "Tomato", suitability: 7, water: "Medium", heat: "Medium", shade: "Low", performance: "7" },
  { crop: "Brinjal", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8" },
  { crop: "Okra", suitability: 9, water: "Medium", heat: "High", shade: "Low", performance: "9" },
  { crop: "Green Chilli", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8" },
  { crop: "Ridge Gourd", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8" },
  { crop: "Bottle Gourd", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8" },
  { crop: "Bitter Gourd", suitability: 8, water: "Medium", heat: "High", shade: "Low", performance: "8" },
  { crop: "Snake Gourd", suitability: 7, water: "Medium", heat: "High", shade: "Low", performance: "7" },
  { crop: "Cucumber", suitability: 7, water: "Medium", heat: "Medium", shade: "Low", performance: "7" },
  { crop: "Cluster Beans", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8" },
  { crop: "French Beans", suitability: 6, water: "Medium", heat: "Medium", shade: "Low", performance: "6 (best in winter)" },
  { crop: "Cowpea", suitability: 9, water: "Low", heat: "High", shade: "Low", performance: "9" },
];

export const rootsGreensPulses: CropEntry[] = [
  { crop: "Onion", suitability: 7, water: "Medium", heat: "Medium", shade: "Low", performance: "7" },
  { crop: "Garlic", suitability: 6, water: "Medium", heat: "Medium", shade: "Low", performance: "6" },
  { crop: "Ginger", suitability: 6, water: "High", heat: "Low", shade: "High", performance: "6 (needs shade bed)" },
  { crop: "Turmeric", suitability: 8, water: "Medium", heat: "Medium", shade: "Medium", performance: "8" },
  { crop: "Sweet Potato", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8" },
  { crop: "Colocasia", suitability: 6, water: "High", heat: "Medium", shade: "High", performance: "6" },
  { crop: "Spinach", suitability: 7, water: "Medium", heat: "Medium", shade: "Medium", performance: "7" },
  { crop: "Amaranthus", suitability: 9, water: "Low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Gongura", suitability: 9, water: "Low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Methi", suitability: 8, water: "Low", heat: "Medium", shade: "Low", performance: "8" },
  { crop: "Coriander", suitability: 7, water: "Low", heat: "Medium", shade: "Low", performance: "7 (bolts fast in heat)" },
  { crop: "Mint", suitability: 7, water: "High", heat: "Low", shade: "Medium", performance: "7" },
  { crop: "Malabar Spinach", suitability: 8, water: "Medium", heat: "Medium", shade: "Medium", performance: "8" },
  { crop: "Pigeon Pea", suitability: 9, water: "Very low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Green Gram", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8" },
  { crop: "Black Gram", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8" },
  { crop: "Chickpea", suitability: 6, water: "Low", heat: "Medium", shade: "Low", performance: "6 (winter only)" },
  { crop: "Groundnut", suitability: 8, water: "Low", heat: "High", shade: "Low", performance: "8" },
  { crop: "Soybean", suitability: 6, water: "Medium", heat: "Medium", shade: "Low", performance: "6" },
  { crop: "Ragi", suitability: 9, water: "Very low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Jowar", suitability: 9, water: "Very low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Bajra", suitability: 9, water: "Very low", heat: "High", shade: "Low", performance: "9" },
  { crop: "Sesame", suitability: 8, water: "Very low", heat: "High", shade: "Low", performance: "8" },
];

export const trialCards: TrialCard[] = [
  {
    title: "Apple",
    body: "Needs 800–1,200 chill hours; Tirupati gets almost none. One trial tree in the most-shaded corner, purely demonstrative.",
    substitute: "Guava + Sapota already cover the role heavily.",
  },
  {
    title: "Kiwi",
    body: "Temperate vine needing cool, humid, high-altitude conditions. Two trial vines on the pond-side trellis.",
    substitute: "Passion Fruit fills the same tart-vine niche and thrives here.",
  },
  {
    title: "Blueberry",
    body: "Needs acidic, cool, high-organic soil — incompatible with Rayalaseema's alkaline red soil and heat. No trial bed given.",
    substitute: "Jamun, a native antioxidant-rich fruit.",
  },
  {
    title: "Cardamom, Clove & Cinnamon",
    body: "Western-Ghats humid-tropical spices needing 2,000–3,000 mm rainfall and constant humidity. Grown only in the netted, pond-adjacent Zone D micro-shade bed. Treat yield as educational, not a real spice supply.",
  },
  {
    title: "Litchi",
    body: "Needs cool winter nights for flower induction; Tirupati's mild winters give poor, inconsistent fruiting. One trial tree in the coolest microclimate near the pond.",
  },
  {
    title: "Avocado",
    body: "Moderately marginal. Modern low-chill grafted varieties can fruit with heavy irrigation and afternoon shade. Two trees in Zone E under the drip line — treat as a bonus, not a reliable crop.",
  },
];

export interface PlantCountPair {
  crop: string;
  count: string;
}

export const plantCounts: PlantCountPair[] = [
  { crop: "Mango", count: "6" },
  { crop: "Guava", count: "4" },
  { crop: "Amla", count: "4" },
  { crop: "Coconut", count: "8" },
  { crop: "Sapota", count: "3" },
  { crop: "Drumstick", count: "6" },
  { crop: "Jackfruit", count: "2" },
  { crop: "Seethaphalam", count: "3" },
  { crop: "Fig", count: "2" },
  { crop: "Tamarind", count: "2" },
  { crop: "Ramphal", count: "2" },
  { crop: "Star Fruit", count: "2" },
  { crop: "Neem (windbreak)", count: "12" },
  { crop: "Litchi (trial)", count: "1" },
  { crop: "Jamun", count: "2" },
  { crop: "Tati Chettu", count: "2" },
  { crop: "Lemon", count: "4" },
  { crop: "Wood Apple", count: "2" },
  { crop: "Banana (clumps)", count: "20" },
  { crop: "Orange", count: "3" },
  { crop: "Papaya", count: "10" },
  { crop: "Bathayi", count: "3" },
  { crop: "Pomegranate", count: "4" },
  { crop: "Apple (trial)", count: "1" },
  { crop: "Avocado (trial)", count: "2" },
  { crop: "Curry Leaf", count: "6" },
  { crop: "Betel Leaf (vines)", count: "10" },
  { crop: "Black Pepper (vines)", count: "15" },
  { crop: "Cardamom (trial)", count: "20" },
  { crop: "Clove (trial)", count: "3" },
  { crop: "Cinnamon (trial)", count: "3" },
  { crop: "Grape", count: "4" },
  { crop: "Kiwi (trial)", count: "2" },
  { crop: "Passion Fruit", count: "6" },
  { crop: "Dragon Fruit (posts)", count: "15" },
  { crop: "Pineapple (clumps)", count: "100" },
  { crop: "Pigeon Pea (border row)", count: "~150" },
];

export interface BedAreaRow {
  category: string;
  area: string;
  note: string;
}

export const bedAreas: BedAreaRow[] = [
  { category: "Vegetables (all 12 types)", area: "4,200 sq ft", note: "Zone C, rotated 3 cycles/yr" },
  { category: "Grains / millets", area: "2,500 sq ft", note: "Zone B, 2 cycles/yr, rainfed + drip" },
  { category: "Pulses", area: "1,800 sq ft + border", note: "Intercropped between grains" },
  { category: "Groundnut + sesame", area: "1,000 sq ft", note: "1 cycle/yr" },
  { category: "Root crops", area: "1,500 sq ft", note: "Partial shade under Zone A/E canopy" },
  { category: "Greens", area: "1,000 sq ft", note: "Zone C edge, rotated every 25–30 days" },
  { category: "Sugarcane", area: "600 sq ft row", note: "1 cycle (12 months)" },
  { category: "Gourds / melons", area: "1,600 sq ft", note: "Zone C trellis" },
];
