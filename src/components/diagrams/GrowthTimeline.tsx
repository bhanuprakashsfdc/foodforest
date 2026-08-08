import { palette, layerTints } from "./palette";

interface StageTree {
  cx: number;
  r: number;
  trunkH: number;
  fill: string;
}

interface Stage {
  year: string;
  caption: string[];
  trees: StageTree[];
}

const PANEL_W = 200;
const groundY = 290;

const stages: Stage[] = [
  {
    year: "Year 1",
    caption: ["saplings at", "final spacing"],
    trees: [{ cx: 100, r: 9, trunkH: 18, fill: layerTints.smallTree }],
  },
  {
    year: "Year 3",
    caption: ["small canopy", "begins"],
    trees: [
      { cx: 82, r: 12, trunkH: 28, fill: layerTints.smallTree },
      { cx: 118, r: 12, trunkH: 24, fill: layerTints.canopy },
    ],
  },
  {
    year: "Year 5",
    caption: ["canopy filling in", "understory shade starts"],
    trees: [
      { cx: 76, r: 15, trunkH: 36, fill: layerTints.canopy },
      { cx: 104, r: 16, trunkH: 40, fill: layerTints.smallTree },
      { cx: 132, r: 14, trunkH: 32, fill: layerTints.canopy },
    ],
  },
  {
    year: "Year 10",
    caption: ["full canopy closure", "Layer 4/5 shift to", "shade-tolerant mix"],
    trees: [
      { cx: 68, r: 19, trunkH: 48, fill: layerTints.canopy },
      { cx: 96, r: 20, trunkH: 54, fill: layerTints.smallTree },
      { cx: 124, r: 19, trunkH: 46, fill: layerTints.canopy },
      { cx: 152, r: 18, trunkH: 42, fill: layerTints.shrub },
    ],
  },
];

function StageTree({ tree }: { tree: StageTree }) {
  const canopyCy = groundY - tree.trunkH;
  return (
    <g>
      <line x1={tree.cx} y1={canopyCy} x2={tree.cx} y2={groundY} stroke={tree.fill} strokeWidth={2} opacity={0.9} />
      <ellipse cx={tree.cx} cy={canopyCy} rx={tree.r} ry={tree.r * 0.85} fill={tree.fill} />
    </g>
  );
}

export function GrowthTimeline() {
  return (
    <svg
      className="diagram-svg"
      viewBox="0 0 900 340"
      role="img"
      aria-label="Growth timeline showing canopy closure from year 1 to year 10: isolated saplings, then a small canopy by year 3, canopy filling in with understory shade by year 5, and full canopy closure by year 10 when the ground layer shifts to shade-tolerant crops."
      style={{ fontFamily: "var(--mono)" }}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill={palette.paperDim} />
        </marker>
      </defs>

      {stages.map((stage, i) => {
        const x = 20 + i * (PANEL_W + 20);
        return (
          <g key={stage.year}>
            <rect x={x} y={40} width={PANEL_W} height={250} rx={8} fill={palette.canopySoft} stroke={palette.canopyLine} strokeWidth={1} />
            <text x={x + PANEL_W / 2} y={64} textAnchor="middle" fontSize={13} fontWeight="600" fill={palette.turmeric}>
              {stage.year}
            </text>
            <line x1={x + 30} y1={groundY} x2={x + PANEL_W - 30} y2={groundY} stroke={palette.canopyLine} strokeWidth={1.5} />
            {stage.trees.map((tree, j) => (
              <g key={j} transform={`translate(${x},0)`}>
                <StageTree tree={tree} />
              </g>
            ))}
            {stage.caption.map((line, k) => (
              <text key={line} x={x + PANEL_W / 2} y={252 + k * 13} textAnchor="middle" fontSize={9.5} fill={palette.paperDim}>
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {[0, 1, 2].map((i) => {
        const from = 20 + i * (PANEL_W + 20) + PANEL_W;
        const to = from + 20;
        return (
          <line key={i} x1={from} y1={165} x2={to} y2={165} stroke={palette.paperDim} strokeWidth={1.5} markerEnd="url(#arrow)" />
        );
      })}
    </svg>
  );
}
