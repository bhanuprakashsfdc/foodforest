import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { LayerList } from "@/components/LayerList";
import { DataTable } from "@/components/DataTable";
import { Cta } from "@/components/Cta";
import { LayerPlan } from "@/components/diagrams/LayerPlan";
import { layerCropsText, layers } from "@/lib/data/layers";

export const metadata: Metadata = {
  title: "Five Layers",
  description:
    "Palekar's five-layer model in one list — emergent, canopy, small trees, shrubs, and ground/climbers, each with mature height and spacing.",
};

const whyItWorks =
  "Each layer occupies a different height, root depth, and light requirement, so a 25 ft × 25 ft patch of ground supports an emergent coconut, a canopy mango beneath it, a guava beneath that, curry leaf at knee height, and turmeric at the soil line — all at once, without one starving the others of sun or water. It's the same principle a natural forest already runs on; SPNF just makes it edible.";

export default function FiveLayersPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Section 02"
        title="Five-Layer Classification"
        dek="Palekar's model in one list — hover a row to see its band light up on the ribbon at the edge of the screen."
      />

      <Section eyebrow="The plan" title="Palekar's five layers, one footprint">
        <LayerPlan />
        <p style={{ color: "var(--paper-dim)", marginTop: 16 }}>
          Representative canopy trees drawn to scale in feet. The full crop list for every
          layer — including trial plantings — is in the reference table below.
        </p>
      </Section>

      <Section alt eyebrow="Reference">
        <DataTable
          caption="Five-layer classification with height, spacing, tier role, and every crop"
          headers={["Layer", "Height", "Spacing", "Tier role", "Crops"]}
          rows={layers.map((layer) => [
            `Layer ${layer.bandIndex + 1} — ${layer.name}`,
            layer.heightFt,
            layer.spacing,
            layer.meta,
            layerCropsText(layer),
          ])}
          wrapCells={[4]}
        />
      </Section>

      <Section>
        <LayerList layers={layers} />
      </Section>

      <Section
        alt
        eyebrow="Why it works"
        title="Five tiers sharing one column of light"
        lead={<p style={{ maxWidth: 680, color: "var(--paper-dim)" }}>{whyItWorks}</p>}
      >
        <Cta href="/crop-directory">See every crop&apos;s climate score →</Cta>
      </Section>
    </>
  );
}
