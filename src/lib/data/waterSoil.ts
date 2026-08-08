export interface StatDatum {
  figure: string;
  label: string;
}

export interface DemandRow {
  layer: string;
  basis: string;
  demand: string;
  total?: boolean;
}

export interface SoilCard {
  title: string;
  body: string;
}

export const waterStats: StatDatum[] = [
  { figure: "950mm", label: "Avg. annual rainfall" },
  { figure: "3.4 lakh L", label: "Pond capacity" },
  { figure: "~20–21 lakh L", label: "Total annual demand" },
];

export const rwhIntro =
  "Tirupati averages ~950 mm/yr, roughly 65% of it falling Oct–Dec in the NE monsoon. Across 43,560 sq ft that's roughly 12–14 lakh liters of rain landing on the plot each year. SPNF's mulch-heavy beds push most of that straight into infiltration, so the pond and perimeter trenches are sized to catch the excess runoff, not the whole rainfall:";

export const rwhItems: { lead: string; rest: string }[] = [
  {
    lead: "Farm pond",
    rest: "— 40 × 50 × 6 ft = 12,000 cu ft ≈ 3.4 lakh liters, fed by land-catchment runoff, doubling as dry-season irrigation buffer (Jan–Jun).",
  },
  {
    lead: "Perimeter + pond-ring recharge trenches",
    rest: "— 2 ft × 2 ft, ~450 running ft total ≈ 1,800 cu ft of additional infiltration buffer.",
  },
];

export const demandRows: DemandRow[] = [
  {
    layer: "Trees (410 plants)",
    basis: "Blended ~20 L/day avg. (Neem, Tamarind, Drumstick, Wood Apple, Palmyra need almost none once established)",
    demand: "~15 lakh L/yr",
  },
  {
    layer: "Annual/vegetable beds (~12,200 sq ft)",
    basis: "~4–6 L/sq ft/season × 3 cycles",
    demand: "~5–6 lakh L/yr",
  },
  {
    layer: "Total",
    basis: "—",
    demand: "~20–21 lakh L/yr (~5,500–5,800 L/day averaged, far higher Mar–Jun, near-zero in heavy monsoon weeks)",
    total: true,
  },
];

export const supplyGapNote =
  "Supply gap: Pond + monsoon recharge covers roughly 15–20% of annual demand directly. The rest needs a borewell feeding the drip system — standard for a 1-acre SPNF plot in Rayalaseema, and assumed available per the brief.";

export interface DripRow {
  component: string;
  spec: string;
}

export const dripRows: DripRow[] = [
  {
    component: "Header tank",
    spec: "On an 8 ft stand; fed by borewell top-up; gravity feeds all 3 drip sub-mains.",
  },
  {
    component: "Sub-main 1 — Zone A/E trees",
    spec: "2 pressure-compensating drippers (4 LPH) per tree, ring-placed at the drip line, moved outward as the canopy grows.",
  },
  {
    component: "Sub-main 2 — Zone B/C beds",
    spec: "16mm inline drip laterals, 12\" emitter spacing, 1 lateral per 2 ft of bed width.",
  },
  {
    component: "Sub-main 3 — Zone D/F specialty",
    spec: "Netted spice micro-shade bed and vine/climber rows on a dedicated line.",
  },
  {
    component: "Fertigation line",
    spec: "A dedicated filtered line lets diluted Jeevamrutham run through the same drip network.",
  },
  {
    component: "Recharge trenches",
    spec: "Perimeter + pond-ring trenches: 2 ft × 2 ft, ~450 running ft ≈ 1,800 cu ft of infiltration buffer.",
  },
  {
    component: "Farm pond",
    spec: "40 × 50 × 6 ft ≈ 3.4 lakh L; doubles as the dry-season irrigation buffer (Jan–Jun).",
  },
];

export const soilCards: SoilCard[] = [
  {
    title: "Jeevamrutham",
    body: "200 L cow dung + 200 L cow urine + 2 kg jaggery + 2 kg besan + a handful of undisturbed soil per 200 L drum, fermented 48–72 hrs. Applied every 7–10 days to active beds; trees every 15 days while establishing (yrs 1–3), then monthly once mature.",
  },
  {
    title: "Beejamrutham",
    body: "Cow dung + cow urine + lime + soil slurry, used as a root/seed dip before every single planting or sowing — non-negotiable under SPNF, whatever the crop.",
  },
  {
    title: "Mulching (Acchadana)",
    body: "Three layers: live soil mulch from cover crops, 2–3\" straw/residue mulch on every bed, and biomass mulch from on-farm pruning. A thin Glyricidia hedge inside the boundary is worth adding purely as a chop-and-drop mulch source.",
  },
  {
    title: "Compost / Ghanajeevamrutham",
    body: "The 30×20 ft pit cycles ~2–3 tonnes of compost every 4 months from crop residue, banana pseudostem, pond silt and dung — applied at every new sowing or planting.",
  },
];

export const soilStats: StatDatum[] = [
  { figure: "~4,000 kg/yr", label: "Cow dung — 1 indigenous cow" },
  { figure: "~2,500–3,500 L/yr", label: "Cow urine — 1 indigenous cow" },
];

export const soilNote =
  "One indigenous cow (Ongole/Deoni type) covers the full Jeevamrutham/Ghanajeevamrutham schedule for the whole acre, with margin left for Neemastram and Agniastram pest sprays.";
