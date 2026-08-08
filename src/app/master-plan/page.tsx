import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { DataTable } from "@/components/DataTable";
import { Cta } from "@/components/Cta";
import { FarmMap } from "@/components/diagrams/FarmMap";
import { LayerProfile } from "@/components/diagrams/LayerProfile";
import { GrowthTimeline } from "@/components/diagrams/GrowthTimeline";
import { growthNote, growthStages, zones } from "@/lib/data/masterPlan";
import { layers } from "@/lib/data/layers";

export const metadata: Metadata = {
  title: "Master Plan",
  description:
    "A 220 × 198 ft plot (43,560 sq ft) organized into six working zones around a central pond, with a full-perimeter windbreak.",
};

const layerCropsText = (bandIndex: number) =>
  layers[bandIndex].crops
    .map(
      (c) =>
        `${c.name}${c.trial ? ` (${c.trial})` : ""}${c.note ? ` (${c.note})` : ""}`
    )
    .join(", ");

export default function MasterPlanPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 01"
        title="Master Farm Diagram"
        dek="A 220 × 198 ft plot (43,560 sq ft) organized into six working zones around a central pond, with a full-perimeter windbreak."
      />

      <Section eyebrow="Top view" title="Layout, zones & orientation">
        <FarmMap />
      </Section>

      <Section alt eyebrow="Zone key">
        <DataTable
          caption="Zone-by-zone reference with placement, size, and purpose"
          headers={["Zone", "Placement", "Size", "Purpose"]}
          rows={zones.map((zone) => [zone.num, zone.location, zone.size, zone.desc])}
          wrapCells={[3]}
        />
      </Section>

      <Section eyebrow="Cross section" title="Five layers, one footprint">
        <LayerProfile />
        <DataTable
          caption="Five-layer cross-section classification with height, spacing, and crops"
          headers={["Layer", "Height & spacing", "Tier role", "Representative crops"]}
          rows={layers.map((layer) => [
            `Layer ${layer.bandIndex + 1} — ${layer.name}`,
            layer.height,
            layer.meta,
            layerCropsText(layer.bandIndex),
          ])}
          wrapCells={[3]}
        />
        <p>
          <Cta href="/five-layers" ghost>
            See full layer classification →
          </Cta>
        </p>
      </Section>

      <Section
        alt
        eyebrow="Growth over time"
        title="Canopy closure, year 1 → year 10"
        lead={<p style={{ maxWidth: 640, color: "var(--paper-dim)" }}>{growthNote}</p>}
      >
        <GrowthTimeline />
        <DataTable
          caption="Canopy closure milestones and farm priorities by year"
          headers={["Stage", "Milestone", "Farm priority"]}
          rows={growthStages.map((stage) => [stage.year, stage.milestone, stage.priority])}
          wrapCells={[1, 2]}
        />
        <Cta href="/water-soil">Continue to Water & Soil →</Cta>
      </Section>
    </>
  );
}
