import { palette, layerTints } from "./palette";

interface ZoneBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  accent?: string;
  title: string;
  note: string;
  sub?: string;
  sub2?: string;
}

const zoneBlocks: ZoneBlock[] = [
  {
    x: 40,
    y: 150,
    w: 180,
    h: 150,
    fill: palette.soil,
    title: "Cow shed · 20×15 ft",
    note: "Storage shed 15×15 ft",
  },
  {
    x: 240,
    y: 150,
    w: 180,
    h: 150,
    fill: palette.soil,
    title: "Compost / Jeevamruth / Beejamruth",
    note: "Pit area · 30 × 20 ft",
  },
  {
    x: 470,
    y: 150,
    w: 250,
    h: 150,
    fill: palette.canopySoft,
    accent: palette.turmeric,
    title: "Zone A — NE Orchard",
    note: "50 × 90 ft",
    sub: "Mango · Sapota · Guava · Custard Apple",
    sub2: "understory: turmeric · ginger · greens",
  },
  {
    x: 40,
    y: 352,
    w: 230,
    h: 150,
    fill: palette.canopySoft,
    accent: palette.laterite,
    title: "Zone B — Grain & Pulse Beds",
    note: "60 × 70 ft",
    sub: "Ragi · Jowar · Bajra · Pigeon Pea",
    sub2: "Groundnut · Soybean · Gram",
  },
  {
    x: 470,
    y: 352,
    w: 250,
    h: 150,
    fill: palette.canopySoft,
    accent: palette.laterite,
    title: "Zone C — Vegetable & Gourd Trellis",
    note: "Daily beds + trellis",
    sub: "Ridge · Bottle · Bitter · Snake Gourd",
    sub2: "Cucumber · daily-use vegetables",
  },
  {
    x: 40,
    y: 532,
    w: 230,
    h: 146,
    fill: palette.canopySoft,
    accent: palette.turmeric,
    title: "Zone E — SW Orchard",
    note: "70 × 90 ft",
    sub: "Jackfruit · Pomegranate · Amla · Fig",
    sub2: "Jamun · Wood Apple · Star Fruit · Drumstick · Avocado-trial",
  },
  {
    x: 300,
    y: 532,
    w: 150,
    h: 116,
    fill: palette.canopySoft,
    accent: palette.turmeric,
    title: "Zone D — Spice Micro-shade",
    note: "30 × 40 ft · netted",
    sub: "Cardamom · Clove · Cinnamon",
    sub2: "Black Pepper on live standards",
  },
  {
    x: 470,
    y: 532,
    w: 250,
    h: 146,
    fill: palette.canopySoft,
    accent: palette.laterite,
    title: "Zone F — Vine & Climber Row",
    note: "Grape · Passion Fruit · Dragon Fruit posts",
    sub: "Kiwi-trial · Betel Leaf",
    sub2: "climbers on live support trees",
  },
];

function Zone({ x, y, w, h, fill, accent, title, note, sub, sub2 }: ZoneBlock) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={palette.canopyLine} strokeWidth={1} />
      {accent && <line x1={x + 10} y1={y} x2={x + 10} y2={y + h} stroke={accent} strokeWidth={3} />}
      <text x={x + w / 2} y={y + 24} textAnchor="middle" fontSize={12.5} fontWeight="600" fill={palette.paper}>
        {title}
      </text>
      <text x={x + w / 2} y={y + 40} textAnchor="middle" fontSize={10} fill={palette.turmeric}>
        {note}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 56} textAnchor="middle" fontSize={9.5} fill={palette.paperDim}>
          {sub}
        </text>
      )}
      {sub2 && (
        <text x={x + w / 2} y={y + 70} textAnchor="middle" fontSize={9.5} fill={palette.paperDim}>
          {sub2}
        </text>
      )}
    </g>
  );
}

const emergentXs = Array.from({ length: 11 }, (_, i) => 55 + i * 65);

const windbreakTop = Array.from({ length: 18 }, (_, i) => 42 + i * 40);
const windbreakBottom = Array.from({ length: 18 }, (_, i) => 42 + i * 40);
const windbreakLeft = Array.from({ length: 15 }, (_, i) => 68 + i * 40);
const windbreakRight = Array.from({ length: 15 }, (_, i) => 68 + i * 40);

interface LegendItemProps {
  x: number;
  y: number;
  label: string;
  render: (x: number, y: number) => React.ReactNode;
}

function LegendItem({ x, y, label, render }: LegendItemProps) {
  return (
    <g>
      {render(x, y)}
      <text x={x + 14} y={y + 4} fontSize={10} fill={palette.paperDim}>
        {label}
      </text>
    </g>
  );
}

