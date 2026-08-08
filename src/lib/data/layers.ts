export interface LayerCrop {
  name: string;
  /** Parenthetical label rendered in <em>, e.g. "trial" or "trial only". */
  trial?: string;
  /** Plain parenthetical note rendered after the name, e.g. "Palmyra". */
  note?: string;
}

export interface Layer {
  bandIndex: number;
  name: string;
  color: string;
  textColor: string;
  /** Combined display string for the list view. */
  height: string;
  /** Numeric height range for the plan/table views, e.g. "40–80 ft". */
  heightFt: string;
  /** Plant spacing for the plan/table views, e.g. "25–30 ft". */
  spacing: string;
  meta: string;
  crops: LayerCrop[];
}

export function layerCropsText(layer: Layer): string {
  return layer.crops
    .map(
      (c) => `${c.name}${c.trial ? ` (${c.trial})` : ""}${c.note ? ` (${c.note})` : ""}`
    )
    .join(", ");
}

export const layers: Layer[] = [
  {
    bandIndex: 0,
    name: "Emergent",
    color: "#0f1a3d",
    textColor: "#e7ecff",
    height: "40–80 ft tall · 25–30 ft spacing", heightFt: "40–80 ft", spacing: "25–30 ft",
    meta: "The wind-breaking, sky-reaching top tier",
    crops: [
      { name: "Coconut" },
      { name: "Tamarind" },
      { name: "Neem" },
      { name: "Jackfruit" },
      { name: "Tati Chettu", note: "Palmyra" },
    ],
  },
  {
    bandIndex: 1,
    name: "Canopy",
    color: "#1f4d2b",
    textColor: "#eaf5e4",
    height: "25–40 ft tall · 20–25 ft spacing", heightFt: "25–40 ft", spacing: "20–25 ft",
    meta: "Main fruiting canopy",
    crops: [
      { name: "Mango" },
      { name: "Sapota" },
      { name: "Jamun" },
      { name: "Wood Apple" },
      { name: "Avocado", trial: "trial" },
    ],
  },
  {
    bandIndex: 2,
    name: "Small trees",
    color: "#3d6b2e",
    textColor: "#f3f9ec",
    height: "10–25 ft tall · 10–15 ft spacing", heightFt: "10–25 ft", spacing: "10–15 ft",
    meta: "The everyday-harvest tier",
    crops: [
      { name: "Guava" },
      { name: "Pomegranate" },
      { name: "Amla" },
      { name: "Fig" },
      { name: "Star Fruit" },
      { name: "Seethaphalam", note: "Custard Apple" },
      { name: "Ramphal" },
      { name: "Litchi", trial: "trial" },
      { name: "Drumstick" },
      { name: "Lemon" },
      { name: "Orange" },
      { name: "Bathayi" },
      { name: "Papaya" },
      { name: "Banana" },
      { name: "Apple", trial: "trial only" },
    ],
  },
  {
    bandIndex: 3,
    name: "Shrubs",
    color: "#d9a441",
    textColor: "#26200a",
    height: "3–10 ft tall · 4–8 ft spacing", heightFt: "3–10 ft", spacing: "4–8 ft",
    meta: "Kitchen-reach flavor and shade plants",
    crops: [
      { name: "Curry Leaf" },
      { name: "Cardamom", trial: "trial" },
      { name: "Clove", trial: "trial" },
      { name: "Cinnamon", trial: "trial" },
      { name: "Pigeon Pea" },
      { name: "Hibiscus", note: "living-fence filler" },
    ],
  },
  {
    bandIndex: 4,
    name: "Ground & climbers",
    color: "#b5472b",
    textColor: "#fff3ec",
    height: "0–10 ft, climbers trained to 15–20 ft · row/bed spacing", heightFt: "0–10 ft", spacing: "row / bed",
    meta: "Everything planted or trellised at soil level",
    crops: [
      { name: "All vegetables" },
      { name: "gourds" },
      { name: "greens" },
      { name: "pulses", note: "except Pigeon Pea" },
      { name: "millets" },
      { name: "groundnut" },
      { name: "sesame" },
      { name: "soybean" },
      { name: "Onion" },
      { name: "Garlic" },
      { name: "Ginger" },
      { name: "Turmeric" },
      { name: "Sweet Potato" },
      { name: "Colocasia" },
      { name: "Grape" },
      { name: "Kiwi", trial: "trial" },
      { name: "Passion Fruit" },
      { name: "Dragon Fruit" },
      { name: "Black Pepper", note: "climbs Layer 1–2 trunks" },
      { name: "Betel Leaf" },
      { name: "Sugarcane" },
      { name: "Muskmelon" },
      { name: "Watermelon" },
      { name: "Pumpkin" },
      { name: "Cucumber" },
    ],
  },
];
