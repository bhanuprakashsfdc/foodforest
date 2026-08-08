import { palette, layerTints } from "./palette";

interface TreeSpec {
  x: number;
  hFt: number;
  r: number;
  fill: string;
  label: string;
}

const trees: TreeSpec[] = [
  { x: 85, hFt: 55, r: 23, fill: layerTints.emergent, label: "Coconut" },
  { x: 175, hFt: 50, r: 20, fill: layerTints.emergent, label: "Tamarind" },
  { x: 265, hFt: 45, r: 20, fill: layerTints.emergent, label: "Jackfruit" },
  { x: 365, hFt: 38, r: 20, fill: layerTints.canopy, label: "Mango" },
  { x: 452, hFt: 33, r: 18, fill: layerTints.canopy, label: "Sapota" },
  { x: 545, hFt: 22, r: 18, fill: layerTints.smallTree, label: "Guava" },
  { x: 630, hFt: 16, r: 15, fill: layerTints.smallTree, label: "Pomegranate" },
  { x: 705, hFt: 7, r: 11, fill: layerTints.shrub, label: "Curry leaf" },
];

const groundY = 460;
const GROUND_NAMES = ["Turmeric", "Ginger", "Vegetables", "Gourds", "Greens", "Groundnut"];

const bands = [
  { y: 60, h: 200, fill: "#0f1a3d", opacity: 0.5, label: "Layer 1 · Emergent", color: layerTints.emergent },
  { y: 260, h: 75, fill: "#1f4d2b", opacity: 0.5, label: "Layer 2 · Canopy", color: layerTints.canopy },
  { y: 335, h: 75, fill: "#3d6b2e", opacity: 0.5, label: "Layer 3 · Small trees", color: layerTints.smallTree },
  { y: 410, h: 35, fill: palette.turmeric, opacity: 0.22, label: "Layer 4 · Shrubs", color: layerTints.shrub },
  { y: 445, h: 15, fill: palette.laterite, opacity: 0.22, label: "Layer 5 · Ground", color: layerTints.ground },
];

const gridlines = [
  { ft: 10, y: 410 },
  { ft: 20, y: 360 },
  { ft: 30, y: 310 },
  { ft: 40, y: 260 },
  { ft: 60, y: 160 },
];

function Tree({ x, hFt, r, fill }: TreeSpec) {
  const canopyCy = groundY - hFt * 5;
  return (
    <g>
      <line x1={x} y1={canopyCy} x2={x} y2={groundY} stroke={fill} strokeWidth={2} opacity={0.9} />
      <ellipse cx={x} cy={canopyCy} rx={r} ry={r * 0.85} fill={fill} />
    </g>
  );
}

export function LayerProfile() {
  return (
    <svg
      className="diagram-svg"
      viewBox="0 0 900 500"
      role="img"
      aria-label="Cross-section profile of the five planting layers: emergent (40–80 ft) with coconut, tamarind and jackfruit; canopy (25–40 ft) with mango and sapota; small trees (10–25 ft) with guava and pomegranate; shrubs (3–10 ft) with curry leaf; and the ground layer holding turmeric, ginger, vegetables, gourds, greens and groundnut."
      style={{ fontFamily: "var(--mono)" }}
    >
      {gridlines.map((g) => (
        <g key={g.ft}>
          <line x1={48} y1={g.y} x2={720} y2={g.y} stroke={palette.canopyLine} strokeWidth={0.75} strokeDasharray="2 4" />
          <text x={44} y={g.y + 3} textAnchor="end" fontSize={9} fill={palette.paperDim}>
            {g.ft} ft
          </text>
        </g>
      ))}

      {bands.map((b) => (
        <g key={b.label}>
          <rect x={20} y={b.y} width={900} height={b.h} fill={b.fill} opacity={b.opacity} />
          <rect x={750} y={b.y + b.h / 2 - 6} width={10} height={10} rx={2} fill={b.color} />
          <text x={768} y={b.y + b.h / 2 + 3} fontSize={11} fill={palette.paperDim}>
            {b.label}
          </text>
        </g>
      ))}

      {trees.map((t) => (
        <Tree key={t.label} {...t} />
      ))}

      {trees.map((t) => (
        <text key={t.label} x={t.x} y={groundY + 16} textAnchor="middle" fontSize={9} fill={palette.paperDim}>
          {t.label}
        </text>
      ))}

      {GROUND_NAMES.map((name, i) => (
        <g key={name}>
          <circle cx={120 + i * 105} cy={groundY - 3} r={4} fill={layerTints.ground} />
          <text x={120 + i * 105} y={groundY - 12} textAnchor="middle" fontSize={8} fill={palette.paperDim}>
            {name}
          </text>
        </g>
      ))}

      <line x1={20} y1={groundY} x2={900} y2={groundY} stroke={palette.paperDim} strokeWidth={2} />
      <text x={20} y={groundY + 30} fontSize={9} fill={palette.paperDim}>
        GROUND LEVEL
      </text>
    </svg>
  );
}