export function FarmMap() {
  return (
    <svg
      className="diagram-svg"
      viewBox="0 0 760 760"
      role="img"
      aria-label="Top-view schematic of the 220 by 198 foot plot: windbreak perimeter, emergent tree belt, Zone A NE orchard, cow shed, compost pit, Zone B grain beds, central farm pond, Zone C vegetable trellis, Zone D spice micro-shade bed, Zone E SW orchard, and Zone F vine row, connected by a farm road."
      style={{ fontFamily: "var(--mono)" }}
    >
      <text x={380} y={42} textAnchor="middle" fontSize={11} fill={palette.paperDim}>
        NORTH (220 ft)
      </text>
      <text x={380} y={706} textAnchor="middle" fontSize={11} fill={palette.paperDim}>
        SOUTH
      </text>
      <text x={750} y={395} textAnchor="middle" fontSize={11} fill={palette.paperDim} transform="rotate(90 750 395)">
        EAST (198 ft)
      </text>
      <text x={10} y={395} textAnchor="middle" fontSize={11} fill={palette.paperDim} transform="rotate(-90 10 395)">
        WEST
      </text>

      <rect x={24} y={50} width={712} height={640} rx={6} fill={palette.canopyDark} stroke={palette.canopyLine} strokeWidth={1.5} />

      <rect x={34} y={60} width={692} height={620} rx={4} fill="none" stroke={palette.canopyLine} strokeWidth={1} strokeDasharray="3 3" />

      {windbreakTop.map((x) => (
        <circle key={`t${x}`} cx={x} cy={50} r={2.5} fill={layerTints.canopy} />
      ))}
      {windbreakBottom.map((x) => (
        <circle key={`b${x}`} cx={x} cy={690} r={2.5} fill={layerTints.canopy} />
      ))}
      {windbreakLeft.map((y) => (
        <circle key={`l${y}`} cx={24} cy={y} r={2.5} fill={layerTints.canopy} />
      ))}
      {windbreakRight.map((y) => (
        <circle key={`r${y}`} cx={736} cy={y} r={2.5} fill={layerTints.canopy} />
      ))}

      <text x={380} y={92} textAnchor="middle" fontSize={11} fill={palette.paperDim}>
        Layer 1 Emergent Belt — Coconut · Tamarind · Jackfruit (25 ft grid)
      </text>
      {emergentXs.map((x) => (
        <g key={`e${x}`}>
          <line x1={x} y1={118} x2={x} y2={132} stroke={layerTints.emergent} strokeWidth={1.5} />
          <circle cx={x} cy={112} r={6} fill={layerTints.emergent} />
        </g>
      ))}

      {zoneBlocks.map((zone) => (
        <Zone key={zone.title} {...zone} />
      ))}

      <rect x={300} y={362} width={150} height={130} rx={8} fill={palette.pond} opacity={0.85} stroke={palette.pondDim} strokeWidth={1.5} />
      <text x={375} y={414} textAnchor="middle" fontSize={13} fontWeight="600" fill={palette.paper}>
        Farm Pond
      </text>
      <text x={375} y={430} textAnchor="middle" fontSize={9.5} fill={palette.paper}>
        40 × 50 × 6 ft · ≈3.4 lakh L
      </text>
      <text x={375} y={446} textAnchor="middle" fontSize={9} fill={palette.paper} opacity={0.9}>
        recharge trench ring
      </text>

      <rect x={24} y={312} width={712} height={18} fill={palette.road} />
      <rect x={24} y={502} width={712} height={18} fill={palette.road} />
      <rect x={274} y={330} width={16} height={172} fill={palette.road} />
      <text x={36} y={324} fontSize={9} fill={palette.paper} opacity={0.85}>
        farm road
      </text>

      <LegendItem x={60} y={736} label="Emergent / canopy trees" render={(x, y) => <circle cx={x} cy={y} r={5} fill={layerTints.emergent} />} />
      <LegendItem x={210} y={736} label="Orchard / crop zones" render={(x, y) => <rect x={x - 6} y={y - 5} width={10} height={10} rx={2} fill={palette.canopySoft} stroke={palette.canopyLine} />} />
      <LegendItem x={360} y={736} label="Farm pond" render={(x, y) => <rect x={x - 6} y={y - 5} width={10} height={10} rx={2} fill={palette.pond} />} />
      <LegendItem x={470} y={736} label="Sheds / compost" render={(x, y) => <rect x={x - 6} y={y - 5} width={10} height={10} rx={2} fill={palette.soil} />} />
      <LegendItem x={590} y={736} label="6 ft farm road" render={(x, y) => <rect x={x - 6} y={y - 3} width={10} height={6} rx={1} fill={palette.road} />} />
    </svg>
  );
}
