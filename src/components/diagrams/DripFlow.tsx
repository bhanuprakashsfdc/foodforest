import { palette, layerTints } from "./palette";

interface FlowBox {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  fill?: string;
}

function FlowBox({ x, y, w, h, title, sub, fill = palette.canopySoft }: FlowBox) {
  const titleY = sub ? y + h / 2 - 5 : y + h / 2 + 4;
  const subY = y + h / 2 + 12;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={palette.canopyLine} strokeWidth={1} />
      <text x={x + w / 2} y={titleY} textAnchor="middle" fontSize={11} fontWeight="600" fill={palette.paper}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={subY} textAnchor="middle" fontSize={9.5} fill={palette.paperDim}>
          {sub}
        </text>
      )}
    </g>
  );
}

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function Arrow({ x1, y1, x2, y2 }: ArrowProps) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={palette.paperDim} strokeWidth={1.5} markerEnd="url(#flow-arrow)" />;
}

const subMains = [
  {
    x: 60,
    title: "Zone A/E — trees",
    sub: "2 drippers/tree · 4 LPH · ring at drip line",
  },
  {
    x: 340,
    title: "Zone B/C — beds",
    sub: "16 mm laterals · 12\" emitter spacing",
  },
  {
    x: 620,
    title: "Zone D/F — specialty",
    sub: "micro-shade bed + vine/climber rows",
  },
];

export function DripFlow() {
  return (
    <svg
      className="diagram-svg"
      viewBox="0 0 900 620"
      role="img"
      aria-label="Water flow diagram: rain is caught by the boundary windbreak, filtered through perimeter and pond-ring recharge trenches into the soil, and captured by the farm pond along with land-catchment runoff. A borewell tops up a header tank that feeds three drip sub-mains for tree, bed, and specialty zones, with Jeevamrutham fertigation blended into the drip line."
      style={{ fontFamily: "var(--mono)" }}
    >
      <defs>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill={palette.paperDim} />
        </marker>
      </defs>

      <g>
        <ellipse cx={280} cy={36} rx={42} ry={16} fill={palette.pondDim} opacity={0.9} />
        <ellipse cx={318} cy={30} rx={34} ry={13} fill={palette.pondDim} opacity={0.9} />
        <ellipse cx={300} cy={40} rx={56} ry={14} fill={palette.pond} opacity={0.9} />
        <text x={300} y={70} textAnchor="middle" fontSize={10.5} fill={palette.paperDim}>
          RAIN (Oct–Dec · ~950 mm/yr)
        </text>
      </g>

      <Arrow x1={300} y1={84} x2={300} y2={100} />

      <FlowBox x={200} y={102} w={200} h={44} title="Boundary windbreak" sub="reduces wind-driven evaporation" />

      <Arrow x1={300} y1={160} x2={300} y2={180} />

      <FlowBox x={200} y={182} w={200} h={44} title="Contour recharge trenches" sub="perimeter + pond ring" />

      <Arrow x1={412} y1={204} x2={470} y2={204} />
      <FlowBox x={476} y={184} w={150} h={40} title="soil infiltration" />

      <Arrow x1={300} y1={240} x2={300} y2={260} />

      <text x={80} y={252} fontSize={9.5} fill={palette.paperDim}>
        land-catchment runoff
      </text>
      <Arrow x1={120} y1={262} x2={196} y2={272} />
      <FlowBox x={200} y={262} w={200} h={44} title="FARM POND" sub="40 × 50 × 6 ft · ≈3.4 lakh L" fill={palette.pondDim} />

      <Arrow x1={300} y1={320} x2={300} y2={340} />

      <FlowBox x={200} y={342} w={200} h={36} title="Borewell (top-up)" />

      <Arrow x1={300} y1={392} x2={300} y2={410} />

      <FlowBox x={200} y={412} w={200} h={36} title="Header Tank (8 ft stand)" />

      <Arrow x1={300} y1={462} x2={170} y2={486} />
      <Arrow x1={300} y1={462} x2={450} y2={486} />
      <Arrow x1={300} y1={462} x2={730} y2={486} />

      {subMains.map((main) => (
        <FlowBox key={main.title} x={main.x} y={488} w={220} h={56} title={main.title} sub={main.sub} fill={palette.canopyDark} />
      ))}

      <Arrow x1={170} y1={558} x2={170} y2={578} />
      <Arrow x1={450} y1={558} x2={450} y2={578} />
      <Arrow x1={730} y1={558} x2={730} y2={578} />

      <FlowBox x={60} y={580} w={780} h={34} title="Jeevamrutham fertigation blended into drip line" fill={palette.soil} />

      <circle cx={120} cy={332} r={3} fill={layerTints.ground} />
      <circle cx={820} cy={160} r={3} fill={layerTints.ground} />
    </svg>
  );
}
