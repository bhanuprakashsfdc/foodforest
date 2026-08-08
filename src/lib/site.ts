export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "Tirupati Food Forest",
  plot: "220 × 198 ft (43,560 sq ft) · Tirupati, Rayalaseema, Andhra Pradesh · SPNF five-layer model, 1 indigenous cow",
  disclaimer:
    "Design reference document — verify spacing, water volumes, and yield estimates on-site before construction. Not agronomic or engineering advice.",
};

export const primaryNav: NavLink[] = [
  { label: "Overview", href: "/" },
  { label: "Master Plan", href: "/master-plan" },
  { label: "Five Layers", href: "/five-layers" },
  { label: "Crop Directory", href: "/crop-directory" },
  { label: "Harvest", href: "/harvest-calendar" },
  { label: "Water & Soil", href: "/water-soil" },
  { label: "Self-Sufficiency", href: "/self-sufficiency" },
];

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Site",
    links: [primaryNav[0], primaryNav[1], primaryNav[2]],
  },
  {
    title: "Reference",
    links: [primaryNav[3], primaryNav[4], primaryNav[5], primaryNav[6]],
  },
];
