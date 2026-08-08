export interface Zone {
  num: string;
  title: string;
  location: string;
  size: string;
  desc: string;
}

export const zones: Zone[] = [
  {
    num: "Boundary",
    title: "Windbreak",
    location: "Full perimeter",
    size: "15 ft spacing",
    desc: "Neem / Tamarind / Coconut — cuts the hot, dry NW summer wind that drives up evapotranspiration inside the plot.",
  },
  {
    num: "Center",
    title: "Farm pond",
    location: "Natural low point",
    size: "40 × 50 × 6 ft (≈2,000 sq ft, ~3.4 lakh L)",
    desc: "Placed at the plot's natural low point so every zone drains toward it.",
  },
  {
    num: "Zone A",
    title: "NE orchard",
    location: "North-east",
    size: "50 × 90 ft",
    desc: "Mango, Sapota, Guava, Custard Apple with a turmeric/ginger/greens understory.",
  },
  {
    num: "Zone B",
    title: "Grain & pulse beds",
    location: "West, below cow shed",
    size: "60 × 70 ft",
    desc: "Ragi, Jowar, Bajra rotated with Pigeon Pea, Groundnut, Soybean, Gram.",
  },
  {
    num: "Zone C",
    title: "Vegetable & gourd trellis",
    location: "East",
    size: "Daily beds + trellis",
    desc: "Ridge/Bottle/Bitter/Snake Gourd, Cucumber and the daily-use vegetable beds.",
  },
  {
    num: "Zone D",
    title: "Spice micro-shade bed",
    location: "Pond-adjacent, south",
    size: "30 × 40 ft (netted)",
    desc: "The only spot on the plot humid enough to attempt Cardamom, Clove and Cinnamon.",
  },
  {
    num: "Zone E",
    title: "SW orchard",
    location: "South-west",
    size: "70 × 90 ft",
    desc: "Jackfruit, Pomegranate, Amla, Fig, Jamun, Wood Apple, Star Fruit, Drumstick, and trial Avocado.",
  },
  {
    num: "Zone F",
    title: "Vine & climber row",
    location: "South-east",
    size: "Row",
    desc: "Grape, Passion Fruit, Dragon Fruit posts, trial Kiwi, Betel Leaf on live support trees.",
  },
  {
    num: "Service",
    title: "Cow shed & compost pit",
    location: "Entrance, north",
    size: "20×15 ft + 15×15 ft; pit 30×20 ft",
    desc: "Near the entrance for a short haul distance to every zone.",
  },
];

export interface GrowthStage {
  year: string;
  milestone: string;
  priority: string;
}

export const growthStages: GrowthStage[] = [
  {
    year: "Year 1",
    milestone: "Saplings go in at final spacing; plot is open scrub with a young windbreak.",
    priority: "Windbreak, pond, and cow shed first — everything downstream depends on wind protection and water.",
  },
  {
    year: "Year 3",
    milestone: "Small canopy begins; early fruit from Layer 3 trees (banana, papaya, guava).",
    priority: "Zones B and C carry the household while trees are too young to bear.",
  },
  {
    year: "Year 5",
    milestone: "Canopy filling in; understory shade starts across the orchard blocks.",
    priority: "Layer 1–2 trees begin bearing (mango, coconut, jackfruit); thin and prune as the canopy grows.",
  },
  {
    year: "Year 10",
    milestone: "Full canopy closure — Layer 4/5 crops shift to a shade-tolerant mix.",
    priority: "Rebalance the ground layer toward turmeric, ginger, colocasia, malabar spinach over sun-lovers.",
  },
];

export const growthNote =
  "Years 1–3 lean on Zones B and C for food, since fruiting trees take 3–5 years to bear. By year 10, canopy shade is established enough that the ground layer needs rebalancing toward shade-tolerant crops (turmeric, ginger, colocasia, malabar spinach) over sun-lovers.";
