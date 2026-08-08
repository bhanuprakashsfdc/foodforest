import type { Layer, LayerCrop } from "@/lib/data/layers";

function renderCrops(crops: LayerCrop[]) {
  return crops.map((crop, i) => (
    <span key={crop.name}>
      {i > 0 && ", "}
      {crop.name}
      {crop.note && ` (${crop.note})`}
      {crop.trial && <em> ({crop.trial})</em>}
    </span>
  ));
}

interface LayerListProps {
  layers: Layer[];
}

/**
 * Server-rendered layer breakdown. Hovering a row lights up its band on the
 * edge ribbon via the `.shell:has(...)` rules in globals.css — no JS needed.
 */
export function LayerList({ layers }: LayerListProps) {
  return (
    <ul className="layer-list">
      {layers.map((layer) => (
        <li key={layer.bandIndex} className="layer-row" data-layer={layer.bandIndex}>
          <div
            className="layer-swatch"
            style={{ background: layer.color, color: layer.textColor }}
          >
            Layer {layer.bandIndex + 1}
            <br />
            {layer.name}
          </div>
          <div className="layer-body">
            <h4>{layer.height}</h4>
            <div className="meta">{layer.meta}</div>
            <p>{renderCrops(layer.crops)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
