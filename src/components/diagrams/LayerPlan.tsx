import { palette, layerTints } from "./palette";

const groundY = 500;
const SCALE = 5; // px per ft

interface PlanTree {
  x: number;
  hFt: number;
  r: number;
  fill: string;
  name: string;
}

const trees: PlanTree[] = [
  { x: 130, hFt: 60, r: 22, fill: layerTints.emergent, name: "Coconut" },
  { x: 330, hFt: 50, r: 20, fill: layerTints.emergent, name: "Tamarind" },
  { x: 530, hFt: 45, r: 20, fill: layerTints.emergent, name: "Jackfruit" },
  { x: 715, hFt: 40, r: 18, fill: layerTints.emergent, name: "Neem" },
  { x: 240, hFt: 35, r: 20, fill: layerTints.canopy, name: "Mango" },
  { x: 440, hFt: 30, r: 18, fill: layerTints.canopy, name: "Sapota" },
  { x: 640, hFt: 27, r: 17, fill: layerTints.canopy, name: "Jamun" },
  { x: 170, hFt: 20, r: 16, fill: layerTints.smallTree, name: "Guava" },
  { x: 370, hFt: 18, r: 15, fill: layerTints.smallTree, name: "Amla" },
  { x: 560, hFt: 14, r: 14, fill: layerTints.smallTree, name: "Pomegranate" },
  { x: 700, hFt: 12, r: 13, fill: layerTints.smallTree, name: "Drumstick" },
  { x: 250, hFt: 8, r: 10, fill: layerTints.shrub, name: "Curry Leaf" },
  { x: 440, hFt: 6, r: 9, fill: layerTints.shrub, name: "Pigeon Pea" },
  { x: 640, hFt: 5, r: 8, fill: layerTints.shrub, name: "Hibiscus" },
];

const bands = [
  { y: 100, h: 200, fill: "#0f1a3d", opacity: 0.5, name: "Layer 1 · Emergent", size: "40–80 ft · 25–30 ft spacing", color: layerTints.emergent, mid: 200 },
  { y: 300, h: 75, fill: "#1f4d2b", opacity: 0.5, name: "Layer 2 · Canopy", size: "25–40 ft · 20–25 ft spacing", color: layerTints.canopy, mid: 337 },
  { y: 375, h: 75, fill: "#3d6b2e", opacity: 0.5, name: "Layer 3 · Small trees", size: "10–25 ft · 10–15 ft spacing", color: layerTints.smallTree, mid: 412 },
  { y: 450, h: 35, fill: palette.turmeric, opacity: 0.22, name: "Layer 4 · Shrubs", size: "3–10 ft · 4–8 ft spacing", color: layerTints.shrub, mid: 467 },
  { y: 485, h: 15, fill: palette.laterite, opacity: 0.22, name: "Layer 5 · Ground & climbers", size: "0–10 ft · row / bed", color: layerTints.ground, mid: 492 },
];

const gridlines = [
  { ft: 10, y: 450 },
  { ft: 20, y: 400 },
  { ft: 30, y: 350 },
  { ft: 40, y: 300 },
  { ft: 50, y: 250 },
  { ft: 60, y: 200 },
  { ft: 80, y: 100 },
];

function Tree({ x, hFt, r, fill, name }: PlanTree) {
  const canopyCy = groundY - hFt * SCALE;
  const canopyRy = r * 0.85;
  return (
    <g>
      <line x1={x} y1={canopyCy} x2={x} y2={groundY} stroke={fill} strokeWidth={2} opacity={0.9} />
      <ellipse cx={x} cy={canopyCy} rx={r} ry={canopyRy} fill={fill} />
      <text x={x} y={canopyCy - r * 0.9 - 7} textAnchor="middle" fontSize={9.5} fill={palette.paper}>
        {name}
      </text>
      <text x={x} y={canopyCy - r * 0.9 + 6} textAnchor="middle" fontSize={8} fill={palette.turmeric}>
        {hFt} ft
      </text>
    </g>
  );
}

export function LayerPlan() {
  return (
    <svg
      className="diagram-svg"
      viewBox="0 0 1000 560"
      role="img"
      aria-label="Five-layer plan of the Subhash Palekar food forest. Layer 1 emergent 40 to 80 feet: coconut 60, tamarind 50, jackfruit 45, neem 40. Layer 2 canopy 25 to 40 feet: mango 35, sapota 30, jamun 27. Layer 3 small trees 10 to 25 feet: guava 20, amla 18, pomegranate 14, drumstick 12. Layer 4 shrubs 3 to 10 feet: curry leaf 8, pigeon pea 6, hibiscus 5. Layer 5 ground and climbers 0 to 10 feet with turmeric, ginger, vegetables, gourds, greens and groundnut."
      style={{ fontFamily: "var(--mono)" }}
    >
      {gridlines.map((g) => (
        <g key={g.ft}>
          <line x1={52} y1={g.y} x2={810} y2={g.y} stroke={palette.canopyLine} strokeWidth={0.75} strokeDasharray="2 4" />
          <text x={48} y={g.y + 3} textAnchor="end" fontSize={9} fill={palette.paperDim}>
            {g.ft} ft
          </text>
        </g>
      ))}

      {bands.map((b) => (
        <g key={b.name}>
          <rect x={0} y={b.y} width={1000} height={b.h} fill={b.fill} opacity={b.opacity} />
          <rect x={830} y={b.mid - 6} width={12} height={12} rx={2} fill={b.color} />
          <text x={850} y={b.mid + 1} fontSize={11} fontWeight="600" fill={palette.paper}>
            {b.name}
          </text>
          <text x={850} y={b.mid + 15} fontSize={9} fill={palette.paperDim}>
            {b.size}
          </text>
        </g>
      ))}

      {trees.map((t) => (
        <Tree key={t.name} {...t} />
      ))}

      <text x={380} y={497} textAnchor="middle" fontSize={8} fill={palette.paperDim}>
        Turmeric · Ginger · Vegetables · Gourds · Greens · Groundnut
      </text>

      <line x1={0} y1={groundY} x2={1000} y2={groundY} stroke={palette.paperDim} strokeWidth={2} />
      <text x={20} y={groundY + 22} fontSize={9} fill={palette.paperDim}>
        GROUND LEVEL
      </text>
    </svg>
  );
}
